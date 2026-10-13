# SDS188 A1S2 2026 — Chapter 7 Guided Learn — Final Independent Hostile Freeze Audit

Auditor stance: independent, hostile. Builder QA, prior claims and a polished UI carried no weight — every claim below was recomputed, re-sourced, or re-executed from scratch against the exact submitted bytes.

## A. Artifact Identity

Audited file: `SDS188_A1S2_2026_MasterLearningSystem_v1_5_1_CH7_GUIDED_LEARN_FREEZE_GATE_CANDIDATE.html`
(Two copies were supplied — `...CANDIDATE.html` and `...CANDIDATE_2.html` — independently hashed; both are byte-identical to each other and to the expected values, so the audit proceeded on this single artifact.)

| Check | Expected | Independently computed | Match |
|---|---|---|---|
| Size | 966,977 bytes | 966,977 bytes | ✅ |
| SHA-256 | `845be551a4674e84c5e98c3ce8a5ad5262b351332001146b4a1e3dadc07fd945` | `845be551a4674e84c5e98c3ce8a5ad5262b351332001146b4a1e3dadc07fd945` | ✅ |
| MD5 | `7fdcbd4857ca0a49abd02cb37357b28a` | `7fdcbd4857ca0a49abd02cb37357b28a` | ✅ |

Identity confirmed. Audit proceeded.

## B. Final Verdict

# 🟢 CHAPTER 7 GUIDED LEARN — SIGN-OFF GRANTED

Every one of the 13 lessons, every worked example, every "Your Turn" numeric target, the two specifically-flagged prior corrections, the Tutorial 7 Q1–Q14 mapping, the live browser behaviour (including persistence), the Chapter 8 regression, and a self-generated zero-interaction print-to-PDF all independently checked out. No freeze blockers were found. A small number of non-blocking, disclosed observations are listed in §C for the record.

## C. Freeze Blockers

**None.** No defect met the bar of "must be fixed before this artifact can be preserved as the finished Chapter 7 Guided Learn layer."

Two non-blocking, disclosed items for the file:

1. **Unverifiable practice-test citation (disclosed, not a blocker).** Lesson 7.8's worked example cites "2026 A1S2 Practice Test Q8" for the Student-t vs Z trap (0.4621 vs 0.4680). This round's supplied source set did not include that practice-test document, so the citation itself could not be independently checked against the original question text — only the arithmetic (which is correct; see §E). Repair, if ever touched: re-verify this citation the next time the 2026 A1S2 practice test file is supplied to an audit round.
2. **Pre-existing Round-4 title regression, now masked (informational only).** The Chapter 8 layer `ch8-guided-learn-v1-4` still unconditionally sets `document.title` to a string containing the word "Candidate" (a disclosed Round-4 non-blocker). Because `ch7-guided-learn-v1-5` loads after it and also sets `document.title` (to a clean string with no "Candidate"), the user-visible title is clean on every load — confirmed live in a fresh browser (see §F). The underlying stale line in the Chapter 8 script is still there but is functionally inert. No action required unless that file is touched again, at which point deleting the stale line would be tidy but is not urgent.

Neither item affects a student's ability to use Chapter 7 Guided Learn correctly, and neither touches statistical content.

## D. Tutorial 7 Q1–Q14 Reconciliation

