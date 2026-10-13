# SDS188 A1S2 v1.1 Changelog

## Release scope

Controlled correction and completion patch over `SDS188_Semester2_MasterLearningSystem_A1S2_v1_0.html`. The seven-destination architecture, single-file offline delivery and wine/paper visual system were preserved. v1.0 was not overwritten.

## v1.0 structural defects fixed

- Changed storage from `SDS188_S2_MASTER_V1` to `SDS188_S2_MASTER_V1_1` with schema version 2.
- Removed silent evidentiary reuse of v1.0 data; optional archive is reference-only.
- Restored canonical C7.58 and eliminated the dangling section reference.
- Reconciled C7.44-C7.58 and Chapter 8 estimator-foundation skills to the audited matrix.
- Separated `responseType`, `learningRole` and actual attempt `context`.
- Replaced question-type-based mastery with context- and metadata-based evidence.
- Removed support-number manufacture of changed, mixed and timed flags.
- Added router eligibility checks and explicit `CONTENT_GAP` behavior.
- Replaced chapter-default source attribution with question/variant-level metadata.
- Replaced generic wrong-option = SELECTION diagnosis with validated diagnostic dimensions and wrong-answer maps.
- Added UNKNOWN safety for underdetermined numeric errors.
- Replaced Boolean repair placeholders with immediate, delayed and transfer task objects.
- Added repair deduplication by primary skill and error family.
- Replaced one-Boolean Excel readiness with family-level evidence.
- Replaced hard-coded simulation chapters with the A1S2 assessment profile.
- Corrected timeout handling so integrity-preserving timed-out runs remain valid.
- Replaced the Chapter-9-only readiness check with a generic assessed-chapter source gate.
- Strengthened schema, reference and timestamp validation on JSON import.
- Completed tab/panel ARIA relationships and arrow-key behavior.
- Hid source/reference destinations during protected closed-book blocks.

## Major new evidence behavior

- Understanding success schedules a different R1 task.
- R1 completion records retrieval evidence and schedules R2.
- R2 completion uses a different registered item, records delayed evidence and schedules R3.
- Retrieval entries now carry retrieval ID, skill, stage, task/variant, due/completion time and attempt ID.
- Mastery requires source-valid independent evidence: understanding, two retrievals, two familiar applications, changed transfer and delayed evidence.
- Immediate repair no longer clears a high-impact error.
- Delayed repair uses the 36-hour minimum.
- High-impact repair clears only after validated transfer.
- Production-first choice tasks require an object/method/event commitment before cues appear.
- Region commitment is recorded separately from final calculation correctness.
- Level 6 and Level 7 are multi-question blocks, not labels on ordinary questions.
- Stages A-F now create distinct labelled, unlabelled, altered, trap, mini-block and full-simulation behavior.

## Question-bank expansion

- Expanded to 142 registered tasks/variants: 123 ACTIVE and 19 PROVISIONAL.
- Added 13 validated `VARIANTS` with parent lineage, source basis, changed dimensions and evidence flags.
- Added active numeric, formula-entry, symbolic-event, region, ordered-step, structured-text and structured-interpretation controls.
- Added validated region tasks for left, right, between, outside, central and continuity-corrected boundaries.
- Added two distinct retrieval and two familiar-application opportunities plus changed/repair compatibility for every ACTIVE Chapter 6/7 skill.
- Added `auditEvidenceCoverage()` and `auditSourceIntegrity()`.

## Excel expansion

- Added all six required evidence families: function selection, formula reconstruction, argument mapping, output interpretation, error detection and workflow execution.
- Used the supplied Chapter 6 workbooks for `NORM.DIST`, `NORM.INV`, `NORM.S.DIST`, `NORM.S.INV`, `j/(n+1)` and normal-probability-plot workflow tasks.
- Added current-source Chapter 7 known-sigma normal CDF/direct-distribution production tasks.
- Preserved Chapter 8 Excel as awaiting a current source.
- Did not build an Excel clone.

## Academic registry and source-control corrections

- Canonical skill counts are now Chapter 6 = 50, Chapter 7 = 58, Chapter 8 = 75, total = 183.
- Restored C7.52-C7.58 as a clearly provisional finite-population lane.
- Added the complete Chapter 8 estimator-properties foundation: point/interval, mapping estimators to parameters, unbiasedness, consistency, relative efficiency, sampling uncertainty, interval structure, limits/width and correct interpretation.
- Verified the Chapter 8 deck pages defining unbiasedness, consistency and relative efficiency.
- Verified finite-population, bootstrapping and totals/auditing extracts and preserved their provisional/HOLD status.
- Found a real conflict: the supplied current Chapter 7 PDF does not contain the contract-claimed Student-t / `T.DIST` material. C7.27-C7.33 were downgraded to provisional rather than guessed or falsely promoted.
- Kept current `> 5` proportion conditions and the known-sigma Chapter 7 routes.
- Kept Chapter 9 empty and untitled.

## Read / Print and traceability

- Expanded compact chapter reference content and restored estimator-property teaching.
- Added visible Chapter 7 patch, Chapter 8 provisional, Chapter 9 missing and HOLD warnings.
- Added question-level source, authority, year, pinpoint, variant class, validation, response type, Excel family, solution authority and status table.
- Added per-chapter bank counts to the Source Register.

## QA expansion

- Replaced the synthetic 13/13 claim with 37 logic/workflow/invariant tests using the real registries and submission functions.
- Added real browser probes for task routing, retrieval scheduling, production-first behavior, error diagnosis, staged repair, mixed blocks, closed-book locks, keyboard tabs, mobile layout and JSON import validation.
- Final result: 37/37 suite PASS, 0 ACTIVE Chapter 6/7 content gaps, 0 dangling IDs, 0 duplicate DOM IDs and 0 browser console errors/warnings.

## Deliberate non-changes

- No redesign of the seven destinations.
- No new mastery states.
- No framework, backend, npm, CDN, API or network dependency.
- No gamification, streaks, XP, badges or decorative animation.
- No AI tutor or live generated questions.
- No Excel or calculator clone.
- No Chapter 9 inference.
- No Chapter 8 promotion or invented 2026 Excel workflow.
- No weakening of mastery thresholds to satisfy QA.
