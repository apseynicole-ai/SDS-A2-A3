# SDS188 A1S2 v1.3.1 — Chapter 8 + Chapter 9 Final Completeness Candidate QA

## Canonical base
- Base file: `SDS188_Semester2_MasterLearningSystem_A1S2_v1_3_1_CH9_SOURCE_READY_COMPLETENESS_PATCHED.html`
- Base MD5: `9bd509e30d6aa8682449e7aa1ce1b54e`
- Base SHA-256: `b00dbf33a5926f22d98c4f18290331b807dc8f484632b0f17ead4f6d3f0d2fea`

## Output
- File: `SDS188_Semester2_MasterLearningSystem_A1S2_v1_3_1_CH8_CH9_FINAL_COMPLETENESS_CANDIDATE.html`
- MD5: `156b3551ee7a5aed535bbeb5ce781f27`
- SHA-256: `88ace0b65fbc7313eaefdb9055f476aa586d8e53b84ecd9d217c6871cbf57ffa`

## Frozen-engine non-regression
The `v11-correction-layer` script is byte-identical before and after the patch.

- SHA-256 before: `a4f3203a0e0d43d3add6cdc32640cc26336e9296e2a23c080c6a02188a39ce6a`
- SHA-256 after:  `a4f3203a0e0d43d3add6cdc32640cc26336e9296e2a23c080c6a02188a39ce6a`

No frozen v1.3.1 engine function was edited or replaced.

## Main content repairs
1. Restored the independently audited Chapter 8 provisional teaching/practice pack into the canonical Ch6–9 system.
2. Preserved Chapter 8 `SOURCE_PARTIAL`; C8.01–C8.68 remain `PROVISIONAL`, C8.69–C8.75 remain `HOLD`.
3. Preserved the current 2026 Transcript 10/11 support in Chapter 8 section notes.
4. Added official Tutorial 9 Chapter 8 carry-over practice:
   - Q15 proportion CI
   - Q16(a) 95% proportion CI
   - Q16(b) 99% proportion CI
5. Added Tutorial 9 Q19/Q20 as clearly separated `HOLD` auditing extensions, not readiness evidence.
6. Added source-grounded optional HOLD tasks for C8.69–C8.75 so no Chapter 8 skill is left without any task object, while preserving their exclusion from normal routing/readiness.
7. Added full numeric Chapter 9 Tutorial 9 Q21(a)/(b) power items at α=.05:
   - Q21(a), true μ=197: power `0.676064762`
   - Q21(b), true μ=194: power `0.994740716`
8. Replaced observer-heavy Chapter 8 UI augmentation with event-driven augmentation so the frozen engine QA remains usable in the larger Ch6–9 file.
9. Added a small responsive fix; Chapter 8 Learn view showed no document-level horizontal overflow at 380px in validation.

## Runtime bank counts after patch
| Chapter | Questions | Variants | Total |
|---|---:|---:|---:|
| 6 | 315 | 50 | 365 |
| 7 | 305 | 51 | 356 |
| 8 | 502 | 75 | 577 |
| 9 | 239 | 40 | 279 |

Chapter 8 status counts: 526 `PROVISIONAL`, 51 `HOLD`.

All 75 Chapter 8 skills now have at least one task/variant object. C8.69–C8.75 each have at least seven HOLD-only source-grounded tasks and remain excluded from standard routing and final readiness.

## Automated QA
Executed in headless Chromium against the actual built HTML:

- Frozen v1.3.1 engine: **80/80 PASS**
- Chapter 8 content QA: **24/24 PASS**
- Chapter 9 completeness QA: **13/13 PASS**
- Final repair QA: **12/12 PASS**
- Combined UI QA button: **129/129 PASS**
- Page runtime errors during normal load/navigation: **0**
- Console errors/warnings during normal load/navigation: **0**

Chapter 8 Learn UI validation:
- Chapter 8 provisional dashboard renders: PASS
- Tutorial 9 Chapter 8 carry-over panel renders: PASS
- Chapter 8 Read/Print pack renders: PASS
- 380px document-level horizontal overflow: none (`scrollWidth = clientWidth = 380`)

## Important gate
This candidate deliberately does **not** change Chapter 8 to `SOURCE_READY`. The global A1S2 gate therefore remains blocked by Chapter 8 `SOURCE_PARTIAL` until independent source/coverage audit authorises a status change. C8.69–C8.75 remain HOLD because A1 scope for the auditing/totals extension is not confirmed by the current core Chapter 8 source map.

## Next step
Send this exact output file to the independent second-platform auditor (Claude). Freeze only if that audit grants sign-off or after any genuine required repair is completed and re-audited.
