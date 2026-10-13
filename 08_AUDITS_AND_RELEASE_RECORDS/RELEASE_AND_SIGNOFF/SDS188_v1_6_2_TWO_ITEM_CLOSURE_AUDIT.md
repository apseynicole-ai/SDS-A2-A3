# SDS188 v1.6.2 — Two-Item Denial-Closure Regression

## Artifact Identity

Independently calculated:

- Size: **982,297 bytes** ✅ matches expected
- SHA-256: **5ae378b1328216e06194123861642188f9b2a37709e6eef83537c969a39f4d0b** ✅ matches expected
- MD5: **d67d1dd461a62aa28421bc09dd80c63d** ✅ matches expected

Identity confirmed. Proceeding.

## Byte-diff vs. v1.6.1

Full-file diff against the previously-audited v1.6.1 candidate: **exactly 3 bytes removed, 2 lines touched, nothing else.**

```
2635c2635
< \n<script id="ch6-ch9-learning-completeness-patch-v1">
---
> <script id="ch6-ch9-learning-completeness-patch-v1">
2775c2775,2776
< </script>\n</body>
---
> </script>
> </body>
```

Both hunks remove the literal `\n` escape text and, in the second case, replace it with an actual line break. No other byte in the file changed — no learning-content downgrade, no practice-test wording downgrade, no Chapter 7/8 modification, no mutation beyond the print-text fix. This is exactly the "extremely small" repair scope you described.

---

## ITEM 1 — Practice-test claims, verified against the real document

I read `SDS A1S2 PRATICE TEST.docx` directly (python-docx, full text and tables extracted — not the builder report, not any prior assumption). Findings:

**Q3 (energy-bar sugar content).** The question states the nutritionist's claim "could be greater than 8.5 grams" (an upper-tail H1), asks the student to "Calculate the critical value for this test," then gives "the test statistic is equal to 2" and asks for the decision, with reject/do-not-reject options keyed to whether the test statistic is above or below the critical value. **Confirmed: Q3 does require calculating a critical value, comparing it with a supplied test statistic, and choosing reject/do-not-reject, in a one-tail test.** Lesson 9.3's claim is accurate.

**Q4 (call-center calls worksheet).** Exact quote: *"The data in the 'calls' worksheet of your datafile is the time it took, in seconds, for a random sample of incoming calls to be answered... Use a significance level of 0.01 and assume population standard deviation of 5 seconds..."* Then: (a) "The appropriate critical value in terms of seconds is," (b) "Calculate the power of the test if the actual time it takes for a call to be answered is 13 seconds," (c) "What would happen to the probability of making a Type II error if the confidence level were to be changed to 95%" (options: Increase/Decrease/Remain Constant). Every single specific I flagged as unverifiable last round is **confirmed present, verbatim**: the worksheet is genuinely named "calls," σ=5 seconds is genuinely given as a population value (not to be estimated), α=.01 is genuine, the boundary is genuinely requested in seconds, the true-mean power question genuinely uses 13 seconds, and the confidence-level question genuinely moves from 99% (α=.01) to 95%. The claimed "H0 direction is upper-tail" also checks out — the manager suspects it takes *longer* than the advertised 10 seconds, so H1: μ>10.

**Known-σ route correctly avoids the STDEV.S trap.** Since the practice test supplies σ=5 as a population value rather than asking the student to estimate it, the correct Excel workflow is `COUNT`/`AVERAGE` on the raw calls column plus the *given* σ — never `STDEV.S`. Lesson 9.4 teaches exactly this and explicitly warns against substituting `STDEV.S` for a supplied σ. Correct.

**β direction check.** Moving from α=.01 to α=.05 widens the rejection region, so β (failing to reject a false H0) decreases for a fixed true alternative — lesson 9.10's claim matches this and matches the actual correct answer to the practice test's own multiple-choice item ("Decrease").

**Q7 (Type II error, study hours).** The practice test's own labeled-correct option: *"There is not sufficient evidence... given that the average amount really is different... (Do not reject the null hypothesis given that the null hypothesis is false)."* **Confirmed, essentially verbatim** against lesson 9.2's "do not reject H0 even though H0 is false."

**Conclusion:** every one of the four practice-test-sourced additions in lessons 9.2, 9.3, 9.4 and 9.10 accurately represents the real source document. `SOURCES.a1s2Practice.status = 'PRACTICE_CONFIRMED'` is now justified by an actual reading of the source, not by builder claim. Live-DOM check on v1.6.2 confirms this entry is still present unchanged.

**Defect 1 is CLOSED.** No hedging or downgrade required — the source directly verifies the statements as written.

---

## ITEM 2 — Print-text repair, verified

1. **Raw bytes around the patch script tag:** confirmed clean — `<script id="ch6-ch9-learning-completeness-patch-v1">` now opens directly with no preceding stray text, and `</script>` is followed by an actual newline into `</body>`, not a literal `\n`.
2. **File-wide check for any stray literal `\n`/`\n\n` text outside a script context:** I found 3 remaining literal backslash-n occurrences in the raw file, all three inside the same JavaScript template-literal/string-join expression used by the app's own script-hashing utility (`` `${script.id||''}\n${script.textContent}` `` and `.join('\n/*::*/\n')`), never reaching the DOM as visible text. These are legitimate, pre-existing JS escape sequences, unrelated to the defect and unrelated to this patch — not a problem.
3. **Real Chromium load:** zero page errors, zero console errors.
4. **`document.body.innerText`:** contains **no** literal `\n` sequence; direct enumeration of `document.body`'s child text nodes returns an empty array — no stray text nodes at all.
5. **Fresh, independently-generated, zero-interaction print-to-PDF** (not the supplied regression PDF, though I cross-checked against it and it agrees): 44 pages, zero console/page errors during generation.
6. **Visual inspection of the Chapter 6+9 addendum page (page 44):** the stray `\n\n` line is gone. All four lesson-block boxes remain fully legible, no clipping, no overlap, no new defects introduced. Page count unchanged from v1.6.1 (44 pages both times).

**Defect 2 is CLOSED.**

---

## Minimum regression

- Chapter 6 opens: ✅
- Lesson 6.8 still shows `EXPON.DIST`: ✅
- Chapter 9 opens: ✅
- Lesson 9.4 still shows `NORM.S.INV` and the known-σ/"calls worksheet" route: ✅
- Lesson 9.7 still shows the `COUNT`/`AVERAGE`/`STDEV.S` raw-data workflow: ✅
- Chapter 7: 13 lessons ✅
- Chapter 8: 13 lessons ✅, `SOURCE_PARTIAL` ✅, C8.69–C8.75 all `HOLD` ✅
- Zero page/console errors: ✅
- Patch's own internal QA: 14/15 pass — the one failure is `PATCH 05`, the same pre-existing cosmetic string-literal mismatch (`.8047` vs `0.8047`) identified and left unrepaired in the prior round per your instruction. Unrelated to either denial item, unchanged by this repair.

No unexpected mutation anywhere. Chapters 7 and 8 did not need reopening and were not affected.

## FINAL VERDICT

**🟢 CH6 + CH9 PATCH SIGN-OFF GRANTED**

Both prior denial items are closed. These exact v1.6.2 bytes may be frozen as the completed Chapter 6 + Chapter 9 learning-completeness patch.
