# SDS188 A1S2 v1.2 QA Report

Build: `SDS188_Semester2_MasterLearningSystem_A1S2_v1_2.html`  
SHA-256: `36b7089b0c3f3712c65e1b432cc3ac0014cb6469b412a61a28a8952f15730892`  
Verdict: **READY FOR INDEPENDENT AUDIT**

This verdict is a build-quality verdict. It does not say that a fresh learner state is A1-ready. Chapter 8 remains `SOURCE_PARTIAL`, Chapter 9 remains `SOURCE_MISSING`, C7.52-C7.58 remain provisional, and learner mastery/readiness gates remain closed until their real evidence requirements are met.

## Corrected source finding

The actual supplied `Chapter 7 /SDS Chapter 7 NOTES.pdf` was rendered and inspected visually. Page 7 contains §2.6, “What if sigma is unknown?”, and explicitly shows:

- the Student-t sampling model for the sample mean;
- `T=(Xbar-mu)/(s/sqrt(n))`;
- `df=n-1` through the `t_(n-1)` model and calculator route;
- Excel `=T.DIST(tcalc,df,TRUE)`.

Controlling metadata for C7.27-C7.33 is therefore `SDS Chapter 7 NOTES.pdf`, authority `P26`, year `2026`, pinpoint `§2.6, p. 7`. All seven are `ACTIVE`. Chapter 7 current core is `SOURCE_READY`. C7.52-C7.58 retain their separate `PROVISIONAL` / legacy-supported FPC status.

## Recalculated inventory

| Measure | Result |
|---|---:|
| Canonical skills | 183 |
| Chapter 6 skills | 50 |
| Chapter 7 skills | 58 |
| Chapter 8 skills | 75 |
| ACTIVE skills | 101 |
| PROVISIONAL skills | 75 |
| HOLD skills | 7 |
| Tasks and variants | 737 |
| ACTIVE tasks and variants | 720 |
| PROVISIONAL tasks and variants | 17 |
| Semantically complete ACTIVE pathways | 101 / 101 |
| Remaining ACTIVE Ch6/7 semantic bank gaps | 0 |
| Source-integrity audit issues | 0 |

The 101 active skills are the 50 Chapter 6 skills and the 51 current-core Chapter 7 skills. The prior v1.1 `94/94` statement was not copied.

## Evidence-integrity implementation

Every question now carries two separate relationships:

- `skillIds`: related skills used for topic routing and display;
- `assessesSkillIds`: skills actually demonstrated by a successful response.

Only `assessesSkillIds` can update mastery, schedule skill retrieval, create skill repair evidence, populate skill-specific Excel evidence, or satisfy `auditEvidenceCoverage()`. Attempts persist both arrays. The v1.2 storage key is `SDS188_S2_MASTER_V1_2` with schema 3, so invalid v1.1 over-tagged evidence cannot migrate into corrected mastery.

For each ACTIVE skill, the runtime audit reports:

- `skillId`;
- understand task IDs;
- retrieval task IDs;
- familiar-application task IDs;
- changed-transfer task IDs;
- delayed-compatible task IDs;
- immediate, delayed and transfer repair task IDs;
- Excel task IDs and evidence families where present;
- `semanticCoverageStatus`.

`semanticCoverageStatus` passes only on exact `designatedEvidenceTarget` + `assessesSkillIds` alignment, source-specific prompt/answer objects, sufficient distinct pathways, and a valid substantive transfer.

All 101 active skills have source-specific semantic specifications. Each has one UNDERSTAND item, two distinct retrieval items, two familiar application items, and one parent-linked changed-context transfer item. Representative high-risk lanes have explicit numerical, symbolic, enumeration, graph, method-selection or interpretation tasks, including C6.01, C6.07, C6.23, C6.25, C7.04, C7.05, C7.08, C7.27-C7.33 and C7.44-C7.51.

## Changed-transfer validation

The unit-level prefix variants were removed from the active bank. A valid changed item now requires:

- a registered parent;
- non-empty truthful `changedDimensions`;
- normalized prompts that are not equal and do not contain one another;
- token similarity below the substantive-change threshold;
- exact mastery targeting.

There are 101 mastery-eligible changed variants. All 101 pass the validator. The source-specific specification set and each bespoke high-risk override were inspected as part of the handoff review.

The first browser QA run was **47/48**, not reported as a pass. Test 45 found that legacy item `C6-Q04` still carried `changedWording` without parent lineage. That flag was removed. The final independent browser run was 48/48.

## Scaffolding and Excel evidence

Levels 1-3 now render different learner objects:

- Level 1 renders the complete eight-stage worked process: recognise, represent, select, formula, substitution, execute/tool, interpret and verify.
- Level 2 renders the process with three genuine learner-completed blanks.
- Level 3 renders six structural prompts with six required learner-entry fields.
- Levels 4 and 5 remain independent familiar and validated changed problems.

Excel retains its capability families and now records execution mode separately:

- `EXCEL_WORKFLOW_RECONSTRUCTION` for HTML reconstruction/ordering;
- `EXCEL_INDEPENDENT_EXECUTION` only for a supplied-workbook task with a source-checkable result.

The independent Steel task uses the supplied `TUT 6/T06-data.xlsx`: 100 Error values, source-checkable mean `-0.00023`, plus the rank-50 plotting-position formula. Ordering the HTML workflow is not labelled independent execution. Chapter 7 includes current-source `T.DIST` reconstruction evidence targeted to C7.32.

## Simulation QA

The simulation pool remains gated to source-ready assessed chapters. Selection is no longer ID-first. It seeds chapter coverage, then method-family coverage, then rotates through chapter/method/role/response-type strata with controlled randomisation. The last two simulation blocks provide the recent-question exclusion set.

