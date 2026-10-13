# SDS188 Chapter 8 Provisional Content QA Report

## Verdict

**READY FOR INDEPENDENT CHAPTER 8 AUDIT**

Deliverable classification:

- ENGINE v1.3.1
- plus CHAPTER 8 PROVISIONAL CONTENT PACK
- not a new engine version

The controlling status remains:

- `chapterSourceStatus = "SOURCE_PARTIAL"`
- `C8.01-C8.68 = PROVISIONAL_CORE`
- `C8.69-C8.75 = HOLD`
- `chapter8CanSatisfyFinal2026SourceGate = false`
- `excelContentStatus = "LEGACY_SOURCE_SUPPORTED"`
- `excelAssessmentRoute2026 = "AWAIT_CURRENT_SOURCE"`
- `tTableConventionStatus = "AWAIT_MEMO_OR_CURRENT_SOURCE"`

Chapter 8 can teach, practise, expose provisional retrieval and repair tasks, and run provisional mixed sets. Chapter 8 evidence remains non-mastery and cannot satisfy final A1S2 readiness.

## Files audited

| Code | File | Use |
|---|---|---|
| P26 | `Admin/2026 Module Framework SDS188.pdf` | Current assessment and Excel authority. Pages 4-7 confirm Excel outcomes/resources and that A1S2 is computer-based and primarily tests Excel competency. |
| OFF23 | `Chapter 8/SDS 188 chapter8_2023.pdf` | Main Chapter 8 theory, formula rules, examples, finite-population correction, and bootstrap sequence. |
| OFF22 | `Chapter 8/SDS 188 Tutorial 8_2022.pdf` | Official Tutorial 8 stems, Questions 1-12. |
| OFF | `Chapter 8/SDS 188 CHAPTER 8 t-table.pdf` | Critical-value reference. |
| TXT | `Chapter 8/Estimation and Sample Size Determination for Finite Populations_Beraming en Bepaling van steekproefgrootte vir eindige populasies.pdf` | Strong finite-population source. |
| TXT | `Chapter 8/Bootstrapping_Skoenlusberaming.pdf` | Strong bootstrap source. |
| TXT/HOLD | `Chapter 8/Confidence Intervals for Totals_Vertrouensintervalle vir totale.pdf` | Preserved HOLD-only material. |

SHA-256 checks confirmed that the alternate lowercase/short-name Chapter 8 deck, Tutorial 8, and t-table files are exact duplicates. They were not counted as independent evidence.

The four Tutorial 8 pages and the key source-deck pages for known-sigma CI, unknown-sigma CI, proportion CI, sample-size rules, FPC, and bootstrapping were rendered and visually inspected against extracted text.

## Source decisions verified

- Known sigma uses z and `sigma/sqrt(n)`.
- OFF23 wording is preserved: if the population is not normal, use a large sample `n > 30`.
- Unknown sigma uses sample `s`, Student t, and `df=n-1`.
- The supplied t table has rows 1-30, 40, 60, 80, 100, 1000, and z. No lecturer rule for a missing row was inferred.
- Proportion CI keeps strict `np > 5` and `n(1-p) > 5`.
- Mean and proportion sample-size results always round upward.
- C8.42 expected/pilot `s` is marked `OFF23-CONFIRMED`.
- C8.45 conservative `p=.5` is marked `OFF23-CONFIRMED`, not 2026-confirmed.
- FPC is `sqrt((N-n)/(N-1))`, used for finite-population sampling without replacement when `n/N > .05` under the supplied rule.
- Bootstrap resamples from the observed sample, with replacement, at the same `n`, then calculates, repeats, orders, and cuts `alpha/2` from each tail.
- The source 90%/100-resample bootstrap interval remains `(36.6296, 51.5926)`.

## Tutorial 8 answer register

There is no Tutorial 8 memo in the supplied pack. Every stem is `OFFICIAL_ORIGINAL`; every solution below is `derived_and_independently_checked`.

