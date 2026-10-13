# SDS188 A1S2 2026 — Final Independent Hostile Audit Report

**Auditor stance:** independent, adversarial. Nothing below is accepted on the builder's word; every claim marked "verified" was recomputed, re-read against the primary source, or re-executed in a real Chromium browser by this auditor.

---

## A. Artifact Identity

| Field | Builder's claim | Independently measured | Match |
|---|---|---|---|
| Filename | `SDS188_A1S2_2026_MasterLearningSystem_v1_3_1_EXCEL_EXECUTION_PATCHED_CANDIDATE.html` | same | — |
| Size | 759,014 bytes | 759,014 bytes | ✅ |
| SHA-256 | `eb25367abd9bfbf8a9ff35618826561d20d4538d46362979baac004826d0f271` | `eb25367abd9bfbf8a9ff35618826561d20d4538d46362979baac004826d0f271` | ✅ |
| MD5 | `46404a1a2a160d76218948b12f6e9a7a` | `46404a1a2a160d76218948b12f6e9a7a` | ✅ |

The exact candidate bytes were audited — no substitution occurred. The embedded workbook (`WORKBOOK_B64`) and formula sheet (`FORMULA_B64`) inside the HTML were also extracted and hashed independently; both are **byte-identical** to `SDS188_A1S2_2026_Excel_Practice_Companion.xlsx` and `A1S2_2026_Formula_Sheet.pdf` as supplied (SHA-256 `ac687d42…f03130` and `f885898e…f61dd3` respectively). Clicking the in-app "DOWNLOAD PRACTICE WORKBOOK" / "DOWNLOAD OFFICIAL 2026 FORMULA SHEET" buttons in a live browser produces files with those same hashes — the download mechanism itself works and is not silently corrupting the payload.

---

## B. Final Verdict

# 🟡 SIGN-OFF DENIED — BOUNDED REPAIRS REQUIRED

The underlying engine, the Chapter 6–9 content architecture, the evidence-state/HOLD gating discipline, and — most importantly — **all eight independently-recomputed Excel Execution drill answers** are correct. This is a fundamentally sound artifact. But one confirmed, 100%-reproducible functional defect (the new Excel Execution layer never appears in print output) and two source-fidelity defects are real enough that I would not tell Nicole "print this now, no further changes needed." The repairs below are bounded and do not require redesigning anything.

---

## C. Freeze Blockers

### 1 — BLOCKER: The entire new "A1S2 Excel Mode" layer never appears in printed output

- **Location:** `read-print` view / `#a1s2-print-supplement` (injected by `augmentPrint()` in the `a1s2-2026-practice-excel-integration-patch` script), combined with the print stylesheet rule `.view:not(#read-print){display:none!important}`.
- **What I did:** Loaded the exact candidate file in a real headless Chromium (Playwright, not jsdom), emulated `print` media, and generated an actual print PDF, six separate times under different conditions: immediately on load, after a 5-second idle wait, after fully navigating Chapters→8→Excel Mode→Read/Print, after directly invoking the page's own `runQATests()` self-check, and after polling until the DOM element existed. **In every one of the six runs, the resulting 21-page print PDF contained zero characters of Excel Mode content** — no EX01–EX08 drills, no "formula-sheet reality check" table, no workbook/four-decimal-rule reminders, nothing (confirmed by full-text extraction, not just skimming).
- **Why it matters:** Nicole says she intends to print this and study primarily on paper. The entire subject of this "PATCHED_CANDIDATE" release — the Excel Execution layer — would be **completely invisible in the printed copy**, silently. There is no error message; the student just never gets this material on paper.
- **Secondary, related defect (same code path):** the "A1S2 EXCEL MODE" nav tab itself, and `window.SDS188_A1S2_EXCEL_INTEGRATION`, do not exist for the first several seconds after the page loads (measured 3–4+ seconds, non-deterministic, occasionally not yet present at 5 s) with **zero loading indicator**. A student who opens the file and looks immediately will not see the tab. It does eventually self-install, so this half is an annoyance rather than a blocker on its own — but it is the same underlying "late/partial DOM patch" mechanism that causes finding #1, and the two should be fixed together.
- **Source/evidence:** six independent Playwright print runs (`print_readprint.pdf`, `print_readprint_after_excelmode.pdf`, `print_after_full_nav.pdf`, `print_after_qa_run.pdf`, `print_after_wait.pdf`, `print_diag2.pdf`), each full-text-extracted and searched for `"A1S2 2026"`, `"Excel Mode"`, `"EX01"`, `"print-supplement"`, `"DOWNLOAD PRACTICE WORKBOOK"` — all absent in all six.
- **Repair:** In `a1s2-2026-practice-excel-integration-patch`, (a) call `installView(); renderExcelMode(); augmentPrint();` synchronously and unconditionally at script load — remove whatever is deferring this (no literal `setTimeout` was found in source, so the delay is most likely coming from a downstream full-shell re-render that overwrites the nav/print DOM after this script's initial synchronous run; audit `renderAll`/boot sequence for any place that rebuilds `.nav` or `#read-print` from a hardcoded template *after* this patch has already run, and make sure that rebuild preserves or re-invokes the patch, not just relies on the `window.renderAll` wrapper — closures that call the *original*, unwrapped `renderAll` bypass the monkey-patch entirely). (b) Add an automated regression test that actually **prints** (or serialises `#read-print`'s rendered text) after a *fresh, uninteracted* page load and asserts the Excel Mode supplement text is present — the existing self-test is not a valid check because `tests()` calls `augmentPrint()` itself immediately before asserting on it, so it cannot fail even when the real-world natural init path is broken.
- **Regression test:** fresh `file://` load → wait 0s, 1s, 3s, 10s → at each point, render `#read-print` to a print PDF/text dump and assert it contains `"A1S2 2026"` and `"EX01"`. Must pass at t=0.

