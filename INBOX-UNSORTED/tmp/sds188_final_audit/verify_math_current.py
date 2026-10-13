#!/usr/bin/env python3
"""Independent calculations for the current A1S2 companion workbook."""

from pathlib import Path

SOURCE = Path(__file__).resolve().parents[2] / "90_DEVELOPMENT_ARCHIVE/AUDIT_TOOLING_AND_RENDERS/audit_work/verify_math.py"
WORKBOOK = Path(__file__).resolve().parents[2] / "00_FINAL_USE/SDS188_A1S2_2026_Excel_Practice_Companion.xlsx"

code = SOURCE.read_text(encoding="utf-8")
code = code.replace(
    'BOOK = Path("/Users/nicole/Downloads/SDS188_A1S2_2026_Excel_Practice_Companion.xlsx")',
    f"BOOK = Path({str(WORKBOOK)!r})",
)
exec(compile(code, str(SOURCE), "exec"), {"__name__": "__main__"})
