'use strict';
window.DELIVERY_CHAPTER={
  "id": "delivery",
  "number": "010",
  "name": "溪流送货队",
  "subtitle": "连起先后，规划行程",
  "title": "装好小推车，<br><span>先去哪里呢？</span>",
  "description": "沿溪流的朋友们等着包裹。<br>连起先后和相邻的线索，安排一次顺利的送货。",
  "imageAlt": "溪流旁的小桥、风车、灯塔和装满包裹的小推车",
  "skills": [
    "顺序推理",
    "关系组合",
    "多解验证"
  ],
  "endingTitle": "叮咚，包裹都送到啦！",
  "endingText": "小推车回到了森林邮局，沿途每一站都收到了包裹。<br>你把先后、相邻和中间关系连起来，规划了完整的行程。",
  "endingQuestion": "用四张图卡安排一次出游，告诉家人哪些地方先去、哪些地方要连着去。",
  "lessons": [
    {
      "title": "先送到哪一站",
      "short": "连接先后与紧挨关系",
      "question": "四个地点都要去一次，安排一条送货顺序吧！",
      "story": "这排卡片表示送货的先后，不是地图远近。紧接着表示中间不能插入别的站。",
      "rules": [
        {
          "kind": "at",
          "a": "oak",
          "b": 0,
          "text": "大树站是第一站"
        },
        {
          "kind": "next",
          "a": "bridge",
          "b": "oak",
          "text": "小桥站和大树站紧挨着"
        },
        {
          "kind": "before",
          "a": "pond",
          "b": "mill",
          "text": "池塘站在风车站之前"
        }
      ],
      "hints": [
        "先放第一站。和它紧挨着的站只有一个位置，再安排剩下两站的先后。",
        "先大树，再小桥，接着池塘，最后风车。"
      ],
      "success": "从第一站出发，你把四站的顺序连好了。",
      "type": "logic-arrange",
      "mode": "order",
      "symbol": "⌕",
      "items": [
        "oak",
        "bridge",
        "mill",
        "pond"
      ],
      "clues": [
        "大树站是第一站",
        "小桥站和大树站紧挨着",
        "池塘站在风车站之前"
      ],
      "instruction": "先点一张卡，再点空位放下。点已放好的卡可以交换，也能放回集合处。",
      "wrong": "还有线索没有满足。看看标出的冲突，调整后再检查。"
    },
    {
      "title": "两条线索一起看",
      "short": "排除位置再连接邻站",
      "question": "小桥和风车要连着送，其他两站放哪里？",
      "story": "先后只表示谁更早，不一定紧挨着。紧挨着才表示中间没有别的站。",
      "rules": [
        {
          "kind": "notat",
          "a": "bridge",
          "b": 2,
          "text": "小桥站不是第三站"
        },
        {
          "kind": "before",
          "a": "oak",
          "b": "bridge",
          "text": "大树站在小桥站之前"
        },
        {
          "kind": "next",
          "a": "mill",
          "b": "bridge",
          "text": "风车站和小桥站紧挨着"
        },
        {
          "kind": "at",
          "a": "pond",
          "b": 3,
          "text": "池塘站是第四站"
        }
      ],
      "hints": [
        "先把池塘放最后。小桥不能第三，也不能抢在大树前面，只剩哪个位置？",
        "小桥只能第二，大树第一。风车要挨着小桥，就放第三，池塘第四。"
      ],
      "success": "你没有只看相邻，还检查了前后顺序是否合适！",
      "type": "logic-arrange",
      "mode": "order",
      "symbol": "⊕",
      "items": [
        "oak",
        "bridge",
        "mill",
        "pond"
      ],
      "clues": [
        "小桥站不是第三站",
        "大树站在小桥站之前",
        "风车站和小桥站紧挨着",
        "池塘站是第四站"
      ],
      "instruction": "先点一张卡，再点空位放下。点已放好的卡可以交换，也能放回集合处。",
      "wrong": "还有线索没有满足。看看标出的冲突，调整后再检查。"
    },
    {
      "title": "中间可以换一换",
      "short": "接受满足条件的不同顺序",
      "question": "中间两站，哪一种顺序都可以吗？",
      "story": "第一站和最后一站已经约好，中间的两位收件人都不着急。",
      "rules": [
        {
          "kind": "at",
          "a": "oak",
          "b": 0,
          "text": "大树站是第一站"
        },
        {
          "kind": "at",
          "a": "pond",
          "b": 3,
          "text": "池塘站是第四站"
        },
        {
          "kind": "next",
          "a": "bridge",
          "b": "mill",
          "text": "小桥站和风车站紧挨着"
        }
      ],
      "hints": [
        "先固定两头。中间还剩几个位置？换一下会不会破坏相邻？",
        "小桥和风车放第二、第三，谁先谁后都符合要求。"
      ],
      "success": "两种顺序都可以！你检查的是线索，不是某一个固定答案。",
      "type": "logic-arrange",
      "mode": "order",
      "symbol": "☆",
      "items": [
        "oak",
        "bridge",
        "mill",
        "pond"
      ],
      "clues": [
        "大树站是第一站",
        "池塘站是第四站",
        "小桥站和风车站紧挨着"
      ],
      "instruction": "先点一张卡，再点空位放下。点已放好的卡可以交换，也能放回集合处。",
      "wrong": "还有线索没有满足。看看标出的冲突，调整后再检查。"
    },
    {
      "title": "送货卡排错了",
      "short": "一次交换修复路线顺序",
      "question": "只交换两站一次，修好这排送货卡吧！",
      "story": "两张送货卡不小心放反了。先找冲突，再交换，已经正确的站不用动。",
      "rules": [
        {
          "kind": "at",
          "a": "oak",
          "b": 0,
          "text": "大树站是第一站"
        },
        {
          "kind": "next",
          "a": "bridge",
          "b": "oak",
          "text": "小桥站和大树站紧挨着"
        },
        {
          "kind": "before",
          "a": "mill",
          "b": "pond",
          "text": "风车站在池塘站之前"
        }
      ],
      "hints": [
        "大树后面现在是哪一站？找一找需要和大树紧挨着的地点。",
        "交换第二站的风车和第三站的小桥，顺序就修好啦。"
      ],
      "success": "一次交换，让相邻和先后的要求一起满足了！",
      "type": "logic-arrange",
      "mode": "order",
      "symbol": "⇄",
      "items": [
        "oak",
        "bridge",
        "mill",
        "pond"
      ],
      "clues": [
        "大树站是第一站",
        "小桥站和大树站紧挨着",
        "风车站在池塘站之前"
      ],
      "instruction": "先点一张卡，再点另一张交换。只交换一次，可以重新开始。",
      "wrong": "还有线索没有满足。看看标出的冲突，调整后再检查。",
      "repair": true,
      "initial": [
        "oak",
        "mill",
        "bridge",
        "pond"
      ]
    },
    {
      "title": "五站连起来",
      "short": "把分散先后连成整条链",
      "question": "五个地点，没有写第几站，也能排好吗？",
      "story": "卡片上只写了先后关系。试着把上一条的终点，接到下一条的起点。",
      "rules": [
        {
          "kind": "before",
          "a": "oak",
          "b": "bridge",
          "text": "大树站在小桥站之前"
        },
        {
          "kind": "before",
          "a": "bridge",
          "b": "mill",
          "text": "小桥站在风车站之前"
        },
        {
          "kind": "before",
          "a": "mill",
          "b": "pond",
          "text": "风车站在池塘站之前"
        },
        {
          "kind": "before",
          "a": "pond",
          "b": "tower",
          "text": "池塘站在灯塔站之前"
        }
      ],
      "hints": [
        "哪一站没有被要求放在其他站后面？从它开始，顺着每条先后关系接下去。",
        "从大树开始，接小桥、风车、池塘，最后是灯塔。"
      ],
      "success": "四条先后关系，连成了五站的完整顺序！",
      "type": "logic-arrange",
      "mode": "order",
      "symbol": "▤",
      "items": [
        "oak",
        "bridge",
        "mill",
        "pond",
        "tower"
      ],
      "clues": [
        "大树站在小桥站之前",
        "小桥站在风车站之前",
        "风车站在池塘站之前",
        "池塘站在灯塔站之前"
      ],
      "instruction": "先点一张卡，再点空位放下。点已放好的卡可以交换，也能放回集合处。",
      "wrong": "还有线索没有满足。看看标出的冲突，调整后再检查。"
    },
    {
      "title": "出发前再核对",
      "short": "结合中间与相邻条件",
      "question": "五条线索一起看，安排最后一趟送货吧！",
      "story": "“在两站之间”表示比其中一站晚、比另一站早，不要求紧挨着。符合全部要求的顺序都可以。",
      "rules": [
        {
          "kind": "at",
          "a": "tower",
          "b": 4,
          "text": "灯塔站是第五站"
        },
        {
          "kind": "notat",
          "a": "oak",
          "b": 0,
          "text": "大树站不是第一站"
        },
        {
          "kind": "before",
          "a": "bridge",
          "b": "oak",
          "text": "小桥站在大树站之前"
        },
        {
          "kind": "between",
          "a": "mill",
          "b": [
            "oak",
            "tower"
          ],
          "text": "风车站在大树站与灯塔站之间"
        },
        {
          "kind": "next",
          "a": "pond",
          "b": "bridge",
          "text": "池塘站和小桥站紧挨着"
        }
      ],
      "hints": [
        "先放最后的灯塔。大树后面还要留给风车一个位置，小桥旁边又要留给池塘一个位置。",
        "大树第三，风车第四，灯塔第五。小桥和池塘在前两站，谁先谁后都可以。"
      ],
      "success": "你同时满足了五条要求，送货队可以出发啦！",
      "type": "logic-arrange",
      "mode": "order",
      "symbol": "◇",
      "items": [
        "oak",
        "bridge",
        "mill",
        "pond",
        "tower"
      ],
      "clues": [
        "灯塔站是第五站",
        "大树站不是第一站",
        "小桥站在大树站之前",
        "风车站在大树站与灯塔站之间",
        "池塘站和小桥站紧挨着"
      ],
      "instruction": "先点一张卡，再点空位放下。点已放好的卡可以交换，也能放回集合处。",
      "wrong": "还有线索没有满足。看看标出的冲突，调整后再检查。"
    }
  ],
  "image": "./assets/delivery.svg",
  "tag": "进阶委托：溪流送货队 ☆",
  "audioRoot": "./assets/audio/delivery/",
  "audioExtension": "wav",
  "audioReady":true
};
