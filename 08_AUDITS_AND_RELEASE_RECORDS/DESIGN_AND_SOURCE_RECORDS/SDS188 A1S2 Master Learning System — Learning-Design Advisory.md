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


SDS188 A1S2 Master Learning System — Learning-Design Advisory
Executive verdict
The core idea is strong, but I would make two non-negotiable changes before this becomes a build specification:
Do not make the HTML more elaborate than the learning problem. For SDS188, the system should behave primarily as a question-recognition → method-selection → execution → interpretation → repair engine, not as a digital textbook, analytics dashboard, or gamified study app.
Do not compensate for missing Chapter 9 with assumptions. Chapter 9 should exist in the architecture as SOURCE MISSING / NOT YET AUDITED, with no inferred topics, prerequisites, formulas, or questions until the official material is obtained.
The most important design principle should be:
The HTML teaches with support, measures with reduced support, and finishes by removing itself.
A student who performs beautifully inside the HTML but cannot solve a fresh closed-book problem after closing it has not achieved the objective.
This fits the existing Brain project boundaries particularly well: missing evidence remains unknown; a revealed answer cannot establish competence; one successful repair attempt does not close a bottleneck; and task-local performance should drive the next action rather than passive completion.
For your particular implementation, I would also externalise multi-step decision processes rather heavily during learning. Your assessment report shows a relative weakness in immediate auditory short-term memory/Digit Span alongside much stronger arithmetic performance, which makes persistent decision strips, written notation, and visible intermediate structure reasonable supports—not because of a supposed “learning style”, but because they reduce unnecessary working-memory load while leaving the mathematical reasoning to you.

1. MUST HAVE
A. One universal SDS problem-solving spine
Almost every quantitative activity should eventually be forced through the same content-neutral reasoning chain:
RECOGNISE → REPRESENT → SELECT → EXECUTE → INTERPRET → VERIFY
During learning, the HTML explicitly prompts each step.
1. RECOGNISE
Ask:
What is this question actually asking for?
What information matters?
What wording is signalling the required statistical operation?
What information is distracting or irrelevant?
2. REPRESENT
Require whatever representation the audited source supports:
notation;
probability statement;
graph/region;
parameters;
known versus unknown quantities.
3. SELECT
Before calculation:
which method?
which formula?
which distribution, where relevant?
which tail/region, where relevant?
why does it apply?
4. EXECUTE
Only now:
calculator;
Excel;
arithmetic;
substitution.
5. INTERPRET
Require the answer in the language/context of the question, not just a number.
6. VERIFY
Ask:
Does the magnitude make sense?
Is the sign/direction plausible?
Is the selected region consistent with the wording?
Did I answer the requested quantity rather than a related one?
By late-stage practice, those prompts disappear entirely.

B. Evidence hierarchy: not all “success” is equal
The HTML must record these as fundamentally different things:
Evidence
What it proves
Saw solution
Nothing about independent competence
Followed solution
Can follow reasoning with support
Explained solution afterwards
Provisional understanding
Recalled method closed-source
Retrieval evidence
Solved familiar independent problem
Application evidence
Solved altered/unlabelled problem
Transfer/discrimination evidence
Solved mixed altered problem after delay
Strong stability evidence
Solved mixed altered problem under representative time
Assessment-performance evidence

Hard rule
If solutionViewed = true before submission:
That attempt can teach, but cannot upgrade mastery.
The same applies to substantial hints.
This should be enforced technically rather than left to self-discipline.

C. Diagnostic system
Do not begin every chapter by reteaching everything.
Each source-ready chapter should start with a small representative diagnostic, sampling distinct operations rather than simply counting questions.
The diagnostic should test, where relevant to the audited material:
concept recognition;
notation;
formula/method selection;
distribution/tail recognition;
visual probability region;
calculation;
calculator/Excel execution;
interpretation.
Diagnostic rules
The diagnostic should initially hide:
chapter subsection;
method name;
formula;
hints.
For every item, record:
correctness;
selected method;
confidence;
support used;
final interpretation;
time if useful.
Then classify the result narrowly.
For example:
Wrong final answer + no working recorded
 → ERROR TYPE UNKNOWN
