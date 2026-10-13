# SDS188 A1S2 2026 — Chapter 6 + Chapter 9 Final Source-Completeness Audit

Scope respected: Chapters 7 and 8 were not touched, re-opened, or re-verified. No HTML was modified — audit only. Base file reconfirmed byte-identical to the already-signed-off frozen artifact: SHA-256 `845be551a4674e84c5e98c3ce8a5ad5262b351332001146b4a1e3dadc07fd945` (`SDS188_A1S2_2026_MasterLearningSystem_v1_5_1_CH7_GUIDED_LEARN_FROZEN.html`).

## ⚠️ Five named source documents were still not found in this session

Your message listed these as attached, but only 12 of the 17 files you named actually reached the uploads folder (verified by directory listing, not by trusting the message text). **Not present:**

1. `Tutorial 6.pdf`
2. `Tutorial 6 Solutions.pdf`
3. `Chapter 6 transcripts.pdf`
4. `SDS A1S2 PRATICE TEST.docx`
5. `A1S2_2026_Formula_Sheet.pdf`

**What this blocks, precisely:** a full Tutorial 6 Q1–Q20 reconciliation (I can only report what the Chapter 6 lessons *claim* Tutorial 6 contains, not verify it); verification of the "Chapter 6 lecturer transcript" citations that 8 of the 10 Chapter 6 lessons rely on; and — most consequentially for your Part B instructions — **the entire A1S2 Q3/Q4/Q7 practice-test transfer check, which cannot be performed at all.** That table appears below marked BLOCKED rather than fabricated.

Everything else you listed **was** supplied and I read it in full: `Chapter_6.pdf` (26pp, the current 2026/P26 deck), `chapter6_2023.pdf` (65pp — this is the Pearson *Statistics for Managers Using Microsoft Excel* 9th-edition deck, not a separate "2023 SDS" document), the five Chapter 6 worked-example PDFs (Excel shortcuts, Normal probabilities, Percentiles, Uniform, Exponential, Normal approximation), the Chapter 6 Excel examples/solutions workbook, `SDS_chapter9_2023.pdf` (79pp, official reused Chapter 9 deck), `SDS_Tutorial_9.pdf` (22 questions, no answer key), and `ttable.pdf`. This is real, substantive source coverage — far more than the preliminary round had — and the verdicts below are final for everything these documents can settle.

---

# PART A — CHAPTER 6

## Chapter 6 Final Verdict

**🟡 BOUNDED PATCH REQUIRED**

Every numeric worked example and Your-Turn target in all 10 lessons was independently recomputed (Python/SciPy) — zero arithmetic errors, confirmed again in this round including the exponential, inverse-exponential, and continuity-correction items. The three items below are real and source-confirmed from what you *did* supply; none of them depend on the missing Tutorial 6/transcript files.

One preliminary finding from the earlier round is **withdrawn**: I said Chapter 6 has no bridge to Chapter 7. Having now read both official decks cover to cover, neither the 2026 deck nor the 2023/Pearson deck contains any forward-reference to sampling distributions, standard error, or Chapter 7 material either — so the Guided Learn layer isn't omitting something the source teaches. There's no source evidence a bridge is expected here, so I'm not carrying that forward as a patch item.

I'm also softening the earlier "zero trap language" finding: on a full read, nearly every Chapter 6 lesson does carry at least one trap-avoidance sentence (6.2 warns to take √σ² before standardising; 6.9 explicitly says "This is not NORM.INV"; 6.10's check contrasts the ±0.5 slice against a zero-probability point). It isn't absent, it's just embedded unpredictably inside `explain`/`check.why` rather than a dedicated field the way Chapters 7/8 do it — a real format gap against your stated rubric, but not the content void the preliminary pass implied.

## Chapter 6 Exact Repair Specification

