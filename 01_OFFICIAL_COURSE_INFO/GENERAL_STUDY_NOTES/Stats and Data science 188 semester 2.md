# PHASE 1 — Freeze the academic truth

# **PHASE 1 — Freeze the academic truth**

Before deciding what to teach, establish a hierarchy of authority.

### **Source hierarchy**

1. **Latest formal EMSLearn announcements**  
   * assessment scope;  
   * format;  
   * changed dates/instructions.  
2. **2026 SDS188 Module Framework**  
3. **2026 lecturer slides**  
4. **official tutorials**  
5. **official tutorial memoranda**  
6. **lecturer recordings/transcripts**  
7. prescribed textbook / lecturer-supplied textbook extracts  
8. existing HTML manuals and formula sheets  
9. AI-generated explanations/practice questions

Anything from levels 8–9 is **secondary**, even if it looks excellent.

This matters because the existing Chapter 7 HTML is useful, but we should never allow an old/generated HTML to silently override the current lecturer material.

The framework itself specifically tells students to attempt tutorial problems independently before seeing the answers. More importantly, the Chapter 6 lecture transcript says the tutorials should be attempted **as if in the assessment, without notes**, because otherwise students can develop false confidence; the lecturer also notes that tutorial-style questions can closely resemble assessment questions.

That should become a core design principle of our system.

# PHASE 2 — Ask the Brain Project before designing …

# **PHASE 2 — Ask the Brain Project before designing the final architecture**

We don't want the Brain Project auditing statistics content.

We want it answering:

> **How should this material be taught so that Nix can actually retrieve and apply it under closed-book assessment conditions?**

It should challenge our learning design **before we inspect the existing HTMLs**, so we're not biased by what has already been built.

### **Prompt to give the Brain Project**

> # **SDS188 A1S2 MASTER LEARNING SYSTEM — LEARNING-DESIGN ADVISORY ONLY**

> I am designing a personal interactive HTML learning system for **Statistics and Data Science 188 at Stellenbosch University**.

> **Do not build the HTML and do not invent statistical content.**

> I want a learning-design advisory that will later be combined with an audit of my official academic sources.

> ## **ASSESSMENT**

> A1S2:

> * **29 August 2026**  
> * scope: **Chapters 6–9**  
> * EMSLearn quiz  
> * invigilated  
> * closed book  
> * approximately 90-minute assessment window based on the announced sessions

> The official module framework describes A1S2 as the semester's computer-based assessment and the later A2S2 as a written assessment.

> I currently have substantial material for Chapters 6–8.

> **I do NOT yet have Chapter 9 material.**

> Do not guess what Chapter 9 contains.

> ## **PRIMARY PERFORMANCE GOAL**

> Design the learning architecture around achieving approximately **70–100%**, particularly by preventing:

> * passive familiarity being mistaken for mastery;  
> * formula-selection errors;  
> * wrong-tail/wrong-distribution errors;  
> * notation confusion;  
> * calculator/Excel procedure errors;  
> * inability to recognise a question when its wording changes;  
> * correct calculations with incorrect interpretation;  
> * dependence on notes;  
> * poor time management in an invigilated quiz.

> The HTML must **teach first, then progressively remove support** until the student can solve unseen mixed problems independently.

> ## **I WANT YOUR ADVICE ON**

> 1. The ideal learning progression for quantitative/statistics material.  
> 2. What evidence should count as actual mastery.  
> 3. How diagnostic testing should work.  
> 4. How retrieval practice should be implemented.  
> 5. How worked examples should fade from fully guided → partially guided → independent.  
> 6. How an error/repair system should operate.  
> 7. How formulas should be learned and selected rather than merely displayed.  
> 8. How graphs/visual probability regions should be taught.  
> 9. How calculator and Excel procedures should be trained without creating procedural dependence.  
> 10. How conceptual questions and calculations should be interleaved.  
> 11. How to train for multiple-choice/numeric-entry traps and altered wording.  
> 12. How timed closed-book simulations should work.  
> 13. How spaced revision should be scheduled between now and 29 August.  
> 14. How the system should decide **“WHAT SHOULD I DO NOW?”**  
> 15. Which features would add cognitive load or amount to overengineering and should therefore NOT be built.

> ## **IMPORTANT DESIGN REQUIREMENTS**

> The system should distinguish:

> * seeing an answer;  
> * understanding an answer;  
> * recalling the method;  
> * solving a familiar problem;  
> * solving a changed/unseen problem;  
> * solving under time pressure.

> A revealed solution must **never count as mastery**.

> Self-declared confidence must not be enough to unlock mastery.

> Mistakes should automatically generate later repair/retest work.

> The system should favour **active production** over passive rereading.

> It should include short opportunities to explain reasoning aloud before revealing answers where useful.

> The final goal is that the learner can close the HTML and perform.

> ## **OUTPUT**

> Give me:

> 1. **MUST HAVE** learning-design features.  
> 2. **SHOULD HAVE** features.  
> 3. **DO NOT BUILD / LOW VALUE** features.  
> 4. Recommended mastery-state architecture.  
> 5. Recommended structure for a single chapter.  
> 6. Recommended structure for mixed assessment preparation.  
> 7. Recommended 20-day progression toward A1S2.  
> 8. Any weaknesses you see in this proposed approach.

> Be critical rather than agreeable.

> Prioritise learning effectiveness over visual novelty.

> Do not make claims about the SDS188 syllabus that were not supplied above.

**That is the next step.**

# **SDS188 A1S2 Master Learning System — Learning-Design Advisory**

## **Executive verdict**

The core idea is strong, but I would make **two non-negotiable changes** before this becomes a build specification:

1. **Do not make the HTML more elaborate than the learning problem.** For SDS188, the system should behave primarily as a **question-recognition → method-selection → execution → interpretation → repair engine**, not as a digital textbook, analytics dashboard, or gamified study app.  
2. **Do not compensate for missing Chapter 9 with assumptions.** Chapter 9 should exist in the architecture as `SOURCE MISSING / NOT YET AUDITED`, with **no inferred topics, prerequisites, formulas, or questions** until the official material is obtained.

The most important design principle should be:

> **The HTML teaches with support, measures with reduced support, and finishes by removing itself.**

A student who performs beautifully *inside* the HTML but cannot solve a fresh closed-book problem after closing it has **not achieved the objective**.

This fits the existing Brain project boundaries particularly well: missing evidence remains unknown; a revealed answer cannot establish competence; one successful repair attempt does not close a bottleneck; and task-local performance should drive the next action rather than passive completion.

For your particular implementation, I would also externalise multi-step decision processes rather heavily during learning. Your assessment report shows a relative weakness in immediate auditory short-term memory/Digit Span alongside much stronger arithmetic performance, which makes persistent decision strips, written notation, and visible intermediate structure reasonable supports—not because of a supposed “learning style”, but because they reduce unnecessary working-memory load while leaving the mathematical reasoning to you.

---

# **1\. MUST HAVE**

## **A. One universal SDS problem-solving spine**

Almost every quantitative activity should eventually be forced through the same **content-neutral reasoning chain**:

**RECOGNISE → REPRESENT → SELECT → EXECUTE → INTERPRET → VERIFY**

During learning, the HTML explicitly prompts each step.

### **1\. RECOGNISE**

Ask:

* What is this question actually asking for?  
* What information matters?  
* What wording is signalling the required statistical operation?  
* What information is distracting or irrelevant?

### **2\. REPRESENT**

Require whatever representation the audited source supports:

* notation;  
* probability statement;  
* graph/region;  
* parameters;  
* known versus unknown quantities.

### **3\. SELECT**

Before calculation:

* which method?  
* which formula?  
* which distribution, where relevant?  
* which tail/region, where relevant?  
* why does it apply?

### **4\. EXECUTE**

Only now:

* calculator;  
* Excel;  
* arithmetic;  
* substitution.

### **5\. INTERPRET**

Require the answer **in the language/context of the question**, not just a number.

### **6\. VERIFY**

Ask:

* Does the magnitude make sense?  
* Is the sign/direction plausible?  
* Is the selected region consistent with the wording?  
* Did I answer the requested quantity rather than a related one?

By late-stage practice, those prompts disappear entirely.

---

