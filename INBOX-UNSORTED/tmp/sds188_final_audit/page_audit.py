#!/usr/bin/env python3
"""Compute print-page image metrics and build labelled contact sheets."""

from __future__ import annotations

import argparse
import csv
import hashlib
import json
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps


def page_number(path: Path) -> int:
    digits = "".join(ch for ch in path.stem if ch.isdigit())
    return int(digits or 0)


def average_hash(image: Image.Image, size: int = 24) -> str:
    small = image.convert("L").resize((size, size), Image.Resampling.LANCZOS)
    pixels = list(small.getdata())
    mean = sum(pixels) / len(pixels)
    bits = "".join("1" if px < mean else "0" for px in pixels)
    return f"{int(bits, 2):0{len(bits) // 4}x}"


def metrics(path: Path) -> dict:
    image = Image.open(path).convert("RGB")
    gray = image.convert("L")
    hist = gray.histogram()
    total = image.width * image.height
    count_lt = lambda limit: sum(hist[:limit])
    nonwhite = count_lt(245)
    dark40 = count_lt(40)
    dark80 = count_lt(80)
    dark160 = count_lt(160)
    bbox = ImageOps.invert(gray).point(lambda p: 255 if p > 10 else 0).getbbox()
    if bbox:
        left, top, right, bottom = bbox
        margins = {
            "left_px": left,
            "top_px": top,
            "right_px": image.width - right,
            "bottom_px": image.height - bottom,
        }
    else:
        margins = {"left_px": image.width, "top_px": image.height, "right_px": image.width, "bottom_px": image.height}
    return {
        "page": page_number(path),
        "file": str(path),
        "width": image.width,
        "height": image.height,
        "mean_gray": round(sum(i * n for i, n in enumerate(hist)) / total, 3),
        "nonwhite_pct": round(100 * nonwhite / total, 4),
        "dark_lt40_pct": round(100 * dark40 / total, 4),
        "dark_lt80_pct": round(100 * dark80 / total, 4),
        "dark_lt160_pct": round(100 * dark160 / total, 4),
        "blank_candidate": nonwhite / total < 0.0025,
        "dark_candidate": dark80 / total > 0.18 or dark160 / total > 0.30,
        "edge_candidate": min(margins.values()) < 8,
        "average_hash": average_hash(image),
        "png_sha256": hashlib.sha256(path.read_bytes()).hexdigest(),
        **margins,
    }


def make_contacts(rows: list[dict], out_dir: Path, columns: int = 4, rows_per_sheet: int = 4) -> list[str]:
    out_dir.mkdir(parents=True, exist_ok=True)
    cell_w, cell_h = 300, 430
    label_h = 34
    per_sheet = columns * rows_per_sheet
    outputs = []
    font = ImageFont.load_default()
    for sheet_idx, start in enumerate(range(0, len(rows), per_sheet), start=1):
        batch = rows[start:start + per_sheet]
        canvas = Image.new("RGB", (columns * cell_w, rows_per_sheet * (cell_h + label_h)), "#d9d9d9")
        draw = ImageDraw.Draw(canvas)
        for idx, row in enumerate(batch):
            col = idx % columns
            r = idx // columns
            x = col * cell_w
            y = r * (cell_h + label_h)
            im = Image.open(row["file"]).convert("RGB")
            thumb = ImageOps.contain(im, (cell_w - 12, cell_h - 12), Image.Resampling.LANCZOS)
            tx = x + (cell_w - thumb.width) // 2
            ty = y + (cell_h - thumb.height) // 2
            canvas.paste(thumb, (tx, ty))
            flags = "".join([
                " B" if row["blank_candidate"] else "",
                " D" if row["dark_candidate"] else "",
                " E" if row["edge_candidate"] else "",
            ])
            label = f"p{row['page']} ink={row['nonwhite_pct']:.1f}% dark={row['dark_lt80_pct']:.1f}%{flags}"
            draw.rectangle((x, y + cell_h, x + cell_w, y + cell_h + label_h), fill="white")
            draw.text((x + 6, y + cell_h + 9), label, fill="black", font=font)
        out = out_dir / f"contact-{sheet_idx:02d}.jpg"
        canvas.save(out, quality=90)
        outputs.append(str(out))
    return outputs


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("page_dir", type=Path)
    parser.add_argument("out_dir", type=Path)
    args = parser.parse_args()
    paths = sorted(args.page_dir.glob("*.png"), key=page_number)
    rows = [metrics(path) for path in paths]
    args.out_dir.mkdir(parents=True, exist_ok=True)
    duplicates = {}
    for row in rows:
        duplicates.setdefault(row["average_hash"], []).append(row["page"])
    duplicate_groups = [pages for pages in duplicates.values() if len(pages) > 1]
    contacts = make_contacts(rows, args.out_dir / "contacts")
    report = {
        "page_count": len(rows),
        "blank_candidates": [r["page"] for r in rows if r["blank_candidate"]],
        "dark_candidates": [r["page"] for r in rows if r["dark_candidate"]],
        "edge_candidates": [r["page"] for r in rows if r["edge_candidate"]],
        "duplicate_hash_groups": duplicate_groups,
        "contacts": contacts,
        "pages": rows,
    }
    (args.out_dir / "report.json").write_text(json.dumps(report, indent=2), encoding="utf-8")
    with (args.out_dir / "metrics.csv").open("w", newline="", encoding="utf-8") as stream:
        writer = csv.DictWriter(stream, fieldnames=rows[0].keys())
        writer.writeheader()
        writer.writerows(rows)
    print(json.dumps({k: v for k, v in report.items() if k != "pages"}, indent=2))


if __name__ == "__main__":
    main()
