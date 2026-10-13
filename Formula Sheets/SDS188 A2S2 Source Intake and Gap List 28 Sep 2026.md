# SDS188 A2S2 — Source Intake and Gap List
**Date:** 28 September 2026
**Purpose:** Intake the latest transcript/note batch, deduplicate it against the existing project, and identify what still needs to be found versus what should be created internally.

## 1. Latest intake — transcript classification

| Uploaded file | SHA-256 prefix | Classification | Canonical treatment |
|---|---|---|---|
| SDS 26 AUG.vtt | ae05e22fad27 | Chapter 9 lecture / A1-scope announcement + study/exam guidance; useful A2 background but A1-specific sections must not control A2 | Keep one canonical copy only |
| SDS 26 AUG(1).vtt | ae05e22fad27 | Exact duplicate of SDS 26 AUG.vtt | Delete/archive duplicate |
| SDS 27 AUG.vtt | e8f0b00294cd | Tutorial 9 Part 1 / practical; A1-limited Tutorial 9 session | Keep, but mark A1-limited |
| SDS 28 AUG TRANSCRIPT.vtt | 4600bc0cb98b | A1 revision/practice-quiz lecture with some forward-looking A2 comments | Keep as secondary source only |
| SDS 03 SEOT TUT PART 2 .vtt | feaf8860e3c4 | Tutorial 9 continuation covering work skipped for A1, including upper-tail work and power | **High-value A2 Chapter 9 source** |
| SDS Monday 31_08 lecture transcript.vtt | 15e85adf6325 | Chapter 10 introduction: two-sample framework, independent means, pooled variance, df, CI/test link | **Core Chapter 10 source** |
| SDS Wednesday 02_09 lecture.vtt | acd770b20e2a | Chapter 10 continuation: two population means | **Core Chapter 10 source** |
| SDS Tuesday 15_09 lecture.vtt | 945a17179cb0 | Chapter 10: two population proportions | **Core Chapter 10 source** |
| SDS 17 SEPT .vtt | ccbe8600e207 | Tutorial 10 Part 1 / practical; worked two-sample questions, paired and proportions | **Core Tutorial 10 source** |
| SDS Friday 18_09 lecture .vtt | c11fb17a7bf6 | Chapter 10 wrap: two variances/F test, effect size; transition to Chapters 13–14 | **Core Chapter 10 source** |
| SDS Monday 21_09 lecture recording.vtt | 0f0fc10054a2 | Chapter 13 introduction: simple linear regression | **Core Chapter 13 source** |
| SDS September 22 Transcript .vtt | f2cacc49c27b | Chapter 13 continuation: estimated model, coefficient interpretation, r-squared/output reconstruction | **Core Chapter 13 source** |

### Deduplication conclusion
The two 26 August files are byte-identical. Keep one. The rest of the VTTs are unique within this batch.

Several of these hashes match transcripts already ingested earlier in the project under generic `Meeting with Stapelberg...` filenames. The newly named copies are better canonical filenames; do not retain both sets in the final source folder.

## 2. Latest intake — notes/PDF classification

| File | Status | Treatment |
|---|---|---|
| `Chapter 9.pdf` | **New high-value 2026 Chapter 9 note**. Contains one-sample mean/proportion testing, critical-value and p-value routes, full decision wording, Type I/II errors, power examples and questions. | Integrate as a primary Chapter 9 note source. |
| `CHAPTER 9 SUMMARY(1).pdf` | Previously ingested; useful one-page quick reference, but contains the known sigma-vs-s typo in the unknown-sigma t row. | Keep with an explicit typo warning; do not use as sole authority. |
| `EXCEL FORMULAS CHEAT SHEET(1).pdf` | Previously ingested supporting file. | Keep only in prep/verification resources; not an exam dependency. |
| `A1S2_2026_Formula_Sheet(4).pdf` | Previously ingested A1 formula sheet. Superseded for A2 by the official two-page A2S2 formula sheet. | Archive/reference only. |

## 3. Current A2S2 official-source coverage

### Chapter 7 — GOOD / sufficient
Already held: official slides, Tutorial 7, Tutorial 7 solutions, Chapter 7 online-topic/reference material and the existing certified Chapter 7 study pack.

**No urgent file hunting required.** Lecture recordings from July would be optional enrichment only.

### Chapter 8 — GOOD / sufficient
Already held: official slides, Tutorial 8, Tutorial 8 solutions, t table, finite-population material, bootstrapping material, confidence intervals for totals and existing A1/A2 study material.

**No urgent file hunting required.** July/August lecture recordings would be optional enrichment only.

### Chapter 9 — STRONG / now materially improved
Held: slides/tutorial/solutions from the project, one-page Chapter 9 summary, `Chapter 9.pdf`, Tutorial 9 practical material, 26 Aug, 27 Aug, 28 Aug and 3 Sep transcripts, plus the earlier-project 14/17/19/21/24 Aug lecture sequence.

`Chapter 9.pdf` materially closes a previous weakness because it contains full power calculations and explicit hypothesis-test conclusion wording.

