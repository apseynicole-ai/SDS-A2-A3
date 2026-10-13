# SDS188 A1S2 2026 — Hostile Print-Freeze Audit

Audit date: 24 August 2026  
Audit target: `SDS188_A1S2_2026_COMPLETE_OFFLINE_PRINT_PACK.pdf`  
Result: **freeze denied**

## A. Artifact identity

| Artifact | Bytes | SHA-256 |
|---|---:|---|
| `00_FINAL_USE/SDS188_A1S2_2026_MasterLearningSystem_FINAL.html` | 985,866 | `cbeff839116f38860a0a12ffbfd097da1b8401c71dbdddc514f792370088b6c4` |
| `SDS188_A1S2_2026_COMPLETE_OFFLINE_PRINT_PACK (1).docx` | 677,495 | `7a7850e8b0e22e8b854a0a6e9f255ab159d617e2772197c95fa28295ef69c0b3` |
| `SDS188_A1S2_2026_COMPLETE_OFFLINE_PRINT_PACK.pdf` | 1,511,136 | `6aafc2b041e44530620070e8c3a3f61a2bd3661ae4c1c79dfea730f59dd5bcb3` |
| `00_FINAL_USE/A1S2_2026_Formula_Sheet.pdf` | 73,556 | `f885898e7fa4836064f56cc55b9076c956a238933f276b9af81c5f398af61dd3` |
| `00_FINAL_USE/SDS188_A1S2_2026_Excel_Practice_Companion.xlsx` | 16,276 | `ac687d42603b665064837d5bee872e9675eb9f47530f93abbcc32071b9f03130` |

Reference direct-browser PDF: `00_FINAL_USE/SDS188_A1S2_2026_MasterLearningSystem_FINAL_Print.pdf`, 461,013 bytes, SHA-256 `cff098d0991a8e25fc52860229a74b5d8e22192a4e3234db428b40029e9e7a0d`.

## B. Provenance

**PASS — PDF provenance established**

The 63-page PDF is not a direct browser print of the HTML. It is a transformed Word print pack:

`FINAL HTML` → selected guided-lesson data and print material → `COMPLETE_OFFLINE_PRINT_PACK.docx` → LibreOffice PDF export.

Evidence:

- The exact HTML hash is declared in the DOCX and matches the supplied final HTML.
- The selected HTML lesson set is Chapter 6: 10 lessons; Chapter 7: 13; Chapter 8: 13; Chapter 9: 7.
- All 1,098 substantive source fields from those 43 selected HTML lessons are represented in the DOCX: 1,098 represented, 0 missing, 100% normalized character coverage.
- A fresh independent export of the supplied DOCX produced the same 63-page order and structure. The supplied and fresh PDFs each contain 136,642 normalized extracted characters. The small extraction-only glyph-map differences are caused by LibreOffice producer versions; full-resolution visual inspection shows the mathematical glyphs correctly.
- Added in the Word transformation: cover/scope pages, method map, quick reference, embedded official formula sheet, t table, answer key, and four scratch pages.
- Removed/transformed: app navigation and interactive controls; the lesson data are expanded into paper lessons; Chapter 9 lessons 9.8–9.10 are omitted under the pack’s asserted slide-51 rule.

This proves origin and transformation. It does **not** prove that the transformation’s claimed Chapter 9 scope rule is official or correct.

## C. Coverage summary

| Chapter | Assessed scope used in the pack | Coverage | Material defects |
|---|---|---:|---:|
| 6 | Full current Chapter 6 | **Present but defective** | 2 |
| 7 | Full sampling-distributions body; FPC taught with scope warning | **Present + correct** | 0 |
| 8 | C8.01–C8.68 core; totals/auditing C8.69–C8.75 on HOLD | **Present + correct for stated core** | 0 |
| 9 | Asserted Slides 1–51 / lessons 9.1–9.7 | **Uncertain — verify** | 1 blocker |

### Compact coverage ledger