Each block records:

- `questionOverlapWithPrevious`;
- `skillFamilyOverlapWithPrevious`;
- `distinctFromPrevious`;
- selected `chapters` and `skillFamilies`.

Where the bank has at least twice the requested capacity, a second block must keep question overlap at or below 50% to count as distinct. A non-distinct second run cannot count as representative. No official chapter weighting is invented; coverage is broadly balanced.

## Verification performed

1. Rendered and visually inspected Chapter 7 PDF pages 6-9; §2.6 was verified on page 7.
2. Read the supplied Steel workbook directly and reconciled its 100 numeric observations and mean `-0.00023`.
3. Parsed both embedded JavaScript blocks with the JavaScript engine: PASS.
4. Loaded the final HTML through a temporary localhost server in the in-app browser.
5. Clicked the rendered `RUN 48 LOGIC + WORKFLOW TESTS` control: **48/48 passed**.
6. Inspected the rendered source register: **101/101 semantic PASS**, **0 source-integrity issues**.
7. Rendered Levels 1, 2 and 3 and confirmed full process / three blanks / six required structural entries.
8. Rechecked browser console warnings and errors after the workflow: none.

## Mandatory QA results

| # | Test | Result |
|---:|---|:---:|
| 1 | Solution viewed excludes mastery | PASS |
| 2 | Substantial hint excludes mastery | PASS |
| 3 | Two exact-target retrievals reach RETRIEVE | PASS |
| 4 | One familiar application cannot reach APPLY | PASS |
| 5 | Two distinct exact-target applications reach APPLY | PASS |
| 6 | Substantive changed + delayed + APPLY can reach STABLE | PASS |
| 7 | High-confidence wrong method records confidence mismatch | PASS |
| 8 | Insufficient numeric process remains UNKNOWN-safe | PASS |
| 9 | Missing Chapter 9 blocks readiness | PASS |
| 10 | Legacy history is non-evidentiary | PASS |
| 11 | Due high-impact repair outranks new teaching | PASS |
| 12 | Revealed attempt is retained but excluded | PASS |
| 13 | Provisional attempt cannot satisfy readiness | PASS |
| 14 | Retrieval UI records retrieval context and exact target | PASS |
| 15 | Successful R1 schedules R2 | PASS |
| 16 | R2 has a distinct delayed-compatible item | PASS |
| 17 | Every ACTIVE Ch6/7 skill has executable semantic routes | PASS |
| 18 | No ACTIVE Ch6/7 semantic evidence gap | PASS |
| 19 | Interpretation errors remain INTERPRETATION | PASS |
| 20 | Wrong numeric answer remains UNKNOWN-safe | PASS |
| 21 | Immediate repair pass does not prematurely close high-impact repair | PASS |
| 22 | Delayed repair is real and staged | PASS |
| 23 | Substantive transfer resolves high-impact repair | PASS |
| 24 | Support level cannot manufacture changed evidence | PASS |
| 25 | Validated altered item records only substantive change | PASS |
| 26 | Level 6 creates a multi-question interleaved block | PASS |
| 27 | One Excel item cannot complete Excel readiness | PASS |
| 28 | Reconstruction and independent execution are distinct | PASS |
| 29 | Chapter 8 partial source blocks readiness | PASS |
| 30 | Generic source gate admits a newly ready assessed chapter | PASS |
| 31 | Current Stage-F run reports partial assessment coverage | PASS |
| 32 | Timeout remains valid when closed-book integrity holds | PASS |
| 33 | Student-t objects use current P26 §2.6 attribution | PASS |
| 34 | Canonical registry remains 50/58/75 = 183 | PASS |
| 35 | Chapter 8 estimator properties remain present | PASS |
| 36 | Print DOM preserves provisional, missing and HOLD warnings | PASS |
| 37 | Leaving a protected block invalidates its evidence | PASS |
| 38 | Current Chapter 7 §2.6 Student-t objects are ACTIVE and P26 | PASS |
| 39 | FPC remains provisional while Chapter 7 core is SOURCE_READY | PASS |
| 40 | Related skill does not imply mastery target | PASS |
| 41 | C6.01 cannot reach APPLY from z/mu questions | PASS |
| 42 | C7.04 cannot reach APPLY without enumeration evidence | PASS |
| 43 | `auditEvidenceCoverage()` uses `assessesSkillIds` | PASS |
| 44 | Prefix-only “Unlabelled transfer” variant is rejected | PASS |
| 45 | Every mastery-eligible changed variant is substantive | PASS |
| 46 | Consecutive Stage-F blocks differ where capacity allows | PASS |
| 47 | Simulation selection has broad chapter/method coverage | PASS |
| 48 | Student-t Excel evidence is present in the Chapter 7 tool pathway | PASS |

## Preserved v1.1 controls

The seven destinations, single-file offline delivery, closed-book/timeout integrity, solution and hint exclusions, attempt-context evidence, R1/R2/R3 scheduler, real delayed retrieval, staged repair, repair deduplication, UNKNOWN-safe diagnosis, confidence mismatch, Chapter 8/9 source locks, JSON validation, accessibility work, A4 warnings, no gamification, no AI tutor and no Excel clone remain in place.

## Remaining non-build constraints

- Chapter 8 cannot become source-ready until current material is supplied and verified.
- Chapter 9 remains source-missing and no content is inferred.
- C7.52-C7.58 remain provisional FPC evidence and cannot satisfy current-core mastery.
- A fresh learner state is intentionally NOT READY until real mastery, Excel, delayed, repair and protected-block evidence is earned.
