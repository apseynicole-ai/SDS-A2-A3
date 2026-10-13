# SDS188 A1S2 2026 — Chapter 8 Guided Learn v1.4.1 Audit Report

## Scope
Hostile pedagogical/source audit of the v1.4 Chapter 8 Guided Learn layer against the supplied Chapter 8 deck, Tutorial 8, exact t table, finite-population extract, bootstrap extract and 2026 A1S2 practice-test evidence. This audit is about the learner-facing Chapter 8 teaching layer, not a redesign of the frozen v1.3.1 mastery engine.

## Verdict on v1.4
**🟡 BOUNDED PEDAGOGICAL REPAIRS REQUIRED.** The 12-lesson build was mathematically sound and substantially complete, but the source-completeness audit found three genuine omissions/under-teachings before Chapter 8 could be called excellent.

### Finding 1 — HIGH: Chapter 8 Ethical Issues / reporting guidance was missing
The official Chapter 8 deck includes an explicit Ethical Issues slide requiring a confidence interval when reporting a point estimate, plus the confidence level, sample size and an interpretation. The v1.4 Guided Learn sequence did not teach this explicitly.

**Repair:** added Lesson 8.13, `Responsible Confidence-Interval Reporting & Chapter Synthesis`, with recognition cues, explanation, reporting checklist, Excel handoff, say-aloud retrieval, check, worked example, try item, common trap and exit criterion.

### Finding 2 — MEDIUM: df=n−1 was taught procedurally but the source intuition was missing
The source explains degrees of freedom using the “mean of three numbers” idea: once the mean is fixed, only n−1 observations are free to vary. v1.4 taught df=n−1 and exact t-table lookup but not this intuition.

**Repair:** strengthened Lesson 8.4 with the source intuition.

### Finding 3 — MEDIUM: bootstrap trigger/software-scale explanation was thinner than the source
The source explicitly motivates bootstrapping from a right-skewed/non-normal processing-time example and says practical bootstrap procedures usually use a very large number of resamples (typically thousands) with software.

**Repair:** strengthened Lesson 8.11 with the source boxplot/non-normal trigger and practical software/resample-scale explanation.

### Finding 4 — LOW: confidence cannot be 100% was not stated explicitly
The source states confidence is a percentage less than 100% and “can never be 100% confident.”

**Repair:** added this explicitly to Lesson 8.2.

## Print audit of v1.4
The 29-page regression PDF was rendered page-by-page and visually inspected. The Chapter 8 Guided Learn supplement (pages 16–27) is readable, unclipped and free of overlap/broken glyphs. Each lesson is intentionally given substantial white space, which is acceptable for note-taking. No print blocker was found.

The v1.4.1 patch adds a static printable Lesson 8.13. A fresh v1.4.1 browser print should still be independently regenerated in the external audit because the local Chromium runtime in this environment became unavailable after the initial v1.4 print pass.

## Regression preservation
The v1.4.1 candidate preserves all eight pre-existing script layers byte-for-byte:

1. base engine
2. `v11-correction-layer`
3. `chapter8-provisional-content-pack`
4. `ch9-completeness-patch-v1`
5. `ch8-ch9-final-content-patch`
6. `ch8-ch9-final-mastery-integration-patch`
7. `a1s2-2026-practice-excel-integration-patch`
8. `ch8-guided-learn-v1-4`

Only one new ninth script was appended: `ch8-guided-learn-v1-4-1-audit-patch`.

## Source-gate decision
This teaching-completeness patch **does not yet promote** the canonical Chapter 8 source gate. `SOURCE_PARTIAL` and C8.69–C8.75 HOLD are deliberately preserved until a separate source-readiness reclassification audit is performed. That prevents a pedagogical patch from silently changing mastery/simulation eligibility.

## v1.4.1 candidate identity
- Filename: `SDS188_A1S2_2026_MasterLearningSystem_v1_4_1_CH8_GUIDED_LEARN_AUDIT_PATCH_CANDIDATE.html`
- Size: 877,049 bytes
- SHA-256: `91a678c5723e2ddcb3c8cf8d41ebab0f44f72bce747568ec1d2bc448ba489c6c`
- MD5: `db60d87da54e842d0aa6f00e9c7a66f2`

## Required next gate before Chapter 7
Run one independent hostile audit of the exact v1.4.1 bytes, focused on:
- Chapter 8 source completeness across the full supplied deck and Tutorial 8;
- correctness of all 13 lessons and worked/try answers;
- exact t-table fidelity;
- Excel-route fidelity;
- FPC and bootstrap fidelity;
- preservation of C8.69–C8.75 HOLD;
- fresh-load routing and formative state;
- actual print-to-PDF containing all 13 lessons;
- no regression to the previous eight script layers.

Only after that audit passes should Chapter 8 be treated as pedagogically complete and the Chapter 7 Guided Learn build begin.