## **B. Evidence hierarchy: not all “success” is equal**

The HTML must record these as fundamentally different things:

| Evidence | What it proves |
| ----- | ----- |
| **Saw solution** | Nothing about independent competence |
| **Followed solution** | Can follow reasoning with support |
| **Explained solution afterwards** | Provisional understanding |
| **Recalled method closed-source** | Retrieval evidence |
| **Solved familiar independent problem** | Application evidence |
| **Solved altered/unlabelled problem** | Transfer/discrimination evidence |
| **Solved mixed altered problem after delay** | Strong stability evidence |
| **Solved mixed altered problem under representative time** | Assessment-performance evidence |

### **Hard rule**

If `solutionViewed = true` before submission:

> **That attempt can teach, but cannot upgrade mastery.**

The same applies to substantial hints.

This should be enforced technically rather than left to self-discipline.

---

## **C. Diagnostic system**

Do **not** begin every chapter by reteaching everything.

Each source-ready chapter should start with a **small representative diagnostic**, sampling distinct operations rather than simply counting questions.

The diagnostic should test, where relevant to the audited material:

* concept recognition;  
* notation;  
* formula/method selection;  
* distribution/tail recognition;  
* visual probability region;  
* calculation;  
* calculator/Excel execution;  
* interpretation.

### **Diagnostic rules**

The diagnostic should initially hide:

* chapter subsection;  
* method name;  
* formula;  
* hints.

For every item, record:

* correctness;  
* selected method;  
* confidence;  
* support used;  
* final interpretation;  
* time if useful.

Then classify the result narrowly.

For example:

> Wrong final answer \+ no working recorded  
>  → **ERROR TYPE UNKNOWN**

Not:

> → “formula problem.”

The program must **never pretend to diagnose the cause of an error from insufficient evidence**. That unknown-safety rule is one of the strongest principles in the existing Brain architecture.

---

# **D. Worked-example fading**

This should be one of the main teaching engines.

## **Level 1 — Fully modelled**

Show:

* question analysis;  
* representation;  
* method selection;  
* formula;  
* substitution;  
* tool procedure;  
* interpretation;  
* checking.

But require the learner to answer short **“why this step?”** prompts.

## **Level 2 — Completion example**

Remove selected parts.

The learner completes:

* missing notation;  
* missing region;  
* formula choice;  
* one calculation step;  
* interpretation.

## **Level 3 — Structural prompts only**

Show:

> Identify → Represent → Select → Calculate → Interpret

No actual solution steps.

## **Level 4 — Familiar independent**

Same underlying operation, but no scaffold.

## **Level 5 — Altered/unlabelled**

Change the surface structure:

* different wording;  
* different context;  
* information reordered;  
* method label removed;  
* graph ↔ words where academically valid.

## **Level 6 — Mixed independent**

The learner does not know what chapter/subsection produced the question.

## **Level 7 — Timed mixed**

Representative assessment conditions.

### **Crucial rule**

One successful Level 4 problem means:

> **reduce support and test again.**

It does **not** mean mastery.

---

# **E. A genuine repair engine**

Every meaningful wrong answer must create future work.

Recommended error families:

| Error family | Examples |
| ----- | ----- |
| **Recognition** | Misread what the question wanted |
| **Selection** | Wrong method/formula chosen |
| **Distribution** | Wrong distribution selected |
| **Tail/region** | Wrong probability region |
| **Notation** | Symbols/parameters confused |
| **Formula knowledge** | Formula incorrectly recalled |
| **Substitution** | Correct formula, wrong values inserted |
| **Procedure** | Calculator/Excel sequence incorrect |
| **Arithmetic** | Mechanical calculation error |
| **Interpretation** | Number correct, conclusion wrong |
| **Graph** | Region/axis/quantity represented incorrectly |
| **Rounding/input** | Numeric-entry or formatting error |
| **Timing** | Correct method but excessive time |
| **Confidence mismatch** | Very confident \+ materially wrong |

### **Repair sequence**

A repair should normally be:

**ERROR → EXPLAIN → CONTRAST → RETRY → DELAY → TRANSFER**

For example, a formula-selection error should **not** trigger ten identical calculations.

It should trigger:

1. identify the cue that was missed;  
2. compare two superficially similar cases;  
3. choose between them and explain why;  
4. solve one;  
5. return later;  
6. solve an altered version.

For a procedural keying error, the repair can be much shorter.

---

# **F. Formula-selection training**

A formula sheet by itself is low-value.

Each formula should eventually be stored internally as a **decision object**, not just an equation.

For every audited formula, the learning system should teach:

**FORMULA**

→ *What question does this answer?*  
 → *What information must exist?*  
 → *What conditions make it appropriate?*  
 → *What similar formula is it easily confused with?*  
 → *What wording should make me consider it?*  
 → *What would rule it out?*

Then train the reverse direction.

Do not repeatedly ask:

> “State formula X.”

Also ask:

> “Here is a question. Which formula family do you need, and why?”

Then later:

> “Here are three methods. Why are two wrong?”

That is much closer to the actual danger you identified: **selection failure rather than simple formula amnesia**.

---

# **G. Graph / visual-region training**

Do not make graph activities purely decorative.

For probability-region questions, use the progression:

**WORDS → EVENT → REGION → TAIL(S) → METHOD → CALCULATION → INTERPRETATION**

Where supported by the audited material, activities can include:

1. read wording and shade the region;  
2. see a region and describe it in words;  
3. write the symbolic event;  
4. identify which method corresponds to it;  
5. detect a deliberately wrong shaded region;  
6. solve without the visual scaffold.

### **Important**

Require the region decision **before calculation**.

Otherwise the learner can type something into a calculator, obtain a number and never discover that the conceptual region was wrong.

---

# **H. Calculator and Excel training without dependency**

Use two separate layers:

### **Layer 1 — statistical reasoning**

The learner must first determine:

* what is being calculated;  
* what method applies;  
* what inputs mean;  
* what result should represent.

### **Layer 2 — tool execution**

Only then show calculator/Excel implementation.

Progress through:

**VIEW → COMPLETE → RECONSTRUCT → EXECUTE FROM QUESTION**

Eventually:

> No tool instructions.

The student receives only the problem.

### **Critical boundary**

A correct calculator or Excel output should not establish mastery if the program supplied the correct statistical method automatically.

Likewise, manual calculation should not be forced merely for purity if the official assessment expects a permitted tool. **The eventual source audit must determine what tool behaviour A1S2 actually requires.**

I would therefore avoid coding assessment-specific Excel/calculator assumptions until that audit.

---

# **I. Interpretation gate**

A calculation is **not finished** when the number appears.

Require:

> **What does this answer mean here?**

The system should separately store:

* `calculationCorrect`  
* `interpretationCorrect`

Therefore:

> correct number \+ wrong interpretation  
>  ≠ fully correct problem.

This is particularly important for your 70–100% target because calculation competence can conceal conceptual weakness surprisingly well.

---

# **J. Altered-wording training**

This is absolutely essential.

Build **validated question variations**, not merely repeats.

Safe variation dimensions include:

* changing context;  
* changing variable names;  
* reordering information;  
* removing the subsection heading;  
* changing whether information is given verbally or symbolically;  
* inserting irrelevant information;  
* asking for interpretation rather than calculation;  
* graph → words;  
* words → graph;  
* asking the method-selection step explicitly;  
* changing numerical values while preserving the validated structure.

### **Do not automatically generate statistics questions with AI**

Unless those variants are checked against official material.

A beautifully adaptive system containing subtly invalid statistics questions would be worse than a small verified question bank.

---

# **K. Closed-book mode**

There should be a prominent:

## **CLOSE THE NOTES**

mode.

It must disable:

* formula reference;  
* worked examples;  
* chapter labels;  
* hints;  
* glossary;  
* method names;  
* explanation panes.

The learner should repeatedly encounter:

> **Can I do this if the HTML disappears?**

That is the actual target.

---

# **2\. SHOULD HAVE**

These are valuable after the core engine works.

### **Confidence calibration**

Before substantive questions:

* Guessing  
* Unsure  
* Fairly sure  
* Very sure

Pair it with actual performance.

Repeated:

> Very sure \+ wrong

should trigger a **misconception/discrimination check**, not a motivational message.

