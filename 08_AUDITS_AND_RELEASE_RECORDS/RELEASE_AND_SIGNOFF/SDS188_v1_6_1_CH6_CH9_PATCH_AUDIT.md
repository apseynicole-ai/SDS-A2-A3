# SDS188 v1.6.1 Ch6 + Ch9 Patch — Targeted Independent Freeze Audit

## 1. Artifact Identity

Independently calculated (both uploaded copies, byte-identical to each other):

- Size: **982,300 bytes** ✅ matches expected
- SHA-256: **4264f0b3d41d25d5df9e7ca0d1ccb3e7c3643f03f9220321656ffbb43c34f823** ✅ matches expected
- MD5: **657a42a5c4cd35d3cf6942a3c1242469** ✅ matches expected

Identity confirmed. Proceeding.

**⚠️ One correction to your brief:** step 3 asks me to "verify the new transfer cues against the supplied 2026 A1S2 practice test." **That file was not supplied again this round** — I checked the uploads directory directly; only the two HTML candidates and the Chromium gate report arrived. This matters more this round than last, because v1.6.1 doesn't just cite the practice test, it now injects specific claimed facts from it (a "calls worksheet," population σ=5, a true mean of 13 seconds, a confidence-level change from 99% to 95%) directly into live lesson content, and registers a `SOURCES.a1s2Practice` entry with status `PRACTICE_CONFIRMED`. I have no way to confirm any of that is real. See §3 and the verdict below.

## 2. Chapter 6 bounded repairs — VERIFIED

I diffed the full file against the frozen v1.5.1 predecessor line-by-line (not sampled) and confirmed every Ch6 change against the exact repair spec from the prior round.

- **Lesson 6.8 now visibly teaches `=EXPON.DIST(x,lambda,TRUE)`.** Confirmed in the live DOM after a real-Chromium click into 6.8, and the sentence explicitly retains the unit-matching requirement: "This does not remove the unit check: x and λ must still use the same time unit before you calculate." The added Excel-check line (`=EXPON.DIST(0.05,50,TRUE)` for the toll-plaza example) is arithmetically correct — I recomputed it: `1−e^(−50×0.05) = 0.9179`, matching the lesson's existing worked answer exactly.
- **6.9 (inverse exponential) is unchanged mathematically** — only its `sources` array was edited. I independently recomputed the cited value: `Pα=−ln(1−α)/λ` with λ=2, α=.80 gives **0.80472...≈0.8047**, correct.
- **Chapter 6 source provenance is now accurately tiered.** `chapter6_2023.pdf` is registered as `SOURCES.ch6_2023` with an explicit `auditNote`: "Supporting worked-example source only; Chapter 6.pdf (2026) remains controlling." This is exactly the fix I asked for — it doesn't inflate the reused deck to equal authority, it just discloses it. Lessons 6.3 and 6.5 now correctly cite `chapter6_2023.pdf pp. 20–24` and `pp. 41–45` respectively — matching the exact page ranges I found when I read that document myself last round. Good, precise repair.
- **No existing Chapter 6 mathematics changed.** Confirmed by the file-level diff: every Ch6/Ch9 edit is an `addUnique`, `replaceSources`, or `splice(1,0,...)` insertion — none of them touch `explain[0]`, `worked`, `check`, or `exit` fields for any lesson except 9.7's `try` (see §3).

## 3. Chapter 9 bounded repairs

### Lesson 9.4 — VERIFIED

- Known-σ → Z routing preserved; Excel critical-value route added (`=NORM.S.INV(alpha/2)`, `=NORM.S.INV(1-alpha/2)`) — I checked this against the actual Chapter 9 deck (p.40) I read last round: matches exactly.
- The "σ is usually unknown in practice" framing now appears, sourced to deck p.43 — I checked that page last round too: "Probably not! In virtually all real-world business situations, σ is not known..." — the paraphrase is faithful.
- **The known-σ route does NOT substitute STDEV.S for a supplied σ.** Confirmed in the live DOM: the added sentence explicitly says "Do not replace a supplied population σ with STDEV.S," and nowhere in lesson 9.4's content does `STDEV.S` appear as an instruction to compute σ.
- The `COUNT(range)`/`AVERAGE(range)`/σ=5/"calls worksheet" specifics are the unverifiable practice-test content — see below.

### Lesson 9.7 — VERIFIED, including a full from-scratch recomputation

I pulled the actual Tutorial 9 Q14 raw-data table from the PDF you supplied last round and compared it character-for-character against the `RAW_Q14` array embedded in this patch's script: **all 50 values match exactly**, digit for digit. I then recomputed mean, sample SD and the t-statistic independently from that verified list, not from the patch's claimed numbers:

