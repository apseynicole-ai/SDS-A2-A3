# SDS188 A1S2 v1.3 QA Report

Build: `SDS188_Semester2_MasterLearningSystem_A1S2_v1_3.html`  
Implementation base: v1.2, patched in place without redesign  
QA date: 2026-08-09 (Africa/Johannesburg)  
HTML SHA-256: `55109d0da3e75e1ea7212ce68974b696ef9be84b6bfd1583047a5f05c4bf2ff7`

## Freeze verdict

**READY FOR FINAL INDEPENDENT FREEZE AUDIT**

This is an engine-build verdict, not a learner-readiness claim. A1S2 remains `NOT READY` in the application because Chapter 8 is `SOURCE_PARTIAL` and Chapter 9 is `SOURCE_MISSING`; those source locks were intentionally preserved.

## Evidence used

- Canonical ID authority: `SDS188 A1S2 — Source-to-Skill Contract v1.md`.
- Implementation base: `SDS188_Semester2_MasterLearningSystem_A1S2_v1_2.html`.
- Current Chapter 7 authority: `Chapter 7 /SDS Chapter 7 NOTES.pdf`.
- Direct visual inspection of PDF page 7 confirmed §2.6, “What if sigma is unknown?”, the Student-t model, `T=(Xbar-mu)/(s/sqrt(n))`, and `=T.DIST(tcalc,df,TRUE)`. C7.27-C7.33 remain ACTIVE/P26; C7.52-C7.58 remain separately PROVISIONAL.

## Recalculated implementation totals

| Measure | Result |
|---|---:|
| Canonical skills | 183 |
| ACTIVE skills | 101 |
| PROVISIONAL skills | 75 |
| HOLD skills | 7 |
| Total questions/variants | 737 |
| Canonical manifest reconciliation | PASS |
| Changed variants with substantive lineage | 101/101 |
| Source-integrity issues | 0 |

Status counts reconcile exactly: `101 + 75 + 7 = 183`.

## Task and evidence counts

Counts describe actual response types or controlling evidence modes. Excel counts intentionally overlap formula/ordered-step response types where the Excel mode is the stronger controlling contract.

| Task/evidence class | Count |
|---|---:|
| Simple-choice teaching/recognition | 175 |
| Production-first choice | 111 |
| Numeric response | 97 |
| Formula response | 7 |
| Symbolic response | 10 |
| Region response | 12 |
| Structured interpretation evidence | 59 |
| Excel reconstruction evidence | 12 |
| Excel independent execution evidence | 1 |
| Short-text reconstruction | 188 |
| Ordered-steps response | 1 |
| Multi-part production evidence | 74 |

## ACTIVE-skill pathway results

These are separate gates; no combined green number substitutes for them.

| Pathway | Complete |
|---|---:|
| UNDERSTAND | 101/101 |
| Genuine RETRIEVE | 101/101 |
| Genuine APPLY | 101/101 |
| Genuine changed transfer | 101/101 |
| Delayed-compatible | 101/101 |
| Full semantic evidence pathway | 101/101 |

The canonical task-requirement audit checked 1,145 actual task/requirement combinations and passed 1,145/1,145. Each row records skill, canonical operation, required modes, actual task and response mode, learning role, production-first state, source, semantic target, and a reasoned result. The audit compares task prompt/answer content with the source-grounded semantic specification and canonical operation; `SOURCE_SPECIFIC`, `semanticTarget`, and `designatedEvidenceTarget` labels cannot pass it by themselves.

## Mastery-engine checks

- `isEvidenceModeEligible(task, skillId, requirement)` checks both `assessesSkillIds` and the skill's immutable `evidenceModes` contract.
- Visible-option `SIMPLE_CHOICE` is ineligible for RETRIEVE, APPLY, and transfer.
- `PRODUCTION_FIRST_CHOICE` requires a correct pre-option commitment and is limited to irreducibly categorical recognition/selection operations.
- Numeric, formula, symbolic/event, region, structured interpretation, enumeration/procedure, and Excel requirements are operation-specific.
- Attempts store `eligibleSkillIds`, `requirement`, `evidenceMode`, and production-commitment validity. Mastery, retrieval scheduling, repair evidence, and Excel evidence update only eligible targets.
- v1.2 evidence cannot import: v1.3 uses `SDS188_S2_MASTER_V1_3`, schema 4, and rejects schema 3.

