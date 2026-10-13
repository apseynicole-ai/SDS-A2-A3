# **SDS188 Semester 2 Master Learning System**

## **Deterministic HTML Build Specification v1.0 — FROZEN ARCHITECTURE**

**Product:** `SDS188_Semester2_MasterLearningSystem_A1S2_v1_0.html`

**Immediate target:** A1S2 — 29 August 2026

**Current content scope:** Chapters 6–8 source-controlled \+ Chapter 9 locked placeholder.

**Later expansion:** Same HTML architecture must support A2S2 without rebuilding the application.

---

# **1\. Governing purpose**

The application is **not a digital textbook, dashboard, quiz game or passive notes website**.

Its primary job is:

> **RECOGNISE → REPRESENT → SELECT → EXECUTE → INTERPRET → VERIFY**

and then:

> **TEACH → REMOVE SUPPORT → TEST INDEPENDENCE → REPAIR ERRORS → RETEST LATER → MIX → TIME → REMOVE THE HTML**

That exact learning spine comes from the Brain Project advisory. The advisory also requires that revealed solutions do not establish mastery, mistakes create later repair work, and the end goal is independent closed-book performance.

### **Definition of success**

The HTML succeeds only if the learner can eventually:

1. recognise an unfamiliar problem;  
2. determine what random object/parameter is involved;  
3. select the correct method without being told the chapter;  
4. construct the required representation;  
5. execute the method correctly;  
6. use Excel/calculator correctly where required;  
7. interpret the result;  
8. detect unreasonable results;  
9. repeat this after a delay;  
10. repeat it in mixed and timed conditions.

**Use of the HTML itself is never evidence of success.**

---

# **2\. Hard product boundaries**

## **Must build**

* one **single-file HTML**;  
* embedded CSS;  
* embedded JavaScript;  
* embedded academic content/data;  
* local persistence;  
* responsive desktop/tablet/mobile design;  
* clean A4 print mode;  
* no internet dependency;  
* source-control system;  
* deterministic mastery engine;  
* deterministic repair engine;  
* deterministic next-task router;  
* diagnostics;  
* teaching/fading engine;  
* practice engine;  
* retrieval scheduler;  
* mixed A1 training;  
* closed-book mode;  
* timed simulation;  
* Chapter 9 source lock.

## **Must not build**

* AI-generated tutor;  
* automatic AI questions;  
* API calls;  
* accounts/login;  
* backend;  
* XP;  
* streaks;  
* badges;  
* coins;  
* confetti;  
* motivational gamification;  
* huge analytics dashboards;  
* psychological profiling;  
* automatic voice scoring;  
* full Excel clone;  
* full calculator emulator;  
* dozens of progress graphs;  
* completion based on scrolling;  
* completion based on clicking;  
* completion based on viewing an answer.

This constraint is deliberate: the Brain advisory warns that the HTML itself can become a procrastination mechanism and recommends freezing the engine early rather than continually polishing it.

---

# **3\. Source-control hierarchy**

Every academic object must contain a source classification.

## **Source authority levels**

P26 \= Current official 2026 material  
OFF \= Official departmental material from an earlier year  
ONL \= Supplied textbook/official chapter extract  
GEN \= Existing generated HTML/manual  
REF \= Secondary reference only  
HOLD \= Preserved but not currently assessment-active

## **Authority rules**

When sources conflict:

Current EMSLearn announcement  
        ↓  
2026 Module Framework  
        ↓  
2026 lecturer notes/slides  
        ↓  
2026 tutorial / official solution  
        ↓  
lecturer transcript  
        ↓  
older official departmental material  
        ↓  
supplied textbook extracts  
        ↓  
existing generated study HTML  
        ↓  
secondary references

A lower source **must never silently overwrite a higher source**.

The framework itself states that EMSLearn announcements are formal and binding.

---

# **4\. Chapter source status**

These are separate from learner mastery.

chapterSourceStatus \= {  
  ch6: "SOURCE\_READY",  
  ch7: "SOURCE\_READY\_WITH\_PATCHES",  
  ch8: "SOURCE\_PARTIAL",  
  ch9: "SOURCE\_MISSING"  
}

## **UI representation**

### **Chapter 6**

**GREEN — SOURCE READY**

### **Chapter 7**

**GREEN — SOURCE READY / PATCHED FOR CURRENT MATERIAL**

### **Chapter 8**

**AMBER — PROVISIONAL UNTIL CURRENT 2026 MATERIAL IS ADDED**

### **Chapter 9**

**RED — SOURCE MISSING**

Chapter 9 must display:

> **SOURCE MISSING**

> Official Chapter 9 material has not yet been supplied.

> No academic content has been inferred or generated.

The builder must not generate:

* Chapter 9 title;  
* chapter topics;  
* formulas;  
* examples;  
* prerequisite map;  
* questions;  
* likely textbook content.

This is a hard content-control rule from the Brain advisory.

---

# **5\. Global application navigation**

There should be **seven main destinations only**.

1\. DO THIS NOW  
2\. LEARN  
3\. PRACTISE  
4\. RETRIEVAL  
5\. REPAIR  
6\. A1 TRAINING  
7\. READ / PRINT

Do not create separate top-level menu items for every feature.

---

# **6\. HOME / DO THIS NOW screen**

This is the default landing screen.

## **Header**

Display:

**SDS188 · A1S2 MASTER LEARNING SYSTEM**

Then:

**29 AUGUST 2026 · CHAPTERS 6–9 · CLOSED BOOK · COMPUTER-BASED**

A1S2 is weighted at 25% in the module framework.

## **Main card**

Only one task receives visual priority.

Example:

> ### **DO THIS NOW**

> **Chapter 7 · Method Selection — X vs X̄ vs t**

