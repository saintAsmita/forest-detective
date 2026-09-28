'use strict';
window.STAGE_CHAPTER={
  "id": "stage",
  "number": "005",
  "name": "星光演出夜",
  "subtitle": "连起线索，多想一步",
  "title": "星光亮起来，<br><span>谁先上舞台？</span>",
  "description": "五位朋友准备了一场森林演出。<br>连起先后线索，检查每个条件，安排一场精彩的演出。",
  "image": "./assets/stage.svg",
  "imageAlt": "星空下的森林舞台，五个位置等待小演员",
  "tag": "进阶委托：安排星光演出 ☆",
  "audioRoot": "./assets/audio/stage/",
  "audioExtension": "wav",
  "audioReady": true,
  "skills": [
    "关系推理",
    "交叉排除",
    "多条件规划"
  ],
  "endingTitle": "星光演出，准备就绪！",
  "endingText": "每位朋友都找到了自己的位置。<br>你学会了连起线索、排除不可能，还发现有的题目不止一种排法。<br>朋友们一起向认真思考的你鞠躬！",
  "endingQuestion": "下次给家人安排座位，试着提出两条条件，再看看能找到几种排法。",
  "lessons": [
    {
      "title": "谁先登台",
      "short": "把分散的先后线索连起来",
      "symbol": "→",
      "question": "四位朋友该按什么顺序登台？",
      "story": "演出名单被风吹散了。每张纸只记着两位朋友的先后关系，要把它们连起来才行。",
      "rules": [
        {
          "kind": "before",
          "a": "fox",
          "b": "bear",
          "text": "阿橙在大树前面"
        },
        {
          "kind": "before",
          "a": "rabbit",
          "b": "squirrel",
          "text": "绒绒在松松前面"
        },
        {
          "kind": "before",
          "a": "squirrel",
          "b": "fox",
          "text": "松松在阿橙前面"
        }
      ],
      "hints": [
        "先找一找，谁的前面没有别的朋友？再把三条线索连起来。",
        "绒绒先于松松，松松先于阿橙，阿橙先于大树。把这条顺序从头到尾摆出来。"
      ],
      "success": "你把三条线索连成了一条长顺序！没有直接写出来的关系，也能推出来。",
      "type": "stage-order",
      "friends": [
        "rabbit",
        "squirrel",
        "fox",
        "bear"
      ],
      "instruction": "先点朋友卡，再点位置。点已占的位置可以交换；也可以放回候场区。",
      "clues": [
        "阿橙在大树前面",
        "绒绒在松松前面",
        "松松在阿橙前面"
      ],
      "wrong": "还有线索没满足。看看画面里标出的那一条，再调整位置。"
    },
    {
      "title": "挨着还是隔开",
      "short": "同时考虑相邻与位置",
      "symbol": "↔",
      "question": "让绒绒和大树挨着，松松又不站两头，怎么排？",
      "story": "舞台合影有新的要求。挨着只表示中间没有人，不表示谁一定在左边。",
      "rules": [
        {
          "kind": "at",
          "a": "fox",
          "b": 3,
          "text": "阿橙在最右边"
        },
        {
          "kind": "next",
          "a": "rabbit",
          "b": "bear",
          "text": "绒绒和大树挨着"
        },
        {
          "kind": "notat",
          "a": "squirrel",
          "b": 0,
          "text": "松松不在最左边"
        },
        {
          "kind": "notat",
          "a": "squirrel",
          "b": 3,
          "text": "松松不在最右边"
        }
      ],
      "hints": [
        "先把最确定的阿橙放好，再想松松能站哪里。",
        "如果松松站第二个位置，绒绒和大树就会被隔开。让松松站第三个位置，前两位可以交换。"
      ],
      "success": "所有条件都满足了！绒绒和大树可以换个顺序，仍然是邻居。",
      "type": "stage-order",
      "friends": [
        "rabbit",
        "squirrel",
        "fox",
        "bear"
      ],
      "instruction": "先点朋友卡，再点位置。点已占的位置可以交换；也可以放回候场区。",
      "clues": [
        "阿橙在最右边",
        "绒绒和大树挨着",
        "松松不在最左边",
        "松松不在最右边"
      ],
      "wrong": "还有线索没满足。看看画面里标出的那一条，再调整位置。"
    },
    {
      "title": "乐器分给谁",
      "short": "交叉排除，完成一一配对",
      "symbol": "♫",
      "question": "每人一件乐器，你能把四位朋友安排好吗？",
      "story": "乐器已经摆好了。把朋友放到他负责的乐器下面，每件乐器只能有一位朋友。",
      "slotKinds": [
        "drum",
        "bell",
        "flute",
        "triangle"
      ],
      "rules": [
        {
          "kind": "notat",
          "a": "rabbit",
          "b": 0,
          "text": "绒绒不打鼓"
        },
        {
          "kind": "notat",
          "a": "rabbit",
          "b": 1,
          "text": "绒绒不摇铃"
        },
        {
          "kind": "notat",
          "a": "rabbit",
          "b": 3,
          "text": "绒绒不敲三角铁"
        },
        {
          "kind": "at",
          "a": "bear",
          "b": 0,
          "text": "大树打鼓"
        },
        {
          "kind": "notat",
          "a": "fox",
          "b": 1,
          "text": "阿橙不摇铃"
        }
      ],
      "hints": [
        "先看谁的线索最多。绒绒排除了三件乐器，还剩哪一件？",
        "绒绒吹笛，大树打鼓。剩下铃铛和三角铁，阿橙不摇铃，那么铃铛留给谁？"
      ],
      "success": "你先排除，再利用每人一件的条件，把没有直接告诉你的搭配也找到了。",
      "type": "stage-order",
      "friends": [
        "rabbit",
        "squirrel",
        "fox",
        "bear"
      ],
      "instruction": "先点朋友卡，再点位置。点已占的位置可以交换；也可以放回候场区。",
      "clues": [
        "绒绒不打鼓",
        "绒绒不摇铃",
        "绒绒不敲三角铁",
        "大树打鼓",
        "阿橙不摇铃"
      ],
      "wrong": "还有线索没满足。看看画面里标出的那一条，再调整位置。"
    },
    {
      "title": "只换一次",
      "short": "找到冲突，用一次交换修好",
      "symbol": "⇄",
      "question": "只能交换两位朋友一次，怎样让所有线索都成立？",
      "story": "队伍已经排好，大部分位置是对的。先找出冲突，再交换两位朋友，不用全部重排。",
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
          "text": "绒绒在最左边"
        },
        {
          "kind": "before",
          "a": "squirrel",
          "b": "fox",
          "text": "松松在阿橙前面"
        },
        {
          "kind": "next",
          "a": "fox",
          "b": "bear",
          "text": "阿橙和大树挨着"
        }
      ],
      "hints": [
        "绒绒的位置已经符合要求。看看中间哪两位换一下，能同时修好另外两条线索。",
        "交换松松和阿橙。检查：松松到了阿橙前面，阿橙也挨着大树了。"
      ],
      "success": "一次交换，修好了两条冲突！先想一想再动手，可以少走弯路。",
      "type": "stage-order",
      "friends": [
        "rabbit",
        "squirrel",
        "fox",
        "bear"
      ],
      "instruction": "先点一位朋友，再点另一位交换；需要时可重新开始。",
      "clues": [
        "绒绒在最左边",
        "松松在阿橙前面",
        "阿橙和大树挨着"
      ],
      "wrong": "还有线索没满足。看看画面里标出的那一条，再调整位置。"
    },
    {
      "title": "五人的彩排",
      "short": "部分顺序，寻找多种可行安排",
      "symbol": "☆",
      "question": "五位朋友都上台，这些条件能一起满足吗？",
      "story": "灰灰也来了！有些朋友的先后是确定的，有些还可以改变。只要每条线索都成立，就是好办法。",
      "friends": [
        "rabbit",
        "squirrel",
        "fox",
        "bear",
        "koala"
      ],
      "rules": [
        {
          "kind": "at",
          "a": "koala",
          "b": 2,
          "text": "灰灰在正中间"
        },
        {
          "kind": "before",
          "a": "rabbit",
          "b": "fox",
          "text": "绒绒在阿橙前面"
        },
        {
          "kind": "before",
          "a": "squirrel",
          "b": "bear",
          "text": "松松在大树前面"
        },
        {
          "kind": "notnext",
          "a": "rabbit",
          "b": "squirrel",
          "text": "绒绒和松松不挨着"
        }
      ],
      "hints": [
        "先放好正中间的灰灰。剩下四个位置，再分配给两对有先后要求的朋友。",
        "可以试着把绒绒、阿橙放在灰灰左边，把松松、大树放在右边。也想想有没有别的排法。"
      ],
      "success": "你找到了一种可行的安排！有些位置可以变化，满足所有条件才是判断标准。",
      "type": "stage-order",
      "instruction": "先点朋友卡，再点位置。点已占的位置可以交换；也可以放回候场区。",
      "clues": [
        "灰灰在正中间",
        "绒绒在阿橙前面",
        "松松在大树前面",
        "绒绒和松松不挨着"
      ],
      "wrong": "还有线索没满足。看看画面里标出的那一条，再调整位置。"
    },
    {
      "title": "最后的合影",
      "short": "五条线索，联动推理",
      "symbol": "⌕",
      "question": "最后五条线索，你能一起解开吗？",
      "story": "灯光亮起来了！这次先把确定的位置放好，再用相邻和先后关系，一步步推出其他位置。",
      "friends": [
        "rabbit",
        "squirrel",
        "fox",
        "bear",
        "koala"
      ],
      "rules": [
        {
          "kind": "at",
          "a": "bear",
          "b": 4,
          "text": "大树在最右边"
        },
        {
          "kind": "next",
          "a": "fox",
          "b": "bear",
          "text": "阿橙和大树挨着"
        },
        {
          "kind": "before",
          "a": "rabbit",
          "b": "squirrel",
          "text": "绒绒在松松前面"
        },
        {
          "kind": "between",
          "a": "koala",
          "b": [
            "rabbit",
            "fox"
          ],
          "text": "灰灰在绒绒和阿橙之间"
        },
        {
          "kind": "notnext",
          "a": "koala",
          "b": "fox",
          "text": "灰灰和阿橙不挨着"
        }
      ],
      "hints": [
        "从最右边开始：大树的位置固定，阿橙又必须挨着他。接着想灰灰还能站哪里。",
        "右边两位是阿橙、大树。灰灰不能挨着阿橙，所以不能站第三位；他还要在绒绒和阿橙之间，因此站第二位。"
      ],
      "success": "你从确定的位置出发，一步步缩小可能，解开了五条线索！",
      "type": "stage-order",
      "instruction": "先点朋友卡，再点位置。点已占的位置可以交换；也可以放回候场区。",
      "clues": [
        "大树在最右边",
        "阿橙和大树挨着",
        "绒绒在松松前面",
        "灰灰在绒绒和阿橙之间",
        "灰灰和阿橙不挨着"
      ],
      "wrong": "还有线索没满足。看看画面里标出的那一条，再调整位置。"
    }
  ]
};