Repeated:

> Unsure \+ independently correct

should trigger another independent problem rather than unnecessary reteaching.

---

### **Question-trap laboratory**

Especially useful for an EMSLearn assessment.

Include verified examples of:

* tempting wrong formula;  
* wrong-tail distractor;  
* wrong-distribution distractor;  
* correct calculation answering the wrong quantity;  
* plausible rounding option;  
* answer produced by a common procedural error.

After submission, ask:

> **What mistake would produce each distractor?**

That transforms MCQ distractors into learning material.

---

### **Numeric-entry discipline**

Train:

1. calculate at adequate precision;  
2. interpret;  
3. apply the required rounding/format **only once the official requirements are known**;  
4. enter exactly what is requested.

Do not invent EMSLearn formatting rules before the source audit.

---

### **Scratch workspace**

A persistent scratch area should allow:

* notation;  
* small diagrams;  
* intermediate calculations;  
* reasoning notes.

This reduces unnecessary working-memory demands without doing the reasoning on the learner's behalf. Given the cognitive profile in the supplied report, that is a sensible implementation choice.

---

### **“Say it before reveal”**

Use selectively:

> **Before revealing the answer, explain aloud why you chose this method.**

Keep it to perhaps 20–60 seconds.

Do **not** require recordings or automatic speech analysis.

The later independent question establishes correctness.

---

### **Error fingerprint**

The system can show a simple factual summary such as:

> Recent errors:  
>  3 selection  
>  2 interpretation  
>  1 procedure

This can help route practice.

Do **not** turn it into:

> “You are a distribution-selection learner.”

---

### **Source and content status**

Every chapter should have an internal status:

* `SOURCE READY`  
* `SOURCE PARTIAL`  
* `SOURCE MISSING`  
* `AUDIT REQUIRED`

At present:

**Chapter 9 \= SOURCE MISSING.**

That is a content-control fact, not a mastery state.

---

# **3\. DO NOT BUILD / LOW VALUE**

This is where I would be strict.

## **Do not build:**

* a global **“87% mastered”** score;  
* XP, streaks, coins or achievement badges;  
* confetti;  
* a giant analytics dashboard;  
* a complicated AI tutor inside the HTML;  
* automatic AI-generated statistics questions;  
* a huge searchable formula encyclopedia;  
* a full Excel clone;  
* a full calculator emulator unless later evidence shows it materially improves practice;  
* dozens of mastery sublevels;  
* microphone scoring;  
* automatic psychological profiling from mistakes;  
* forced study timers on every activity;  
* fixed 25-minute Pomodoro mechanics;  
* dozens of charts tracking study behaviour;  
* elaborate animations;  
* “completed” status from page scrolling;  
* progress from clicking **Show solution**;  
* permanent prerequisite locks;  
* a separate game for every chapter;  
* a second full set of notes inside Learn Mode duplicating Read Mode.

### **Especially do not build a “smart error diagnosis” that guesses from the final answer.**

If a learner submits `0.0314`, there may be many reasons it is wrong.

Without working or a diagnostic follow-up:

> **cause \= unknown**

That is scientifically and educationally much safer.

---

# **4\. Recommended mastery-state architecture**

I would **not** create a seven- or eight-stage SDS-only mastery vocabulary.

Keep the existing Brain vocabulary for consistency:

**NOT STARTED → UNDERSTAND → RETRIEVE → APPLY → STABLE**

with:

**REPAIR** as an override.

Then keep **assessment evidence separate**.

## **State definitions**

### **NOT STARTED**

No valid learning evidence.

### **UNDERSTAND**

Can explain the concept/method correctly and pass an immediate conceptual check without reading the answer.

### **RETRIEVE**

Can reconstruct the relevant idea/method/formula from memory.

### **APPLY**

Can independently solve a representative familiar problem.

### **STABLE**

Performance survives:

* delay;  
* reduced support;  
* changed wording/unseen representation;  
* mixed selection.

### **REPAIR**

Recent representative evidence reveals a meaningful error that requires retesting.

---

## **Separate evidence flags**

Attach flags such as:

* `solutionViewed`  
* `independent`  
* `familiar`  
* `changedWording`  
* `mixed`  
* `delayed`  
* `timed`  
* `interpretationCorrect`  
* `selectionCorrect`  
* `toolProcedureCorrect`

This gives you the distinctions you want **without multiplying mastery states**.

---

## **Assessment readiness is not another mastery state**

Create a separate gate:

# **A1S2 READY**

Require something like:

* all required chapters source-ready;  
* no major open repair affecting assessed work;  
* appropriate concepts at least APPLY/STABLE;  
* altered/unseen performance demonstrated;  
* mixed selection demonstrated;  
* interpretation demonstrated;  
* closed-book evidence;  
* representative timed evidence.

The exact academic coverage cannot be finalised until Chapter 9 and the official sources are audited.

---

# **5\. Recommended structure for a single chapter**

Each chapter should feel like a **training course**, not a long scrolling document.

## **1\. Chapter Gate**

Show:

* source status;  
* what the learner will need to demonstrate once source-audited;  
* prerequisite warnings;  
* current next task.

For Chapter 9 today:

> **SOURCE MISSING — academic content intentionally unavailable.**

---

## **2\. Diagnostic**

A compact representative sample.

Output:

* what can tentatively be skipped;  
* what needs teaching;  
* what needs verification;  
* what enters repair.

---

## **3\. Learn blocks**

Each concept uses:

**EXPLAIN → SAY → CHECK → EXAMPLE → FADE**

No passive 30-minute reading sections.

---

## **4\. Recognition and selection lab**

Question stems only.

Require:

* method;  
* reason;  
* formula/distribution/tail where relevant.

No calculations initially.

This may be the **highest-value part of the system** given the failure modes you identified.

---

## **5\. Graph / representation lab**

Words ↔ notation ↔ visual region.

---

## **6\. Calculation lab**

Independent numerical execution.

---

## **7\. Tool lab**

Calculator/Excel implementation after reasoning.

---

## **8\. Interpretation lab**

Give results and ask what they mean.

Sometimes no calculation at all.

---

## **9\. Worked-example fading ladder**

Full → partial → prompted → independent → altered → mixed.

---

## **10\. Chapter mixed set**

Do not label subsection or method.

---

## **11\. Chapter Final Boss**

Closed-source, altered wording, mixed tasks.

No hints.

---

## **12\. Repair queue**

Only actual unresolved errors.

---

## **13\. Chapter exit**

Possible states:

> **Needs teaching**  
>  **Building**  
>  **Independent on familiar tasks**  
>  **Stable on changed/mixed tasks**  
>  **Repair required**

No percentage required.

---

# **6\. Mixed A1S2 assessment preparation**

Chapter-by-chapter competence is **not enough**.

The assessment-preparation layer should progressively destroy contextual clues.

## **Stage A — labelled mixed practice**

Questions from several chapters, but chapter/topic labels remain.

Purpose: integrate calculation.

## **Stage B — unlabelled mixed practice**

No chapter names.

Purpose: selection.

## **Stage C — altered wording**

Same validated academic operation, different surface form.

Purpose: transfer.

## **Stage D — trap sets**

MCQ/numeric-entry distractors based on known error patterns.

Purpose: discrimination.

## **Stage E — mini closed-book blocks**

Short, mixed independent blocks.

Purpose: concentration and switching.

## **Stage F — full simulation**

Representative EMSLearn-style conditions as far as verified.

Currently known:

* closed book;  
* invigilated;  
* computer based;  
* Chapters 6–9;  
* approximately 90-minute announced session window.

Do not invent anything beyond that.

If your actual approved assessment time differs because of formal concessions, the simulator should eventually use the **official confirmed personal time**, not an assumed value.

---

## **Simulation review**

After every simulation, divide errors into:

### **Knowledge gap**

Didn't know the concept/method.

### **Selection gap**

Knew it but chose the wrong thing.

### **Execution gap**

Correct method; procedural/arithmetic error.

### **Interpretation gap**

Correct work; wrong meaning/conclusion.

### **Time-pressure gap**

Correct untimed, deteriorated under timing.

### **Attention/read-error**

Misread or omitted key information.

Then repair **only what failed**.

Do not respond to a 70% simulation by making the learner reread all four chapters.