> **Why:** You solved two questions correctly after the method was provided, but independent method selection has not yet been demonstrated.

> **Do:** Complete 4 unlabelled selection questions.

> **Stop when:** Submit all 4 and repair any selection error.

## **Secondary information**

Show compact cards only:

| Card | Content |
| ----- | ----- |
| Source blockers | Chapter 9 missing; Chapter 8 provisional |
| Open repairs | count \+ highest-impact error |
| Retrieval due | number due |
| Current chapter states | C6/C7/C8/C9 |
| Latest simulation | score \+ error breakdown |
| A1 readiness | READY / NOT READY \+ reason |

Do **not** display a fake global “86% mastered” number.

---

# **7\. Universal problem-solving component**

Every quantitative exercise must use the same underlying six-stage engine.

## **Stage 1 — RECOGNISE**

Prompt:

> What is this question actually asking?

Possible structured inputs where appropriate:

* one observation X;  
* sample mean Xˉ;  
* sample proportion p;  
* difference Xˉ1​−Xˉ2​;  
* population mean μ;  
* population proportion π;  
* probability;  
* boundary/percentile;  
* confidence interval;  
* sample size.

## **Stage 2 — REPRESENT**

Require applicable elements:

* symbolic event;  
* random object;  
* parameters;  
* graph;  
* tail/region;  
* known/unknown variables;  
* units.

Example:

P(X̄ \> 102.2)

not merely:

> “right tail.”

## **Stage 3 — SELECT**

Require method selection **before calculation**.

Examples:

Normal individual X  
Normal sample mean — σ known  
Student t — σ unknown  
Sample proportion  
Difference of means  
Uniform  
Exponential  
Normal approximation to binomial  
Z confidence interval  
t confidence interval  
Bootstrap  
FPC

Ask:

> Why does this method apply?

at earlier support levels.

## **Stage 4 — EXECUTE**

Only now allow:

* formula substitution;  
* arithmetic;  
* calculator;  
* Excel.

## **Stage 5 — INTERPRET**

Separate answer field.

A correct number but incorrect interpretation must not be marked fully correct.

## **Stage 6 — VERIFY**

Short check:

> Does the region match the wording?

> Are units consistent?

> Is the result between 0 and 1 where probability is expected?

> Did you use SD or variance?

> Does the final answer address the actual question?

The Brain advisory explicitly requires this universal chain.

---

# **8\. Scaffold fading system**

Every training item receives:

supportLevel: 1 | 2 | 3 | 4 | 5 | 6 | 7

## **Level 1 — Fully modelled**

Display the complete six-stage process.

Learner still answers small “why?” prompts.

## **Level 2 — Completion example**

Hide selected elements:

* event;  
* formula;  
* region;  
* substitution;  
* interpretation.

## **Level 3 — Structural prompts**

Display only:

RECOGNISE  
REPRESENT  
SELECT  
EXECUTE  
INTERPRET  
VERIFY

## **Level 4 — Familiar independent**

Problem only.

No solution support.

## **Level 5 — Altered/unlabelled**

Same validated statistical operation with:

* changed context;  
* reordered information;  
* no method label;  
* wording change;  
* graph ↔ words where valid.

## **Level 6 — Mixed independent**

No chapter/topic label.

## **Level 7 — Timed mixed**

No support.

The Brain advisory explicitly recommends these progressive fading stages and warns that one successful independent familiar question is insufficient for mastery.

---

# **9\. Question object schema**

Every problem must use one canonical object.

{  
  id: "T7-Q1C",  
  chapter: 7,  
  sectionId: "7.5",  
  skillIds: \["C7.11", "C7.15", "C7.19"\],

  source: {  
    file: "Tutorial 7\_2023.pdf",  
    authority: "OFF",  
    year: 2023,  
    question: "1(c)",  
    solutionAuthority: "derived|official|none"  
  },

  status: "ACTIVE",

  type: "numeric",  
  contextType: "sample\_mean\_probability",

  randomObject: "xbar",  
  operation: "right\_tail",

  requiresExcel: true,  
  requiresCalculator: false,  
  requiresGraph: true,  
  requiresInterpretation: true,

  supportLevelDefault: 4,

  selectionTarget: "normal\_sample\_mean\_sigma\_known",  
  representationTarget: "P(Xbar \> boundary)",

  answer: {  
    type: "numeric",  
    tolerance: 0.0001  
  },

  traps: \[  
    "individual-vs-mean",  
    "right-tail",  
    "sigma-vs-SE"  
  \],

  variantClass: "official\_original"  
}  
---

# **10\. Question statuses**

Only these are permitted:

ACTIVE  
PROVISIONAL  
HOLD  
REFERENCE  
RETIRED

### **ACTIVE**

Source-confirmed and allowed to affect mastery.

### **PROVISIONAL**

Can teach/practise, but cannot contribute to final A1 readiness gate unless promoted.

### **HOLD**

Visible only in source/reference mode.

### **REFERENCE**

Explanatory only.

### **RETIRED**

Never surfaced to learner except audit/debug.

---

# **11\. Attempts schema**

Every submitted attempt must persist:

{  
  attemptId,  
  questionId,  
  timestamp,

  correct,  
  score,

  confidence:  
    "guessing" |  
    "unsure" |  
    "fairly\_sure" |  
    "very\_sure",

  selectedMethod,  
  selectionCorrect,

  representationCorrect,  
  regionCorrect,

  calculationCorrect,  
  interpretationCorrect,  
  verifyCorrect,

  excelCorrect,  
  calculatorCorrect,

  solutionViewed,  
  hintUsed,  
  substantialHintUsed,

  independent,  
  changedWording,  
  mixed,  
  delayed,  
  timed,

  elapsedSeconds,

  errorTypes: \[\],

  masteryEligible: true | false  
}  
---