Not:
→ “formula problem.”
The program must never pretend to diagnose the cause of an error from insufficient evidence. That unknown-safety rule is one of the strongest principles in the existing Brain architecture.

D. Worked-example fading
This should be one of the main teaching engines.
Level 1 — Fully modelled
Show:
question analysis;
representation;
method selection;
formula;
substitution;
tool procedure;
interpretation;
checking.
But require the learner to answer short “why this step?” prompts.
Level 2 — Completion example
Remove selected parts.
The learner completes:
missing notation;
missing region;
formula choice;
one calculation step;
interpretation.
Level 3 — Structural prompts only
Show:
Identify → Represent → Select → Calculate → Interpret
No actual solution steps.
Level 4 — Familiar independent
Same underlying operation, but no scaffold.
Level 5 — Altered/unlabelled
Change the surface structure:
different wording;
different context;
information reordered;
method label removed;
graph ↔ words where academically valid.
Level 6 — Mixed independent
The learner does not know what chapter/subsection produced the question.
Level 7 — Timed mixed
Representative assessment conditions.
Crucial rule
One successful Level 4 problem means:
reduce support and test again.
It does not mean mastery.

E. A genuine repair engine
Every meaningful wrong answer must create future work.
Recommended error families:
Error family
Examples
Recognition
Misread what the question wanted
Selection
Wrong method/formula chosen
Distribution
Wrong distribution selected
Tail/region
Wrong probability region
Notation
Symbols/parameters confused
Formula knowledge
Formula incorrectly recalled
Substitution
Correct formula, wrong values inserted
Procedure
Calculator/Excel sequence incorrect
Arithmetic
Mechanical calculation error
Interpretation
Number correct, conclusion wrong
Graph
Region/axis/quantity represented incorrectly
Rounding/input
Numeric-entry or formatting error
Timing
Correct method but excessive time
Confidence mismatch
Very confident + materially wrong

Repair sequence
A repair should normally be:
ERROR → EXPLAIN → CONTRAST → RETRY → DELAY → TRANSFER
For example, a formula-selection error should not trigger ten identical calculations.
It should trigger:
identify the cue that was missed;
compare two superficially similar cases;
choose between them and explain why;
solve one;
return later;
solve an altered version.
For a procedural keying error, the repair can be much shorter.

F. Formula-selection training
A formula sheet by itself is low-value.
Each formula should eventually be stored internally as a decision object, not just an equation.
For every audited formula, the learning system should teach:
FORMULA
→ What question does this answer?
 → What information must exist?
 → What conditions make it appropriate?
 → What similar formula is it easily confused with?
 → What wording should make me consider it?
 → What would rule it out?
Then train the reverse direction.
Do not repeatedly ask:
“State formula X.”
Also ask:
“Here is a question. Which formula family do you need, and why?”
Then later:
“Here are three methods. Why are two wrong?”
That is much closer to the actual danger you identified: selection failure rather than simple formula amnesia.

G. Graph / visual-region training
Do not make graph activities purely decorative.
For probability-region questions, use the progression:
WORDS → EVENT → REGION → TAIL(S) → METHOD → CALCULATION → INTERPRETATION
Where supported by the audited material, activities can include:
read wording and shade the region;
see a region and describe it in words;
write the symbolic event;
identify which method corresponds to it;
detect a deliberately wrong shaded region;
solve without the visual scaffold.
Important
Require the region decision before calculation.
Otherwise the learner can type something into a calculator, obtain a number and never discover that the conceptual region was wrong.