| Q | Skill tested | Lesson(s) | Coverage | Notes |
|---|---|---|---|---|
| Q1(a–c) | X̄ forward probability, known σ, left/between/right | 7.5 | COMPLETE | Worked example is Q1(a–c) verbatim; all three probabilities independently recomputed and correct. |
| Q1(d) | Inverse X̄ boundary from a stated probability | 7.6 | COMPLETE | Worked example is Q1(d) verbatim; recomputed x≈99.2294. |
| Q2(a,b) | Individual X vs. class mean X̄, variance→σ conversion | 7.4 | COMPLETE | Worked example is Q2(a,b) verbatim; both probabilities recomputed and correct. |
| Q3(a) | Individual exponential probability | — | OUT OF SCOPE (acceptable) | This part is single-observation exponential probability, a Chapter 6 skill, not a sampling-distribution question; Tutorial 7 uses it only to set up Q3(b). Not misleading — no lesson claims to cover it. |
| Q3(b) | CLT applied to sample mean of exponential data | 7.7 | COMPLETE | "Your Turn" is Q3(b) verbatim; recomputed 0.0339 and correct. |
| Q4(a,b,c) | Exact finite without-replacement sampling distribution, unbiasedness, SD comparison across n | 7.2, 7.3 | COMPLETE | Full enumeration independently redone (see §E) for both n=2 and n=3; matches the lesson's stated 2.0000 and 1.4142 exactly. |
| Q5(a,b) | Sample proportion + theoretical SE with known π | 7.9 | COMPLETE | Worked example is Q5 verbatim; recomputed p=0.75, SE≈0.0573. |
| Q6(a,b) | Sample proportion + estimated SE (π unknown) | 7.9 | COMPLETE | "Your Turn" is Q6 verbatim; recomputed p=0.35, SE≈0.07542. |
| Q7(a–d) | Inverse/forward proportion probability, threshold framing, effect of n | 7.10 | PARTIAL | Skill (forward p probability, effect of n) is fully taught by 7.10, but Q7's specific numbers are not worked through anywhere in Guided Learn — only cited generically as a source. Independently recomputed Q7 myself (§E) and the taught method reproduces sane answers; not misleading, just not example-level traceable. |
| Q8(a) | Between-probability for p, known π | 7.10 | COMPLETE | "Your Turn" is Q8(a) verbatim; recomputed 0.7887 and correct. |
| Q8(b,c) | Central/symmetric bounds for p | 7.10 | COMPLETE (method) | Central-bound formula (π ± z*·SE) is explicitly taught; specific Q8(b,c) numbers not separately worked, but the method is the same one drilled in the lesson's explain/formula blocks. |
| Q9(a–d) | Between-probability for p at four widening bands, same π and n | 7.10 | COMPLETE (method) | Directly exercises "increasing distance from centre → larger between-probability" and n-effect content the lesson explicitly teaches; not separately worked with these exact numbers. |
| Q10 | Why X̄ is unbiased for μ | 7.2 | COMPLETE | Explicit conceptual check block: "why is X̄ unbiased" with the correct explanation. |
| Q11 | Why SE decreases as n increases | 7.3 | COMPLETE | Explicit conceptual check block on this exact question. |
| Q12(a) | Two independent means, known σ, threshold >25, n=10 | 7.11 | COMPLETE | "Your Turn" is Q12(a) verbatim; recomputed centre=10, SE≈12.3491, z≈1.2147, P≈0.1122 — all correct. |
| Q12(b,c) | Same, n=50 and n=100 | 7.11 | COMPLETE (method) | Not separately worked, but the identical method (only n changes) is what's taught; I recomputed both myself (§E) and the results follow the expected trend (P falls from 0.1122 → 0.0033 → 0.0001 as n grows), consistent with what the lesson would produce if a student applied it correctly. |
| Q13 | Two independent means, negative centre (μ1−μ2 = −5), n=9 | 7.11 | COMPLETE (method) | Explicitly listed as a 7.11 source; the lesson's own worked/trap content ("do not centre at zero unless μ1−μ2 actually equals zero") is precisely the trap Q13 sets. Not separately worked with these numbers, but the method transfers exactly; I independently recomputed centre=−5, SE≈4.2687, z≈1.1713, P≈0.1207. |
| Q14 | Finite-population correction, without replacement | 7.12 | COMPLETE | Worked example is Q14 verbatim; recomputed FPC≈0.96157, SE≈0.009616, P≈0.1483 — all correct. |

No Tutorial 7 question is MISSING or MISLEADING. Nothing is silently miscovered — every gap is disclosed above as PARTIAL with the reason, and in every PARTIAL case the underlying skill is genuinely taught, just not worked through with that exact question's numbers.

## E. Independent Numerical Verification

Every worked example and every "Your Turn" target across all 13 lessons was independently recomputed in Python/SciPy from the stated inputs (not copied from the file). All matched to well within the file's own stated tolerances. Full script output on request; headline results:

- **7.1/7.2 — Tutorial 7 Q4 exact enumeration** (population 1,3,6,7,9,10, N=6, without replacement): population mean recomputed = 6.0 (matches). Full enumeration of all C(6,2)=15 samples (n=2) and C(6,3)=20 samples (n=3), dividing by the sample count exactly as the source's own toy-population slide does: mean of sample means = 6.0 in both cases; SD = **2.0000** (n=2) and **1.4142** (n=3) — matches the lesson exactly.
  - Cross-check: these enumerated SDs are also exactly reproducible via the FPC formula the lesson explicitly says is *not* the same calculation but *would* reconcile with it: σ/√n × √[(N−n)/(N−1)]. For n=2: (3.1623/1.4142)×0.8944 = 2.0000. For n=3: (3.1623/1.7321)×0.7746 = 1.4142. Both match to the decimal. **This is the strongest possible confirmation that Correction #1 (distinguishing this finite without-replacement SD from ordinary σ/√n) is not just asserted but numerically self-consistent.**
