# SDS188 A1S2 v1.2 Changelog

Verdict: **READY FOR INDEPENDENT AUDIT**

## Scope

Targeted correction of `SDS188_Semester2_MasterLearningSystem_A1S2_v1_1.html`. The seven destinations, styling, offline architecture and mastery vocabulary were preserved. No interface redesign or framework expansion was performed.

## P0 corrections

### Chapter 7 Student-t source

- Corrected the v1.1 source error after direct visual inspection of `SDS Chapter 7 NOTES.pdf` §2.6, page 7.
- Set C7.27-C7.33 to `ACTIVE`, current `P26`, `2026`, §2.6.
- Added exact-target evidence for known versus unknown sigma, sample s, Student-t recognition, T calculation, df, `T.DIST`, and Z-versus-t discrimination.
- Set Chapter 7 current core to `SOURCE_READY`.
- Retained C7.52-C7.58 as separately `PROVISIONAL` / legacy-supported FPC skills.
- Corrected Learn, print, source-register and task metadata warnings.

### Topic relation versus mastery

- Added `assessesSkillIds` independently of topical `skillIds`.
- Changed mastery, retrieval, repair, Excel and readiness updates to use only `assessesSkillIds`.
- Persisted both related and assessed skill arrays on attempts.
- Added schema 3 / `SDS188_S2_MASTER_V1_2` isolation so v1.1 over-tagged evidence cannot migrate.

### Semantic coverage

- Rebuilt `auditEvidenceCoverage()` around exact assessed targets.
- Added per-skill task-ID lists for understand, retrieval, familiar application, changed transfer, delayed evidence, three repair stages and Excel evidence.
- Added `semanticCoverageStatus` and exact-target/source-specific invariants.
- Added source-specific semantic specifications for all 101 ACTIVE Chapter 6/7 skills; no active fallback template remains.
- Added explicit high-risk numerical, enumeration, plotting, Student-t and two-mean pathways.

### Changed variants

- Removed unit-level prefix-only “Unlabelled transfer” variants.
- Added parent-linked variants with recorded `changedDimensions`.
- Added normalized prompt comparison and similarity/containment rejection.
- Removed a legacy unparented `changedWording` flag from `C6-Q04` after the first browser QA correctly failed it.
- Final changed-transfer audit: 101/101 mastery-eligible variants pass.

## P1 corrections

### Levels 1-3

- Level 1 now renders an eight-stage worked process.
- Level 2 renders the process with three required blanks.
- Level 3 renders six structural prompts with six required entries.
- Levels 4-7 and mastery thresholds are unchanged.

### Simulations

- Replaced first-ID selection with source-gated stratification by chapter, method family, learning role and response type.
- Added controlled randomisation and a recent-question exclusion window.
- Added `questionOverlapWithPrevious`, `skillFamilyOverlapWithPrevious`, `distinctFromPrevious`, selected chapters and selected skill families to block records.
- Prevented a materially overlapping second run from counting as representative when bank capacity allows diversity.
- Did not invent official chapter weights.

### Excel evidence

- Added the current Chapter 7 `T.DIST` evidence pathway.
- Distinguished `EXCEL_WORKFLOW_RECONSTRUCTION` from `EXCEL_INDEPENDENT_EXECUTION`.
- Reclassified HTML workflow ordering as reconstruction.
- Added a source-checkable independent Steel workbook task using the supplied 100 Error values and mean `-0.00023`.

### QA and reporting

- Replaced the invalid C6F-to-C6.01 APPLY tests.
- Expanded the rendered suite to 48 tests, including mandatory tests 38-48.
- Recalculated the canonical/active/semantic counts instead of copying 94/94.
- Added rendered source-integrity and mastery-target registers.

## Preserved

- Seven learner destinations and existing visual design.
- Single offline HTML.
- Closed-book integrity, timeout validity and assessment source gate.
- Solution/hint mastery exclusion and attempt-context evidence.
- R1/R2/R3 delayed retrieval.
- Staged, deduplicated repair with UNKNOWN-safe diagnosis and confidence mismatch.
- Chapter 8 provisional and Chapter 9 missing-source locks.
- JSON validation, accessibility and A4 print warnings.
- No gamification, AI tutor, Excel clone or unsupported Chapter 9 content.

## Verification summary

- Embedded JavaScript syntax: PASS.
- Final rendered browser QA: 48/48 PASS.
- ACTIVE semantic pathways: 101/101 PASS.
- Source-integrity issues: 0.
- Browser console warnings/errors: 0.