H. Calculator and Excel training without dependency
Use two separate layers:
Layer 1 — statistical reasoning
The learner must first determine:
what is being calculated;
what method applies;
what inputs mean;
what result should represent.
Layer 2 — tool execution
Only then show calculator/Excel implementation.
Progress through:
VIEW → COMPLETE → RECONSTRUCT → EXECUTE FROM QUESTION
Eventually:
No tool instructions.
The student receives only the problem.
Critical boundary
A correct calculator or Excel output should not establish mastery if the program supplied the correct statistical method automatically.
Likewise, manual calculation should not be forced merely for purity if the official assessment expects a permitted tool. The eventual source audit must determine what tool behaviour A1S2 actually requires.
I would therefore avoid coding assessment-specific Excel/calculator assumptions until that audit.

I. Interpretation gate
A calculation is not finished when the number appears.
Require:
What does this answer mean here?
The system should separately store:
calculationCorrect
interpretationCorrect
Therefore:
correct number + wrong interpretation
 ≠ fully correct problem.
This is particularly important for your 70–100% target because calculation competence can conceal conceptual weakness surprisingly well.

J. Altered-wording training
This is absolutely essential.
Build validated question variations, not merely repeats.
Safe variation dimensions include:
changing context;
changing variable names;
reordering information;
removing the subsection heading;
changing whether information is given verbally or symbolically;
inserting irrelevant information;
asking for interpretation rather than calculation;
graph → words;
words → graph;
asking the method-selection step explicitly;
changing numerical values while preserving the validated structure.
Do not automatically generate statistics questions with AI
Unless those variants are checked against official material.
A beautifully adaptive system containing subtly invalid statistics questions would be worse than a small verified question bank.

K. Closed-book mode
There should be a prominent:
CLOSE THE NOTES
mode.
It must disable:
formula reference;
worked examples;
chapter labels;
hints;
glossary;
method names;
explanation panes.
The learner should repeatedly encounter:
Can I do this if the HTML disappears?
That is the actual target.

2. SHOULD HAVE
These are valuable after the core engine works.
Confidence calibration
Before substantive questions:
Guessing
Unsure
Fairly sure
Very sure
Pair it with actual performance.
Repeated:
Very sure + wrong
should trigger a misconception/discrimination check, not a motivational message.
Repeated:
Unsure + independently correct
should trigger another independent problem rather than unnecessary reteaching.

Question-trap laboratory
Especially useful for an EMSLearn assessment.
Include verified examples of:
tempting wrong formula;
wrong-tail distractor;
wrong-distribution distractor;
correct calculation answering the wrong quantity;
plausible rounding option;
answer produced by a common procedural error.
After submission, ask:
What mistake would produce each distractor?
That transforms MCQ distractors into learning material.

Numeric-entry discipline
Train:
calculate at adequate precision;
interpret;
apply the required rounding/format only once the official requirements are known;
enter exactly what is requested.
Do not invent EMSLearn formatting rules before the source audit.

Scratch workspace
A persistent scratch area should allow:
notation;
small diagrams;
intermediate calculations;
reasoning notes.
This reduces unnecessary working-memory demands without doing the reasoning on the learner's behalf. Given the cognitive profile in the supplied report, that is a sensible implementation choice.

“Say it before reveal”
Use selectively:
Before revealing the answer, explain aloud why you chose this method.
Keep it to perhaps 20–60 seconds.
Do not require recordings or automatic speech analysis.
The later independent question establishes correctness.

Error fingerprint
The system can show a simple factual summary such as:
Recent errors:
 3 selection
 2 interpretation
 1 procedure
This can help route practice.
Do not turn it into:
“You are a distribution-selection learner.”

Source and content status
Every chapter should have an internal status:
SOURCE READY
SOURCE PARTIAL
SOURCE MISSING
AUDIT REQUIRED
At present:
Chapter 9 = SOURCE MISSING.
That is a content-control fact, not a mastery state.