| Chapter | Concept group | Classification | Evidence/result |
|---|---|---|---|
| 6 | Continuous vs discrete; density vs probability; area; point probability | PRESENT + CORRECT | Lesson 6.1 |
| 6 | Normal notation, μ/σ effects, Z, below/above/between, complements | PRESENT + CORRECT | Lessons 6.2–6.3 |
| 6 | Inverse normal / percentile boundary | PRESENT + CORRECT | Lesson 6.4; syntax and tail conversion correct |
| 6 | Central symmetric interval for an individual normal X | **MISSING** | Official Tutorial 6 Q3(d) requires the 60% central interval; only the sample-mean version appears in Chapter 7 |
| 6 | Normality: mean/median/mode, empirical rule, graphs, normal probability plot | PRESENT + CORRECT | Lessons 6.5–6.6 |
| 6 | Course skewness/kurtosis normality check | **PRESENT BUT DEFECTIVE** | Final HTML summary and Tutorial 6 solutions use it; the offline lesson omits the statistic and the course `(-0.5, 0.5)` rule |
| 6 | Uniform distribution | PRESENT + CORRECT | Lesson 6.7 |
| 6 | Exponential distribution, rate/units, inverse boundary | PRESENT + CORRECT | Lessons 6.8–6.9 |
| 6 | Normal approximation to binomial and continuity correction | PRESENT + CORRECT | Lesson 6.10 |
| 7 | Population/sample/statistic/sampling distribution/unbiasedness | PRESENT + CORRECT | Lessons 7.1–7.2 |
| 7 | X̄ centre, variance/SE, n effect, X vs X̄, probabilities | PRESENT + CORRECT | Lessons 7.3–7.5 |
| 7 | Inverse and central sample-mean limits | PRESENT + CORRECT | Lesson 7.6 |
| 7 | CLT meaning, course thresholds, non-claims | PRESENT + CORRECT | Lesson 7.7 |
| 7 | Unknown-σ Student-t sampling route | PRESENT + CORRECT | Lesson 7.8 |
| 7 | Sample proportion centre/SE/conditions/probabilities/inverse limits | PRESENT + CORRECT | Lessons 7.9–7.10 |
| 7 | Two independent sample means | PRESENT + CORRECT | Lesson 7.11 |
| 7 | FPC and Tutorial 7 crossover | PRESENT + CORRECT | Lesson 7.12; retained as scope-cautioned bridge |
| 8 | Estimation foundations and estimator characteristics | PRESENT + CORRECT | Lessons 8.1–8.2 |
| 8 | Confidence interpretation, α, margin of error | PRESENT + CORRECT | Lesson 8.2 |
| 8 | μ CI, σ known | PRESENT + CORRECT | Lesson 8.3 |
| 8 | t distribution/table/df and μ CI, σ unknown | PRESENT + CORRECT | Lessons 8.4–8.5 |
| 8 | π confidence interval and conditions | PRESENT + CORRECT | Lesson 8.6 |
| 8 | Sample size for mean/proportion; conservative .5; round up | PRESENT + CORRECT | Lessons 8.7–8.8 |
| 8 | FPC intervals and finite-population sample-size adjustment | PRESENT + CORRECT | Lessons 8.9–8.10 |
| 8 | Bootstrap concept, percentile route, workbook workflow | PRESENT + CORRECT | Lessons 8.11–8.12; the pack correctly discloses the unresolved 250-resample cutoff convention |
| 8 | Confidence intervals for totals / auditing | OUT OF SCOPE / HOLD | C8.69–C8.75 excluded under the retained source gate |
| 9 | Slides 1–15: hypotheses, H0/H1, decision language | PRESENT + CORRECT | Lesson 9.1 |
| 9 | Slides 16–19: Type I/II, α/β/basic power factors | PRESENT + CORRECT | Lesson 9.2 |
| 9 | Slides 20–22: tails and rejection regions | PRESENT + CORRECT | Lesson 9.3 |
| 9 | Slides 23–42: known-σ Z, critical values, p-values, CI bridge | PRESENT + CORRECT | Lessons 9.4–9.6 |
| 9 | Slides 43–51: unknown-σ t test and CI bridge | PRESENT + CORRECT | Lesson 9.7 |
| 9 | Slides 52–79: one-tail worked procedures, proportion tests, power/planning/ethics | **UNCERTAIN — VERIFY** | Omitted solely because of an unsupported “slides 1–51” claim |
| 9 | 2026 practice-test Q4 numeric power workflow | **UNCERTAIN — VERIFY** | Present in the official practice test and full HTML, omitted from the offline pack under the same unverified boundary |

## D. Excel and formula reconciliation

