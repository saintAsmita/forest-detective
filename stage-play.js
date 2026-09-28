'use strict';
let stageOrder=[],stagePicked=null,stageSwaps=0,stageChecked=false;
function resetStage(l){stageOrder=l?.type==='stage-order'?(l.initial?[...l.initial]:Array(l.friends.length).fill(null)):[];stagePicked=null;stageSwaps=0;stageChecked=false;}
function stageRuleOK(r,order){
 const a=order.indexOf(r.a),b=order.indexOf(r.b);if(a<0)return false;
 switch(r.kind){
 case 'at':return a===r.b;
 case 'notat':return a!==r.b;
 case 'before':return b>=0&&a<b;
 case 'next':return b>=0&&Math.abs(a-b)===1;
 case 'notnext':return b>=0&&Math.abs(a-b)>1;
 case 'between':{const [x,y]=r.b.map(id=>order.indexOf(id));return x>=0&&y>=0&&a>Math.min(x,y)&&a<Math.max(x,y);}
 default:return false;
 }
}
function evaluateStage(l,order,swaps=0){
 if(order.length!==l.friends.length||new Set(order).size!==l.friends.length||l.friends.some(id=>!order.includes(id)))return{ok:false,message:'还有朋友没找到位置，先让每个人都站好。'};
 const failed=l.rules.find(r=>!stageRuleOK(r,order));
 if(failed)return{ok:false,message:'再检查这条线索：'+failed.text+'。先找出谁的位置需要调整。'};
 if(l.repair&&(swaps!==1||order.filter((id,i)=>id!==l.initial[i]).length!==2))return{ok:false,message:'这一关需要刚好交换一次。点击重新开始，想好要换哪两位。'};
 return{ok:true};
}
function stagePortrait(id){return `<img class="stage-portrait" src="./assets/${id}.png" alt="${PICNIC_NAMES[id]}">`;}
function stageInstrument(kind){const art={drum:'<ellipse cx="30" cy="19" rx="23" ry="9" fill="#f4d395"/><path d="M7 19v24q23 15 46 0V19" fill="#e08b76" stroke="#915b60" stroke-width="3"/><ellipse cx="30" cy="19" rx="23" ry="9" fill="#ffe8b4" stroke="#915b60" stroke-width="3"/><path d="m9 25 10 20 11-19 11 19 10-20" fill="none" stroke="#ffe8b4" stroke-width="3"/>',bell:'<path d="M12 43h36L42 22q-12-18-24 0Z" fill="#ecc36c" stroke="#9b7542" stroke-width="3"/><circle cx="30" cy="49" r="5" fill="#9b7542"/><path d="M30 10V4" stroke="#9b7542" stroke-width="4"/>',flute:'<path d="m11 48 37-37" stroke="#bb935c" stroke-width="14" stroke-linecap="round"/><path d="m11 48 37-37" stroke="#f1cf91" stroke-width="9" stroke-linecap="round"/><g fill="#81653c"><circle cx="21" cy="38" r="2"/><circle cx="29" cy="30" r="2"/><circle cx="37" cy="22" r="2"/></g>',triangle:'<path d="M29 9 7 48h42L29 9" fill="none" stroke="#8b9fb8" stroke-width="6" stroke-linejoin="round"/><path d="m42 28 13 18" stroke="#b68b62" stroke-width="5" stroke-linecap="round"/>'}[kind];return `<svg class="stage-instrument" viewBox="0 0 60 60" role="img" aria-label="${{drum:'鼓',bell:'铃铛',flute:'笛子',triangle:'三角铁'}[kind]}">${art}</svg>`;}
function stageRulePicture(r,l){
 const person=id=>stagePortrait(id),marker=i=>l.slotKinds?stageInstrument(l.slotKinds[i]):`<span class="stage-position">${i+1}</span>`;
 const relation={before:'→',next:'↔',notnext:'⋯',at:'↓',notat:'≠'};
 return r.kind==='between'?`${person(r.b[0])}<span>…</span>${person(r.a)}<span>…</span>${person(r.b[1])}`:`${person(r.a)}<span>${relation[r.kind]}</span>${typeof r.b==='number'?marker(r.b):person(r.b)}`;
}
function stageBoard(){const l=lessons[step];return `<div class="stage-rules" aria-label="图画线索">${l.rules.map((r,i)=>`<div class="stage-rule ${stageChecked&&!stageRuleOK(r,stageOrder)?'conflict':''}"><div class="stage-relation" aria-hidden="true">${stageRulePicture(r,l)}</div><small>${i+1}. ${r.text}${stageChecked&&!stageRuleOK(r,stageOrder)?' · 再看看':''}</small></div>`).join('')}</div><p class="stage-note">${l.slotKinds?'把朋友放到对应的乐器下方':l.repair?'选两位朋友交换 · 已交换 '+stageSwaps+' / 1 次':'← 从左到右，第一个位置到最后一个位置 →'}</p><div class="stage-platform" style="--stage-count:${l.friends.length}">${stageOrder.map((id,i)=>`<button class="stage-slot ${stagePicked===id&&id?'selected':''}" data-stage-slot="${i}" aria-label="${l.slotKinds?['鼓','铃铛','笛子','三角铁'][i]:'第'+(i+1)+'个位置'}：${id?PICNIC_NAMES[id]:'空位'}" ${solved?'disabled':''}>${l.slotKinds?stageInstrument(l.slotKinds[i]):`<span class="stage-position">${i+1}</span>`}${id?stagePortrait(id):'<span class="stage-empty">＋</span>'}<strong>${id?PICNIC_NAMES[id]:'放这里'}</strong></button>`).join('')}</div>${!l.repair?`<div class="stage-waiting"><small>候场区</small><div>${l.friends.filter(id=>!stageOrder.includes(id)).map(id=>`<button data-stage-person="${id}" class="stage-person ${stagePicked===id?'selected':''}" aria-pressed="${stagePicked===id}" ${solved?'disabled':''}>${stagePortrait(id)}<span>${PICNIC_NAMES[id]}</span></button>`).join('')||'<span class="stage-note">朋友们都站好啦</span>'}</div><button class="secondary" id="stage-return" ${solved||!stagePicked||!stageOrder.includes(stagePicked)?'disabled':''}>放回候场区</button></div>`:''}<div class="stage-tools"><span role="status">${stagePicked?'已选 '+PICNIC_NAMES[stagePicked]+'，再点目标位置':l.repair&&stageSwaps?'检查一下，或重新开始再试':'点一位朋友，开始安排'}</span><button class="secondary" id="stage-reset" ${solved?'disabled':''}>重新开始</button></div>`;}
function stageChanged(){stageChecked=false;$('#feedback').hidden=true;refreshBoard();}
function bindStageBoard(){
 const l=lessons[step];
 document.querySelectorAll('[data-stage-person]').forEach(b=>b.onclick=()=>{if(solved)return;stagePicked=stagePicked===b.dataset.stagePerson?null:b.dataset.stagePerson;refreshBoard();});
 document.querySelectorAll('[data-stage-slot]').forEach(b=>b.onclick=()=>{
  if(solved)return;const i=Number(b.dataset.stageSlot),occupant=stageOrder[i];
  if(!stagePicked){stagePicked=occupant;refreshBoard();return;}
  if(stagePicked===occupant){stagePicked=null;refreshBoard();return;}
  if(l.repair&&stageSwaps>=1){toast('已经交换一次啦。可以检查，或点击重新开始。');return;}
  const from=stageOrder.indexOf(stagePicked);if(from>=0)stageOrder[from]=occupant;
  stageOrder[i]=stagePicked;stagePicked=null;if(l.repair)stageSwaps++;stageChanged();
 });
 if($('#stage-return'))$('#stage-return').onclick=()=>{if(solved)return;const i=stageOrder.indexOf(stagePicked);if(i>=0)stageOrder[i]=null;stagePicked=null;stageChanged();};
 $('#stage-reset').onclick=()=>{if(solved)return;resetStage(l);stageChanged();};
 $('#check').disabled=!solved&&(stageOrder.some(x=>!x)||(l.repair&&stageSwaps!==1));
}
function checkStage(){stageChecked=true;return evaluateStage(lessons[step],stageOrder,stageSwaps);}