**1. Missing item:** Lesson 6.8 (Exponential Distribution) never shows an Excel route, even though the course's own supplied "Chapter 6 Excel shortcuts" sheet explicitly lists one for this exact distribution: `=EXPON.DIST(x,lambda,TRUE)`. Sibling lessons 6.3, 6.4 and 6.6 all show their Excel route from the same shortcuts sheet; 6.8 is the odd one out.
**Source evidence:** `Chapter_6__Excel_shortcuts.pdf`, row 5: "Exponential distribution, P(X<x) → `=EXPON.DIST(x,lambda,TRUE)`."
**Why it matters for A1S2:** the assessment is computer-based via EMSLearn with Excel competency in scope; every other continuous distribution in this chapter gets its Excel formula taught, so a student who only studies Guided Learn would not know this function exists for the one distribution the source explicitly supports it for.
**Exact location:** lesson `6.8`, `explain` or `worked` field.
**Regression test required:** none proposed — audit only, per your instruction.

**2. Missing item:** Several lessons' worked-example numbers trace demonstrably to `chapter6_2023.pdf` (the Pearson deck) or the supplied Excel workbook, but are cited only to "2026 Chapter 6 notes §X" and the unverifiable "Chapter 6 lecturer transcript" — and the 2026 deck's own text at those section numbers does not contain those worked numbers. Concretely: lesson 6.3's download-time example (μ=18, σ=5, P(X<18.6)=0.5478) is cited to "2026 Chapter 6 notes §1.3" + transcript, but §1.3 of the 2026 deck (pp.3–4) contains only the unsolved symbolic formulas — the actual worked numbers 18.6/0.12/0.5478 live in `chapter6_2023.pdf` (PDF pp.20–24), which isn't cited at all. The same pattern recurs for lesson 6.5's empirical-rule numbers (73%/100%/100%, n=15) — I independently recomputed these exactly from the supplied workbook's "Commuting time" dataset, confirming they're genuine and accurate, but the citation names only "2026 notes §§1.4, pp.8–13" + transcript, not the workbook or the 2023 deck where the same dataset and conclusion appear. This differs from lesson 6.2, which *does* correctly disclose "2023/departmental Chapter 6 slides" as a source — proving the citation apparatus is capable of naming this document when it wants to.
**Source evidence:** `chapter6_2023.pdf` PDF pp.20–24 (download-time worked sequence) and PDF pp.41–45 (commuting-time normality example, Mean=31.7773, SD=4.0107, 73.33%/100%/100% empirical-rule proportions) — both independently reproduced from the raw data in `39657562-Chapter_6__Excel_examples_Solutions.xlsx`. Compare `SOURCES.ch9` in the live app, which *does* register the reused-2023 Chapter 9 deck with an explicit authority tag and an audit note ("User confirmed... also the official deck for 2026") — Chapter 6 has no equivalent registration for its own reused deck.
**Why it matters for A1S2:** this is a source-integrity gap, not a content-accuracy one — the numbers are right — but a citation that names an unregistered/wrong-tier document undermines exactly the kind of source-fidelity check this audit series exists to do, and it means a future audit (or a student who goes looking for "2026 notes §1.3" to find this worked example) won't find it there.
**Exact location:** lessons `6.3`, `6.5`, `6.6` `sources` arrays; the app's `SOURCES` registry (`ch6` entry, or a new `ch6_2023` entry mirroring how `ch9` already registers its reused deck).
**Regression test required:** none proposed — audit only.

**3. Advisory (not a hard patch — flagging for your judgment):** lessons 6.8's toll-plaza worked example (λ=50 cars/min) and 6.9's entire inverse-exponential example set rest on citations to the unverifiable "Chapter 6 lecturer transcript" alone, with zero corroboration in any of the 8 Chapter 6 documents actually supplied — the specific scenario numbers don't appear in either deck or in the standalone exponential worksheet PDF (which uses a different scenario, "computer breaks down twice a week"). The arithmetic in both lessons is independently confirmed correct, so this is not a numeric error; it's just the least-verifiable content in the chapter. If you can produce the transcript or Tutorial 6, this becomes a one-line confirmation; without it, I can't rule it in or out.

## Tutorial 6 Reconciliation

**Not completable to the Chapter-7 standard — `Tutorial 6.pdf` and `Tutorial 6 Solutions.pdf` were not supplied.** The table below reports only what the Chapter 6 lessons *themselves claim* Tutorial 6 contains — this is the lessons' own citation text, not independent verification of the tutorial.