### 2 — HIGH: EX02 (proportion CI drill) doesn't train the real exam's "decoupled sub-parts" mechanic

- **Location:** `TASKS.EX02` (Population-proportion confidence interval) in `a1s2-2026-practice-excel-integration-patch`.
- **What the drill does:** gives n=420, x=273 (p=0.65 exactly), and asks the student to compute p, then SE from that p, then the upper CI limit using **their own just-computed SE**.
- **What the real practice test does (Q2, verbatim from `SDS A1S2 PRATICE TEST.docx`):** parts (a) and (b) ask the student to compute p and SE from n=500, x=300 (p=0.6, SE≈0.0219). Part (c) then says *"Assume that the sample proportion is 0.65 and the standard error is equal to 0.05"* — i.e. part (c) **supplies fresh, decoupled numbers that override whatever the student computed in (a)/(b)**, specifically so an error in (a)/(b) doesn't cascade into (c).
- **Why it matters:** EX02's own internal chain (p→SE→upper, all self-consistent) never exposes the student to this "later parts can override earlier ones with supplied numbers" mechanic. A student who has only practised the chained version could, in the real EMSLearn interface, either (i) not notice part (c) supplies new numbers and keep using their own SE, or (ii) get confused about why the numbers don't match their own work. This is a transfer-training gap sourced directly from the one official document available for this audit — not a speculative concern.
- **Repair:** Either (a) change EX02 part 3 to explicitly supply a **different** p/SE pair than what parts 1–2 compute (mirroring the real mechanic), with an explicit callout "note: this part supplies its own numbers, independent of your answers above — this matches how EMSLearn's practice test Q2(c) works," or (b) keep the current chained design but add a one-line warning to the `caveat` field making this convention difference explicit, so it's honestly flagged rather than silently taught as if it were the norm.
- **Regression test:** EX02 prompt/caveat text must contain an explicit statement that some real EMSLearn parts supply their own numbers regardless of earlier answers.

### 3 — MEDIUM/HIGH: Unsourced "password protection" claim presented as fact

