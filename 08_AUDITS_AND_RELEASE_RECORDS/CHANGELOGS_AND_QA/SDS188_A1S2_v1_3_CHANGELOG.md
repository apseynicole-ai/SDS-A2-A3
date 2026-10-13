# SDS188 A1S2 v1.3 Changelog

## Release

`v1.3 FINAL EVIDENCE-QUALITY + CANONICAL-ID RECONCILIATION`

Bounded patch of `SDS188_Semester2_MasterLearningSystem_A1S2_v1_2.html`. The seven-destination interface and visual design were not rebuilt.

## Changed

### Evidence-response contract

- Added immutable per-skill `evidenceModes` for UNDERSTAND, RETRIEVE, APPLY, and transfer.
- Added explicit modes for simple choice, production-first choice, short text, numeric, formula, symbolic event, region, ordered steps, structured interpretation, multi-part production, Excel reconstruction, and Excel independent execution.
- Added `isEvidenceModeEligible(task, skillId, requirement)` to the runtime mastery gate.
- Visible-option choice remains useful for teaching/UNDERSTAND but cannot establish RETRIEVE, APPLY, transfer, or STABLE.
- Production-first choice requires a correct commitment before options appear.
- Attempts now retain `eligibleSkillIds`, controlling requirement, evidence mode, and production-commitment validity.
- Mastery, retrieval, repairs, and Excel evidence update only the eligible assessed targets.

### Production evidence

- Converted generated R1/R2 tasks from binary choice to independent short-text or numeric reconstruction.
- Converted A1/A2/changed-transfer tasks to operation-appropriate production modes.
- Added genuine region controls for left/right region commitments.
- Preserved binary MCQs as recognition/teaching items rather than deleting them.
- Preserved genuine changed-variant lineage and validated all 101 mastery-eligible variants.

### Canonical manifest and semantic alignment

- Added frozen `CANONICAL_SKILL_MANIFEST` for all 183 C6/C7/C8 IDs.
- Added `auditCanonicalSkillManifest()` with missing, duplicate, extra, shifted-definition, operation, status, and source-class checks.
- Reconciled runtime skill names and operations against the source-to-skill contract.
- Corrected C7.41 to the between-limits `p` operation.
- Corrected C7.42 to central probability bounds for `p`.
- Corrected all C7.45-C7.51 teaching, retrieval, application, transfer, and audit semantics.
- Reconciled provisional C8.14-C8.20 to the canonical contract without promotion.

### Semantic audit

- Rebuilt the active evidence audit around both `assessesSkillIds` and evidence-mode eligibility.
- Added canonical-operation validation against prompt/answer content and the source-grounded semantic specification.
- Audit rows now report canonical skill/operation, required and actual modes, task, response type, role, production-first state, source, semantic target, result, and reason.
- Metadata such as `SOURCE_SPECIFIC` can no longer self-certify a task.
- Final active results: UNDERSTAND 101/101, genuine RETRIEVE 101/101, genuine APPLY 101/101, changed transfer 101/101, delayed 101/101.

### Simulation quality

- Preserved v1.2 chapter/method stratification, controlled randomisation, recent-question exclusion, and overlap tracking.
- Added an internal Stage F guardrail limiting simple-choice dominance to no more than 50% where validated alternatives exist.
- Ensured production-mode diversity is selected where bank capacity permits.
- Did not invent official chapter or method percentages.

### Storage safety

- Changed storage key to `SDS188_S2_MASTER_V1_3`.
- Changed schema to version 4.
- v1.2 schema 3 mastery, including RETRIEVE/APPLY/STABLE, is rejected and cannot migrate as v1.3 evidence.

### QA

- Continued the suite from 48 through 69 tests.
- Added all mandatory response-quality, manifest, C7.41-C7.51, C8.14-C8.20, semantic-audit, Stage F, and storage-isolation invariants.
- Final in-browser result: 69/69.
- Final canonical task-requirement result: 1,145/1,145.
- Final source-integrity result: 0 issues.

## Direct source confirmation retained

- Direct visual inspection of `Chapter 7 /SDS Chapter 7 NOTES.pdf`, page 7, §2.6 confirms the current Student-t model and `T.DIST` route.
- C7.27-C7.33 remain ACTIVE/P26.
- C7.52-C7.58 remain PROVISIONAL/legacy-supported.
- Chapter 7 current core remains `SOURCE_READY`.

## Preserved without regression

- Seven destinations and visual design.
- Single offline HTML architecture.
- `skillIds` versus `assessesSkillIds` separation.
- Source-level mastery eligibility.
- Solution/hint exclusion and attempt context.
- R1/R2/R3, real delayed retrieval, staged repair, and repair deduplication.
- UNKNOWN-safe diagnosis and confidence mismatch.
- Real changed variants and Levels 1-3 scaffolding.
- Excel reconstruction versus independent execution and the Steel workbook execution task.
- Dynamic assessed-chapter source gate and simulation diversity.
- Closed-book integrity, timeout rules, JSON validation, accessibility, and A4 source warnings.
- Chapter 8 `SOURCE_PARTIAL` and Chapter 9 `SOURCE_MISSING` locks.
- No gamification, AI tutor, Excel clone, or learner-facing feature additions.

## Freeze handoff

Verdict: **READY FOR FINAL INDEPENDENT FREEZE AUDIT**.

Stop point honored: no redesign and no post-v1.3 feature proposal.