---

# **7\. Recommended 20-day progression**

This assumes **Day 1 \= 9 August** and the final preparation day is **28 August**, with A1S2 on **29 August**.

The exact chapter allocation must remain flexible until Chapter 9 arrives.

| Day | Date | Main objective |
| ----- | ----- | ----- |
| **1** | 9 Aug | Freeze learning architecture; baseline diagnostic on source-ready Ch 6–8; identify major error families |
| **2** | 10 Aug | First targeted teaching/repair from diagnostic; begin Chapter 9 source acquisition as an urgent content dependency |
| **3** | 11 Aug | Ch 6–8 weakest area: UNDERSTAND → RETRIEVE; formula/method-selection work |
| **4** | 12 Aug | Independent familiar problems; interpretation gate; first delayed retrieval from Days 1–3 |
| **5** | 13 Aug | Next weak area; graph/region \+ recognition/selection practice where source-supported |
| **6** | 14 Aug | Worked-example fading; calculator/Excel reconstruction; repair recurring errors |
| **7** | 15 Aug | Closed-source mixed Ch 6–8 set; no chapter labels; analyse error fingerprint |
| **8** | 16 Aug | Repair day: only weaknesses exposed by mixed work; delayed retests |
| **9** | 17 Aug | Changed-wording/transfer practice across source-ready content |
| **10** | 18 Aug | **Chapter 9 should ideally be source-ready by here.** Diagnostic \+ first teaching if obtained |
| **11** | 19 Aug | Chapter 9 teaching/application OR, if still unavailable, strengthen Ch 6–8 while treating the missing source as a readiness blocker |
| **12** | 20 Aug | Chapter 9 fading \+ earlier-chapter spaced retrieval; start four-chapter integration if possible |
| **13** | 21 Aug | Full unlabelled Chapters 6–9 mixed set; selection emphasis |
| **14** | 22 Aug | MCQ/numeric-entry trap lab \+ interpretation-only questions \+ targeted repair |
| **15** | 23 Aug | First substantial closed-book mixed simulation, initially untimed or lightly timed if accuracy is not stable |
| **16** | 24 Aug | Simulation repair; reproduce every material error without notes |
| **17** | 25 Aug | First representative timed simulation if untimed readiness is sufficient |
| **18** | 26 Aug | Deep repair from timed simulation; altered versions of failed items; short delayed retests |
| **19** | 27 Aug | Final substantial representative closed-book simulation; focus on pacing and switching |
| **20** | 28 Aug | Light mixed retrieval \+ formula/method discrimination \+ unresolved-error check; **no large new build and no marathon rereading** |

### **29 August**

The learning system should no longer be teaching you.

You should be able to close it.

---

## **Spacing inside those 20 days**

I would keep **R1 / R2 / R3**, but treat dates as **scheduler defaults**, not scientific proof of mastery.

For example:

* **R1:** next available study session;  
* **R2:** roughly 2–3 days after successful R1;  
* **R3:** roughly 5–7 days later;  
* **REPAIR override:** brings the item forward;  
* a failed delayed check restarts repair rather than merely adding another tick.

Because the assessment is close, spacing needs to fit the remaining calendar. The **evidence requirement** matters more than slavishly obeying an exact interval. The existing Brain audit correctly warns against turning arbitrary spacing intervals into mastery rules.

---

# **8\. WHAT SHOULD I DO NOW? router**

This needs to be brutally simple.

The system should return **one primary task**.

Recommended deterministic priority:

### **Priority 1 — Source blocker**

If assessed material is not source-ready:

> **Resolve the required source gap.**

Currently Chapter 9 is such a gap.

This is a build/readiness issue, not evidence that you personally “don't know Chapter 9.”

---

### **Priority 2 — Open high-impact REPAIR**

Choose the unresolved error most likely to corrupt multiple downstream problems.

Examples of generic high-impact types:

* wrong method selection;  
* distribution/tail confusion;  
* notation errors;  
* formula choice;  
* recurring tool-procedure errors.

---

### **Priority 3 — Due delayed retest**

If an item needs a delayed check:

> do that before more teaching.

---

### **Priority 4 — Required content not yet independently applied**

Route:

**UNDERSTAND → RETRIEVE → APPLY**

---

### **Priority 5 — APPLY but not STABLE**

Give:

* changed wording;  
* reduced cues;  
* unlabelled/mixed task.

---

### **Priority 6 — Stable individually but not mixed**

Give a mixed discrimination set.

---

### **Priority 7 — Stable untimed but not timed**

Give timed practice.

---

### **Priority 8 — Ready**

Give brief maintenance retrieval and stop.

---

## **The next-task card should say only:**

> **DO THIS NOW**  
>  Mixed method-selection set — Chapter X / Y

> **Why:** Two recent problems used the correct calculations after the method was supplied, but independent method selection has not yet been demonstrated.

> **Do:** Choose the method and justify it before calculating.

> **Stop when:** Complete the set and repair any selection error.

That is much better than opening a dashboard with 27 statistics.

---

# **9\. Major weaknesses / risks in the proposed approach**

## **1\. Chapter 9 is currently the biggest structural risk**

No learning architecture can compensate for missing assessed material.

If Chapter 9 arrives very late, it may:

* require prerequisite restructuring;  
* alter the mixed-question bank;  
* change time allocation;  
* expose previously unknown weak areas.

Therefore **source acquisition for Chapter 9 is now time-sensitive**.

---

## **2\. The HTML itself could become the procrastination mechanism**

This is the biggest danger I see.

You have 20 days.

A sophisticated statistics OS is valuable **only if it rapidly increases actual problem attempts**.

By around the first few days, I would freeze:

* navigation;  
* mastery engine;  
* error system;  
* next-task router;  
* fading model.

After that, improvements should overwhelmingly be:

> verified questions \+ verified explanations \+ verified answer logic.

Not visual polish.

If a feature takes three hours to build but saves 20 seconds per study session, cut it.

---

## **3\. Multiple-choice performance can create false confidence**

Recognition is easier than production.

Therefore the HTML should frequently require:

> choose method / formula / tail / region **before options appear**

and:

> calculate before seeing MCQ options.

Only later present the answer choices.

---

## **4\. Heavy scaffolding can itself become dependence**

A perfect six-step on-screen checklist can improve practice while simultaneously teaching:

> “Wait until the checklist tells me what to do.”

So support must actually fade.

By the final week, mixed questions should begin essentially with:

> **Solve this.**

---

## **5\. Tool competence can conceal statistical weakness**

Typing the right Excel function or calculator command is not the same as knowing why it is appropriate.

Conversely, knowing the statistics but repeatedly keying the tool incorrectly can still cost marks.

Track those as **separate evidence channels**.

---

## **6\. Error tracking can become too detailed**

Do not spend two minutes classifying a one-line arithmetic slip.

The error system should be **as detailed as needed to determine the next useful action—and no more**.

---

## **7\. A single “Final Boss” is insufficient**

A final mixed test can be passed partly by luck or convenient question sampling.

Readiness should come from a **pattern of independent evidence**:

* delayed;  
* altered;  
* mixed;  
* timed.

Not one glorious final run.

---

# **Final recommended architecture**

The SDS188 system should ultimately be:

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
CHANGED / UNSEEN  
      ↓  
MIXED SELECTION  
      ↓  
TIMED CLOSED-BOOK  
      ↓  
A1S2 READY

Any meaningful error  
      ↓  
REPAIR  
      ↓  
IMMEDIATE RETRY  
      ↓  
DELAYED RETEST  
      ↓  
TRANSFER RETEST  
      ↘ return to main pathway

And the governing evidence vocabulary should remain:

**NOT STARTED → UNDERSTAND → RETRIEVE → APPLY → STABLE**, with **REPAIR** as an override and **A1S2 READY** as a separate assessment-readiness conclusion.

That is enough architecture. I would **not add another learning-system layer beyond this** unless the later source audit exposes a genuine SDS188-specific need.

The next logical phase is therefore **not coding yet**: audit the `SDS A1S2` folder against the official academic requirements, establish exactly what is source-ready for Chapters 6–8, identify what Chapter 9 material is missing, and then convert this advisory \+ that source audit into one deterministic build specification.

