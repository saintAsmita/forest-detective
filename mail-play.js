'use strict';
const MAIL_DIRECTIONS={U:{symbol:'↑',name:'上'},R:{symbol:'→',name:'右'},D:{symbol:'↓',name:'下'},L:{symbol:'←',name:'左'}};
let mailMoves=[],mailPreview=null;
function resetMail(){mailMoves=[];mailPreview=null;}
function followMailRoute(l,moves){
 let position=l.start,picked=l.pickup===undefined||l.pickup===l.start;const path=[position];
 for(let i=0;i<moves.length;i++){
  const direction=moves[i],x=position%l.cols,y=Math.floor(position/l.cols),dx=direction==='R'?1:direction==='L'?-1:0,dy=direction==='D'?1:direction==='U'?-1:0;
  if(!MAIL_DIRECTIONS[direction])return{ok:false,path,position,picked,message:'还有一个箭头没有补好。'};
  const nx=x+dx,ny=y+dy,next=ny*l.cols+nx;
  if(nx<0||nx>=l.cols||ny<0||ny>=l.rows)return{ok:false,path,position,picked,message:`第${i+1}步走出地图了。换一个方向试试。`};
  if(l.blocks.includes(next))return{ok:false,path,position,picked,message:`第${i+1}步碰到池塘了。找一条绕开的路吧。`};
  position=next;path.push(position);if(position===l.pickup)picked=true;
 }
 return{ok:position===l.target&&picked,path,position,picked,message:!picked?'路线还没有经过信封，记得先取信哦。':position!==l.target?'还没到信箱。看看终点在哪一格，再调整路线。':'信送到了！'};
}
function mailArrow(d){return `<span class="mail-arrow" role="img" aria-label="向${MAIL_DIRECTIONS[d]?.name||'待补充'}走一格">${MAIL_DIRECTIONS[d]?.symbol||'?'}</span>`;}
function mailIcon(kind){const content={
 pond:'<ellipse cx="30" cy="35" rx="26" ry="17" fill="#9bd9e9"/><path d="M12 31q8 6 16 0m1 11q8 5 16-1" fill="none" stroke="#438fa6" stroke-width="3"/><path d="m45 26 7-14m-6 13-2-10" stroke="#648757" stroke-width="3"/>',
 letter:'<rect x="6" y="14" width="48" height="34" rx="6" fill="#fff6cd" stroke="#c9994b" stroke-width="3"/><path d="m8 17 22 17 22-17" fill="none" stroke="#c9994b" stroke-width="3"/><circle cx="30" cy="33" r="6" fill="#c87695"/>',
 mailbox:'<path d="M27 35v20" stroke="#88704f" stroke-width="7"/><path d="M9 34V20a12 12 0 0 1 12-12h19a12 12 0 0 1 12 12v14Z" fill="#9b8bc9" stroke="#665383" stroke-width="3"/><path d="M12 34V21a9 9 0 0 1 18 0v13m7-13h10" fill="none" stroke="#665383" stroke-width="3"/><path d="M45 18V3h11v8H45" fill="#ecb869" stroke="#ad7947" stroke-width="2"/>',
 flower:'<path d="M31 45V26m0 13 11-8" stroke="#9daa75" stroke-width="3"/><g fill="#e6cbdc"><circle cx="25" cy="24" r="7"/><circle cx="36" cy="24" r="7"/><circle cx="30" cy="17" r="7"/><circle cx="30" cy="31" r="7"/></g><circle cx="30" cy="24" r="5" fill="#edc570"/>'
 }[kind];return `<svg viewBox="0 0 60 60" class="mail-icon" aria-hidden="true">${content}</svg>`;}
