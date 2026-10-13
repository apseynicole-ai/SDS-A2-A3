# SDS188 A1S2 — Chapter 8 Provisional Content Pack
## Independent Second-Platform Audit (Claude)

**Method note:** This was not a read-through of Codex's report. I copied both HTML files into a sandbox, diffed them byte-for-byte, loaded the built file in a real JS DOM (jsdom) and *executed* it — ran the actual `runQATests()`, clicked the actual QA button, navigated to the actual Chapter 8 tab and Read/Print view, and independently recomputed all 27 Tutorial 8 answers plus several extra practice items in Python (scipy) rather than trusting the stated numbers. Where I could not verify something (the raw source PDFs were not supplied to me), I say so explicitly rather than assuming Codex is right.

---

## 1. Engine non-regression — **PASS**

Direct diff of the two HTML files shows exactly **one hunk**: `958a959,1285`. The first 958 lines of the Chapter-8 build are **byte-identical** to the frozen baseline. Nothing was deleted or altered — the entire change is a new `<script id="chapter8-provisional-content-pack">` appended before `</body>`.

Inside that script I checked specifically for monkey-patching:
- No reassignment of `SYS.calculateA1Readiness`, `getNextTask`, `submitResponse`, `recalculateSkillState`, `classifyError`, `scheduleRetrieval`, or any other frozen-engine function. Grep for `SYS.<fn>=` and `Object.assign(SYS,...)` turns up only `Object.assign(SYS,{CHAPTER8})` — an added namespace, not a replacement.
- `SYS.runQATests` itself is **never overwritten**. The one UI change is that the `#run-qa` button's `onclick` handler is rebound to call the original (unmodified) `runQATests()` *and* the new `runChapter8ContentQA()`, then merge the two result arrays. That's a UI wiring change, not an engine mutation — and I confirmed it by calling `SYS.runQATests()` directly (bypassing the button) and got 72/72 regardless.
- The pack mutates pre-existing objects (`SOURCES.ch8`, `CHAPTERS[8]`, `SKILLS['C8.xx']`) via `Object.assign`, but I loaded the **baseline file alone** and found these already existed with the *same* values before the pack touched them (`CHAPTERS[8].status` was already `'SOURCE_PARTIAL'`, `C8.01` was already `PROVISIONAL`, `C8.70` was already `HOLD`). So this isn't the pack inventing new policy — it's the pack filling in detail on a skeleton the frozen engine already committed to.
- The **A1 readiness gate is enforced by the frozen engine itself, independent of the pack**. Loading the baseline file alone and calling `calculateA1Readiness()` returns `ready: false` with `"Chapter 8 source status is SOURCE_PARTIAL"` and `"Chapter 9 source status is SOURCE_MISSING"` already in the blocking reasons. Even if the content pack had bugs, the base engine's own gate independently prevents Chapter 8 evidence from flipping A1 to READY. That's a solid defense-in-depth design, not something Codex is merely promising.

## 2. Canonical skill audit (C8.01–C8.68) — **PASS**