# PHASE 3 — Then I audit SDS A1S2

# **PHASE 3 — Then I audit `SDS A1S2.zip`**

After you bring me the Brain Project response, **we inspect the attached folder properly**.

This will be a real source/control audit, not merely "these files look good."

For every item we will classify it as:

**KEEP · REUSE/PATCH · REFERENCE ONLY · DUPLICATE · OBSOLETE · DELETE · MISSING**

And I want to establish five things.

### **A. Source completeness**

For each chapter:

| Chapter | Expected source pack | Current status |
| ----- | ----- | ----- |
| **6** | slides \+ lectures/transcript \+ tutorial \+ solutions \+ formulas | substantial material present |
| **7** | slides \+ tutorial \+ solutions/material \+ existing HTML/manual | substantial material present |
| **8** | slides \+ tutorial \+ t material \+ specialist extracts \+ solutions where available | substantial material present |
| **9** | slides/tutorial/lecturer material | **MISSING — HOLD** |

We already know enough from the material here to see the broad content map. Chapter 6 covers normal and other continuous distributions; Chapter 7 covers sampling distributions; Chapter 8 covers confidence interval estimation.

But we will **not** infer Chapter 9 from the textbook sequence.

### **B. Existing HTML audit**

For every existing HTML:

* academic correctness;  
* missing examinable content;  
* unsupported additions;  
* formula correctness;  
* notation;  
* worked examples;  
* answer calculations;  
* links/navigation;  
* JS functionality;  
* persistence;  
* mobile layout;  
* print layout;  
* accessibility;  
* duplication;  
* learning effectiveness;  
* whether completion means actual mastery;  
* whether it belongs in the master build at all.

### **C. Coverage matrix**

We will create something like:

| Skill | Official source | Existing HTML | Missing? | Action |
| ----- | ----- | ----- | ----- | ----- |
| Normal probabilities | Ch6 | yes/no |  |  |
| Inverse normal | Ch6 |  |  |  |
| Uniform | Ch6 |  |  |  |
| Exponential | Ch6 |  |  |  |
| Normality evaluation | Ch6 |  |  |  |
| Sampling mean | Ch7 |  |  |  |
| CLT | Ch7 |  |  |  |
| Sample proportion | Ch7 |  |  |  |
| Two sample means | Ch7 |  |  |  |
| FPC | Ch7/8 |  |  |  |
| CI mean σ known | Ch8 |  |  |  |
| CI mean σ unknown | Ch8 |  |  |  |
| CI proportion | Ch8 |  |  |  |
| sample size | Ch8 |  |  |  |
| bootstrapping | Ch8 |  |  |  |
| Chapter 9 | **await source** | — | 🔒 | do not build |

That becomes our **source-to-system contract**.

---

Brain project response attached  
Worked for 4m 30s

Yes — I’ve read the Brain Project advisory carefully, and **we should adopt it as the controlling learning-design specification** for the SDS188 master system. It improves the original plan in exactly the right place: the HTML must become less of a beautiful set of notes and more of a **training machine that eventually removes itself**.

I’ve also now pushed into the **folder/source audit**, and it has already exposed one very important issue that we would have missed if we had started building immediately.

# **1\. Learning architecture: now effectively frozen**

I would lock the following as non-negotiable:

> **RECOGNISE → REPRESENT → SELECT → EXECUTE → INTERPRET → VERIFY**

That becomes the universal SDS188 problem-solving spine.

Then the learning pathway is:

> **SOURCE CONTROL → DIAGNOSTIC → TEACH → RETRIEVE → GUIDED EXAMPLE → FADE SUPPORT → INDEPENDENT → CHANGED/UNSEEN → MIXED SELECTION → TIMED CLOSED-BOOK → READY**

Any meaningful mistake branches into:

> **ERROR → EXPLAIN → CONTRAST → RETRY → DELAYED RETEST → TRANSFER RETEST**

And the only mastery vocabulary we need is:

**NOT STARTED → UNDERSTAND → RETRIEVE → APPLY → STABLE**

with **REPAIR** overriding the state when required.

**A1S2 READY is separate.**

That distinction is excellent because somebody can have several green-looking chapters and still not be assessment-ready.

The Brain advisory explicitly warns against treating one Final Boss, passive completion, or a revealed solution as mastery.

---

# **2\. One important correction to our original idea**

I had originally envisaged something fairly rich in dashboards, progress tracking, labs, etc.

The Brain audit is right that we should **cut that down**.

We should **not** build:

* XP/streaks/confetti;  
* giant analytics dashboards;  
* an AI tutor inside the HTML;  
* a full calculator emulator;  
* a fake Excel application;  
* 20 mastery states;  
* elaborate animations;  
* progress earned by reading;  
* progress earned by clicking “done”;  
* progress earned by revealing answers.

The sophistication should be **under the hood in the evidence logic**, not on screen.

The home page can still be attractive, but the dominant card should basically say:

> ### **DO THIS NOW**

> Mixed method-selection — Ch 6 \+ 7  
>  **Why:** independent method selection has not yet been demonstrated.  
>  **Do:** identify the method and justify it before calculating.  
>  **Stop when:** finish the set and repair any selection error.

That is far more useful than seventeen charts.

---

# **3\. Phase 3 source audit — major result**

I inspected the contents of the A1S2 folder rather than simply assuming the existing Chapter 7 work was current.

## **Current source status**

| Chapter | Status | Verdict |
| ----- | ----- | ----- |
| **6** | 🟢 **SOURCE READY** | Strongest source pack |
| **7** | 🟢/🟠 **SOURCE READY — EXISTING HTML NEEDS PATCHING** | Major current-2026 omission found |
| **8** | 🟠 **SOURCE PARTIAL / LEGACY-SUPPORTED** | Enough to start mapping, not enough to freeze |
| **9** | 🔴 **SOURCE MISSING** | Must remain empty |

That changes our build strategy quite materially.

---

# **4\. Chapter 6 — excellent source coverage**

### **🟢 SOURCE READY**

Chapter 6 is in very good shape.

The folder contains a **current 2026 Group 3 Chapter 6 document**, rather than us relying only on the older 2023 slides. Its structure includes:

* normal distributions;  
* properties and parameters;  
* standard normal;  
* forward normal probabilities;  
* inverse normal / finding x;  
* normality evaluation;  
* normal approximation to the binomial;  
* uniform distribution;  
* exponential distribution.

The current material explicitly includes Excel routes such as `NORM.S.DIST`, `NORM.DIST`, `NORM.S.INV` and `NORM.INV`.

That is especially important because the official framework says A1S2 is computer-based and **primarily focused on Excel competency**.

### **Even better: Chapter 6 has actual Excel practice files**

I inspected both:

* `Chapter 6 - Excel examples.xlsx`  
* `Chapter 6 - Excel examples (Solutions).xlsx`

They contain real exercises on:

* normal probabilities;  
* inverse normal/percentiles;  
* normal probability plots;  
* the j/(n+1) probability construction;  
* corresponding inverse z-values.

And Tutorial 6 has actual datasets for:

* Steel;  
* Utility;  
* Wait.

So Chapter 6 can support a **real Excel training lane**, not an invented one.

### **Lecturer transcript adds useful assessment-specific detail**

The transcript reinforces:

* HP 10bII+ probability procedures;  
* why right tails require the complement;  
* \< versus ≤ for continuous variables;  
* exponential unit consistency;  
* the difference between Poisson event counts and exponential waiting times.

It also contains an exponential percentile procedure that the lecturer specifically notes was not in the slides but had assessment relevance.

### **Chapter 6 verdict**

**We can fully design and populate Chapter 6 now.**

---

# **5\. Chapter 7 — we found the first major existing-HTML defect**

This is the most important finding from the audit so far.

## **🟢 The folder contains current 2026 Chapter 7 notes**

Inside the ZIP is:

**`SDS Chapter 7 NOTES.pdf`**

It is not merely the old 2023 deck.

And the current 2026 notes include a section that the previously created Chapter 7 HTML **does not properly cover**:

> ### **What if σ is unknown?**

The 2026 notes introduce the **Student t distribution** for the sample mean:

T=s/n​Xˉ−μ​

with:

df=n−1

and include Excel use such as `T.DIST(...)`.

