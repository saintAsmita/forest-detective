// Keep the course catalogue separate from the child's current activity.
function renderCourseHome(){
 const c=currentChapter(),p=progress();
 $('#main').innerHTML=`<nav class="course-types" aria-label="选择课程类型"><button class="secondary" data-track="logic"><strong>思维探险</strong><span>15 章 · 观察与推理　›</span></button><button class="secondary" data-track="expression"><strong>表达练习</strong><span>5 课 · 小小讲述家　›</span></button></nav><section class="hero"><div class="hero-copy"><div class="eyebrow">${isExpression(chapterId)?'表达练习':'思维探险'} · 当前课程 · ${p.completed} / ${lessons.length}</div><h1>${c.title}</h1><p>${c.description}</p><button class="primary" id="start">${p.completed===lessons.length?'再玩一次':p.completed?'继续这一课':isExpression(chapterId)?'开始讲故事':'出发，去找线索'} <span>↗</span></button><button class="quiet-button" id="choose-course">换一章 ›</button></div><div class="hero-art" role="img" aria-label="${c.imageAlt}" style="background-image:url('${c.image}')"><div class="case-tag">${c.tag}</div></div></section><section class="course-route" aria-labelledby="course-route-title"><div class="course-route-heading"><h2 id="course-route-title">本课的 ${lessons.length} 个小任务</h2><span>${p.completed} / ${lessons.length} 已完成</span></div><div class="chapter-list">${lessons.map((l,i)=>`<button class="chapter ${i===p.completed?'current':''}" data-step="${i}" ${i>p.completed?'disabled':''}><span class="chapter-number">0${i+1}</span><span class="chapter-symbol">${i<p.completed?'✓':l.symbol}</span><strong>${l.title}</strong><small>${i>p.completed?'完成上一站后开启':l.short}</small></button>`).join('')}</div></section><div class="home-offline"><button class="secondary" id="home-download">${offlineReady?'✓ 全部课程已下载':'下载全部课程 · 离线玩'}</button><p id="home-download-status" role="status">${offlineReady?'离线也能继续玩。':'进度保存在这台设备上。'}</p></div><dialog id="course-picker" aria-labelledby="course-picker-title"><div class="dialog-top"><h2 id="course-picker-title">今天想玩哪一课？</h2><button class="icon-button" id="close-courses" aria-label="关闭选课">×</button></div><div class="course-filters"><button class="secondary" data-filter="logic">思维探险 · 15 章</button><button class="secondary" data-filter="expression">表达练习 · 5 课</button></div><p class="course-picker-note">选一课就能出发，会接着上次的进度。</p><div class="course-catalogue"></div></dialog>`;
 $('#start').onclick=()=>start(p.completed===lessons.length?0:p.completed);
 document.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>start(Number(b.dataset.step)));
 function showTrack(track){
  document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===track)));
  $('.course-catalogue').innerHTML=Object.values(CHAPTERS).filter(ch=>isExpression(ch.id)===(track==='expression')).map((ch,i)=>`<button class="secondary course-choice" data-chapter="${ch.id}" ${ch.id===chapterId?'aria-current="true"':''}><small>${track==='expression'?'表达':'探险'} ${i+1} · ${state.chapters[ch.id].completed} / ${ch.lessons.length}</small><strong>${ch.name}</strong><span>${ch.subtitle.replace('表达篇 · ','')}</span><b>${state.chapters[ch.id].completed===ch.lessons.length?'再玩一次':state.chapters[ch.id].completed?'继续这一课':'开始这一课'} →</b></button>`).join('');
  document.querySelectorAll('[data-chapter]').forEach(b=>b.onclick=()=>{const id=b.dataset.chapter;$('#course-picker').close();selectChapter(id);start(progress().completed===lessons.length?0:progress().completed);});
 }
 function openCourses(track){showTrack(track);$('#course-picker').showModal();}
 document.querySelectorAll('[data-track]').forEach(b=>b.onclick=()=>openCourses(b.dataset.track));
 document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>showTrack(b.dataset.filter));
 $('#choose-course').onclick=()=>openCourses(isExpression(chapterId)?'expression':'logic');
 $('#close-courses').onclick=()=>$('#course-picker').close();
 $('#home-download').onclick=download;
}

let dockObserver;
function syncLessonDock(){
 dockObserver?.disconnect();
 document.body.dataset.screen=screen;
 const controls=document.querySelector('.play-controls, .expression-bottom');
 if(screen!=='lesson'||!controls){document.documentElement.style.removeProperty('--lesson-dock-height');return;}
 controls.classList.add('lesson-actionbar');
 $('#main').append(controls);
 const measure=()=>document.documentElement.style.setProperty('--lesson-dock-height',`${controls.getBoundingClientRect().height}px`);
 dockObserver=new ResizeObserver(measure);dockObserver.observe(controls);measure();
}