## Canonical reconciliation

`CANONICAL_SKILL_MANIFEST` is frozen and contains every C6.01-C6.50, C7.01-C7.58, and C8.01-C8.75 ID with chapter, canonical name, operation, status, and source classification. `auditCanonicalSkillManifest()` fails on a missing, duplicate, extra, shifted, wrong-operation, or wrong-status/source entry.

High-risk mappings verified:

- C7.41: solve between limits for `p` with two-boundary production.
- C7.42: find central probability bounds for `p` with inverse/bounds production.
- C7.45: preserve declared group order 1-2.
- C7.46: centre at `mu1-mu2`.
- C7.47: combine variances for the two-mean SE.
- C7.48: translate group 1 greater than group 2 to difference `>0`.
- C7.49: translate greater by more than `c` to difference `>c`.
- C7.50: standardise and calculate probability.
- C7.51: explain the sample-size effect on difference SE.
- C8.14-C8.20 match the provisional contract and remain PROVISIONAL.

## Runtime QA execution

The HTML was served locally and exercised in the Codex in-app browser, not only parsed as source text.

- Page loaded with title `SDS188 · A1S2 Master Learning System v1.3`.
- Seven destinations rendered and remained keyboard/ARIA tab destinations.
- Browser console warnings/errors: 0.
- Built-in suite result: **69/69 passed**.
- Semantic evidence table: **101/101 PASS**.
- Canonical evidence-response contract: **1,145/1,145 PASS**.
- Two-run Stage F diversity, chapter/method stratification, recent-item exclusion, overlap tracking, and the production-mix guardrail passed.
- Stage F simple-choice share is capped at 50% where validated bank capacity permits; this is an internal quality rule, not an asserted assessment weighting.

## New mandatory tests 49-69

| # | Invariant | Result |
|---:|---|---|
| 49 | Visible-option MCQ cannot establish RETRIEVE for a production-capable skill | PASS |
| 50 | Two binary choices cannot establish APPLY for C6.07 | PASS |
| 51 | Numeric production can establish APPLY for C6.07 when other gates hold | PASS |
| 52 | C7.04 APPLY requires genuine enumeration | PASS |
| 53 | C6.23 APPLY requires plotting-position/procedure evidence | PASS |
| 54 | Manifest reconciles C6.01-C6.50 | PASS |
| 55 | Manifest reconciles C7.01-C7.58 | PASS |
| 56 | C7.41 between-limits operation and production evidence | PASS |
| 57 | C7.42 central-bounds operation and production evidence | PASS |
| 58 | C7.45 order cannot be mastered by centre-only work | PASS |
| 59 | C7.46 centre alignment | PASS |
| 60 | C7.47 combined-variance SE alignment | PASS |
| 61 | C7.48 `>0` event alignment | PASS |
| 62 | C7.49 `>c` event alignment | PASS |
| 63 | C7.50 standardise/calculate alignment | PASS |
| 64 | C7.51 sample-size effect alignment | PASS |
| 65 | C8.14-C8.20 provisional manifest alignment | PASS |
| 66 | Coverage audit checks evidence mode, not labels only | PASS |
| 67 | Wrong-operation task labelled `SOURCE_SPECIFIC` fails | PASS |
| 68 | Stage F contains a meaningful production mix where capacity allows | PASS |
| 69 | v1.2 mastery cannot migrate to v1.3 | PASS |

## Regression scope

Tests 1-48 remained passing, covering the preserved v1.2 architecture: solution/hint exclusion, source eligibility, R1/R2/R3 and delayed retrieval, staged deduplicated repair, UNKNOWN-safe diagnosis, confidence mismatch, changed-variant validation, Levels 1-3 scaffolding, Excel family separation, Student-t/P26, FPC provisional separation, dynamic assessed-chapter source gate, Stage F diversity, closed-book and timeout validity, import validation, source warnings, and the Chapter 8/9 locks.

No interface redesign, mastery-vocabulary change, threshold weakening, Chapter 8 promotion, Chapter 9 inference, or v1.2 mastery migration was made.
