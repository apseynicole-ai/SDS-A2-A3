SDS188 A1S2 — Source-to-Skill Contract v1  
Source-status legend

| Code | Meaning |
| :---- | :---- |
| P26 | Current 2026 official/lecturer material — controlling |
| OFF | Official departmental material, but from an earlier year |
| ONL | Supplied textbook/online Chapter 8 extension |
| GEN | Existing AI/generated HTML — reusable only after source verification |
| REF | Secondary/reference material only |
| HOLD | Do not freeze into assessment system until current scope is confirmed |

Reuse codes

| Code | Action |
| :---- | :---- |
| KEEP | Safe academic source to retain |
| REUSE+PATCH | Strong existing material, but needs current-source correction/integration |
| REBUILD | Concept stays, implementation must be replaced |
| REFERENCE | Useful for examples/QA, not controlling |
| HOLD | Preserve but don't make it examinable yet |
| EXCLUDE | Keep out of SDS master |

---

1\. Global Chapter readiness

| Chapter | Current source status | Build status |
| :---- | :---- | :---- |
| 6 — Continuous distributions | 🟢 SOURCE READY | Build fully now |
| 7 — Sampling distributions | 🟢 CORE SOURCE READY | Build current 2026 core; patch old HTML |
| 8 — Confidence intervals | 🟠 PROVISIONAL / PARTIAL | Architecture \+ source-aligned provisional content; do not academically freeze until 2026 release |
| 9 | 🔴 SOURCE MISSING | Blank locked shell only |

Chapter 6 has a current 2026 Group 3 chapter, tutorial, solutions, transcript material and Excel exercises. Its current notes explicitly cover normal probabilities/inverse problems, normality assessment, uniform and exponential distributions and normal approximation to the binomial.  
Chapter 7's existing manual is rich, but explicitly states that its academic authority was the 2023 slides and Tutorial 7, which is why it must now be reconciled with the 2026 notes.  
Chapter 8's older official deck defines the main topic map as confidence intervals for means with σ known/unknown, proportions, required sample size, FPC and bootstrapping.  
---

2\. CHAPTER 6 — full source-to-skill matrix  
Chapter 6 controlling sources  
Primary

* Chapter 6.pdf — SDS188 Group 3, 2026  
* Tutorial 6.pdf  
* Tutorial 6 Solutions.pdf  
* Chapter 6 Excel example \+ solution workbooks in the ZIP  
* Chapter 6 lecturer transcripts

Supporting

* chapter6\_2023.pdf  
* supplied one-topic PDFs for Normal / Percentiles / Uniform / Exponential / Normal Approximation

The current chapter explicitly teaches drawing the requested region, standardising, and using Z-table, HP calculator or Excel via NORM.S.DIST / NORM.DIST; inverse work uses NORM.S.INV / NORM.INV.  
A. Continuous-distribution \+ normal foundation

| ID | Skill the learner must demonstrate | Source / practice | Tool requirement | High-value trap | Master HTML treatment |
| :---- | :---- | :---- | :---- | :---- | :---- |
| C6.01 | Distinguish discrete from continuous random variables | 2026 Ch6 \+ transcript | Conceptual | Probability at a single continuous point ≠ bar height | Recognition drill |
| C6.02 | Explain probability as area under a continuous density | Ch6 transcript | Visual | Treating f(x) as probability | Words → region lab |
| C6.03 | Identify normal notation X∼N(μ,σ2) | 2026 Ch6 §1 | None | Treating variance as SD | Notation retrieval |
| C6.04 | Explain effect of changing μ | Ch6 p2 | Visual | Thinking μ changes spread | Curve comparison |
| C6.05 | Explain effect of changing σ / variance | Ch6 p2 | Visual | Variance vs SD | Curve comparison |
| C6.06 | Recognise standard normal Z | Ch6 §1.2 | HP/Excel later | Confusing X and Z | Representation lab |
| C6.07 | Standardise X→Z | Ch6 §1.3 | Calculator | Wrong denominator/sign | Formula-selection \+ execution |
| C6.08 | Translate below/less than into left-tail event | T6 Q1–5 | Excel \+ HP | Wrong region | Region-first drill |
| C6.09 | Translate above/greater than into right tail | T6 Q1–5 | Excel \+ HP | Forgetting 1−CDF | Tail contrast repair |
| C6.10 | Solve a between probability | T6 Q1d, Q3d etc. | Excel \+ HP | Adding instead of upper − lower | Two-boundary drill |
| C6.11 | Handle \< vs ≤ for continuous distributions | Lecturer transcript | Conceptual | Importing discrete logic | Rapid true/false discrimination |

The lecturer specifically emphasises that the HP route gives cumulative left-tail probability, making a “greater than” sign a reason to stop and use the complement; the transcript also explicitly distinguishes continuous \< and ≤ from the discrete case.  
Build implication  
Every normal-probability problem should force:  
WORDS → EVENT → SHADED REGION → X/Z REPRESENTATION → TOOL → INTERPRETATION  
before a numerical answer can earn APPLY evidence.  
---

B. Inverse normal / percentiles

| ID | Skill | Practice | Excel/tool | Trap | Treatment |
| :---- | :---- | :---- | :---- | :---- | :---- |
| C6.12 | Recognise that probability is given and boundary is unknown | T6 Q2d, Q3c/d, Q4c, Q5b | NORM.S.INV, NORM.INV; HP inverse | Solving forward instead of inverse | Recognition set |
| C6.13 | Convert right-tail percentage to cumulative-left probability | T6 Q2d/Q4c | Excel/HP | Feeding right-tail area into inverse function | Tail→area drill |
| C6.14 | Find unknown z | Q2d | NORM.S.INV | Sign error | Retrieval \+ execution |
| C6.15 | Transform unknown z back to X | Q3c etc. | NORM.INV or manual | Forget x=μ+zσ | Faded example |
| C6.16 | Find symmetric limits containing a given central % | Q3d | inverse normal | Using 60% as each tail | Central-area lab |
| C6.17 | Compare relative standing across different normal populations with z scores | T6 Q4d | Calculator | Comparing raw marks | Transfer problem |

The current 2026 notes explicitly give the inverse-normal route and state that an unknown boundary can be found through NORM.S.INV or directly with NORM.INV.  
---

3\. CHAPTER 6 — normality and Excel analysis  
This deserves its own learning lane, not a paragraph buried under the normal distribution.  
Normality evidence