| Item | Independently checked answer | Core check |
|---|---|---|
| Q1 | `(83.0400, 86.9600)` | `85 +/- 1.959964(8/sqrt(64))` |
| Q2 | `(114.6967, 135.3033)` | `125 +/- 2.575829(24/sqrt(36))` |
| Q3 | Confidence describes the long-run interval procedure for the population mean monthly sales, not individual months. | Parameter, interval, 95% confidence, context, procedure meaning. |
| Q4(a) | `(1.9802, 1.9998)` litres | Known-sigma z CI. |
| Q4(b) | No additional normal-population assumption under the OFF23 large-sample rule because `n=100>30`. | Strict legacy rule retained. |
| Q4(c) | `2.02` concerns one bottle; the interval estimates the population mean. | Mean CI is not an individual-observation interval. |
| Q4(d) | `(1.9602, 1.9798)` litres | Both limits shift down by `.02`; width is unchanged. |
| Q5 | `35` | Unrounded `34.5731`; round up. |
| Q6 | `166` | Unrounded `165.8724`; round up. |
| Q7(a) | `2377` | Prior `p=.45`; unrounded `2376.9026`. |
| Q7(b) | `1978` | Prior `p=.29`; unrounded `1977.3909`. |
| Q8(a) | `(0.90165, 0.95725)` | `p=303/326=.9294479`, `SE=.0141827`. |
| Q8(b) | 95% confidence that the population proportion is about `90.17%` to `95.72%`. | Parameter and context retained. |
| Q8(c) | `158` | Unrounded `157.4387`; round up. |
| Q8(d) | `272` | Unrounded `271.9252`; round up. |
| Q9(a) | `2.2622` | `df=9`, exact `t(.975,9)=2.262157`. |
| Q9(b) | `3.2498` | `df=9`, exact `t(.995,9)=3.249836`. |
| Q9(c) | `2.0395` exact check | `df=31`; supplied-table row convention unresolved. |
| Q9(d) | `1.9977` exact check | `df=64`; supplied-table row convention unresolved. |
| Q9(e) | `1.7531` | `df=15`, exact `t(.95,15)=1.753050`. |
| Q10(a) | `(134.6180, 147.9820)` | `df=23`, exact `t(.95,23)=1.713872`. |
| Q10(b) | `150` lies outside the interval; the data indicate the advertised population mean is not met. | Conclusion is about the mean, not every tyre. |
| Q10(c) | `152` is an individual tyre value; the CI estimates the population mean. | Individual variation separated from mean uncertainty. |
| Q11 | `(67.6282, 82.3718)` exact-t check | `FPC=.9078109`, exact `t(.975,35)=2.030108`; missing-row convention unresolved. |
| Q12(a) | `(0.22846, 0.37154)` | `FPC=sqrt(900/999)=.949158`. |
| Q12(b) | `186` | `n0=227.2657`, adjusted `185.3315`; round up. |
| Q12(c) | For `N=2000`: CI `(0.22651, 0.37349)` and required `n=205`. | Adjusted unrounded `n=204.1676`; round up. |

## Content implementation metrics

- 75 canonical Chapter 8 skill objects retained.
- 68 skills marked `PROVISIONAL_CORE`.
- 7 skills marked `HOLD`.
- 523 Chapter 8 tasks available at runtime:
  - 476 explicit ladder tasks across C8.01-C8.68;
  - 27 mapped official Tutorial 8 sub-items;
  - 4 clearly labelled legacy Excel tasks;
  - 16 pre-existing provisional Chapter 8 tasks retained.
- Every C8.01-C8.68 skill has routes for UNDERSTAND, RETRIEVE, APPLY, TRANSFER, DELAYED, and REPAIR.
- Bootstrap transfer tasks are `VERIFIED_ADAPTATION`.
- Three mixed sets and a provisional Final Boss registry are present with `coverageStatus="PROVISIONAL"`.
- C8.69-C8.75 do not appear in task, mixed-set, Final Boss, simulation, or readiness routing.
- Formula decision objects include question answered, random object/parameter, prerequisites, conditions, cues, exclusions, confusions, formula/procedure, tool route, interpretation check, common traps, source, and skill links.
- The Read/Print reference includes the source warning, decision tree, z/t fork, confidence interpretation, formulas, sample-size rules, FPC rule, bootstrap sequence, Tutorial 8 map/answers, common traps, source register, and the separated HOLD panel.

## Automated QA results

Runtime execution used the derived local HTML in headless Chrome.

- Page script errors: `0`
- Frozen v1.3.1 engine tests: `72/72 PASS`
- Added Chapter 8 content tests: `24/24 PASS`
- Combined result: `96/96 PASS`
- Learn -> Chapter 8 dashboard -> Tutorial Q1 Practise route: `PASS`
- Chapter 8 task count at runtime: `523`
- Chapter 8 ladder audit rows: `68`

The 24 added checks cover all 22 minimum prompt requirements plus ladder completeness and duplicate-source control.

## Final gate statement

The software is ready for independent Chapter 8 content audit, but Chapter 8 is deliberately **not** `SOURCE_READY`. Provisional Chapter 8 history cannot satisfy final A1S2 readiness, legacy Excel content cannot satisfy the current 2026 Excel source gate, and the non-listed t-table row convention remains unresolved pending a memo or current source.
