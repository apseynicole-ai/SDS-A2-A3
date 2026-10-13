# SDS188 Chapter 8 — Final Source-Readiness Reclassification Audit

## Scope discipline

This round did **not** touch teaching content, did **not** reopen Chapters 6, 7 or 9, and produced **no HTML edits**. It answers one question only: is Chapter 8's evidence status still correctly `SOURCE_PARTIAL`, or does the combined evidence now support promotion? All findings below come from independently reading the actual source documents supplied this round and from reverse-engineering the live `SOURCES` / `SKILLS` / `CANONICAL_MANIFEST_ROWS` registries embedded in the frozen HTML's own script layer — not from any builder summary.

## Artifact identity

`SDS188_A1S2_2026_MasterLearningSystem_v1_6_2_CH6_CH9_FROZEN.html`, independently hashed:

- Size: **982,297 bytes** — matches your stated value
- SHA-256: **5ae378b1328216e06194123861642188f9b2a37709e6eef83537c969a39f4d0b** — matches
- MD5: **d67d1dd461a62aa28421bc09dd80c63d** — matches

This is byte-identical to the v1.6.2 file already audited and signed off in the previous round, now re-supplied under a `_FROZEN` filename. No content inspection below required a rebuild; this is the same frozen artifact.

## Evidence-pack completeness check

Supplied and independently read this round: `chapter8_2023_confirmed.pdf` (72 pages, full read), `Estimationlasies.pdf`, `Bootstrapping_Skoenlusberaming.pdf`, `Confidence_Intervals_for_Totals_Vertrouensintervalle_vir_totale.pdf`. Also re-read this round: `SDS A1S2 PRATICE TEST.docx` (already on disk from the Ch6/9 round; re-extracted in full via python-docx specifically to check for Chapter 8 content, which had not been checked before).

**Not supplied this round, listed in your sources but absent from the upload set:** `SDS 188 Tutorial 8_2022.pdf`, `SDS 188 CHAPTER 8 t-table.pdf` (a general `ttable.pdf` exists from Round 6 but its identity as the specific "Chapter 8" t-table was never confirmed — I have not assumed they are the same file), and `A1S2_2026_Formula_Sheet.pdf`. None of these three gaps blocks the findings below, for reasons given in the ledger, but they are genuine gaps and are named explicitly rather than silently worked around.

## Major finding: the live HTML already carries source claims I could not verify this round

Reverse-engineering the frozen HTML's script layer surfaced two categories of embedded evidentiary claims that go beyond what you supplied as source documents this round:

**1. Two dated 2026 lecturer transcripts.** `SOURCES.transcript10` (`SDS TRANSCRIPT 10`, pinpoint "5 August 2026 · 2:01–4:00") and `SOURCES.transcript11` ("7 August 2026 · 3:53–9:50") are cited, with per-skill attachment, as `CURRENT_TRANSCRIPT_SUPPORT` for C8.11, C8.19, C8.20, C8.21, C8.22, C8.30–C8.34, C8.37, C8.40, C8.43–C8.48 — i.e., most of the known-σ/unknown-σ mean-CI and proportion-CI/sample-size skills. **The transcript files themselves were not part of this round's upload set, and I have no record of independently reading them in any earlier round of this audit series.** Per this series' standing rule (never accept a builder-embedded factual claim without reading the actual source — the same rule that caught the unverifiable practice-test citations in the v1.6.1 round), I am **not** using these transcript citations as evidence in the classification below. If genuine, they would materially strengthen several of the "OFFICIAL_COURSE_SUPPORTED" verdicts below toward `CURRENT_2026_CONFIRMED`; I flag them as an open, checkable item rather than either trusting or dismissing them.