# **12\. Absolute evidence rule**

This must be hard-coded:

if (  
  attempt.solutionViewed \=== true ||  
  attempt.substantialHintUsed \=== true  
) {  
  attempt.masteryEligible \= false;  
}

A correct answer after seeing the solution can teach.

It **cannot upgrade mastery**.

This rule is explicitly required by the Brain advisory.

---

# **13\. Mastery vocabulary**

Exactly six possible states:

NOT\_STARTED  
UNDERSTAND  
RETRIEVE  
APPLY  
STABLE  
REPAIR

Do not invent extra mastery stages.

`REPAIR` operates as an **override**, not a point on the normal progression.

---

# **14\. Deterministic mastery rules**

## **NOT\_STARTED**

No valid evidence.

---

## **UNDERSTAND**

Require:

* at least one source-aligned explanation/check;  
* correct conceptual decision;  
* no solution revealed before response.

Minimum:

understandEvidence \>= 1

This is intentionally provisional.

---

## **RETRIEVE**

Require:

* method/formula/rule reconstructed closed-source;  
* no substantial hint;  
* at least **two separate retrieval items**;  
* both correct.

retrievalIndependentCorrect \>= 2  
---

## **APPLY**

Require:

* at least **two different familiar application questions**;  
* independent;  
* method selection correct;  
* calculation correct;  
* interpretation correct when interpretation is required;  
* no solution/hint disqualification.

independentFamiliarPasses \>= 2

One successful problem is insufficient.

---

## **STABLE**

Require all of:

1. APPLY already achieved;  
2. one independent **changed/unlabelled** item correct;  
3. one **delayed** independent item correct;  
4. no unresolved material repair on that skill.

apply \=== true  
&& changedTransferPass \>= 1  
&& delayedPass \>= 1  
&& openRepair \=== false

Minimum delayed interval:

36 hours

Preferred scheduler will normally create a 2–3 day gap.

---

## **REPAIR**

Overrides another state when representative evidence indicates a meaningful error.

Examples:

* wrong statistical method;  
* wrong distribution;  
* wrong random object;  
* wrong tail/region;  
* formula recall failure;  
* recurring Excel procedure failure;  
* incorrect interpretation;  
* high-confidence misconception.

A minor one-off arithmetic typo does not automatically destroy all prior mastery.

---

# **15\. Evidence flags stored separately from mastery**

Each skill also stores:

{  
  independentEvidence,  
  changedWordingEvidence,  
  delayedEvidence,  
  mixedEvidence,  
  timedEvidence,  
  selectionEvidence,  
  interpretationEvidence,  
  excelEvidence,  
  calculatorEvidence  
}

This prevents the mastery vocabulary from becoming bloated.

---

# **16\. Error taxonomy**

Use exactly these error families:

RECOGNITION  
SELECTION  
DISTRIBUTION  
TAIL\_REGION  
NOTATION  
FORMULA  
SUBSTITUTION  
PROCEDURE  
ARITHMETIC  
INTERPRETATION  
GRAPH  
ROUNDING\_INPUT  
TIMING  
CONFIDENCE\_MISMATCH  
UNKNOWN

## **Important**

If the program cannot genuinely determine why an answer was wrong:

errorType \= UNKNOWN

Never infer:

> “formula error”

merely because the final answer is wrong.

The Brain advisory specifically requires this unknown-safe behaviour.

---

# **17\. Repair engine**

Each meaningful error generates:

ERROR  
  ↓  
EXPLAIN  
  ↓  
CONTRAST  
  ↓  
IMMEDIATE RETRY  
  ↓  
DELAYED RETEST  
  ↓  
TRANSFER RETEST

## **Example: wrong-tail error**

Generate:

1. show wording that signalled right tail;  
2. contrast right vs left;  
3. require learner to shade both;  
4. immediate new problem;  
5. later different-context tail problem;  
6. altered/unlabelled retest.

## **Example: Excel procedure error**

Shorter repair:

1. explain specific input/function error;  
2. reconstruct the command;  
3. execute a different problem;  
4. delayed tool retest.

## **Clearing REPAIR**

One successful immediate retry **does not clear repair**.

Require:

immediateRepairPass \=== true  
&& delayedRepairPass \=== true  
&& transferRepairPass \=== true

for high-impact conceptual errors.

Procedure/arithmetic repairs may use:

immediateRepairPass  
&& delayedRepairPass  
---

# **18\. Confidence calibration**

Before substantive independent questions, ask:

Guessing  
Unsure  
Fairly sure  
Very sure

### **Rule**

If:

Very sure \+ materially wrong

create:

CONFIDENCE\_MISMATCH

and prioritise a discrimination/contrast repair.

Do not show motivational psychology.

Simply state:

> Your confidence was high but the method/answer was incorrect. Complete a contrast check before continuing.

---

# **19\. Retrieval scheduler**

Use:

R1  
R2  
R3

These are scheduling labels, **not mastery levels**.

## **Default schedule**

### **R1**

Next available session / same day after learning.

### **R2**

Approximately:

\+2 days

after successful R1.

### **R3**

Approximately:

\+5 days

after successful R2.

A failed retrieval creates REPAIR and supersedes the normal schedule.

The Brain advisory expressly says the intervals are scheduler defaults rather than proof of mastery.

---

# **20\. Deterministic DO THIS NOW router**

Run this function whenever the home page loads and after every meaningful activity.

## **Priority order**

### **Priority 1 — Source blocker**

If assessed source missing:

> Surface blocker.

Chapter 9 currently qualifies.

However, because the learner cannot personally fix unavailable lecturer material by studying, this should not trap the entire system on Chapter 9\.