- **Location:** Excel Mode panel, "Practice-test rules that matter" list: *"The A1S2 announcement says the real assessment will use similar rules/instructions and password protection."*
- **What I checked:** searched all extracted text from `2026 Module Framework SDS188.pdf` (the controlling assessment-logistics document) and `SDS A1S2 PRATICE TEST.docx` for "password" — zero matches in either. No "A1S2 announcement" document was supplied to this audit, so this specific factual claim about exam logistics is **unverifiable from any controlling source made available**.
- **Why it matters:** this is stated with the same confident, citation-style phrasing ("The A1S2 announcement says…") as the audit's other, genuinely-sourced claims, which makes it indistinguishable from a verified fact. If it's wrong (or if the actual announcement says something more specific/different), a student could show up with the wrong expectation about exam-day logistics — low likelihood of costing marks, but it's exactly the kind of overclaim the brief asks to catch.
- **Repair:** either produce the specific EMSLearn/course announcement this is quoting (and cite it precisely, e.g. with a date), or soften the wording to something explicitly flagged as unverified, e.g. *"Some students report the real assessment may be password-protected — this has not been confirmed against a source document in this system; check the EMSLearn announcement yourself before the exam."*

---

## D. Non-blocking Improvements

- **"OFF23" and other internal status tokens leak into main student-facing prose**, undecoded. Example, verified live in the rendered Chapter 8 "Learn" tab (not just source): *"OFF23 rule: if the population is not normal, use a large sample n > 30. Do not use the rhetorical p. 26 slide as a method-selection rule."* `OFF23` is a real internal citation key (`SOURCE_META.OFF23` → `SDS 188 chapter8_2023.pdf`), and `AWAIT_MEMO_OR_CURRENT_SOURCE` / `LEGACY_SOURCE_SUPPORTED` are internal state-machine values also shown verbatim in visible text elsewhere. None of these are ever decoded for the reader. Recommend either dropping the internal jargon from student-facing prose (keep it in the source register only) or adding a one-time glossary/tooltip.
- **`<title>` tag still reads** `"SDS188 · A1S2 2026 Master Learning System · Excel Execution Integration Candidate"` — the word "Candidate" is a stale development label. It doesn't appear in the visible on-page banner (which is clean), but it is the browser tab title and, depending on the student's browser print settings, may appear in the default print header/footer margin. Trivial one-line fix.
- **The formula-sheet reality-check table omits the two-independent-means (μ₁−μ₂, σ known) row**, which *is* present on the actual one-page formula sheet. Not a factual error (nothing false is claimed), just an incompleteness — worth adding for symmetry since every other formula-sheet row is covered.
- **Bootstrap training convention (EX01) uses 200 resamples with an integer 5th-smallest/5th-largest cut**, while the real practice test explicitly states 250 resamples with an unstated extraction convention. This is **already honestly caveated** in both the workbook README and the HTML ("TRAINING CONVENTION ONLY… not an official 2026 procedure") — good practice, not a defect. Suggest additionally showing the standard `PERCENTILE.INC`-style interpolation route as an alternative, since some bootstrap conventions use interpolated percentiles rather than integer order-statistic cuts, and the real lecturer convention is unknown.
- Page 1 of the print output is almost entirely blank (just a title line) — minor paper/ink inefficiency, not a usability problem.

---

## E. Practice-Test Reconciliation Table (all 8 official questions)