**2. The `SOURCES.ch8` authority tag itself.** Chapter 9's reused-deck source (`SOURCES.ch9`) carries `authority:'P26-REUSED'` with an explicit `auditNote`: *"User confirmed on 14 Aug 2026 that the supplied official 2023 Chapter 9 deck is also the official deck for 2026."* Chapter 8's source (`SOURCES.ch8`) carries only `authority:'OFF'` — no such reuse-confirmation note exists anywhere in the file. This is very likely the actual, principled reason Chapter 8 has remained `SOURCE_PARTIAL` while Chapter 9 (built from a 2023 deck of the same vintage) reached `SOURCE_READY`: nobody has yet stated, the way you did for Chapter 9, that this specific 2023 Chapter 8 deck is confirmed still in use for the current 2026 offering. I return to this at the end — it is the single fact that determines whether the verdict below resolves fully to promotion.

## Part 1 — Evidence ledger, C8.01–C8.68 (CORE)

Classified by section, since the source registry itself is organized that way and every skill inside a section shares the same source chain unless noted.

**§8.1–8.3 · C8.01–C8.10 (point/interval estimates, estimator properties, confidence level/α/margin of error).** Independently confirmed present and taught in full in `chapter8_2023_confirmed.pdf` pp. 4–13 (point estimate vs. interval estimate, unbiasedness, consistency, relative efficiency, the general formula "point estimate ± critical value × SE," α/2 tail-splitting, the cereal-fill worked example demonstrating that a specific interval either does or does not contain μ). No 2026 practice-test item touches this material (the practice test has no estimator-properties question). No independently-verified 2026 evidence beyond the reused deck. **Classification: OFFICIAL_COURSE_SUPPORTED.**

**§8.4 · C8.11–C8.20 (CI for μ, σ known).** Fully taught in the deck (pp. 14–20: assumptions, the z-formula, the 11-circuit-resistance worked example to 4 d.p., width/confidence/n trade-offs). No practice-test item constructs a known-σ mean CI (Q3/Q4 use a similar-looking σ but are Chapter 9 hypothesis tests, not Chapter 8 interval construction — confirmed by direct reading, not assumed). **Classification: OFFICIAL_COURSE_SUPPORTED** for all ten skills.

**§8.5 · C8.21–C8.29 (CI for μ, σ unknown / Student t).** Fully taught (pp. 21–28: t-distribution rationale, df=n−1, degrees-of-freedom worked illustration, the travel-time n=100 worked example matched to the Excel `T.INV.2T` output, the normality-check caveat). No practice-test coverage. **Classification: OFFICIAL_COURSE_SUPPORTED** for all nine skills.

