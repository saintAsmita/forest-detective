'use strict';
window.MAIL_CHAPTER={
 id:'mail',number:'003',name:'云朵邮局',subtitle:'先想路线，再送信',title:'叮咚！森林里<br><span>来信啦！</span>',
 description:'带上小邮包，穿过弯弯的小路。<br>想一想、走一走，把问候送到朋友家。',
 image:'./assets/mail.svg',imageAlt:'云朵下的紫色小邮局，信封沿着森林小路送往小屋',tag:'今日任务：把问候送到家 ✉',
 audioRoot:'./assets/audio/mail/',audioExtension:'wav',audioReady:true,
 skills:['理解方向','提前规划','检查与调整'],
 endingTitle:'叮咚，问候送到啦！',endingText:'最后一封信也送到了。<br>朋友们打开信封，读到了彼此的问候。<br>绒绒笑着说：“先想一想，再走一步，复杂的路线也难不倒我们！”',endingQuestion:'用积木摆一张小地图，请家人照着你的箭头走一走吧。',
 lessons:[
 {title:'跟着箭头走',short:'理解方向与顺序',symbol:'↗',type:'mail-trace',question:'绒绒最后会停在哪一格？',instruction:'从绒绒出发，每个箭头走一格，点选最后停下的位置。',story:'小邮差第一次送信。先试着用眼睛走一遍，看看这张路线卡通向哪里。',clues:['箭头指向画面里的方向','一个箭头，只走一格'],cols:3,rows:3,start:6,target:4,blocks:[],route:['R','U'],hints:['先找到左下角的绒绒。第一个箭头向右，走到下面中间那一格。','接着向上走一格。最后停在地图正中间。'],success:'找到了！先向右，再向上，停在中间这一格。',wrong:'回到绒绒出发的地方，一个箭头走一格，再试一遍。'},
 {title:'给路线排排队',short:'自己安排每一步',symbol:'⇢',type:'mail-plan',question:'怎样走，才能到达信箱？',instruction:'点箭头排出四步路线。可以撤回，排好后再检查。',story:'这回没有现成的路线卡啦！把小邮差要走的四步，提前安排好。',clues:['先看起点和信箱','不能走出地图'],cols:3,rows:3,start:6,target:2,blocks:[],limit:4,hints:['信箱在右上角。需要向右两步，也需要向上两步。','可以先右、右，再上、上。别的顺序只要能安全到达，也算对。'],success:'信送到了！不同的走法，也可能到达同一个地方。',wrong:'这条路线还没送到信箱。看看走到哪里，再调整箭头。'},
 {title:'找回丢掉的箭头',short:'补全路线',symbol:'?',type:'mail-gap',question:'空白位置，应该放哪个箭头？',instruction:'看清池塘的位置，选一个箭头补进路线卡。',story:'风吹走了一个箭头。绕开池塘，把路线卡补完整吧。',clues:['池塘不能走过去','按从左到右的顺序走'],cols:3,rows:3,start:6,target:2,blocks:[4],route:['R','R',null,'U'],hints:['先向右两步，绒绒就走到了右下角。','从右下角到信箱，还需要向上两步。空位应该放向上箭头。'],success:'补好啦！先右、右，再上、上，安全绕过池塘。',wrong:'试着沿箭头走一遍。哪一步碰到了池塘，或者走出了地图？'},
 {title:'哪条路走得通',short:'发现路线里的问题',symbol:'⌕',type:'mail-compare',question:'哪张路线卡能安全送到信箱？',instruction:'两张都从绒绒出发。选出不经过池塘的那张。',story:'两张卡都画了四个箭头，但不是每条路都走得通。用眼睛检查每一步。',clues:['池塘是不能经过的格子','先后顺序会改变经过的地方'],cols:3,rows:3,start:6,target:2,blocks:[4],routes:[['U','R','R','U'],['R','R','U','U']],hints:['第一张先上再右，第二步会走到哪里？','第一张会碰到中间的池塘。第二张沿着下边、右边走，可以送到。'],success:'选对了！箭头数量一样，排列顺序不同，经过的地方也不同。',wrong:'这张卡会经过池塘。检查第二步，再比较另一张。'},
 {title:'别忘了先取信',short:'同时完成两个目标',symbol:'✉',type:'mail-plan',question:'先取信，再送到信箱，怎么走？',instruction:'排出四步路线。途中要经过信封，最后停在信箱。',story:'邮包里还是空的！先到左上角取信，再把信送往右上角，不能空着手就到终点。',clues:['先经过信封，才有信可送','取到以后还要走到信箱'],cols:3,rows:3,start:6,target:2,pickup:0,blocks:[4],limit:4,hints:['看看信封在哪里。要先沿左边向上走两步。','上、上，取到信；再右、右，把信送到信箱。'],success:'取信、送信都完成了！规划路线时，要记住途中的任务。',wrong:'到终点之前，要先经过信封。看看有没有漏掉取信。'},
 {title:'新地图也不怕',short:'把方法用到新情境',symbol:'☆',type:'mail-plan',question:'换一张地图，还能送到吗？',instruction:'安排六步：先去右下角取信，再送往左下角信箱。',story:'这次绒绒从左上角出发。起点和终点变了，先看清地图，再计划路线。',clues:['先找新的起点和取信点','一小段一小段地想'],cols:3,rows:3,start:0,target:6,pickup:8,blocks:[4],limit:6,hints:['沿上边向右两步，再沿右边向下两步，就能取到信。','取到信后，沿下边向左两步到信箱。连起来是右、右、下、下、左、左。'],success:'新的地图也完成了！找起点、想任务、排路线，这个方法真管用。',wrong:'先取到右下角的信，再送去左下角。可以先安排取信的一小段。'}
 ]
};