function mailBoard(){
 const l=lessons[step],route=l.type==='mail-plan'?Array.from({length:l.limit},(_,i)=>mailMoves[i]||null):l.type==='mail-gap'?l.route.map(d=>d||[...selected][0]||null):l.route;
 const map=Array.from({length:l.cols*l.rows},(_,i)=>{
  const blocked=l.blocks.includes(i),isStart=i===l.start,isEnd=i===l.target&&l.type!=='mail-trace',isPickup=i===l.pickup,visited=mailPreview?.path.includes(i),current=mailPreview?.position===i;
  const label=`第${Math.floor(i/l.cols)+1}行第${i%l.cols+1}列${blocked?'，池塘':isStart?'，绒绒出发点':isEnd?'，信箱':isPickup?'，信封':''}`;
  const picture=current||(!mailPreview&&isStart)?'<img class="mail-rabbit" src="./assets/rabbit.png" alt="绒绒">':blocked?mailIcon('pond'):isEnd?mailIcon('mailbox'):isPickup?mailIcon('letter'):isStart?'<span class="mail-start">起点</span>':mailIcon('flower');
  return `<button class="mail-cell ${blocked?'pond':''} ${visited?'visited':''} ${current?'current':''} ${l.type==='mail-trace'&&selected.has(String(i))?'selected':''}" data-mail-cell="${i}" aria-label="${label}" ${l.type!=='mail-trace'||solved?'disabled':''}>${picture}${visited?`<span class="mail-step">${mailPreview.path.indexOf(i)}</span>`:''}${isEnd?'<span class="mail-place">信箱</span>':isPickup?`<span class="mail-place">${mailPreview?.picked?'已取信':'取信'}</span>`:''}</button>`;
 }).join('');
 const routes=l.type==='mail-compare'?`<div class="mail-route-options">${l.routes.map((r,i)=>`<button class="mail-route-card ${selected.has(String(i))?'selected':''}" data-mail-route="${i}" aria-label="路线${i+1}：${r.map(d=>'向'+MAIL_DIRECTIONS[d].name).join('，')}" aria-pressed="${selected.has(String(i))}" ${solved?'disabled':''}><small>${i+1}</small>${r.map(mailArrow).join('')}</button>`).join('')}</div>`:`<div class="mail-route" aria-label="路线卡">${route.map((d,i)=>`<span class="mail-route-slot ${!d?'empty':''}">${mailArrow(d)}<small>${i+1}</small></span>`).join('')}</div>`;
 const controls=['mail-plan','mail-gap'].includes(l.type)?`<div class="mail-direction-pad" aria-label="选择方向">${Object.entries(MAIL_DIRECTIONS).map(([id,d])=>`<button data-mail-direction="${id}" class="mail-direction ${selected.has(id)?'selected':''}" aria-label="向${d.name}" ${solved||(l.type==='mail-plan'&&mailMoves.length>=l.limit)?'disabled':''}>${d.symbol}</button>`).join('')}</div>${l.type==='mail-plan'?`<div class="mail-edit"><span>${mailMoves.length} / ${l.limit} 步</span><button id="mail-undo" ${solved||!mailMoves.length?'disabled':''}>↶ 撤回一步</button><button id="mail-clear" ${solved||!mailMoves.length?'disabled':''}>重新排</button></div>`:''}`:'';
 return `<div class="mail-scene"><div class="mail-map" style="--cols:${l.cols}" aria-label="送信地图，上方为上，下方为下">${map}</div><div class="mail-plan-panel"><p class="mail-route-label">路线卡 · 从左往右走</p>${routes}${controls}<p class="mail-legend">${l.pickup!==undefined?'✉ 先取信，再送到信箱':'每个箭头走一格'}${l.blocks.length?' · 绕开池塘':''}</p></div></div>`;
}
function mailChanged(){mailPreview=null;$('#feedback').hidden=true;refreshBoard();}
function bindMailBoard(){
 const l=lessons[step];
 document.querySelectorAll('[data-mail-cell]').forEach(b=>b.onclick=()=>{if(solved||l.type!=='mail-trace')return;selected=new Set([b.dataset.mailCell]);mailChanged();});
 document.querySelectorAll('[data-mail-direction]').forEach(b=>b.onclick=()=>{if(solved)return;if(l.type==='mail-plan'){if(mailMoves.length<l.limit)mailMoves.push(b.dataset.mailDirection);}else selected=new Set([b.dataset.mailDirection]);mailChanged();});
 document.querySelectorAll('[data-mail-route]').forEach(b=>b.onclick=()=>{if(solved)return;selected=new Set([b.dataset.mailRoute]);mailChanged();});
 if($('#mail-undo'))$('#mail-undo').onclick=()=>{if(!solved){mailMoves.pop();mailChanged();}};
 if($('#mail-clear'))$('#mail-clear').onclick=()=>{if(!solved){mailMoves=[];mailChanged();}};
 $('#check').disabled=solved?false:l.type==='mail-plan'?mailMoves.length!==l.limit:selected.size===0;
}
function checkMail(){
 const l=lessons[step];
 if(l.type==='mail-trace'){
  const correct=selected.has(String(l.target));mailPreview=correct?followMailRoute(l,l.route):null;return{ok:correct,message:l.wrong};
 }
 const route=l.type==='mail-plan'?mailMoves:l.type==='mail-gap'?l.route.map(d=>d||[...selected][0]):l.routes[Number([...selected][0])];
 mailPreview=followMailRoute(l,route||[]);return mailPreview;
}
