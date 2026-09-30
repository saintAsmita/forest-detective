'use strict';
let expressionAttempt=false;
function expressionPanel(n){const c=currentChapter(),names=c.panelNames||['小桥边的相遇','松松想回家','一起撑伞过桥','到家后道谢'];return `<figure><img src="${currentChapter().panelRoot||'./assets/expression-'}${n}.svg" alt="${names[n-1]}"/><figcaption><span>${n}</span>${names[n-1]}</figcaption></figure>`;}
function renderExpression(){
 expressionAttempt=false;const l=lessons[step];
 $('#main').innerHTML=`<div class="lesson-head"><button class="back" id="back">← 返回营地</button><div class="progress-wrap"><div class="progress-label"><span>表达篇 · ${currentChapter().name}</span><span>${step+1} / 6</span></div><div class="progress"><span style="width:${step/6*100}%"></span></div></div></div><section class="expression-lesson"><div class="expression-heading"><div><div class="eyebrow">小小讲述家 · ${l.short}</div><h1>${l.title}</h1><p>${l.question}</p></div><button class="listen" id="listen">♫ 听任务</button></div><div class="expression-pictures ${l.panels.length===1?'single':''}">${l.panels.map(expressionPanel).join('')}</div><p class="expression-instruction">${l.instruction}</p><div class="expression-tools">${step>=2?'<button class="secondary" id="story-listen">♫ 听完整故事</button>':''}<button class="hint" id="hint">☼ 给我一点提示</button><button class="secondary" id="expression-again" hidden>我再说一次</button></div><div class="feedback" id="feedback" role="status" hidden></div><div class="expression-review" id="expression-review" hidden><h2>想一想，有没有想补充的？</h2><ul>${l.review.map(t=>`<li>${t}</li>`).join('')}</ul><button class="secondary" id="example-listen">♫ 听一种说法</button><p id="expression-example" hidden>${l.example}</p><p class="expression-note">说法可以不同，事情讲清楚就好。</p></div><div class="expression-bottom"><p>面对家人或小伙伴，慢慢说，不着急。</p><button class="primary" id="expression-done">我说好了 →</button>${step===5?'<button class="back" id="expression-skip">跳过挑战，完成这一课</button>':''}</div><details class="expression-parent"><summary>陪伴小贴士</summary><p>${currentChapter().parentTip||'先听孩子说完，再追问一处，比如：她是怎么帮助松松的？'}不要求背示范，不因停顿或说法不同判错。完成标记只表示走过练习流程。</p></details></section>`;
 $('#back').onclick=home;$('#listen').onclick=()=>speak('q'+step);$('#hint').onclick=hint;
 if($('#story-listen'))$('#story-listen').onclick=()=>speak('story');
 $('#example-listen').onclick=()=>{$('#expression-example').hidden=false;speak('e'+step);};
 $('#expression-again').onclick=()=>{stopAudio();expressionAttempt=false;$('#expression-review').hidden=true;$('#expression-example').hidden=true;$('#expression-again').hidden=true;$('#feedback').hidden=true;$('#expression-done').textContent='我说好了 →';};
 $('#expression-done').onclick=()=>{
  if(expressionAttempt){progress().completed=Math.max(progress().completed,step+1);save();if(step===5)ending();else start(step+1);return;}
  stopAudio();expressionAttempt=true;$('#expression-review').hidden=false;$('#expression-again').hidden=false;$('#expression-done').textContent=step===5?'完成这一课 →':'继续下一段 →';feedback(l.success);speak('s'+step);$('#expression-review').scrollIntoView({block:'nearest',behavior:'smooth'});
 };
 if($('#expression-skip'))$('#expression-skip').onclick=()=>{progress().completed=6;save();ending();};
}