3. DO NOT BUILD / LOW VALUE
This is where I would be strict.
Do not build:
a global “87% mastered” score;
XP, streaks, coins or achievement badges;
confetti;
a giant analytics dashboard;
a complicated AI tutor inside the HTML;
automatic AI-generated statistics questions;
a huge searchable formula encyclopedia;
a full Excel clone;
a full calculator emulator unless later evidence shows it materially improves practice;
dozens of mastery sublevels;
microphone scoring;
automatic psychological profiling from mistakes;
forced study timers on every activity;
fixed 25-minute Pomodoro mechanics;
dozens of charts tracking study behaviour;
elaborate animations;
“completed” status from page scrolling;
progress from clicking Show solution;
permanent prerequisite locks;
a separate game for every chapter;
a second full set of notes inside Learn Mode duplicating Read Mode.
Especially do not build a “smart error diagnosis” that guesses from the final answer.
If a learner submits 0.0314, there may be many reasons it is wrong.
Without working or a diagnostic follow-up:
cause = unknown
That is scientifically and educationally much safer.

4. Recommended mastery-state architecture
I would not create a seven- or eight-stage SDS-only mastery vocabulary.
Keep the existing Brain vocabulary for consistency:
NOT STARTED → UNDERSTAND → RETRIEVE → APPLY → STABLE
with:
REPAIR as an override.
Then keep assessment evidence separate.
State definitions
NOT STARTED
No valid learning evidence.
UNDERSTAND
Can explain the concept/method correctly and pass an immediate conceptual check without reading the answer.
RETRIEVE
Can reconstruct the relevant idea/method/formula from memory.
APPLY
Can independently solve a representative familiar problem.
STABLE
Performance survives:
delay;
reduced support;
changed wording/unseen representation;
mixed selection.
REPAIR
Recent representative evidence reveals a meaningful error that requires retesting.

Separate evidence flags
Attach flags such as:
solutionViewed
independent
familiar
changedWording
mixed
delayed
timed
interpretationCorrect
selectionCorrect
toolProcedureCorrect
This gives you the distinctions you want without multiplying mastery states.

Assessment readiness is not another mastery state
Create a separate gate:
A1S2 READY
Require something like:
all required chapters source-ready;
no major open repair affecting assessed work;
appropriate concepts at least APPLY/STABLE;
altered/unseen performance demonstrated;
mixed selection demonstrated;
interpretation demonstrated;
closed-book evidence;
representative timed evidence.
The exact academic coverage cannot be finalised until Chapter 9 and the official sources are audited.

5. Recommended structure for a single chapter
Each chapter should feel like a training course, not a long scrolling document.
1. Chapter Gate
Show:
source status;
what the learner will need to demonstrate once source-audited;
prerequisite warnings;
current next task.
For Chapter 9 today:
SOURCE MISSING — academic content intentionally unavailable.

2. Diagnostic
A compact representative sample.
Output:
what can tentatively be skipped;
what needs teaching;
what needs verification;
what enters repair.

3. Learn blocks
Each concept uses:
EXPLAIN → SAY → CHECK → EXAMPLE → FADE
No passive 30-minute reading sections.

4. Recognition and selection lab
Question stems only.
Require:
method;
reason;
formula/distribution/tail where relevant.
No calculations initially.
This may be the highest-value part of the system given the failure modes you identified.

5. Graph / representation lab
Words ↔ notation ↔ visual region.

6. Calculation lab
Independent numerical execution.

7. Tool lab
Calculator/Excel implementation after reasoning.

8. Interpretation lab
Give results and ask what they mean.
Sometimes no calculation at all.

9. Worked-example fading ladder
Full → partial → prompted → independent → altered → mixed.

10. Chapter mixed set
Do not label subsection or method.

11. Chapter Final Boss
Closed-source, altered wording, mixed tasks.
No hints.

12. Repair queue
Only actual unresolved errors.

13. Chapter exit
Possible states:
Needs teaching
 Building
 Independent on familiar tasks
 Stable on changed/mixed tasks
 Repair required
No percentage required.

