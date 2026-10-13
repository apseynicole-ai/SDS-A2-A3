# SDS188 A1S2 2026 — Chapter 8 Guided Learn v1.4.1 Final Hostile Audit

**Scope:** independent audit of the exact `SDS188_A1S2_2026_MasterLearningSystem_v1_4_1_CH8_GUIDED_LEARN_AUDIT_PATCH_CANDIDATE.html` bytes — all 13 Chapter 8 Guided Learn lessons against the complete supplied Chapter 8 deck, Tutorial 8, exact t-table, finite-population extract, bootstrapping extract, 2026 A1S2 practice test and formula sheet; independent recomputation of every worked/Your-Turn numeric answer; real-Chromium routing/formative-state/print testing; script-layer hashing; C8.69–C8.75 HOLD and source-gate confirmation. Nothing in this report is accepted on the builder's own audit report's word — every claim below was independently re-derived.

---

## Artifact Identity

| Field | Claimed | Independently measured | Match |
|---|---|---|---|
| Filename | `SDS188_A1S2_2026_MasterLearningSystem_v1_4_1_CH8_GUIDED_LEARN_AUDIT_PATCH_CANDIDATE.html` | same | — |
| Size | 877,049 bytes | 877,049 bytes | ✅ |
| SHA-256 | `91a678c5723e2ddcb3c8cf8d41ebab0f44f72bce747568ec1d2bc448ba489c6c` | `91a678c5723e2ddcb3c8cf8d41ebab0f44f72bce747568ec1d2bc448ba489c6c` | ✅ |
| MD5 | `db60d87da54e842d0aa6f00e9c7a66f2` | `db60d87da54e842d0aa6f00e9c7a66f2` | ✅ |

---

# 🟢 CHAPTER 8 GUIDED LEARN SIGN-OFF GRANTED

All 13 lessons independently checked out as mathematically correct and genuinely source-grounded — not merely plausible-sounding. One small, undisclosed, easily-fixed regression was found (browser title) and is reported below so it can get a one-line repair; it does not affect any Chapter 8 teaching content, any number a student would compute, or the source gate, so it does not block this sign-off. Full detail follows.

---

## A. Source-completeness and correctness audit of all 13 lessons

Every lesson's worked example, "sources" citation, and formula was independently traced back into the raw supplied documents (not the builder's paraphrase of them). Summary per lesson:

| Lesson | Topic | Independent verdict |
|---|---|---|
| 8.1 | Point/interval estimates, unbiased/consistent/efficient | ✅ Definitions match Chapter 8 slides verbatim. Minor phrasing note below (non-blocking). |
| 8.2 | Confidence level, α, margin of error, correct interpretation | ✅ "Can never be 100% confident" and long-run interpretation both confirmed verbatim in the deck. |
| 8.3 | CI for μ, σ known | ✅ Worked example (X̄=85,σ=8,n=64,95%) = Tutorial 8 Q1 exactly. Try item = Tutorial 8 Q2 exactly. "n>30 if not normal" assumption confirmed verbatim. |
| 8.4 | Student t, df, exact t-table reading | ✅ df=n−1 "mean of 3 numbers" intuition confirmed verbatim in deck (the new Finding-2 repair). Worked/try values (df=9→t=2.262; df=15→t=1.753) independently recomputed **and** confirmed present in the exact supplied t-table.pdf at those exact rows/columns. Correctly maps to Tutorial 8 Q9(a) and Q9(e). |
| 8.5 | CI for μ, σ unknown | ✅ Worked example (n=100,X̄=110.27,s=28.95,95%→104.53–116.01) is the deck's own travel-time example, byte-for-byte. Try item = Tutorial 8 Q10(a) exactly. |
| 8.6 | CI for proportion π | ✅ Worked example = deck's left-handed example (25/100, 95% → 16.51%–33.49%) verbatim. Try item = Tutorial 8 Q8(a) exactly (303/326). np>5/n(1−p)>5 condition confirmed verbatim. |
| 8.7 | Required n for a mean | ✅ Worked example = deck's download-time example (σ=25,e=5,95%→97) verbatim. Try item = Tutorial 8 Q5 exactly. |
| 8.8 | Required n for a proportion | ✅ Worked example independently recomputed to **267**, which is answer option (b) on the actual 2026 A1S2 Practice Test Q5 — confirms the lesson trains the real exam question, not an invented analogue. Try item = Tutorial 8 Q7(a) exactly. |
| 8.9 | Finite-population correction for CIs | ✅ Worked example is Example 8.10 from the dedicated FPC extract (N=200,n=27,X̄=45.2222,s=23.1472→36.6846–53.7598), byte-for-byte. Try item = Tutorial 8 Q11 exactly. Correctly uses **t** (not z) for the mean-FPC formula, matching source Eq. 8.12 exactly. |
| 8.10 | Finite-population sample size | ✅ Worked example (n₀=96.04,N=5000→95) matches the FPC extract's own Ricknel example exactly. Try item correctly derived from Tutorial 8 Q12(b)/textbook problem 8.84 (bank, N=1000, pilot p=.30, e=.05, 90%). FPC sample-size formula confirmed present on the actual formula sheet. |
| 8.11 | Bootstrapping theory | ✅ Worked example (90% CI, 100 resamples, 5th smallest/largest = 36.6296/51.5926) is the deck's/bootstrap extract's own "Processing Time of Life Insurance Applications" example, byte-for-byte, including the duplicated-value ("73 appears twice") detail used in the try item. The new Finding-3 repair (right-skewed boxplot trigger, "thousands of resamples," software requirement) is confirmed verbatim in both the deck and the dedicated §8.8 extract. |
| 8.12 | Bootstrap → Excel/A1S2 workflow | ✅ "Bootstrap worksheet of A1PTData.xlsx," "original sample... without replacement," "index of 250 resamples... with replacement," and the four-decimal/full-stop answer-entry rule are all confirmed verbatim against the actual 2026 practice-test transcription. Correctly and explicitly declines to invent a specific 250-index cutoff rule the source never states — this is the right call, not a gap. |
| 8.13 (new) | Ethical Issues / responsible CI reporting & chapter synthesis | ✅ The added lesson's core claim — "a confidence interval... the level of confidence... the sample size... an interpretation" — is a verbatim match to the Chapter 8 deck's actual Ethical Issues slide. This closes Round-audit Finding 1 for real, not just cosmetically. |

