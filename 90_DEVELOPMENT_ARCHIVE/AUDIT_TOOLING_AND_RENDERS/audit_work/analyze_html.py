#!/usr/bin/env python3
"""Read-only structural and embedded-asset audit for the exact HTML candidate."""

from __future__ import annotations

import base64
import hashlib
import json
import re
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path


HTML = Path("/Users/nicole/Downloads/SDS188_A1S2_2026_MasterLearningSystem_v1_3_1_EXCEL_EXECUTION_PATCHED_CANDIDATE.html")
OUT = Path("audit_work/html_audit")
OUT.mkdir(parents=True, exist_ok=True)
raw = HTML.read_bytes()
text = raw.decode("utf-8")


class AuditParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.ids = []
        self.nav = []
        self.labels = []
        self.scripts = []
        self.styles = 0
        self.external_links = []
        self.images = []
        self.html_lang = None
        self.title_parts = []
        self.in_title = False
        self.current_script = None

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "html":
            self.html_lang = a.get("lang")
        if a.get("id"):
            self.ids.append(a["id"])
        if tag == "button" and a.get("data-view"):
            self.nav.append({"target": a["data-view"], "label": ""})
        if tag == "label" and a.get("for"):
            self.labels.append(a["for"])
        if tag == "script":
            self.current_script = {"attrs": a, "data": []}
            self.scripts.append(self.current_script)
        if tag == "style":
            self.styles += 1
        if tag == "link" and a.get("href"):
            self.external_links.append(a["href"])
        if tag == "img" and a.get("src"):
            self.images.append(a["src"])
        if tag == "title":
            self.in_title = True

    def handle_endtag(self, tag):
        if tag == "script":
            self.current_script = None
        if tag == "title":
            self.in_title = False

    def handle_data(self, data):
        if self.current_script is not None:
            self.current_script["data"].append(data)
        if self.in_title:
            self.title_parts.append(data)


parser = AuditParser()
parser.feed(text)


def digest(data: bytes) -> dict:
    return {
        "size": len(data),
        "sha256": hashlib.sha256(data).hexdigest(),
        "md5": hashlib.md5(data).hexdigest(),
    }


ids = parser.ids
id_counts = Counter(ids)
duplicate_ids = {key: value for key, value in id_counts.items() if value > 1}

nav = [{**item, "exists_static": item["target"] in id_counts} for item in parser.nav]
labels = [{"for": target, "exists_static": target in id_counts} for target in parser.labels]

scripts = parser.scripts
script_files = []
for idx, script in enumerate(scripts, start=1):
    attrs = script["attrs"]
    if attrs.get("src"):
        script_files.append({"index": idx, "src": attrs.get("src")})
        continue
    out = OUT / f"inline-script-{idx}.js"
    out.write_text("".join(script["data"]), encoding="utf-8")
    script_files.append({"index": idx, "id": attrs.get("id"), "path": str(out)})

asset_specs = [
    ("WORKBOOK_B64", "embedded-workbook.xlsx", Path("/Users/nicole/Downloads/SDS188_A1S2_2026_Excel_Practice_Companion.xlsx")),
    ("FORMULA_B64", "embedded-formula-sheet.pdf", Path("/Users/nicole/Downloads/A1S2_2026_Formula_Sheet.pdf")),
]
assets = []
for variable, name, comparison in asset_specs:
    match = re.search(rf"const\s+{variable}\s*=\s*'([^']+)'", text)
    if not match:
        assets.append({"variable": variable, "error": "not found"})
        continue
    data = base64.b64decode(match.group(1), validate=True)
    out = OUT / name
    out.write_bytes(data)
    item = {"variable": variable, "output": str(out), "embedded": digest(data)}
    if comparison.exists():
        comparison_data = comparison.read_bytes()
        item["comparison_path"] = str(comparison)
        item["comparison"] = digest(comparison_data)
        item["byte_identical"] = data == comparison_data
    assets.append(item)

all_source_ids = set(re.findall(r"\bid=[\"']([^\"']+)[\"']", text))
get_id_refs = sorted(set(re.findall(r"getElementById\([\"']([^\"']+)[\"']\)", text)))
selector_id_refs = sorted(set(re.findall(r"#[A-Za-z][A-Za-z0-9_-]+", text)))

report = {
    "identity": digest(raw),
    "filename": HTML.name,
    "title": "".join(parser.title_parts).strip() or None,
    "doctype_present": text.lstrip().lower().startswith("<!doctype html>"),
    "html_lang": parser.html_lang,
    "scripts": script_files,
    "script_count": len(scripts),
    "style_count": parser.styles,
    "static_id_count": len(ids),
    "duplicate_ids": duplicate_ids,
    "navigation": nav,
    "label_refs_missing_static": [item for item in labels if not item["exists_static"]],
    "getElementById_refs_not_literal_anywhere": [x for x in get_id_refs if x not in all_source_ids],
    "selector_id_reference_count": len(selector_id_refs),
    "external_scripts": [x for x in script_files if "src" in x],
    "external_links": parser.external_links,
    "images": parser.images,
    "assets": assets,
    "keyword_counts": {
        key: len(re.findall(key, text, flags=re.IGNORECASE))
        for key in ["candidate", "debug", "todo", "console\\.", "source_ready", "source_partial", "hold", "2026", "confirmed", "official", "assessment", "excel", "emslearn", "formula sheet"]
    },
}

(OUT / "report.json").write_text(json.dumps(report, indent=2), encoding="utf-8")
print(json.dumps(report, indent=2))