| ID | Learner must be able to… | Source/practice | Excel | Common error | Build |
| :---- | :---- | :---- | :---- | :---- | :---- |
| C6.18 | Compare mean, median and mode as symmetry evidence | Current Ch6 §1.4 | Descriptive functions | Treating one indicator as proof | Evidence table |
| C6.19 | Infer left/right skew from mean/median relationship | Current notes | Excel descriptive stats | Direction reversal | Visual discrimination |
| C6.20 | Apply empirical 68–95–99.7 rule to observed data | Ch6 §1.4; T6 Q18–20 | Excel | Expecting exact percentages | Compare observed/theoretical |
| C6.21 | Use skewness and kurtosis as supporting evidence | T6 solutions | Excel | Treating values as standalone proof | Interpretation drill |
| C6.22 | Inspect boxplot/stem-leaf/histogram for symmetry | Current notes | Excel charts | Reading one graph in isolation | Evidence integration |
| C6.23 | Construct normal-probability plotting positions j/(n+1) | Ch6 notes; T6 Q6–7/Q18–20 | Excel | j/n or wrong order | Procedure reconstruction |
| C6.24 | Convert plotting probabilities to z-values | Current notes | NORM.S.INV | Wrong cumulative area | Excel reconstruction |
| C6.25 | Construct and interpret a normal probability plot | T6 Q18–20 | Excel scatterplot | Reversing axes | Build-from-data practical |
| C6.26 | Reach an integrated conclusion on approximate normality | T6 solutions | Excel | “One check passed \= normal” | Interpretation gate |

The official Tutorial 6 asks students to determine whether the Steel dataset is approximately normal by comparing data characteristics, constructing a normal probability plot and constructing a histogram. The solution uses multiple pieces of evidence — mean/median, empirical-rule proportions, skewness/kurtosis, symmetry measures, the normal probability plot and histogram — before reaching the conclusion.  
Reuse decision  
This should become a real Excel laboratory, because we already have:

* unsolved Chapter 6 Excel workbook;  
* solution workbook;  
* tutorial dataset;  
* official tutorial questions.

We do not need to invent fake data for this lane.  
---

4\. CHAPTER 6 — normal approximation to the binomial

| ID | Skill | Source/practice | Tool | Trap | Build |
| :---- | :---- | :---- | :---- | :---- | :---- |
| C6.27 | Recognise when binomial can be approximated by normal | Current Ch6 \+ T6 Q14–17 | Excel/HP | Automatically approximating every binomial | Method-selection lab |
| C6.28 | Check nπ\>5 and n(1−π)\>5 | Lecturer \+ tutorial | Calculator | Omitting conditions | Mandatory pre-calculation gate |
| C6.29 | Set approximate mean nπ | Ch6 | Calculator | Using π as centre | Retrieval |
| C6.30 | Set approximate SD nπ(1−π)​ | Ch6 | Calculator | Using variance as SD | Formula discrimination |
| C6.31 | Apply continuity correction to exact value | T6 Q14–17 | Calculator | No ±0.5 | Visual discrete→continuous |
| C6.32 | Correct \<, ≤, \>, ≥ boundaries | T6 Q14–17 | Calculator | Correcting in wrong direction | Dedicated contrast drill |
| C6.33 | Standardise corrected boundary | Ch6 | HP/Excel | Standardising raw integer | Calculation |
| C6.34 | Compare exact-binomial and approximate result conceptually | T6 Q16 | Excel BINOM.DIST where required | Treating approximation as exact | Comparison lab |

The lecturer explicitly teaches the conditions and the ±0.5 continuity correction because a discrete point must be represented by area under the continuous approximation.  
Important scope note  
The lecturer discussed those condition checks particularly in relation to later written assessment marks. That does not mean we remove them from A1 training; they remain part of correctly selecting/executing the method.  
---

5\. CHAPTER 6 — uniform distribution

| ID | Skill | Source/practice | Tool | Trap | Build |
| :---- | :---- | :---- | :---- | :---- | :---- |
| C6.35 | Recognise uniform distribution from equal density between a,b | Ch6 \+ T6 Q8–9 | None | Confusing height with probability | Recognition |
| C6.36 | Identify bounds a,b | T6 | None | Wrong width | Graph lab |
| C6.37 | Calculate density height 1/(b−a) | Ch6 | Calculator | Treating it as interval probability | Geometry lab |
| C6.38 | Calculate interval probability by area | T6 Q8–9 | Calculator | Wrong base | Faded examples |
| C6.39 | Solve complement / above / below uniform events | T6 Q9 | Calculator | Using normal method unnecessarily | Mixed selection |
| C6.40 | Calculate/interpret uniform mean | T6 Q8d | Calculator | Wrong midpoint | Retrieval |
| C6.41 | Calculate/interpret uniform SD/variance as supplied | T6 | Calculator | Variance vs SD | Formula discrimination |

The lecturer explicitly describes the height as 1/(b−a) and stresses that density height itself is not probability; probability is area.  
---

6\. CHAPTER 6 — exponential distribution

| ID | Skill | Source/practice | Tool | Trap | Build |
| :---- | :---- | :---- | :---- | :---- | :---- |
| C6.42 | Recognise exponential as time between events | Ch6 \+ T6 Q10–13 | None | Choosing Poisson count model | Distribution discrimination |
| C6.43 | Interpret λ as rate per unit time | Ch6 | Calculator | Rate/time units inconsistent | Units gate |
| C6.44 | Calculate E(X)=1/λ | Ch6 | Calculator | Treating λ as mean waiting time | Formula drill |
| C6.45 | Calculate left-tail P(X\<t) | T6 Q10–13 | Calculator | Wrong exponential sign | Calculation |
| C6.46 | Calculate right-tail P(X\>t) | T6 | Calculator | Unnecessary complement errors | Survival drill |
| C6.47 | Calculate between / outside intervals | T6 Q10–11 | Calculator | Wrong subtraction | Region drill |
| C6.48 | Convert rates and time units consistently | T6 Q12–13 | Calculator | λ/hour \+ t/minutes | Mandatory unit check |
| C6.49 | Solve inverse exponential percentile/boundary | Lecturer extension | Calculator ln | Applying normal inverse | Inverse-method contrast |
| C6.50 | Distinguish Poisson from exponential | Lecturer | None | Counts vs waiting times | High-value recognition card |

The lecturer explicitly adds the inverse exponential percentile formula  
Pα​=−λ1​ln(1−α)  
and notes that this calculation was not on the slides but had appeared in assessments. The same lecturer explanation distinguishes Poisson as event counts from exponential as waiting time between events.  
---

7\. CHAPTER 6 practice-source routing  
The builder should tag, rather than merely reproduce, Tutorial 6:

| Tutorial | Skill family |
| :---- | :---- |
| Q1–5 | normal forward, inverse, between, percentile, comparison |
| Q6–7 | normal-probability plotting positions / z-values |
| Q8–9 | uniform |
| Q10–13 | exponential |
| Q14–17 | normal approximation to binomial |
| Q18–20 | Excel normality assessment |