Display the source blocker prominently **but still route the learner to the highest available academic task**.

---

### **Priority 2 — High-impact REPAIR**

Prioritise, in order:

SELECTION  
DISTRIBUTION  
TAIL\_REGION  
NOTATION  
FORMULA  
INTERPRETATION  
recurring PROCEDURE  
---

### **Priority 3 — Due delayed retest**

Oldest/highest-impact due item first.

---

### **Priority 4 — Required skill below APPLY**

Route:

NOT\_STARTED → teaching  
UNDERSTAND → retrieval  
RETRIEVE → familiar application  
---

### **Priority 5 — APPLY but not STABLE**

Route:

* changed wording;  
* unlabelled representation;  
* reduced cue;  
* delayed transfer.

---

### **Priority 6 — Individually stable but not mixed**

Generate mixed discrimination set.

---

### **Priority 7 — Stable untimed but insufficient timed evidence**

Route to timed block.

---

### **Priority 8 — READY**

Short maintenance retrieval only.

Then recommend stopping.

This ordering is directly based on the Brain Project's next-task router.

---

# **21\. Formula objects**

Do not store formulas as plain display strings only.

Each formula gets a decision object.

{  
  id: "F-C7-MEAN-Z",

  formula: "z=(xbar-mu)/(sigma/sqrt(n))",

  questionAnswered:  
    "Probability or boundary involving a sample mean when population sigma is known",

  randomObject: "xbar",

  prerequisites: \[  
    "random sample",  
    "sigma known",  
    "normal population or justified CLT"  
  \],

  cues: \[  
    "mean",  
    "average",  
    "sample of n"  
  \],

  ruledOutBy: \[  
    "sigma unknown"  
  \],

  confusedWith: \[  
    "individual-X-z",  
    "student-t-sample-mean"  
  \]  
}

Formula training must work **question → formula**, not only formula → recall.

---

# **22\. Excel evidence**

Excel competence is a separate evidence channel.

This is required because the module framework says A1S1/A1S2 are computer-based and primarily focused on Excel competency.

## **Excel learning progression**

VIEW  
→ COMPLETE  
→ RECONSTRUCT  
→ EXECUTE FROM QUESTION

## **Important**

A correct Excel output does **not** prove statistical mastery if the program supplied the correct method.

Similarly:

selectionCorrect \= true  
excelCorrect \= false

is a tool-procedure problem, not necessarily a statistics-understanding failure.

---

# **23\. Chapter 6 build specification**

Current 2026 Chapter 6 explicitly includes normal probability calculations, Z standardisation, Excel `NORM.S.DIST` / `NORM.DIST`, inverse normal functions, normality assessment, and normal approximation to the binomial.

## **Structure**

6.0 Diagnostic

6.1 Continuous Probability Foundations  
6.2 Normal Distribution  
6.3 Normal Regions and Forward Probability  
6.4 Inverse Normal and Percentiles  
6.5 Evaluation of Normality  
6.6 Excel Normality Laboratory  
6.7 Uniform Distribution  
6.8 Exponential Distribution  
6.9 Inverse Exponential  
6.10 Normal Approximation to Binomial

6.R Recognition & Selection Lab  
6.M Mixed Chapter Set  
6.B Chapter Final Boss  
6.X Repair

## **Skill registry**

Use the already-audited canonical IDs:

C6.01–C6.11  normal foundations/regions  
C6.12–C6.17  inverse normal  
C6.18–C6.26  normality/Excel  
C6.27–C6.34  normal approximation to binomial  
C6.35–C6.41  uniform  
C6.42–C6.50  exponential/inverse exponential

### **Specific source rules**

Normal probability visualisation must support:

left  
right  
between  
inverse

Chapter 6's current notes explicitly teach drawing the region before standardising and give Excel routes.

### **Right-tail trap**

The lecturer specifically describes `>` as a reason to pause because the cumulative tool returns left area.

### **Exponential distribution**

The application must explicitly train:

> Poisson \= **number of events**

> Exponential \= **time between events**

and enforce rate/time unit consistency.

### **Inverse exponential**

Include as a current lecturer-supported item even though it was not on the slide deck:

pα​=−λ1​ln(1−α)

The lecturer explicitly said this assessment-relevant inverse case was not in the slides.

### **Normal approximation**

Use current conditions exactly:

nπ\>5

and

n(1−π)\>5

plus continuity correction.

---

# **24\. Chapter 7 build specification**

## **Structure**

7.0 Diagnostic

7.1 Population → Sample → Statistic → Sampling Distribution  
7.2 Exact Sampling Distributions and Unbiasedness  
7.3 Standard Error  
7.4 X versus X̄  
7.5 X̄ — sigma known / Z  
7.6 Central Limit Theorem  
7.7 X̄ — sigma unknown / Student t  
7.8 Sample Proportions  
7.9 Difference Between Two Independent Means  
7.10 Finite Population Correction \[scope flag\]  
7.11 Mixed Object & Method Selection

7.R Recognition & Selection Lab  
7.M Mixed Chapter Set  
7.B Chapter Final Boss  
7.X Repair

## **Skill registry**

C7.01–C7.09  sampling foundations  
C7.10–C7.14  X vs Xbar  
C7.15–C7.21  sample mean known sigma  
C7.22–C7.26  CLT  
C7.27–C7.33  Student t / sigma unknown  
C7.34–C7.43  proportions  
C7.44–C7.51  two independent means  
C7.52–C7.58  FPC provisional

The older official Chapter 7 materials remain valid support for sampling distributions, exact enumeration, proportions and tutorial applications.

---

# **25\. Mandatory Chapter 7 method fork**

Every sample-mean problem must pass through:

Is this ONE observation?  
     ↓ no  