- Audited functions include `NORM.DIST`, `NORM.S.DIST`, `NORM.INV`, `NORM.S.INV`, `T.DIST`, `T.DIST.2T`, `T.INV`, `T.INV.2T`, `EXPON.DIST`, `COUNT`, `AVERAGE`, `STDEV.S`, `SQRT`, `ROUNDUP`, `SMALL`, and `LARGE`.
- Cumulative arguments, complements, two-tail handling, σ-versus-variance, SE inputs, and returned-value interpretations are correct in the included routes.
- Independent recomputation of the eight companion-workbook drills reproduced the recorded methods/results, including t critical value, proportion CI, power, ordinary/finite sample sizes, and Student-t sampling probability.
- The official formula sheet is embedded clearly on page 4. Full-resolution formula-heavy page checks found no lost bars, hats, roots, exponents, denominators, tails, degrees of freedom, or FPC symbols.

## E. Print audit

| Check | Result |
|---|---:|
| Total pages | 63 |
| Effectively blank / layout-waste pages | **1: page 45** |
| Clipped pages | 0 |
| Text outside margins | 0 detected |
| Black/dark problem pages | 0 |
| Large unnecessary dark areas | 0 |
| Formula-rendering problems | 0 visually detected |
| Accidental duplicates | 0; pages 60–63 are intentionally identical scratch pages |
| HTML guided lessons available | 46 |
| Guided lessons represented in PDF | 43 |
| Guided lessons omitted | 3: 9.8–9.10, scope status unverified |
| Altered/corrupted among the 43 selected lessons | 0; 1,098/1,098 substantive fields represented |

Every page was rasterised and inspected through four contact sheets. Flagged and high-risk pages were then inspected at full resolution, including chapter starts, the embedded formula sheet, formula-heavy pages, FPC, t table, Chapter 9 worked pages, the end of the answer key, and scratch pages.

Page 45 contains only the header/footer and one orphaned retrieval-notes rule carried over from Lesson 8.12. It is a genuine page-break/layout defect.

The PDF is white/light and printer-safe throughout. No black page, dark CSS background, long black band, clipped formula, browser UI, or missing mathematical glyph was found.

## F. Changes actually made

None. The audit stopped before mutation because the missing Chapter 9 authority changes whether lessons 9.8–9.10 and the practice-test power method must be included. Making a final pack before resolving that boundary would risk freezing the wrong syllabus.

## G. Residual uncertainties and required repair set

### BLOCKER

1. **The exact Chapter 9 A1S2 boundary is not verifiable from the supplied official files.** The retained EMSLearn announcement transcription covers dates, password and similar quiz rules only. The 2026 Module Framework says A1S2 is computer-based and primarily Excel, with details to be confirmed. Neither contains “Slides 1–51.” The only files asserting that rule are the newly generated offline DOCX/PDF themselves. This is circular evidence.
2. **The conflict is material.** The supplied official 2026 practice test includes a numeric power question, and the signed-off full HTML teaches it in Lesson 9.10. The offline PDF excludes that method solely under the unsupported slide-51 rule.

### HIGH

3. Add Tutorial 6 Q3(d)’s central symmetric interval method to the Chapter 6 normal/inverse-normal lesson, explicitly using σ rather than sample-mean SE.
4. Restore the course normality check for skewness and kurtosis, including the supplied Tutorial 6 solution rule that values within `(-0.5, 0.5)` are treated as approximately normal for this course, while retaining the existing multi-evidence warning.

### MEDIUM

5. Remove the orphan retrieval line that creates the effectively blank page 45, then regenerate and rerun the 63-page visual audit.

### Required missing source

Supply the dated official EMSLearn/lecturer screenshot, export, or verbatim notice that states the Chapter 9 A1S2 boundary. Once supplied, the smallest repair can be selected:

- if Slides 1–51 is confirmed: retain Lessons 9.1–9.7 and document the source/date;
- if it is not confirmed: restore the relevant Chapter 9 lesson(s), especially the practice-test numeric power workflow.

## FINAL VERDICT

# ❌ DO NOT PRINT / DO NOT FREEZE

The PDF’s origin is established and its physical rendering is generally strong, but the assessed Chapter 9 boundary is not source-verifiable, the official practice-test power route may therefore be missing, two Chapter 6 tutorial-aligned methods need repair, and page 45 fails the clean-print gate.
