# SDS188 A1S2 v1.1 QA Report

Audit date: 2026-08-09  
Build type: controlled v1.1 repair and completion build  
Freeze verdict: **READY FOR INDEPENDENT AUDIT**

This verdict applies to the software handoff, not to learner A1S2 readiness. The application correctly remains **A1S2 NOT READY** because assessed sources are incomplete or unreconciled.

## A. Output

| Artifact | Exact path | Size (bytes) |
|---|---|---:|
| v1.1 application | `/Users/nicole/Desktop/Stats And Data Science 188/A1S2/SDS188_Semester2_MasterLearningSystem_A1S2_v1_1.html` | 161072 |
| QA report | `/Users/nicole/Desktop/Stats And Data Science 188/A1S2/SDS188_A1S2_v1_1_QA_REPORT.md` | 14486 |
| Changelog | `/Users/nicole/Desktop/Stats And Data Science 188/A1S2/SDS188_A1S2_v1_1_CHANGELOG.md` | 6490 |

Application SHA-256 at handoff: `b8dcc3f19209508b5e9a91fd1f64f0b19433d084889f1cd15d838dc2029c8129`.

v1.0 was not modified. The v1.1 storage key is `SDS188_S2_MASTER_V1_1`, schema version 2. Existing v1.0 history may be archived as `legacyV10History`, but it is explicitly non-evidentiary and is never converted into v1.1 mastery.

## B. Source status

| Chapter | Status | QA conclusion |
|---|---|---|
| 6 | `SOURCE_READY` | Current Chapter 6 notes, Tutorial 6, solutions, Excel examples/solutions and T06 data verified and used. |
| 7 | `SOURCE_READY_WITH_PATCHES` | The supplied 13-page 2026 notes verify the active Z/CLT/proportion/two-mean core. They do **not** contain the Student-t / `T.DIST` lane claimed by the contract. C7.27-C7.33 are therefore provisional. C7.52-C7.58 remain legacy/provisional FPC content. |
| 8 | `SOURCE_PARTIAL` | Legacy 2023 deck, Tutorial 8, t table, finite-population, bootstrapping and totals/auditing extracts are present. C8.01-C8.68 are provisional; C8.69-C8.75 are HOLD. |
| 9 | `SOURCE_MISSING` | No Chapter 9 source or academic object was found or inferred. |

The Chapter 7 downgrade is a genuine source conflict, not an implementation shortcut. The source-to-skill contract asserts a current Student-t patch, but a full-text scan of all supplied PDFs found no `T.DIST`, “Student-t”, or equivalent current lane. The implementation keeps the teaching lane visible and clearly provisional, with contract-level attribution instead of falsely attributing it to the current notes.

## C. Skill integrity

| Chapter | Canonical skills | ACTIVE | PROVISIONAL | HOLD |
|---|---:|---:|---:|---:|
| 6 | 50 | 50 | 0 | 0 |
| 7 | 58 | 44 | 14 | 0 |
| 8 | 75 | 0 | 68 | 7 |
| **Total** | **183** | **94** | **82** | **7** |

- Dangling section skill IDs: **0**.
- Dangling question/variant skill IDs: **0**.
- C7.58 restored and source-flagged.
- C7.44-C7.58 reconciled to the audited matrix.
- C8.01-C8.10 now explicitly cover point versus interval estimation, Xbar to mu, p to pi, unbiasedness, consistency, relative efficiency, sampling uncertainty, CI structure, limits/width, confidence interpretation, and parameter versus individual-observation distinctions.

## D. Question / variant counts

Counts include registered questions and the 13 validated objects in `VARIANTS`.

| Ch | Total | Official originals | Verified adaptations | Generated validated | ACTIVE | PROVISIONAL | HOLD | Numeric | Formula | Symbolic | Region | Excel | Interpretation |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 6 | 71 | 4 | 31 | 36 | 71 | 0 | 0 | 2 | 2 | 0 | 6 | 7 | 9 |
| 7 | 55 | 0 | 25 | 30 | 52 | 3 | 0 | 1 | 1 | 1 | 0 | 4 | 6 |
| 8 | 16 | 0 | 16 | 0 | 0 | 16 | 0 | 0 | 0 | 0 | 0 | 0 | 3 |
| **Total** | **142** | **4** | **72** | **66** | **123** | **19** | **0** | **3** | **3** | **1** | **6** | **11** | **18** |

The bank implements choice, numeric, formula entry, symbolic event, region, ordered steps, structured text and structured interpretation controls. Region tasks cover left, right, between, outside, central and continuity-corrected boundary commitments. Only `validationStatus="VALIDATED"` and `status="ACTIVE"` tasks whose skills are ACTIVE can contribute to mastery.

## E. Evidence coverage

- ACTIVE Chapter 6/7 skills with a complete mastery pathway: **94 of 94**.
- ACTIVE Chapter 6/7 skills with `contentGap=true`: **0**.
- Unresolved ACTIVE Chapter 6/7 evidence-path exceptions: **none**.
- Chapter 8 is not represented as green coverage: it is explicitly blocked by provisional source status.
- Chapter 7 Student-t and FPC skills are not hidden as ACTIVE coverage; they remain provisional source blockers.