Is it a SAMPLE MEAN?  
     ↓ yes  
Is population σ known?  
     ↓  
YES → Z / normal sampling distribution  
NO  → Student t / s / df=n−1

This fork must be added to the previously generated Chapter 7 material.

---

# **26\. Chapter 7 reuse contract**

Existing file:

`SDS188_Chapter7_Sampling_Distributions_MasterStudyManual_v1_1_FINAL.html`

is a **content donor**, not an application base.

## **Reuse directly**

* terminology;  
* mental model;  
* sampling distribution illustrations;  
* X vs X̄ explanations;  
* standard error explanations;  
* normal/CLT examples after current-source validation;  
* mean probability teaching;  
* inverse probability teaching;  
* two-mean explanations;  
* trap explanations;  
* visual style concepts;  
* source notes.

The existing manual already contains useful distinctions such as X vs X̄, standard error, CLT errors, tail mistakes and two-mean ordering traps.

## **Patch before reuse**

* proportion expected-count rule;  
* Student-t/σ-unknown branch;  
* source hierarchy;  
* FPC status;  
* any old CLT wording;  
* Excel layer.

## **Do not reuse**

* section-completion progress logic;  
* mastery based on checkboxes;  
* old global progress percentage;  
* generated “Mixed Mastery Test” as authoritative mastery evidence;  
* old localStorage mastery rules.

The old HTML visibly uses a traditional progress bar and manual completion architecture.

---

# **27\. Chapter 7 formula-sheet reuse**

The existing formula sheet's strongest reusable structure is:

> identify object → centre → SE → conditions → region → standardise → calculate → interpret.

Keep that decision structure.

### **Required changes**

Add:

Sample mean — σ unknown:  
centre \= μ  
estimated SE \= s/√n  
distribution \= Student t  
df \= n−1

### **Proportion condition**

Do not use the old generated:

nπ≥5

as controlling current wording merely because it appears in the old sheet. The current-source matrix controls the build.

The previous formula sheet is therefore **reference/design material**, not source authority. Its present form does use `≥5`, demonstrating why it needs patching rather than direct import.

---

# **28\. Chapter 8 build specification**

Chapter 8 remains **SOURCE\_PARTIAL**.

The older official Chapter 8 deck defines its objectives as confidence intervals for means/proportions, sample-size determination, FPC and bootstrapping.

## **Structure**

8.0 Source Warning \+ Diagnostic

8.1 Point vs Interval Estimation  
8.2 Characteristics of Estimators  
8.3 Confidence Level, alpha and Margin of Error  
8.4 CI for mu — sigma known  
8.5 CI for mu — sigma unknown / Student t  
8.6 CI for population proportion pi  
8.7 Required Sample Size — Mean  
8.8 Required Sample Size — Proportion  
8.9 Finite Population Estimation  
8.10 Bootstrapping

8.H Auditing / Population Totals \[HOLD\]

8.R Recognition & Selection Lab  
8.M Mixed Chapter Set  
8.B Chapter Final Boss \[PROVISIONAL\]  
8.X Repair

## **Skill registry**

C8.01–C8.10  estimation foundations  
C8.11–C8.20  CI mean sigma known  
C8.21–C8.29  CI mean sigma unknown / t  
C8.30–C8.36  CI proportion  
C8.37–C8.48  sample size  
C8.49–C8.57  finite populations  
C8.58–C8.68  bootstrapping  
C8.69–C8.75  auditing/totals HOLD  
---

# **29\. Chapter 8 amber-source behaviour**

Every Chapter 8 page must show:

> **CURRENT STATUS: PROVISIONAL**

> Built from official legacy/supplied course materials while awaiting current 2026 Chapter 8 release.

> This material does not yet satisfy the final 2026 source gate.

Do not make this warning huge after the first visit; a compact amber badge thereafter is enough.

---

# **30\. Chapter 8 Excel rule**

Do **not** invent 2026 Excel procedures.

For a statistical concept whose current Excel implementation is not source-confirmed:

excelStatus \= "AWAIT\_CURRENT\_SOURCE"

The concept can still be taught from provisional sources.

But the HTML must not pretend that a guessed Excel command is lecturer-prescribed.

---

# **31\. Chapter 8 finite populations**

Keep because the supplied dedicated source explicitly teaches FPC for sampling without replacement and the \>5% sampling fraction rule.

The source also provides finite-population confidence intervals for means/proportions and adjusted sample-size methodology.

---

# **32\. Chapter 8 bootstrapping**

Build provisionally from the supplied bootstrapping source.

Core workflow:

original sample  
→ resample WITH replacement  
→ same resample size n  
→ compute statistic  
→ repeat many times  
→ order statistics  
→ remove lower/upper alpha/2 proportions  
→ bootstrap interval

The supplied source illustrates exactly this percentile-style construction.

---

# **33\. Chapter 8 auditing / totals**

Keep in the application data as:

status \= HOLD

Do not include in:

* main Learn route;  
* A1 diagnostic;  
* readiness calculation;  
* simulations;  
* repair routing.

The supplied extract clearly covers population totals and auditing applications, but current A1 scope within Chapter 8 has not yet been established.

---

# **34\. Cross-chapter dependency map**

Implement explicitly.

C6 normal regions  
      ↓  
C7 sample-statistic probability  
      ↓  
C8 confidence critical regions

C6 inverse normal  
      ↓  
C7 inverse boundaries  
      ↓  
C8 critical z

C6 normality  
      ↓  
C7 normal / CLT decision  
      ↓  
C8 t / bootstrap decision

C7 standard error  
      ↓  
C8 margin of error

C7 Z sample mean  
      ↓  
C8 Z confidence interval

C7 Student t  
      ↓  
