

/* SDS188 Chapters 8–9 final bounded completeness repair
   Purpose: restore the independently audited Chapter 8 provisional practice pack,
   add the four official Tutorial 9 carry-over Chapter 8 items, add HOLD-only auditing
   extension evidence, and close Chapter 9 Tutorial 9 Q21(a)/(b) numeric retrieval.
   Frozen v1.3.1 engine functions are not edited or replaced. */
(()=>{
  'use strict';
  const APP=window.SDS188;
  const CH8=window.SDS188_CH8_PROVISIONAL;
  const CH9=window.SDS188_CH9_COMPLETENESS_PATCH;
  if(!APP||!CH8||!CH9) throw new Error('Final completeness patch requires the canonical v1.3.1 + CH8 provisional pack + CH9 completeness patch.');
  if(window.SDS188_CH8_CH9_FINAL_PATCH?.applied) return;
  const {QUESTIONS:Q,VARIANTS:V,SKILLS,CHAPTERS,SOURCES}=APP;
  const clone=o=>JSON.parse(JSON.stringify(o));
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  // Preserve the current 2026 transcript support already present in this canonical base.
  const transcriptNotes={
    '8.4':' Current 2026 Transcript 10 also supports the known-sigma → Z route.',
    '8.5':' Current 2026 Transcript 10 also supports the unknown-sigma → Student-t route.',
    '8.6':' Current 2026 Transcripts 10–11 support the sample-proportion centre, SE, approximation checks and confidence-interval structure.',
    '8.7':' Current 2026 Transcript 11 supports mean sample-size planning and the margin/confidence-width trade-off.',
    '8.8':' Current 2026 Transcript 11 supports proportion sample-size planning and conservative p=.5 when no estimate is supplied.'
  };
  Object.entries(transcriptNotes).forEach(([id,note])=>{const s=CHAPTERS[8].sections.find(x=>x.id===id);if(s&&!s.notes.includes('Current 2026 Transcript'))s.notes+=note});

  const sourceT9={file:'Chapter 9/SDS Tutorial 9.pdf',authority:'OFF',year:null,pinpoint:'Tutorial 9 carry-over Chapter 8 items Q15–Q20',question:'OFFICIAL_ORIGINAL',solutionAuthority:'derived_and_independently_checked'};
  const sourceTotals={file:'Chapter 8/Confidence Intervals for Totals_Vertrouensintervalle vir totale.pdf',authority:'TXT/HOLD',year:2020,pinpoint:'Section 8.6, equations 8.6–8.11 and worked examples',question:'HOLD_ONLY_REFERENCE',solutionAuthority:'source_statement_or_independently_checked'};

  function commonQ(id,skillIds,prompt,responseType,answer,status='PROVISIONAL',source=sourceT9){
    return {id,chapter:8,sectionId:'8',skillIds:[...skillIds],assessesSkillIds:[skillIds[0]],designatedEvidenceTarget:skillIds.length===1?skillIds[0]:null,semanticTarget:skillIds[0],semanticAuthenticity:'SOURCE_SPECIFIC',source:clone(source),status,validationStatus:'VALIDATED',variantClass:status==='HOLD'?'HOLD_ONLY_REFERENCE':'OFFICIAL_ORIGINAL',prompt,responseType,learningRole:'application',diagnosticDimension:'UNKNOWN',answer:clone(answer),evidenceMode:responseType==='numeric'?'NUMERIC':responseType==='choice'?'SIMPLE_CHOICE':'SHORT_TEXT',evidenceFlags:{understandEligible:false,retrievalEligible:false,familiar:true,changedWording:false,alteredRepresentation:false,unlabelled:false,mixedEligible:status!=='HOLD',timedEligible:false,delayedCompatible:false,repairRoles:['immediate']},productionFirst:false,provisionalEvidence:true,finalReadinessEligible:false,coverageStatus:status==='HOLD'?'HOLD':'PROVISIONAL'};
  }

  // Official Tutorial 9 items that belong academically to Chapter 8, not Chapter 9.
  Q['T9-C8-Q15']=commonQ('T9-C8-Q15',['C8.34'],'Tutorial 9 Q15 (Chapter 8 carry-over): n=200 and x=50. Construct the 95% confidence interval for the population proportion. Enter lower|upper.', 'structured_text',{type:'structured_text',value:'0.18999|0.31001',aliases:['0.1900|0.3100','0.1899886|0.3100114']});
  Q['T9-C8-Q16A']=commonQ('T9-C8-Q16A',['C8.34'],'Tutorial 9 Q16(a) (Chapter 8 carry-over): in n=500 drivers, p=.46 report having had to swerve. Construct the 95% confidence interval for the population proportion. Enter lower|upper.', 'structured_text',{type:'structured_text',value:'0.41631|0.50369',aliases:['0.4163|0.5037','0.4163143|0.5036857']});
  Q['T9-C8-Q16B']=commonQ('T9-C8-Q16B',['C8.34','C8.36'],'Tutorial 9 Q16(b) (Chapter 8 carry-over): in n=500 drivers, p=.10 know someone involved in an accident while talking on a cell phone. Construct the 99% confidence interval. Enter lower|upper.', 'structured_text',{type:'structured_text',value:'0.06544|0.13456',aliases:['0.0654|0.1346','0.0654416|0.1345584']});
  Q['T9-C8-Q19']=commonQ('T9-C8-Q19',['C8.52','C8.75'],'Tutorial 9 Q19 (Chapter 8 auditing carry-over, HOLD extension): N=11054 work orders; n=750 audited; x=87 irregular. Under the supplied finite-population >5% rule, use the proportion CI with FPC and convert the limits to total work orders. Enter lower|upper total.', 'structured_text',{type:'structured_text',value:'1037.66|1526.86',aliases:['1038|1527','1037.7|1526.9']},'HOLD',sourceT9);
  Q['T9-C8-Q20']=commonQ('T9-C8-Q20',['C8.34','C8.54','C8.75'],'Tutorial 9 Q20 (Chapter 8 auditing carry-over, HOLD extension): N=1864 loans; n=85; x=5 defaults. Because n/N≈.0456 does not trigger the supplied >5% FPC rule, construct the ordinary 90% proportion interval and convert its limits to a total number of loans. Enter lower|upper total.', 'structured_text',{type:'structured_text',value:'31.40|187.90',aliases:['31.4|187.9','31|188']},'HOLD',sourceT9);

  // Chapter 9 Q21(a)/(b): full numeric retrieval-grade power items, closing the independent-audit asymmetry.
  function installCh9Power(id,sourceQuestion,trueMu,value){
    const base=Q['C9-Q29']; if(!base) throw new Error('Missing C9-Q29 template');
    const q=clone(base);
    Object.assign(q,{id,chapter:9,sectionId:'C9',skillIds:['C9.40'],assessesSkillIds:['C9.40'],designatedEvidenceTarget:'C9.40',semanticTarget:'C9.40',status:'ACTIVE',validationStatus:'VALIDATED',variantClass:'VERIFIED_ADAPTATION',sourceQuestion,prompt:`Tutorial 9 ${sourceQuestion}: lower-tail test H0: μ=200, σ=5.71, n=16, α=.05. If the true mean is μ=${trueMu}, calculate the power 1−β. Enter the power.`,responseType:'numeric',learningRole:'application',type:'application',evidenceMode:'NUMERIC',productionFirst:false,answer:{type:'numeric',value,tolerance:.004,aliases:[]},source:{file:'Chapter 9/SDS Tutorial 9.pdf',authority:'OFF',year:null,pinpoint:`${sourceQuestion}: power at α=.05`,question:sourceQuestion,solutionAuthority:'derived_and_independently_checked'},evidenceFlags:{...(q.evidenceFlags||{}),understandEligible:false,retrievalEligible:true,familiar:true,changedWording:false,alteredRepresentation:false,unlabelled:false,mixedEligible:true,timedEligible:true,delayedCompatible:true}});
    delete q.options; Q[id]=q;
  }
  installCh9Power('C9-Q36','Q21(a)',197,0.676064762);
  installCh9Power('C9-Q37','Q21(b)',194,0.994740716);

  // HOLD-only auditing/totals ladder. These tasks exist for source completeness and optional study,
  // but remain excluded from ordinary routing, mastery, simulation and final readiness.
  const HOLD_SPECS={
    69:{fact:'Population-total point estimate = N Xbar.',wrong:'Population total is estimated by Xbar/N.',aPrompt:'Source example: N=5000 invoices and Xbar=110.27. Enter the point estimate of the population total.',aAnswer:551350,mode:'numeric',vPrompt:'If N=800 and Xbar=75, enter the estimated total.',vAnswer:60000,vMode:'numeric'},
    70:{fact:'Population-total CI = N Xbar ± N t*(s/√n)√[(N−n)/(N−1)].',wrong:'Construct the mean CI and leave it on the per-item scale.',aPrompt:'Source Example 8.7 reports a 95% population-total CI for N=1000, Xbar=1076.39, s=273.62, n=50. Enter lower|upper.',aAnswer:'1000558|1152222',mode:'structured_text',vPrompt:'What transformation converts a mean CI into a population-total CI when the same finite-population formula applies?',vAnswer:'multiply the centre and margin by N',vMode:'structured_text'},
    71:{fact:'Audit difference Di = audited value − original recorded value.',wrong:'Audit difference is original value − audited value.',aPrompt:'An audited amount is 109.03 and the recorded amount is 100.00. Enter Di.',aAnswer:9.03,mode:'numeric',vPrompt:'Audited 92, recorded 100. Enter Di.',vAnswer:-8,vMode:'numeric'},
    72:{fact:'For audit differences, calculate Dbar from all n differences (including zeros) and the sample SD of those differences.',wrong:'Ignore zero-difference items when computing Dbar and SD.',aPrompt:'In the source worked example with 100 invoices and total sample difference 90, enter Dbar.',aAnswer:.9,mode:'numeric',vPrompt:'The source reports SD of the 100 differences as what value?',vAnswer:2.752,vMode:'numeric'},
    73:{fact:'Total-difference CI = N Dbar ± N t*(SD/√n)√[(N−n)/(N−1)].',wrong:'Use Dbar ± t*SD without multiplying by N or dividing by √n.',aPrompt:'Source worked example: N=5000, n=100, Dbar=.90, SD=2.752. Enter the reported 95% total-difference CI lower|upper.',aAnswer:'1797.09|7202.91',mode:'structured_text',vPrompt:'What does the centre N·Dbar estimate?',vAnswer:'the total difference in the population',vMode:'structured_text'},
    74:{fact:'One-sided noncompliance upper bound = p + zα√[p(1−p)/n]√[(N−n)/(N−1)].',wrong:'A one-sided upper bound splits α/2 into both tails.',aPrompt:'Source example: N=10000, n=400, x=20, 95% one-sided confidence. Enter the reported upper bound.',aAnswer:.0676,mode:'numeric',vPrompt:'Source Example 8.9 reports the 95% upper bound for 8 noncompliant invoices out of 400 as what value?',vAnswer:.0315,vMode:'numeric'},
    75:{fact:'Compare the one-sided upper noncompliance bound with the tolerable exception rate; an upper bound above tolerance fails to establish acceptable compliance.',wrong:'If the point estimate p is below tolerance, compliance is automatically established.',aPrompt:'Upper bound=.0676 and tolerable rate=.06. State the source-aligned conclusion.',aAnswer:'failed to prove compliance; request a larger sample',mode:'structured_text',vPrompt:'Upper bound=.0315 and tolerable rate=.04. State the source-aligned conclusion.',vAnswer:'compliance is adequate',vMode:'structured_text'}
  };
  const holdFlags=role=>({understandEligible:role==='U',retrievalEligible:['R1','R2','D'].includes(role),familiar:role==='A',changedWording:role==='V',alteredRepresentation:role==='V',unlabelled:role==='V',mixedEligible:false,timedEligible:false,delayedCompatible:false,repairRoles:role==='REPAIR'?['immediate']:[]});
  function holdAnswer(mode,val){return mode==='numeric'?{type:'numeric',value:+val,tolerance:.001,aliases:[]}:{type:mode,value:val,aliases:[]}}
  function addHold(id,skillId,role,prompt,answer,mode='structured_text',parent=null){
    const q={id,chapter:8,sectionId:'8.H',skillIds:[skillId],assessesSkillIds:[skillId],designatedEvidenceTarget:skillId,semanticTarget:skillId,semanticAuthenticity:'SOURCE_SPECIFIC',source:clone(sourceTotals),status:'HOLD',validationStatus:'VALIDATED',variantClass:role==='V'?'HOLD_VERIFIED_ADAPTATION_TRANSFER':'HOLD_ONLY_REFERENCE',parentQuestionId:parent,changedDimensions:role==='V'?['context','values or representation']:[],prompt,responseType:mode,learningRole:role==='U'?'conceptual':role==='REPAIR'?'repair':role.startsWith('R')||role==='D'?'retrieval':'application',diagnosticDimension:role==='U'?'RECOGNITION':'UNKNOWN',answer:holdAnswer(mode,answer),evidenceMode:mode==='numeric'?'NUMERIC':'SHORT_TEXT',evidenceFlags:holdFlags(role),productionFirst:false,provisionalEvidence:true,finalReadinessEligible:false,coverageStatus:'HOLD'};
    if(role==='U'){q.responseType='choice';q.options=[HOLD_SPECS[+skillId.split('.')[1]].fact,HOLD_SPECS[+skillId.split('.')[1]].wrong,'This topic has no supplied source.'];q.answer={type:'choice',value:HOLD_SPECS[+skillId.split('.')[1]].fact};q.evidenceMode='SIMPLE_CHOICE'}
    (role==='V'?V:Q)[id]=q; return q;
  }
  Object.entries(HOLD_SPECS).forEach(([n,s])=>{
    const sid=`C8.${n}`,base=`CH8-HOLD-${n}`;
    addHold(`${base}-U`,sid,'U',`Which source statement is correct for ${sid}?`,s.fact,'choice');
    addHold(`${base}-R1`,sid,'R1',`Without notes, state the governing rule for ${sid}.`,s.fact,'structured_text');
    addHold(`${base}-R2`,sid,'R2',`Correct this false statement: ${s.wrong}`,s.fact,'structured_text');
    const a=addHold(`${base}-A`,sid,'A',s.aPrompt,s.aAnswer,s.mode);
    addHold(`${base}-V`,sid,'V',s.vPrompt,s.vAnswer,s.vMode,a.id);
    addHold(`${base}-D`,sid,'D',`Delayed source check: ${s.aPrompt}`,s.aAnswer,s.mode);
    addHold(`${base}-REPAIR`,sid,'REPAIR',`Repair the nearest trap: ${s.wrong}`,s.fact,'structured_text');
  });

  // Add a clearly separated carry-over panel so official T9 Q15/16 are reachable without
  // falsely routing HOLD totals/auditing into the core mastery lane.
  function augmentCarryover(){
    const host=document.getElementById('chapter-content'); if(!host||document.getElementById('chapter-tabs')?.dataset.active!=='8'||document.getElementById('ch8-t9-carryover')) return;
    const html=`<section id="ch8-t9-carryover" class="panel" style="margin-top:1rem;border-left:4px solid var(--gold)"><h3>Tutorial 9 · Chapter 8 carry-over practice</h3><p class="compact">Q15–16 are confidence-interval questions and belong to Chapter 8. Q19–20 are preserved as <strong>HOLD auditing extensions</strong> because the current A1 scope of the totals/auditing lane remains unconfirmed.</p><div class="actions"><button class="secondary" data-q="T9-C8-Q15">Q15 · proportion CI</button><button class="secondary" data-q="T9-C8-Q16A">Q16(a) · 95% proportion CI</button><button class="secondary" data-q="T9-C8-Q16B">Q16(b) · 99% proportion CI</button></div><details><summary>HOLD auditing extensions · Q19–20</summary><div class="actions"><button class="secondary" data-q="T9-C8-Q19">Q19 · irregular work-order total</button><button class="secondary" data-q="T9-C8-Q20">Q20 · defaulted-loan total</button></div></details></section>`;
    host.insertAdjacentHTML('beforeend',html);
    document.getElementById('ch8-t9-carryover').querySelectorAll('button[data-q]').forEach(b=>b.onclick=()=>CH8.startPackTask(b.dataset.q));
  }
  const chapterTabs=document.getElementById('chapter-tabs');
  if(chapterTabs&&!chapterTabs.dataset.ch8PatchHooks){
    chapterTabs.addEventListener('click',()=>setTimeout(()=>{CH8.augmentChapter();augmentCarryover()},0));
    chapterTabs.dataset.ch8PatchHooks='1';
  }
  const readPrintButton=document.querySelector('.nav button[data-view="read-print"]');
  if(readPrintButton&&!readPrintButton.dataset.ch8PatchHook){readPrintButton.addEventListener('click',()=>setTimeout(()=>CH8.augmentPrint(),0));readPrintButton.dataset.ch8PatchHook='1'}
  CH8.augmentChapter(); CH8.augmentPrint(); augmentCarryover();

  function finalTests(){
    const r=[],test=(name,fn)=>{try{r.push({name,pass:Boolean(fn()),detail:''})}catch(e){r.push({name,pass:false,detail:e.message})}};
    test('FINAL 1 Chapter 8 audited provisional pack is installed',()=>Boolean(APP.CHAPTER8)&&Object.values(Q).filter(q=>q.chapter===8).length>400);
    test('FINAL 2 no C8.01-C8.68 skill has zero task/variant coverage',()=>Array.from({length:68},(_,i)=>`C8.${String(i+1).padStart(2,'0')}`).every(id=>[...Object.values(Q),...Object.values(V)].some(q=>q.skillIds?.includes(id))));
    test('FINAL 3 all C8.69-C8.75 HOLD skills now have source-grounded optional tasks',()=>Array.from({length:7},(_,i)=>`C8.${String(i+69).padStart(2,'0')}`).every(id=>[...Object.values(Q),...Object.values(V)].filter(q=>q.skillIds?.includes(id)).length>=7));
    test('FINAL 4 all auditing/totals extension tasks remain HOLD and final-readiness ineligible',()=>[...Object.values(Q),...Object.values(V)].filter(q=>q.skillIds?.some(id=>/^C8\.(69|70|71|72|73|74|75)$/.test(id))).every(q=>q.status==='HOLD'&&q.finalReadinessEligible!==true));
    test('FINAL 5 Tutorial 9 Chapter 8 carry-over Q15/Q16 are installed as PROVISIONAL official originals',()=>['T9-C8-Q15','T9-C8-Q16A','T9-C8-Q16B'].every(id=>Q[id]?.status==='PROVISIONAL'&&Q[id]?.variantClass==='OFFICIAL_ORIGINAL'));
    test('FINAL 6 Tutorial 9 Q19/Q20 remain HOLD extensions rather than core readiness evidence',()=>['T9-C8-Q19','T9-C8-Q20'].every(id=>Q[id]?.status==='HOLD'&&Q[id]?.finalReadinessEligible===false));
    test('FINAL 7 Chapter 9 Q21(a)/(b) α=.05 numeric retrieval items are present',()=>Math.abs(Q['C9-Q36'].answer.value-0.676064762)<1e-9&&Math.abs(Q['C9-Q37'].answer.value-0.994740716)<1e-9);
    test('FINAL 8 existing Chapter 9 α=.01 Q21 items remain unchanged',()=>Math.abs(Q['C9-Q29'].answer.value-0.411078445)<1e-9&&Math.abs(Q['C9-Q30'].answer.value-0.969727553)<1e-9);
    test('FINAL 9 Chapter 8 source gate remains SOURCE_PARTIAL',()=>CHAPTERS[8].status==='SOURCE_PARTIAL'&&APP.calculateA1Readiness().reasons.some(x=>x.includes('Chapter 8')));
    test('FINAL 10 C8.69-C8.75 canonical skill statuses remain HOLD',()=>Array.from({length:7},(_,i)=>SKILLS[`C8.${String(i+69).padStart(2,'0')}`].status==='HOLD').every(Boolean));
    test('FINAL 11 current 2026 transcript support remains represented in Chapter 8 section notes',()=>['8.4','8.5','8.6','8.7','8.8'].every(id=>CHAPTERS[8].sections.find(s=>s.id===id)?.notes.includes('Current 2026 Transcript')));
    test('FINAL 12 no Chapter 6 or 7 object is introduced by this patch',()=>!Object.values(Q).some(q=>/^T9-C8|^CH8-HOLD/.test(q.id)&&[6,7].includes(q.chapter)));
    return r;
  }

  const mobileStyle=document.createElement('style');mobileStyle.textContent='@media(max-width:520px){.spine{grid-template-columns:repeat(3,minmax(0,1fr))}.spine span{min-width:0;overflow-wrap:anywhere}.ch8-pack-dashboard li,#ch8-t9-carryover{overflow-wrap:anywhere}}';document.head.appendChild(mobileStyle);

  const API={applied:true,id:'CH8-CH9-FINAL-CONTENT-1',engineBase:'v1.3.1',engineModified:false,canonicalBaseMd5:'9bd509e30d6aa8682449e7aa1ce1b54e',runQATests:finalTests};
  window.SDS188_CH8_CH9_FINAL_PATCH=API;

  // Combined QA button only; APP.runQATests (the frozen engine QA) is never replaced.
  const qaButton=document.getElementById('run-qa');
  if(qaButton){
    qaButton.textContent='RUN 80 ENGINE + 24 CH8 + 13 CH9 + 12 FINAL TESTS';
    qaButton.onclick=()=>{
      const engine=APP.runQATests(),ch8=APP.CHAPTER8.runContentQA(),ch9=CH9.runQATests(),fin=finalTests(),results=[...engine,...ch8,...ch9,...fin],passed=results.filter(x=>x.pass).length;
      const out=document.getElementById('qa-results'); if(out) out.innerHTML=`<p><strong>${passed}/${results.length} passed</strong> · engine unchanged; Chapter 8, Chapter 9 and final content tests appended.</p><ol>${results.map(x=>`<li>${x.pass?'PASS':'FAIL'} · ${esc(x.name)}${x.detail?` — ${esc(x.detail)}`:''}</li>`).join('')}</ol>`;
    };
  }
  if(typeof window.renderAll==='function') window.renderAll();
})();