For each ACTIVE skill, `auditEvidenceCoverage()` checks at least one understanding task, two distinct retrieval tasks, two distinct familiar-application tasks, one changed transfer task, delayed compatibility, and immediate/delayed/transfer repair compatibility. The router calls the same eligibility function and emits `CONTENT_GAP` instead of launching an impossible task.

## F. Engine tests

The in-application QA control executed the actual v1.1 registries and attempt/repair/retrieval functions. The suite does not flip `attempt.masteryEligible` after submission and does not inject mastery states.

| # | Logic / workflow assertion | Result |
|---:|---|---|
| 1 | Solution viewed blocks mastery eligibility | PASS |
| 2 | Substantial hint blocks mastery eligibility | PASS |
| 3 | Two valid retrievals produce RETRIEVE | PASS |
| 4 | One familiar application is not APPLY | PASS |
| 5 | Two distinct familiar applications produce APPLY | PASS |
| 6 | Changed + delayed + APPLY + no repair produces STABLE | PASS |
| 7 | Very sure + wrong method records confidence mismatch and diagnosed family | PASS |
| 8 | Insufficient process evidence stays UNKNOWN | PASS |
| 9 | Missing Chapter 9 blocks readiness | PASS |
| 10 | Legacy completion creates no mastery | PASS |
| 11 | Open high-impact repair outranks new teaching | PASS |
| 12 | Revealed attempt remains in history but outside evidence | PASS |
| 13 | Provisional attempt cannot satisfy readiness | PASS |
| 14 | Real Retrieval UI path records `context=retrieval` | PASS |
| 15 | Successful R1 completes and schedules R2 | PASS |
| 16 | Due R2 uses a distinct item and records delayed evidence | PASS |
| 17 | Router requirements are executable for every ACTIVE Ch6/7 skill | PASS |
| 18 | Evidence audit reports zero ACTIVE Ch6/7 gaps | PASS |
| 19 | Wrong interpretation is INTERPRETATION, not generic SELECTION | PASS |
| 20 | Wrong numeric response without process evidence stays UNKNOWN | PASS |
| 21 | Immediate high-impact repair pass leaves repair open | PASS |
| 22 | Due delayed repair appears; pass still leaves high-impact repair open | PASS |
| 23 | Validated altered transfer resolves high-impact repair | PASS |
| 24 | Support level cannot manufacture changed/mixed/timed flags | PASS |
| 25 | Validated altered task records changed wording evidence | PASS |
| 26 | Level 6 starts a multi-question interleaved block | PASS |
| 27 | One Excel item does not complete Excel readiness | PASS |
| 28 | Excel production families update independently | PASS |
| 29 | Chapter 8 partial blocks readiness even if Chapter 9 is simulated ready | PASS |
| 30 | Dynamic simulation pool admits a newly ready assessed chapter without chapter-code edits | PASS |
| 31 | Current simulation runs with `coverageComplete=false` | PASS |
| 32 | Integrity-preserving timeout remains valid and marks `timedOut=true` | PASS |
| 33 | Bootstrap and Student-t source attribution is explicit and non-defaulted | PASS |
| 34 | Registry is 50/58/75 = 183 with zero dangling IDs | PASS |
| 35 | Unbiasedness, consistency and relative efficiency exist in skills and teaching | PASS |
| 36 | Print DOM visibly preserves Chapter 8, Chapter 9 and HOLD warnings | PASS |
| 37 | Leaving a protected closed-book block invalidates its evidence | PASS |

Result: **37/37 PASS**.

### Independent browser workflow probes

The following were executed by clicking and completing controls in the loaded HTML, outside the self-test assertions:

- DO THIS NOW launched a real Chapter 6 task.
- A correct understanding submission created R1 entries.
- R1 launched a **different prompt** from the understanding task, recorded eligible retrieval evidence, completed R1 and placed R2 in DUE SOON.
- A production-first selection task withheld choices until the learner locked a written commitment.
- A validated wrong option with “very sure” created `SELECTION + CONFIDENCE_MISMATCH` repair.
- The immediate repair launched a different question; its pass left delayed and transfer stages unresolved.
- Level 6 opened a six-question interleaved block rather than one practice question.
- Stage E opened seven questions with numeric, formula, symbolic, region, ordered-step, choice and structured-text controls.
- Closed-book Stage E hid LEARN, REPAIR and READ / PRINT, displayed the integrity banner, and invalidated on exit.
- Mobile viewport 390x844 had no document-level horizontal overflow.
- Main and chapter tabs moved with arrow keys and kept `aria-selected`, `aria-controls` and `aria-labelledby` synchronized.
- Valid schema-2 JSON imported through the file control; schema-1 JSON was rejected with a specific error.
- Reset cleared the browser test state.
- Browser console error/warning count after final load: **0**.
- Duplicate DOM IDs: **0**.

## G. Excel QA

Implemented evidence families:

1. `EXCEL_FUNCTION_SELECTION`
2. `EXCEL_FORMULA_RECONSTRUCTION`
3. `EXCEL_ARGUMENT_MAPPING`
4. `EXCEL_OUTPUT_INTERPRETATION`
5. `EXCEL_ERROR_DETECTION`
6. `EXCEL_WORKFLOW_EXECUTION`

