'use strict';
let checkingCourseUpdate=false;
const watchedCourseRegistrations=new WeakSet();
function courseUpdateStatus(text){const el=document.querySelector('#update-status');if(el)el.textContent=text;}
function updateButton(){
 const b=document.querySelector('#update');if(!b)return;b.hidden=false;
 if(registration?.waiting){b.disabled=screen!=='home';b.textContent=screen==='home'?'应用已下载的新版本':'更新课程（请先返回营地）';courseUpdateStatus('新版本已下载。返回营地后应用，学习进度会保留。');}
 else if(registration?.installing){b.disabled=true;b.textContent='新版本下载中……';courseUpdateStatus('正在下载课程图片与配音，请保持联网。');}
 else{b.disabled=checkingCourseUpdate;b.textContent=checkingCourseUpdate?'正在检查更新……':'检查课程更新';}
}
function watchRegistration(reg){
 registration=reg;updateButton();if(watchedCourseRegistrations.has(reg))return;watchedCourseRegistrations.add(reg);
 const watchWorker=worker=>{if(!worker)return;worker.addEventListener('statechange',()=>{
  updateButton();
  if(worker.state==='redundant'&&!reg.waiting)courseUpdateStatus('新版本未下载完成，请检查网络后重新检查。');
  if(worker.state==='activated'&&!reg.waiting)courseUpdateStatus('课程已准备好，可以离线使用。');
 });};
 watchWorker(reg.installing);reg.addEventListener('updatefound',()=>{updateButton();watchWorker(reg.installing);});
}
async function checkCourseUpdate(){
 if(checkingCourseUpdate)return;
 if(!window.isSecureContext||!('serviceWorker'in navigator)){courseUpdateStatus('此地址不支持离线更新。请使用 HTTPS 或电脑上的 localhost。');return;}
 if(!navigator.onLine){courseUpdateStatus('当前离线，请联网后再检查。已有课程可以继续使用。');return;}
 checkingCourseUpdate=true;updateButton();courseUpdateStatus('正在联系课程服务器……');
 try{
  const reg=await navigator.serviceWorker.getRegistration();
  if(!reg){courseUpdateStatus('尚未下载离线课程。请点击“下载全部课程”；本次打开的页面可直接使用。');return;}
  watchRegistration(reg);await reg.update();
  if(!reg.waiting&&!reg.installing)courseUpdateStatus('已检查：服务器没有可用的新版本。');
 }catch{courseUpdateStatus('未能检查更新。请确认网络正常、本地预览服务已开启，再重试。');}
 finally{checkingCourseUpdate=false;updateButton();}
}
function handleCourseUpdate(){
 if(registration?.waiting){if(screen!=='home')return;stopAudio();registration.waiting.postMessage({type:'ACTIVATE_UPDATE'});return;}
 return checkCourseUpdate();
}