C8 t confidence interval

C7 proportion  
      ↓  
C8 proportion interval

C7 FPC  
      ↓  
C8 finite-population estimation

A dependency should inform routing, but **must not permanently lock content**.

---

# **35\. Recognition & Selection Lab**

This is one of the most important screens.

Present **question stems without asking for calculations**.

Ask only:

> What object?

> What distribution/method?

> Which formula family?

> Which region?

> Why?

Later remove “why”.

Example mixed prompts:

one individual thickness  
average waiting time of 36 diners  
unknown σ and sample mean  
55% of a sample  
two independent group means  
confidence interval for μ with σ known  
confidence interval for μ with σ unknown  
waiting time between arrivals  
number of successes approximated by normal

MCQ options should appear **after** production attempts during early training to prevent recognition-only false confidence, as recommended by the Brain advisory.

---

# **36\. Graph / region lab**

Use custom HTML/SVG/CSS only.

No external plotting library is required.

Support:

left tail  
right tail  
between  
outside  
central interval  
inverse boundary  
continuity-corrected discrete boundary

Interaction sequence:

WORDING  
→ SYMBOLIC EVENT  
→ SHADE REGION  
→ SELECT METHOD  
→ CALCULATE

No calculation field becomes active until region decision is submitted where region is pedagogically relevant.

---

# **37\. Scratch workspace**

Provide a lightweight text/symbol scratch pad.

Features:

* plain text;  
* line breaks;  
* common notation buttons:  
  * μ  
  * σ  
  * π  
  * λ  
  * X̄  
  * ≤  
  * ≥  
  * √  
* clear button.

Do not attempt handwriting recognition.

Scratch content should not be scored.

---

# **38\. PRACTISE screen**

Filters:

Chapter  
Skill  
Question type  
Tool  
Support level

But default recommended task must come from the router.

Modes:

Recognition  
Representation  
Formula selection  
Region  
Calculation  
Excel  
Interpretation  
Mixed  
---

# **39\. RETRIEVAL screen**

Show only:

Due now  
Due soon  
Completed today

Do not show huge future calendars.

Each item displays:

> Why is this back?

Example:

> Last independent attempt was successful. This is the delayed check required before STABLE evidence.

---

# **40\. REPAIR screen**

Each repair card shows:

ERROR  
WHY IT MATTERS  
WHAT YOU MISSED  
CONTRAST  
TRY AGAIN

After immediate retry:

> Delayed retest scheduled.

Do not let the learner manually tick repair as complete.

---

# **41\. A1 TRAINING progression**

Six stages.

## **Stage A — Labelled mixed**

Several chapters; labels visible.

## **Stage B — Unlabelled mixed**

No chapter labels.

## **Stage C — Altered wording**

Validated variants.

## **Stage D — Trap sets**

MCQ/numeric-entry distractors based on verified errors.

## **Stage E — Closed-book mini blocks**

Short mixed blocks.

## **Stage F — Full simulation**

Representative assessment mode.

This progression follows the Brain Project's mixed-assessment design.

---

# **42\. Closed-book mode**

When active, hide:

* formulas;  
* hints;  
* chapter/subsection labels;  
* explanations;  
* source notes;  
* worked examples;  
* glossary;  
* method names;  
* repair prompts.

Do not allow accidental opening.

Require:

> Exit closed-book mode?

before leaving.

Exiting invalidates timed simulation evidence if the simulation is still active.

---

# **43\. Simulation rules**

Default:

simulation \= {  
  closedBook: true,  
  mixed: true,  
  labelsHidden: true,  
  hintsDisabled: true,  
  solutionsDisabled: true,  
  timerMinutes: 90,  
  timerStatus: "PROVISIONAL\_UNTIL\_PERSONAL\_ALLOCATION\_CONFIRMED"  
}

The 90-minute value corresponds to the announced 09:00–10:30 / 11:30–13:00 session windows supplied in the project brief, but the system must make the duration editable if the confirmed personal assessment time differs.

---

# **44\. Simulation review**

After submission, show:

| Category | Count |
| ----- | ----- |
| Knowledge |  |
| Selection |  |
| Execution |  |
| Interpretation |  |
| Tool procedure |  |
| Timing |  |
| Read/attention |  |
| High-confidence wrong |  |

Then:

> **NEXT ACTION**

based on actual errors.

Never respond:

> “Review all Chapters 6–8.”

unless evidence genuinely shows global failure.

---

# **45\. A1S2 readiness gate**

Do not calculate a percentage.

Display only:

A1S2 READY

or:

A1S2 NOT READY

with reasons.

## **Hard blockers**

`NOT READY` if:

chapter9.sourceStatus \!== "SOURCE\_READY"

or:

criticalOpenRepairs \> 0

or any assessed ACTIVE skill lacks required evidence.

## **Performance requirements once all sources are available**

Require:

* all ACTIVE core skills ≥ APPLY;  
* high-impact skills STABLE;  
* method-selection mixed evidence;  
* interpretation evidence;  
* Excel evidence where required;  
* no major open repair;  
* altered/unlabelled evidence;  
* delayed evidence;  
* at least **two** meaningful closed-book mixed sets;  
* at least **two** representative timed evidence sets/simulations, subject to available time.

The Brain advisory specifically rejects basing readiness on one “Final Boss.”

---

# **46\. Read / Print mode**

The application must have two presentation layers.

## **LEARN MODE**

Interactive.

## **READ / PRINT MODE**

Clean reference.

No mastery UI.

No buttons.

No progress.

No timers.

No answer-reveal components.

---

# **47\. Print content**

For each source-ready chapter generate:

### **Cover page**

* chapter;  
* topic map;  
* key distinctions;  
* common traps;  
* exam focus;  
* exit criteria.