**§8.6 · C8.30–C8.36 (CI for population proportion π).** Deck coverage is complete (pp. 29–33: SE of p, the 100-person/25-left-handers worked example, the Excel in-error-invoices example). **Independently verified against the actual practice-test docx (not the builder's claim): Question 2** is a genuine, live 2026 proportion-CI item — 500 customers/300 satisfied, asks the student to (a) determine the sample proportion, (b) determine the SE of the proportion, then (c) compute the upper confidence limit given p=.65 and SE=.05. This directly and currently examines C8.30 (identify p as point estimator), C8.32 (SE from p), and C8.34 (construct interval for π). **Classification: CURRENT_2026_CONFIRMED for C8.30, C8.32, C8.34; OFFICIAL_COURSE_SUPPORTED for C8.31, C8.33, C8.35, C8.36** (approximation-condition check, z-selection, interpretation, 95%-vs-99% comparison — taught in the deck but not separately probed by this practice item).

**§8.7 · C8.37–C8.42 (required sample size, mean).** Deck coverage complete (pp. 34–36: error-of-estimation framing, the n formula, the 25-second video-download worked example, round-up convention, using an estimated σ). No practice-test item constructs a mean-sample-size problem (Q5/Q6 are both proportion-sample-size items — confirmed by direct reading). **Classification: OFFICIAL_COURSE_SUPPORTED** for all six skills.

**§8.8 · C8.43–C8.48 (required sample size, proportion).** Deck coverage complete (pp. 37–39: the invoice-error worked example, conservative p=.5 convention, round-up). **Independently verified against the practice-test docx: Question 5** — "95% CI of the population proportion, no prior estimate available, estimation error ±0.06, minimum required sample size" — is a genuine, live 2026 item that specifically exercises the conservative-p=.5 branch and the round-up convention. This directly examines C8.43 (solve required n), C8.45 (use conservative .5 when no estimate exists), and C8.48 (round upward). **Classification: CURRENT_2026_CONFIRMED for C8.43, C8.45, C8.48; OFFICIAL_COURSE_SUPPORTED for C8.44, C8.46, C8.47** (recognising when a prior estimate exists, and the e/confidence trade-off comparisons — taught but not this item's specific target).

**§8.9 · C8.49–C8.57 (finite population correction, mean & proportion).** This section is labelled "Online Topic Section 8.7" inside `chapter8_2023_confirmed.pdf` itself (pp. 41–44) — i.e., it is physically part of the same reused official deck, not a separate lower-tier document, even though the registry currently tags it with a distinct `finite8` source object. Cross-checked against the standalone `Estimationlasies.pdf` extract independently read this round: identical FPC formulas for the mean interval, the proportion interval, and the `n=n₀N/[n₀+(N−1)]` sample-size adjustment. **Independently verified against the practice-test docx: Question 6** — "a business has N employees... margin of error, 99% confidence... pilot sample proportion p... sample taken without replacement from a finite population... what sample size is required?" — is a genuine, live 2026 item that exercises the full FPC-proportion-sample-size chain end to end. This directly examines C8.49 (recognise finite population/without replacement), C8.55 (determine initial n₀), C8.56 (adjust for finite N), and C8.57 (apply the n₀N/[n₀+(N−1)] formula). **Classification: CURRENT_2026_CONFIRMED for C8.49, C8.55, C8.56, C8.57; OFFICIAL_COURSE_SUPPORTED for C8.50–C8.54** (sampling fraction, FPC applied to the mean-interval branch specifically, the "why it reduces uncertainty" and "when negligible" explanatory skills — present in both the deck and the extract, but not this item's specific target since Q6 is a proportion, not a mean, FPC problem).

**§8.10 · C8.58–C8.68 (bootstrapping).** Also physically present in `chapter8_2023_confirmed.pdf` as "Online Topic Section 8.8" (pp. 65–72: the seven-step procedure, the 27-value processing-time resample example, the 100-resample ordered array, the 5th-smallest/5th-largest 90% CI). Cross-checked against the standalone `Bootstrapping_Skoenlusberaming.pdf`, independently read this round: same procedure, same step structure. **Independently verified against the practice-test docx: Question 1** — a live 2026 item built directly on a supplied `A1PTData.xlsx` "Bootstrap" worksheet, an original sample shown in green and a 250-resample index shown in yellow, asking (i) when bootstrapping is the useful method (small sample, no idea of the population distribution — matching C8.58/C8.59's non-normality trigger), then (ii) the bootstrap lower boundary and (iii) the bootstrap upper boundary of a 95% CI for the population mean. This directly examines C8.58, C8.60 (distinguish original from resample — the green/yellow framing is exactly this), C8.61 (resample with replacement), C8.62–C8.64 (preserve n, calculate the statistic, repeat), and C8.65–C8.67 (order the statistics, trim tails, state the percentile interval — required to actually answer "lower/upper boundary"). **Classification: CURRENT_2026_CONFIRMED for C8.58, C8.60, C8.61, C8.62, C8.63, C8.64, C8.65, C8.66, C8.67; OFFICIAL_COURSE_SUPPORTED for C8.59, C8.68** (the specific "non-normality trigger" framing and the "bootstrapping needs software" meta-point — both present in the deck, neither separately probed by this item).

**Ledger tally, C8.01–C8.68:** 19 skills `CURRENT_2026_CONFIRMED` (independently verified against the actual 2026 practice test, not the builder's embedded claim — though notably my independent read landed on the exact same 19-skill set the HTML's own `chapter8PracticeConfirmed` object already asserts, which is itself a good sign that claim was not fabricated). The remaining 49 skills `OFFICIAL_COURSE_SUPPORTED`, resting on the reused 2023/8th-edition-online-topic deck, fully read and confirmed thorough and internally consistent with the two independently-supplied supplementary extracts. **Zero `HISTORICAL_OFFICIAL_ONLY`, `SUPPLEMENTARY`, or `UNSUPPORTED` skills in CORE** — every one of C8.01–C8.68 traces to at least an official-tier document.

## Part 2 — Evidence ledger, C8.69–C8.75 (auditing / population totals)

Per your explicit instruction, evaluated separately and not activated merely because supplementary material exists.

`Confidence_Intervals_for_Totals_Vertrouensintervalle_vir_totale.pdf`, independently read this round (its full 4 pages: Section 8.6 "Applications of Confidence Interval Estimation in Auditing"), covers exactly: point/interval estimate of a population total (Total = NX̄), the FPC-adjusted CI for a total (the Ricknel Home Centers $551,350 worked example), difference estimation for audits (mean and SD of audit differences, the 12-of-100-invoices worked example), and the one-sided CI for a noncompliance rate. This maps precisely, one-to-one, onto the seven skill names C8.69–C8.75 ("Estimate population total," "Construct CI for a population total," "Define audit difference," through "Interpret auditing result").

This content is confirmed **absent** from `chapter8_2023_confirmed.pdf` — the 72-page deck ends at the bootstrapping chapter summary and never reaches a population-totals or auditing section. It is confirmed **absent** from the practice test — none of the eight practice-test questions touches totals, audit differences, or noncompliance bounds. No 2026 transcript citation in the HTML touches C8.69–C8.75 either (`CH8_TRANSCRIPT_SUPPORT`'s skill lists stop at C8.48).

**Classification: SUPPLEMENTARY for all seven skills (C8.69–C8.75).** The source is a genuine, on-topic, correctly-scoped 2021 Pearson extract — not fabricated, not unsupported — but it is current-course-blind: nothing supplied this round or in any prior round of this audit series connects it to the actual 2026 A1S2 offering.

**Recommendation: remain HOLD.** No promotion basis exists. This matches your explicit instruction not to inflate this block from the mere existence of supplementary material, and the evidence confirms there genuinely is no current-course signal to justify anything else.

## Part 3 — Recommended status migration (spec only — not applied)

Contingent on one confirmation from you (see "Blocking question" below). If confirmed, apply:

**(a) Metadata/status fields to change**
- `SOURCES.ch8.authority`: `'OFF'` → `'P26-REUSED'`; `SOURCES.ch8.status`: `'SOURCE_PARTIAL'` → `'SOURCE_READY'`; add an `auditNote` mirroring Chapter 9's, naming the date of your confirmation.
- `CHAPTERS[8].status`: `'SOURCE_PARTIAL'` → `'SOURCE_READY'`.
- `addCanonicalChapter`'s `chapter===8` branch (the actual authoritative status-assignment code — it runs after and overrides the earlier `loadSkills(8,...,1)` call): change `status=n>=69?'HOLD':'PROVISIONAL'` to `status=n>=69?'HOLD':'ACTIVE'`. Leave `sourceClass` untouched (it still correctly routes citations to `SOURCES.ch8` / `finite8` / `bootstrap8` / `totals8` for display purposes).
- `EVIDENCE.chapter8Overall`: `status:'SOURCE_PARTIAL'` → an updated status; rewrite the `statement` field, which currently reads "Do not promote the entire chapter... are not established by the practice test" — that sentence becomes false the moment CORE promotes, and needs to instead state that CORE is promoted while C8.69–C8.75 remains excluded.
- `API.canonicalSourceGate`: `'SOURCE_PARTIAL'` → updated value.

**(b) Skill statuses affected**
- C8.01–C8.68 (68 skills): `PROVISIONAL` → `ACTIVE`.
- C8.69–C8.75 (7 skills): **unchanged**, remains `HOLD`.

**(c) Stale warning / section text requiring coherent migration**
- Section `8.0` ("Source Warning + Diagnostic") banner text: *"All content is provisional pending the current 2026 release."* — becomes false for 8.0–8.10 and needs rewriting; remains true in spirit only for `8.H`.
- Each of sections `8.4` through `8.10`'s `notes` field currently contains an explicit trailing sentence like *"The section remains PROVISIONAL / SOURCE_PARTIAL"* — seven near-identical sentences requiring coordinated rewrite so they don't contradict the new `ACTIVE`/`SOURCE_READY` status sitting one field over.
- Section `8.H`'s existing HOLD language is correct as-is and needs no change.
- `augmentSourceRegister()` (the function that renders the on-page source-citation table) will need to be re-run and visually re-checked once the above changes land, since it reads live from `SOURCES`/`SKILLS` — I did not locate a hand-written duplicate of the `SOURCE_PARTIAL` string inside that specific rendering function, but with 39 total `SOURCE_PARTIAL` occurrences and 1 `provisional pending` occurrence in the file, a full occurrence-by-occurrence re-walk during actual implementation is warranted rather than trusting this list as exhaustive.

**(d) QA tests needing coherent migration**
I did not find a named QA test that hard-asserts `CHAPTERS[8].status==='SOURCE_PARTIAL'` or a per-skill `PROVISIONAL` status as a pass condition in this pass — but I did not exhaustively execute the QA harness against a hypothetically-patched file (there is nothing to execute; no patch exists yet). Standard practice for this series applies: once a patch implementing this migration exists, it needs the same full-diff + live-Chromium + internal-QA + fresh-print-PDF audit every prior patch round in this series has received before any sign-off — this reclassification, once implemented, is a patch like any other and does not get a lighter audit than v1.6.1/v1.6.2 received.

## Part 4 — No teaching-content change is necessary

Every skill classification above rests on content that is already present, complete, and accurate in the live HTML's Chapter 8 lessons — this round found no missing worked example, no incorrect formula, and no pedagogical gap. The entire question this round is a **metadata/status question**, not a content question. If the migration above is applied, zero lesson text, zero worked examples, and zero Your-Turn items need to change.

## Blocking question — resolved

Chapter 9 sits at `SOURCE_READY` specifically because you told the system, and it recorded, that you confirmed on 14 August 2026 the reused 2023 deck was still the official 2026 material. Chapter 8's identically-vintaged 2023 deck carried no equivalent confirmation anywhere in this file, and the file you supplied this round was literally named `chapter8_2023_confirmed.pdf` — so rather than assume what that filename was asserting, I asked you directly. **You confirmed: yes, this is the same kind of 2026-reuse confirmation you gave for Chapter 9.** That resolves the gate; see the verdict below.

## Final verdict

**B. PROMOTE CORE C8.01–C8.68 TO SOURCE_READY; KEEP C8.69–C8.75 HOLD.**

The report originally reached this point at verdict D, pending one confirmation: whether `chapter8_2023_confirmed.pdf`'s filename was asserting the same kind of 2026-reuse confirmation you gave for Chapter 9 on 14 Aug 2026. You have now confirmed it is — this Chapter 8 2023 deck is confirmed still in official use for the current 2026 A1S2 offering, on the same footing as the Chapter 9 confirmation.

That resolves the last open gate. Combined with the independently-verified evidence above — 19 CORE skills confirmed against the actual live 2026 practice test (not a builder claim), the remaining 49 CORE skills thoroughly and consistently covered by the now-confirmed-reused official deck, and C8.69–C8.75 correctly and cleanly excluded (genuinely current-course-blind, no promotion basis found) — the evidence is sufficient for **C8.01–C8.68 to move to `SOURCE_READY`; C8.69–C8.75 remains `HOLD`, unchanged.**

Part 3 above is the exact, ready-to-apply migration spec for this promotion. Per this round's scope, no HTML edit has been made — implementing Part 3 is a separate patch step, and per standing series practice it should still receive the same full-diff + live-Chromium + internal-QA + fresh-print-PDF audit every prior patch in this series has received before sign-off.
