'use strict';
const LOGIC_NAMES={rabbit:'绒绒',squirrel:'松松',fox:'阿橙',bear:'大树',koala:'灰灰',kite:'风筝',umbrella:'雨伞',lamp:'小灯',ball:'皮球',book:'故事书',oak:'大树站',bridge:'小桥站',mill:'风车站',pond:'池塘站',tower:'灯塔站',leaf:'叶子',shell:'贝壳',star:'星星',moon:'月亮',gem:'宝石'};
const LOGIC_ART={
 kite:'<path d="M32 4 52 26 32 49 12 26Z" fill="#e6a16e"/><path d="m32 4 20 22H32Z" fill="#84b9af"/><path d="M12 26h20v23Z" fill="#f4d88d"/><path d="M32 4v45M12 26h40M32 49q12 4 1 10" stroke="#705d48" stroke-width="2" fill="none"/><path d="m29 54 8-3v7Z" fill="#84b9af"/>',
 umbrella:'<path d="M5 30a27 27 0 0 1 54 0q-9-7-18 0-9-7-18 0-9-7-18 0Z" fill="#92bfc8"/><path d="M32 7v45q0 10 9 6" fill="none" stroke="#705d48" stroke-width="3" stroke-linecap="round"/><path d="M32 7Q19 12 23 30m9-23q13 5 9 23" fill="none" stroke="#628e9c" stroke-width="2"/>',
 lamp:'<path d="M23 13V9q9-9 18 0v4" fill="none" stroke="#6c7562" stroke-width="3"/><rect x="17" y="15" width="30" height="37" rx="6" fill="#f5d784" stroke="#809877" stroke-width="3"/><path d="M13 16h38M13 53h38" stroke="#6c7562" stroke-width="5" stroke-linecap="round"/><path d="m32 24-7 16h14Z" fill="#e8a45f"/>',
 ball:'<circle cx="32" cy="32" r="25" fill="#eaa18b"/><path d="M13 16q16 24 42 20M11 47q26-27 23-40" stroke="#fff1cf" stroke-width="5" fill="none"/><circle cx="32" cy="32" r="25" fill="none" stroke="#aa7866" stroke-width="2"/>',
 book:'<path d="M8 13q12-6 24 2 12-8 24-2v40q-12-6-24 2-12-8-24-2Z" fill="#f4e7c6" stroke="#8da98b" stroke-width="3"/><path d="M32 15v40" stroke="#a2b394" stroke-width="2"/><path d="m14 27 5-6 6 7-5 9Z" fill="#d6b970"/><path d="M38 26h11m-11 7h11m-11 7h8" stroke="#a1b49b" stroke-width="2"/>',
 oak:'<path d="M30 31v25m3-18 10-9" stroke="#9b7957" stroke-width="7" stroke-linecap="round"/><path d="M9 32q-9-12 5-18 1-15 17-10 14-7 22 9 13 10 0 22-15 9-26 0-12 7-18-3" fill="#8dac76"/><path d="M18 57h30" stroke="#becb9b" stroke-width="4"/>',
 bridge:'<path d="M3 52q8-5 15 0t15 0 15 0 14 0" fill="none" stroke="#96c7d1" stroke-width="6"/><path d="M7 44q25-36 50 0" fill="none" stroke="#b18a65" stroke-width="10"/><path d="M7 35q25-35 50 0M7 35v10m12-22v9m13-16v10m13-3v9m12 3v10" fill="none" stroke="#907252" stroke-width="3"/>',
 mill:'<path d="M24 24h17l6 34H18Z" fill="#e7ce9a"/><path d="m20 24 12-13 14 13Z" fill="#b78566"/><path d="m32 28-21-17m21 17L49 7M32 28l21 17M32 28 15 49" stroke="#7f987e" stroke-width="7"/><circle cx="32" cy="28" r="4" fill="#6f7563"/><path d="M29 58v-9q4-5 8 0v9" fill="#9d8867"/>',
 pond:'<ellipse cx="32" cy="37" rx="29" ry="18" fill="#a1cdd3"/><path d="M10 35q7 5 14 0m6 11q9 5 18-1" fill="none" stroke="#729faf" stroke-width="2"/><path d="M9 32V16m0 9-5-5m5 1 5-8" stroke="#88a773" stroke-width="3"/><ellipse cx="43" cy="28" rx="9" ry="5" fill="#93b981"/><circle cx="43" cy="25" r="4" fill="#efbcba"/>',
 tower:'<path d="m23 19-6 39h30l-6-39Z" fill="#f3e3bd"/><path d="m21 32-2 10h26l-2-10" fill="#d7957c"/><path d="M21 12h22v12H21Z" fill="#ead58d" stroke="#738d86" stroke-width="2"/><path d="m17 12 15-9 15 9Z" fill="#8aa99b"/><path d="m8 17 7 1m34 0 7-1" stroke="#d6bd6f" stroke-width="3"/>',
 leaf:'<path d="M51 7Q10 5 12 35q3 28 26 14Q56 39 51 7Z" fill="#9bb980"/><path d="m12 57 33-39M24 43l-3-15m11 5 13 1" fill="none" stroke="#638360" stroke-width="3" stroke-linecap="round"/>',
 shell:'<path d="M26 54 6 30Q1 12 18 15 18 1 32 8 47 0 47 15 65 12 58 32L39 54Z" fill="#e8b8a5" stroke="#b88979" stroke-width="2"/><path d="m32 51-1-37m3 36 13-29M28 49 16 22m22 28 16-17M25 49 10 33" fill="none" stroke="#c99681" stroke-width="2"/><rect x="25" y="50" width="15" height="7" rx="3" fill="#e8b8a5"/>',
 star:'<path d="m32 5 8 17 19 3-14 14 3 19-16-9-17 9 3-19L4 25l20-3Z" fill="#e9c76c" stroke="#bba25b" stroke-width="2"/><path d="m27 26 4-8 4 8" fill="none" stroke="#fff0b2" stroke-width="3"/>',
 moon:'<path d="M39 5a27 27 0 1 0 19 38A24 24 0 0 1 39 5Z" fill="#d4c4df" stroke="#a695b8" stroke-width="2"/><circle cx="18" cy="29" r="3" fill="#bdacd0"/><circle cx="24" cy="44" r="4" fill="#bdacd0"/>',
 gem:'<path d="m17 10-12 17 27 31 27-31-12-17Z" fill="#90becb" stroke="#648f9e" stroke-width="2"/><path d="m17 10 7 17 8-17 8 17 7-17M5 27h54M24 27l8 31 8-31" fill="none" stroke="#d5eff0" stroke-width="2"/>'
};
function logicPicture(id){return LOGIC_ART[id]?`<svg class="logic-picture" viewBox="0 0 64 64" role="img" aria-label="${LOGIC_NAMES[id]}">${LOGIC_ART[id]}</svg>`:`<img class="logic-picture" src="./assets/${id}.png" alt="${LOGIC_NAMES[id]}">`;}
let logicOrder=[],logicPicked=null,logicSwaps=0,logicChecked=false;
function resetLogic(l){logicOrder=l?.type==='logic-arrange'?(l.initial?[...l.initial]:Array(l.items.length).fill(null)):[];logicPicked=null;logicSwaps=0;logicChecked=false;}
function logicRuleOK(r,order,l){
 const a=order.indexOf(r.a);if(a<0)return false;
 if(r.kind==='at')return l.mode==='grid'?l.slots[a]===r.b:a===r.b;
 if(r.kind==='notat')return a!==r.b;
 if(r.kind==='oneof')return r.b.includes(a);
 if(r.kind==='notset')return !r.b.includes(a);
 if(r.kind==='between'){const [x,y]=r.b.map(id=>order.indexOf(id));return x>=0&&y>=0&&a>Math.min(x,y)&&a<Math.max(x,y);}
 const b=order.indexOf(r.b);
 if(l.mode==='grid'){
  const pos=l.slots[a],ax=pos%l.cols,ay=Math.floor(pos/l.cols);
  if(r.kind==='row')return ay===r.b;if(r.kind==='col')return ax===r.b;
  if(b<0)return false;const other=l.slots[b],bx=other%l.cols,by=Math.floor(other/l.cols);
  if(r.kind==='right')return ay===by&&ax===bx+1;if(r.kind==='left')return ay===by&&ax+1===bx;
  if(r.kind==='below')return ax===bx&&ay===by+1;if(r.kind==='above')return ax===bx&&ay+1===by;
  const d=Math.abs(ax-bx)+Math.abs(ay-by);return r.kind==='next'?d===1:r.kind==='notnext'?d>1:false;
 }
 if(b<0)return false;if(r.kind==='before')return a<b;
 return r.kind==='next'?Math.abs(a-b)===1:r.kind==='notnext'?Math.abs(a-b)>1:false;
}
function evaluateLogic(l,order,swaps=0){
 if(order.length!==l.items.length||new Set(order).size!==l.items.length||l.items.some(id=>!order.includes(id)))return{ok:false,message:'还有卡片没有放好。每张卡只能用一次，先填好所有位置。'};
 const failed=l.rules.find(r=>!logicRuleOK(r,order,l));if(failed)return{ok:false,message:'再检查这条线索：'+failed.text+'。找找哪些位置需要调整。'};
 if(l.repair&&(swaps!==1||order.filter((id,i)=>id!==l.initial[i]).length!==2))return{ok:false,message:'这一关只交换一次。重新开始，先想好要换哪两张卡。'};
 return{ok:true};
}
function logicMiniMap(r,l){return `<span class="logic-mini-map" style="--logic-cols:${l.cols}">${Array.from({length:l.cols*2},(_,pos)=>`<i class="${!l.slots.includes(pos)?'window':(r.kind==='at'?pos===r.b:r.kind==='row'?Math.floor(pos/l.cols)===r.b:pos%l.cols===r.b)?'marked':''}"></i>`).join('')}</span>`;}
function logicRulePicture(r,l){
 const p=logicPicture,marker=i=>l.mode==='match'?p(l.targets[i]):`<span class="logic-number">${i+1}</span>`;
 if(l.mode==='grid'){
  if(['at','row','col'].includes(r.kind))return `${p(r.a)}<span>｜</span>${logicMiniMap(r,l)}`;
  if(r.kind==='right')return `${p(r.b)}<span>→</span>${p(r.a)}`;
  if(r.kind==='left')return `${p(r.a)}<span>←</span>${p(r.b)}`;
  if(r.kind==='below'||r.kind==='above')return `<div class="logic-vertical">${p(r.kind==='below'?r.b:r.a)}<span>${r.kind==='below'?'↓':'↑'}</span>${p(r.kind==='below'?r.a:r.b)}</div>`;
 }
 if(r.kind==='oneof'||r.kind==='notset')return `${p(r.a)}<span>${r.kind==='oneof'?'｜':'≠'}</span><span class="logic-choice-pair">${r.b.map(marker).join(`<small>${r.kind==='oneof'?'或':'、'}</small>`)}</span>`;
 if(r.kind==='between')return `${p(r.b[0])}<span>…</span>${p(r.a)}<span>…</span>${p(r.b[1])}`;
 return `${p(r.a)}<span>${{at:'｜',notat:'≠',before:'→',next:'↔',notnext:'⋯'}[r.kind]}</span>${typeof r.b==='number'?marker(r.b):p(r.b)}`;
}
function logicBoard(){const l=lessons[step],n=l.items.length;
 const note=l.mode==='match'?'每位朋友一份礼物 · 每份礼物只能用一次':l.mode==='order'?'从左到右是送货先后 · 之前不一定紧挨 · 紧挨表示中间没有别的站':'上排在上，下排在下 · 只有左右或上下紧挨才是邻居，斜对角不算';
 const slot=(i,pos)=>{const id=logicOrder[i],label=l.mode==='match'?LOGIC_NAMES[l.targets[i]]:l.mode==='order'?`第 ${i+1} 站`:`${Math.floor(pos/l.cols)===0?'上':'下'}排第 ${pos%l.cols+1} 格`;
 return `<button class="logic-slot ${id&&logicPicked===id?'selected':''}" data-logic-slot="${i}" aria-label="${label}：${id?LOGIC_NAMES[id]:'空位'}" ${solved?'disabled':''}>${l.mode==='match'?`<span class="logic-target">${logicPicture(l.targets[i])}<small>${label}</small></span>`:`<small>${label}</small>`}${id?logicPicture(id):'<span class="logic-empty">＋</span>'}<strong>${id?LOGIC_NAMES[id]:'放这里'}</strong></button>`;};
 return `<div class="logic-rules" aria-label="图画线索">${l.rules.map((r,i)=>`<div class="logic-rule ${logicChecked&&!logicRuleOK(r,logicOrder,l)?'conflict':''}"><div class="logic-relation" aria-hidden="true">${logicRulePicture(r,l)}</div><small>${i+1}. ${r.text}${logicChecked&&!logicRuleOK(r,logicOrder,l)?' · 再看看':''}</small></div>`).join('')}</div><p class="logic-note">${note}</p><div class="logic-board logic-${l.mode}" style="--logic-cols:${l.mode==='grid'?l.cols:n}">${l.mode==='grid'?Array.from({length:l.cols*2},(_,pos)=>l.slots.includes(pos)?slot(l.slots.indexOf(pos),pos):'<div class="logic-window" aria-label="窗户，不能摆展品"><span aria-hidden="true">⊞</span><small>窗户 · 留空</small></div>').join(''):logicOrder.map((_,i)=>slot(i,i)).join('')}</div>${l.repair?`<p class="logic-note">已交换 ${logicSwaps} / 1 次 · 可以重新开始</p>`:`<div class="logic-waiting"><small>集合处</small><div>${l.items.filter(id=>!logicOrder.includes(id)).map(id=>`<button data-logic-item="${id}" class="logic-item ${logicPicked===id?'selected':''}" aria-pressed="${logicPicked===id}" ${solved?'disabled':''}>${logicPicture(id)}<span>${LOGIC_NAMES[id]}</span></button>`).join('')||'<span class="logic-note">卡片都放好啦</span>'}</div><button class="secondary" id="logic-return" ${solved||!logicPicked||!logicOrder.includes(logicPicked)?'disabled':''}>放回集合处</button></div>`}<div class="logic-tools"><span role="status">${logicPicked?'已选 '+LOGIC_NAMES[logicPicked]+'，再点目标位置':'先选一张卡，再放置或交换'}</span><button class="secondary" id="logic-reset" ${solved?'disabled':''}>重新开始</button></div>`;
}
function logicChanged(){logicChecked=false;$('#feedback').hidden=true;refreshBoard();}
function bindLogicBoard(){const l=lessons[step];
 document.querySelectorAll('[data-logic-item]').forEach(b=>b.onclick=()=>{if(solved)return;logicPicked=logicPicked===b.dataset.logicItem?null:b.dataset.logicItem;refreshBoard();});
 document.querySelectorAll('[data-logic-slot]').forEach(b=>b.onclick=()=>{
  if(solved)return;const i=Number(b.dataset.logicSlot),occupant=logicOrder[i];
  if(!logicPicked){logicPicked=occupant;refreshBoard();return;}if(logicPicked===occupant){logicPicked=null;refreshBoard();return;}
  if(l.repair&&logicSwaps>=1){toast('已经交换一次。可以检查，或重新开始再试。');return;}
  const from=logicOrder.indexOf(logicPicked);if(from>=0)logicOrder[from]=occupant;logicOrder[i]=logicPicked;logicPicked=null;if(l.repair)logicSwaps++;logicChanged();
 });
 if($('#logic-return'))$('#logic-return').onclick=()=>{if(solved)return;const i=logicOrder.indexOf(logicPicked);if(i>=0)logicOrder[i]=null;logicPicked=null;logicChanged();};
 $('#logic-reset').onclick=()=>{if(solved)return;resetLogic(l);logicChanged();};
 $('#check').disabled=!solved&&(logicOrder.some(id=>!id)||(l.repair&&logicSwaps!==1));
}
function checkLogic(){logicChecked=true;return evaluateLogic(lessons[step],logicOrder,logicSwaps);}