| Tutorial 6 range (as cited) | Lesson | Coverage status |
|---|---|---|
| Q1–Q5 | 6.3 (forward normal regions) | CITED — unverified |
| Q2–Q5 | 6.4 (inverse normal/percentiles) | CITED — unverified |
| Q8–Q9 | 6.7 (uniform) | CITED — unverified; the lesson's own worked numbers (a=0,b=10) don't match the supplied standalone Uniform worksheet (a=2,b=6), so this specific example can only be confirmed against the real Q8, which I don't have |
| Q10–Q13 | 6.8 (exponential) | CITED — unverified |
| Q14–Q17 | 6.10 (binomial approximation) | CITED — unverified; supplied standalone "Normal approximation" worksheet uses different numbers (n=350,π=0.80), so lesson 6.10's cited n=100,π=0.20 example can't be cross-checked against anything supplied |
| Q18–Q20 | 6.5 (normality evaluation) | CITED — unverified |
| Q6–Q7, Q21+ (if they exist) | none | UNKNOWN — no lesson cites this range; cannot tell whether it exists or whether it's a gap without the actual tutorial |

If you can attach Tutorial 6 (with or without solutions), I'll convert this into a real COMPLETE/PARTIAL/MISSING/MISLEADING table in one more pass, the same way Tutorial 7 and Tutorial 9 (below) were done.

---

# PART B — CHAPTER 9

## Chapter 9 Final Verdict

**🟡 BOUNDED PATCH REQUIRED**

This chapter now has strong source coverage: the official 79-page deck and the full 22-question Tutorial 9 were both supplied and read in full. Every one of the 10 lessons' worked examples and Your-Turn targets was traced to a specific, named Tutorial 9 question and independently recomputed — all matched exactly, including a hostile from-raw-data recomputation of lesson 9.7's battery-life example (13 raw values → x̄=473.4615, s=210.7663, T=−0.454, all reproduced to 5 decimal places from the actual Tutorial 9 Q13 data list, not copied from the lesson). The H0/H1 equality convention in lessons 9.1 and 9.8 closely paraphrases the deck's own explicit p.54 language ("For simplicity... adopted in SDS188"), which is strong evidence of genuine, careful source use, not generic textbook convention substituted in its place.

Two source-confirmed gaps remain, plus the practice-test transfer check is fully blocked (see below) — that alone means I can't certify this against the complete scope you asked for, even though the deck/tutorial-sourced portion is clean.

## Chapter 9 Exact Repair Specification

