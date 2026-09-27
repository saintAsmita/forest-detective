'use strict';
window.ForestProgress=(()=>{
 const ids=['carrots','train'];
 const empty=()=>({completed:0,mistakes:Array(6).fill(0),hints:Array(6).fill(0)});
 const validChapter=v=>v&&Number.isInteger(v.completed)&&v.completed>=0&&v.completed<=6&&['mistakes','hints'].every(k=>Array.isArray(v[k])&&v[k].length===6&&v[k].every(n=>Number.isInteger(n)&&n>=0&&n<=100000));
 const copy=v=>({completed:v.completed,mistakes:[...v.mistakes],hints:[...v.hints]});
 function normalize(v){
  if(!v||typeof v.sound!=='boolean')return null;
  if(v.version===1&&validChapter(v))return{version:2,sound:v.sound,activeChapter:'carrots',chapters:{carrots:copy(v),train:empty()}};
  if(v.version!==2||!ids.includes(v.activeChapter)||!v.chapters||!ids.every(id=>validChapter(v.chapters[id])))return null;
  return{version:2,sound:v.sound,activeChapter:v.activeChapter,chapters:Object.fromEntries(ids.map(id=>[id,copy(v.chapters[id])]))};
 }
 return{normalize,fresh:()=>({version:2,sound:true,activeChapter:'carrots',chapters:{carrots:empty(),train:empty()}})};
})();
