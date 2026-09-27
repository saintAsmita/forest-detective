'use strict';
window.PICNIC_CHAPTER={
 id:'picnic',number:'004',name:'松果野餐会',subtitle:'分一分，刚刚好',title:'野餐开始前，<br><span>一起分点心！</span>',
 description:'朋友们带来了满满一篮点心。<br>数一数、配一配，让每个人都分到合适的一份。',
 image:'./assets/picnic.svg',imageAlt:'森林树荫下铺着橙色野餐垫，篮子里装着莓果、松果和饼干',tag:'今日任务：准备一场公平的野餐 ♧',
 audioRoot:'./assets/audio/picnic/',audioExtension:'wav',audioReady:true,
 skills:['一一对应','数量与组合','公平分配'],
 endingTitle:'每一份，都刚刚好！',endingText:'点心摆好了，朋友们围坐在野餐垫旁。<br>松松说：“谢谢你！摆得分散不一定更多，分得一样才公平。”<br>大家举起小杯子，一起分享这个暖暖的下午。',endingQuestion:'吃点心时，试着给家人一人分一份。你会怎样检查有没有漏掉谁？',
 lessons:[
 {title:'每人都有一颗',short:'一一对应，不多不少',symbol:'●',type:'picnic-share',question:'给每位朋友一颗莓果，好吗？',instruction:'先点一颗莓果，再点朋友的盘子；也可以拖进去。',story:'野餐会开始啦！先给三位朋友分莓果，每人一颗，一个也不漏。',clues:['一个朋友对应一个盘子','每个盘子只放一颗'],friends:['rabbit','squirrel','bear'],items:['berry','berry','berry'],perFriend:1,hints:['看看哪一个盘子还是空的，给那位朋友一颗。','三个朋友，三颗莓果。每个盘子放一颗，就刚刚好。'],success:'每个人都有一颗，没有多，也没有少。这叫一一对应。',wrong:'看看每个盘子，有没有空着的，或者放了不止一颗？'},
 {title:'摆开了会变多吗',short:'数量不由摆法决定',symbol:'↔',type:'picnic-compare',question:'哪边的莓果更多，还是一样多？',instruction:'左右各数一遍，再选下面的答案。',story:'阿橙把右边的莓果摆得很开。看起来占的地方更大，数量真的变多了吗？',clues:['每一颗只数一次','不只看占了多大的地方'],amount:4,hints:['左边紧紧摆在一起。数一数：一、二、三、四。再数右边。','两边都是四颗。只是摆法不同，没有增加或拿走。'],success:'一样多！两边都是四颗，摆得松或紧，不会改变数量。',wrong:'先别看哪边更宽。把两边的莓果一颗一颗配对看看。'},
 {title:'两份一样多',short:'把总数公平分开',symbol:'◒',type:'picnic-share',question:'六颗松果，怎样分给两位朋友一样多？',instruction:'把松果全部放进两个盘子，可以移动已放好的松果。',story:'松松和灰灰准备带松果回家。请把六颗都分完，两份要一样多。',clues:['松果要全部分完','两个盘子的数量相同'],friends:['squirrel','koala'],items:['cone','cone','cone','cone','cone','cone'],perFriend:3,hints:['可以轮着分：这边一颗，那边一颗，再继续。','六颗分成两份，每份三颗。数数两个盘子里是不是都有三颗。'],success:'三颗和三颗，两份一样多，六颗也全部分完了。',wrong:'先看有没有没分完的，再比较两个盘子是不是一样多。'},
 {title:'两盘凑一桌',short:'不同组合，相同总数',symbol:'⊕',type:'picnic-combine',question:'选哪两盘，能给五个座位各放一块饼干？',instruction:'选两盘饼干，合起来要刚好五块。点已选的盘子可以取消。',story:'五个座位准备好了。小盘子里的饼干数量不同，试着把两盘合在一起。',clues:['只能选两盘','五个座位，各配一块'],trayCounts:[1,2,3,4],target:5,hints:['先选一盘，看看离五块还差几块，再找另一盘。','一块配四块可以，两块配三块也可以。两种办法都是五块。'],success:'刚好五块！一和四、二和三，都能合成同样的总数。',wrong:'要选两盘，再数一数合起来的饼干，能不能和五个座位一一配上。'},
 {title:'调整一下就公平',short:'找出多与少，重新分配',symbol:'⇄',type:'picnic-share',question:'怎样移动莓果，让三位朋友一样多？',instruction:'点盘子里的莓果，再点另一个盘子，把它移过去。',story:'莓果已经分好了，可有的朋友多，有的少。不用重来，试着调整一下。',clues:['莓果总数没有变化','从多的盘子移给少的盘子'],friends:['rabbit','fox','bear'],items:['berry','berry','berry','berry','berry','berry'],initial:[0,1,1,1,2,2],perFriend:2,hints:['先数一数：绒绒一颗，阿橙三颗，大树两颗。谁多，谁少？','从阿橙的盘子拿一颗，移到绒绒的盘子。三个盘子就都是两颗啦。'],success:'只移动一颗，就变成两颗、两颗、两颗。总数没变，分配变公平了。',wrong:'比较一下三个盘子。把多的盘子里的一颗，移给少的那个。'},
 {title:'每份都要配齐',short:'同时检查数量和种类',symbol:'☆',type:'picnic-share',question:'每人一颗莓果、一块饼干，你能配齐吗？',instruction:'四位朋友，每份都要两样齐全。可以移动或放回篮子重新分。',story:'野餐最后，大家想把点心带回家。每份不能只看总数，还要看看是什么点心。',clues:['每个盘子都有一颗莓果','每个盘子都有一块饼干'],friends:['rabbit','squirrel','fox','bear'],items:['berry','berry','berry','berry','cookie','cookie','cookie','cookie'],perFriend:2,requiredKinds:['berry','cookie'],hints:['可以先给每人一颗莓果，再给每人一块饼干。','检查每个盘子：一颗红莓果，加一块圆饼干。两样都有才配齐。'],success:'四份都配齐啦！数量一样，种类也符合要求，朋友们都很开心。',wrong:'有两块还不够哦。每份都要一颗莓果和一块饼干，不能是两样相同的。'}
 ]
};
