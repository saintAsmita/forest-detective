'use strict';
const VARIETY_TYPES=['water','balance','mosaic','switches'];
const isVariety=l=>l&&VARIETY_TYPES.includes(l.type);
const WATER_SHAPES={straight:[0,2],elbow:[0,1],tee:[0,1,3]};
const DIR_NAMES=['上','右','下','左'];
let varietyState=[],varietyTouched=new Set(),varietyMoves=0,varietyChecked=false;
function resetVariety(l){varietyState=isVariety(l)?[...l.initial]:[];varietyTouched=new Set();varietyMoves=0;varietyChecked=false;if(typeof document!=='undefined'){const notice=document.querySelector('#toast');if(notice)notice.hidden=true;}}
function pipeDirections(shape,rotation){return WATER_SHAPES[shape].map(d=>(d+rotation)%4);}
function waterNeighbor(pos,dir,l){const x=pos%l.cols,y=Math.floor(pos/l.cols),nx=x+[0,1,0,-1][dir],ny=y+[-1,0,1,0][dir];return nx<0||nx>=l.cols||ny<0||ny>=l.rows?-1:ny*l.cols+nx;}
function inspectWater(l,values){
 const dirs=l.shapes.map((s,i)=>pipeDirections(s,values[i])),bad=new Set(),links=dirs.map(()=>[]);
 for(let i=0;i<dirs.length;i++)for(const d of dirs[i]){
  const j=l.positions.indexOf(waterNeighbor(l.positions[i],d,l));
  if(j>=0&&dirs[j].includes((d+2)%4)){links[i].push(j);continue;}
  if(!l.ports.some(p=>p.pos===l.positions[i]&&p.dir===d))bad.add(i);
 }
 for(const p of l.ports){const i=l.positions.indexOf(p.pos);if(!dirs[i].includes(p.dir))bad.add(i);}
 const source=l.ports.find(p=>p.kind==='source'),start=l.positions.indexOf(source.pos),wet=new Set();
 if(dirs[start].includes(source.dir)){const queue=[start];wet.add(start);while(queue.length){const i=queue.shift();for(const j of links[i])if(!wet.has(j)){wet.add(j);queue.push(j);}}}
 const flowers=l.ports.filter(p=>p.kind==='flower'),watered=flowers.filter(p=>{const i=l.positions.indexOf(p.pos);return wet.has(i)&&dirs[i].includes(p.dir);}).length;
 for(let i=0;i<dirs.length;i++)if(!wet.has(i))bad.add(i);
 return{ok:bad.size===0&&watered===flowers.length,wet:[...wet],bad:[...bad],watered,flowers:flowers.length};
}
function balanceTotal(side,l,values){return side.reduce((n,id)=>n+(id==='unit'?1:values[l.items.indexOf(id)]),0);}
function balanceReady(eq,l,values){return [...eq.left,...eq.right].every(id=>id==='unit'||values[l.items.indexOf(id)]>0);}
function balanceRuleOK(eq,l,values){return balanceReady(eq,l,values)&&balanceTotal(eq.left,l,values)===balanceTotal(eq.right,l,values);}
function mosaicRuleOK(r,values){return r.kind==='count'?r.cells.reduce((n,i)=>n+values[i],0)===r.n:r.kind==='same'?values[r.cells[0]]===values[r.cells[1]]:values[r.cells[0]]!==values[r.cells[1]];}
function switchLights(l,values){const lights=Array(l.target.length).fill(0);values.forEach((v,i)=>{if(v)for(const j of l.effects[i])lights[j]=1-lights[j];});return lights;}
function evaluateVariety(l,values,meta={}){
 if(values.length!==l.initial.length||values.some(v=>!Number.isInteger(v)))return{ok:false,message:'先把每个位置都设置好。'};
 if(l.type==='water'&&values.some((v,i)=>v<0||v>=(l.shapes[i]==='straight'?2:4)))return{ok:false,message:'水渠方向无效，请重新开始。'};
 if(l.type==='balance'&&values.some(v=>v<1||v>l.max))return{ok:false,message:'先给每只袋子填上一到四颗石子的重量。'};
 if(['mosaic','switches'].includes(l.type)&&values.some(v=>v!==0&&v!==1))return{ok:false,message:'先把图案设置好。'};
 if(l.type==='water'){
  const info=inspectWater(l,values);if(!info.ok)return{ok:false,message:`还有水渠没接好。已通水 ${info.wet.length}/${l.positions.length} 块，花朵 ${info.watered}/${info.flowers} 朵。检查红框里的接口是否对齐、有没有朝向空地。`,bad:info.bad};
 }else if(l.type==='balance'){
  const i=l.equations.findIndex(eq=>!balanceRuleOK(eq,l,values));if(i>=0)return{ok:false,message:`再检查第 ${i+1} 架天平：${l.clues[i]}。当前填写的重量还不能让两边一样重。`,bad:[i]};
 }else if(l.type==='mosaic'){
  const i=l.rules.findIndex(r=>!mosaicRuleOK(r,values));if(i>=0)return{ok:false,message:'再看看这张图卡：'+l.rules[i].text+'。只数框出的格子，再调整图案。',bad:l.rules[i].cells};
 }else{
  const lights=switchLights(l,values),bad=lights.map((v,i)=>v!==l.target[i]?i:-1).filter(i=>i>=0);if(bad.length)return{ok:false,message:'对照目标，红框里的灯亮暗还不同。看看哪些开关会改变它们，再想想重叠的变化。',bad};
 }
 if(l.repair){const changed=values.filter((v,i)=>v!==l.initial[i]).length;
  if(changed!==1||meta.touched!==1||(['mosaic','switches'].includes(l.type)&&meta.moves!==1))return{ok:false,message:['mosaic','switches'].includes(l.type)?'这一关只操作一次。重新开始，先想好要改变哪里。':'这一关只调整一个位置。重新开始，保留正确的部分。'};
 }
 return{ok:true};
}
function varietyFlower(){return '<svg class="v-icon" viewBox="0 0 64 64" role="img" aria-label="花"><path d="M32 38v23m0-10q-19 0-17-12 14-2 17 12m0-5q18-2 17-13-15 0-17 13" stroke="#7e9d63" stroke-width="3" fill="#abc78b"/><g fill="#e7ae9d"><circle cx="22" cy="18" r="10"/><circle cx="42" cy="18" r="10"/><circle cx="32" cy="9" r="9"/><circle cx="19" cy="30" r="9"/><circle cx="45" cy="30" r="9"/><circle cx="32" cy="36" r="10"/></g><circle cx="32" cy="23" r="10" fill="#efd584"/></svg>';}
function varietyDrop(){return '<svg class="v-icon" viewBox="0 0 64 64" role="img" aria-label="水源"><path d="M32 4Q6 34 12 45a22 22 0 0 0 40 0Q58 34 32 4Z" fill="#79b9d1"/><path d="M20 34q-6 13 5 17" fill="none" stroke="#d8edf0" stroke-width="4" stroke-linecap="round"/></svg>';}
function varietyStone(){return '<svg class="v-stone" viewBox="0 0 36 30" role="img" aria-label="一颗石子"><path d="M3 22 8 9 21 3 32 12 34 24 18 28Z" fill="#c1c6b5" stroke="#849180" stroke-width="2"/><path d="m8 9 11 4 13-1M19 13l-1 15" fill="none" stroke="#dce0d1" stroke-width="2"/></svg>';}
function varietyBag(id){return `<span class="v-bag" role="img" aria-label="${LOGIC_NAMES[id]}袋">${logicPicture(id)}</span>`;}
function waterBoard(l){const info=inspectWater(l,varietyState);
 return `<div class="v-legend">${varietyDrop()}<span>水源入口</span>${varietyFlower()}<span>花朵出口</span><span>点水渠 ↻ 转动</span></div><p class="v-note" role="status">已通水 ${info.wet.length} / ${l.positions.length} 块 · 花朵 ${info.watered} / ${info.flowers} 朵</p><div class="water-grid" style="--v-cols:${l.cols}">${Array.from({length:l.cols*l.rows},(_,pos)=>{const i=l.positions.indexOf(pos);if(i<0)return '<div class="water-grass" aria-label="草地，没有接口"><span aria-hidden="true">⌁</span></div>';const dirs=pipeDirections(l.shapes[i],varietyState[i]);return `<button class="water-tile ${info.wet.includes(i)?'wet':''} ${varietyChecked&&info.bad.includes(i)?'v-conflict':''}" data-v-index="${i}" aria-label="${Math.floor(pos/l.cols)+1}排${pos%l.cols+1}列水渠，接口朝${dirs.map(d=>DIR_NAMES[d]).join('、')}，点击顺时针转动" ${solved?'disabled':''}><svg viewBox="0 0 100 100" aria-hidden="true">${dirs.map(d=>`<path d="M50 50L${[50,100,50,0][d]} ${[0,50,100,50][d]}"/>`).join('')}<circle cx="50" cy="50" r="11"/></svg>${l.ports.filter(p=>p.pos===pos).map(p=>`<span class="water-port port-${p.dir}" aria-hidden="true">${p.kind==='source'?varietyDrop():varietyFlower()}</span>`).join('')}</button>`;}).join('')}</div>`;
}
function balanceBoard(l){const side=ids=>ids.map(id=>id==='unit'?varietyStone():varietyBag(id)).join('');
 return `<p class="v-note">每袋 1～4 颗石子的重量 · 不同袋子可以一样重 · 图上的天平都已称好</p><div class="balance-facts">${l.equations.map((eq,i)=>`<div class="balance-fact ${varietyChecked&&!balanceRuleOK(eq,l,varietyState)?'v-conflict':''}" aria-label="第${i+1}架天平：${l.clues[i]}"><small>天平 ${i+1} · 两边一样重</small><div class="balance-pans"><div>${side(eq.left)}</div><span aria-hidden="true">＝</span><div>${side(eq.right)}</div></div><svg class="balance-stand" viewBox="0 0 220 28" aria-hidden="true"><path d="M15 3h190M110 3v22M91 25h38" stroke="#a39375" stroke-width="3" fill="none"/></svg></div>`).join('')}</div><div class="weight-cards">${l.items.map((id,i)=>`<div class="weight-card">${varietyBag(id)}<strong>${LOGIC_NAMES[id]}袋</strong><div class="weight-value" aria-label="${varietyState[i]||'尚未填写'}颗">${varietyState[i]?Array(varietyState[i]).fill(0).map(varietyStone).join(''):'待判断'}</div><div class="weight-controls"><button data-v-minus="${i}" aria-label="${LOGIC_NAMES[id]}袋减少一颗" ${solved||varietyState[i]===0?'disabled':''}>−</button><span>${varietyState[i]||'?'}</span><button data-v-plus="${i}" aria-label="${LOGIC_NAMES[id]}袋增加一颗" ${solved||varietyState[i]===l.max?'disabled':''}>＋</button></div></div>`).join('')}</div>`;
}
function mosaicMask(l,cells){return `<span class="mosaic-mask" style="--v-cols:${l.cols}" aria-hidden="true">${Array.from({length:l.cols*2},(_,pos)=>{const i=l.slots.indexOf(pos);return `<i class="${i<0?'wood':cells.includes(i)?'marked':''}"></i>`;}).join('')}</span>`;}
function mosaicBoard(l){return `<div class="mosaic-rules">${l.rules.map((r,i)=>`<div class="mosaic-rule ${varietyChecked&&!mosaicRuleOK(r,varietyState)?'v-conflict':''}"><div class="mosaic-rule-pic" aria-hidden="true">${mosaicMask(l,r.cells)}<span>｜</span>${r.kind==='count'?r.n?Array(r.n).fill(0).map(varietyFlower).join(''):`<span>0</span>${varietyFlower()}`:`<span class="v-relation">${r.kind==='same'?'＝':'≠'}</span>`}</div><small>${i+1}. ${r.text}</small></div>`).join('')}</div><p class="v-note">框出的格子一起看 · 花与叶子点一下就翻面</p><div class="mosaic-grid" style="--v-cols:${l.cols}">${Array.from({length:l.cols*2},(_,pos)=>{const i=l.slots.indexOf(pos);if(i<0)return '<div class="mosaic-wood" aria-label="固定木板，不能翻面">木板</div>';return `<button data-v-index="${i}" class="mosaic-tile ${varietyState[i]?'flower':'leaf'}" aria-label="${Math.floor(pos/l.cols)+1}排${pos%l.cols+1}列：${varietyState[i]?'花':'叶子'}，点击翻面" ${solved?'disabled':''}>${varietyState[i]?varietyFlower():logicPicture('leaf')}<small>${varietyState[i]?'花':'叶子'}</small></button>`;}).join('')}</div>`;}
function varietyLamp(on,i,bad=false){return `<span class="v-lamp ${on?'on':'off'} ${bad?'v-conflict':''}" role="img" aria-label="第${i+1}盏${on?'亮':'暗'}"><svg viewBox="0 0 44 52" aria-hidden="true"><path d="M16 7V4h12v3"/><rect x="9" y="9" width="26" height="32" rx="7"/><path d="M7 11h30M7 40h30"/><path class="lamp-flame" d="m22 18-6 15h12Z"/></svg><small>${i+1} · ${on?'亮':'暗'}</small></span>`;}
function switchEffect(l,effect){return l.target.map((_,j)=>`<span class="${effect.includes(j)?'affected':''}"><svg viewBox="0 0 30 35"><path d="M11 5V2h8v3"/><rect x="6" y="6" width="18" height="25" rx="5"/><path d="M4 8h22M4 29h22"/></svg><small>${j+1}</small></span>`).join('');}
function switchBoard(l){const now=switchLights(l,varietyState),icons=['leaf','shell','star','moon','gem'];
 return `<div class="switch-comparison"><div><strong>目标</strong><div class="lamp-row">${l.target.map((v,i)=>varietyLamp(v,i)).join('')}</div></div><div><strong>现在</strong><div class="lamp-row">${now.map((v,i)=>varietyLamp(v,i,varietyChecked&&v!==l.target[i])).join('')}</div></div></div><p class="v-note">图卡中的灯会反转：暗变亮，亮变暗 · 同一盏变两次回到原样</p><div class="switch-buttons">${l.effects.map((effect,i)=>`<button data-v-index="${i}" class="v-switch ${varietyState[i]?'active':''}" aria-pressed="${Boolean(varietyState[i])}" aria-label="${LOGIC_NAMES[icons[i]]}开关，改变第${effect.map(j=>j+1).join('、')}盏，${varietyState[i]?'已使用':'未使用'}" ${solved?'disabled':''}><div>${logicPicture(icons[i])}<strong>${LOGIC_NAMES[icons[i]]}开关</strong><span>${varietyState[i]?'✓ 使用中':'未使用'}</span></div><div class="switch-effect" aria-hidden="true">${switchEffect(l,effect)}</div><small>只改变图卡里金色的灯</small></button>`).join('')}</div>`;
}
function varietyBoard(){const l=lessons[step],body=l.type==='water'?waterBoard(l):l.type==='balance'?balanceBoard(l):l.type==='mosaic'?mosaicBoard(l):switchBoard(l);return `<div class="variety-board">${body}${l.repair?`<p class="v-note" role="status">${['water','balance'].includes(l.type)?'已调整 '+varietyTouched.size+' / 1 个位置':'已操作 '+varietyMoves+' / 1 次'} · 选错可重新开始</p>`:''}<div class="v-tools"><span>线索一直可见，可以慢慢调整</span><button class="secondary" id="variety-reset" ${solved?'disabled':''}>重新开始</button></div></div>`;}
function changeVariety(i,value){if(solved||value===varietyState[i])return;const l=lessons[step];if(l.repair){if(['mosaic','switches'].includes(l.type)&&varietyMoves>=1){toast('已经操作一次。可以检查，或重新开始。');return;}if(['water','balance'].includes(l.type)&&varietyTouched.size&&!varietyTouched.has(i)){toast('这一关只调整一个位置。想换一个，可以重新开始。');return;}}
 varietyState[i]=value;varietyMoves++;varietyTouched.add(i);varietyChecked=false;$('#feedback').hidden=true;refreshBoard();
}
function bindVarietyBoard(){const l=lessons[step];document.querySelectorAll('[data-v-index]').forEach(b=>b.onclick=()=>{const i=Number(b.dataset.vIndex),cycle=l.type==='water'?(l.shapes[i]==='straight'?2:4):2;changeVariety(i,(varietyState[i]+1)%cycle);});document.querySelectorAll('[data-v-plus]').forEach(b=>b.onclick=()=>{const i=Number(b.dataset.vPlus);changeVariety(i,Math.min(l.max,varietyState[i]+1));});document.querySelectorAll('[data-v-minus]').forEach(b=>b.onclick=()=>{const i=Number(b.dataset.vMinus);changeVariety(i,Math.max(0,varietyState[i]-1));});$('#variety-reset').onclick=()=>{if(solved)return;resetVariety(l);$('#feedback').hidden=true;refreshBoard();};$('#check').disabled=!solved&&((l.type==='balance'&&varietyState.some(v=>!v))||(l.repair&&varietyMoves===0));}
function checkVariety(){varietyChecked=true;return evaluateVariety(lessons[step],varietyState,{moves:varietyMoves,touched:varietyTouched.size});}