6. Mixed A1S2 assessment preparation
Chapter-by-chapter competence is not enough.
The assessment-preparation layer should progressively destroy contextual clues.
Stage A — labelled mixed practice
Questions from several chapters, but chapter/topic labels remain.
Purpose: integrate calculation.
Stage B — unlabelled mixed practice
No chapter names.
Purpose: selection.
Stage C — altered wording
Same validated academic operation, different surface form.
Purpose: transfer.
Stage D — trap sets
MCQ/numeric-entry distractors based on known error patterns.
Purpose: discrimination.
Stage E — mini closed-book blocks
Short, mixed independent blocks.
Purpose: concentration and switching.
Stage F — full simulation
Representative EMSLearn-style conditions as far as verified.
Currently known:
closed book;
invigilated;
computer based;
Chapters 6–9;
approximately 90-minute announced session window.
Do not invent anything beyond that.
If your actual approved assessment time differs because of formal concessions, the simulator should eventually use the official confirmed personal time, not an assumed value.

Simulation review
After every simulation, divide errors into:
Knowledge gap
Didn't know the concept/method.
Selection gap
Knew it but chose the wrong thing.
Execution gap
Correct method; procedural/arithmetic error.
Interpretation gap
Correct work; wrong meaning/conclusion.
Time-pressure gap
Correct untimed, deteriorated under timing.
Attention/read-error
Misread or omitted key information.
Then repair only what failed.
Do not respond to a 70% simulation by making the learner reread all four chapters.

7. Recommended 20-day progression
This assumes Day 1 = 9 August and the final preparation day is 28 August, with A1S2 on 29 August.
The exact chapter allocation must remain flexible until Chapter 9 arrives.
Day
Date
Main objective
1
9 Aug
Freeze learning architecture; baseline diagnostic on source-ready Ch 6–8; identify major error families
2
10 Aug
First targeted teaching/repair from diagnostic; begin Chapter 9 source acquisition as an urgent content dependency
3
11 Aug
Ch 6–8 weakest area: UNDERSTAND → RETRIEVE; formula/method-selection work
4
12 Aug
Independent familiar problems; interpretation gate; first delayed retrieval from Days 1–3
5
13 Aug
Next weak area; graph/region + recognition/selection practice where source-supported
6
14 Aug
Worked-example fading; calculator/Excel reconstruction; repair recurring errors
7
15 Aug
Closed-source mixed Ch 6–8 set; no chapter labels; analyse error fingerprint
8
16 Aug
Repair day: only weaknesses exposed by mixed work; delayed retests
9
17 Aug
Changed-wording/transfer practice across source-ready content
10
18 Aug
Chapter 9 should ideally be source-ready by here. Diagnostic + first teaching if obtained
11
19 Aug
Chapter 9 teaching/application OR, if still unavailable, strengthen Ch 6–8 while treating the missing source as a readiness blocker
12
20 Aug
Chapter 9 fading + earlier-chapter spaced retrieval; start four-chapter integration if possible
13
21 Aug
Full unlabelled Chapters 6–9 mixed set; selection emphasis
14
22 Aug
MCQ/numeric-entry trap lab + interpretation-only questions + targeted repair
15
23 Aug
First substantial closed-book mixed simulation, initially untimed or lightly timed if accuracy is not stable
16
24 Aug
Simulation repair; reproduce every material error without notes
17
25 Aug
First representative timed simulation if untimed readiness is sufficient
18
26 Aug
Deep repair from timed simulation; altered versions of failed items; short delayed retests
19
27 Aug
Final substantial representative closed-book simulation; focus on pacing and switching
20
28 Aug
Light mixed retrieval + formula/method discrimination + unresolved-error check; no large new build and no marathon rereading

29 August
The learning system should no longer be teaching you.
You should be able to close it.

Spacing inside those 20 days
I would keep R1 / R2 / R3, but treat dates as scheduler defaults, not scientific proof of mastery.
For example:
R1: next available study session;
R2: roughly 2–3 days after successful R1;
R3: roughly 5–7 days later;
REPAIR override: brings the item forward;
a failed delayed check restarts repair rather than merely adding another tick.
Because the assessment is close, spacing needs to fit the remaining calendar. The evidence requirement matters more than slavishly obeying an exact interval. The existing Brain audit correctly warns against turning arbitrary spacing intervals into mastery rules.