### **Formula/reference sheet**

Organised by:

QUESTION TYPE  
→ RANDOM OBJECT  
→ CENTRE  
→ SPREAD / SE  
→ CONDITIONS  
→ FORMULA  
→ TOOL  
→ CHECK

### **Compact chapter manual**

Teaching notes only.

### **Repair sheet**

Optional personal print:

* current recurring traps;  
* no personal scores required.

---

# **48\. Print CSS requirements**

@page {  
  size: A4;  
  margin: 12mm;  
}

Must:

* remove navigation;  
* remove buttons;  
* remove interactive panels;  
* expand required static content;  
* prevent major cards splitting where possible;  
* render backgrounds legibly;  
* maintain black-and-white readability;  
* include page numbers where feasible.

Existing Chapter 7 print styling may be reused structurally after cleanup.

---

# **49\. Persistence**

Use versioned localStorage.

const STORAGE\_KEY \=  
  "SDS188\_S2\_MASTER\_V1";

Store:

{  
  schemaVersion: 1,  
  userState,  
  mastery,  
  attempts,  
  repairs,  
  retrievalSchedule,  
  simulations,  
  settings,  
  sourceAcknowledgements  
}  
---

# **50\. State safety**

Must provide:

### **Export progress**

Download JSON.

### **Import progress**

Restore JSON after schema validation.

### **Reset**

Three levels only:

Reset current activity  
Reset one chapter  
Reset entire system

Full reset requires confirmation.

---

# **51\. No accidental mastery from old data**

If imported data is from an old Chapter 7 completion-based system:

DO NOT migrate completion → mastery.

Old completion may become:

legacyReadHistory \= true

only.

---

# **52\. Source register**

Include a hidden/developer-style academic source register accessible from Read/Print.

Each content item should allow:

> Source

showing:

Chapter 6.pdf · 2026 · P26  
Tutorial 6 · official  
Lecturer transcript · supplementary lecturer emphasis

For provisional Chapter 8:

SDS 188 chapter8\_2023.pdf · OFF  
CURRENT 2026 SOURCE NOT YET ADDED  
---

# **53\. Source badges**

Use unobtrusive badges:

2026  
OFFICIAL LEGACY  
SUPPLIED EXTRACT  
PROVISIONAL  
HOLD

Do not clutter every sentence.

Attach badges to concept blocks/questions at the object level.

---

# **54\. Question variation rules**

Safe variation:

* numerical values;  
* context;  
* variable names;  
* word order;  
* information order;  
* graph ↔ wording;  
* remove method label;  
* irrelevant information;  
* ask interpretation rather than calculation.

## **Absolute rule**

A generated variant cannot become:

ACTIVE

until numerically and statistically validated.

No live AI-generated statistics questions.

---

# **55\. Official questions vs variants**

Maintain:

variantClass:  
  "official\_original"  
  "verified\_adaptation"  
  "generated\_validated"

Never falsely label an adaptation as official tutorial material.

---

# **56\. Trap bank**

Build these immediately:

Variance vs SD  
X vs X̄  
σ vs SE  
divide by n vs √n  
left vs right tail  
between \= upper-lower  
forward vs inverse  
percent vs decimal  
Poisson vs exponential  
rate/time unit mismatch  
normal approximation conditions  
continuity correction  
CLT changes sampling distribution, not population  
σ known vs unknown  
Z vs Student t  
df=n−1  
p vs π  
two-mean order  
adding variances vs SDs  
confidence interval vs individual observation  
sample-size rounding upward  
FPC without replacement  
bootstrap with replacement  
correct number / wrong interpretation

Much of the Chapter 7 trap content already exists and is reusable after validation.

---

# **57\. UI style**

Reuse the broad Stellenbosch/wine visual identity from the existing Chapter 7 system.

Recommended:

* warm paper background;  
* wine accent;  
* restrained sage/blue/gold status cards;  
* serif teaching text;  
* sans-serif interface;  
* generous whitespace.

Do **not** make every component a coloured box.

---

# **58\. Status colours**

Use consistently:

Grey  \= NOT STARTED  
Blue  \= UNDERSTAND  
Gold  \= RETRIEVE  
Purple \= APPLY  
Green \= STABLE  
Red   \= REPAIR

Green source badge \= SOURCE READY  
Amber source badge \= SOURCE PARTIAL  
Red source badge   \= SOURCE MISSING

Mastery colour and source status must remain visibly different concepts.

---

# **59\. Accessibility**

Required:

* semantic headings;  
* keyboard navigation;  
* visible focus states;  
* labelled form inputs;  
* `aria-live` for feedback;  
* no colour-only meaning;  
* readable contrast;  
* responsive layout;  
* motion-reduction support;  
* buttons rather than clickable divs.

---

# **60\. Technical constraints**

The final HTML must:

open directly from disk  
work without localhost  
work offline  
require no CDN  
require no build step  
require no npm  
require no server

Everything must live in one HTML file.

---

# **61\. Internal JS architecture**

Recommended top-level objects:

SOURCES  
CHAPTERS  
SKILLS  
FORMULAS  
QUESTIONS  
VARIANTS  
STATE  
ENGINE  
ROUTER  
REPAIR  
RETRIEVAL  
SIMULATION  
PRINT  
STORAGE  
UI

Avoid one giant undifferentiated script.

---

# **62\. Deterministic engine functions**

At minimum:

loadState()  
saveState()

getSkillState(skillId)  
recalculateSkillState(skillId)

recordAttempt(attempt)  
classifyError(attempt)

createRepair(attempt)  
resolveRepair(repairId)

scheduleRetrieval(skillId)  
getDueRetrieval()

getNextTask()

startSimulation()  
submitSimulation()  
analyseSimulation()

