
/* SDS188 Chapter 9 bounded completeness patch
   Scope: Chapter 9 content, lessons, official practice and QA only.
   Engine contract: frozen v1.3.1 engine is not edited or replaced. */
(()=>{
  'use strict';
  const APP=window.SDS188;
  const LEARN=window.SDS188_CH9_LEARN_CANDIDATE;
  if(!APP||!LEARN) throw new Error('CH9 completeness patch requires the v1.3.1 SOURCE_READY candidate.');
  if(LEARN.engineBase!=='v1.3.1') throw new Error('Unexpected engine base; patch aborted.');
  if(window.SDS188_CH9_COMPLETENESS_PATCH?.applied) return;

  const clone=o=>JSON.parse(JSON.stringify(o));
  const Q=APP.QUESTIONS;
  const sections=APP.CHAPTERS[9].sections;
  const lessons=LEARN.lessons;
  const getLesson=id=>lessons.find(x=>x.id===id);
  const getSection=id=>sections.find(x=>x.id===id);
  const replaceObject=(target,patch)=>Object.assign(target,patch);

  function installQuestion(baseId,id,patch){
    const base=Q[baseId];
    if(!base) throw new Error(`Missing base question ${baseId}`);
    const q=clone(base);
    Object.assign(q,patch,{id,chapter:9,status:'ACTIVE',validationStatus:'VALIDATED'});
    q.sectionId='C9';
    q.skillIds=[...(patch.skillIds||q.skillIds||[])];
    q.assessesSkillIds=[...(patch.assessesSkillIds||q.skillIds.slice(0,1))];
    q.designatedEvidenceTarget=q.assessesSkillIds.length===1?q.assessesSkillIds[0]:null;
    q.answer=clone(patch.answer||q.answer);
    if(Object.prototype.hasOwnProperty.call(patch,'options'))q.options=clone(patch.options);
    if(q.answer?.type==='numeric'){
      q.responseType='numeric';q.evidenceMode='NUMERIC';q.productionFirst=false;q.learningRole='application';q.type='application';
      delete q.options;
    }else{
      q.responseType='choice';q.evidenceMode='SIMPLE_CHOICE';q.productionFirst=false;
      q.learningRole=patch.type==='conceptual'?'conceptual':'application';
      q.type=patch.type||'conceptual';
    }
    q.evidenceFlags={...(q.evidenceFlags||{}),understandEligible:q.type==='conceptual',retrievalEligible:q.type==='conceptual',familiar:true,changedWording:false,alteredRepresentation:false,unlabelled:false,mixedEligible:true,timedEligible:true,delayedCompatible:true};
    q.variantClass='VERIFIED_ADAPTATION';
    q.changedDimensions=[];
    q.source={...(q.source||{}),...(patch.source||{})};
    q.sourceQuestion=patch.sourceQuestion||q.sourceQuestion;
    q.source.question=q.sourceQuestion;
    q.source.solutionAuthority=patch.source?.solutionAuthority||q.source.solutionAuthority||'derived and independently checked';
    Q[id]=q;
    return q;
  }

  const RAW_Q14='2.109, 2.086, 2.066, 2.075, 2.065, 2.057, 2.052, 2.044, 2.036, 2.038, 2.031, 2.029, 2.025, 2.029, 2.023, 2.020, 2.015, 2.014, 2.013, 2.014, 2.012, 2.012, 2.012, 2.010, 2.005, 2.003, 1.999, 1.996, 1.997, 1.992, 1.994, 1.986, 1.984, 1.981, 1.973, 1.975, 1.971, 1.969, 1.966, 1.967, 1.963, 1.957, 1.951, 1.951, 1.947, 1.941, 1.941, 1.938, 1.908, 1.894';

  // Official Tutorial 9 Q14 — raw-data Student-t task, not a pre-summarised substitute.
  installQuestion('C9-Q14','C9-Q23',{
    skillIds:['C9.27','C9.28','C9.29','C9.30'],assessesSkillIds:['C9.27'],
    prompt:`Tutorial 9 Q14 raw-data test. The 50 consecutive 2-L bottle fills are: ${RAW_Q14}. Test H0: μ=2 versus H1: μ≠2 at α=.05. From the raw data, calculate X̄ and sample s in your scratch work, then enter Tcalc.`,
    answer:{type:'numeric',value:0.114244848,tolerance:0.003},sourceQuestion:'Tutorial 9 Q14',
    source:{file:'Chapter 9/SDS Tutorial 9.pdf',authority:'OFF',year:null,pinpoint:'Q14, pp. 4–5: 50 raw bottle-fill observations; two-tail t test',solutionAuthority:'derived and independently checked'}
  });
  installQuestion('C9-Q21','C9-Q24',{
    skillIds:['C9.30'],assessesSkillIds:['C9.30'],type:'conceptual',
    prompt:'Tutorial 9 Q14: using X̄=2.00072, s≈0.0445637, n=50 gives t≈0.1142 with df=49 and two-tail p≈0.9095. What is the correct α=.05 decision?',
    options:['Do not reject H0; there is insufficient evidence that the mean fill differs from 2 L','Reject H0; there is evidence that the mean fill differs from 2 L','Accept H0 as proven true'],
    answer:{type:'choice',value:'Do not reject H0; there is insufficient evidence that the mean fill differs from 2 L'},sourceQuestion:'Tutorial 9 Q14',
    source:{file:'Chapter 9/SDS Tutorial 9.pdf',authority:'OFF',year:null,pinpoint:'Q14, pp. 4–5: critical-value and p-value approaches',solutionAuthority:'derived and independently checked'}
  });

  // Source deck: two-tail t test has the same same-level CI decision bridge as the Z test.
  installQuestion('C9-Q21','C9-Q25',{
    skillIds:['C9.30'],assessesSkillIds:['C9.30'],type:'conceptual',
    prompt:'Official deck t-test/CI bridge: X̄=172.5, s=15.4, n=25 gives a 95% t interval of approximately (166.1432, 178.8568). For H0: μ=168 versus H1: μ≠168 at α=.05, what is the matching test decision?',
    options:['Do not reject H0 because 168 lies inside the 95% t interval','Reject H0 because 168 lies inside the 95% t interval','Accept H0 because the interval proves μ=168'],
    answer:{type:'choice',value:'Do not reject H0 because 168 lies inside the 95% t interval'},sourceQuestion:'Chapter 9: Connection Between Two-Tail t Tests and Confidence Intervals',
    source:{file:'Chapter 9/SDS chapter9_2023.pdf',authority:'P26-REUSED',year:2023,pinpoint:'Connection Between Two-Tail t Tests and Confidence Intervals; pizza example',solutionAuthority:'official deck calculation / independently checked'}
  });

  // Source deck: complete p-value meaning and explicit five-step workflow.
  installQuestion('C9-Q21','C9-Q26',{
    skillIds:['C9.20'],assessesSkillIds:['C9.20'],type:'conceptual',
    prompt:'Which pair of additional descriptions of the p-value is stated in the official Chapter 9 deck?',
    options:['It is the observed level of significance and the smallest α at which H0 could be rejected','It is P(H0 is true) and the largest α at which H0 could be rejected','It is the confidence coefficient and the probability H1 is true'],
    answer:{type:'choice',value:'It is the observed level of significance and the smallest α at which H0 could be rejected'},sourceQuestion:'Chapter 9 p-value definition',
    source:{file:'Chapter 9/SDS chapter9_2023.pdf',authority:'P26-REUSED',year:2023,pinpoint:'p-value approach: definition, observed level of significance, smallest α',solutionAuthority:'official deck statement'}
  });
  installQuestion('C9-Q21','C9-Q27',{
    skillIds:['C9.21'],assessesSkillIds:['C9.21'],type:'conceptual',
    prompt:'Which sequence matches the official five-step p-value approach?',
    options:[
      'State H0/H1 → choose α and n → choose test statistic/distribution → collect data and compute statistic+p → decide and conclude in context',
      'Collect data → choose α after seeing p → write H1 → choose a test → accept/reject H0',
      'Choose Excel formula → collect data → choose the tail from the sign → compute p → prove H0 or H1'
    ],
    answer:{type:'choice',value:'State H0/H1 → choose α and n → choose test statistic/distribution → collect data and compute statistic+p → decide and conclude in context'},sourceQuestion:'Chapter 9 five-step p-value approach',
    source:{file:'Chapter 9/SDS chapter9_2023.pdf',authority:'P26-REUSED',year:2023,pinpoint:'p-value approach: Steps 1–5',solutionAuthority:'official deck procedure'}
  });

  // Source deck: equivalent success-count form of the one-proportion Z statistic.
  installQuestion('C9-Q16','C9-Q28',{
    skillIds:['C9.35'],assessesSkillIds:['C9.35'],
    prompt:'Use the official count form z=(x−nπ0)/√[nπ0(1−π0)]. For x=88, n=400 and π0=.20, produce Zcalc.',
    answer:{type:'numeric',value:1.0,tolerance:0.003},sourceQuestion:'Chapter 9 proportion Z count form / Tutorial 9 Q17',
    source:{file:'Chapter 9/SDS chapter9_2023.pdf',authority:'P26-REUSED',year:2023,pinpoint:'Hypothesis Tests for Proportions: equivalent x=np count-form Z statistic',solutionAuthority:'official deck formula / independently checked'}
  });

  // Tutorial 9 Q21 — full α=.01 lane and explicit α-power comparison.
  installQuestion('C9-Q20','C9-Q29',{
    skillIds:['C9.40'],assessesSkillIds:['C9.40'],
    prompt:'Tutorial 9 Q21(c): lower-tail test μ0=200, σ=5.71, n=16, α=.01. If the true mean is μ=197 ml, produce the power.',
    answer:{type:'numeric',value:0.411078445,tolerance:0.004},sourceQuestion:'Tutorial 9 Q21(c)',
    source:{file:'Chapter 9/SDS Tutorial 9.pdf',authority:'OFF',year:null,pinpoint:'Q21(c), p. 6: α=.01, true μ=197 ml',solutionAuthority:'derived and independently checked'}
  });
  installQuestion('C9-Q20','C9-Q30',{
    skillIds:['C9.40'],assessesSkillIds:['C9.40'],
    prompt:'Tutorial 9 Q21(d): lower-tail test μ0=200, σ=5.71, n=16, α=.01. If the true mean is μ=194 ml, produce the power.',
    answer:{type:'numeric',value:0.969727553,tolerance:0.004},sourceQuestion:'Tutorial 9 Q21(d)',
    source:{file:'Chapter 9/SDS Tutorial 9.pdf',authority:'OFF',year:null,pinpoint:'Q21(d), p. 6: α=.01, true μ=194 ml',solutionAuthority:'derived and independently checked'}
  });
  installQuestion('C9-Q21','C9-Q31',{
    skillIds:['C9.39'],assessesSkillIds:['C9.39'],type:'conceptual',
    prompt:'Tutorial 9 Q21(e): holding n and the true mean fixed, what happens when α is reduced from .05 to .01?',
    options:['Power decreases and β increases','Power increases and β decreases','Power and β are unchanged'],
    answer:{type:'choice',value:'Power decreases and β increases'},sourceQuestion:'Tutorial 9 Q21(e)',
    source:{file:'Chapter 9/SDS Tutorial 9.pdf',authority:'OFF',year:null,pinpoint:'Q21(e), p. 6: compare α=.05 with α=.01',solutionAuthority:'derived and independently checked'}
  });

  // Tutorial 9 Q22 — second full power application, including close-vs-far alternative contrast.
  installQuestion('C9-Q20','C9-Q32',{
    skillIds:['C9.40'],assessesSkillIds:['C9.40'],
    prompt:'Tutorial 9 Q22(a): lower-tail tyre-life test μ0=25 000 km, σ=3500 km, n=100, α=.05. If the true mean is μ=24 000 km, produce the power.',
    answer:{type:'numeric',value:0.887299157,tolerance:0.004},sourceQuestion:'Tutorial 9 Q22(a)',
    source:{file:'Chapter 9/SDS Tutorial 9.pdf',authority:'OFF',year:null,pinpoint:'Q22(a), p. 7: true μ=24 000 km',solutionAuthority:'derived and independently checked'}
  });
  installQuestion('C9-Q20','C9-Q33',{
    skillIds:['C9.40'],assessesSkillIds:['C9.40'],
    prompt:'Tutorial 9 Q22(b): lower-tail tyre-life test μ0=25 000 km, σ=3500 km, n=100, α=.05. If the true mean is μ=24 900 km, produce the power.',
    answer:{type:'numeric',value:0.087051219,tolerance:0.004},sourceQuestion:'Tutorial 9 Q22(b)',
    source:{file:'Chapter 9/SDS Tutorial 9.pdf',authority:'OFF',year:null,pinpoint:'Q22(b), p. 7: true μ=24 900 km',solutionAuthority:'derived and independently checked'}
  });

  // Official t normality checks and ethics details as explicit retrieval/mastery checks.
  installQuestion('C9-Q21','C9-Q34',{
    skillIds:['C9.29'],assessesSkillIds:['C9.29'],type:'conceptual',
    prompt:'Which normality assessment matches the source guidance before relying on a one-sample t procedure?',
    options:[
      'Compare sample statistics with normal properties, inspect symmetry using a histogram/stem-and-leaf/boxplot, and check whether a normal probability plot is approximately linear',
      'Check only that the mean equals the median exactly',
      'No normality assessment is ever relevant when σ is unknown'
    ],
    answer:{type:'choice',value:'Compare sample statistics with normal properties, inspect symmetry using a histogram/stem-and-leaf/boxplot, and check whether a normal probability plot is approximately linear'},sourceQuestion:'Chapter 9 t-test assumptions / normality assessment',
    source:{file:'Chapter 9/SDS chapter9_2023.pdf',authority:'P26-REUSED',year:2023,pinpoint:'Student-t assumptions: sample statistics, histogram/stem-and-leaf/boxplot, normal probability plot',solutionAuthority:'official deck statement'}
  });
  installQuestion('C9-Q21','C9-Q35',{
    skillIds:['C9.38'],assessesSkillIds:['C9.38'],type:'conceptual',
    prompt:'Which list best reflects the ethical issues explicitly identified in the Chapter 9 deck?',
    options:[
      'Human subjects, data-collection method, test choice, significance level, cleaning/discarding data, and failure to report pertinent findings',
      'Only arithmetic accuracy and spreadsheet formatting',
      'Only choosing whether to use Z or t'
    ],
    answer:{type:'choice',value:'Human subjects, data-collection method, test choice, significance level, cleaning/discarding data, and failure to report pertinent findings'},sourceQuestion:'Chapter 9 ethical issues',
    source:{file:'Chapter 9/SDS chapter9_2023.pdf',authority:'P26-REUSED',year:2023,pinpoint:'Ethical Issues: human subjects through failure to report pertinent findings',solutionAuthority:'official deck statement'}
  });

  // Section-level completeness — bounded to the audited omissions only.
  replaceObject(getSection('9.5'),{
    summary:'Interpret the p-value under H0, know its source synonyms, reconstruct the five-step p-value process, and compare p with α.',
    notes:'The p-value is the probability, assuming H0 is true, of a test statistic equal to or more extreme than observed. The deck also calls it the observed level of significance and the smallest α at which H0 could be rejected. Source workflow: H0/H1 → choose α and n → select statistic/distribution → collect data and compute statistic+p → decide and conclude in context.'
  });
  replaceObject(getSection('9.6'),{
    title:'Two-Tail Z and t Tests ↔ Confidence Intervals',skillIds:['C9.25','C9.30'],
    summary:'Use the same-level CI as a decision cross-check for two-tail Z and Student-t tests.',
    notes:'At the same α/confidence pairing, a two-tail Z or t test rejects H0 when μ0 is outside the corresponding (1−α) confidence interval and does not reject when μ0 lies inside, provided the same model/conditions are used.'
  });
  replaceObject(getSection('9.7'),{
    summary:'Unknown σ selects Student t with df=n−1; normality evidence is checked explicitly.',
    notes:'Use T=(X̄−μ0)/(s/√n), df=n−1. The deck notes that σ is rarely known in real business settings. For the t route, compare sample statistics with normal properties, inspect histogram/stem-and-leaf/boxplot symmetry, and inspect approximate linearity of the normal probability plot; then use T.INV/T.DIST/T.DIST.2T as appropriate.'
  });
  replaceObject(getSection('9.9'),{
    notes:'p=x/n. Check nπ0≥5 and n(1−π0)≥5. Then use Z=(p−π0)/√[π0(1−π0)/n]. Since x=np, the deck also gives the equivalent count form Z=(x−nπ0)/√[nπ0(1−π0)]. Use the critical-value or p-value approach.'
  });
  replaceObject(getSection('9.10'),{
    summary:'Practical meaning, ethical planning, complete β/power computation and sensitivity to α/effect size.',
    notes:'Large n can make tiny effects statistically significant; small n can miss important effects. Plan the goal, hypotheses, tail, random sample, data type, α, sample size/power, procedure and contextual conclusion. Ethical issues named by the deck include human subjects, data collection, test choice, significance level, cleaning/discarding data and failure to report pertinent findings. Tutorial 9 Q21 is covered at α=.05 and α=.01; Q22 supplies the tyre-life power application.'
  });

  // Guided Learn mutations preserve the ten-lesson architecture and all canonical skill IDs.
  replaceObject(getLesson('9.5'),{
    objective:'Define the p-value exactly, know both source synonyms, execute the official five-step p-value process, choose the correct tail, compare p with α, and reconstruct the deck’s Excel route.',
    explain:[
      'The deck defines the p-value as the probability, assuming H0 is true, of obtaining a test statistic equal to or more extreme than the observed one.',
      'The same source also calls the p-value the observed level of significance and the smallest α at which H0 could be rejected. These are alternative descriptions of the same cutoff idea — not probabilities that H0 is true.',
      'Decision rule: if p<α, reject H0; if p≥α, do not reject H0. Two-tail Z p-values count equally extreme outcomes in both directions; a directed one-tail p-value uses only the H1 tail.',
      'Official five-step p-value process: (1) state H0/H1; (2) choose α and n, considering Type I/II consequences; (3) determine the appropriate test statistic and sampling distribution; (4) collect the data and compute the statistic and p-value; (5) make the decision and state the conclusion in context.',
      'For a two-tail Z test, the source Excel route uses (1−NORM.S.DIST(ABS(Zcalc),TRUE))*2. A p-value is never P(H0 is true).'
    ],
    say:'“The p-value is an extremeness probability under H0. It is also the observed significance level and the smallest alpha at which I could reject. I choose hypotheses and alpha before I calculate it.”',
    check:{q:'Which extra source description of a p-value is correct?',options:['The smallest α at which H0 could be rejected','The probability that H0 is true','The probability that H1 is true'],answer:'The smallest α at which H0 could be rejected',why:'The official deck gives this together with “observed level of significance.”'},
    exit:'Move on when you can define a p-value, state both source synonyms, reconstruct the five official steps in order, choose one/two-tail area, and compare p with α.',
    practiceId:'C9-Q27',
    sources:['Official Chapter 9 deck: p-value definition, observed significance level, smallest α, and five-step p-value approach','Official Chapter 9 deck: Excel Z workflow','SDS Tutorial 9 Q7–10']
  });

  replaceObject(getLesson('9.6'),{
    title:'Two-Tail Z and t Tests ↔ Confidence Intervals',skills:['C9.25','C9.30'],
    objective:'Use the source’s same-level confidence-interval equivalence as a conceptual cross-check for both two-tail Z and two-tail Student-t tests.',
    explain:[
      'For a two-sided test at significance α, the corresponding (1−α) confidence interval carries the same decision information when it uses the same model and conditions.',
      'Known σ / Z route: if μ0 lies outside the same-level Z interval, reject H0; if μ0 lies inside, do not reject H0. Tutorial 9 Q10 uses exactly this comparison.',
      'Unknown σ / Student-t route: the deck separately shows the same connection using the t interval. In the pizza example X̄=172.5, s=15.4, n=25, df=24 and t*=2.0639 give about (166.1432,178.8568). Since μ0=168 is inside, the α=.05 two-tail t test does not reject H0.',
      'This equivalence is a same-parameter, same-two-sided-level cross-check; do not apply it mechanically to a one-tail test or a mismatched confidence level.'
    ],
    visual:'ciBridge',
    say:'“For the same two-tail alpha, Z or t tells the same story as the matching confidence interval: null value outside means reject; inside means do not reject.”',
    check:{q:'A 95% t interval is (166.14,178.86) and H0: μ=168. What does the matching two-tail α=.05 t test do?',options:['Do not reject H0','Reject H0','Accept H0'],answer:'Do not reject H0',why:'168 is contained in the same-level t interval.'},
    worked:{title:'Official two-tail t-test ↔ t-CI bridge',steps:['Pizza example: X̄=172.5, s=15.4, n=25, df=24.','Use t*.975,24≈2.0639.','Margin≈2.0639(15.4/√25)=6.3568.','95% t CI≈(166.1432,178.8568).','The null value μ0=168 lies inside the interval.','Therefore the matching α=.05 two-tail t test does not reject H0.'],answer:'Same evidence, same decision: do not reject H0.',check:'This is the t analogue of the Z/CI connection.'},
    try:{type:'choice',q:'A same-level two-tail t interval excludes μ0. What is the matching t-test decision?',options:['Reject H0','Do not reject H0','The methods must disagree'],answer:'Reject H0',solution:'For the same two-sided level and model, exclusion of μ0 corresponds to rejection.'},
    exit:'Move on when you can use the CI cross-check for both known-σ Z and unknown-σ t tests and state when the equivalence applies.',
    practiceId:'C9-Q25',
    sources:['Official Chapter 9 deck: Connection Between Two-Tail Hypothesis Tests and Confidence Intervals (Z)','Official Chapter 9 deck: Connection Between Two-Tail t Tests and Confidence Intervals','SDS Tutorial 9 Q10(c)–(d)']
  });

  replaceObject(getLesson('9.7'),{
    objective:'Switch correctly from Z to Student t when σ is unknown, use s and df=n−1, assess the source-supported normality condition explicitly, and perform critical-value/p-value/Excel routes from summaries or raw data.',
    explain:[
      'If the population standard deviation σ is unknown and the sample standard deviation s is supplied or must be calculated from raw data, the Chapter 9 mean-test route uses Student t. The deck explicitly notes that in real business settings σ is probably not known; if the population is being estimated, this is the usual route.',
      'T=(X̄−μ0)/(s/√n) and df=n−1. The t distribution accounts for uncertainty from estimating σ with s.',
      'The source requires attention to normality. Compare sample statistics with theoretical normal properties; inspect symmetry with a histogram, stem-and-leaf display or boxplot; and inspect whether the normal probability plot is approximately linear. The deck also notes the t test is usable when the sample is not very small and the population is not very skewed.',
      'For two tails the deck uses T.DIST.2T(ABS(tcalc),df); for critical values it uses T.INV at the appropriate cumulative probability.',
      'Tutorial 9 Q14 is a full raw-data case: you must calculate X̄ and s from the 50 observations before computing t. Do not wait for the question to hand you summary statistics.'
    ],
    visual:'tRoute',
    say:'“Unknown population sigma means Student t. I calculate or use sample s, use df n minus one, and I check normality evidence rather than pretending the assumption does not exist.”',
    check:{q:'Which is the strongest source-aligned t-test normality check?',options:['Combine sample-statistic evidence, histogram/stem-and-leaf/boxplot evidence, and approximate normal-probability-plot linearity','Mean≈median alone proves normality','No check is relevant for t'],answer:'Combine sample-statistic evidence, histogram/stem-and-leaf/boxplot evidence, and approximate normal-probability-plot linearity',why:'The official deck lists these complementary checks.'},
    worked:{title:'Tutorial 9 Q14 — raw-data t test',steps:['Use all 50 bottle-fill values, not a pre-supplied summary.','Compute X̄=2.00072 L.','Compute sample s≈0.0445637 L.','H0: μ=2; H1: μ≠2; n=50 so df=49.','T=(2.00072−2)/(0.0445637/√50)≈0.1142.','At α=.05, |t|<t*.975,49≈2.0096; two-tail p≈0.9095.','Do not reject H0.'],answer:'There is insufficient evidence at α=.05 that the population mean fill differs from 2 L.',check:'The distinctive skill is deriving X̄ and s from the raw observations before using Student t.'},
    try:{type:'numeric',q:'For Tutorial 9 Q14, enter Tcalc after calculating X̄ and s from the 50 observations.',answer:0.114244848,tolerance:0.003,solution:'X̄=2.00072, s≈0.0445637, df=49, so t≈0.1142.'},
    exit:'Move on when “σ unknown” automatically triggers t and df=n−1, you can name all source normality checks, and you can execute the route when only raw observations are supplied.',
    practiceId:'C9-Q23',
    sources:['Official Chapter 9 deck: “Do You Ever Know σ?” and Student-t assumptions','Official Chapter 9 deck: t normality assessment and Excel workflow','SDS Tutorial 9 Q12–14, including raw-data Q14']
  });

  replaceObject(getLesson('9.9'),{
    explain:[
      'A one-proportion test is for categorical data with two outcomes, such as defective/not defective or prefer R100/not.',
      'Calculate the sample proportion p=x/n. Under H0, the standard error uses the null population proportion π0 — not the observed p.',
      'Before the normal approximation, the deck requires nπ0≥5 and n(1−π0)≥5.',
      'Proportion form: Z=(p−π0)/√[π0(1−π0)/n]. Because x=np, the deck also gives the exactly equivalent count form Z=(x−nπ0)/√[nπ0(1−π0)].',
      'After either form, use H1 to choose the rejection region or p-value. The two forms must give the same Z.'
    ],
    say:'“For a proportion test I compute p=x over n, check both null expected counts, and I can standardise either p or the success count x — the two Z formulas are equivalent.”',
    check:{q:'What is the numerator of the source count-form Z statistic?',options:['x−nπ0','p−π0','x−p'],answer:'x−nπ0',why:'The count form centres the observed success count x at its null expected count nπ0.'},
    try:{type:'numeric',q:'Use the count form for x=88, n=400, π0=.20. Enter Zcalc.',answer:1,tolerance:0.003,solution:'z=(88−80)/√(400·.2·.8)=8/8=1.'},
    exit:'Move on when you can check both expected counts and produce the same Z from the proportion form and the source count form.',
    practiceId:'C9-Q28',
    sources:['Official Chapter 9 deck: hypothesis tests for proportions, expected-count checks and both Z forms','SDS Tutorial 9 Q17–18']
  });

  replaceObject(getLesson('9.10'),{
    objective:'Calculate β and power across different α and true-parameter values, explain the design trade-offs, distinguish statistical from practical significance, and apply every ethics/planning issue named in the source.',
    explain:[
      'Power is 1−β: the probability of correctly rejecting a false H0. Compute the critical sample-statistic boundary under H0, then evaluate the non-rejection probability under the specified true distribution to obtain β.',
      'All else equal, a true parameter farther from the null is easier to detect and therefore gives higher power. Increasing α increases power; reducing α makes rejection harder and raises β for fixed n. A correctly directed one-tail test has more power in that direction than a two-tail test.',
      'Tutorial 9 Q21 makes the α trade-off concrete. At α=.05, power is about .6761 when μ=197 and .9947 when μ=194. At α=.01, the corresponding powers fall to about .4111 and .9697. The stricter α reduces Type I risk but increases β.',
      'Tutorial 9 Q22 shows the effect-size issue: for μ0=25 000, σ=3500, n=100 and α=.05, power is about .8873 if the true mean is 24 000 but only about .0871 if it is 24 900. A close alternative is hard to detect.',
      'Statistical significance is not automatically practical importance. Very large n can make tiny effects significant; weak power can miss effects that matter.',
      'The source planning questions include study goal, hypotheses, tail, random sample, data type, α, sample size/power, appropriate procedure and contextual conclusion. Ethical issues explicitly include human subjects, data-collection method, test choice, significance level, cleaning/discarding data and failure to report pertinent findings.'
    ],
    visual:'power',
    say:'“Power is one minus beta. Farther alternatives, larger n and larger alpha make detection easier. But significance is not practical importance, and ethical choices begin before I calculate anything.”',
    check:{q:'For fixed n and true mean, what happens to power when α is reduced from .05 to .01?',options:['Power decreases','Power increases','Power is unchanged'],answer:'Power decreases',why:'A stricter rejection threshold reduces Type I risk but raises Type II risk for the fixed design.'},
    worked:{title:'Tutorial 9 Q21 — complete α comparison',steps:['Lower-tail test: μ0=200, σ=5.71, n=16.','At α=.05: power≈.6761 for true μ=197 and ≈.9947 for true μ=194.','At α=.01: power≈.4111 for true μ=197 and ≈.9697 for true μ=194.','The farther true mean 194 is easier to detect than 197.','Reducing α from .05 to .01 lowers power and increases β at either true mean.'],answer:'Power depends on the decision threshold and how far reality is from H0; α and β trade off for fixed n.',check:'Do not compare only α values — compare the same true mean across α levels and compare effect sizes within each α.'},
    try:{type:'numeric',q:'Tutorial 9 Q22: μ0=25 000, σ=3500, n=100, α=.05, lower-tail test. If true μ=24 900, enter the power.',answer:0.087051219,tolerance:0.004,solution:'The critical X̄≈24 424.30. Under true μ=24 900, P(X̄<24 424.30)≈.0871, so β≈.9129.'},
    exit:'Move on when you can compute a critical boundary, β and power; explain the α/effect-size/tail trade-offs; distinguish practical from statistical significance; and name the source planning and ethics checks.',
    practiceId:'C9-Q32',
    sources:['Official Chapter 9 deck: power solution and power comparisons','Official Chapter 9 deck: statistical vs practical significance, planning and ethics','SDS Tutorial 9 Q21(a–e) and Q22(a–b)']
  });

  LEARN.version='1.1-source-ready-completeness-patched';
  LEARN.completenessPatch={
    id:'CH9-COMPLETE-1',applied:true,date:'2026-08-14',engineBase:'v1.3.1',
    engineModified:false,
    addedOfficialPractice:['C9-Q23','C9-Q24','C9-Q25','C9-Q26','C9-Q27','C9-Q28','C9-Q29','C9-Q30','C9-Q31','C9-Q32','C9-Q33','C9-Q34','C9-Q35'],
    fixed:['Tutorial 9 Q14 raw-data t test','Tutorial 9 Q21 α=.01 + comparison','Tutorial 9 Q22 power','two-tail t test ↔ t-CI bridge','explicit t normality checks','full p-value meanings','five-step p-value process','proportion count-form Z','Do You Ever Know σ note','specific planning/ethics list']
  };

  const almost=(a,b,t=1e-9)=>Math.abs(Number(a)-Number(b))<=t;
  function patchTests(){
    const r=[],test=(name,fn)=>{try{r.push({name,pass:Boolean(fn()),detail:''})}catch(e){r.push({name,pass:false,detail:e.message})}};
    test('PATCH 1 frozen canonical skill registry unchanged at 40 Chapter 9 skills',()=>Object.values(APP.SKILLS).filter(s=>s.chapter===9).length===40);
    test('PATCH 2 ten-lesson Chapter 9 architecture unchanged',()=>lessons.length===10&&lessons.every((x,i)=>x.id===`9.${i+1}`));
    test('PATCH 3 all 13 bounded completeness tasks installed',()=>LEARN.completenessPatch.addedOfficialPractice.every(id=>Boolean(Q[id])));
    test('PATCH 4 Tutorial 9 Q14 raw-data t anchor is correct',()=>almost(Q['C9-Q23'].answer.value,0.114244848,1e-9)&&/50 consecutive/i.test(Q['C9-Q23'].prompt));
    test('PATCH 5 Tutorial 9 Q14 p-value/decision anchor is present',()=>/0\.9095/.test(Q['C9-Q24'].prompt)&&Q['C9-Q24'].answer.value.startsWith('Do not reject'));
    test('PATCH 6 Q21 α=.01 power anchors are complete',()=>almost(Q['C9-Q29'].answer.value,0.411078445,1e-9)&&almost(Q['C9-Q30'].answer.value,0.969727553,1e-9));
    test('PATCH 7 Q22 tyre power anchors are complete',()=>almost(Q['C9-Q32'].answer.value,0.887299157,1e-9)&&almost(Q['C9-Q33'].answer.value,0.087051219,1e-9));
    test('PATCH 8 Z and t confidence-interval bridges both present',()=>getLesson('9.6').title.includes('Z and t')&&/166\.1432/.test(getLesson('9.6').worked.steps.join(' ')));
    test('PATCH 9 t normality checks are explicit',()=>['histogram','stem-and-leaf','boxplot','normal probability plot'].every(x=>getLesson('9.7').explain.join(' ').toLowerCase().includes(x)));
    test('PATCH 10 p-value source meanings and five-step sequence are explicit',()=>/observed level of significance/i.test(getLesson('9.5').explain.join(' '))&&/smallest α/i.test(getLesson('9.5').explain.join(' '))&&/five-step/i.test(getLesson('9.5').explain.join(' ')));
    test('PATCH 11 equivalent proportion count form is explicit',()=>getLesson('9.9').explain.join(' ').includes('x−nπ0'));
    test('PATCH 12 named ethics issues are explicit',()=>['human subjects','data-collection','test choice','significance level','cleaning/discarding','failure to report'].every(x=>getLesson('9.10').explain.join(' ').toLowerCase().includes(x)));
    test('PATCH 13 Chapter 8 tutorial exclusions remain untouched',()=>LEARN.tutorialScopeExclusions.join('|')==='Q15|Q16|Q19|Q20');
    return r;
  }

  const PATCH_API={applied:true,id:'CH9-COMPLETE-1',engineBase:'v1.3.1',engineModified:false,runQATests:patchTests,get questions(){return LEARN.completenessPatch.addedOfficialPractice.map(id=>Q[id])}};
  window.SDS188_CH9_COMPLETENESS_PATCH=PATCH_API;

  // Re-render content only. The frozen engine functions, state schema and mastery rules are not replaced.
  if(typeof window.renderAll==='function') window.renderAll();
  const qaButton=document.getElementById('run-qa');
  if(qaButton){
    qaButton.textContent='RUN 80 ENGINE + 13 CH9 PATCH TESTS';
    qaButton.onclick=()=>{
      const base=APP.runQATests();
      const patch=patchTests();
      const results=[...base,...patch],passed=results.filter(x=>x.pass).length;
      const out=document.getElementById('qa-results');
      if(out) out.innerHTML=`<p><strong>${passed}/${results.length} passed</strong></p><ol>${results.map(x=>`<li>${x.pass?'PASS':'FAIL'} · ${String(x.name).replace(/[<>&]/g,m=>({'<':'&lt;','>':'&gt;','&':'&amp;'}[m]))}${x.detail?` — ${String(x.detail).replace(/[<>&]/g,m=>({'<':'&lt;','>':'&gt;','&':'&amp;'}[m]))}`:''}</li>`).join('')}</ol>`;
    };
  }
})();