I pulled the frozen `SKILLS` manifest names straight out of the baseline file (these predate the pack) and checked every one of the 68 PROVISIONAL_CORE skills against the pack's teaching fact / wrong-answer / apply / transfer content. No drift found — e.g. C8.42's canonical name ("pilot/expected s... *if source permits*") is resolved by the pack to "OFF23-CONFIRMED," which is a legitimate resolution of a flagged open question, not a silent change of meaning. I also cross-checked against the supplied Source-to-Skill Contract (the actual planning document, not Codex's summary of it) — the section groupings (8.0 estimation foundations → 8.10 bootstrapping) and the HOLD list (C8.69–75) match it exactly.

## 3. Academic accuracy — **PASS (independently recomputed)**

I did not take a single numeric claim on faith. Using scipy in a sandbox, I recomputed all 27 Tutorial 8 register answers from first principles (z/t critical values, CI limits, sample sizes, FPC, adjusted n) and several of the extra SPECS practice items. **Every one matched exactly**, including the two "exact-t, non-listed-row" checks (df=31 → 2.0395, df=64 → 1.9977). The underlying statistics are all textbook-correct: known-σ uses z and σ/√n; unknown-σ uses s, Student t, df=n−1; proportion CI uses strict np>5 and n(1−p)>5; sample-size formulas round up; FPC = √[(N−n)/(N−1)] triggered at n/N>.05; bootstrap is percentile-with-replacement, same n, α/2 cut per tail. Confidence is consistently given the correct long-run-procedure interpretation, never "probability the fixed parameter is in this interval," and a mean/proportion CI is consistently kept distinct from an individual-observation range.

**Caveat I can't remove:** I was not given the actual source PDFs (chapter8_2023.pdf, Tutorial 8_2022.pdf, t-table.pdf, the finite-population/bootstrap extracts, or the 2026 Module Framework). So while I can confirm the *arithmetic* is right and the *content is internally consistent with the Source-to-Skill Contract*, I cannot personally re-verify page-pinpoint citations like "OFF23 p.52" or the SHA-256 duplicate-file claim — that rests on Codex's (and your own) reading of the primary sources.

## 4. Tutorial 8 audit — **PASS**

No answer anywhere is labelled "official memo" (confirmed by direct string search and by re-running the pack's own negative-assertion test). Every one of the 27 mapped sub-items carries `solutionAuthority:'derived_and_independently_checked'`, and the stems are correctly kept `OFFICIAL_ORIGINAL` (they're Codex/your transcription of the actual tutorial questions) — a defensible and honestly-labelled distinction.

## 5. T-table safety — **PASS**

`tTableConventionStatus` is `AWAIT_MEMO_OR_CURRENT_SOURCE` everywhere it appears, including inside the rendered Read/Print output. For the two df values missing from the supplied table (31, 64), the pack gives the exact mathematical t-value and explicitly labels it "unresolved" for the official lecturer row convention — it does not invent round-down/nearest-row/interpolation behaviour. This is exactly the disciplined behaviour the audit brief asked for.

## 6. Formula object audit — **PASS**

Read all 11 formula objects (`F8.GENERAL` through `F8.BOOTSTRAP`). Each carries `ruledOutBy`/`confusedWith` fields that correctly separate z-known-σ from t-unknown-σ, mean CI from proportion CI, CI-construction from sample-size-planning, ordinary CI from finite-population CI, and parametric CI from bootstrap. No cross-wiring found.

## 7. Evidence quality — **PASS (runtime-checked, not just counted)**

I don't trust "523 tasks" as a quality signal by itself, so I checked *ladder completeness* programmatically: for all 68 PROVISIONAL_CORE skills, `UNDERSTAND / RETRIEVE / APPLY / TRANSFER / DELAYED / REPAIR` routes all resolve to a real task — **0 gaps**. Task scaffolding (recognise → represent → select → formula → substitution → execute → interpret → verify) is populated per-task rather than being a generic template, and `diagnosticDimension` correctly flags interpretation-heavy items (C8.09, 10, 16, 28, 29, 35 etc.) separately from selection/calculation items. Bootstrap transfer tasks are correctly kept `VERIFIED_ADAPTATION` rather than `OFFICIAL_ORIGINAL`, honouring the Contract's explicit instruction not to present AI-invented bootstrap items as lecturer material.

## 8. Excel audit — **PASS**

`excelContentStatus='LEGACY_SOURCE_SUPPORTED'` and `excelAssessmentRoute2026='AWAIT_CURRENT_SOURCE'` are set and, critically, actually *rendered* — I navigated to the live Read/Print pane and confirmed the four legacy Excel tasks carry `legacyExcelRoute:true` and the phrase "not a 2026 EXAM PROCEDURE," with no task claiming 2026-confirmed status.

## 9. HOLD/source boundary — **PASS (structurally and at runtime)**

The pack's task-generating `SPECS` object only has keys 1–68 — C8.69–75 are structurally incapable of getting a task from this code path. I then verified at runtime: 0 of the 523 live tasks reference any C8.69–75 skill ID, and neither mixed set nor the Final Boss registry references one. Chapter 9 is untouched by this pack (not asserted as anything) — no inference made about it.

## 10. Read/Print audit — **PASS**

Not taken from the report — I actually clicked through: `showView('learn')` → chapter-8 tab → dashboard renders with the exact provisional warning text; `showView('read-print')` → the Chapter 8 print pack renders with the source warning repeated per section and a HOLD section carrying the exact required string "HOLD — A1 SCOPE UNCONFIRMED."

## 11. Functional/technical QA — **PASS**

Loaded the full built HTML in a real DOM and executed it end-to-end:
- **0 script errors**, 0 jsdom errors, on load and on interaction.
- **0 duplicate DOM ids** after full render.
- **0 duplicate keys** across `QUESTIONS`/`VARIANTS` (i.e. the new content didn't silently clobber the 16 pre-existing baseline Chapter 8 questions — the counts add up exactly: 476 ladder + 27 tutorial + 4 Excel + 16 legacy = 523).
- Clicked the actual `#run-qa` button (not a proxy): produced "96/96 passed — frozen engine tests unchanged; Chapter 8 content tests appended," matching the claim.
- Called `CHAPTER8.startPackTask(...)` the way the UI would: executed cleanly.

I did not test print CSS visual layout or mobile viewport rendering (outside what a headless DOM can show), but there's nothing in the code that's viewport-dependent in a risky way.

## 12. Codex claim verification — **ALL VERIFIED TRUE, independently reproduced**

| Claim | My independent result |
|---|---|
| 72/72 frozen engine tests | ✅ 72/72, via direct `SYS.runQATests()` call |
| 24/24 Chapter 8 content tests | ✅ 24/24, via direct `runContentQA()` call |
| 96/96 combined | ✅ via the actual button click |
| 0 runtime errors | ✅ jsdom caught none |
| 523 Chapter 8 tasks | ✅ 455 QUESTIONS + 68 VARIANTS = 523 |
| C8.01–68 PROVISIONAL_CORE / C8.69–75 HOLD | ✅ 68 + 7 = 75, confirmed by skill-status query |
| Chapter 8 SOURCE_PARTIAL | ✅ |
| Baseline v1.3.1 not overwritten | ✅ byte-identical for the first 958 lines |

## 13. Verdict

**🟢 CLAUDE SIGN-OFF — STUDY-WORTHY PROVISIONAL CHAPTER 8 PACK**

**Independent second-platform sign-off granted.**

This signs off the Chapter 8 PROVISIONAL study pack as safe to study from. It does **not** promote Chapter 8 to `SOURCE_READY`, and it does **not** make A1S2 READY — the frozen engine's own readiness gate independently continues to block on Chapter 8 (`SOURCE_PARTIAL`) and Chapter 9 (`SOURCE_MISSING`) regardless of Chapter 8 performance.

**One thing worth doing yourself, not a blocker:** if you want zero residual doubt, spot-check the OFF23 page pinpoints for C8.42 (p.52) and C8.45 (p.54) against your actual PDF — I couldn't do that part since the PDFs weren't in what you gave me. Everything computable from the delivered artifact (the math, the engine behaviour, the source-boundary discipline, the Contract alignment) checks out.