### Chapter 10 — STRONG
Held: Chapter 10 slides, Tutorial 10, F tables, effect-size source, lecture sequence 31 Aug / 2 Sep / 15 Sep / 18 Sep, and Tutorial 10 Part 1 transcript (17 Sep).

The official resource page does not list an official Tutorial 10 solutions file. Therefore do not waste time searching indefinitely for a memo unless one is later posted.

### Chapter 13 — STRONG BUT STILL DEVELOPING
Held: Chapter 13 slides, Tutorial 11, regression data, 21 Sep and 22 Sep lecture transcripts.

A newly posted Group 1 resource explicitly lists **“Chapter 13 Assumptions of the linear model Part 1”** for the 28 September replacement lecture. This is now the highest-priority missing current source.

### Chapter 14 — PARTIAL / main remaining source gap
Held: A2S2 formula-sheet multiple-regression formulas, Tutorial 11 Q12, Chapter 10/13 transition comments, and indirect course guidance.

Still no dedicated Chapter 14 deck or Chapter 14 lecture transcript in the source set. Do not infer full Chapter 14 scope from advanced regression material outside SDS188.

## 4. Files that still need to be FOUND

### Priority 1 — find as soon as available
1. **28 Sep recording/transcript — `Chapter 13 Assumptions of the linear model Part 1`.**
2. **1 Oct practical recording/transcript** when EMSLearn posts it. The 28 Sep announcement says the Thursday practical is replaced by a recording.
3. **Any dedicated Chapter 14 slides/notes/recording** when they appear. This is the largest remaining content-source gap.
4. **Any A2S2 revision/practice assessment/past-paper-style paper or final revision announcement** released by staff.
5. **Any Tutorial 11 solution/memo** if one is posted later.

### Priority 2 — capture if posted, but do not chase aggressively
6. **29 Sep Tuesday lecture material** (recording, lecturer notes or screenshots) if available. The announcement says the lecture still takes place with a substitute lecturer, so a recording may not exist.
7. **2 Oct Friday lecture material** if available, for the same reason.
8. Any **Tutorial 10 solution/memo** only if staff later post one. Current resource listings show Tutorial 10 but no official solution file.

### Optional historical enrichment only
9. Chapter 7 lecture recordings: 20, 22, 24, 27, 29 July + Tutorial 7 Part 1/2.
10. Chapter 8 lecture recordings: 31 July; 3, 5, 7, 12 August + Tutorial 8 Part 1/2.

These are *not required* to continue the A2 build because slides, tutorials, solutions and existing validated Chapter 7–8 systems already provide strong coverage.

## 5. Files that should be CREATED internally

1. **Canonical Transcript Index + Hash Registry** — one row per recording with date, chapter/tutorial, source role, duration, hash and duplicate relationships.
2. **Cleaned Transcript Master Pack for Chapters 9, 10 and 13/14** — readable text versions of the VTTs, preserving timestamps for source traceability.
3. **Chapter 9 Source Reconciliation / Typo Guard** — explicitly record that the one-page Chapter 9 summary prints sigma in the unknown-sigma t statistic; use `s/sqrt(n)` from the full Chapter 9 material/course deck.
4. **Derived Tutorial 10 Memo** — complete written-exam solutions for Tutorial 10, clearly labelled `DERIVED — NOT OFFICIAL MEMO`, sourced to slides + lecture/practical transcripts.
5. **Derived Tutorial 11 Memo** — complete solutions, including Challenger output reconstruction and Q12 multiple-regression calculations, clearly labelled derived.
6. **Chapter 13/14 Known-Unknowns Tracker** — separate confirmed examinable content from material awaiting the new recordings/Chapter 14 sources.
7. **Updated A2S2 Source Inventory / Provenance Map** — replace the older v0.2 map and include the A2S2 announcement, current resource page, lecturer-page provenance, and these canonical transcripts.
8. **v0.5 Master Learning System candidate** — only after integrating the 28 Sep assumptions recording and any immediate Chapter 14 material. Do not create another micro-version before then unless a critical defect is discovered.
9. **External re-audit pack** — once v0.5 is frozen for audit, include the announcement, current resource-page capture, authoritative slides/tutorials/formula sheet, canonical transcripts, source inventory, and the candidate HTML. Exclude duplicate and A1-only clutter.

## 6. Do not search for / do not duplicate

- Another A1S2 formula sheet.
- Another Excel cheat-sheet copy.
- Another Chapter 9 one-page summary copy.
- Both copies of 26 Aug transcript.
- Generic `Meeting with Stapelberg...` copies when a date-labelled canonical transcript with the same hash exists.
- A made-up Chapter 14 slide deck. Wait for the actual SDS188 source or keep the section source-bounded.

## 7. Immediate next action

**Do not rebuild the HTML yet.** First obtain the 28 Sep `Chapter 13 Assumptions of the linear model Part 1` recording/transcript. It is the one currently available missing file most likely to change the content of the A2 system. Then integrate that source together with the new `Chapter 9.pdf` in one substantive update.