Tutorial 6 explicitly contains the exponential and normal-approximation sets, including exact, at-least and fewer-than wording.  
---

8\. CHAPTER 7 — full source-to-skill matrix  
Controlling source decision  
The file inside the attached ZIP:  
SDS Chapter 7 NOTES.pdf — SDS188, 2026  
must become the controlling Chapter 7 source.  
The older 2023 deck/tutorial remain excellent official practice/coverage evidence. The older deck defines the chapter around sampling distributions, probabilities for sample means/proportions and CLT.  
The biggest current-source change is:  
2026 Chapter 7 now explicitly includes the σ-unknown Student-t sampling distribution.  
This was absent from the existing generated manual.  
---

A. Sampling-distribution foundations

| ID | Learner must demonstrate | Source/practice | Tool | Trap | Master treatment |
| :---- | :---- | :---- | :---- | :---- | :---- |
| C7.01 | Distinguish population, sample, parameter, statistic | 2026 notes \+ existing manual | None | Parameter/statistic swap | Recognition |
| C7.02 | Define sampling distribution correctly | 2026 \+ 2023 | None | Distribution of raw observations | Say-aloud \+ conceptual check |
| C7.03 | Explain sample-to-sample variability | Sources | Visual | Expecting every sample mean \= μ | Simulation/diagram |
| C7.04 | Enumerate exact samples/statistic values when population is tiny | T7 Q4 | Calculator | Counting samples incorrectly | Exact-enumeration lab |
| C7.05 | Construct exact sampling distribution | T7 Q4 | Calculator | Frequency/probability error | Guided → independent |
| C7.06 | Demonstrate E(Xˉ)=μ / unbiasedness | 2026 \+ T7 Q4/Q10 | None | “Every sample mean equals μ” | Concept contrast |
| C7.07 | Define standard error | 2026 notes | None | Confusing with individual SD | Retrieval |
| C7.08 | Use σXˉ​=σ/n​ | 2026 | Calculator | divide by n | Formula-selection |
| C7.09 | Explain why increasing n reduces SE | T7 Q11 | None | Believing centre changes | Conceptual transfer |

The old official tutorial explicitly asks students to enumerate all possible samples, compare the mean of all sample means with the population mean, name unbiasedness and compare variability at different n.  
---

9\. CHAPTER 7 — the essential X vs X̄ distinction

| ID | Skill | Practice | Trap | Build |
| :---- | :---- | :---- | :---- | :---- |
| C7.10 | Identify one observation X | T7 Q2 | Using SE | Object router |
| C7.11 | Identify sample mean Xˉ | T7 Q1–3 | Using σ instead of σ/√n | Object router |
| C7.12 | Choose correct centre for Xˉ | Sources | Moving centre with n | Formula retrieval |
| C7.13 | Choose correct spread for Xˉ | Sources | variance/SD confusion | Contrast |
| C7.14 | Interpret a probability about a sample mean in context | Tutorial | Answer about individuals instead | Interpretation gate |

The existing formula sheet already gets this distinction right: one observation uses σ, while an average of n observations uses σ/n​.  
Reuse: keep this content almost intact.  
---

10\. CHAPTER 7 — sample mean, σ known

| ID | Skill | Source/practice | Excel/tool | Trap | Build |
| :---- | :---- | :---- | :---- | :---- | :---- |
| C7.15 | Recognise normal population \+ known σ case | 2026 §2 | None | Jumping to t | Method selection |
| C7.16 | State Xˉ's centre/variance/SE | 2026 | Calculator | Variance vs SE | Retrieval |
| C7.17 | Solve left-tail mean probability | T7 Q1a/Q2b | NORM.S.DIST / NORM.DIST | Use X instead of X̄ | Calculation |
| C7.18 | Solve between mean probability | T7 Q1b | Excel | Wrong subtraction | Region lab |
| C7.19 | Solve right-tail mean probability | T7 Q1c | Excel | Complement | Tail drill |
| C7.20 | Solve inverse boundary | T7 Q1d | NORM.S.INV | Incorrect cumulative area | Inverse drill |
| C7.21 | Find central symmetric limits for sample means | 2026 notes \+ practice | NORM.S.INV | Wrong α/2 | Faded example |

Tutorial 7 begins with precisely this below/between/above/inverse sequence.  
---

11\. CHAPTER 7 — CLT

| ID | Skill | Source/practice | Trap | Build |
| :---- | :---- | :---- | :---- | :---- |
| C7.22 | State what becomes approximately normal | 2026 Q5.2 \+ legacy slides | Saying original population becomes normal | Conceptual gate |
| C7.23 | Recognise exact normality when population itself is normal | Sources | Unnecessarily invoke CLT | Selection |
| C7.24 | Recognise large-n CLT logic for non-normal populations | 2026 Q5.2 | Treating sample size as absolute theorem cutoff | Contrast |
| C7.25 | Apply CLT to a sample mean from an exponential population | Legacy T7 Q3 | Using exponential distribution for Xˉ | Cross-chapter transfer |
| C7.26 | Retain original mean/SE under CLT | Sources | Changing μ | Calculation |

Source-boundary decision  
The 2026 current notes require the general “large enough” idea but do not, in the portion audited, give the full old threshold scheme.  
Therefore:

* use “large enough” in core current teaching;  
* any older n≈15/n≈30 guidance may appear in a legacy/source-note box, not as an invented hard rule.

The existing manual itself warns that its n\>30/about-30 language is guidance rather than a theorem boundary.  
---

12\. CHAPTER 7 — NEW REQUIRED PATCH: σ unknown / Student t  
This is the most important content correction to the old HTML.  
The current 2026 notes explicitly contain:  
Xˉ∼tn−1​  
and  
T=s/n​Xˉ−μ​  
with:  
df=n−1  
and the Excel route:  
\=T.DIST(tcalc,df,TRUE).  
Skills

| ID | Skill | Existing HTML? | Action |
| :---- | :---- | :---- | :---- |
| C7.27 | Recognise σ known vs σ unknown | ❌ inadequate | NEW method-selection fork |
| C7.28 | Replace σ with sample s when σ unknown | ❌ | Build |
| C7.29 | Recognise Student-t sampling model | ❌ | Build |
| C7.30 | Calculate T | ❌ | Build |
| C7.31 | Determine df=n−1 | ❌ | Build |
| C7.32 | Obtain cumulative t probability in Excel | ❌ | Build |
| C7.33 | Discriminate Z case from t case | ❌ | High-priority mixed selection |

Master decision  
This becomes a required Chapter 7 lane, not an optional appendix.  
And the central recognition question should be:  
Is population σ known?  
YES → Z route  
 NO → s \+ Student t route  
