'use strict';
let picnicCleanup=null;
function cancelPicnicDrag(){picnicCleanup?.();picnicCleanup=null;}
function resetPicnic(l){cancelPicnicDrag();if(l?.initial)l.initial.forEach((dish,i)=>placements['t'+i]=String(dish));}
const PICNIC_NAMES={rabbit:'绒绒',squirrel:'松松',bear:'大树',fox:'阿橙',koala:'灰灰'};
function snackIcon(kind){const drawings={
 berry:'<path d="M12 18C3 33 19 53 30 58c11-5 27-25 18-40-8-10-28-10-36 0" fill="#dc6262" stroke="#9f464a" stroke-width="2"/><path d="m30 21-17-9 14 1L30 2l5 11 14-1-17 10Z" fill="#739460"/><g fill="#ffdfb1"><ellipse cx="19" cy="29" rx="2" ry="3"/><ellipse cx="38" cy="29" rx="2" ry="3"/><ellipse cx="29" cy="38" rx="2" ry="3"/><ellipse cx="24" cy="48" rx="2" ry="3"/><ellipse cx="42" cy="40" rx="2" ry="3"/></g>',
 cone:'<path d="M30 4C5 19 9 47 30 58 51 47 55 19 30 4Z" fill="#bc8450" stroke="#775137" stroke-width="2"/><path d="m18 20 12 7 12-7M14 31l16 8 16-8M18 43l12 7 12-7M30 9v6" fill="none" stroke="#845b3a" stroke-width="3"/><path d="m30 27-8 7m8 5 9 7" stroke="#e4af72" stroke-width="2"/>',
 cookie:'<circle cx="30" cy="30" r="25" fill="#e7bd7a" stroke="#b3844e" stroke-width="3"/><circle cx="30" cy="30" r="19" fill="none" stroke="#f7d59c" stroke-width="2"/><g fill="#95683f"><circle cx="20" cy="18" r="3"/><circle cx="38" cy="23" r="3.5"/><circle cx="26" cy="35" r="3"/><circle cx="40" cy="39" r="3"/><circle cx="19" cy="43" r="2"/></g>'
 };return `<svg class="snack-icon" viewBox="0 0 60 64" role="img" aria-label="${{berry:'莓果',cone:'松果',cookie:'饼干'}[kind]}">${drawings[kind]}</svg>`;}