Verified source use:

- `Chapter 6/Chapter 6 - Excel examples (Solutions).xlsx`: `NORM.DIST`, `NORM.INV`, `NORM.S.DIST`, `NORM.S.INV`, plotting positions `j/(n+1)` (for n=15, workbook formula `B3/16`) and normal-plot z column.
- `TUT 6/T06-data.xlsx`: Steel, Utility and Wait source data; the app does not clone Excel.
- `Chapter 7 /SDS Chapter 7 NOTES.pdf`: current known-sigma `NORM.S.DIST` / `NORM.DIST` routes.

Readiness is family- and skill-family-based. One recognition item cannot satisfy Excel readiness. Chapter 8 retains `AWAIT_CURRENT_SOURCE` behavior; no 2026 Chapter 8 Excel route was invented. The claimed current Chapter 7 `T.DIST` route was not found in supplied academic PDFs and is provisional.

## H. Repair QA

- Immediate: different registered task, source-aligned explanation/contrast, pass recorded, repair remains open.
- Delayed: minimum due threshold 36 hours; due task appears in RETRIEVAL and REPAIR routing.
- Transfer: high-impact repair requires a validated altered variant after delayed success.
- Deduplication: repeated open errors with the same primary skill and error family append origin attempt IDs instead of creating parallel repair cards.
- Simple repair clear condition: immediate + delayed.
- High-impact clear condition: immediate + delayed + transfer.

## I. Simulation QA

- Dynamic pool: derived from `ASSESSMENT_PROFILES.A1S2.assessedChapters` and task/source status, not `[6,7]` hard-coding.
- Partial coverage: current blocks run, record practice evidence and set `coverageComplete=false`.
- Representative evidence: unavailable until every assessed chapter is `SOURCE_READY`.
- Timeout: unanswered items are wrong; `timedOut=true`; validity remains true when integrity remains intact.
- Closed-book: protected references are hidden, and leaving invalidates the run.
- Stages A-F are distinct multi-question configurations; Stage C uses validated variants only.

## J. Source traceability

- Every ACTIVE question/variant has explicit file, year, authority, pinpoint, validation class, solution authority and status.
- Bootstrap objects point to `Bootstrapping_Skoenlusberaming.pdf`.
- Student-t objects point to the audited contract and are provisional; they are not falsely attributed to Tutorial 8 or the current notes.
- No chapter-based automatic attribution is used by the v1.1 objects.
- `auditSourceIntegrity()` reports zero issues and zero Chapter 9 academic objects.
- HOLD material is excluded from routing, mastery, repair and simulations.

## K. Print

- A4 rule: `@page { size: A4; margin: 12mm; }`.
- Chapter 8: visibly says **PROVISIONAL - CURRENT 2026 SOURCE NOT YET ADDED**.
- Chapter 9: visibly says **SOURCE MISSING - NO CONTENT INFERRED**.
- Totals/auditing: visibly marked **HOLD**.
- Print DOM, compact chapter notes, formula objects and source statuses passed the automated check.

## L. Accessibility

- Main navigation and chapter selectors use tablists, tabs and tabpanels.
- Main and chapter arrow-key navigation was executed successfully.
- `aria-controls`, `aria-labelledby`, `aria-selected`, focusability and visible focus are synchronized.
- Forms, region choices, confidence controls and dialogs have accessible labels.
- Feedback and QA results use live regions.
- Source and mastery meaning is expressed in text as well as color.
- Reduced-motion media query is present.
- Mobile check at 390x844 passed without page-level horizontal overflow.

## M. Persistence / state QA

- New key and schema prevent silent v1.0 migration.
- Valid schema-2 import passed through the real file chooser.
- Incompatible schema-1 import was rejected without partial state replacement.
- Attempt, repair, retrieval, skill/task-reference and timestamp shapes are validated.
- Reset-all was executed after browser tests.
- Export executed the Blob/download path and announced the expected filename. The in-app browser did not expose the synthetic Blob click through its download-event interceptor, so OS-level download capture remains an independent-audit check.

## N. Known limitations

1. The supplied current Chapter 7 notes conflict with the contract's Student-t claim. C7.27-C7.33 remain provisional; Chapter 7 remains `SOURCE_READY_WITH_PATCHES`.
2. C7.52-C7.58 FPC skills are legacy/provisional, not current-assessment evidence.
3. Chapter 8 remains entirely provisional except that C8.69-C8.75 are stricter HOLD objects.
4. Chapter 8 Excel workflows await a current 2026 source.
5. Chapter 9 is missing and empty by design.
6. Full representative A1 simulation evidence cannot exist until source coverage is complete.
7. OS-native print preview and the final downloaded export file should be rechecked by the independent auditor; the application DOM, A4 CSS, warnings, import path and export trigger were verified.

## Freeze verdict

**READY FOR INDEPENDENT AUDIT**

No failed P0/P1 implementation test remains in the delivered build. This report does not claim that the academic source set or any learner is A1S2 ready.