---

13\. CHAPTER 7 — sample proportion

| ID | Skill | Source/practice | Tool | Trap | Build |
| :---- | :---- | :---- | :---- | :---- | :---- |
| C7.34 | Identify p=X/n as sample proportion | T7 Q5–9 | Calculator | Percent vs decimal | Recognition |
| C7.35 | Identify population parameter π | Sources | None | p vs π | Notation drill |
| C7.36 | Check normal-approximation conditions | 2026 | Calculator | Skip condition | Gate |
| C7.37 | Use centre π | 2026 | None | centre=p | Retrieval |
| C7.38 | Use theoretical SE π(1−π)/n​ when π known | T7 Q5 | Calculator | p substituted automatically | Formula choice |
| C7.39 | Use observed p when an estimated SE is requested | Legacy T7 Q6 | Calculator | confusing theoretical and estimated SE | Contrast drill |
| C7.40 | Solve p probability | T7 Q7–9 | Excel normal CDF | percentage/decimal | Calculation |
| C7.41 | Solve between limits for p | Q8/Q9 | Excel | wrong tail | Region |
| C7.42 | Find central probability bounds for p | Q8 | inverse normal | wrong SE | Transfer |
| C7.43 | Explain effect of larger n | T7 Q7/Q9 | None | centre changes | Visual compare |

⚠️ Exact source correction  
The current 2026 notes say:  
nπ\>5,n(1−π)\>5  
The existing generated formula sheet says ≥ 5\.  
For the master:  
Use the current 2026 wording \> 5\.  
Do not copy the old generated ≥5 formulation.  
---

14\. CHAPTER 7 — difference between two independent sample means

| ID | Skill | Source/practice | Tool | Trap | Build |
| :---- | :---- | :---- | :---- | :---- | :---- |
| C7.44 | Identify random object Xˉ1​−Xˉ2​ | Current notes; T7 Q12–13 | None | Separate one-mean models | Object router |
| C7.45 | Preserve group order 1−2 | Sources | None | Reverse groups | Mandatory representation |
| C7.46 | Centre at μ1​−μ2​ | Sources | Calculator | Assume zero | Retrieval |
| C7.47 | Combine variances for SE | Sources | Calculator | Add SDs directly | Formula selection |
| C7.48 | Translate “group 1 greater than group 2” to difference \>0 | 2026 notes | None | Wrong threshold | Language→event |
| C7.49 | Translate “greater by more than c” to difference \>c | Current notes | None | Use 0 | Contrast |
| C7.50 | Standardise and calculate probability | T7 Q12/Q13 | Excel/HP | wrong sign/tail | Independent practice |
| C7.51 | Explain effect of n on difference SE | T7 Q12 a–c | None | centre changes | Transfer |

The legacy Tutorial 7 explicitly varies the sample size in a two-mean probability question and includes a second independent-means application.  
Reuse quality here is high.  
---

15\. CHAPTER 7 — finite-population correction  
The old sources/tutorial and generated manual teach FPC extensively. The current 2026 Chapter 7 notes I audited do not presently contain a dedicated FPC section.  
Therefore this receives a different source-status flag.

| ID | Skill | Status | Build |
| :---- | :---- | :---- | :---- |
| C7.52 | Recognise finite population \+ without replacement | OFF / legacy | Keep provisional |
| C7.53 | Compute sampling fraction n/N | OFF | Keep |
| C7.54 | Apply FPC when \>5% | OFF | Keep |
| C7.55 | Correct mean SE | OFF | Keep |
| C7.56 | Correct proportion SE | OFF | Keep |
| C7.57 | Explain that FPC narrows spread, not centre | OFF | Keep |
| C7.58 | Solve finite-population mean probability | T7 Q14 | OFF |

The existing manual's FPC teaching is strong: it explicitly checks “without replacement?” and n/N\>.05, then adjusts SE.  
Decision  
REUSE+PATCH, but tag the lane CURRENT-SCOPE CONFIRMATION REQUIRED.  
Do not delete it — Chapter 8 clearly returns to finite populations — but do not let this legacy evidence silently override the 2026 Chapter 7 pack.  
---

16\. Chapter 7 question-router after the patch  
The old router currently distinguishes:  
X → Xˉ → p → Xˉ1​−Xˉ2​  
The new master must distinguish:  
ONE OBSERVATION?  
→ X

SAMPLE MEAN?  
→ Is σ known?  
   YES → Z / normal sampling distribution  
   NO  → Student t, df=n−1

SAMPLE PROPORTION?  
→ p \+ expected-count checks

DIFFERENCE BETWEEN MEANS?  
→ X̄1 − X̄2

FINITE POPULATION WITHOUT REPLACEMENT?  
→ check FPC status  
That is a significant upgrade.  
---

17\. CHAPTER 7 existing-HTML reuse map  
This is where we save a lot of work.  
Existing master manual  
SDS188\_Chapter7\_Sampling\_Distributions\_MasterStudyManual\_v1\_1\_FINAL.html  
Section-by-section decision

| Existing section | Reuse decision | Required change |
| :---- | :---- | :---- |
| Start Here | ✅ REUSE+PATCH | Keep object-first idea; convert checks to evidence |
| Roadmap | ✅ REUSE | Insert σ-known/unknown fork |
| Core Vocabulary | ✅ REUSE | Source-label current concepts |
| Sampling Mental Model | ✅ REUSE | Excellent explanation |
| Building Sampling Distribution | ✅ REUSE | Retain as guided example |
| Comparison / exact construction | ✅ REUSE | Link to T7 Q4 |
| Standard Error | ✅ REUSE+PATCH | Align terminology with 2026 notes |
| Normal Case | ✅ REUSE+PATCH | Explicitly label σ known |
| CLT | ✅ REUSE+PATCH | Current core \+ legacy guidance distinction |
| Mean Probabilities | ✅ REUSE | Add Excel evidence pathway |
| Inverse / Central Limits | ✅ REUSE | Keep |
| Proportions | ⚠️ PATCH | ≥5 → current 2026 \>5 |
| Two Means | ✅ REUSE | Strong current overlap |
| FPC | 🟠 HOLD/REUSE | Legacy/current-scope flag |
| Tutorial 7 Worked Questions | 🟠 REUSE AS PRACTICE | Existing answers are derived, not official memo |
| Decision Tree | ✅ REBUILD | Add σ unknown → t |
| Formula Bank | ✅ REBUILD | Add Student-t lane; source-status labels |
| Trap Bank | ✅ REUSE+PATCH | Revalidate each trap |
| Mastery Test | ❌ REBUILD | Existing generated questions cannot automatically establish evidence |
| Revision Sheet | ✅ REUSE+PATCH | Include t case |
| Visualiser | 🟡 KEEP OPTIONAL | Useful but secondary to problem attempts |
| Source QA | ✅ KEEP/UPDATE | Change controlling authority to 2026 notes |
| Section completion/progress bar | ❌ DELETE AS MASTERY | Replace with evidence state engine |