### **🚨 Existing Chapter 7 FINAL HTML omission**

The current final Chapter 7 manual is otherwise substantial — sampling means, CLT, sample proportions, two independent means, FPC, probability/inverse problems, tutorial work, etc.

But my inspection found that its structure was built primarily around the older Chapter 7 source set and **does not contain a proper current-2026 σ-unknown / Student-t teaching lane**.

That means:

> **The Chapter 7 HTML is NOT something we should simply paste into the master.**

It is a strong source of reusable teaching content, but it needs an academic patch first.

This is exactly why doing the audit before building the master was worthwhile.

---

# **6\. Existing Chapter 7 HTML — learning-system audit**

There is a second problem.

The final Chapter 7 HTML is actually quite good as a **study manual**.

It already has things such as:

* strong distinctions between X and Xˉ;  
* SE;  
* CLT;  
* proportions;  
* two means;  
* FPC;  
* inverse problems;  
* traps;  
* worked tutorial problems;  
* a mixed mastery section.

But its current progress logic is **not suitable for our new master system**.

### **Current logic**

It dynamically gives sections completion controls and stores section completion in `localStorage`.

In effect:

> Read section → mark it done → progress increases.

### **New logic**

Must instead be:

> Demonstrate evidence → mastery changes.

So we should **reuse its academic content, not its mastery architecture**.

The following existing behaviours are going:

**❌ section checkbox \= progress**

**❌ viewed notes \= mastery**

**❌ Show Answer \= progress**

**❌ one end-of-chapter test \= stable**

And replacing them with:

**✅ retrieval evidence**

**✅ independent application evidence**

**✅ altered-wording evidence**

**✅ delayed evidence**

**✅ mixed-selection evidence**

**✅ timed evidence**

This directly follows the Brain advisory.

---

# **7\. Chapter 8 — we must be more careful than I originally thought**

### **🟠 SOURCE PARTIAL**

There is a **lot** of Chapter 8 material, but most of the central lecture/tutorial pack currently present is from earlier years rather than a confirmed current 2026 Chapter 8 release.

We have:

* `SDS 188 chapter8_2023.pdf`  
* `SDS 188 Tutorial 8_2022.pdf`  
* t-table;  
* finite-population material;  
* bootstrapping material;  
* confidence intervals for totals/auditing material.

The 2023 Chapter 8 deck gives a substantial scope:

* point vs interval estimates;  
* estimator properties;  
* confidence intervals for μ, σ known;  
* confidence intervals for μ, σ unknown;  
* Student t;  
* confidence intervals for π;  
* determining sample size;  
* finite population correction;  
* bootstrapping.

The old Tutorial 8 also tests known-σ mean intervals, interpretation, sample-size determination, proportions, t-critical values, unknown-σ intervals and finite-population problems.

The separate finite-population extract confirms the \>5% FPC rule and extends it to confidence intervals/sample-size calculation.

And the bootstrapping extract supplies the formal resampling process.

So **we are not blind on Chapter 8**.

But because A1S2 is specifically an Excel-oriented 2026 assessment, I do not want us to mark Chapter 8 green until we get the **current 2026 Chapter 8 lecture/practical material**.

### **Therefore**

We can:

**✅ build its source map**

**✅ prepare its architecture**

**✅ reuse verified stable concepts provisionally**

but:

**❌ do not freeze it academically yet**

**❌ do not invent 2026 Excel procedures from old sources**

---

# **8\. Chapter 9**

### **🔴 SOURCE MISSING**

This remains exactly as the Brain Project recommended:

> **CHAPTER 9 — SOURCE MISSING**

> Academic content intentionally unavailable.  
>  No formulas, questions, prerequisites or explanations inferred.

It also means the global system must **refuse to display “A1S2 READY” while Chapter 9 remains source missing**.

That is a hard readiness blocker, not a reflection of your personal ability.

---

# **9\. Folder hygiene audit also found actual junk**

There are two files in the SDS A1S2 tree that are **not Statistics files at all**.

### **Remove/move out of SDS**

**`Lecture Notes/Lesson 4_Tutorial _4.docx`**

I inspected the document content. It is about:

* Xero;  
* inventory levels;  
* customer returns;  
* Tutorial 4\.

That's accounting/DLA-type material, not SDS188.

And:

**`Admin/Lesson 4 An Introduction.mp4`**

I inspected the video frame.

It literally shows the **Xero dashboard** and a document titled around:

> Lesson 4 — Inventory Levels and Customer Returns

So that is also unrelated.

Those should leave the SDS source folder.

---

# **10\. There are also multiple exact duplicates**

I hash-checked the extracted folder.

There are exact duplicate copies of, among other things:

* the Chapter 8 t-table;  
* the finite-populations document;  
* bootstrapping;  
* confidence intervals for totals;  
* Tutorial 8;  
* Chapter 8 2023 slides;  
* Tutorial 6 PDFs;  
* Tutorial 6 solutions;  
* `T06-data.xlsx`.

There is even a `TUT 7` folder containing duplicated **Tutorial 6** material.

Nothing needs to be deleted recklessly, but the final source tree should not contain five indistinguishable copies of the same source.

### **Recommended structure**

SDS188 Semester 2/  
│  
├── 00\_ADMIN/  
│  
├── 01\_SOURCE\_REGISTER/  
│  
├── CH06\_CURRENT/  
├── CH07\_CURRENT/  
├── CH08\_CURRENT\_OR\_PROVISIONAL/  
├── CH09\_WAITING/  
│  
├── EXISTING\_HTML\_REUSE/  
├── SECONDARY\_REFERENCE/  
└── ARCHIVE\_DUPLICATES/

I would **archive duplicates rather than permanently delete them until the build is frozen**.

---

# **11\. Another source-control issue: Studocu**

The folder also contains:

**`a1s2-final-exam-revision-understanding-statistics-sampling-distributions.pdf`**

Its first page identifies it as a **Studocu** download and states that it is not sponsored or endorsed by the university.

That does not mean it is useless.

It means:

> **REFERENCE ONLY**

It should never be allowed to override:

2026 notes → tutorials → official solutions → lecturer material.

---

# **12\. What we should reuse from existing work**

We absolutely should **not throw Chapter 7 away**.

### **KEEP \+ REUSE**

**`SDS188_Chapter7_Sampling_Distributions_MasterStudyManual_v1_1_FINAL.html`**

Use it as the Chapter 7 **content library**.

### **KEEP \+ REUSE**

**`SDS188_Chapter7_Cover_and_Formula_Sheet_v1_1_FINAL.html`**

and its final Print PDF.

They are useful revision/reference artifacts. The formula sheet already has a strong object → centre → SE → conditions → probability workflow.

### **ARCHIVE**

Older versions of the same HTML/manual/cover sheet.

No reason for the master build to carry both generations.

---

# **13\. Revised master architecture after Brain \+ source audit**

We can now make this much more precise.

## **A. SOURCE CONTROL**

Each chapter carries one completely separate property:

SOURCE READY  
SOURCE PARTIAL  
SOURCE MISSING  
AUDIT REQUIRED

This has **nothing to do with your knowledge**.

Current:

CH6  SOURCE READY  
CH7  SOURCE READY  
CH8  SOURCE PARTIAL  
CH9  SOURCE MISSING  
---

## **B. KNOWLEDGE STATE**

Separately:

NOT STARTED  
UNDERSTAND  
RETRIEVE  
APPLY  
STABLE

REPAIR override  
---

## **C. EVIDENCE FLAGS**

Each attempt can store things like:

correct  
solutionViewed  
hintUsed  
independent  
selectionCorrect  
representationCorrect  
calculationCorrect  
interpretationCorrect  
toolProcedureCorrect  
familiar  
changedWording  
mixed  
delayed  
timed  
confidence

That means something like:

> correct answer \+ Show Solution clicked beforehand

can record:

correct \= true  
solutionViewed \= true  
masteryUpgrade \= false

Exactly what we want.

---

# **14\. The biggest A1-specific addition: Excel must be first-class**

This is now even more important after the source audit.

The module framework doesn't merely say Excel exists.

It says A1S1/A1S2 are **primarily focused on competency in Excel**.

Therefore the final system should track two distinct dimensions:

### **Statistical competence**

> Do I know what needs to be done?