| # | Official skill | Ch. | Workbook? | HTML training location | Status | Defect | Repair |
|---|---|---|---|---|---|---|---|
| Q1 | Bootstrap CI for μ (200-resample training analogue of the real 250-resample task) | 8 | Yes (`A1PTData.xlsx` → `Bootstrap_Practice`) | `EX01` | **COMPLETE** (honestly caveated) | None material | None required; optional: add percentile-interpolation alternative |
| Q2 | Proportion CI: p, SE, upper limit | 8 | No | `EX02` | **PARTIAL / MISLEADING** | Doesn't train the real test's decoupled-parts mechanic (see Blocker #2) | Add decoupling or explicit warning |
| Q3 | t critical value + reject/do-not-reject decision | 9 | No | `EX03` | **COMPLETE** | None | — |
| Q4 | Raw-data known-σ mean test, original-unit critical boundary, power | 9 | Yes (`Calls_Practice`) | `EX04` | **COMPLETE** | None (correctly separates β from power, flags the "left on standardised scale" trap) | — |
| Q5 | Required sample size, no prior π estimate, round up | 8 | No | `EX05` | **COMPLETE** | None (correctly forces ROUNDUP) | — |
| Q6 | Finite-population sample-size adjustment | 8 | No | `EX06` | **COMPLETE** | None | — |
| Q7 | Recognise a Type II error in context | 9 | No | `EX07` | **COMPLETE** | None | — |
| Q8 | Unknown-σ sample-mean probability via Student t (z-route is the trap) | 7/8 | No | `EX08` | **COMPLETE** | None — independently confirmed the *official* practice-test numbers (mean 19, s=4, n=25) give **0.4621** via the correct t-route, matching official option (d), while the z-route trap gives **0.4680**, matching official (distractor) option (c). The HTML's emphasis on "must use t because σ is unknown" is exactly the skill needed to avoid the trap. | — |

None of the above should be read as a claim about real-exam chapter weighting — per the brief, practice-test appearance ≠ confirmed exam weighting, and the HTML itself makes this same caveat explicitly and correctly.

---

## F. Independent Answer Verification (all 8 altered-number Excel drills)

All values below were recomputed from scratch in Python (own implementation of the t-distribution, not scipy) directly against the raw data in the actual uploaded `SDS188_A1S2_2026_Excel_Practice_Companion.xlsx` — not against the builder's stored answers.

| Drill | Computed (unrounded) | HTML's stored answer | 4-decimal match |
|---|---|---|---|
| EX01 lower (SMALL(range,5)) | 16.0 | 16 | ✅ |
| EX01 upper (LARGE(range,5)) | 36.5 | 36.5 | ✅ |
| EX02 p | 273/420 = 0.65 | 0.65 | ✅ |
| EX02 SE | 0.0232737334 | 0.0232737334 | ✅ |
| EX02 upper | 0.6956156793 | 0.6956156793 | ✅ |
| EX03 critical t (df=19, 0.95) | 1.7291328115 | 1.7291328115 | ✅ (2.05 > tcrit ⇒ Reject H0, correct) |
| EX04 critical boundary (secs) | 13.7447609055 | 13.7447609055 | ✅ |
| EX04 z-calculated | 4.6925925926 | 4.6925925926 | ✅ |
| EX04 power (true mean 14) | 0.6331917668 | 0.6331917668 | ✅ (correctly 1−β, not β) |
| EX05 required n (unrounded 317.4759…, rounded up) | 318 | 318 | ✅ |
| EX06 required n (unrounded 1245.0191…, rounded up) | 1246 | 1246 | ✅ |
| EX07 Type II definition | "Do not reject H0 when H0 is false" | same | ✅ |
| EX08 probability (t-route, df=29) | 0.4119262699 | 0.4119262699 | ✅ |

**8/8 independently confirmed correct**, including the two places most likely to hide an error (EX04's β-vs-power distinction, and EX08's t-vs-z trap). No premature rounding, wrong df, wrong tail, or β/power confusion was found anywhere in the eight stored answers.

---

## G. Chapter 6–9 Content Verdicts

Given the size of this artifact (Chapters 6–9 content spans roughly 500KB of the 754KB of script), full line-by-line verification of every one of the hundreds of skill/question objects was not feasible inside this audit's time budget. What follows is graded on the checks actually performed, not assumed clean elsewhere.

- **Chapter 6 (Continuous distributions):** Not independently deep-audited beyond structural/navigation testing (loads cleanly, no console errors, chapter tab renders). No specific defect found or claimed.
- **Chapter 7 (Sampling distributions) — status SOURCE_READY, spot-checked and correct:** the CLT wording was specifically checked against the classic "does the population become normal" trap. The HTML explicitly states *"The CLT concerns the sampling distribution of X̄, not the original population"* and marks *"The CLT makes every original observation normally distributed"* and *"CLT changes the exponential population itself into normal"* as wrong-answer distractors. This is correct and matches the standard course treatment — no defect found.
- **Chapter 8 (Estimation) — status SOURCE_PARTIAL, correctly held back:** the HOLD-gating for C8.69–C8.75 (population-total/auditing extensions) was independently traced through four separate patch layers and is genuinely enforced — those skills are excluded from routing/readiness, live only behind a collapsed `<details>` disclosure labelled "HOLD auditing extensions," and an internal self-test explicitly asserts `finalReadinessEligible===false` for them. This is well-executed defensive scoping, not a defect. The workbook (`Bootstrap_Practice`, `Calls_Practice`) has no hidden sheets, no VBA, no pre-baked formulas, no external links, and no answer leakage (verified via raw OOXML inspection) — students must build every formula themselves. Formula-sheet claims for this chapter (bootstrap and hypothesis-testing algorithms explicitly *not* on the sheet; sample-size/FPC formulas *are*) were independently verified against the actual 1-page formula sheet and are accurate.
- **Chapter 9 (Hypothesis testing):** Q3/Q7-style content spot-checked via the EX03/EX07 drills above — correct. Not exhaustively re-derived beyond that.

---

## H. Browser / Engine Regression (what was actually executed)

Real Chromium (Playwright, the same engine family as installed Chrome — not jsdom/static parsing) loading the exact candidate file via `file://`, the same access mode a student double-clicking the file would use.

- **Console/page errors:** zero JavaScript errors or failed resource loads across all tests (multiple fresh loads, full navigation sweeps).
- **Navigation tested:** all 7 static nav tabs (Do This Now, Learn, Practise, Retrieval, Repair, A1 Training, Read/Print) render without error. Chapters 6–9 tab-switching inside Learn works. The dynamically-injected 8th tab ("A1S2 Excel Mode") was found and tested (see Blocker #1 for its defects).
- **Downloads tested:** both "download workbook" and "download formula sheet" buttons produce byte-identical copies of the originals (see Section A).
- **localStorage:** two keys observed (`SDS188_CH6_LEARN_CANDIDATE_UI_V1`, `SDS188_S2_MASTER_V1_3_1`); no errors on reload; title/state persisted correctly across a reload.
- **Not exhaustively tested within this audit's time budget:** live entry of correct/incorrect answers into the EX01–EX08 validator UI (i.e., typing "16" into the input and confirming the green/red feedback fires correctly) — the *stored* answer values were independently verified mathematically (Section F) and the validator's regex was read directly from source (`NUMERIC_RE.test('0.6500')&&!NUMERIC_RE.test('0.65')`, i.e. it correctly enforces exactly 4 decimals), but end-to-end UI interaction with the answer boxes themselves was not clicked through for all 8 drills. This is a residual, disclosed gap in this audit's coverage, not a finding of a defect.
- **90-minute rehearsal / mixed-set / retrieval stages A–F:** confirmed present and navigable; not timed through to completion.

---

## I. Excel Workbook Audit

`SDS188_A1S2_2026_Excel_Practice_Companion.xlsx` — opened via direct OOXML/openpyxl inspection (not just Excel's UI layer, so nothing can hide from this check).

- **Structure:** 3 sheets — `README`, `Bootstrap_Practice`, `Calls_Practice`. All visible (no hidden sheets/rows/columns). No VBA project, no external links/connections, no defined names, no sheet protection.
- **Formulas:** zero pre-baked formulas anywhere — the student must write every formula themselves (`AVERAGE`, `SMALL`, `LARGE`, etc.). This is correct design: no answer leakage via cached formula results.
- **Data:** `Bootstrap_Practice` has a 200-row original-sample-and-resamples grid (columns C:L, resample means to be built in column M); `Calls_Practice` has 36 raw observations plus an explicitly-labelled scratch area. Both match the counts used in the independently-verified EX01/EX04 answers (Section F).
- **README:** genuinely transparent — explicitly states this is *not* an official Stellenbosch workbook, contains no assessment answers, uses deliberately different data from the real practice test "so that practice is not memorisation," and flags the 200-vs-250-resample convention mismatch honestly.
- **Realism:** all tasks are completable in ordinary Excel by a student with the stated skills; nothing requires information not given. No colour-only information encoding was found in the data cells (headers are plain text).

No defects found in the workbook itself.

---

## J. Print Audit

Real Chromium print-to-PDF (not "print preview" screenshots only) was generated and full-text-extracted, six times under different navigation/timing conditions.

- **Structural quality of the 21-page baseline print output (excluding the Excel Mode gap):** clean. No clipped tables, no orphaned headings, no obviously broken page breaks in the pages sampled (title page, formula-decision-object tables, Chapter 8 N.PROP/FPC tables). Print CSS correctly strips box-shadows/UI chrome (`.nav, header, .scratch, .no-print` etc. are hidden; `.panel, .topic` have shadows removed and borders greyed for ink efficiency).
- **The one material print defect:** total, 100%-reproducible absence of all A1S2 Excel Mode content from the printed output (Blocker #1). This is the freeze-relevant print defect — everything else checked out.
- Page 1 is nearly blank (title + one-line subtitle only) — cosmetic, not blocking.

---

## K. Source/Evidence-State Audit

- **Accurate, well-sourced claims verified independently:** "A1S2 covers Chapters 6–9," "computer-based… primarily focused on testing the student's competency in Excel" (verbatim match to `2026 Module Framework SDS188.pdf`), "EMSLearn" as the assessment shell, the four-decimal/full-stop/no-units numeric entry rule (verbatim match to the practice test instructions), Chapter 8 remaining `SOURCE_PARTIAL` while C8.69–C8.75 remain `HOLD` (independently traced and confirmed enforced in code, not just claimed), and both formula-sheet "what's given / what's not" claims (bootstrap and hypothesis-testing algorithms correctly identified as absent from the one-page sheet; sample-size, FPC, and both mean-inference SE rows correctly identified as present).
- **Overclaim found:** the "password protection" claim (Blocker #3) — stated with sourced-fact phrasing but unverifiable against any controlling document available to this audit.
- **No instances found** of the HTML converting practice-test appearance into an explicit claim about real-exam chapter weighting — the brief specifically warns against this, and the HTML's own text ("This is a style/skill blueprint, not a prediction of real-exam chapter weighting") correctly avoids it.

---

## L. Exact Final Repair Specification

**Repair 1 (Blocker #1 — print/init gap).**
- Location: `<script id="a1s2-2026-practice-excel-integration-patch">`, the trailing line `installView();updateHeader();renderExcelMode();augmentPrint();augmentSourceRegister();` and the `window.renderAll` wrap immediately after it.
- Old behaviour: these functions run once synchronously at parse time, but their DOM output (nav button, `#excel-mode` section, `#a1s2-print-supplement`) is not reliably present 0–5+ seconds later on a fresh, uninteracted load, and is never present in a generated print PDF under any tested condition.
- Required new behaviour: `#a1s2-print-supplement` (and the excel-mode nav tab/section) must exist and contain their full content **immediately** after `DOMContentLoaded`, with no dependency on user interaction or elapsed wall-clock time, and must survive being read back out via a headless print-to-PDF render with zero prior navigation.
- Source justification: audit brief Pass B/L; observed via 6 independent real-Chromium print runs (Section J) and timed-polling tests (Section H).
- Regression test: automate the check described at the end of Freeze Blocker #1.

**Repair 2 (High #2 — EX02 mechanic).**
- Location: `TASKS.EX02` object, `parts` array, `prompt`/`caveat` fields.
- Old text: prompt chains p→SE→upper using only the student's own computed values.
- Required new text: either supply a second, decoupled p/SE pair for the "upper" part (not derived from parts 1–2), or add to `caveat`: *"Note: in the real EMSLearn practice test, part (c) supplies its own p and SE values that may differ from what you calculated in (a) and (b) — always use the values given in each part, not your own earlier answers, unless told otherwise."*
- Source justification: `SDS A1S2 PRATICE TEST.docx`, Q2(c): *"Assume that the sample proportion is 0.65 and the standard error is equal to 0.05."*
- Regression test: string-match the updated caveat text is present in `TASKS.EX02`.

**Repair 3 (Medium/High #3 — password claim).**
- Location: Excel Mode panel, "Practice-test rules that matter" list item.
- Old text: *"The A1S2 announcement says the real assessment will use similar rules/instructions and password protection."*
- Required new behaviour: either cite the specific announcement (with date/quote) if the builder has access to it outside this audit's source set, or replace with clearly-flagged-as-unverified wording (see Section C, item 3, for suggested replacement text).
- Source justification: absent from `2026 Module Framework SDS188.pdf` and `SDS A1S2 PRATICE TEST.docx`, the only two controlling logistics documents available to this audit.
- Regression test: manual — confirm against the actual EMSLearn announcement before re-freezing, or confirm the softened wording is in place.

Items in Section D (Non-blocking Improvements) are optional and do not gate sign-off, but Repair 1–3 above do.

---

*Audit performed by independently recomputing all mathematics from raw data, hashing all binary assets, and executing the exact candidate HTML in a real Chromium engine (Playwright) — not by inspecting builder claims or prior QA reports.*