function picnicToken(kind,i){return `<button class="snack-token ${selected.has('t'+i)?'selected':''}" data-snack="t${i}" aria-pressed="${selected.has('t'+i)}" aria-label="第${i+1}${kind==='cookie'?'块饼干':kind==='berry'?'颗莓果':'颗松果'}" ${solved?'disabled':''}>${snackIcon(kind)}</button>`;}
function picnicBoard(){
 const l=lessons[step];
 if(l.type==='picnic-compare')return `<div class="picnic-compare"><section class="compare-tray"><small>左边</small><div class="snack-arrangement compact">${Array.from({length:l.amount},()=>snackIcon('berry')).join('')}</div></section><section class="compare-tray"><small>右边</small><div class="snack-arrangement spread">${Array.from({length:l.amount},()=>snackIcon('berry')).join('')}</div></section></div><div class="picnic-answers">${[['left','←','左边多'],['same','=','一样多'],['right','→','右边多']].map(([id,icon,label])=>`<button data-picnic-answer="${id}" class="picnic-answer ${selected.has(id)?'selected':''}" aria-pressed="${selected.has(id)}" ${solved?'disabled':''}><strong aria-hidden="true">${icon}</strong>${label}</button>`).join('')}</div>${solved?'<p class="picnic-note">两边都是四颗，没有增加，也没有减少。</p>':''}`;
 if(l.type==='picnic-combine')return `<div class="picnic-seat-row" aria-label="五个座位">${Array.from({length:l.target},(_,i)=>`<div class="picnic-seat" aria-label="第${i+1}个座位">${solved?snackIcon('cookie'):'<span aria-hidden="true">◌</span>'}</div>`).join('')}</div><p class="picnic-note">从下面选两盘，给上面每个座位配一块</p><div class="snack-trays">${l.trayCounts.map((n,i)=>`<button data-picnic-tray="${i}" aria-label="第${i+1}盘，${n}块饼干" aria-pressed="${selected.has(String(i))}" class="snack-tray ${selected.has(String(i))?'selected':''}" ${solved?'disabled':''}>${Array.from({length:n},()=>snackIcon('cookie')).join('')}</button>`).join('')}</div><p class="picnic-note">已选 ${selected.size} / 2 盘</p>`;
 return `<div class="picnic-basket" data-dish="basket"><div class="picnic-basket-title"><span>大家的点心篮</span><button class="picnic-small-button" data-serve="basket" ${solved?'disabled':''}>放回篮子</button></div><div class="picnic-loose">${l.items.map((k,i)=>Object.hasOwn(placements,'t'+i)?'':picnicToken(k,i)).join('')||'<span class="picnic-empty">篮子里的点心都拿出来了</span>'}</div></div><div class="picnic-dishes ${l.friends.length===4?'four-friends':''}">${l.friends.map((friend,index)=>`<section class="picnic-dish" data-dish="${index}" aria-label="${PICNIC_NAMES[friend]}的盘子"><header><img src="./assets/${friend}.png" alt="${PICNIC_NAMES[friend]}"><strong>${PICNIC_NAMES[friend]}</strong></header><div class="picnic-dish-items">${l.items.map((k,i)=>placements['t'+i]===String(index)?picnicToken(k,i):'').join('')}</div><button class="picnic-small-button" data-serve="${index}" ${solved?'disabled':''}>放这里</button></section>`).join('')}</div><p class="picnic-note">点一下点心，再点盘子；也可以直接拖动</p>`;
}
function movePicnicToken(id,dish){
 const l=lessons[step];if(solved||l.type!=='picnic-share'||!/^t\d+$/.test(id)||Number(id.slice(1))>=l.items.length)return;
 if(dish==='basket')delete placements[id];else if(Number.isInteger(Number(dish))&&Number(dish)>=0&&Number(dish)<l.friends.length)placements[id]=String(dish);else return;
 selected.clear();$('#feedback').hidden=true;refreshBoard();
}
function bindPicnicBoard(){
 const l=lessons[step];
 document.querySelectorAll('[data-snack]').forEach(b=>{
  b.onclick=e=>{e.stopPropagation();if(solved)return;selected=new Set([b.dataset.snack]);refreshBoard();};
  b.onpointerdown=e=>{
   if(solved||e.button!==0)return;cancelPicnicDrag();const id=b.dataset.snack,x=e.clientX,y=e.clientY;let ghost=null;
   const move=ev=>{if(Math.hypot(ev.clientX-x,ev.clientY-y)<8&&!ghost)return;if(!ghost){ghost=document.createElement('div');ghost.className='snack-token picnic-drag';ghost.innerHTML=b.innerHTML;document.body.appendChild(ghost);}ghost.style.left=`${ev.clientX-25}px`;ghost.style.top=`${ev.clientY-28}px`;};
   const clean=()=>{ghost?.remove();document.removeEventListener('pointermove',move);document.removeEventListener('pointerup',finish);document.removeEventListener('pointercancel',clean);picnicCleanup=null;};
   const finish=ev=>{const moved=Boolean(ghost);clean();if(moved){const dest=document.elementFromPoint(ev.clientX,ev.clientY)?.closest('[data-dish]');if(dest)movePicnicToken(id,dest.dataset.dish);}};
   picnicCleanup=clean;document.addEventListener('pointermove',move);document.addEventListener('pointerup',finish,{once:true});document.addEventListener('pointercancel',clean,{once:true});
  };
 });
 const serve=dish=>{if(solved)return;if(!selected.size){toast('先选一颗点心，再选它要去的盘子。');return;}movePicnicToken([...selected][0],dish);};
 document.querySelectorAll('[data-serve]').forEach(b=>b.onclick=e=>{e.stopPropagation();serve(b.dataset.serve);});
 document.querySelectorAll('[data-dish]').forEach(b=>b.onclick=e=>{if(!e.target.closest('button'))serve(b.dataset.dish);});
 document.querySelectorAll('[data-picnic-answer]').forEach(b=>b.onclick=()=>{if(solved)return;selected=new Set([b.dataset.picnicAnswer]);$('#feedback').hidden=true;refreshBoard();});
 document.querySelectorAll('[data-picnic-tray]').forEach(b=>b.onclick=()=>{if(solved)return;const id=b.dataset.picnicTray;if(selected.has(id))selected.delete(id);else if(selected.size<2)selected.add(id);else{toast('先取消一盘，再换另一盘。');return;}$('#feedback').hidden=true;refreshBoard();});
 $('#check').disabled=solved?false:l.type==='picnic-share'?Object.keys(placements).length!==l.items.length:l.type==='picnic-combine'?selected.size!==2:selected.size!==1;
}
function evaluatePicnic(l,where,choices){
 if(l.type==='picnic-compare')return{ok:choices.size===1&&choices.has('same'),message:l.wrong};
 if(l.type==='picnic-combine')return{ok:choices.size===2&&[...choices].reduce((n,id)=>n+(l.trayCounts[Number(id)]||0),0)===l.target,message:l.wrong};
 if(l.items.some((_,i)=>!Object.hasOwn(where,'t'+i)))return{ok:false,message:'篮子里还有点心没有分完。再看看要放到谁的盘子里。'};
 for(let i=0;i<l.friends.length;i++){
  const contents=l.items.filter((_,j)=>where['t'+j]===String(i));
  if(contents.length!==l.perFriend)return{ok:false,message:`${PICNIC_NAMES[l.friends[i]]}的盘子还没分好。比较一下每个盘子，再调整点心。`};
  if(l.requiredKinds&&!l.requiredKinds.every(k=>contents.filter(x=>x===k).length===1))return{ok:false,message:`${PICNIC_NAMES[l.friends[i]]}的盘子数量对了，再看看是不是两种点心都有。`};
 }
 return{ok:true};
}
function checkPicnic(){return evaluatePicnic(lessons[step],placements,selected);}