8. WHAT SHOULD I DO NOW? router
This needs to be brutally simple.
The system should return one primary task.
Recommended deterministic priority:
Priority 1 — Source blocker
If assessed material is not source-ready:
Resolve the required source gap.
Currently Chapter 9 is such a gap.
This is a build/readiness issue, not evidence that you personally “don't know Chapter 9.”

Priority 2 — Open high-impact REPAIR
Choose the unresolved error most likely to corrupt multiple downstream problems.
Examples of generic high-impact types:
wrong method selection;
distribution/tail confusion;
notation errors;
formula choice;
recurring tool-procedure errors.

Priority 3 — Due delayed retest
If an item needs a delayed check:
do that before more teaching.

Priority 4 — Required content not yet independently applied
Route:
UNDERSTAND → RETRIEVE → APPLY

Priority 5 — APPLY but not STABLE
Give:
changed wording;
reduced cues;
unlabelled/mixed task.

Priority 6 — Stable individually but not mixed
Give a mixed discrimination set.

Priority 7 — Stable untimed but not timed
Give timed practice.

Priority 8 — Ready
Give brief maintenance retrieval and stop.

The next-task card should say only:
DO THIS NOW
 Mixed method-selection set — Chapter X / Y
Why: Two recent problems used the correct calculations after the method was supplied, but independent method selection has not yet been demonstrated.
Do: Choose the method and justify it before calculating.
Stop when: Complete the set and repair any selection error.
That is much better than opening a dashboard with 27 statistics.

9. Major weaknesses / risks in the proposed approach
1. Chapter 9 is currently the biggest structural risk
No learning architecture can compensate for missing assessed material.
If Chapter 9 arrives very late, it may:
require prerequisite restructuring;
alter the mixed-question bank;
change time allocation;
expose previously unknown weak areas.
Therefore source acquisition for Chapter 9 is now time-sensitive.

2. The HTML itself could become the procrastination mechanism
This is the biggest danger I see.
You have 20 days.
A sophisticated statistics OS is valuable only if it rapidly increases actual problem attempts.
By around the first few days, I would freeze:
navigation;
mastery engine;
error system;
next-task router;
fading model.
After that, improvements should overwhelmingly be:
verified questions + verified explanations + verified answer logic.
Not visual polish.
If a feature takes three hours to build but saves 20 seconds per study session, cut it.

3. Multiple-choice performance can create false confidence
Recognition is easier than production.
Therefore the HTML should frequently require:
choose method / formula / tail / region before options appear
and:
calculate before seeing MCQ options.
Only later present the answer choices.

4. Heavy scaffolding can itself become dependence
A perfect six-step on-screen checklist can improve practice while simultaneously teaching:
“Wait until the checklist tells me what to do.”
So support must actually fade.
By the final week, mixed questions should begin essentially with:
Solve this.

5. Tool competence can conceal statistical weakness
Typing the right Excel function or calculator command is not the same as knowing why it is appropriate.
Conversely, knowing the statistics but repeatedly keying the tool incorrectly can still cost marks.
Track those as separate evidence channels.

6. Error tracking can become too detailed
Do not spend two minutes classifying a one-line arithmetic slip.
The error system should be as detailed as needed to determine the next useful action—and no more.

7. A single “Final Boss” is insufficient
A final mixed test can be passed partly by luck or convenient question sampling.
Readiness should come from a pattern of independent evidence:
delayed;
altered;
mixed;
timed.
Not one glorious final run.

Final recommended architecture
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
NOT STARTED → UNDERSTAND → RETRIEVE → APPLY → STABLE, with REPAIR as an override and A1S2 READY as a separate assessment-readiness conclusion.
That is enough architecture. I would not add another learning-system layer beyond this unless the later source audit exposes a genuine SDS188-specific need.
The next logical phase is therefore not coding yet: audit the SDS A1S2 folder against the official academic requirements, establish exactly what is source-ready for Chapters 6–8, identify what Chapter 9 material is missing, and then convert this advisory + that source audit into one deterministic build specification.