The existing HTML itself says its Tutorial 7 solutions are derived rather than an official memorandum. That distinction must survive in the master.  
And its current sidebar literally measures “sections complete,” which is incompatible with our mastery model.  
---

18\. Chapter 7 formula-sheet reuse  
The current cover/formula sheet has one of the best reusable structures in the project:  
Identify object → centre → SE → conditions → draw region → standardise → calculate → interpret.  
Keep

* X vs X̄ distinction;  
* standard error;  
* CLT;  
* p;  
* two means;  
* inverse probability rules;  
* trap strip;  
* FPC as provisional;  
* visual compactness.

Patch  
Add:  
Sample mean, σ unknown  
statistic \= Xˉ  
 centre \= μ  
 estimated SE \= s/n​  
 distribution \= Student t  
 df \= n−1  
and change proportion condition wording to current \>5.  
---

19\. CHAPTER 8 — source status before the matrix  
This chapter is different.  
The files give us a very coherent academic picture, but the central deck is 2023 and the tutorial is 2022\.  
The older official deck says the chapter covers:

* confidence intervals for means with σ known;  
* means with σ unknown;  
* population proportion;  
* required sample size;  
* finite-population correction;  
* bootstrapping.

The old tutorial independently tests the same core structure, including known-σ confidence intervals, sample size, proportion intervals, t critical values, t intervals and FPC.  
So this is strong provisional evidence, but not yet a 2026 freeze.  
---

20\. CHAPTER 8 — estimation foundations

| ID | Learner must demonstrate | Source | Status | Build |
| :---- | :---- | :---- | :---- | :---- |
| C8.01 | Distinguish point estimate from interval estimate | Ch8 deck | OFF | Teach |
| C8.02 | Match Xˉ→μ, p→π | Deck | OFF | Recognition |
| C8.03 | Explain unbiased estimator | Deck | OFF | Conceptual |
| C8.04 | Explain consistency | Deck | OFF | Conceptual |
| C8.05 | Explain relative efficiency | Deck | OFF | Discrimination |
| C8.06 | Understand sampling uncertainty behind CI | Ch7→8 bridge | OFF | Mental model |
| C8.07 | Recognise generic CI structure: estimate ± margin | Deck | OFF | Formula architecture |
| C8.08 | Identify lower/upper limit and width | Deck | OFF | Visual lab |
| C8.09 | Interpret confidence level correctly | T8 Q3 | OFF | Major interpretation gate |
| C8.10 | Distinguish parameter interval from distribution of individual observations | T8 Q4/Q10 | OFF | High-value trap |

Tutorial 8 deliberately asks why a single observation can lie outside a confidence interval for the mean without being unusual — excellent evidence for this distinction.  
---

21\. CHAPTER 8 — confidence interval for μ, σ known

| ID | Skill | Practice | Excel status | Trap | Build |
| :---- | :---- | :---- | :---- | :---- | :---- |
| C8.11 | Recognise parameter μ and known σ | T8 Q1–4 | 2026 A1 function not yet confirmed | Choosing t | Method-selection |
| C8.12 | Select z critical value from confidence level | Sources | HOLD exact Excel route | wrong α/2 | Critical-area lab |
| C8.13 | Calculate SE σ/n​ | Sources | Calculator/Excel | use σ | Ch7 bridge |
| C8.14 | Calculate margin of error | Sources | Tool | omit critical value | Faded example |
| C8.15 | Construct lower and upper limits | T8 Q1–4 | Tool | sign/addition error | Calculation |
| C8.16 | Interpret interval in context | Q3/Q4 | None | probability-of-parameter language | Interpretation gate |
| C8.17 | Decide whether normal-population assumption is needed for large n | Q4b | None | blanket answer | Conceptual |
| C8.18 | Explain effect of changed sample mean | Q4d | None | width vs centre confusion | Transfer |
| C8.19 | Explain effect of n on interval width | Deck | None | centre changes | Visual compare |
| C8.20 | Explain effect of confidence level on width | Deck | None | higher confidence \= narrower | Conceptual |

A1 build decision  
Teach the statistics now provisionally.  
Do not hardcode a 2026 Chapter 8 Excel function workflow until the current practical/lecture material arrives.  
---

22\. CHAPTER 8 — μ with σ unknown / Student t  
This creates a very useful bridge from current Chapter 7\.

| ID | Skill | Practice | Status |
| :---- | :---- | :---- | :---- |
| C8.21 | Recognise σ unknown → use s | T8 Q9–10 | OFF but strong |
| C8.22 | Recognise Student-t critical distribution | Ch8 \+ t-table | OFF |
| C8.23 | Use df=n−1 | Q9 | OFF |
| C8.24 | Determine t critical value | Q9 | OFF |
| C8.25 | Use s/n​ | Q10 | OFF |
| C8.26 | Construct t confidence interval | Q10 | OFF |
| C8.27 | Check/support normality assumption for small sample | Q10 | OFF |
| C8.28 | Interpret claims against interval | Q10b | OFF |
| C8.29 | Distinguish individual observation from CI for μ | Q10c | OFF |

Critical cross-chapter distinction  
Chapter 7 asks:  
What is the probability distribution of Xˉ when σ is unknown?  
Chapter 8 asks:  
What interval do I use to estimate μ when σ is unknown?  
Same t machinery.  
Different question.  
The master should deliberately contrast these.  
---

23\. CHAPTER 8 — confidence interval for π

| ID | Skill | Practice | Trap | Build |
| :---- | :---- | :---- | :---- | :---- |
| C8.30 | Identify p as point estimator of π | Q8 | p vs π | Recognition |
| C8.31 | Check proportion approximation conditions | Deck | omitted condition | Gate |
| C8.32 | Calculate estimated SE from p | Q8 | use π when unknown | Formula selection |
| C8.33 | Select z critical | Q8 | wrong α/2 | Calculation |
| C8.34 | Construct interval for π | Q8 | percentage conversion | Calculation |
| C8.35 | Interpret interval | Q8b | parameter probability error | Interpretation |
| C8.36 | Compare 95 vs 99% consequences | Q8 c/d | confidence-width confusion | Transfer |

Tutorial 8 explicitly pairs a proportion CI with interpretation and then asks for follow-up sample sizes at different confidence levels.  
---

24\. CHAPTER 8 — sample-size determination  
Mean

