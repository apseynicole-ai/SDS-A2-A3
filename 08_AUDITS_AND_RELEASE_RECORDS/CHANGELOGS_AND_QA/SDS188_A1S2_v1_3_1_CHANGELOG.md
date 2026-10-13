# SDS188 A1S2 Master Learning System v1.3.1 — Changelog

## Scope

Bounded final freeze patch based on v1.3. No redesign, framework expansion or learner-facing feature was added.

## Fixed

### Per-skill repair integrity

- Replaced the single multi-skill repair record with one repair record per failed eligible/assessed ACTIVE canonical skill.
- Repair deduplication is now exact: `${skillId}|${errorFamily}`.
- Every repair stores one target only: `skillIds: [skillId]`.
- Immediate, delayed and transfer tasks are selected for that exact skill.
- Repair-stage completion now verifies:
  - the repair is OPEN;
  - the repair has exactly one canonical skill;
  - the attempt uses the exact scheduled task;
  - the attempt is correct and mastery-eligible;
  - the repair skill is present in the attempt's `eligibleSkillIds`.
- Resolving Skill A can no longer clear Skill B or count A-specific repair evidence for B.
- High-impact repair staging remains IMMEDIATE → DELAYED → TRANSFER.

### Mandatory QA

- Added Tests 70–72 for independent C7.45/C7.49 repair creation, resolution isolation and STABLE→REPAIR→own-repair restoration.
- Preserved Tests 1–69.
- Final actual runtime result: 72/72 PASS.

### Chapter 8 current transcript metadata

- Directly inspected `SDS TRANSCRIPT 10.rtfd/TXT.rtf` and `SDS TRANSCRIPT 11.rtfd/TXT.rtf`.
- Added both transcripts to the source register as P26 / 2026 / CURRENT_TRANSCRIPT_SUPPORT with pinpoint ranges.
- Added explicit supporting-source mappings to relevant Chapter 8 skills and questions.
- Updated Chapter 8 section notes for known-σ Z, unknown-σ t, proportion intervals, mean/proportion sample size, margin/precision and confidence-width effects.
- Updated C8.45 wording to “Use conservative .5 when no estimate exists.”
- Recorded Transcript 11's reason: `.5` maximises `p(1−p)` and therefore produces a conservative larger sample.
- Kept Chapter 8 at SOURCE_PARTIAL; no Chapter 8 mastery promotion was made.
- Kept Chapter 9 at SOURCE_MISSING; transcript recording numbers were not treated as chapter sources.

### Storage safety

- Changed the storage key to `SDS188_S2_MASTER_V1_3_1`.
- Added evidence stamp `1.3.1` while retaining schema 4.
- v1.3 progress without the v1.3.1 evidence stamp is non-evidentiary and is not migrated.

## Preserved

- Seven destinations and existing visual design.
- Canonical 183-skill structure: 101 ACTIVE / 75 PROVISIONAL / 7 HOLD.
- Current Chapter 7 Student-t lane and provisional FPC separation.
- Canonical corrections for C7.41/C7.42, C7.45–C7.51 and C8.14–C8.20.
- Evidence-mode eligibility, SIMPLE_CHOICE exclusions and production-first rules.
- `assessesSkillIds` / `eligibleSkillIds` separation.
- Solution/hint exclusions, R1/R2/R3 and the 36-hour delayed rule.
- Changed-transfer validation, Levels 1–7 and Excel evidence distinctions.
- Stage-F stratification/production guardrail, closed-book integrity, source locks, accessibility and A4 print warnings.

## Final verification

- 72/72 browser-run tests passed.
- Canonical manifest PASS.
- ACTIVE pathways: 101/101 for UNDERSTAND, RETRIEVE, APPLY, changed transfer and delayed compatibility.
- Source-integrity issues: 0.
- Browser console errors: 0.
- Browser console warnings: 0.

**Verdict: READY FOR FREEZE**