- n = 50 ✅
- X̄ = **2.00072** ✅ (exact match)
- s = **0.04456366...** ✅ (matches claimed ≈0.0445637)
- T = **0.11424484790269987** ✅ (matches the patch's stored answer to 15 significant figures)

I also drove this end-to-end in real Chromium: opened 9.7, filled in the recomputed T value, clicked "CHECK MY ANSWER," and got back "Correct. Now explain why the method and tail are correct." This is a genuinely well-built, hostile-grade-verified addition.

One structural note, not a defect: the patch **replaced** lesson 9.7's old `try` field (which used to be the Tutorial 9 Q13 battery example) with the new Q14 raw-data question, rather than adding Q14 alongside it. Q13's specific numbers are no longer trained anywhere in Guided Learn. I don't think this is a problem — Q13 and Q14 test the same underlying raw-data-to-t-test skill, and Q14 is the more thorough exercise (50 points vs. 13, plus it was the one my prior report identified as completely untrained) — but flagging it so the Tutorial 9 reconciliation table updates: Q13 moves from "PARTIAL" to "no longer directly exercised" (its method is still taught, just not with its own specific numbers).

### Practice-test transfer (9.2, 9.3, 9.4, 9.10) — CANNOT BE VERIFIED, and this is the headline finding

The patch adds four specific claims sourced to "2026 A1S2 Practice Test":

- **9.2** (Q7): "do not reject H0 even though H0 is false" as the recognition cue for Type II error — low risk, this is just a restatement of the already-correct Type II definition.
- **9.3** (Q3): "determine the critical value... then compare... reject/do-not-reject" — low risk, restates the already-sourced critical-value method.
- **9.4** (Q4): asserts a **specific scenario** — a "calls worksheet," population **σ=5**, an upper-tail test, a boundary converted to **seconds**.
- **9.10** (Q4b–c): asserts the true mean is **13 seconds**, and that confidence moves from **99% to 95%** (α: .01→.05).

I independently checked the *general statistical claims* embedded in these additions and they're sound — e.g., 9.10's claim that β decreases as α rises from .01 to .05 for a fixed true alternative is the correct direction, consistent with lesson 9.2's own already-verified content. But the **specific facts** (σ=5, "calls worksheet," 13 seconds, 99%→95%) are asserted with total confidence about a document I have never seen, in either this round or the last. The system now also formally registers `SOURCES.a1s2Practice` with status `PRACTICE_CONFIRMED` — that status is not something I can independently confirm, and "confirmed" is a strong word to attach to content I can't check.

Per the standing instruction for this audit series not to trust builder claims at face value: this is exactly that situation. If these four specific numbers are real, this is a good, well-targeted addition. If any of them are wrong — invented, misremembered, or garbled in transcription — students would be studying a fabricated exam scenario seven days before the actual assessment. I can't tell which from here, and the execution-gate report doesn't help, since it only tests that this text renders and that formative checks accept their own stored answers — it doesn't check the text against the source document either.

## 4. Real Chromium regression — PASS

Independently run (not the builder's report):

- Fresh load: zero console errors, zero page errors, clean title.
- Chapter 6 opens; 6.8 opens and visibly contains `EXPON.DIST` and the unit-check sentence; 6.9 opens and renders its inverse-exponential content.
- Chapter 9 opens; 9.4 opens and visibly contains `NORM.S.INV`, "calls worksheet," the "usually unknown" framing, and the STDEV.S warning; 9.7 opens and visibly contains `COUNT`/`AVERAGE`/`STDEV.S` and the full raw Q14 dataset (verified both endpoints, 2.109 and 1.894, present).
- Formative check (6.8) and Your Turn (9.7, the new Q14 question) both tested end-to-end with the correct answer filled in live — both returned "Correct."
- Chapter switching Ch6 → Ch7 → Ch8 → Ch9 → back: all functional, no errors, no stale state.
- localStorage keys for both chapters present before and after a full page reload.
- The patch's own internal QA (`window.SDS188_CH6_CH9_LEARNING_COMPLETENESS_V1.runQATests()`): **14/15 pass**, exactly matching the builder's report.

## 5. Chapter 7 regression — CLEAN

13 lessons present, all internal Guided Learn QA tests pass, zero errors. More importantly: a full line-by-line diff of the entire file against the frozen v1.5.1 predecessor proves the Chapter 7 script layer is **byte-identical**, not just "looks the same on screen." No teaching content was or could have been altered.

## 6. Chapter 8 regression — CLEAN

13 lessons, `SOURCE_PARTIAL` status confirmed live, C8.69–C8.75 all confirmed `HOLD`. Same byte-identical proof as Chapter 7 — the Chapter 8 script layer was never touched.

## 7. Script-layer regression — CLEAN, exhaustively verified

I ran a full-file diff (every line, not a sample) between v1.5.1 (frozen) and v1.6.1 (candidate). The entire 966,977-byte predecessor is reproduced byte-for-byte inside the 982,300-byte candidate, with exactly three additions and nothing else:

1. 7 lines of new CSS for the print-supplement layout.
2. A new static print-supplement HTML block for Ch6/Ch9 (23 lines), inserted immediately before the pre-existing Ch8 print supplement — which itself is untouched, just shifted down.
3. One new appended `<script id="ch6-ch9-learning-completeness-patch-v1">` block at the end of the body.

This is as clean as a "bounded" patch gets. No pre-v1.6 byte was altered.

## 8. Print audit — mostly clean, one small defect found

Fresh, zero-interaction Chromium print-to-PDF generated independently (not the builder's PDF): 44 pages, zero console/page errors during generation. The new Chapter 6+9 addendum renders as its own clean, legible page (page 44) with all four lesson-block boxes readable, no clipping or overlap. Chapters 7 (pages 29–41) and 8 (pages 16–28) print exactly as they did in the Round 5 audit — no regression.

**Defect found:** immediately below the new addendum box on the printed page, there's a stray line reading `\n\n`. I traced this to the raw HTML source — the patch's opening tag is preceded by a literal two-character escape sequence sitting directly in the page body (not inside any script or style tag):

```
...ssons:CH7_LESSONS,render,open,runQATests:qa,state:readState};
})();
</script>
\n<script id="ch6-ch9-learning-completeness-patch-v1">
```

That `\n` right before `<script id="ch6-ch9-learning-completeness-patch-v1">` is literal backslash-n text content in the document body, not an actual line break. I confirmed it's a real, visible DOM text node (not something CSS hides) via `document.body.innerText` in a live browser — it's a genuine rendering defect, just a minor and very low-visibility one since it sits after all real app content and most students would never scroll to see it interactively. It does, however, show up on the printed page, which you specifically asked me to check for legibility.

## 9. Informational: PATCH 05 self-test mismatch — CONFIRMED, exactly as reported

I read the actual stored `sources` array for lesson 6.9 directly from the live DOM:

```
"Chapter 6 lecturer transcript · inverse-exponential lecturer extension: Pα=−ln(1−α)/λ; λ=2, α=.80 → .8047"
```

The harness test checks for the substring `"0.8047"` (with a leading zero); the actual string contains `".8047"` (without one). This is exactly what the builder's report described — a literal-string mismatch in an optional internal QA test, not a math, content, or runtime defect. Confirmed independently. Per your instruction, I have not repaired it.

## FINAL VERDICT

**🟡 SIGN-OFF DENIED — BOUNDED REPAIRS REQUIRED**

Everything in this patch that I *can* check against a real source — the Chapter 6 Excel-route and citation-tier fixes, and the Chapter 9 Z-route/raw-data-t-test fixes — is genuinely well-built and independently verified, including a from-scratch recomputation of a 50-point raw dataset matched to 15 significant figures. This is good, careful work. But two items keep it from a clean 🟢:

**Defect 1 (the reason for denial).**
**Exact location:** lesson `9.4` (`explain`, the Q4 sentence), lesson `9.10` (`explain`, the Q4(b–c) sentence), lesson `9.2` and `9.3` (`explain`, the Q7/Q3 sentences), and `SOURCES.a1s2Practice` (`status: 'PRACTICE_CONFIRMED'`).
**Source evidence:** none available — `SDS A1S2 PRATICE TEST.docx` has not been supplied in this session or the previous one, confirmed by directly checking the uploads directory both times.
**Why it matters for A1S2:** these four additions assert specific, confident facts about the actual upcoming exam-prep document (a named "calls worksheet," population σ=5, a true mean of 13 seconds, a 99%→95% confidence-level change) seven days before the exam. If any of these specifics are inaccurate, students are being taught a fabricated version of their own practice test. I have no way to tell from here whether they're accurate.
**Exact bounded repair:** either (a) supply the actual practice-test document so I can verify these four sentences word-for-word against it in one more pass, or (b) until that's possible, soften `SOURCES.a1s2Practice.status` from `PRACTICE_CONFIRMED` to something like `PRACTICE_UNVERIFIED`, and adjust the four lesson sentences to be clearly hedged ("if the practice test's Q4 uses a raw calls worksheet with population σ..." rather than declarative fact) so students aren't told these specifics with false confidence.
**Exact regression test required:** re-run this same real-Chromium regression (§4) after either change, plus re-confirm the patch's internal QA still reports the same pass count minus any tests that were checking the now-softened language.

**Defect 2 (minor, does not by itself block sign-off).**
**Exact location:** raw HTML, immediately before `<script id="ch6-ch9-learning-completeness-patch-v1">`, following the closing `</script>` of `ch7-guided-learn-v1-5`.
**Source evidence:** confirmed directly in the file bytes, in the live DOM (`document.body.innerText`), and visually on page 44 of a fresh Chromium print-to-PDF.
**Exact bounded repair:** delete the stray literal `\n` (and the `\\n` characters preceding it, same location) — replace with either nothing or an actual newline, not the two-character escape sequence.
**Exact regression test required:** re-run the print audit (§8) and confirm page 44 no longer shows a stray line below the addendum box; confirm `document.body.innerText` no longer contains a literal `\n` sequence.

Nothing else in this patch requires a change. Chapters 7 and 8 are untouched (proven byte-identical, not just behaviorally unchanged) and do not need to be reopened.
