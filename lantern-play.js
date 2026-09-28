'use strict';
let lanternPicks={};
function resetLantern(){lanternPicks={};}
function transformLantern(lamp,machine){return machine==='star'?{...lamp,shape:'star'}:{...lamp,color:machine};}
function sameLantern(a,b){return Boolean(a&&b&&a.color===b.color&&a.shape===b.shape);}
function evaluateLantern(l,picks){
 const picked=l.options[picks.first];if(!picked)return{ok:false,message:'先选一盏灯，再来检查。'};
 if(l.mode==='inverse')return{ok:sameLantern(transformLantern(picked,l.machines[0]),l.target),message:'机器只换颜色，不换形状。再看看目标是什么形状。'};
 const middle=transformLantern(l.input,l.machines[0]);
 if(l.mode==='repair'||l.mode==='pair'){
  if(!sameLantern(picked,middle))return{ok:false,message:'先看第一步：这台机器只改一个地方，另一个地方要保留下来。'};
  if(l.mode==='pair')return{ok:sameLantern(l.finalOptions[picks.last],transformLantern(middle,l.machines[1])),message:'第一步已经对啦。再检查第二步，它改颜色还是改形状？'};
  return{ok:true};
 }
 const target=l.machines.reduce(transformLantern,l.input);return{ok:sameLantern(picked,target),message:l.machines.length===2?'看看是不是只做了第一步，或者把本来不变的地方也改了？':l.wrong};
}
const LANTERN_COLORS={red:'#e98887',blue:'#7fb8d3',yellow:'#efca73'};
function lanternPicture(lamp){
 const shapes={circle:'<circle cx="40" cy="46" r="26"/>',square:'<rect x="15" y="21" width="50" height="50" rx="8"/>',star:'<path d="m40 17 9 18 21 3-15 15 4 21-19-10-19 10 4-21-15-15 21-3Z"/>',heart:'<path d="M40 73C-8 44 15 9 40 32 65 9 88 44 40 73Z"/>'};
 return `<svg class="lantern-picture" viewBox="0 0 80 92" role="img" aria-label="${{red:'红色',blue:'蓝色',yellow:'黄色'}[lamp.color]}${{circle:'圆形',square:'方形',star:'星星',heart:'爱心'}[lamp.shape]}灯"><path d="M40 2v14m0 60v11" stroke="#998568" stroke-width="3"/><g fill="${LANTERN_COLORS[lamp.color]}" stroke="#7d715f" stroke-width="2">${shapes[lamp.shape]}</g><path d="M32 83h16" stroke="#bc9d6b" stroke-width="3"/></svg>`;
}
function lanternMachine(id){return `<div class="lantern-machine"><span aria-hidden="true">${id==='star'?'☆':'▰'}</span><strong>${{star:'星星机',red:'红色机',blue:'蓝色机'}[id]}</strong><small>${id==='star'?'只改形状':'只改颜色'}</small></div>`;}
function lanternChoices(l,group,items){return `<div class="lantern-choices" role="group" aria-label="${group==='last'?'第二步后':'选择灯'}">${items.map((lamp,i)=>`<button data-lantern-group="${group}" data-lantern-choice="${i}" class="lantern-option ${lanternPicks[group]===i?'selected':''}" aria-pressed="${lanternPicks[group]===i}" ${solved?'disabled':''}>${lanternPicture(lamp)}<small>选这盏</small></button>`).join('')}</div>`;}
function lanternProcess(l){
 const middle=l.mode==='repair'?l.wrongMiddle:l.mode==='pair'?l.options[lanternPicks.first]:l.input?transformLantern(l.input,l.machines[0]):null;
 const final=l.target||(l.mode==='pair'?l.finalOptions[lanternPicks.last]:null);
 const cell=(lamp,label,fault=false)=>`<div class="lantern-result ${fault?'lantern-fault':''}"><small>${label}</small>${lamp?lanternPicture(lamp):'<span class="lantern-missing">?</span>'}</div>`;
 return `<div class="lantern-process">${l.machines.map((machine,i)=>`<div class="lantern-step-label">第${i+1}步 · 从左往右看</div><div class="lantern-belt">${cell(i===0?l.input:middle,i===0?'开始':'接着用这盏')}<span class="lantern-arrow" aria-hidden="true">→</span>${lanternMachine(machine)}<span class="lantern-arrow" aria-hidden="true">→</span>${cell(i===0&&l.machines.length===2?middle:final,i===0&&l.machines.length===2?(l.mode==='repair'?'这里放错了':'第一步后'):l.target?'目标':'最后',i===0&&l.mode==='repair')}</div>`).join('')}</div>`;
}
function lanternBoard(){const l=lessons[step];
 return `<div class="lantern-examples">${l.examples?'<small>先看示范</small>':''}${(l.examples||[]).map(([a,b])=>`<div class="lantern-example">${lanternPicture(a)}<span>→</span>${lanternPicture(b)}</div>`).join('')}</div>${lanternProcess(l)}<p class="lantern-note">${l.mode==='repair'?'只替换中间标出的那一盏':l.mode==='inverse'?'选一盏能变成目标的灯，有不同的好办法':l.mode==='pair'?'第一步后：先选中间结果':'选一盏符合变化规则的灯'}</p>${lanternChoices(l,'first',l.options)}${l.mode==='pair'?`<p class="lantern-note">第二步后：再选最后结果</p>${lanternChoices(l,'last',l.finalOptions)}`:''}`;
}
function bindLanternBoard(){const l=lessons[step];document.querySelectorAll('[data-lantern-choice]').forEach(b=>b.onclick=()=>{if(solved)return;lanternPicks[b.dataset.lanternGroup]=Number(b.dataset.lanternChoice);$('#feedback').hidden=true;refreshBoard();});$('#check').disabled=!solved&&(lanternPicks.first===undefined||(l.mode==='pair'&&lanternPicks.last===undefined));}
function checkLantern(){return evaluateLantern(lessons[step],lanternPicks);}