- **7.3** (σ=12, n=36): SE=2.0000 ✓
- **7.4** (Tutorial 7 Q2): (a) z=−0.5, P=0.3085 ✓; (b) SE≈0.8485, z≈−3.5355, P≈0.0002 ✓
- **7.5** (Tutorial 7 Q1a–c, μ=100 σ=10 n=25): P(X̄<95)=0.0062 ✓; P(95<X̄<97.5)=0.0994 ✓; P(X̄>102.2)=0.1357 ✓ (full precision 0.13567, within stated tolerance)
- **7.6** (Tutorial 7 Q1d): z=Φ⁻¹(0.35)≈−0.3853, x≈99.2294 ✓; central-95% example (μ=368,σ=15,n=25): limits 362.12 / 373.88 ✓
- **7.7** (restaurant example μ=8,σ=3,n=36): SE=0.5, P(7.8<X̄<8.2)=0.3108 ✓; Tutorial 7 Q3(b) exponential (mean 9s, n=30): SE≈1.6432, z≈1.8257, P≈0.0339 ✓
- **7.8** (practice-test trap, n=25, s=4, μ=19): SE=0.8, t-limits ±0.625, df=24, **Student-t P≈0.4621** ✓, Z-route distractor P≈0.4680 ✓ (both independently recomputed with `scipy.stats.t` and `scipy.stats.norm`); "Your Turn" T=(54−50)/(10/√25)=2.0 ✓
- **7.9** (Tutorial 7 Q5, n=64, X=48, π=0.70): p=0.75 ✓, theoretical SE≈0.05728 ✓; Tutorial 7 Q6 (14/40): p=0.35 ✓, estimated SE≈0.075416 ✓
- **7.10** (deck example, π=0.40, n=200): SE≈0.034641; **table-rounded route with z=1.44 gives exactly 0.4251** (0.9251−0.5000, reproduced exactly using the same rounded z); **full-precision route gives z≈1.44338, P≈0.42554 ≈ 0.4255** — both values the lesson cites are independently reproduced from the same underlying model, confirming **Correction #2** is accurate and the two numbers are a rounding-route difference, not competing models. Tutorial 7 Q8(a) (π=0.20,n=100): SE=0.04, P(0.15<p<0.25)=0.7887 ✓
- **7.11** (MBA salaries): SE≈31283.38, z≈−0.6393, P≈0.7387 ✓; Tutorial 7 Q12(a) (μ1=280,σ1=25,μ2=270,σ2=30,n=10): centre=10, SE≈12.3491, z≈1.2147, P≈0.1122 ✓ (and Q12(b) n=50→P≈0.0033, Q12(c) n=100→P≈0.0001, independently computed, consistent trend)
- **7.12** (Tutorial 7 Q14, Ping-Pong balls): FPC≈0.96157, SE≈0.009616, zL≈1.0400, zU≈3.1199, P≈0.1483 ✓; "Your Turn" FPC for N=1000,n=100 = 0.949158 ✓
- **7.13**: synthesis lesson, no new numeric claims — the four-way method fork was cross-checked against 7.4/7.5/7.8/7.9/7.11's own formulas and is internally consistent.

**Zero numeric discrepancies found across all 13 lessons.**

## F. Browser / Persistence Regression

Tested with a real headless Chromium (Playwright) against the exact candidate file, from a fresh profile, following the app's actual navigation (top nav → "learn" view → Chapter 7 tab).

- Fresh load: page title is clean — `SDS188 · A1S2 2026 Master Learning System · Guided Learn` (no stray "Candidate"; see §C item 2).
- Chapter 7 tab opens correctly; default active lesson is 7.1.
- All 13 lesson buttons (`7.1`–`7.13`) clicked individually: each renders its own heading, worked-example block, and Your-Turn block correctly. No missing buttons, no missing content.
- Formative "tiny knowledge check" on 7.1: 6 radio options present; selecting the correct answer and clicking CHECK returns "Correct. …" with the sourced justification.
- "Your Turn" tested across all three control types actually used in the lesson set:
  - **choice** (7.1): correct option → "Correct. Now explain the method aloud before moving on."
  - **numeric** (7.3): entering 2.0 → correct feedback.
  - **pair** (7.6): entering 362.12 / 373.88 → correct feedback.