| ID | Skill | Practice | Build |
| :---- | :---- | :---- | :---- |
| C8.37 | Identify desired margin/error e | Q5–6 | Words→formula |
| C8.38 | Select z from confidence | Q5–6 | Retrieval |
| C8.39 | Use assumed/known σ | Q5–6 | Formula choice |
| C8.40 | Solve required n for mean | Q5–6 | Calculation |
| C8.41 | Always round required n upward | Sources | Trap drill |
| C8.42 | Use pilot/expected s where σ unavailable if source permits | Deck | Provisional |

The Chapter 8 source describes margin of error as the amount added and subtracted to the point estimate.  
Proportion

| ID | Skill | Practice | Build |
| :---- | :---- | :---- | :---- |
| C8.43 | Solve n using prior/pilot p | T8 Q7/Q8 | Calculation |
| C8.44 | Recognise when population proportion estimate is available | Q7 | Selection |
| C8.45 | Use conservative .5 when no estimate exists if confirmed by current source | legacy deck | Provisional |
| C8.46 | Compare effect of e on n | Question variants | Transfer |
| C8.47 | Compare effect of confidence on n | Q8 | Transfer |
| C8.48 | Round upward | all n questions | Trap |

---

25\. CHAPTER 8 — finite-population estimation  
This topic has unusually strong supporting material: it appears in the old tutorial and has a dedicated supplied online extract.  
The supplied finite-population section explicitly says to use the correction for sampling without replacement when more than 5% of the finite population is sampled.

| ID | Skill | Source/practice | Build |
| :---- | :---- | :---- | :---- |
| C8.49 | Ask: finite population? without replacement? | Online 8.7 | Decision gate |
| C8.50 | Compute n/N | Online | Recognition |
| C8.51 | Apply FPC to mean CI | T8 Q11 | Calculation |
| C8.52 | Apply FPC to proportion CI | T8 Q12 | Calculation |
| C8.53 | Explain why FPC reduces uncertainty | Online | Concept |
| C8.54 | Recognise when FPC has negligible effect | Online | Discrimination |
| C8.55 | Determine initial n0​ | Online | Formula |
| C8.56 | Adjust sample size for finite N | T8 Q12 \+ online | Calculation |
| C8.57 | Use n=n0​N/\[n0​+(N−1)\] | Online | Retrieval |

The finite-population source explicitly gives that sample-size adjustment.  
Decision  
Strong provisional inclusion.  
Unlike some other Chapter 8 extensions, this is reinforced by the tutorial.  
---

26\. CHAPTER 8 — bootstrapping

| ID | Learner must demonstrate | Source | Build |
| :---- | :---- | :---- | :---- |
| C8.58 | Recognise why standard parametric CI may be inappropriate | Ch8/bootstrapping | Method selection |
| C8.59 | Identify non-normality as the trigger in supplied example | Deck | Ch6 normality bridge |
| C8.60 | Distinguish original sample from bootstrap resample | Online | Concept |
| C8.61 | Resample with replacement from observed sample | Online | Procedure sequencing |
| C8.62 | Preserve bootstrap resample size n | Online | Trap |
| C8.63 | Calculate statistic for each resample | Online | Procedure |
| C8.64 | Repeat many times | Online | Concept |
| C8.65 | Order bootstrap statistics | Online | Procedure |
| C8.66 | Remove appropriate lower/upper tail fractions | Online | Percentile CI |
| C8.67 | State resulting bootstrap interval | Online | Interpretation |
| C8.68 | Understand software is practically required | Source | Tool awareness |

The old chapter explicitly uses a non-normal boxplot as the reason the ordinary CI is inappropriate and turns to bootstrapping. The supplied bootstrap extract then demonstrates selecting the lower and upper 5% of 100 bootstrap means for a 90% interval.  
Gap  
There is no equivalent current tutorial question in the T8\_2022 set we have.  
So bootstrapping should be:  
TEACH \+ VERIFIED PRACTICE FROM SUPPLIED BOOTSTRAP SOURCE  
not AI-invented practice presented as lecturer material.  
---

27\. CHAPTER 8 — auditing / population totals  
These supplied files are potentially very valuable for BAcc application, but we must be disciplined.  
The separate Chapter 8.6 extract covers:

* estimating population totals;  
* confidence intervals for totals;  
* difference estimation;  
* one-sided confidence limits for noncompliance/auditing.

It even contains Excel implementation using T.INV.2T for the total-estimation worksheet.  
However, these topics do not appear in the core Chapter 8 objectives/table of contents we currently have.  
Therefore:

| ID | Skill | Status |
| :---- | :---- | :---- |
| C8.69 | Point estimate for population total NXˉ | 🟠 HOLD |
| C8.70 | CI for population total | 🟠 HOLD |
| C8.71 | Difference Di​=audited-original | 🟠 HOLD |
| C8.72 | Mean/SD of audit differences | 🟠 HOLD |
| C8.73 | CI for total difference | 🟠 HOLD |
| C8.74 | One-sided noncompliance bound | 🟠 HOLD |
| C8.75 | Auditing interpretation | 🟠 HOLD |

Do not delete these.  
But until a 2026 lecturer source says they belong in A1S2:  
they must not consume A1 study time or readiness weight.  
---

28\. Chapter 8 tutorial routing

| Tutorial 8 question | Skill family |
| :---- | :---- |
| Q1–2 | mean CI, σ known |
| Q3 | interpretation of confidence level |
| Q4 | known σ \+ assumption \+ individual vs mean CI \+ changed x̄ |
| Q5–6 | required sample size for mean |
| Q7 | required sample size for proportion |
| Q8 | proportion CI \+ interpretation \+ sample size |
| Q9 | t critical values |
| Q10 | σ unknown / t CI \+ interpretation |
| Q11 | finite-population mean CI |
| Q12 | finite-population proportion CI \+ finite-population sample size |

That old tutorial produces an unusually coherent practice spine and is therefore useful even while the 2026 source gate remains open.  
---

29\. Cross-chapter dependency matrix  
This is crucial because the HTML should not teach each chapter as an island.

| Earlier skill | Becomes necessary for… |
| :---- | :---- |
| C6 normal regions/tails | C7 sampling probabilities → C8 α/2 and CI critical regions |
| C6 inverse normal | C7 inverse sample-statistic bounds → C8 critical z |
| C6 variance vs SD | C7 SE → C8 margin of error |
| C6 normality assessment | C7 normal/CLT decisions → C8 t assumptions / bootstrap decision |
| C6 exponential waiting time | C7 CLT for mean waiting time |
| C6 percent→decimal discipline | C7 proportions → C8 proportion CIs |
| C7 parameter vs statistic | C8 point estimator vs population parameter |
| C7 standard error | directly becomes part of C8 margin of error |
| C7 σ-known Z model | C8 μ CI, σ known |
| C7 σ-unknown t model | C8 μ CI, σ unknown |
| C7 sample proportion | C8 CI/sample-size for π |
| C7 FPC | C8 finite-population CIs/sample size |
| C7 interpretation of sampling distributions | C8 correct confidence-interval interpretation |

