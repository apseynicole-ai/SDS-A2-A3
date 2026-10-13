
'use strict';
(()=>{
  const APP=window.SDS188, CH8=window.SDS188_CH8_PROVISIONAL, PRIOR=window.SDS188_CH8_CH9_FINAL_PATCH;
  if(!APP||!CH8||!PRIOR||window.SDS188_FINAL_MASTERY_INTEGRATION)return;
  const {SKILLS,QUESTIONS:Q,VARIANTS:V,CHAPTERS}=APP;
  const CORE_IDS=Array.from({length:68},(_,i)=>`C8.${String(i+1).padStart(2,'0')}`);
  const HOLD_RE=/^C8\.(69|70|71|72|73|74|75)$/;
  const allTasks=()=>[...Object.values(Q),...Object.values(V)];
  const task=id=>Q[id]||V[id];
  const clone=o=>JSON.parse(JSON.stringify(o));
  const coreTask=q=>q?.chapter===8&&q.skillIds?.some(id=>CORE_IDS.includes(id))&&!q.skillIds.some(id=>HOLD_RE.test(id));
  const roleId=(sid,role)=>`CH8-${sid.split('.')[1]}-${role}`;
  const targetPrefix=(sid)=>`Canonical target — ${SKILLS[sid].canonicalName}. `;
  const text=v=>String(v??'').trim();
  const numericLike=v=>text(v)!==''&&Number.isFinite(+v);

  function addAlias(q,...vals){
    if(!q?.answer)return;
    q.answer.aliases=[...new Set([...(q.answer.aliases||[]),...vals.flat().filter(v=>v!==undefined&&v!==null).map(v=>String(v).trim()).filter(Boolean)])];
  }
  function synonymAliases(v){
    const s=String(v??'').trim(), out=new Set([s]);
    const rules=[
      [/confidence interval/ig,'CI'],[/population mean/ig,'mean'],[/population proportion/ig,'proportion'],[/sample mean/ig,'xbar'],[/sample proportion/ig,'p'],[/standard error/ig,'SE'],[/finite population correction/ig,'FPC'],
      [/approaches zero/ig,'tends to zero'],[/reduces/ig,'decreases'],[/increases/ig,'gets larger'],[/decreases/ig,'gets smaller'],[/with replacement/ig,'sampling with replacement'],[/without replacement/ig,'sampling without replacement'],
      [/long-run interval procedure/ig,'long-run performance of the interval procedure'],[/population not normal/ig,'non-normal population'],[/not supported/ig,'condition not satisfied'],[/supported because/ig,'valid because']
    ];
    for(const [re,r] of rules){if(re.test(s)){re.lastIndex=0;out.add(s.replace(re,r));re.lastIndex=0}}
    if(s.includes(';'))out.add(s.replace(/;/g,','));
    if(s.includes('|'))out.add(s.replace(/\|/g,','));
    out.add(s.replace(/\s+/g,' '));
    return [...out];
  }

  const targetedAliases={
    'C8.03':['expected value equals the parameter','the estimator is centred on the population parameter','E(estimator)=parameter'],
    'C8.04':['estimation error tends to zero as n increases','the estimator gets closer to the parameter as sample size grows','consistent estimator'],
    'C8.05':['the unbiased estimator with smaller variance is more efficient','smaller variance means greater relative efficiency'],
    'C8.06':['sampling variability','sample-to-sample variation','different random samples produce different statistics'],
    'C8.09':['in repeated sampling about 95% of intervals made this way contain the true parameter','95% of intervals constructed by this method contain the parameter','the confidence level describes the long-run success rate of the interval method','long-run performance of the interval procedure'],
    'C8.10':['the interval estimates the population parameter, not individual observations','a mean CI is for the population mean, not individual values'],
    'C8.16':['the interval estimates the population mean with the stated confidence','we are confident the population mean lies between the stated limits'],
    'C8.17':['large sample supports the normal approximation because n is greater than 30','the source condition is satisfied because n>30'],
    'C8.18':['both limits shift by the same amount and the width stays unchanged','the centre moves but the interval width is unchanged'],
    'C8.19':['larger n reduces SE and narrows the interval','increasing sample size makes the CI narrower'],
    'C8.20':['higher confidence gives a wider interval','larger confidence level means larger critical value and wider CI'],
    'C8.27':['small-sample t inference needs support for population normality','check normality for a small-sample t interval'],
    'C8.28':['a claimed mean inside the interval is compatible with the data','a claimed mean outside the interval is not supported by the interval'],
    'C8.29':['a CI for the mean is not a range for individual observations','individual variation is different from uncertainty in the mean'],
    'C8.35':['the interval estimates the population proportion with the stated confidence','we are confident the population proportion lies between the limits'],
    'C8.36':['99% confidence is wider than 95% for the same data','higher confidence produces a wider proportion interval'],
    'C8.41':['always round required sample size up','round n upward to the next whole number'],
    'C8.44':['use the prior or pilot estimate of the population proportion when one is available','use an available prior estimate for p in the planning formula'],
    'C8.46':['smaller margin of error requires a larger sample','n increases when e decreases'],
    'C8.47':['higher confidence requires a larger sample','n increases when the confidence level increases'],
    'C8.48':['round the required proportion sample size upward','always round required n up'],
    'C8.49':['FPC is relevant for a finite population sampled without replacement','check finite population and without-replacement sampling'],
    'C8.53':['FPC reduces standard error','sampling a large fraction without replacement reduces uncertainty'],
    'C8.54':['FPC is negligible at small sampling fractions','do not trigger FPC when n/N is 5% or less under the supplied rule'],
    'C8.58':['use bootstrap when an ordinary parametric interval is doubtful because of non-normality','bootstrap is an alternative when the parametric CI is inappropriate'],
    'C8.59':['non-normality is the trigger in the supplied example','the boxplot indicates non-normality'],
    'C8.60':['bootstrap resamples are drawn from the observed sample, not directly from the population','population to original sample to bootstrap resamples'],
    'C8.61':['resample with replacement from the observed sample','bootstrap sampling is with replacement'],
    'C8.63':['calculate the target statistic for each resample','compute one statistic from every bootstrap resample'],
    'C8.64':['repeat the resampling process many times','use many bootstrap resamples, typically thousands'],
    'C8.65':['sort the bootstrap statistics before taking percentile cutoffs','use an ordered array of bootstrap statistics'],
    'C8.66':['remove alpha/2 from each tail for a two-sided interval','cut equal alpha/2 tails from the ordered bootstrap statistics'],
    'C8.67':['the interval runs from the lower percentile cutoff to the upper percentile cutoff','use the selected ordered bootstrap cutoffs as the confidence limits'],
    'C8.68':['software automates repeated resampling, statistic calculation, ordering and percentile limits','software is practical because bootstrap requires large repeated computation']
  };

  const SECOND_APP=Object.freeze({"C8.01":{"prompt":"A report gives a sample estimate of 73.2 and an uncertainty range of 70.1 to 76.3. Classify the two outputs in order.","answer":"73.2 is a point estimate; 70.1 to 76.3 is an interval estimate"},"C8.02":{"prompt":"A study reports Xbar for average processing time and p for the fraction delayed. State the population parameter targeted by each statistic.","answer":"Xbar estimates mu; p estimates pi"},"C8.03":{"prompt":"An estimator T has E(T)=theta over repeated samples. State the estimator property and why it applies.","answer":"unbiased because its expected value equals the parameter"},"C8.04":{"prompt":"As sample size grows, an estimator becomes increasingly concentrated near the true parameter. State the estimator property illustrated.","answer":"consistency; the estimator approaches the parameter as n increases"},"C8.05":{"prompt":"Two unbiased estimators have variances 0.50 and 0.90. Identify the relatively more efficient estimator.","answer":"the estimator with variance 0.50"},"C8.06":{"prompt":"A second random sample from the same population gives a different Xbar. Explain why this creates uncertainty for interval estimation.","answer":"sample-to-sample variation creates sampling uncertainty"},"C8.07":{"prompt":"Complete the interval architecture: point estimate plus or minus ______.","answer":"critical value times standard error"},"C8.08":{"prompt":"For the interval (7.2, 9.6), produce lower limit|upper limit|full width.","answer":"7.2|9.6|2.4"},"C8.09":{"prompt":"A 99% confidence procedure is used repeatedly. State what the 99% describes.","answer":"in repeated sampling about 99% of intervals constructed by this method contain the true parameter"},"C8.10":{"prompt":"An individual measurement lies outside a confidence interval for mu. State why this does not by itself invalidate the interval.","answer":"the confidence interval estimates the population mean, not the range of individual observations"},"C8.11":{"prompt":"A mean interval problem supplies population sigma=4. State the critical-distribution route and the cue that selects it.","answer":"z route because the population sigma is known"},"C8.12":{"prompt":"For a two-sided 95% confidence interval, produce the positive z critical value.","answer":"1.96"},"C8.13":{"prompt":"For a known-sigma mean interval with sigma=20 and n=25, produce the standard error.","answer":4},"C8.14":{"prompt":"For 90% confidence with sigma=12 and n=36, use z*=1.645 and produce the margin of error.","answer":3.29},"C8.15":{"prompt":"Construct the 90% known-sigma interval for Xbar=100, sigma=12, n=36 using z*=1.645. Produce lower|upper.","answer":"96.71|103.29"},"C8.16":{"prompt":"A 99% interval for the population mean delivery time is (12.1,15.9) minutes. Give a correct contextual interpretation.","answer":"We are 99% confident that the population mean delivery time lies between 12.1 and 15.9 minutes"},"C8.17":{"prompt":"A non-normal population is sampled with n=31 for a known-sigma mean interval. Under the strict OFF23 n>30 fallback, state the source decision.","answer":"supported because n>30"},"C8.18":{"prompt":"Xbar decreases by 1.5 while confidence, spread and n stay fixed. State the effect on both confidence limits and the width.","answer":"both limits decrease by 1.5; width unchanged"},"C8.19":{"prompt":"A precision target requires the confidence-interval width to become one quarter of its current width while sigma and confidence stay fixed. State the required factor change in n.","answer":"multiply n by 16"},"C8.20":{"prompt":"A researcher keeps the estimate, standard error and sample size fixed but changes confidence from 95% to 98%. State which interval is less precise and why.","answer":"the 98% interval is wider because it uses a larger critical value"},"C8.21":{"prompt":"A mean interval problem gives sample SD s=5.2 but no population sigma. State the sigma status and spread input.","answer":"sigma is unknown; use the sample s"},"C8.22":{"prompt":"A mean interval uses Xbar and sample s with population sigma unavailable. Name the critical distribution.","answer":"Student t"},"C8.23":{"prompt":"A Student-t mean interval has n=31 observations. Produce the degrees of freedom.","answer":30},"C8.24":{"prompt":"For 95% confidence with df=15, produce the listed t critical value from the supplied t table.","answer":2.131},"C8.25":{"prompt":"For an unknown-sigma mean interval with s=10 and n=25, produce the estimated standard error.","answer":2},"C8.26":{"prompt":"Construct a t interval for Xbar=50, s=6, n=9 when the supplied critical value is t*=2.306. Produce lower|upper.","answer":"45.388|54.612"},"C8.27":{"prompt":"A small sample of n=12 comes from a population stated to be approximately normal. State whether the small-sample normality support is present.","answer":"yes; the population normality condition is supported"},"C8.28":{"prompt":"A claimed population mean of 82 is compared with the confidence interval (75,80). State the interval-based comparison.","answer":"the claimed mean is outside the interval and is not compatible with the interval estimate"},"C8.29":{"prompt":"A future individual value lies outside a confidence interval for mu. State the correct distinction between individual variation and uncertainty in the mean.","answer":"an interval for mu estimates the population mean and is not a prediction interval for individual observations"},"C8.30":{"prompt":"A sample records 84 successes out of 120. Produce the sample proportion p.","answer":0.7},"C8.31":{"prompt":"For n=50 and p=.12, produce np|n(1-p)|decision under the strict >5 conditions.","answer":"6|44|both greater than 5; supported"},"C8.32":{"prompt":"For n=400 and p=.36, produce the estimated standard error sqrt[p(1-p)/n].","answer":0.024},"C8.33":{"prompt":"For a two-sided 90% proportion confidence interval, produce z*.","answer":"1.645"},"C8.34":{"prompt":"Construct the 95% proportion interval for p=.40 and n=400. Produce lower|upper to 5 decimals.","answer":"0.35199|0.44801"},"C8.35":{"prompt":"A 99% interval for the population proportion of repeat customers is 30% to 38%. Interpret it correctly.","answer":"We are 99% confident that the population proportion of repeat customers is between 30% and 38%"},"C8.36":{"prompt":"For the same p and n, compare a 98% proportion interval with a 95% proportion interval.","answer":"98% is wider"},"C8.37":{"prompt":"A desired confidence interval has total width 12 units. Produce the planning margin e.","answer":"6"},"C8.38":{"prompt":"For 95% confidence in a large-sample mean sample-size calculation, produce z.","answer":"1.96"},"C8.39":{"prompt":"A planning study supplies an expected conservative standard deviation of 30. Produce the sigma input for the mean sample-size formula.","answer":30},"C8.40":{"prompt":"For 90% confidence, sigma=20 and margin e=4, use z=1.645 and produce the unrounded required mean sample size.","answer":67.6506},"C8.41":{"prompt":"A required-sample-size calculation gives 12.0001. Produce the required whole-number sample size.","answer":"13"},"C8.42":{"prompt":"Population sigma is unavailable but a source-supported expected conservative sigma of 25 is available. State how it is used in planning.","answer":"use 25 as the sigma estimate in the sample-size calculation"},"C8.43":{"prompt":"For proportion planning with prior p=.35, e=.04 and 90% confidence using z=1.645, produce the required n after upward rounding.","answer":385},"C8.44":{"prompt":"A reliable pilot study estimates the proportion as .62. State the p input branch for the new sample-size calculation.","answer":"use the available pilot estimate p=.62"},"C8.45":{"prompt":"A planner wants the value of p that gives the largest possible p(1-p) when no prior estimate exists. Produce the conservative p used for planning.","answer":0.5},"C8.46":{"prompt":"The target margin e is multiplied by 3 while confidence and p stay fixed. State the factor change in required n.","answer":"required n becomes one ninth as large"},"C8.47":{"prompt":"Plan A uses 90% confidence and Plan B uses 95% confidence with the same margin and proportion assumptions. State which plan needs more observations.","answer":"Plan B at 95% confidence requires more observations"},"C8.48":{"prompt":"A proportion sample-size formula gives 88.0001. Produce the required whole-number sample size.","answer":"89"},"C8.49":{"prompt":"A finite roster of 500 units is sampled without replacement. State the two design cues that must be recognised before checking the sampling fraction.","answer":"finite population; sampling without replacement"},"C8.50":{"prompt":"For n=60 and N=800, produce n/N and the decision under the supplied >.05 FPC rule.","answer":"0.075; use FPC"},"C8.51":{"prompt":"For Xbar=100, s=20, n=64, N=400 and supplied t*=2, construct the finite-population mean interval. Produce lower|upper to 4 decimals.","answer":"95.4117|104.5883"},"C8.52":{"prompt":"For p=.25, n=100, N=500 and 90% confidence using z*=1.645, construct the finite-population proportion interval. Produce lower|upper to 5 decimals.","answer":"0.18623|0.31377"},"C8.53":{"prompt":"As a without-replacement sample becomes a larger fraction of a fixed finite population, state the direction of the FPC and resulting standard error.","answer":"the FPC decreases and the standard error decreases"},"C8.54":{"prompt":"For n=49 and N=1000, calculate the sampling fraction and state whether the supplied >.05 rule triggers FPC.","answer":"0.049; FPC is negligible and the >.05 rule is not triggered"},"C8.55":{"prompt":"Before a finite-N adjustment, calculate n0 for 90% confidence with p=.40, e=.04 and z=1.645. Produce n0 to 4 decimals.","answer":405.9038},"C8.56":{"prompt":"Adjust n0=300 for a finite population N=1500 using n=n0N/[n0+(N-1)]. Produce the unrounded adjusted n to 4 decimals.","answer":"250.1390"},"C8.57":{"prompt":"Using n0=300 and N=1500, apply the finite-population adjustment and round upward. Produce the final required n.","answer":251},"C8.58":{"prompt":"A claim-size sample is severely non-normal and the ordinary parametric confidence-interval assumptions are doubtful. Select the source-supported alternative procedure.","answer":"bootstrap"},"C8.59":{"prompt":"A boxplot shows a long right tail and several extreme points. State the source-relevant trigger that supports considering bootstrap.","answer":"the boxplot indicates non-normality"},"C8.60":{"prompt":"An observed sample contains 50 invoice amounts. State the set from which bootstrap resamples are drawn.","answer":"the 50 observed sample values"},"C8.61":{"prompt":"After one observed value is selected into a bootstrap resample, may that same observed value be selected again on the next draw? State why.","answer":"yes; bootstrap resampling is with replacement"},"C8.62":{"prompt":"The original observed sample has n=45. Produce the number of observations in each bootstrap resample.","answer":"45"},"C8.63":{"prompt":"The target parameter is a population proportion. State the statistic calculated from every bootstrap resample.","answer":"the sample proportion"},"C8.64":{"prompt":"Explain why one bootstrap resample is not enough and what repeated resampling builds.","answer":"many resamples are needed to form the bootstrap distribution of the statistic"},"C8.65":{"prompt":"Before percentile limits are selected from 5000 bootstrap means, state how the bootstrap means must be arranged.","answer":"sort the bootstrap statistics into an ordered array"},"C8.66":{"prompt":"For a 90% percentile interval based on 2000 bootstrap statistics, state how many ordered statistics are cut from each tail.","answer":"100 from each tail"},"C8.67":{"prompt":"The selected lower and upper bootstrap percentile cutoffs are 2.1 and 7.4. State the resulting bootstrap interval.","answer":"2.1|7.4"},"C8.68":{"prompt":"Reconstruct the Excel/software function workflow for bootstrap that explicitly preserves resample size n before calculating the statistic.","answer":"RESAMPLE_WITH_REPLACEMENT_SAME_N->STATISTIC->REPEAT->ORDER->PERCENTILE_LIMITS","aliases":["RESAMPLE WITH REPLACEMENT SAME N -> STATISTIC -> REPEAT -> ORDER -> PERCENTILE LIMITS","resample with replacement; keep same n; calculate statistic; repeat; order; find percentile limits"]}});

  function semanticise(q,sid){
    if(!q)return;
    const prefix=targetPrefix(sid);
    if(!q.prompt.startsWith(prefix))q.prompt=prefix+q.prompt;
    q.assessesSkillIds=[sid];q.designatedEvidenceTarget=sid;q.semanticTarget=sid;q.semanticAuthenticity='SOURCE_SPECIFIC';
    q.validationStatus='VALIDATED';
    if(q.responseType==='structured_text'){addAlias(q,...synonymAliases(q.answer.value));if(['retrieval','repair'].includes(q.learningRole))addAlias(q,targetedAliases[sid]||[])}
  }
  function setMode(q,mode){
    if(!q)return;
    q.evidenceMode=mode;q.productionFirst=false;
    if(mode==='NUMERIC'&&numericLike(q.answer.value)){q.responseType='numeric';q.answer.type='numeric';q.answer.value=+q.answer.value;q.answer.tolerance=q.answer.tolerance??.0006;return}
    if(mode==='FORMULA'||mode==='EXCEL_RECONSTRUCTION'){q.responseType='formula';q.answer.type='formula';return}
    if(mode==='SYMBOLIC_EVENT'){q.responseType='symbolic';q.answer.type='symbolic';return}
    q.responseType='structured_text';q.answer.type='structured_text';
    addAlias(q,...synonymAliases(q.answer.value));
  }
  function applicationMode(sid,q){
    const op=SKILLS[sid].canonicalOperation;
    if(op==='EXCEL_RECONSTRUCTION')return'EXCEL_RECONSTRUCTION';
    if(op==='SYMBOLIC_EVENT')return'SYMBOLIC_EVENT';
    if(op==='CALCULATION')return numericLike(q?.answer?.value)?'NUMERIC':'MULTI_PART_PRODUCTION';
    if(op==='PROCEDURE'||op==='INTERVAL_CONSTRUCTION')return'MULTI_PART_PRODUCTION';
    if(op==='CONDITION_CHECK')return'SHORT_TEXT';
    if(op==='STRUCTURED_INTERPRETATION')return'SHORT_TEXT';
    if(op==='RECOGNITION_SELECTION')return'SHORT_TEXT';
    return'SHORT_TEXT';
  }
  function configureExcelWorkflow(q,sid,{preserveAnswer=false}={}){
    if(SKILLS[sid].canonicalOperation!=='EXCEL_RECONSTRUCTION')return;
    q.requiresExcel=true;q.excelFamily=sid==='C8.68'?'BOOTSTRAP_SOFTWARE_WORKFLOW':'EXCEL_FORMULA_RECONSTRUCTION';q.excelExecutionMode='RECONSTRUCTION';
    q.prompt=`${targetPrefix(sid)}Reconstruct the source-supported software workflow/function sequence. ${q.prompt.replace(targetPrefix(sid),'')}`;
    if(sid==='C8.68'&&!preserveAnswer){
      q.answer.value='RESAMPLE_WITH_REPLACEMENT->STATISTIC->REPEAT->ORDER->PERCENTILE_LIMITS';
      q.answer.aliases=['RESAMPLE WITH REPLACEMENT -> STATISTIC -> REPEAT -> ORDER -> PERCENTILE LIMITS','resample; calculate statistic; repeat; order; find limits'];
    }
  }
  function installSecondApplication(q,sid){
    const spec=SECOND_APP[sid];if(!q||!spec)throw new Error(`Missing distinct second application for ${sid}`);
    q.prompt=`${targetPrefix(sid)}${spec.prompt}`;
    q.answer=clone(q.answer||{});q.answer.value=spec.answer;q.answer.aliases=[...(spec.aliases||[])];
    if(typeof spec.answer==='number')q.answer.tolerance=spec.tolerance??.0006;
    q.variantClass='GENERATED_VALIDATED_FAMILIAR';q.learningRole='application';q.sourceBasis='Distinct familiar application derived from the same source-locked Chapter 8 rule and independently recalculated.';
    setMode(q,applicationMode(sid,q));
    q.evidenceFlags.familiar=true;q.evidenceFlags.retrievalEligible=false;q.evidenceFlags.delayedCompatible=true;q.evidenceFlags.repairRoles=['delayed'];q.evidenceFlags.changedWording=false;q.evidenceFlags.alteredRepresentation=false;q.evidenceFlags.unlabelled=false;
    configureExcelWorkflow(q,sid,{preserveAnswer:true});
    if(sid==='C8.68'){q.prompt=`${targetPrefix(sid)}${spec.prompt}`;q.answer.value=spec.answer;q.answer.aliases=[...(spec.aliases||[])];}
  }

  // Repair Chapter 8 evidence architecture without changing the frozen engine or the chapter source gate.
  CORE_IDS.forEach(sid=>{
    const n=sid.split('.')[1], U=task(roleId(sid,'U')),R1=task(roleId(sid,'R1')),R2=task(roleId(sid,'R2')),A=task(roleId(sid,'A')),D=task(roleId(sid,'D')),REP=task(roleId(sid,'REPAIR')),VV=task(roleId(sid,'V'));
    [U,R1,R2,A,D,REP,VV].forEach(q=>semanticise(q,sid));
    if(U){U.evidenceMode='SIMPLE_CHOICE';U.productionFirst=false;U.evidenceFlags.understandEligible=true}
    [R1,R2].forEach(q=>{if(!q)return;setMode(q,'SHORT_TEXT');q.evidenceFlags.retrievalEligible=true;q.evidenceFlags.delayedCompatible=true;q.evidenceFlags.familiar=false;q.evidenceFlags.repairRoles=[]});
    if(A){setMode(A,applicationMode(sid,A));A.evidenceFlags.familiar=true;A.evidenceFlags.repairRoles=['immediate'];A.evidenceFlags.delayedCompatible=false;configureExcelWorkflow(A,sid)}
    // The delayed-compatible D task is a genuinely independent second familiar application.
    // It is source-locked to the same canonical skill, but it does not copy either A or the changed-transfer V item.
    if(D)installSecondApplication(D,sid);
    if(VV){setMode(VV,applicationMode(sid,VV));VV.parentQuestionId=A?.id||VV.parentQuestionId;VV.changedDimensions=['context','information order','values or representation'];VV.evidenceFlags.changedWording=true;VV.evidenceFlags.alteredRepresentation=true;VV.evidenceFlags.unlabelled=true;VV.evidenceFlags.familiar=false;VV.evidenceFlags.repairRoles=['transfer'];VV.evidenceFlags.delayedCompatible=true;configureExcelWorkflow(VV,sid)}
    if(REP){setMode(REP,applicationMode(sid,REP));REP.evidenceFlags.repairRoles=['immediate'];REP.evidenceFlags.delayedCompatible=false;configureExcelWorkflow(REP,sid);addAlias(REP,targetedAliases[sid]||[])}
    // Keep source/readiness truth unchanged until the separate Chapter 8 source decision.
    SKILLS[sid].status='PROVISIONAL';SKILLS[sid].contentStatus='PROVISIONAL_CORE';SKILLS[sid].finalReadinessEligible=false;
  });

  const transferPromptRepairs={
    'C8.12':'A central 90% standard-normal confidence region leaves 5% in each tail. Give the positive critical z value.',
    'C8.17':'A skewed source population has only n=30 observations. Under the strict OFF23 fallback n>30, state whether large-sample support is available.',
    'C8.19':'A redesign increases sample size ninefold while sigma and confidence stay fixed. State the resulting factor change in confidence-interval width.',
    'C8.20':'All other inputs stay fixed while confidence falls from 95% to 90%. State the effect on the confidence-interval width.',
    'C8.36':'For the same estimated proportion and sample size, confidence is reduced from 95% to 90%. Compare the new proportion-interval width.',
    'C8.46':'A planning tolerance e is doubled. State the effect on required n; since n varies with 1/e^2, give the factor by which n changes.',
    'C8.47':'A planner lowers confidence from 95% to 90% while all other inputs stay fixed. Compare the required sample size.',
    'C8.56':'A different finite-population planning case uses the Q12(c) inputs. Apply the finite-N adjustment to n0 and give the unrounded adjusted n.',
    'C8.57':'A different finite-population planning case uses the Q12(c) inputs. Apply n=n0N/[n0+(N-1)], round upward, and give the final required n.'
  };
  Object.entries(transferPromptRepairs).forEach(([sid,prompt])=>{const q=task(roleId(sid,'V'));if(q)q.prompt=prompt});

  // Improve user-facing paraphrase tolerance across Chapter 8 conceptual free-text items.
  allTasks().filter(q=>coreTask(q)&&q.responseType==='structured_text').forEach(q=>{
    const sid=(q.assessesSkillIds||q.skillIds||[]).find(id=>CORE_IDS.includes(id));
    addAlias(q,...synonymAliases(q.answer.value));
  });
  // Explicitly close the confidence-interpretation false-negative found in the independent audit.
  allTasks().filter(q=>q.chapter===8&&q.skillIds?.includes('C8.09')&&q.responseType==='structured_text').forEach(q=>addAlias(q,
    '95% of intervals formed by this method contain the parameter',
    'in repeated sampling about 95% of intervals constructed this way contain the true parameter',
    'the confidence level is the long-run success rate of the interval procedure',
    'long-run performance of the interval method'
  ));

  // Chapter 9: repair only the four semantic evidence gaps named by the final audit.
  function patchSymbolic(id,role,lead){const q=task(`SEM-${id.replace('.','-')}-${role}`);if(!q)return;q.prompt=`${lead} ${q.prompt}`;q.evidenceMode='SYMBOLIC_EVENT';q.responseType='symbolic';q.answer.type='symbolic'}
  ['A1','A2','V'].forEach(r=>patchSymbolic('C9.02',r,'Use equality in H0, not a > or < alternative.'));
  ['A1','A2','V'].forEach(r=>patchSymbolic('C9.13',r,'A two-tail alternative is not a one-sided > or < claim.'));
  patchSymbolic('C9.15','A2','For an upper/right-tail > alternative,');
  const c915a2=task('SEM-C9-15-A2');
  if(c915a2)c915a2.prompt=c915a2.prompt.replace(/^For an upper\/right-tail > alternative,\s*For an upper-tail Z test,?/i,'For an upper-tail Z test with H1: parameter > value,');
  ['A1','A2','V'].forEach(role=>{
    const q=task(`SEM-C9-24-${role}`);if(!q)return;
    q.requiresExcel=true;q.excelFamily='EXCEL_FORMULA_RECONSTRUCTION';q.excelExecutionMode='RECONSTRUCTION';q.evidenceMode='EXCEL_RECONSTRUCTION';q.responseType='formula';q.answer.type='formula';
    q.prompt=`Excel formula/function reconstruction: ${q.prompt}`;
  });

  // Narrow-screen containment for large Read/Print audit tables.
  const style=document.createElement('style');
  style.id='final-mastery-integration-style';
  style.textContent=`@media(max-width:600px){#source-register,#print-content,#ch8-print-pack{max-width:100%;overflow-x:hidden}#source-register table,#source-register .source-table,#source-register .decision,#print-content table,#print-content .source-table,#print-content .decision,#ch8-print-pack table,#ch8-print-pack .source-table,#ch8-print-pack .decision{display:block;width:100%;max-width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;white-space:nowrap}#source-register details,#print-content details,#ch8-print-pack details{max-width:100%;overflow:hidden}#print-content pre,#print-content code,#ch8-print-pack pre,#ch8-print-pack code{max-width:100%;overflow-wrap:anywhere;word-break:break-word}}`;
  document.head.appendChild(style);

  // Controlled Chapter 8 provisional mastery rehearsal. It activates core evidence only while explicitly enabled;
  // Chapter 8 remains SOURCE_PARTIAL, so calculateA1Readiness can never certify the final A1 source gate from this mode.
  let rehearsal=false;
  function setRehearsal(on,{render=true}={}){
    rehearsal=Boolean(on);
    CORE_IDS.forEach(id=>SKILLS[id].status=rehearsal?'ACTIVE':'PROVISIONAL');
    allTasks().filter(coreTask).forEach(q=>{if(q.status==='HOLD')return;q.status=rehearsal?'ACTIVE':'PROVISIONAL';q.validationStatus='VALIDATED';q.finalReadinessEligible=false});
    if(render&&typeof window.renderAll==='function')window.renderAll();
    return rehearsal;
  }
  function withCoreActive(fn){const before=rehearsal;setRehearsal(true,{render:false});try{return fn()}finally{setRehearsal(before,{render:false})}}
  function coreCoverage(){return withCoreActive(()=>window.auditEvidenceCoverage().filter(r=>r.chapter===8&&CORE_IDS.includes(r.skillId)))}
  function chapter9Coverage(){return window.auditEvidenceCoverage().filter(r=>r.chapter===9)}

  function installRehearsalControl(){
    const host=document.getElementById('chapter-content'),tabs=document.getElementById('chapter-tabs');
    if(!host||tabs?.dataset.active!=='8'||document.getElementById('ch8-mastery-rehearsal-control'))return;
    host.insertAdjacentHTML('afterbegin',`<section id="ch8-mastery-rehearsal-control" class="panel" style="margin-bottom:1rem;border-left:5px solid var(--gold)"><h3>Chapter 8 · provisional mastery rehearsal</h3><p class="compact"><strong>Source gate remains SOURCE_PARTIAL.</strong> This switch lets the frozen engine record retrieval/application/transfer/repair evidence for C8.01–C8.68 while you study. It can never unlock final A1 readiness while Chapter 8 remains SOURCE_PARTIAL. C8.69–C8.75 stay HOLD.</p><button class="secondary" id="ch8-rehearsal-toggle">${rehearsal?'DISABLE':'ENABLE'} PROVISIONAL MASTERY TRACKING</button><span class="badge ${rehearsal?'partial':'neutral'}" id="ch8-rehearsal-state">${rehearsal?'ON · provisional evidence':'OFF · baseline source lock'}</span></section>`);
    document.getElementById('ch8-rehearsal-toggle').onclick=()=>{setRehearsal(!rehearsal);setTimeout(()=>{CH8.augmentChapter();installRehearsalControl()},0)};
  }
  document.getElementById('chapter-tabs')?.addEventListener('click',()=>setTimeout(installRehearsalControl,0));
  installRehearsalControl();
  const renderAllBeforeMasteryControl=window.renderAll;
  if(typeof renderAllBeforeMasteryControl==='function'&&!renderAllBeforeMasteryControl.__ch8RehearsalPersistent){
    const wrappedRenderAll=function(...args){const result=renderAllBeforeMasteryControl.apply(this,args);installRehearsalControl();setTimeout(installRehearsalControl,0);return result};
    wrappedRenderAll.__ch8RehearsalPersistent=true;wrappedRenderAll.__wrappedFunction=renderAllBeforeMasteryControl;window.renderAll=wrappedRenderAll;
  }

  function priorLayerIntegrity(){
    const current=document.getElementById('ch8-ch9-final-mastery-integration-patch'),parts=[];
    for(const script of document.scripts){if(script===current)break;parts.push(`${script.id||''}\n${script.textContent}`)}
    const blob=parts.join('\n/*::*/\n');let fnv=0x811c9dc5>>>0,djb=5381>>>0;
    for(let i=0;i<blob.length;i++){const c=blob.charCodeAt(i);fnv^=c;fnv=Math.imul(fnv,0x01000193)>>>0;djb=(((djb<<5)+djb)+c)>>>0}
    return blob.length===529309&&fnv===702051962&&djb===443382564;
  }
  const normalizeAuditText=v=>String(v??'').trim().toLowerCase().replace(/\s+/g,' ').replace(/[^a-z0-9.+<>=|→μσπ-]+/g,' ');
  const taskContentSignature=q=>normalizeAuditText(`${q?.prompt||''} || ${q?.answer?.value??''}`);
  function distinctCoreApplications(){return CORE_IDS.every(sid=>{const A=task(roleId(sid,'A')),D=task(roleId(sid,'D')),VV=task(roleId(sid,'V')),sa=taskContentSignature(A),sd=taskContentSignature(D),sv=taskContentSignature(VV);return sa&&sd&&sv&&sa!==sd&&sd!==sv&&sa!==sv})}

  function tests(){
    const out=[],t=(name,fn)=>{try{out.push({name,pass:Boolean(fn()),detail:''})}catch(e){out.push({name,pass:false,detail:e.message})}};
    t('MASTER 1 prior frozen/content layers match the audited internal integrity fingerprint',()=>priorLayerIntegrity());
    t('MASTER 2 baseline Chapter 8 source status remains SOURCE_PARTIAL',()=>CHAPTERS[8].status==='SOURCE_PARTIAL');
    t('MASTER 3 C8.69-C8.75 remain HOLD',()=>Array.from({length:7},(_,i)=>SKILLS[`C8.${String(i+69).padStart(2,'0')}`].status==='HOLD').every(Boolean));
    t('MASTER 4 controlled Chapter 8 core semantic coverage is 68/68',()=>{const r=coreCoverage();return r.length===68&&r.every(x=>x.semanticCoverageStatus==='PASS')});
    t('MASTER 5 every controlled C8 core skill has >=2 retrieval and >=2 familiar applications',()=>coreCoverage().every(x=>new Set(x.retrievalTaskIds).size>=2&&new Set(x.familiarApplicationTaskIds).size>=2));
    t('MASTER 6 A, D and changed-transfer V are genuinely distinct for all C8.01-C8.68',()=>distinctCoreApplications());
    t('MASTER 7 every controlled C8 core skill has transfer + delayed + repair I/D/T',()=>coreCoverage().every(x=>x.changedTransferTaskIds.length&&x.delayedCompatibleTaskIds.length&&x.repairImmediateTaskIds.length&&x.repairDelayedTaskIds.length&&x.repairTransferTaskIds.length));
    t('MASTER 8 all controlled C8 changed transfers pass substantive-change validation',()=>withCoreActive(()=>allTasks().filter(q=>coreTask(q)&&q.evidenceFlags?.changedWording).every(q=>window.validateChangedTransfer(q).pass)));
    t('MASTER 9 Chapter 9 semantic coverage is 40/40',()=>{const r=chapter9Coverage();return r.length===40&&r.every(x=>x.semanticCoverageStatus==='PASS')});
    t('MASTER 10 C8.09 accepts independent source-valid confidence paraphrase',()=>{const q=task('CH8-09-A');return q.answer.aliases.includes('in repeated sampling about 95% of intervals constructed this way contain the true parameter')});
    t('MASTER 11 C9.24 has two familiar Excel applications and a changed transfer',()=>{const r=chapter9Coverage().find(x=>x.skillId==='C9.24');return r&&new Set(r.familiarApplicationTaskIds).size>=2&&r.changedTransferTaskIds.length>=1});
    t('MASTER 12 rehearsal mode cannot satisfy final A1 source gate',()=>withCoreActive(()=>APP.calculateA1Readiness().reasons.some(x=>x.includes('Chapter 8 source status is SOURCE_PARTIAL'))));
    t('MASTER 13 mobile containment covers source register and print-pack tables',()=>{const css=document.getElementById('final-mastery-integration-style')?.textContent||'';return css.includes('#print-content table')&&css.includes('#ch8-print-pack table')&&css.includes('#source-register table')});
    t('MASTER 14 rehearsal control is hooked into the general renderAll lifecycle',()=>Boolean(window.renderAll?.__ch8RehearsalPersistent));
    t('MASTER 15 C9.15 A2 wording has no duplicated upper-tail lead-in',()=>!/^For an upper\/right-tail > alternative,\s*For an upper-tail/i.test(task('SEM-C9-15-A2')?.prompt||''));
    return out;
  }

  const API={id:'FINAL-MASTERY-INTEGRATION-2',engineBase:'v1.3.1',engineModified:false,sourceGate:'SOURCE_PARTIAL',setRehearsal,isRehearsal:()=>rehearsal,coreCoverage,chapter9Coverage,runQATests:tests};
  window.SDS188_FINAL_MASTERY_INTEGRATION=API;

  // Combined QA remains explicit about baseline engine QA versus controlled provisional mastery coverage.
  const qaButton=document.getElementById('run-qa');
  if(qaButton){
    qaButton.textContent='RUN BASELINE ENGINE + CH8 + CH9 + FINAL + BOUNDED MASTERY-INTEGRATION QA';
    qaButton.onclick=()=>{
      const was=rehearsal;setRehearsal(false,{render:false});
      const engine=APP.runQATests(),ch8=CH8.runContentQA(),ch9=window.SDS188_CH9_COMPLETENESS_PATCH?.runQATests?.()||[],fin=PRIOR.runQATests(),master=tests();
      setRehearsal(was,{render:false});
      const results=[...engine,...ch8,...ch9,...fin,...master],passed=results.filter(x=>x.pass).length,out=document.getElementById('qa-results');
      if(out)out.innerHTML=`<p><strong>${passed}/${results.length} passed</strong> · frozen engine tested at its baseline status; Chapter 8 mastery contract tested under controlled provisional activation; Chapter 8 source gate remains SOURCE_PARTIAL.</p><ol>${results.map(x=>`<li>${x.pass?'PASS':'FAIL'} · ${String(x.name).replace(/[&<>]/g,'')}${x.detail?` — ${String(x.detail).replace(/[&<>]/g,'')}`:''}</li>`).join('')}</ol>`;
      installRehearsalControl();
    };
  }
  if(typeof window.renderAll==='function')window.renderAll();
})();
