'use strict';
window.CAMP_CHAPTER={
  "id": "camp",
  "number": "008",
  "name": "星湖露营地",
  "subtitle": "连起线索，安排营地",
  "title": "星星升起来，<br><span>帐篷搭在哪儿？</span>",
  "description": "朋友们带着帐篷来到星湖边。<br>观察营地图，连起位置线索，安排一个舒服的夜晚。",
  "image": "./assets/camp.svg",
  "imageAlt": "星空下的湖边营地，草地上有帐篷和松树",
  "tag": "进阶委托：安排星湖营地 ☆",
  "audioRoot": "./assets/audio/camp/",
  "audioExtension": "wav",
  "audioReady":true,
  "skills": [
    "空间关系",
    "交叉排除",
    "调整与验证"
  ],
  "endingTitle": "星湖营地，安排好了！",
  "endingText": "帐篷亮起了小灯，朋友们望着满天星星。<br>你从确定的位置出发，把一条条线索连起来，还用交换修好了冲突。<br>每个人都找到了合适的营地，今晚一定能睡个好觉。",
  "endingQuestion": "用四个玩具摆一张小地图，给家人两三条位置线索。看看他们能不能摆出你的安排。",
  "lessons": [
    {
      "title": "把线索接起来",
      "short": "从确定位置推出邻居",
      "symbol": "⌂",
      "question": "四位朋友的帐篷，该搭在哪儿？",
      "story": "星湖边有四块营地。先找确定的位置，再顺着线索安排其他朋友。",
      "rules": [
        {
          "kind": "at",
          "a": "rabbit",
          "b": 0,
          "text": "绒绒在左上角"
        },
        {
          "kind": "right",
          "a": "squirrel",
          "b": "rabbit",
          "text": "松松在绒绒正右边"
        },
        {
          "kind": "below",
          "a": "fox",
          "b": "rabbit",
          "text": "阿橙在绒绒正下方"
        }
      ],
      "hints": [
        "先放好左上角的绒绒。再找同排的右边和同列的下方。",
        "绒绒左上，松松右上，阿橙左下。剩下的位置留给大树。"
      ],
      "success": "你从一个确定的位置，连起了另外两条线索！四位朋友都有营地了。",
      "type": "camp-place",
      "friends": [
        "rabbit",
        "squirrel",
        "fox",
        "bear"
      ],
      "cols": 2,
      "slots": [
        0,
        1,
        2,
        3
      ],
      "instruction": "先点朋友，再点草地放置。点已住的草地可以交换，也能放回集合处。",
      "clues": [
        "绒绒在左上角",
        "松松在绒绒正右边",
        "阿橙在绒绒正下方"
      ],
      "wrong": "还有线索没有满足。找找标出的冲突，调整后再检查。"
    },
    {
      "title": "不能只看一条",
      "short": "位置与不相邻一起检查",
      "symbol": "↔",
      "question": "绒绒和阿橙不能挨着，怎样同时满足四条线索？",
      "story": "两位朋友需要安静休息。这张地图里，左右或上下紧挨才算邻居，斜对角不算。",
      "rules": [
        {
          "kind": "row",
          "a": "rabbit",
          "b": 0,
          "text": "绒绒在上排"
        },
        {
          "kind": "below",
          "a": "squirrel",
          "b": "rabbit",
          "text": "松松在绒绒正下方"
        },
        {
          "kind": "notnext",
          "a": "fox",
          "b": "rabbit",
          "text": "阿橙不挨着绒绒"
        },
        {
          "kind": "col",
          "a": "bear",
          "b": 1,
          "text": "大树在右列"
        }
      ],
      "hints": [
        "绒绒和松松要在同一列，上下排好。试着想想，把他们放哪一列，大树才有位置？",
        "把绒绒放左上，松松放左下。阿橙要和绒绒斜对角，大树就留在右上。"
      ],
      "success": "每条线索都照顾到了！斜对角不算挨着，你检查了整张地图。",
      "type": "camp-place",
      "friends": [
        "rabbit",
        "squirrel",
        "fox",
        "bear"
      ],
      "cols": 2,
      "slots": [
        0,
        1,
        2,
        3
      ],
      "instruction": "先点朋友，再点草地放置。点已住的草地可以交换，也能放回集合处。",
      "clues": [
        "绒绒在上排",
        "松松在绒绒正下方",
        "阿橙不挨着绒绒",
        "大树在右列"
      ],
      "wrong": "还有线索没有满足。找找标出的冲突，调整后再检查。"
    },
    {
      "title": "不止一种好安排",
      "short": "满足条件，接受多解",
      "symbol": "☆",
      "question": "绒绒和松松想做邻居，你能安排好吗？",
      "story": "有的营地安排不止一个答案。只要每条要求都满足，就是好办法。",
      "rules": [
        {
          "kind": "at",
          "a": "bear",
          "b": 0,
          "text": "大树在左上角"
        },
        {
          "kind": "row",
          "a": "fox",
          "b": 0,
          "text": "阿橙在上排"
        },
        {
          "kind": "next",
          "a": "rabbit",
          "b": "squirrel",
          "text": "绒绒和松松挨着"
        }
      ],
      "hints": [
        "先安排上排的两位朋友，再看看留给绒绒和松松的两个位置。",
        "大树左上，阿橙右上。下排两位可以交换，绒绒和松松还是邻居。"
      ],
      "success": "这样安排可以！下排两位换个位置，也都符合线索。",
      "type": "camp-place",
      "friends": [
        "rabbit",
        "squirrel",
        "fox",
        "bear"
      ],
      "cols": 2,
      "slots": [
        0,
        1,
        2,
        3
      ],
      "instruction": "先点朋友，再点草地放置。点已住的草地可以交换，也能放回集合处。",
      "clues": [
        "大树在左上角",
        "阿橙在上排",
        "绒绒和松松挨着"
      ],
      "wrong": "还有线索没有满足。找找标出的冲突，调整后再检查。"
    },
    {
      "title": "交换一次修好",
      "short": "定位冲突，少量调整",
      "symbol": "⇄",
      "question": "只交换两位朋友一次，你能修好这张营地图吗？",
      "story": "帐篷已经搭好了，但两位朋友的位置弄反了。先看清冲突，再交换，不用全部重来。",
      "initial": [
        "rabbit",
        "fox",
        "squirrel",
        "bear"
      ],
      "repair": true,
      "rules": [
        {
          "kind": "at",
          "a": "rabbit",
          "b": 0,
          "text": "绒绒在左上角"
        },
        {
          "kind": "row",
          "a": "squirrel",
          "b": 0,
          "text": "松松在上排"
        },
        {
          "kind": "below",
          "a": "fox",
          "b": "rabbit",
          "text": "阿橙在绒绒正下方"
        }
      ],
      "hints": [
        "绒绒已经在正确的位置。看看谁该去上排，谁该去绒绒下面。",
        "交换右上的阿橙和左下的松松，一次就能修好两条线索。"
      ],
      "success": "一次交换，修好两条冲突！你保留了正确的位置，只调整需要改变的地方。",
      "type": "camp-place",
      "friends": [
        "rabbit",
        "squirrel",
        "fox",
        "bear"
      ],
      "cols": 2,
      "slots": [
        0,
        1,
        2,
        3
      ],
      "instruction": "点一位朋友，再点另一位交换。可以重新开始再试。",
      "clues": [
        "绒绒在左上角",
        "松松在上排",
        "阿橙在绒绒正下方"
      ],
      "wrong": "还有线索没有满足。找找标出的冲突，调整后再检查。"
    },
    {
      "title": "第五位朋友来了",
      "short": "利用占用关系继续排除",
      "symbol": "⌕",
      "question": "五位朋友都来了，怎样安排才符合四条线索？",
      "story": "营地变大了，右下角是池塘，不能搭帐篷。先安排确定的朋友，再利用空位排除其他可能。",
      "friends": [
        "rabbit",
        "squirrel",
        "fox",
        "bear",
        "koala"
      ],
      "cols": 3,
      "slots": [
        0,
        1,
        2,
        3,
        4
      ],
      "rules": [
        {
          "kind": "at",
          "a": "koala",
          "b": 0,
          "text": "灰灰在左上角"
        },
        {
          "kind": "below",
          "a": "rabbit",
          "b": "koala",
          "text": "绒绒在灰灰正下方"
        },
        {
          "kind": "next",
          "a": "fox",
          "b": "koala",
          "text": "阿橙挨着灰灰"
        },
        {
          "kind": "notnext",
          "a": "squirrel",
          "b": "rabbit",
          "text": "松松不挨着绒绒"
        }
      ],
      "hints": [
        "灰灰和绒绒先占好左边上下两个位置。阿橙还可以在哪儿挨着灰灰？",
        "阿橙放上排中间。松松不能放下排中间，因为那里挨着绒绒，所以松松去右上。"
      ],
      "success": "你把已经占用的位置也当成线索，排除了不合适的空位！",
      "type": "camp-place",
      "instruction": "先点朋友，再点草地放置。点已住的草地可以交换，也能放回集合处。",
      "clues": [
        "灰灰在左上角",
        "绒绒在灰灰正下方",
        "阿橙挨着灰灰",
        "松松不挨着绒绒"
      ],
      "wrong": "还有线索没有满足。找找标出的冲突，调整后再检查。"
    },
    {
      "title": "星湖营地准备好",
      "short": "五条关系，逐步推导",
      "symbol": "☾",
      "question": "最后五条线索，一步一步安排好营地吧！",
      "story": "星星升起来了。右下角仍是池塘，图上的五块草地才是营地。先找只有一个可能的位置，再顺着邻居关系推下去。",
      "friends": [
        "rabbit",
        "squirrel",
        "fox",
        "bear",
        "koala"
      ],
      "cols": 3,
      "slots": [
        0,
        1,
        2,
        3,
        4
      ],
      "rules": [
        {
          "kind": "col",
          "a": "bear",
          "b": 2,
          "text": "大树在最右列"
        },
        {
          "kind": "next",
          "a": "rabbit",
          "b": "bear",
          "text": "绒绒挨着大树"
        },
        {
          "kind": "below",
          "a": "koala",
          "b": "rabbit",
          "text": "灰灰在绒绒正下方"
        },
        {
          "kind": "next",
          "a": "squirrel",
          "b": "koala",
          "text": "松松挨着灰灰"
        },
        {
          "kind": "below",
          "a": "squirrel",
          "b": "fox",
          "text": "松松在阿橙正下方"
        }
      ],
      "hints": [
        "最右列只有上面的草地可以扎营。先放大树，再找唯一能挨着他的草地。",
        "大树右上，绒绒上排中间，灰灰就在绒绒下面。剩下左边两块草地，松松在阿橙下方。"
      ],
      "success": "五条线索连起来，营地安排好啦！先确定一处，再推下一处，你做到了。",
      "type": "camp-place",
      "instruction": "先点朋友，再点草地放置。点已住的草地可以交换，也能放回集合处。",
      "clues": [
        "大树在最右列",
        "绒绒挨着大树",
        "灰灰在绒绒正下方",
        "松松挨着灰灰",
        "松松在阿橙正下方"
      ],
      "wrong": "还有线索没有满足。找找标出的冲突，调整后再检查。"
    }
  ]
};