The master should explicitly teach:  
Chapter 6: what happens to one random variable.  
 Chapter 7: what happens to a statistic across random samples.  
 Chapter 8: use that sampling behaviour to estimate an unknown population parameter.  
That single three-step narrative will make the semester substantially easier to organise mentally.  
---

30\. Global method-selection router  
After Chapters 6–8 are integrated, the system's recognition screen should eventually ask roughly this:  
WHAT IS THE QUESTION ASKING ABOUT?

1\. One continuous observation X?  
   → Normal / Uniform / Exponential?

2\. Binomial count being approximated?  
   → Check nπ and n(1−π), continuity correction

3\. A sample statistic?  
   → X̄ / p / X̄1−X̄2

4\. Sample mean X̄?  
   → σ known?  
       YES → Z/normal  
       NO  → Student t

5\. Estimating a population parameter with an interval?  
   → μ or π?  
   → σ known/unknown?  
   → finite population?  
   → non-normal / bootstrap?

6\. Determining required sample size?  
   → mean or proportion?  
   → finite population adjustment?  
This becomes the core of the Recognition & Selection Lab.  
---

31\. File-level reuse map  
CHAPTER 6

| File | Decision | Role |
| :---- | :---- | :---- |
| Chapter 6.pdf | 🟢 KEEP — PRIMARY | Controlling 2026 theory |
| Chapter 6 transcripts.pdf | 🟢 KEEP | Lecturer emphasis, tool procedures, gaps such as exponential inverse |
| Tutorial 6.pdf | 🟢 KEEP | Official problem bank |
| Tutorial 6 Solutions.pdf | 🟢 KEEP | Official answer/interpretation authority |
| T06-data.xlsx | 🟢 KEEP | Real Excel datasets |
| Chapter 6 \- Excel examples.xlsx | 🟢 KEEP | Excel practice |
| ...Excel examples (Solutions).xlsx | 🟢 KEEP | Exact Excel solution authority |
| Normal/Percentile/Uniform/Exponential PDFs | 🟢 KEEP | Focused practical assets |
| chapter6\_2023.pdf | 🟡 REFERENCE | Legacy comparison/backup |
| Generic lecture-note PDFs | 🟡 REFERENCE | Audit only if needed |
| Studocu material | 🔴 REFERENCE ONLY | Never source authority |

---

32\. CHAPTER 7 file reuse map

| File | Decision | Role |
| :---- | :---- | :---- |
| SDS Chapter 7 NOTES.pdf | 🟢 KEEP — PRIMARY 2026 | Controlling content |
| chapter7\_2023.pdf | 🟡 KEEP AS LEGACY | Scope/practice support |
| Tutorial 7\_2023.pdf | 🟡 KEEP AS LEGACY OFFICIAL PRACTICE | Verified applications |
| ...MasterStudyManual\_v1\_1\_FINAL.html | 🟢 REUSE+PATCH | Content library, not mastery system |
| ...Cover\_and\_Formula...FINAL.html | 🟢 REUSE+PATCH | Formula/reference design |
| final print PDF | 🟢 KEEP | Existing printable revision reference |
| older manual HTML | 🟠 ARCHIVE | Superseded |
| older cover HTML/PDF | 🟠 ARCHIVE | Superseded |
| passive completion JS | 🔴 DO NOT REUSE | Replace with evidence engine |
| generated mastery questions | 🟠 REVALIDATE/REPLACE | Cannot automatically become authoritative question bank |

---

33\. CHAPTER 8 file reuse map

| File | Decision | Role |
| :---- | :---- | :---- |
| SDS 188 chapter8\_2023.pdf | 🟠 PROVISIONAL CORE | Best current chapter map while waiting |
| SDS 188 Tutorial 8\_2022.pdf | 🟠 PROVISIONAL PRACTICE | Strong official problem map |
| SDS 188 CHAPTER 8 t-table.pdf | 🟡 REFERENCE | t understanding/manual practice |
| Finite-population PDF | 🟢 KEEP | Strong dedicated source |
| Bootstrapping PDF | 🟢 KEEP | Strong dedicated source |
| Confidence Intervals for Totals PDF | 🟠 HOLD | Preserve; A1 scope unconfirmed |
| duplicates | 🟠 ARCHIVE | One canonical copy only |
| future 2026 Chapter 8 deck/tutorial | 🔴 SOURCE BLOCKER | Will replace legacy authority when obtained |

---

34\. Folder cleanup decisions  
These should not enter the builder's SDS source register:

| Item | Action |
| :---- | :---- |
| Lesson 4\_Tutorial \_4.docx | EXCLUDE — Xero material |
| Lesson 4 An Introduction.mp4 | EXCLUDE — Xero material |
| TUT 7 copies of Tutorial 6 | Archive duplicates |
| duplicate Chapter 8 PDFs | Archive duplicates |
| .DS\_Store / \_\_MACOSX | Ignore |
| Studocu revision | Reference-only |
| old generated versions superseded by v1.1 final | Archive |

---

35\. What the final HTML is actually allowed to reuse  
This is the important distinction.  
Reuse academic CONTENT  
Yes:

* definitions;  
* formulas;  
* diagrams;  
* teaching explanations;  
* official examples;  
* tutorial questions;  
* verified solutions;  
* trap explanations;  
* source-linked Excel procedures.

Reuse learning DESIGN  
Selectively:

* Chapter 7 object-first mental model;  
* decision strips;  
* formula cards;  
* normal/sampling visualisers;  
* print layouts.

Do NOT reuse learning STATE  
Replace:  
22 / 22 sections complete  
with:  
C7.17 Sample-mean probability

UNDERSTAND ✓  
RETRIEVE ✓  
APPLY ✓  
STABLE —  
REPAIR —

Evidence:  
✓ independent familiar problem  
✓ correct method selection  
✓ correct interpretation  
— delayed transfer not yet passed  
That is a completely different standard.  
---

36\. Master question-bank architecture  
Every verified question should receive metadata such as:  
id  
chapter  
skillIds  
source  
sourceYear  
sourceAuthority  
questionNumber  
questionType  
difficulty  
requiresExcel  
requiresCalculator  
selectionTarget  
representationTarget  
interpretationTarget  
familiar / altered / mixed  
solutionAuthority  
For example:  
T7-Q1C

