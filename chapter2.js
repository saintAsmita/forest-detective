'use strict';
window.TRAIN_CHAPTER={
 id:'train',number:'002',name:'月光列车',subtitle:'点亮发车信号',title:'嘟——月光列车<br><span>准备出发！</span>',
 description:'星星亮起来了，列车还在等信号。<br>找到图案里的小秘密，点亮回家的路。',
 image:'./assets/train.png',imageAlt:'月光下的森林车站与亮着暖灯的小火车',tag:'今晚的任务：点亮发车信号 ✦',
 audioRoot:'./assets/audio/train/',skills:['发现规律','检查与修正','换个图案也会用'],
 endingTitle:'信号亮了，出发啦！',endingText:'灯光沿着轨道，一盏一盏亮了起来。<br>月光列车载着朋友们，驶向温暖的家。<br>松松挥挥手：“谢谢你，小小信号员！”',endingQuestion:'哪一种规律最有趣？试着用积木摆给家人看吧。',
 lessons:[
  {title:'点亮第一盏灯',short:'发现重复规律',symbol:'◐',type:'pattern',question:'下一盏灯，应该是什么颜色？',instruction:'从左往右看，点选下面的一盏灯。',story:'森林车站的信号灯还没装完。帮松松找到灯光排队的小秘密吧。',clues:['从左往右观察','找找反复出现的一小组'],sequence:['red','blue','red','blue','red',null],options:['blue','red','yellow'],answer:['blue'],hints:['试着两盏灯分成一组，看看每组是不是一样。','红、蓝，是一组。最后的红灯后面，该接蓝灯啦。'],success:'亮起来了！红、蓝为一组，一组一组重复。',wrong:'再从第一盏开始看：红、蓝，然后又是红、蓝。'},
  {title:'补齐两盏灯',short:'记住一组的顺序',symbol:'▦',type:'slots',question:'空着的两个位置，分别放什么灯？',instruction:'先选一盏灯，再点空位；也可以拖过去。点已填的空位可以替换。',story:'第二段轨道有三种颜色。别只看前一盏，要找到完整的一组。',clues:['看看最前面的三盏灯','同一组的顺序保持不变'],sequence:['red','yellow','blue','red',null,null],options:['blue','red','yellow'],slotAnswer:{4:'yellow',5:'blue'},hints:['前三盏是红、黄、蓝。后面也要按这个顺序。','第二组已经有红灯了，再放黄灯，最后放蓝灯。'],success:'两盏都放对了！红、黄、蓝，第二组和第一组一样。',wrong:'有一盏还没排好。对照前面的红、黄、蓝，再试一次。'},
  {title:'是谁排错了',short:'检查并修正规律',symbol:'⌕',type:'repair',question:'哪一盏灯排错了位置？',instruction:'点一下排错的灯，我们一起修好它。',story:'风把一盏灯吹乱了。这里原本是红、蓝两盏一组，我们来检查一下。',clues:['原来的规则：红、蓝一组','这排灯只有一盏不符合'],sequence:['red','blue','red','yellow','red','blue'],answer:['3'],repairIndex:3,repairValue:'blue',hints:['把第一、二盏当作一组，再比较后面的两组。','第四盏是黄灯。按红、蓝的规则，这里应该是蓝灯。'],success:'修好啦！第四盏换成蓝灯，每一组又都一样了。',wrong:'这一盏符合规则。找找哪一组和第一组不同。'},
  {title:'越来越亮的星光',short:'发现数量变化',symbol:'✦',type:'count',question:'下一张星光卡，应该有几颗光点？',instruction:'数一数每张卡，再选下一张。',story:'越靠近车站，光点就越多。这一次，图案不是简单重复了。',clues:['一张一张数一数','比较相邻两张有什么变化'],sequence:[1,2,3,null],options:[5,3,4],answer:['4'],hints:['第一张一颗，第二张两颗，第三张三颗。每次增加了多少？','每张都比前一张多一颗。三颗后面，是四颗。'],success:'四颗，刚刚好！每次多一颗，也是一种规律。',wrong:'不只看哪张更亮。和前一张比一比，是多了几颗？'},
  {title:'车站的秘密票卡',short:'同时考虑两条规则',symbol:'⊞',type:'matrix',question:'缺少的票卡，应该是哪一张？',instruction:'横着看颜色，竖着看形状。两条规则都要符合。',story:'要打开车站大门，还得修好这张票卡表。每行、每列都藏着规则。',clues:['同一行：颜色相同','同一列：形状相同'],cells:['red-circle','red-triangle','red-square','blue-circle',null,'blue-square'],options:['red-triangle','blue-square','blue-triangle'],answer:['blue-triangle'],hints:['空位在蓝色这一行，所以要找蓝色的票卡。','再看空位上面，是三角形。两条合起来：蓝色三角形。'],success:'门打开了！蓝色符合这一行，三角形符合这一列。',wrong:'这张只看一条规则还不够。颜色和形状都要对上哦。'},
  {title:'最后一节信号',short:'把方法用到新图案',symbol:'☆',type:'pattern',question:'问号的位置，应该接哪个图形？',instruction:'这次换成形状。找到一组，再往后接。',story:'最后一段信号不用颜色，改用了图形。刚刚学会的方法，还能用吗？',clues:['先找最小的一组','形状变了，找规律的方法没变'],sequence:['square','square','triangle','square','square','triangle','square',null],options:['triangle','circle','square'],answer:['square'],hints:['看看前面三个：正方形、正方形、三角形，是一组。','最后一组才放了一个正方形，还需要再放一个正方形。'],success:'最后一段也亮了！两个正方形、一个三角形，一组一组重复。',wrong:'一组里有两个正方形哦。看看最后一组已经走到哪一步。'}
 ]
};
