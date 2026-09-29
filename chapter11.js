'use strict';
window.MUSEUM_CHAPTER={
  "id": "museum",
  "number": "011",
  "name": "树屋收藏馆",
  "subtitle": "组合方向，布置展墙",
  "title": "树屋要开门，<br><span>展品怎么摆？</span>",
  "description": "叶子、贝壳和宝石都准备好了。<br>观察展示墙，把上下左右的线索连成一幅完整的图。",
  "imageAlt": "树屋收藏馆中陈列叶子、贝壳、星星、月亮和宝石",
  "skills": [
    "空间关系",
    "连续推导",
    "冲突修复"
  ],
  "endingTitle": "收藏馆，欢迎你来！",
  "endingText": "阳光穿过窗户，每一件收藏品都闪着自己的光。<br>你从确定的位置开始，连起五条线索，还用一次交换修好了展墙。",
  "endingQuestion": "用四个小玩具摆两排，给家人几条上下左右的线索。看看能不能摆出不一样的正确答案。",
  "lessons": [
    {
      "title": "布置第一面墙",
      "short": "从确定位置推出上下左右",
      "question": "叶子、贝壳、星星和月亮，该摆在哪儿？",
      "story": "树屋里有四个展示格。所有方向都按现在看到的画面，不需要转动或想象别的视角。",
      "rules": [
        {
          "kind": "at",
          "a": "leaf",
          "b": 0,
          "text": "叶子在左上角"
        },
        {
          "kind": "below",
          "a": "shell",
          "b": "leaf",
          "text": "贝壳在叶子正下方"
        },
        {
          "kind": "right",
          "a": "star",
          "b": "leaf",
          "text": "星星在叶子正右边"
        }
      ],
      "hints": [
        "先摆好左上角的叶子。找同一列的下方、同一排的右边。",
        "叶子左上，星星右上，贝壳左下。月亮摆在右下。"
      ],
      "success": "从一个确定位置，你找到了另外三件收藏品的家！",
      "type": "logic-arrange",
      "mode": "grid",
      "symbol": "⌕",
      "items": [
        "leaf",
        "shell",
        "star",
        "moon"
      ],
      "clues": [
        "叶子在左上角",
        "贝壳在叶子正下方",
        "星星在叶子正右边"
      ],
      "instruction": "先点一张卡，再点空位放下。点已放好的卡可以交换，也能放回集合处。",
      "wrong": "还有线索没有满足。看看标出的冲突，调整后再检查。",
      "cols": 2,
      "slots": [
        0,
        1,
        2,
        3
      ]
    },
    {
      "title": "斜角不算邻居",
      "short": "结合排、列与排除",
      "question": "四条线索放在一起，怎样摆才都符合？",
      "story": "左右或上下紧挨才是邻居，斜对角不算。线索中的“正上方”必须在同一列。",
      "rules": [
        {
          "kind": "row",
          "a": "moon",
          "b": 1,
          "text": "月亮在下排"
        },
        {
          "kind": "above",
          "a": "star",
          "b": "moon",
          "text": "星星在月亮正上方"
        },
        {
          "kind": "notnext",
          "a": "leaf",
          "b": "moon",
          "text": "叶子不挨着月亮"
        },
        {
          "kind": "col",
          "a": "shell",
          "b": 0,
          "text": "贝壳在左列"
        }
      ],
      "hints": [
        "星星和月亮要占同一列。如果它们占左列，贝壳还有位置吗？",
        "星星右上、月亮右下。叶子不能挨月亮，所以在左上，贝壳在左下。"
      ],
      "success": "你用另一条线索排除了整列不合适的安排！",
      "type": "logic-arrange",
      "mode": "grid",
      "symbol": "⊕",
      "items": [
        "leaf",
        "shell",
        "star",
        "moon"
      ],
      "clues": [
        "月亮在下排",
        "星星在月亮正上方",
        "叶子不挨着月亮",
        "贝壳在左列"
      ],
      "instruction": "先点一张卡，再点空位放下。点已放好的卡可以交换，也能放回集合处。",
      "wrong": "还有线索没有满足。看看标出的冲突，调整后再检查。",
      "cols": 2,
      "slots": [
        0,
        1,
        2,
        3
      ]
    },
    {
      "title": "上下两排都可以",
      "short": "找出空间关系的多解",
      "question": "叶子和星星在同一排，能摆出一种合适的展墙吗？",
      "story": "有时一组关系可以摆在上排，也可以摆在下排。每条线索都对就可以。",
      "rules": [
        {
          "kind": "col",
          "a": "leaf",
          "b": 0,
          "text": "叶子在左列"
        },
        {
          "kind": "right",
          "a": "star",
          "b": "leaf",
          "text": "星星在叶子正右边"
        },
        {
          "kind": "notnext",
          "a": "shell",
          "b": "star",
          "text": "贝壳不挨着星星"
        }
      ],
      "hints": [
        "先把叶子和星星放同一排。贝壳要与星星斜对角，月亮放剩下的位置。",
        "叶子、星星在上排时，贝壳、月亮在下排。两排整体互换，也符合要求。"
      ],
      "success": "这样摆可以！把上下两排整体互换，也是一个好答案。",
      "type": "logic-arrange",
      "mode": "grid",
      "symbol": "☆",
      "items": [
        "leaf",
        "shell",
        "star",
        "moon"
      ],
      "clues": [
        "叶子在左列",
        "星星在叶子正右边",
        "贝壳不挨着星星"
      ],
      "instruction": "先点一张卡，再点空位放下。点已放好的卡可以交换，也能放回集合处。",
      "wrong": "还有线索没有满足。看看标出的冲突，调整后再检查。",
      "cols": 2,
      "slots": [
        0,
        1,
        2,
        3
      ]
    },
    {
      "title": "展品拿反了",
      "short": "一次交换保留正确部分",
      "question": "只交换两件收藏品一次，修好展示墙吧！",
      "story": "两件收藏品的位置放反了。先找已经正确的叶子，再检查它右边和下面。",
      "rules": [
        {
          "kind": "at",
          "a": "leaf",
          "b": 0,
          "text": "叶子在左上角"
        },
        {
          "kind": "right",
          "a": "star",
          "b": "leaf",
          "text": "星星在叶子正右边"
        },
        {
          "kind": "below",
          "a": "shell",
          "b": "leaf",
          "text": "贝壳在叶子正下方"
        }
      ],
      "hints": [
        "叶子右边该是什么，下面该是什么？看看是不是刚好拿反了。",
        "交换右上的贝壳和左下的星星，叶子和月亮不用动。"
      ],
      "success": "只换两件，就让两条方向线索都满足了！",
      "type": "logic-arrange",
      "mode": "grid",
      "symbol": "⇄",
      "items": [
        "leaf",
        "shell",
        "star",
        "moon"
      ],
      "clues": [
        "叶子在左上角",
        "星星在叶子正右边",
        "贝壳在叶子正下方"
      ],
      "instruction": "先点一张卡，再点另一张交换。只交换一次，可以重新开始。",
      "wrong": "还有线索没有满足。看看标出的冲突，调整后再检查。",
      "repair": true,
      "cols": 2,
      "slots": [
        0,
        1,
        2,
        3
      ],
      "initial": [
        "leaf",
        "shell",
        "star",
        "moon"
      ]
    },
    {
      "title": "宝石加入展览",
      "short": "五件展品交叉排除",
      "question": "五件展品来了，右下的窗户要空着哦！",
      "story": "展示墙变成两排三列。右下是窗户，不能摆展品；只有五个展示格可以使用。",
      "rules": [
        {
          "kind": "at",
          "a": "gem",
          "b": 2,
          "text": "宝石在右上角"
        },
        {
          "kind": "left",
          "a": "moon",
          "b": "gem",
          "text": "月亮在宝石正左边"
        },
        {
          "kind": "below",
          "a": "star",
          "b": "moon",
          "text": "星星在月亮正下方"
        },
        {
          "kind": "notnext",
          "a": "leaf",
          "b": "gem",
          "text": "叶子不挨着宝石"
        },
        {
          "kind": "below",
          "a": "leaf",
          "b": "shell",
          "text": "叶子在贝壳正下方"
        }
      ],
      "hints": [
        "先摆宝石，再摆月亮和星星。最后两个空格必须让叶子在贝壳下面。",
        "上排从左到右：贝壳、月亮、宝石。下排从左到右：叶子、星星，窗户保持空着。"
      ],
      "success": "你把位置、方向和空格一起检查，五件收藏品都摆好了！",
      "type": "logic-arrange",
      "mode": "grid",
      "symbol": "▤",
      "items": [
        "leaf",
        "shell",
        "star",
        "moon",
        "gem"
      ],
      "clues": [
        "宝石在右上角",
        "月亮在宝石正左边",
        "星星在月亮正下方",
        "叶子不挨着宝石",
        "叶子在贝壳正下方"
      ],
      "instruction": "先点一张卡，再点空位放下。点已放好的卡可以交换，也能放回集合处。",
      "wrong": "还有线索没有满足。看看标出的冲突，调整后再检查。",
      "cols": 3,
      "slots": [
        0,
        1,
        2,
        3,
        4
      ]
    },
    {
      "title": "收藏馆开门啦",
      "short": "从唯一位置连起五条线索",
      "question": "最后五条线索，布置好开门时的展墙吧！",
      "story": "窗户仍在右下角。先找只有一个可能的位置，再顺着左边、下方和邻居关系继续想。",
      "rules": [
        {
          "kind": "col",
          "a": "gem",
          "b": 2,
          "text": "宝石在最右列"
        },
        {
          "kind": "left",
          "a": "moon",
          "b": "gem",
          "text": "月亮在宝石正左边"
        },
        {
          "kind": "below",
          "a": "shell",
          "b": "moon",
          "text": "贝壳在月亮正下方"
        },
        {
          "kind": "next",
          "a": "leaf",
          "b": "shell",
          "text": "叶子挨着贝壳"
        },
        {
          "kind": "above",
          "a": "star",
          "b": "leaf",
          "text": "星星在叶子正上方"
        }
      ],
      "hints": [
        "最右列只有一个展示格。放好宝石后，再顺着月亮、贝壳的线索推下去。",
        "上排是星星、月亮、宝石。下排是叶子、贝壳，右下窗户不摆东西。"
      ],
      "success": "五条线索全部满足，树屋收藏馆开门啦！你已经会把分散的线索连成完整安排了。",
      "type": "logic-arrange",
      "mode": "grid",
      "symbol": "◇",
      "items": [
        "leaf",
        "shell",
        "star",
        "moon",
        "gem"
      ],
      "clues": [
        "宝石在最右列",
        "月亮在宝石正左边",
        "贝壳在月亮正下方",
        "叶子挨着贝壳",
        "星星在叶子正上方"
      ],
      "instruction": "先点一张卡，再点空位放下。点已放好的卡可以交换，也能放回集合处。",
      "wrong": "还有线索没有满足。看看标出的冲突，调整后再检查。",
      "cols": 3,
      "slots": [
        0,
        1,
        2,
        3,
        4
      ]
    }
  ],
  "image": "./assets/museum.svg",
  "tag": "进阶委托：树屋收藏馆 ☆",
  "audioRoot": "./assets/audio/museum/",
  "audioExtension": "wav",
  "audioReady":true
};