**Independent numerical recomputation** (Python/scipy, from scratch, not reusing the builder's numbers) of every worked example and Your-Turn answer above confirmed all of them correct to the lesson's own stated tolerance. No arithmetic, rounding-direction, or distribution-routing (Z vs t, FPC trigger, bootstrap-vs-normal) error was found anywhere across the 13 lessons.

**Minor non-blocking observation:** Lesson 8.1 states "a consistent estimator gets closer to the parameter as n increases," dropping the "unbiased" qualifier the source slide technically attaches to its definition of consistency ("An unbiased estimator is consistent if…"). This is a trivial wording simplification, not a source contradiction, and is very unlikely to affect any exam answer — flagged only for completeness, not requiring repair.

---

## B. Ethical Issues / reporting guidance (Finding 1 from the prior audit)

Confirmed genuinely closed. The exact deck text — *"A confidence interval estimate (reflecting sampling error) should always be included when reporting a point estimate. The level of confidence should always be reported. The sample size should be reported. An interpretation of the confidence interval estimate should also be provided."* — is now taught explicitly in the new Lesson 8.13, live in the browser and in the print output, with a worked example, a Your Turn item, and its own internal self-test check. This was previously entirely absent (per the prior audit) and is now genuinely present, not just relabeled.

---

## C. Tutorial 8 coverage

Cross-checked every one of Tutorial 8's 12 questions against the 13 lessons' cited worked/try examples. Every Tutorial 8 question that a lesson claims to use (Q1, Q2, Q5, Q7(a), Q8(a), Q9(a), Q9(e), Q10(a), Q11, Q12(b)) was independently confirmed to have the *exact* stated numbers, in the *exact* sub-part, and mapped to the *correct* lesson topic. No fabricated or mis-attributed tutorial citation was found anywhere in the 13 lessons.

---

## D. Excel-route fidelity

All Excel formula strings given across the 13 lessons (`NORM.S.INV`, `T.INV.2T`, `ROUNDUP`, `SQRT`, `AVERAGE`, `SMALL`/`LARGE`) are syntactically correct and independently confirmed to produce the stated numeric results. No lesson lets Excel substitute for method selection — every lesson explicitly requires the student to identify the parameter/route (Z vs t, FPC trigger, bootstrap trigger) before naming the Excel function, consistent with the explicit warning built into Lesson 8.13.

---

## E. Real-browser verification (Playwright, real Chromium, not jsdom)

- **Fresh load, 3 independent runs, zero wait:** Chapter 8 status `SOURCE_PARTIAL`, all of C8.69–C8.75 `HOLD`, Excel Mode / EX01–EX08 integration all still present at `'load'`, zero page or console errors. No regression from Round 1–3 checkpoints.
- **Chapter 8 → 13-lesson Guided Learn:** all 13 lesson IDs (8.1–8.13) render; a dedicated lesson picker (`data-open-ch8-lesson`) exists for every one; `window.SDS188_CH8_GUIDED_LEARN_V1_4.lessons.length === 13` confirms the new lesson was appended to the single shared lesson array (not a disconnected duplicate).
- **Navigation survives re-renders:** clicked lesson 8.13, switched to Chapter 9, switched back to Chapter 8 — the active lesson (8.13) was correctly preserved rather than resetting to 8.1. Jumping directly to lesson 8.7 also worked cleanly.
- **Formative state:** answered Lesson 8.2's numeric Your-Turn item (0.01) live; state persisted to `localStorage` under `SDS188_CH8_GUIDED_LEARN_V1_4` (`"tries":{"8.2":true}`); reloaded the page from scratch and confirmed the stored state was byte-identical after reload — formative progress genuinely survives a full page reload, not just an in-session re-render.
- **Internal self-test suite (new, v1.4.1):** 11/11 passing live, including "All core C8.01–C8.68 taught" (68/68 skills covered) and "No HOLD C8.69–C8.75 skills in Guided Learn."
- **Internal self-test suite (old, pre-patch, run for reference only):** 13/14 passing — the one failure ("12 guided Chapter 8 lessons") is the *old* suite's own stale hard-coded expectation of 12 lessons, now correctly 13. This is not a defect; it is the old check being obsolete by design.
- **No regression to prior rounds:** Excel Mode panel still contains the Round 3 password/source quotes verbatim; EX02's stored answer is still `0.6670391356`; the pre-existing "EXCEL 16" cosmetic self-test bug from Round 3 (already on file as a disclosed non-blocking issue) is unchanged, exactly as expected since script 7 is untouched.

---

## F. Real print-to-PDF verification

Two independent real print-to-PDF renders were generated and full-text-extracted:

- **Immediate print, zero interaction** (worst case: student hits Ctrl+P on page load) — 30 pages, 222,506 bytes. All 13 lesson titles and IDs present at least once, including Lesson 8.13.
- **After interactive navigation to Lesson 8.13 then Read/Print** — 36 pages, 251,109 bytes. Same content, more repetitions (expected: interactive DOM content prints in addition to the static supplement once visited).
- Lesson 8.13 was rendered to a page image and visually inspected (not just text-extracted): clean single-column layout, no clipping, no overlapping text, no cut-off boxes for the "Common trap"/"Exit criterion" callouts.

No print blocker was found. The 13-lesson supplement, including 8.13, prints completely and legibly in the worst case (zero-interaction) scenario, which is the standard this audit series has held every prior round to.

---

## G. Script-layer hashing and regression check

| Script | SHA-256 (this candidate) | Status |
|---|---|---|
| 1. base engine | `2cb30e538692…` | ✅ byte-identical to the state signed off in Round 3 |
| 2. `v11-correction-layer` | `a4f3203a0e0d…` | ✅ identical |
| 3. `chapter8-provisional-content-pack` | `73f1d9a1b61d…` | ✅ identical |
| 4. `ch9-completeness-patch-v1` | `65d6d27aa81f…` | ✅ identical |
| 5. `ch8-ch9-final-content-patch` | `0938e8b17cc2…` | ✅ identical |
| 6. `ch8-ch9-final-mastery-integration-patch` | `636b2b356982…` | ✅ identical |
| 7. `a1s2-2026-practice-excel-integration-patch` | `f2700332b996…` | ✅ identical (matches the Round-3-signed-off state, including the password/source fix) |
| 8. `ch8-guided-learn-v1-4` | `28b3ab0f8344…` | new to this audit — see note below |
| 9. `ch8-guided-learn-v1-4-1-audit-patch` | `f4feba907623…` | new, as expected (this is the claimed repair layer) |

**Verification limitation, disclosed:** the builder's own report asks this audit to confirm scripts 1–8 are "byte-identical to the previous v1.4 candidate." No `v1.4` (pre-audit-patch) HTML file has ever been supplied to any round of this audit — only v1.3.1 candidates and now this v1.4.1 candidate. I can and did confirm scripts 1–7 are byte-identical to the actual last-frozen, independently-signed-off state (Round 3), which is the check that actually matters for regression purposes. I cannot independently confirm script 8 is byte-identical to a "previous v1.4 candidate" because that artifact was never given to this audit to hash. If a genuine pre-patch v1.4 file exists, supplying its hash would let this be closed definitively; until then, this specific claim in the builder's report should be read as unverified rather than confirmed.

---

## H. Regression found: browser title reverted (non-blocking, needs a one-line fix)

Round 2's audit fixed `document.title` to drop the word "Candidate" (confirmed: `"SDS188 · A1S2 2026 Master Learning System · Excel Execution"`), and this was preserved through Round 3. Script 9 (`ch8-guided-learn-v1-4-1-audit-patch`) sets `document.title` again at load time to:

> `"SDS188 · A1S2 2026 Master Learning System · v1.4.1 Chapter 8 Guided Learn Audit Patch Candidate"`

This reintroduces "Candidate" into the browser tab title and was not mentioned anywhere in the builder's own report, which claims only that Chapter 8 teaching content changed. Confirmed live via Playwright fresh-load (`document.title` read directly from the DOM).

This does not touch any Chapter 8 content, any score, any HOLD status, or the source gate, so it does not block this sign-off — but it is exactly the kind of undisclosed side effect this audit series exists to catch, so it is reported rather than silently absorbed. **Repair:** change the one `document.title=` line in script 9 to drop "Audit Patch Candidate," e.g. `"SDS188 · A1S2 2026 Master Learning System · Chapter 8 Guided Learn"`.

---

## I. Source-gate integrity

Confirmed live in the browser, not inferred from unchanged script bytes alone:
- `window.SDS188.CHAPTERS[8].status === "SOURCE_PARTIAL"` — unchanged.
- `C8.69`–`C8.75` all `"HOLD"` — unchanged, all seven.
- The new lesson 8.13's own skill tags (`C8.09`, `C8.19`, `C8.35`) are all inside the already-taught 68-skill range — no HOLD skill was pulled into Guided Learn scope.

This teaching-only patch has not silently promoted the canonical Chapter 8 source gate, exactly as the builder's report intended and claimed.

---

## Verdict and required next step

**🟢 CHAPTER 8 GUIDED LEARN SIGN-OFF GRANTED.**

All 13 lessons are mathematically correct, genuinely and precisely source-grounded (not merely plausible), Tutorial-8-consistent, Excel-fidelity-consistent, print-complete, and gate-safe. The one regression found (browser title) is cosmetic, fully disclosed above, and does not require reopening this sign-off — it can be repaired the next time this file is touched, alongside the already-on-file, already-non-blocking "EXCEL 16" self-test cosmetic bug from Round 3.

Per the builder's own report, this is a teaching-completeness gate only — it does not promote `SOURCE_PARTIAL`/HOLD, and that separation was independently confirmed intact. A separate source-readiness reclassification audit remains a distinct, not-yet-requested, piece of work.