and:

### **Excel/tool competence**

> Can I execute it correctly?

For example:

> **Question:** Find P(X\<9).

First:

**What distribution?**

**What region?**

**What parameters?**

**Which probability is being requested?**

Only after that:

> Enter the Excel formula.

Then later:

> no formula hint.

Eventually:

> Solve.

That prevents Excel from doing the thinking for you.

---

# **15\. The final system should have about seven major areas — not 30**

I now recommend:

### **1 — DO THIS NOW**

One deterministic next action.

### **2 — LEARN**

Chapters 6–9.

### **3 — PRACTISE**

Recognition, formula selection, calculations, Excel, interpretation.

### **4 — RETRIEVAL**

R1 / R2 / R3 and delayed testing.

### **5 — REPAIR**

Only unresolved errors.

### **6 — A1 TRAINING**

Mixed → unlabelled → altered → closed-book → timed.

### **7 — READ / PRINT**

Clean manual/reference mode.

That's enough.

---

# **16\. Build status after this audit**

We are **not ready to code the final master yet**, but we are much closer.

### **✅ Done**

**Phase 1 — Overall project plan**

**Phase 2 — Brain learning-design advisory**

**Phase 3A — Folder inventory**

**Phase 3B — source-control audit**

**Phase 3C — existing Chapter 7 HTML audit**

**Phase 3D — duplicate/unrelated-file identification**

### **Next**

## **Phase 4 — Build the exact source-to-skill coverage matrix**

This is the last major planning step before I want us writing the builder specification.

For every examinable skill we now map:

SKILL  
→ controlling source  
→ lecturer emphasis  
→ tutorial question(s)  
→ Excel requirement  
→ calculator requirement  
→ formula  
→ common traps  
→ diagnostic item  
→ teaching block  
→ retrieval item  
→ independent problem  
→ transfer problem  
→ repair path  
→ A1 simulation eligibility

For example:

CH6.NORMAL.RIGHT\_TAIL  
Source: 2026 Ch6 §1.3  
Tutorial: T6 Q1c, Q2a etc.  
Recognise: "greater than"  
Represent: P(X \> c)  
Select: standard normal / transform  
Excel: NORM.DIST or NORM.S.DIST \+ complement  
Trap: returns left-tail probability  
Transfer: changed context  
Repair: tail contrast drill

Once we have **that matrix**, the master HTML specification becomes deterministic rather than vague.

---

# **My current verdict**

The Brain response is **accepted with very few changes** and should control the learning design.

More importantly, the source audit has already justified the entire cautious workflow:

> **If we had simply merged the existing Chapter 7 HTML, we would have carried forward a current-2026 Student-t/unknown-σ coverage gap and a passive-completion mastery system.**

So we caught something meaningful before it reached the master.

The master system should now be treated as **a source-controlled assessment trainer**, not simply a Semester 2 textbook in HTML form.

**The next thing I want us to do is the full Ch6–8 source-to-skill coverage matrix and reuse map.** After that we can write the definitive build specification without another architecture rethink.

My response: do the full ch6-8 source to skill coverage matrix and reuse map

Chatgpt response: Yes — this is the **full source-to-skill contract for Chapters 6–8**, plus the **reuse map for the material already built**. I would treat this as the academic/content blueprint that the eventual HTML builder must follow.

The governing learning design remains the Brain Project architecture: **RECOGNISE → REPRESENT → SELECT → EXECUTE → INTERPRET → VERIFY**, with evidence progressing from teaching through independent, changed, mixed and timed work; revealed solutions do not count as mastery.

One assessment-specific rule sits above everything else: the 2026 framework says the A1 assessments are computer-based and are **primarily focused on Excel competency**, while tutorials are supposed to be attempted independently before practical solutions are shown.

# SDS188 A1S2 — Source-to-Skill Contract v1

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

# SDS188 Semester 2 Master Learning System

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

# PHASE 4 — Design the actual Master HTML architect…

# **PHASE 4 — Design the actual Master HTML architecture**

Only after the Brain \+ source audit do we freeze this.

My provisional architecture is:

## **HOME — Mission Control**

Not a giant contents page.

It should immediately show:

**A1S2 · 29 AUGUST · CHAPTERS 6–9 · CLOSED BOOK**

Then:

* days remaining;  
* current readiness;  
* chapter readiness;  
* repair queue;  
* retrieval queue;  
* latest practice result;  
* weakest skill;  
* **DO THIS NOW**;  
* A1S2 Ready / Not Ready.

And **Chapter 9 should visibly say:**

> 🔒 SOURCE NOT YET AVAILABLE  
>  No content generated. Add official material when released.

That protects us against accidental AI syllabus invention.

---

# **The mastery engine**

I would provisionally retain the architecture:

**NOT STARTED → UNDERSTAND → RETRIEVE → APPLY → STABLE**

with:

**REPAIR** as an override state.

But the Brain Project gets to challenge this before we freeze it.

Crucially, states are **evidence based**.

For example:

### **UNDERSTAND**

Can identify and explain the idea with support.

### **RETRIEVE**

Can reproduce the rule/formula/process without seeing it.

### **APPLY**

Can solve a new problem independently.

### **STABLE**

Can solve a changed problem again later.

### **REPAIR**

A meaningful error occurred and must be corrected and retested.

Clicking "I understand" earns essentially nothing.

---

# **Every concept should follow one teaching cycle**

Instead of pages and pages of notes:

### **1\. SEE**

Concise explanation.

### **2\. SAY**

Explain what the concept means aloud.

### **3\. RECOGNISE**

"What kind of problem is this?"

### **4\. CHOOSE**

Choose the distribution/formula/procedure **before numbers are inserted**.

### **5\. SOLVE WITH SUPPORT**

Worked example.

### **6\. FADED EXAMPLE**

Some steps missing.

### **7\. SOLO**

No help.

### **8\. TRANSFER**

Same concept, unfamiliar wording/context.

### **9\. RETRIEVE LATER**

Question returns later.

That is much closer to *learning statistics* than producing prettier notes.

---

# **The single most important SDS feature: QUESTION ROUTER**

Stats questions often become difficult because you don't know **what kind of problem you are looking at**.

So before calculation, the HTML should train:

> **WHAT IS THE RANDOM OBJECT?**

For example:

**individual X?**

**sample mean X̄?**

**sample proportion p?**

**difference X̄₁ − X̄₂?**

Then:

> **WHAT DISTRIBUTION / METHOD?**

Then:

> **WHAT IS THE CENTRE?**

Then:

> **WHAT IS THE SPREAD / STANDARD ERROR?**

Then:

> **WHAT REGION DOES THE WORDING DESCRIBE?**

Then calculate.

The existing Chapter 7 formula sheet is already organised around this kind of chain: identify the random object → centre → standard error → conditions → standardise → probability/boundary → interpret.

I want that logic expanded into an **interactive decision trainer**, not merely left on a sheet.

---

# **FORMULA TRAINER**

There should be two completely different formula views.

### **Learning view**

Explains:

* what each symbol means;  
* when the formula is used;  
* when **not** to use it;  
* how to distinguish similar formulas;  
* dimensional/logic check.

### **Retrieval view**

Hidden formula.

You must reconstruct/select it.

Then reveal.

### **Selection drills**

The system presents a question **without asking you to calculate**:

> Which formula/model would you use?

This targets a major source of stats errors earlier than arithmetic.

---

# **VISUAL PROBABILITY LAB**

For Chapters 6–7 especially, we should have interactive normal curves.

You read:

> "greater than"

and must shade the correct tail.

Or:

> "between"

and identify both boundaries.

Only then calculate.

This directly attacks:

* wrong tail;  
* forgotten complement;  
* confusion between X and Z;  
* wrong bounds.

---

# **HP 10bII+ TRAINER**

The framework identifies the HP 10bII+ as the compulsory calculator for the module.

So the system should include:

**Concept → formula → calculator sequence → answer → interpretation**

but gradually remove prompts.

Eventually:

> "Calculate."

No key sequence shown.

That ensures calculator knowledge becomes automatic rather than a crutch.

---

# **EXCEL LAB**

Because the official framework says A1 assessments are computer-based and primarily test competency involving Excel, Excel cannot be an appendix.