calculateA1Readiness()

exportState()  
importState()  
resetChapter()  
resetAll()  
---

# **63\. Mandatory logic tests**

The builder must test these before freeze.

### **Test 1**

Correct answer after solution viewed.

Expected:

correct \= true  
masteryEligible \= false

### **Test 2**

Correct answer with substantial hint.

Expected:

no mastery upgrade

### **Test 3**

Two independent retrieval successes.

Expected:

RETRIEVE

### **Test 4**

One familiar application success.

Expected:

NOT APPLY yet

### **Test 5**

Two distinct valid application successes.

Expected:

APPLY

### **Test 6**

Changed \+ delayed valid evidence.

Expected:

STABLE

if no repair open.

### **Test 7**

Very sure \+ wrong method.

Expected:

REPAIR  
CONFIDENCE\_MISMATCH  
SELECTION

### **Test 8**

Wrong final answer but no process evidence.

Expected:

UNKNOWN

not guessed diagnosis.

### **Test 9**

Chapter 9 source missing.

Expected:

A1S2 NOT READY

### **Test 10**

Old Chapter 7 checkbox completion imported.

Expected:

does not create mastery  
---

# **64\. Academic QA gates**

Before final freeze:

## **Gate A — formulas**

Every formula independently checked.

## **Gate B — worked examples**

Every numerical result recalculated.

## **Gate C — official question mappings**

Every question linked to correct skill IDs.

## **Gate D — answer variants**

Every validated adaptation mathematically checked.

## **Gate E — terminology**

Notation consistent:

μ  
σ  
σ²  
π  
p  
X  
X̄  
n  
N  
λ  
t  
Z

## **Gate F — source hierarchy**

No old generated content overrides new current sources.

---

# **65\. Functional QA gates**

Must pass:

* no duplicate IDs;  
* no broken navigation;  
* no console errors;  
* localStorage persists;  
* import/export works;  
* reset works;  
* answer reveal disqualifies mastery;  
* support fading works;  
* timer works;  
* simulation locks help;  
* source locks work;  
* print mode works;  
* mobile layout usable;  
* keyboard accessible.

---

# **66\. Build order**

This is important because we do **not** want another endless project.

## **Build Phase A — engine**

Build only:

* navigation;  
* data model;  
* mastery;  
* attempts;  
* repairs;  
* retrieval;  
* router;  
* source control.

Freeze it.

---

## **Build Phase B — Chapter 6**

Populate full GREEN Chapter 6\.

Then test.

---

## **Build Phase C — Chapter 7**

Reuse existing content.

Implement current patches.

Add Student-t branch.

Test.

---

## **Build Phase D — Chapter 8**

Populate amber provisional content.

Do not pretend it is final.

---

## **Build Phase E — A1 layer**

Build:

* mixed recognition;  
* retrieval;  
* repair;  
* closed-book;  
* simulations;  
* readiness.

---

## **Build Phase F — print \+ QA**

Only after the academic engine works.

---

# **67\. Chapter 9 insertion protocol**

When material becomes available:

SOURCE INTAKE  
→ classify authority  
→ audit content  
→ create skills  
→ create dependencies  
→ create formulas  
→ map tutorials  
→ validate questions  
→ populate chapter  
→ add mixed questions  
→ run QA  
→ change SOURCE\_MISSING → SOURCE\_READY

Do not change the global architecture.

---

# **68\. Later A2S2 expansion**

The app must already support:

assessmentProfiles \= {  
  A1S2: {...},  
  A2S2: {...}  
}

A2S2 should initially be:

SOURCE / SCOPE NOT YET LOADED

The framework identifies A2S2 as the later written main assessment on 6 November.

Do not populate A2 content yet.

---

# **69\. Final build output requirements**

The builder must return:

SDS188\_Semester2\_MasterLearningSystem\_A1S2\_v1\_0.html

and a short QA report containing:

Academic source status  
Skill counts  
Question counts  
Current provisional sections  
Chapter 9 status  
Functional tests passed  
Known limitations

No unrelated companion app is required.

---

# **70\. Freeze rule**

Once the engine, Chapter 6, Chapter 7 and A1 training workflow function correctly:

> **STOP ARCHITECTURAL DEVELOPMENT.**

From that point until A1S2, improvements should overwhelmingly be:

* current sources;  
* verified questions;  
* answer verification;  
* Chapter 8 update;  
* Chapter 9 intake;  
* repair content;  
* simulation quality.

Not:

* new dashboards;  
* animations;  
* themes;  
* extra modes;  
* another tracking system.

---

# **Final frozen architecture**

The complete system is therefore:

SOURCE CONTROL  
      ↓  
DIAGNOSTIC  
      ↓  
TEACH  
      ↓  
RETRIEVE  
      ↓  
GUIDED EXAMPLE  
      ↓  
FADE SUPPORT  
      ↓  
INDEPENDENT FAMILIAR  
      ↓  
ALTERED / UNLABELLED  
      ↓  
MIXED SELECTION  
      ↓  
TIMED CLOSED-BOOK  
      ↓  
A1S2 READY

with every meaningful error branching to:

ERROR  
 ↓  
REPAIR  
 ↓  
EXPLAIN  
 ↓  
CONTRAST  
 ↓  
IMMEDIATE RETRY  
 ↓  
DELAYED RETEST  
 ↓  
TRANSFER RETEST  
 ↓  
RETURN TO MAIN PATH

And the only mastery vocabulary remains:

> **NOT STARTED → UNDERSTAND → RETRIEVE → APPLY → STABLE**, with **REPAIR** as an override.

That is exactly the level of architecture the Brain advisory recommended; it explicitly says not to add another learning-system layer beyond this unless a later source audit reveals a genuine need.

