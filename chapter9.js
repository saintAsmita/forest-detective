'use strict';
window.GIFTS_CHAPTER={
  "id": "gifts",
  "number": "009",
  "name": "风铃礼物铺",
  "subtitle": "交叉排除，分好礼物",
  "title": "风铃响起来，<br><span>礼物送给谁？</span>",
  "description": "朋友们来挑选心意礼物。<br>看看选择，排除冲突，让每份礼物找到合适的主人。",
  "imageAlt": "森林中的风铃礼物铺，柜台摆着风筝、雨伞和礼物",
  "skills": [
    "交叉排除",
    "一一对应",
    "调整验证"
  ],
  "endingTitle": "风铃响，礼物送到啦！",
  "endingText": "风筝飞起来，小灯亮起来，故事书也翻开了。<br>你把选择和排除连在一起，为每位朋友找到了合适的礼物。",
  "endingQuestion": "拿四件小物品，给家人几条“要这个或那个”的线索，请他们试着分一分。",
  "lessons": [
    {
      "title": "一份一份分清楚",
      "short": "把选择连成排除链",
      "question": "四份礼物，每位朋友各拿一份，怎样分呢？",
      "story": "风铃礼物铺准备开门啦。每份礼物只能送给一位朋友，放好的礼物也能帮你排除其他选择。",
      "rules": [
        {
          "kind": "oneof",
          "a": "rabbit",
          "b": [
            0,
            1
          ],
          "text": "绒绒拿风筝或雨伞"
        },
        {
          "kind": "at",
          "a": "squirrel",
          "b": 1,
          "text": "松松拿雨伞"
        },
        {
          "kind": "oneof",
          "a": "fox",
          "b": [
            1,
            2
          ],
          "text": "阿橙拿雨伞或小灯"
        }
      ],
      "hints": [
        "先把确定的雨伞送给松松。剩下两条线索里，谁还能拿雨伞呢？",
        "松松拿雨伞，绒绒只能拿风筝，阿橙只能拿小灯。皮球留给大树。"
      ],
      "success": "你把“已经有人拿了”也当成线索，四份礼物都送对啦！",
      "type": "logic-arrange",
      "mode": "match",
      "symbol": "⌕",
      "items": [
        "rabbit",
        "squirrel",
        "fox",
        "bear"
      ],
      "clues": [
        "绒绒拿风筝或雨伞",
        "松松拿雨伞",
        "阿橙拿雨伞或小灯"
      ],
      "instruction": "先点一张卡，再点空位放下。点已放好的卡可以交换，也能放回集合处。",
      "wrong": "还有线索没有满足。看看标出的冲突，调整后再检查。",
      "targets": [
        "kite",
        "umbrella",
        "lamp",
        "ball"
      ]
    },
    {
      "title": "排除后再选择",
      "short": "同时照顾四条要求",
      "question": "有喜欢的，也有不想要的，怎样分才都合适？",
      "story": "每位朋友仍然只拿一份。划掉的礼物表示不拿；并排的两份礼物表示二选一。",
      "rules": [
        {
          "kind": "notset",
          "a": "rabbit",
          "b": [
            0,
            3
          ],
          "text": "绒绒不拿风筝，也不拿皮球"
        },
        {
          "kind": "oneof",
          "a": "squirrel",
          "b": [
            0,
            1
          ],
          "text": "松松拿风筝或雨伞"
        },
        {
          "kind": "at",
          "a": "fox",
          "b": 2,
          "text": "阿橙拿小灯"
        },
        {
          "kind": "notat",
          "a": "bear",
          "b": 1,
          "text": "大树不拿雨伞"
        }
      ],
      "hints": [
        "先放好阿橙。绒绒排除两份礼物后，再看看哪份已经有人拿了。",
        "阿橙拿小灯，绒绒只能拿雨伞。松松拿风筝，剩下皮球给大树。"
      ],
      "success": "你把“不拿”和“只能拿”连了起来，每一条要求都照顾到了。",
      "type": "logic-arrange",
      "mode": "match",
      "symbol": "⊕",
      "items": [
        "rabbit",
        "squirrel",
        "fox",
        "bear"
      ],
      "clues": [
        "绒绒不拿风筝，也不拿皮球",
        "松松拿风筝或雨伞",
        "阿橙拿小灯",
        "大树不拿雨伞"
      ],
      "instruction": "先点一张卡，再点空位放下。点已放好的卡可以交换，也能放回集合处。",
      "wrong": "还有线索没有满足。看看标出的冲突，调整后再检查。",
      "targets": [
        "kite",
        "umbrella",
        "lamp",
        "ball"
      ]
    },
    {
      "title": "两种心意都可以",
      "short": "认识多种有效分法",
      "question": "风筝和雨伞，谁拿哪份都可以吗？",
      "story": "不必猜店长心里的答案。只要每条线索都满足，就是合适的分法。",
      "rules": [
        {
          "kind": "at",
          "a": "bear",
          "b": 3,
          "text": "大树拿皮球"
        },
        {
          "kind": "at",
          "a": "fox",
          "b": 2,
          "text": "阿橙拿小灯"
        },
        {
          "kind": "oneof",
          "a": "rabbit",
          "b": [
            0,
            1
          ],
          "text": "绒绒拿风筝或雨伞"
        }
      ],
      "hints": [
        "先安排大树和阿橙。还有哪两份礼物、哪两位朋友没有配好？",
        "绒绒和松松可以分别拿风筝、雨伞，也可以互换。这两种分法都可以。"
      ],
      "success": "这样分可以！绒绒和松松互换风筝、雨伞，也都符合要求。",
      "type": "logic-arrange",
      "mode": "match",
      "symbol": "☆",
      "items": [
        "rabbit",
        "squirrel",
        "fox",
        "bear"
      ],
      "clues": [
        "大树拿皮球",
        "阿橙拿小灯",
        "绒绒拿风筝或雨伞"
      ],
      "instruction": "先点一张卡，再点空位放下。点已放好的卡可以交换，也能放回集合处。",
      "wrong": "还有线索没有满足。看看标出的冲突，调整后再检查。",
      "targets": [
        "kite",
        "umbrella",
        "lamp",
        "ball"
      ]
    },
    {
      "title": "礼物签贴反了",
      "short": "交换一次修复冲突",
      "question": "只交换两位朋友一次，把礼物签修好吧！",
      "story": "店长已经放好了四张名字卡，其中两张贴反了。保留正确的卡片，找到需要交换的两张。",
      "rules": [
        {
          "kind": "oneof",
          "a": "rabbit",
          "b": [
            0,
            1
          ],
          "text": "绒绒拿风筝或雨伞"
        },
        {
          "kind": "at",
          "a": "squirrel",
          "b": 1,
          "text": "松松拿雨伞"
        },
        {
          "kind": "oneof",
          "a": "fox",
          "b": [
            1,
            2
          ],
          "text": "阿橙拿雨伞或小灯"
        }
      ],
      "hints": [
        "雨伞下面的名字对吗？想一想那位朋友原来站在哪里。",
        "交换风筝下的松松和雨伞下的绒绒，另外两位不用动。"
      ],
      "success": "只换两张卡，整组要求就满足了！",
      "type": "logic-arrange",
      "mode": "match",
      "symbol": "⇄",
      "items": [
        "rabbit",
        "squirrel",
        "fox",
        "bear"
      ],
      "clues": [
        "绒绒拿风筝或雨伞",
        "松松拿雨伞",
        "阿橙拿雨伞或小灯"
      ],
      "instruction": "先点一张卡，再点另一张交换。只交换一次，可以重新开始。",
      "wrong": "还有线索没有满足。看看标出的冲突，调整后再检查。",
      "repair": true,
      "targets": [
        "kite",
        "umbrella",
        "lamp",
        "ball"
      ],
      "initial": [
        "squirrel",
        "rabbit",
        "fox",
        "bear"
      ]
    },
    {
      "title": "第五份小惊喜",
      "short": "五份礼物连锁排除",
      "question": "多了一本书，五位朋友怎样分礼物？",
      "story": "灰灰带来了一本故事书。每位朋友一份礼物，不能重复，也不能漏掉。",
      "rules": [
        {
          "kind": "at",
          "a": "koala",
          "b": 4,
          "text": "灰灰拿故事书"
        },
        {
          "kind": "oneof",
          "a": "rabbit",
          "b": [
            0,
            4
          ],
          "text": "绒绒拿风筝或故事书"
        },
        {
          "kind": "oneof",
          "a": "squirrel",
          "b": [
            0,
            1
          ],
          "text": "松松拿风筝或雨伞"
        },
        {
          "kind": "oneof",
          "a": "fox",
          "b": [
            1,
            2
          ],
          "text": "阿橙拿雨伞或小灯"
        }
      ],
      "hints": [
        "先给灰灰故事书。再看绒绒，能不能把这条线索继续传给松松？",
        "灰灰拿书，绒绒拿风筝，松松拿雨伞，阿橙拿小灯，皮球给大树。"
      ],
      "success": "你从确定的一份出发，一步步推出了五位朋友的礼物！",
      "type": "logic-arrange",
      "mode": "match",
      "symbol": "▤",
      "items": [
        "rabbit",
        "squirrel",
        "fox",
        "bear",
        "koala"
      ],
      "clues": [
        "灰灰拿故事书",
        "绒绒拿风筝或故事书",
        "松松拿风筝或雨伞",
        "阿橙拿雨伞或小灯"
      ],
      "instruction": "先点一张卡，再点空位放下。点已放好的卡可以交换，也能放回集合处。",
      "wrong": "还有线索没有满足。看看标出的冲突，调整后再检查。",
      "targets": [
        "kite",
        "umbrella",
        "lamp",
        "ball",
        "book"
      ]
    },
    {
      "title": "开门前的总检查",
      "short": "五条线索交叉推导",
      "question": "没有按顺序写的五条线索，也能连起来吗？",
      "story": "最后一批礼物要送出了。线索卡的顺序不等于安排的顺序，先找最确定的一条。",
      "rules": [
        {
          "kind": "oneof",
          "a": "koala",
          "b": [
            0,
            4
          ],
          "text": "灰灰拿风筝或故事书"
        },
        {
          "kind": "at",
          "a": "bear",
          "b": 0,
          "text": "大树拿风筝"
        },
        {
          "kind": "oneof",
          "a": "rabbit",
          "b": [
            1,
            4
          ],
          "text": "绒绒拿雨伞或故事书"
        },
        {
          "kind": "oneof",
          "a": "fox",
          "b": [
            1,
            2
          ],
          "text": "阿橙拿雨伞或小灯"
        },
        {
          "kind": "oneof",
          "a": "squirrel",
          "b": [
            2,
            3
          ],
          "text": "松松拿小灯或皮球"
        }
      ],
      "hints": [
        "大树的礼物已经确定。它会让灰灰只剩哪个选择？再顺着这个结果往下想。",
        "大树拿风筝，灰灰拿书，绒绒拿雨伞，阿橙拿小灯，松松拿皮球。"
      ],
      "success": "五条线索都通过检查！你学会了从最确定的地方开始推理。",
      "type": "logic-arrange",
      "mode": "match",
      "symbol": "◇",
      "items": [
        "rabbit",
        "squirrel",
        "fox",
        "bear",
        "koala"
      ],
      "clues": [
        "灰灰拿风筝或故事书",
        "大树拿风筝",
        "绒绒拿雨伞或故事书",
        "阿橙拿雨伞或小灯",
        "松松拿小灯或皮球"
      ],
      "instruction": "先点一张卡，再点空位放下。点已放好的卡可以交换，也能放回集合处。",
      "wrong": "还有线索没有满足。看看标出的冲突，调整后再检查。",
      "targets": [
        "kite",
        "umbrella",
        "lamp",
        "ball",
        "book"
      ]
    }
  ],
  "image": "./assets/gifts.svg",
  "tag": "进阶委托：风铃礼物铺 ☆",
  "audioRoot": "./assets/audio/gifts/",
  "audioExtension": "wav",
  "audioReady":true
};