- "Reveal worked solution" on 7.1: hidden before click, visible after, with the right text.
- Chapter switching: set active lesson to 7.9, switched to Chapter 8 (content changes correctly), switched back to Chapter 7 — **active lesson correctly restored to 7.9** (not reset to 7.1).
- `localStorage['SDS188_CH7_GUIDED_LEARN_V1_5']` correctly accumulates `{active, visited, checks, tries}` state.
- **Full page reload**: localStorage value is unchanged after reload (as expected — reload doesn't clear storage); after re-opening the Chapter 7 tab, the active lesson is still 7.9 and the readiness strip correctly reports 8% (1 of 13 lessons formatively ready), i.e. **state survives a full reload**, exactly as required.
- Internal Chapter 7 QA harness (`runQATests()`): **12/12 PASS**, including the two audit-relevant checks — "Q4 finite-population distinction explicit" and "Source-table vs full-precision Excel rounding explicit" — both pass, corroborating (not substituting for) the independent verification in §E.
- Chapter 8 internal QA harness: **10/10 PASS** (see §G).
- Console/page errors across the entire session (fresh load, 13 lesson opens, 4 interactive checks, chapter switch, reload): **zero warnings, zero errors, zero exceptions.**

## G. Chapter 8 Regression

Chapter 8 Guided Learn already carries independent sign-off (Round 4); this round should not have touched it, and it didn't.

- `window.SDS188_CH8_GUIDED_LEARN_V1_4.lessons.length` = **13** (unchanged).
- Chapter 8 internal QA: 10/10 PASS, including "No HOLD C8.69–C8.75 skills in Guided Learn" and "C8.69–C8.75 remain HOLD."
- Live DOM query of the mastery engine: `SDS188.CHAPTERS[8].status` = **`SOURCE_PARTIAL`** (unchanged).
- Live DOM query of `C8.69`–`C8.75`: **all seven still `HOLD`** (unchanged).
- Chapter 8's own static print supplement still contains lesson 8.13 (confirmed both by its internal QA check and directly in the self-generated print PDF, page 28).

No Chapter 8 regression of any kind.

## H. Script Hash Regression

The document contains 9 named `<script id="...">` layers, executing top-to-bottom. This round adds exactly **one** new layer at the very end:

| Layer | Bytes | SHA-256 (first 16 hex) |
|---|---|---|
| v11-correction-layer | 351,050 | a4f3203a0e0d43d3 |
| chapter8-provisional-content-pack | 69,102 | 73f1d9a1b61d8e77 |
| ch9-completeness-patch-v1 | 32,981 | 65d6d27aa81f216c |
| ch8-ch9-final-content-patch | 18,701 | 0938e8b17cc202a8 |
| ch8-ch9-final-mastery-integration-patch | 37,689 | 636b2b35698dd480 |
| a1s2-2026-practice-excel-integration-patch | 155,502 | f2700332b9966944 |
| ch8-guided-learn-v1-4 | 55,507 | 28b3ab0f8344cdcf |
| ch8-guided-learn-v1-4-1-audit-patch | 7,166 | f4feba90762352ce |
| **ch7-guided-learn-v1-5 (NEW)** | 50,395 | 9728eeaf59ba9779 |

**Disclosed limitation:** this audit round was not supplied the exact pre-Chapter-7 file (the last Chapter-8-signed-off candidate), so true byte-for-byte diffing against a prior artifact was not possible — the same limitation Round 4 disclosed for its own predecessor file. What *was* verified directly: (a) every pre-existing script `id` is still present and still contains its full expected content (spot-checked: Chapter 8 lesson count, Chapter 8 QA, evidence-engine skill statuses for both chapters all read back correctly from the live DOM — see §F/§G); (b) the new content is isolated to a single, clearly-named, additively-appended script block; (c) the functional regression surface (Chapter 8 lesson count, Chapter 8 status, HOLD skills, console errors) is clean. The hash table above is recorded so a future round with the true predecessor file can do the byte-exact diff this round could not.

## I. Print Audit

A fresh print-to-PDF was generated independently with **real headless Chromium**, from a brand-new page load, with **zero prior interaction** (no clicks, no tab switches — straight from `page.goto()` to `page.pdf()`). The supplied builder PDF was used only as comparison evidence afterward, never as proof.

- Self-generated PDF: 43 pages (same page count as the supplied builder PDF — corroborating, not conclusive, evidence of stability).
- Text-extraction confirms all 13 Chapter 7 lesson headings (`7.1 ·` … `7.13 ·`) present, plus the "Chapter 7 Guided Learn · Sampling Distributions" section header.
- Each of the 13 Chapter 7 lessons lands on its own dedicated page (29–41 in this render) — clean one-lesson-per-page pagination via CSS page-break rules, no lesson split across a page boundary.
- **All 13 pages visually inspected** (rendered to PNG at 150dpi and reviewed): no clipping, no overlap, no broken formulas, no cut callout boxes, no missing source lines, no unreadable text, no glyph problems. Unicode math (√, μ, σ, π, X̄, Φ⁻¹, superscript ², subscripts ₁/₂) all render correctly throughout. Callout boxes (Formula/decision object, Common trap, Exit criterion) render with correct borders/backgrounds and are never truncated.
- The print content is confirmed **static in the base DOM at initial page load** (found directly in the raw un-executed HTML, not injected later by JavaScript), inside `<section id="ch7-guided-print-supplement">` nested in the always-hidden `#read-print` view — the same architecture that made Chapter 8's print output reliable. Print CSS (`@media print{#ch7-guided-print-supplement{display:block!important}...}` combined with `.view:not(#read-print){display:none!important}`) forces this content to show at print time regardless of which tab was open on screen, which is exactly why zero-interaction printing works.
- Page boundary check: the last Chapter 7 page (7.13) transitions cleanly into the next section of the document (a pre-existing "Source register" appendix) with no visual artefact at the seam.

## J. Evidence-State Audit

All confirmed via live DOM query in a fresh browser session (not just static text search):

- `SDS188.CHAPTERS[7].status` = **`SOURCE_READY`** ✅ (unchanged, as required)
- `C7.27`–`C7.33` (Student-t skills) = **all `ACTIVE`** ✅ (7/7)
- `C7.52`–`C7.58` (FPC skills) = **all `PROVISIONAL`** ✅ (7/7) — Lesson 7.12 explicitly teaches the FPC bridge while its own trap/check text states it does *not* promote these skills, and the mastery engine confirms they remain PROVISIONAL in practice, not just in prose.
- No provisional material is represented as confirmed 2026 A1S2 content anywhere in the 13 lessons — every lesson that touches provisional territory (7.12) explicitly flags it in its own explain/trap text, and the flag is backed by the actual engine state above.
- The document's own "Source register" appendix (page 42 of the print output) independently states: *"SDS Chapter 7 NOTES.pdf · P26 · 2026 · §2.6, p. 7 directly verifies Student-t, T, df=n−1 and T.DIST. 7/7 Student-t skills are ACTIVE. Chapter 7 current core is SOURCE_READY; C7.52-C7.58 FPC remain separately PROVISIONAL / legacy-supported."* — this matches everything independently found above.

## K. Exact Bounded Repair Specification

Not applicable — sign-off was granted. The two disclosed non-blocking items in §C require no action to preserve this artifact; they are noted only so a future touch of the file can clean them up opportunistically (re-verify the 2026 A1S2 Q8 citation when that document is available; optionally delete the now-inert stale title line in `ch8-guided-learn-v1-4`).

## Pedagogical Hostile Test (summary)

For each major topic, asked: could a student pass this lesson's formative checks yet still fail the matching Tutorial/A1S2-style problem?

- **X vs X̄** (7.4): recognition cues, worked example and Your-Turn all force the student to *name* the object before computing — genuinely trains the discrimination Tutorial 7 Q2 tests, not just recognition of vocabulary.
- **Known-σ vs unknown-σ (Z vs t)** (7.8): the worked example is specifically a Z-vs-t *trap* (Z route gives a plausible-looking distractor, 0.4680, that is wrong) — this is method-selection training under a genuine distractor, not hint-fed execution.
- **CLT transfer** (7.7): explicitly separates "sampling distribution becomes normal" from "population becomes normal," and the worked example requires unit conversion (exponential rate → seconds) before computing, matching the real trap in Tutorial 7 Q3(b).
- **Proportion/object selection** (7.9/7.10): π vs p, theoretical vs estimated SE, and the source's own ≥5/>5 wording conflict are all surfaced explicitly rather than smoothed over.
- **Excel execution**: every lesson gives the actual Excel formula (not just the statistical formula), and 7.10 specifically trains full-precision Excel over table-rounded results — directly transferable to the A1S2 Excel-first workflow.
- No lesson supplies the final numeric answer before the student attempts the "Your Turn" question; solutions are behind an explicit reveal button, confirmed gated correctly in the live browser test (§F).

No redesign or cosmetic changes are proposed — none were needed for sign-off.
