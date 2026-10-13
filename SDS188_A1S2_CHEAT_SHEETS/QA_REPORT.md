# SDS188 A1S2 cheat sheets - bounded final revision QA

## Final result

- Overall QA: **PASS**
- Monochrome print QA: **PASS**
- Individual topic sheets: **36**, each exactly one A4 page
- Final PDFs: **39**
- Combined PDF: **38 pages** (execution card + contents + 36 topic sheets)
- Total PDF pages across all deliverables: **76**
- Rendered and inspected pages: **76**
- Automated PASS assertions: **769**
- Independent numerical assertions: **62**
- Excel function calls/signatures checked: **96**
- Bookmark destinations checked: **42**

## Repair checklist

| Repair | Result |
|---|---|
| Chapter 6 Normal notation uses `X ~ N(mu, sigma squared)` conceptually, with visible Greek notation in PDFs; Excel is explicitly labelled as taking SD, not variance | PASS |
| Ambiguous `N(mu,sigma)` numerical examples replaced by variance-parameter course notation | PASS |
| Strict `> 5` conditions applied to Ch6 normal approximation, Ch7 sampling proportion and Ch8 proportion CI | PASS |
| Ch7 FPC recomputed as `SQRT(450/499)=0.9496` in both occurrences | PASS |
| Ch7 FPC carries the conspicuous monochrome `PROVISIONAL / LEGACY-SUPPORTED BRIDGE` warning and C7.52-C7.58 safeguard explanation | PASS |
| Chapter 8 footers identify the supplied 72-page deck correctly and do not confuse C8 skill IDs with slide numbers | PASS |
| Bootstrap footer cites Chapter 8 pp. 64-72, the dedicated section 8.8 extract and static 2026 Practice Test Q1 format evidence | PASS |
| C8.69-C8.75 wording changed to HOLD - A1 scope unconfirmed; excluded unless explicitly activated | PASS |
| Chapter 9 tails sheet states the exact pre-slide-51 recognition boundary without adding later worked procedures | PASS |
| Chapter 9 error/power sheet uses `matching confidence coefficient = 1-alpha`, qualifies relationships with `ALL ELSE FIXED`, and rejects the alpha-plus-beta misconception | PASS |
| Chapter 8 method tree no longer implies that small n automatically requires bootstrap | PASS |
| A1S2 Execution Card added with EMSLearn, Excel-discipline and final-entry checks | PASS |
| Chapter 8 bootstrap page upgraded with the nine-step workbook workflow and no fabricated universal 250-resample cutoff rule | PASS |
| Visible statistical formulas use course symbols; literal Excel formulas remain ASCII | PASS |
| Positive `z*` and `t*` notation standardised for confidence intervals; signed criticals retained on rejection-region sheets | PASS |
| Body/formula text enlarged and every sheet now includes a compact monochrome visual or decision workflow | PASS |
| Source footers revised to traceable chapter page ranges/tutorial/formula/master references | PASS |
| Combined pack has an index, visible page numbering and chapter/topic bookmarks | PASS |
| Scope card rebuilt with Friday/Saturday actions, diagnostic revision, priority order and live-AF rule | PASS |

## Hostile checks

- Every numerical tiny worked example was independently recomputed. One intermediate-rounding issue found during QA on the Chapter 8 finite-population CI example was repaired: using full precision gives margin `.0715` and CI `(.2285,.3715)`.
- Excel argument counts and cumulative flags were checked for the functions used, including `NORM.DIST`, `NORM.S.DIST`, `NORM.INV`, `NORM.S.INV`, `EXPON.DIST`, `T.DIST`, `T.INV.2T`, `T.DIST.2T`, `AVERAGE`, `COUNT`, `STDEV.S`, `SQRT` and `ROUNDUP`.
- Global banned-phrase scans passed for `at least about 5`, `Normal(mu,sigma)`, `slides 1-68`, and the former definitive Chapter 8 `not examinable` wording.
- No C8.69-C8.75 content leaked into the 11 Chapter 8 core topic sheets.
- No Chapter 9 post-slide-51 method leaked into the eight Chapter 9 topic sheets.
- Every final PDF page was rendered. Contact-sheet and full-size inspection found no clipping, overlap, broken statistical symbols or broken formula wrapping.
- Every rendered output page was pixel-checked: all pixels have equal red, green and blue channels. There is no intentional chromatic colour.
- Grey fills are light, text and borders remain high contrast, diagrams use labels/line styles/hatching, and dark coverage is sparse for toner efficiency.
- The combined PDF exposes 42 working destinations: execution card, contents, four chapter bookmarks and 36 topic bookmarks.
- No live Assessment Further question was inspected, copied or reconstructed. Only static official materials and static practice-format evidence were used.
- Pre-build and post-build SHA-256 hashes match for the frozen master, formula sheet, official Chapter 6-9 decks, bootstrapping extract and Tutorials 6-9.

**MONOCHROME PRINT QA: PASS**

**FINAL QA: PASS - bounded revision complete.**
