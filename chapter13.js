'use strict';
window.BALANCE_CHAPTER={
  "id": "balance",
  "number": "013",
  "name": "松果称量屋",
  "subtitle": "看天平，推重量",
  "title": "图案袋藏着，<br><span>几颗石子的重量？</span>",
  "description": "每架天平都是一条线索。<br>把已知的重量换进去，找出每只袋子的秘密。",
  "skills": [
    "等量替换",
    "组合推理",
    "验证多解"
  ],
  "endingTitle": "称量记录，全部核对好！",
  "endingText": "小袋子整整齐齐地回到了柜台。<br>你把相同重量换来换去，用几架天平的线索推出了未知的重量。",
  "endingQuestion": "拿一样的小积木当单位，试试两份一样多的积木合起来是多少。",
  "lessons": [
    {
      "type": "balance",
      "title": "先看一样重",
      "short": "等量替换",
      "symbol": "◇",
      "question": "每个图案袋，和几颗小石子一样重？",
      "story": "天平上的图都是已经称好的线索。每颗小石子一样重，同图案的袋子也一样重。",
      "clues": [
        "叶子袋和一颗石子一样重",
        "贝壳袋等于叶子袋加一颗石子",
        "星星袋和贝壳袋一样重",
        "月亮袋等于星星袋加叶子袋"
      ],
      "hints": [
        "先确定叶子袋。再把它换成一颗石子，接着看贝壳和星星。",
        "叶子一颗，贝壳两颗，星星两颗，月亮三颗。不同图案可以一样重。"
      ],
      "success": "你用已经知道的重量，推到了下一只袋子！",
      "wrong": "还有一处没有符合要求。看看标出的地方，调整后再检查。",
      "items": [
        "leaf",
        "shell",
        "star",
        "moon"
      ],
      "equations": [
        {
          "left": [
            "leaf"
          ],
          "right": [
            "unit"
          ]
        },
        {
          "left": [
            "shell"
          ],
          "right": [
            "leaf",
            "unit"
          ]
        },
        {
          "left": [
            "star"
          ],
          "right": [
            "shell"
          ]
        },
        {
          "left": [
            "moon"
          ],
          "right": [
            "star",
            "leaf"
          ]
        }
      ],
      "max": 4,
      "initial": [
        0,
        0,
        0,
        0
      ],
      "instruction": "点加减填上每袋的石子数，一到四颗都可以，不同袋子可以一样重。"
    },
    {
      "type": "balance",
      "title": "一起称也有办法",
      "short": "等量替换",
      "symbol": "◇",
      "question": "两袋一起称过，怎样知道各自多重？",
      "story": "不需要记住图案的重量，四架天平一直在这里。可以先从最确定的一架开始。",
      "clues": [
        "叶子袋加贝壳袋等于三颗石子",
        "叶子袋等于一颗石子",
        "星星袋等于贝壳袋加叶子袋",
        "月亮袋等于星星袋加一颗石子"
      ],
      "hints": [
        "叶子是一颗。一起称出的三颗里，去掉叶子那一颗，还剩多少给贝壳？",
        "叶子一颗，贝壳两颗，星星三颗，月亮四颗。"
      ],
      "success": "你把一起称的重量拆开，又用结果继续推了下去！",
      "wrong": "还有一处没有符合要求。看看标出的地方，调整后再检查。",
      "items": [
        "leaf",
        "shell",
        "star",
        "moon"
      ],
      "equations": [
        {
          "left": [
            "leaf",
            "shell"
          ],
          "right": [
            "unit",
            "unit",
            "unit"
          ]
        },
        {
          "left": [
            "leaf"
          ],
          "right": [
            "unit"
          ]
        },
        {
          "left": [
            "star"
          ],
          "right": [
            "shell",
            "leaf"
          ]
        },
        {
          "left": [
            "moon"
          ],
          "right": [
            "star",
            "unit"
          ]
        }
      ],
      "max": 4,
      "initial": [
        0,
        0,
        0,
        0
      ],
      "instruction": "点加减填上每袋的石子数，一到四颗都可以，不同袋子可以一样重。"
    },
    {
      "type": "balance",
      "title": "答案可以不止一个",
      "short": "等量替换",
      "symbol": "◇",
      "question": "试着给四只袋子填重量，让三架天平都平衡。",
      "story": "每袋可以是一到四颗石子的重量。只要每架天平都平衡，就是合适的答案。",
      "clues": [
        "叶子袋和贝壳袋一样重",
        "星星袋等于两颗石子",
        "月亮袋等于叶子袋加星星袋"
      ],
      "hints": [
        "先填星星两颗，再让叶子和贝壳相同。月亮要装得下它们要求的重量。",
        "可以是叶子一颗、贝壳一颗、星星两颗、月亮三颗；也可以是两颗、两颗、两颗、四颗。"
      ],
      "success": "这个答案符合所有天平！有两种不同的重量安排都可以。",
      "wrong": "还有一处没有符合要求。看看标出的地方，调整后再检查。",
      "items": [
        "leaf",
        "shell",
        "star",
        "moon"
      ],
      "equations": [
        {
          "left": [
            "leaf"
          ],
          "right": [
            "shell"
          ]
        },
        {
          "left": [
            "star"
          ],
          "right": [
            "unit",
            "unit"
          ]
        },
        {
          "left": [
            "moon"
          ],
          "right": [
            "leaf",
            "star"
          ]
        }
      ],
      "max": 4,
      "initial": [
        0,
        0,
        0,
        0
      ],
      "instruction": "点加减填上每袋的石子数，一到四颗都可以，不同袋子可以一样重。"
    },
    {
      "type": "balance",
      "title": "只改一张重量卡",
      "short": "等量替换",
      "symbol": "◇",
      "question": "只调整一个袋子的重量，修好记录吧！",
      "story": "记录员把一张重量卡写错了。先对照天平找冲突，只改一张，其他保留。",
      "clues": [
        "叶子袋等于一颗石子",
        "贝壳袋等于叶子袋加一颗石子",
        "星星袋和贝壳袋一样重",
        "月亮袋等于星星袋加叶子袋"
      ],
      "hints": [
        "前三个袋子的重量能满足天平吗？再看看月亮是不是多了一颗。",
        "只把月亮从四颗改为三颗。叶子一颗、贝壳两颗、星星两颗都不用动。"
      ],
      "success": "只改一张重量卡，所有天平又一致了！",
      "wrong": "还有一处没有符合要求。看看标出的地方，调整后再检查。",
      "items": [
        "leaf",
        "shell",
        "star",
        "moon"
      ],
      "equations": [
        {
          "left": [
            "leaf"
          ],
          "right": [
            "unit"
          ]
        },
        {
          "left": [
            "shell"
          ],
          "right": [
            "leaf",
            "unit"
          ]
        },
        {
          "left": [
            "star"
          ],
          "right": [
            "shell"
          ]
        },
        {
          "left": [
            "moon"
          ],
          "right": [
            "star",
            "leaf"
          ]
        }
      ],
      "max": 4,
      "initial": [
        1,
        2,
        2,
        4
      ],
      "repair": true,
      "instruction": "只调整一个袋子，点加减改变石子数。选错了可重新开始。"
    },
    {
      "type": "balance",
      "title": "第五只图案袋",
      "short": "等量替换",
      "symbol": "◇",
      "question": "五只袋子，顺着天平线索一起推一推。",
      "story": "宝石袋加入了。相同重量可以换成不同图案，再一步步传到新的袋子。",
      "clues": [
        "叶子袋等于一颗石子",
        "贝壳袋等于叶子袋加一颗石子",
        "星星袋和贝壳袋一样重",
        "月亮袋等于星星袋加叶子袋",
        "宝石袋等于月亮袋加叶子袋"
      ],
      "hints": [
        "先确定一颗的叶子，再找到两只一样重的袋子。月亮和宝石都是接着加一个叶子袋。",
        "叶子一颗，贝壳两颗，星星两颗，月亮三颗，宝石四颗。"
      ],
      "success": "五只袋子的重量都找到了！你把相等关系一条条连起来了。",
      "wrong": "还有一处没有符合要求。看看标出的地方，调整后再检查。",
      "items": [
        "leaf",
        "shell",
        "star",
        "moon",
        "gem"
      ],
      "equations": [
        {
          "left": [
            "leaf"
          ],
          "right": [
            "unit"
          ]
        },
        {
          "left": [
            "shell"
          ],
          "right": [
            "leaf",
            "unit"
          ]
        },
        {
          "left": [
            "star"
          ],
          "right": [
            "shell"
          ]
        },
        {
          "left": [
            "moon"
          ],
          "right": [
            "star",
            "leaf"
          ]
        },
        {
          "left": [
            "gem"
          ],
          "right": [
            "moon",
            "leaf"
          ]
        }
      ],
      "max": 4,
      "initial": [
        0,
        0,
        0,
        0,
        0
      ],
      "instruction": "点加减填上每袋的石子数，一到四颗都可以，不同袋子可以一样重。"
    },
    {
      "type": "balance",
      "title": "没有直接告诉你",
      "short": "等量替换",
      "symbol": "◇",
      "question": "没有单独称的袋子，也能推出来吗？",
      "story": "前两架天平要一起看。每袋是一到四颗石子的重量，可以尝试，再对照整组线索。",
      "clues": [
        "叶子袋加贝壳袋等于四颗石子",
        "贝壳袋比叶子袋多两颗石子",
        "星星袋加叶子袋等于贝壳袋",
        "月亮袋等于星星袋加叶子袋",
        "宝石袋等于月亮袋加叶子袋"
      ],
      "hints": [
        "先试叶子一颗，贝壳就要三颗。它们加起来是不是刚好四颗？再往下一架看。",
        "叶子一颗，贝壳三颗，星星两颗，月亮三颗，宝石四颗。每一架都能平衡。"
      ],
      "success": "你把两条线索合起来，找到了起点，再推出五只袋子的重量！",
      "wrong": "还有一处没有符合要求。看看标出的地方，调整后再检查。",
      "items": [
        "leaf",
        "shell",
        "star",
        "moon",
        "gem"
      ],
      "equations": [
        {
          "left": [
            "leaf",
            "shell"
          ],
          "right": [
            "unit",
            "unit",
            "unit",
            "unit"
          ]
        },
        {
          "left": [
            "shell"
          ],
          "right": [
            "leaf",
            "unit",
            "unit"
          ]
        },
        {
          "left": [
            "star",
            "leaf"
          ],
          "right": [
            "shell"
          ]
        },
        {
          "left": [
            "moon"
          ],
          "right": [
            "star",
            "leaf"
          ]
        },
        {
          "left": [
            "gem"
          ],
          "right": [
            "moon",
            "leaf"
          ]
        }
      ],
      "max": 4,
      "initial": [
        0,
        0,
        0,
        0,
        0
      ],
      "instruction": "点加减填上每袋的石子数，一到四颗都可以，不同袋子可以一样重。"
    }
  ],
  "image": "./assets/balance.svg",
  "imageAlt": "松果称量屋的森林手绘场景",
  "tag": "进阶委托：松果称量屋 ☆",
  "audioRoot": "./assets/audio/balance/",
  "audioExtension": "wav",
  "audioReady":true
};