**1. Missing item:** No lesson anywhere in Chapter 9 trains computing a sample mean or standard deviation from a raw data column before running a t-test — yet Tutorial 9 Q13 (13 raw battery-life values) and Q14 (50 raw bottle-fill values) both require exactly this. Lesson 9.7's "Your Turn" uses the Q13 scenario but hands the student x̄ and s already computed, skipping the step Q13 actually demands. Q14 isn't used by any lesson at all.
**Source evidence:** `SDS_Tutorial_9.pdf` Q13 ("flashlight battery lifetimes," raw list of 13 values, σ unknown) and Q14 ("soft-drink bottle fill volumes," raw list of 50 values, σ unknown) — both explicitly require the student to summarize raw data before testing.
**Why it matters for A1S2:** the assessment is computer-based via EMSLearn; if a hypothesis-testing question on the actual exam supplies raw data (as two of Tutorial 9's own questions do), a student who only trained on pre-computed x̄/s from Guided Learn has never practiced the summarize-then-test workflow, only the test-from-given-statistics half of it.
**Exact location:** lesson `9.7` (`try` field, or a new step before it) — the Q13 raw data is already partially present in spirit (the "try" question references the same scenario), it just needs the raw-data step added rather than skipped.
**Regression test required:** none proposed — audit only.

**2. Missing item:** The deck's own explicit, emphatic warning about when σ is realistically known — p.43: "Do You Ever Know σ? Probably not! In virtually all real-world business situations, σ is not known..." — is the single strongest piece of trap-language in the Z-vs-t section of the source, but neither lesson 9.4 (Z-route) nor 9.7 (t-route) relays it. Both present the branch as a neutral symmetric choice ("σ known → Z, σ unknown → t") without the source's framing of which case is actually typical.
**Source evidence:** `SDS_chapter9_2023.pdf` p.43.
**Why it matters for A1S2:** this is precisely the kind of recognition cue your rubric asks for (item 2) — knowing which route is the default expectation before reading the specific numbers in a question.
**Exact location:** lesson `9.4` or `9.7`, `explain` field.
**Regression test required:** none proposed — audit only.

**3. Minor:** Lesson 9.4 states the Z-test-statistic formula but not the deck's own Excel critical-value formulas (`=NORM.S.INV(B4/2)`, `=NORM.S.INV(1-B4/2)`, p.40), even though lesson 9.5 (p-value/Excel) does show its Excel formula from the same deck screenshot. Minor asymmetry — 9.4 is the natural home for the missing half of that same screenshot.
**Source evidence:** `SDS_chapter9_2023.pdf` p.40.
**Exact location:** lesson `9.4`, `explain` field.
**Regression test required:** none proposed.

**Note, not a patch item:** Tutorial 9 Q21 parts (c)–(e) (the α=0.01 comparison and the meta-conclusion about α's effect on power) and Q22 (tire-manufacturer power problem) aren't used by any lesson — 9.10 only exercises Q21(a)–(b). The general principle these parts test is already stated in 9.2's explain text, so this is a practice-reservoir completeness note rather than a missing skill.

## Tutorial 9 Reconciliation

Tutorial 9 has 22 questions, no answer key in the supplied PDF (all answers below were independently computed by me, not copied from the source).

| Q | Tests | Lesson | Coverage |
|---|---|---|---|
| Q1 | Type I error concept | 9.1 (implicit), 9.2 (explicit) | COMPLETE |
| Q2 | α/β trade-off | 9.2 | COMPLETE |
| Q3 | distance-from-null vs β (μ=90 vs 75) | 9.2 — worked example reuses these exact numbers | COMPLETE |
| Q4 | two-tail Z critical region, α=.10 | 9.3 — worked example is this exact question | COMPLETE |
| Q5 | one-tail upper critical Z, α=.01, decide at Z=2.39 | none directly, but method fully covered by 9.3/9.4 | COMPLETE by method |
| Q6 | one-tail lower critical Z, α=.01, decide at Z=−1.15 | none directly; method covered by 9.3/9.8 | COMPLETE by method |
| Q7 | two-tail p-value, Z=2.00, α=.05 | 9.5 — worked example is this exact question | COMPLETE |
| Q8 | two-tail p-value, Z=−1.38, α=.01 | none directly; same Z value used differently in Q9/lesson 9.5's try — method covered | COMPLETE by method |
| Q9 | one-tail lower p-value, Z=−1.38, α=.01 | 9.5 (try), 9.8 (try) — both use this exact question | COMPLETE |
| Q10(a)(b) | paint-can two-tail Z-test, CV + p-value, α=.01 | 9.4 (worked), 9.5-style p-value method | COMPLETE |
| Q10(c) | 99% CI for the mean (Chapter 8 material reused here) | 9.6 — worked example computes this exact interval | COMPLETE |
| Q10(d) | compare test decision to CI | 9.6 — this is exactly what 9.6 teaches | COMPLETE |
| Q11(a)(b) | ATM one-tail upper Z-test, CV + p-value, α=.05 | 9.4 (try), 9.8 (worked) — both use this exact question | COMPLETE |
| Q12(a)(b) | textbook-cost one-tail upper t-test, CV + p-value, α=.10 | 9.7 — worked example is this exact question | COMPLETE |
| Q13(a)(b) | battery-life one-tail lower t-test from **raw data**, α=.05 | 9.7 (try) — uses the dataset but skips the raw-data summarization step | PARTIAL — see Repair Spec item 1 |
| Q14(a)(b) | bottle-fill two-tail t-test from **raw data** (n=50), α=.05 | none | MISSING — see Repair Spec item 1 |
| Q15 | CI for a proportion (Chapter 8 material) | out of Chapter 9 scope | N/A — correctly out of scope |
| Q16(a)(b) | CI for proportion(s) (Chapter 8 material) | out of Chapter 9 scope | N/A — correctly out of scope |
| Q17 | one-proportion Z-statistic, x=88/n=400 | 9.9 (try) — this exact question | COMPLETE |
| Q18(a)(b) | one-tail upper one-proportion Z-test, α=.05 | 9.9 — worked example is this exact question | COMPLETE |
| Q19 | CI for a population total, finite population (Chapter 8) | out of Chapter 9 scope | N/A — correctly out of scope |
| Q20 | CI for a population total, finite population (Chapter 8) | out of Chapter 9 scope | N/A — correctly out of scope |
| Q21(a)(b) | power/β, one-tail lower, α=.05, true μ=197/194 | 9.10 — worked example is this exact question | COMPLETE |
| Q21(c)(d) | power/β, one-tail lower, α=.01, true μ=197/194 | none | MISSING — practice-reservoir note only, method already taught |
| Q21(e) | compare effect of α on β/power | 9.2 (explain, general principle) | COMPLETE by principle, not by this specific comparison |
| Q22(a)(b) | power/β, tire-manufacturer scenario | none | MISSING — practice-reservoir note only, method already taught |

No question in Tutorial 9 was found to be MISLEADING by the Guided Learn layer — every discrepancy above is a coverage gap (PARTIAL/MISSING), not a wrong-method risk.

## A1S2 Q3/Q4/Q7 Transfer Reconciliation

**BLOCKED — `SDS A1S2 PRATICE TEST.docx` was not found in the uploads for this session.** I cannot see the actual practice-test questions, so I cannot check whether Guided Learn prepares a student for them. Rather than infer plausible-sounding content from the topic list you gave me, I'm reporting this table as fully blocked:

| Question | Status |
|---|---|
| Q3 | BLOCKED — practice test not supplied |
| Q4 (raw `calls` worksheet → sample stats → one-tail test → critical value in seconds → β/power under a specified true mean → effect of confidence/significance on Type II error) | BLOCKED — practice test not supplied. Note: if Q4 does require the raw-data-to-Excel-statistic step your prompt describes, that would directly corroborate Chapter 9 Repair Spec item 1 above (Tutorial 9 Q13/Q14 already show this exact gap from the tutorial alone) |
| Q7 (Type II error recognition: "do not reject H0 when H0 is actually false") | BLOCKED — practice test not supplied. Note: this exact concept is explicitly and correctly stated in lesson 9.2's `explain` field ("Type II error means not rejecting H0 when H0 is false") and its formative check tests the α/β trade-off directly, so if Q7 is a conceptual recognition item, the underlying content is already present — I just can't confirm the actual Q7 wording matches |

To complete this table, please attach the practice test file directly (a `.docx`, `.pdf`, or pasted text all work).

---

## Final Recommendation

**D. One bounded combined Chapter 6 + Chapter 9 learning-completeness patch.**

Chapter 6 needs: the missing EXPON.DIST Excel route in lesson 6.8, and a source-citation correction so lessons 6.3/6.5/6.6 (and the app's `SOURCES.ch6` registry) properly credit the reused 2023/Pearson deck and the supplied Excel workbook instead of citing only the 2026 notes and an unverifiable transcript. Chapter 9 needs: a raw-data-to-Excel-statistic step added to lesson 9.7 (or a new short lesson step) reflecting Tutorial 9 Q13/Q14, and the deck's own "σ is rarely known in practice" framing added to lesson 9.4 or 9.7. All four items are small, source-evidenced, single-lesson edits — not a redesign, not new features, and nothing here touches Chapters 7 or 8.

Two things remain outside this recommendation's scope because they're evidentially incomplete, not because they're resolved: the Tutorial 6 reconciliation and the A1S2 Q3/Q4/Q7 transfer check both need documents that weren't in this session. If either surfaces material Tutorial 9 and the Chapter 9 deck didn't already cover, the patch scope in Part B could grow — I'd want one more pass once the practice test specifically is available, since Q4's raw-data implication would directly reinforce (or could expand) Repair Spec item 1.