chapter: 7  
skills:  
  \- C7.11  
  \- C7.15  
  \- C7.19

source: Tutorial 7\_2023  
authority: official-legacy  
object: sample mean  
operation: right-tail probability  
tool: normal CDF / complement  
trap:  
  \- individual-vs-mean  
  \- right-tail  
Then one tutorial question can serve:

* teaching;  
* retrieval;  
* repair;  
* mixed practice;

without us copying the same question into four unrelated areas.  
---

37\. Formula bank architecture  
Every formula should be stored as a decision object:  
Example — sample mean known σ  
Question it answers  
Probability/boundary involving a random sample mean when population σ is known.  
Random object  
Xˉ  
Centre  
μ  
Spread  
n​σ​  
Rules out  
σ unknown → don't use this Z route; investigate Student t.  
Easily confused with  
X, one individual observation, where spread is σ.  
Common cue  
“mean/average of a random sample of n…”  
This is much more valuable than a giant static formula list and directly follows the Brain advisory.  
---

38\. Trap bank we can already freeze  
These are supported strongly enough to build immediately:

| Trap | Correct reflex |
| :---- | :---- |
| Variance given instead of SD | square root first |
| “average of n” | think SE, not σ |
| “one observation” | use individual distribution |
| “greater than” | check right tail/complement |
| “between” | upper cumulative − lower cumulative |
| percentage | convert appropriately to proportion |
| probability known, value unknown | inverse problem |
| binomial → normal | conditions \+ continuity correction |
| rate/time units differ | convert before exponential calculation |
| Poisson vs exponential | count vs waiting time |
| CLT | sampling distribution changes, not original population |
| σ known vs unknown | Z vs t |
| t | df \= n−1 |
| two means | preserve group order |
| p vs π | statistic vs population parameter |
| confidence interval | interval estimates parameter, not individual values |
| sample-size result | round up |
| finite population | only without replacement; check sampling fraction |
| bootstrap | resample original sample with replacement |

---

39\. What we should not freeze yet  
This is equally important.  
🟠 Chapter 7  
Do not freeze as current-2026 scope:

* FPC until a current Chapter 7 practical/tutorial confirms it.

Keep it available because it bridges directly into Chapter 8\.  
🟠 Chapter 8  
Do not freeze:

* exact 2026 Excel procedure/function choices;  
* 2026 wording of assumptions;  
* any changes from the 2023 deck;  
* exact tutorial numbering;  
* whether auditing/totals are A1S2 examinable.

🔴 Chapter 9  
Nothing.  
No chapter title.  
No guessed textbook sequence.  
No prerequisites.  
No formulas.  
---

40\. Build priority after this matrix  
We can now classify the implementation itself.

| Tier | Build now? | Contents |
| :---- | :---- | :---- |
| A — GREEN | YES | Entire Chapter 6 \+ Excel lane |
| A — GREEN | YES | 2026 Chapter 7 core, including NEW Student-t lane |
| A — GREEN | YES | shared mastery/evidence engine, repair system, router |
| B — AMBER | YES, tagged provisional | legacy T7 applications/FPC |
| B — AMBER | YES as provisional shell/content | Chapter 8 core CI architecture |
| B — AMBER | YES provisional | Ch8 FPC \+ bootstrapping |
| C — HOLD | NO assessment weighting | Ch8 totals/audit extensions |
| D — LOCKED | NO | Chapter 9 |

---

41\. The definitive Ch6–8 architecture  
After this audit, I would structure the actual content tree as:  
CHAPTER 6 — CONTINUOUS DISTRIBUTIONS  
│  
├── 6.1 Continuous probability foundations  
├── 6.2 Normal distribution  
├── 6.3 Normal regions and probabilities  
├── 6.4 Inverse normal / percentiles  
├── 6.5 Normality evaluation  
├── 6.6 Excel normality laboratory  
├── 6.7 Uniform distribution  
├── 6.8 Exponential distribution  
├── 6.9 Exponential inverse problems  
└── 6.10 Normal approximation to binomial

CHAPTER 7 — SAMPLING DISTRIBUTIONS  
│  
├── 7.1 Population → sample → statistic → sampling distribution  
├── 7.2 Exact sampling distributions / unbiasedness  
├── 7.3 Standard error  
├── 7.4 X versus X̄  
├── 7.5 X̄ with σ known — Z  
├── 7.6 CLT  
├── 7.7 X̄ with σ UNKNOWN — STUDENT t     ← NEW PATCH  
├── 7.8 Sample proportions  
├── 7.9 Difference between two sample means  
├── 7.10 Finite population correction \[scope flag\]  
└── 7.11 Mixed object/method selection

CHAPTER 8 — CONFIDENCE INTERVAL ESTIMATION  
│  
├── 8.1 Point vs interval estimation  
├── 8.2 Estimator quality  
├── 8.3 Confidence / α / margin of error  
├── 8.4 CI μ — σ known  
├── 8.5 CI μ — σ unknown / t  
├── 8.6 CI π  
├── 8.7 Sample size — mean  
├── 8.8 Sample size — proportion  
├── 8.9 Finite populations  
├── 8.10 Bootstrapping  
└── 8.X Auditing / totals \[HOLD\]  
That is now much cleaner than simply joining three existing documents.  
---

42\. Three especially important corrections discovered by this matrix  
Correction 1 — Chapter 7 cannot be imported unchanged  
The existing HTML is missing the current 2026 σ unknown → Student t lane.  
That has to be added before it can become the master.  
Correction 2 — proportion condition wording needs updating  
Current 2026 Chapter 7 notes:  
nπ\>5,n(1−π)\>5  
Existing generated formula sheet:  
nπ≥5,n(1−π)≥5  
Master uses current 2026 \>5.  
Correction 3 — Chapter 8 must not masquerade as final 2026 content  
It is well-supported provisionally, but we need the current Chapter 8 lecturer/practical release before declaring it frozen.  
---

Final audit verdict  
We now have enough evidence to freeze the learning architecture and the Chapter 6/7 content architecture.  
Chapter 6  
GREEN — buildable and auditable now.  
Chapter 7  
GREEN — buildable after the specific t-distribution/current-source patches above.  
Chapter 8  
AMBER — strong provisional academic map; safe to architect, not yet safe to call final 2026 A1 content.  
Chapter 9  
RED — locked source gap.  
And critically, I don't think we need another conceptual planning phase after this. The Brain advisory \+ this matrix are enough architecture. The next useful deliverable should be the deterministic master HTML build specification: exact screens, state schema, question metadata, mastery rules, router rules, chapter structure, source-control rules, print mode and precise instructions for what the builder may reuse from the Chapter 7 HTML. That gets us from planning into the actual build without overengineering.

