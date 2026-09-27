'use strict';
window.ForestProgress=(()=>{
 const ids=['carrots','train','mail'];
 const empty=()=>({completed:0,mistakes:Array(6).fill(0),hints:Array(6).fill(0)});
 const validChapter=v=>v&&Number.isInteger(v.completed)&&v.completed>=0&&v.completed<=6&&['mistakes','hints'].every(k=>Array.isArray(v[k])&&v[k].length===6&&v[k].every(n=>Number.isInteger(n)&&n>=0&&n<=100000));
 const copy=v=>({completed:v.completed,mistakes:[...v.mistakes],hints:[...v.hints]});
 function normalize(v){
  if(!v||typeof v.sound!=='boolean')return null;
  if(v.version===1&&validChapter(v))return{version:3,sound:v.sound,activeChapter:'carrots',chapters:{carrots:copy(v),train:empty(),mail:empty()}};
  const sourceIds=v.version===2?['carrots','train']:v.version===3?ids:null;
  if(!sourceIds||!sourceIds.includes(v.activeChapter)||!v.chapters||!sourceIds.every(id=>validChapter(v.chapters[id])))return null;
  return{version:3,sound:v.sound,activeChapter:v.activeChapter,chapters:Object.fromEntries(ids.map(id=>[id,sourceIds.includes(id)?copy(v.chapters[id]):empty()]))};
 }
 function restore(previous,raw){const value=normalize(raw);if(!value)return null;if(raw.version===1)value.chapters={...previous.chapters,carrots:value.chapters.carrots};if(raw.version===2)value.chapters.mail=copy(previous.chapters.mail);return value;}
 return{normalize,restore,fresh:()=>({version:3,sound:true,activeChapter:'carrots',chapters:Object.fromEntries(ids.map(id=>[id,empty()]))})};
})();