For each relevant technique we should have:

**QUESTION → statistical reasoning → Excel command → expected output → interpretation**

And drills like:

> Which Excel function?

> What arguments go where?

> What does TRUE mean here?

> Which result represents the requested probability?

> Find the error in this formula.

That matters particularly for an EMSLearn/computer-based format.

---

# **TRAP LAB**

This should be a major section, not a tiny "common mistakes" box.

Examples:

**variance \= 36**

→ σ \= 6, not 36\.

**one observation**

→ use σ.

**sample mean of n observations**

→ use σ/√n.

**above**

→ complement.

**probability supplied and boundary unknown**

→ inverse problem.

**population normal**

→ X̄ normal for valid sample sizes.

**CLT**

→ sampling distribution becomes approximately normal, not the population.

And every trap you personally make during practice should be added automatically to **My Traps**.

---

# **Tutorial integration**

Tutorials should not sit at the end like optional worksheets.

They become part of the mastery engine.

Each tutorial question gets tagged by skill:

> T7 Q1a → sample mean / below  
>  T7 Q1b → sample mean / between  
>  T7 Q1c → sample mean / above  
>  T7 Q1d → inverse sample mean

etc.

Then the HTML can say:

> You keep missing inverse-normal questions.  
>  Do **T6 Q3c → T7 Q1d → unseen repair question**.

That is far more useful than "Chapter 7 \= 73% complete."

---

# **ERROR ENGINE**

Every meaningful wrong answer should be classified.

Not simply ❌.

Possible causes:

* **CONCEPT**  
* **QUESTION TYPE**  
* **FORMULA**  
* **CONDITION**  
* **TAIL / REGION**  
* **SUBSTITUTION**  
* **CALCULATOR**  
* **EXCEL**  
* **ARITHMETIC**  
* **INTERPRETATION**  
* **RUSHING**

Then the repair route depends on the error.

A tail error shouldn't send you back to reread an entire chapter.

It should send you to:

**region drill → similar question → delayed retest.**

---

# **A1S2 Exam Mode**

This is crucial.

The system needs a separate **CLOSED-BOOK MODE**.

Once entered:

* no notes;  
* no formulas unless officially allowed;  
* no hints;  
* no explanations;  
* one answer commitment;  
* timed;  
* Chapters mixed;  
* wording altered;  
* confidence recorded;  
* solutions inaccessible until submission.

Afterward it produces:

### **Performance breakdown**

**Score:** 78%

**Knowledge errors:** 3

**Selection errors:** 2

**Calculation errors:** 1

**Interpretation errors:** 1

**High-confidence wrong answers:** 2 ← dangerous

Then it generates a repair route.

---

# **Readiness should be difficult to earn**

I do **not** want:

> Chapter 7: 100% ✅

because every card has been clicked.

Instead something closer to:

### **A1 READY**

Only when:

* no major prerequisite gaps;  
* formulas retrieved without help;  
* question types recognised;  
* chapter transfer questions passed;  
* calculator procedures independent;  
* Excel procedures independent where relevant;  
* no unresolved repair items;  
* delayed retrieval completed;  
* at least two mixed closed-book assessments passed;  
* no critical high-confidence misconceptions.

I'd rather the HTML tell you **NOT READY** truthfully than give us a pretty 97% progress bar that means nothing.

---

# **A1 and A2 should be separate routes inside the same master**

This is important.

## **Route 1 — A1S2**

**Now → 29 August**

Chapters:

**6 → 7 → 8 → 9**

Assessment mode:

**computer / EMSLearn / closed-book / invigilated**

## **Route 2 — A2S2**

Activated later.

The framework confirms A2S2 is a **written assessment on 6 November at 14:00**.

But:

> **A2 CONTENT SCOPE \= NOT YET SOURCE CONFIRMED**

So we create the architecture now and populate it only once lecturer material/announcement confirms the scope.

This avoids needing another giant rebuild in October.

# PHASE 5 — Chapter 9 intake protocol

# **PHASE 5 — Chapter 9 intake protocol**

When Chapter 9 arrives, we **do not rebuild the entire system**.

We run:

**SOURCE INTAKE → CHAPTER MAP → CONTENT EXTRACTION → TUTORIAL MAP → FORMULAS → TRAPS → PRACTICE → AUDIT → INSERT**

The HTML should already have a `chapter-9` module waiting.

Until then:

**No AI-created substitute.**

# PHASE 6 — Build only after specification freeze

# **PHASE 6 — Build only after specification freeze**

After Brain review \+ folder audit, we produce a **single frozen builder specification**.

The builder then gets:

* exact content inventory;  
* exact source hierarchy;  
* exact chapter structure;  
* exact mastery logic;  
* exact UI components;  
* exact state/persistence rules;  
* exact formulas;  
* exact questions permitted;  
* exact source references;  
* exact print behaviour;  
* exact A1 exam mode;  
* exact Chapter 9 hold instruction.

At that stage building becomes largely mechanical.

That is how we avoid building version 1, then fixing 40 architectural problems.

---

# PHASE 7 — Three separate QA passes

# **PHASE 7 — Three separate QA passes**

Before calling it final:

### **QA 1 — Academic**

Every formula, condition, example, answer and interpretation checked against sources.

### **QA 2 — Learning design**

Does the system genuinely force retrieval/application or merely look interactive?

### **QA 3 — Technical**

* JS;  
* localStorage;  
* navigation;  
* scoring;  
* repair routing;  
* reset;  
* print;  
* responsive behaviour;  
* no duplicate IDs;  
* no broken controls.

Then an **unseen-user test**:

> Can Nix open this tomorrow and know exactly what to do without needing the chat to explain it?

If not, it isn't frozen.

---

# **The provisional 20-day strategy**

We're roughly **20 days from A1S2**.

I would not divide that into "five days Chapter 6, five days Chapter 7..." because that produces forgetting.

Instead:

### **Stage 1 — Build foundations**

**9–13 Aug**

Master 6 while beginning retrieval of 7\.

### **Stage 2 — Expand \+ interleave**

**14–18 Aug**

6 \+ 7 \+ 8, with mixed retrieval every day.

### **Stage 3 — Integrate Chapter 9**

**as soon as official material becomes available**

Immediate intake and build.

Earlier chapters stay alive through retrieval.

### **Stage 4 — Transfer**

**roughly 20–24 Aug**

Tutorials \+ AF-type problems \+ unseen variants.

Less teaching, much more solving.

### **Stage 5 — Assessment conversion**

**25–28 Aug**

Almost no passive studying.

Mostly:

**CLOSED BOOK → MARK → DIAGNOSE → REPAIR → RETEST**

### **29 Aug**

Assessment.

We will make the exact daily schedule only once we know the actual workload after the folder audit.

---

# **One thing I especially want to preserve**

There are already useful Chapter 7 materials. We **should not throw them away and start again** simply because we're making a master system.

The upcoming audit should identify:

> **What is already excellent?**

> **What can be imported?**

> **What needs patching?**

> **What should be retired?**

The master should be an **integration and upgrade**, not a needless rewrite.

---

## **Our workflow from here**

**We are currently here:**

**① MASTER PLAN ✅**

Next:

**② BRAIN PROJECT ADVISORY ← NOW**

Then bring its response back here.

After that I will:

**③ unpack and perform the full `SDS A1S2.zip` audit**

→ **④ create the source/coverage/reuse matrix**

→ **⑤ reconcile the Brain recommendations with the academic evidence**

→ **⑥ design the exact master HTML blueprint**

→ **⑦ create the builder prompt/specification**

→ **⑧ build**

→ **⑨ academic \+ functional \+ learning-design audit**

→ **⑩ freeze A1 version**

→ **⑪ plug Chapter 9 in when received**

→ **⑫ later expand the same master for A2S2**

I would **not change that order**. It gives us the best chance of getting the architecture right once instead of repeatedly rebuilding it.

# Announcements:

Announcements: 

Good day students 

Welcome to the second semester of Statistics and Data Science 188\. This semester we will cover Chapters 7,8,9,10, 13 and 14\. 

Please take note that some of the assessment dates have been changed and thus the A2S2 will be on the 9th of November at 09:00. 

All students who have to complete the linear programming component, the AF is open until Friday at 11:59PM. 

