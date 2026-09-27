'use strict';
function mathLabel(code){if(typeof code==='number'||/^\d+$/.test(code))return `${code}颗光点`;const names={red:'红色圆灯',blue:'蓝色圆灯',yellow:'黄色圆灯',square:'正方形',triangle:'三角形',circle:'圆形'};if(names[code])return names[code];const [color,shape]=code.split('-');return({red:'红色',blue:'蓝色'})[color]+({circle:'圆形',triangle:'三角形',square:'正方形'})[shape];}
function mathSymbol(code){
 if(typeof code==='number')return `<span class="dot-cluster" role="img" aria-label="${mathLabel(code)}">${Array.from({length:code},()=>'<span class="light-dot"></span>').join('')}</span>`;
 const parts=String(code).split('-'),isColor=['red','blue','yellow'].includes(parts[0]),color=isColor?parts[0]:'neutral',shape=parts[1]||(isColor?'circle':parts[0]);
 const geometry={circle:'<circle cx="25" cy="25" r="19"/>',square:'<rect x="7" y="7" width="36" height="36" rx="3"/>',triangle:'<path d="M25 5 46 43H4Z"/>'}[shape];
 return `<span class="math-symbol ${color}" role="img" aria-label="${mathLabel(code)}"><svg viewBox="0 0 50 50" aria-hidden="true" focusable="false"><g fill="currentColor" stroke="#263b50" stroke-width="1.6">${geometry}</g></svg></span>`;
}
function trainBoard(){
 const l=lessons[step];let main='';
 if(l.type==='matrix')main=`<div class="ticket-matrix" aria-label="两行三列的票卡表">${l.cells.map((code,i)=>`<div class="signal-cell ${code===null?'blank':''}" aria-label="第${Math.floor(i/3)+1}行第${i%3+1}列">${code!==null?mathSymbol(code):solved?mathSymbol(l.answer[0]):'<span class="question-mark">?</span>'}</div>`).join('')}</div>`;
 else main=`<div class="signal-instruction"><span>${l.type==='repair'?'检查每一个位置':'从左往右看 →'}</span><span>${l.type==='slots'?'补齐两个空位':l.type==='count'?'观察光点数量':'观察图案'}</span></div><div class="signal-strip ${l.type==='count'?'count-strip':''} ${l.sequence.length>6?'long-pattern':''}">${l.sequence.map((original,i)=>{
  let code=original;if(l.type==='slots'&&code===null)code=placements[i]??null;if(l.type==='repair'&&solved&&i===l.repairIndex)code=l.repairValue;if(solved&&code===null)code=l.type==='count'?Number(l.answer[0]):l.answer[0];
  const content=code===null?'<span class="question-mark">?</span>':mathSymbol(code);
  const klass=`signal-cell ${original===null?'blank':''} ${l.type==='repair'&&selected.has(String(i))?'selected':''} ${solved&&l.type==='repair'&&i===l.repairIndex?'repaired':''}`;
  const label=`第${i+1}个位置，${code===null?'空位':mathLabel(code)}`;
  if(l.type==='repair')return `<button class="${klass}" data-choice="${i}" aria-pressed="${selected.has(String(i))}" aria-label="${label}">${content}<small>${i+1}</small></button>`;
  if(l.type==='slots'&&original===null)return `<button class="${klass}" data-slot="${i}" aria-label="${label}">${content}<small>${i+1}</small></button>`;
  return `<div class="${klass}" aria-label="${label}">${content}<small>${i+1}</small></div>`;
 }).join('')}</div>`;
 if(l.type!=='repair')main+=`<div class="signal-options" aria-label="可选择的图案">${l.options.map(code=>`<button class="signal-option ${selected.has(String(code))?'selected':''}" data-choice="${code}" aria-pressed="${selected.has(String(code))}" aria-label="${mathLabel(code)}">${mathSymbol(code)}</button>`).join('')}</div>${l.type==='slots'?'<p class="signal-legend">选一盏灯 → 点空位，或直接拖进去</p>':''}`;
 if(solved)main+='<p class="train-scene-caption">✓ 这一段信号已经点亮</p>';
 return main;
}
function fillSignalSlot(index,choice){
 if(solved||lessons[step].type!=='slots')return;
 const l=lessons[step];if(!Object.hasOwn(l.slotAnswer,index)||!l.options.includes(choice))return;
 placements[index]=choice;selected.clear();refreshBoard();
}
function bindTrainBoard(){
 const l=lessons[step];
 document.querySelectorAll('#board [data-choice]').forEach(b=>{
  b.disabled=solved;
  b.onclick=()=>{if(solved)return;selected=new Set([b.dataset.choice]);refreshBoard();};
  if(l.type!=='slots'||solved)return;
  b.onpointerdown=e=>{
   const choice=b.dataset.choice,x=e.clientX,y=e.clientY;let ghost=null;
   const move=ev=>{if(Math.hypot(ev.clientX-x,ev.clientY-y)<8&&!ghost)return;if(!ghost){ghost=document.createElement('div');ghost.className='signal-option drag-preview';ghost.setAttribute('aria-hidden','true');ghost.innerHTML=b.innerHTML;document.body.appendChild(ghost);}ghost.style.left=`${ev.clientX-38}px`;ghost.style.top=`${ev.clientY-38}px`;};
   const clean=()=>{document.removeEventListener('pointermove',move);document.removeEventListener('pointerup',finish);document.removeEventListener('pointercancel',cancel);ghost?.remove();};
   const finish=ev=>{const dragged=Boolean(ghost);clean();if(!dragged)return;const slot=document.elementFromPoint(ev.clientX,ev.clientY)?.closest('[data-slot]');if(slot)fillSignalSlot(slot.dataset.slot,choice);};
   const cancel=()=>clean();
   document.addEventListener('pointermove',move);document.addEventListener('pointerup',finish,{once:true});document.addEventListener('pointercancel',cancel,{once:true});
  };
 });
 document.querySelectorAll('[data-slot]').forEach(b=>{b.disabled=solved;b.onclick=()=>{if(!selected.size){toast('先选下面的一盏灯，再点这个空位。');return;}fillSignalSlot(b.dataset.slot,[...selected][0]);};});
 $('#check').disabled=solved?false:l.type==='slots'?!Object.keys(l.slotAnswer).every(k=>Object.hasOwn(placements,k)):selected.size===0;
}
