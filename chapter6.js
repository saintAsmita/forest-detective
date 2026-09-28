'use strict';
window.LANTERN_CHAPTER={
  "id": "lantern",
  "number": "006",
  "name": "彩虹灯工坊",
  "subtitle": "一次一步，看清变化",
  "title": "点亮小灯，<br><span>发现变化的秘密</span>",
  "description": "工坊里的机器一次只改一个地方。<br>看看颜色和形状，一步一步做出漂亮的小灯。",
  "image": "./assets/lantern.svg",
  "imageAlt": "温暖的灯具工坊里挂着圆形、星星和爱心灯",
  "tag": "轻进阶任务：点亮彩虹小灯 ♧",
  "audioRoot": "./assets/audio/lantern/",
  "audioExtension": "wav",
  "audioReady":true,
  "skills": [
    "观察变化",
    "两步推理",
    "简单反推"
  ],
  "endingTitle": "小灯亮了，思路也亮了！",
  "endingText": "一盏盏彩虹灯挂满了工坊。<br>你发现了什么会变、什么保持不变，也学会了分两步检查。<br>慢慢想清楚，就是很棒的进步！",
  "endingQuestion": "找一件家里的物品，想象只改变它的颜色。它还有哪些地方会保持原样？",
  "lessons": [
    {
      "title": "变了什么",
      "short": "先看变化，再看保留",
      "symbol": "◇",
      "mode": "forward",
      "question": "黄色方灯经过星星机，会变成哪一盏？",
      "story": "工坊有一台星星机。先看看两个示范，找找什么变了，什么没有变。",
      "clues": [
        "星星机把形状变成星星",
        "灯原来的颜色保持不变"
      ],
      "input": {
        "color": "yellow",
        "shape": "square"
      },
      "machines": [
        "star"
      ],
      "examples": [
        [
          {
            "color": "red",
            "shape": "circle"
          },
          {
            "color": "red",
            "shape": "star"
          }
        ],
        [
          {
            "color": "blue",
            "shape": "square"
          },
          {
            "color": "blue",
            "shape": "star"
          }
        ]
      ],
      "options": [
        {
          "color": "blue",
          "shape": "star"
        },
        {
          "color": "yellow",
          "shape": "star"
        },
        {
          "color": "yellow",
          "shape": "square"
        }
      ],
      "hints": [
        "示范里的灯都变成了星星。再看看，颜色有没有跟着变？",
        "原来是黄色，经过星星机还是黄色。找黄色的星星灯。"
      ],
      "success": "形状变成了星星，黄色留下来了！你同时看到了变化和不变。",
      "type": "lantern-choice",
      "instruction": "看上方的机器和图画，再点选下面的一盏灯。",
      "wrong": "还差一点点。对照机器，看看这一步改变的是颜色还是形状。"
    },
    {
      "title": "颜色换新衣",
      "short": "换颜色，保留形状",
      "symbol": "●",
      "mode": "forward",
      "question": "爱心灯经过蓝色机，哪一盏才是它？",
      "story": "蓝色机开工了！这次只换颜色，看看爱心还能不能认出来。",
      "clues": [
        "蓝色机把灯涂成蓝色",
        "原来的形状保持不变"
      ],
      "input": {
        "color": "red",
        "shape": "heart"
      },
      "machines": [
        "blue"
      ],
      "examples": [
        [
          {
            "color": "yellow",
            "shape": "circle"
          },
          {
            "color": "blue",
            "shape": "circle"
          }
        ]
      ],
      "options": [
        {
          "color": "blue",
          "shape": "circle"
        },
        {
          "color": "red",
          "shape": "heart"
        },
        {
          "color": "blue",
          "shape": "heart"
        }
      ],
      "hints": [
        "先找蓝色的灯，再比较它们的形状。",
        "原来的灯是爱心形。颜色变蓝，爱心的样子不变。"
      ],
      "success": "蓝色的爱心灯！这次换了颜色，形状没有变。",
      "type": "lantern-choice",
      "instruction": "看上方的机器和图画，再点选下面的一盏灯。",
      "wrong": "还差一点点。对照机器，看看这一步改变的是颜色还是形状。"
    },
    {
      "title": "经过两台机器",
      "short": "两步变化，分步检查",
      "symbol": "→",
      "mode": "forward",
      "question": "先变星星，再涂蓝色，最后是什么灯？",
      "story": "把灯放上小传送带，一次只看一台机器。先想形状，再想颜色，不用急着一起猜。",
      "clues": [
        "先经过星星机，只改变形状",
        "再经过蓝色机，只改变颜色"
      ],
      "input": {
        "color": "yellow",
        "shape": "circle"
      },
      "machines": [
        "star",
        "blue"
      ],
      "options": [
        {
          "color": "yellow",
          "shape": "star"
        },
        {
          "color": "blue",
          "shape": "star"
        },
        {
          "color": "blue",
          "shape": "circle"
        }
      ],
      "hints": [
        "第一步，黄色圆灯会变成黄色星星灯。接下来还有一台机器。",
        "第二台机器涂蓝色，但不会把星星变回圆形。"
      ],
      "success": "两步连起来，得到蓝色星星灯！你没有漏掉第二步。",
      "type": "lantern-choice",
      "instruction": "看上方的机器和图画，再点选下面的一盏灯。",
      "wrong": "还差一点点。对照机器，看看这一步改变的是颜色还是形状。"
    },
    {
      "title": "从结果往回想",
      "short": "保留的特征，帮助反推",
      "symbol": "↶",
      "mode": "inverse",
      "question": "选一盏灯，涂红后能变成目标里的红星星吗？",
      "story": "阿橙想要一盏红色星星灯。机器只涂红色，所以先选什么形状很重要。有不止一种选择哦！",
      "clues": [
        "机器只把颜色变红",
        "只要能变成目标，选哪一盏都可以"
      ],
      "machines": [
        "red"
      ],
      "target": {
        "color": "red",
        "shape": "star"
      },
      "options": [
        {
          "color": "yellow",
          "shape": "square"
        },
        {
          "color": "blue",
          "shape": "star"
        },
        {
          "color": "yellow",
          "shape": "star"
        }
      ],
      "hints": [
        "红色机器不会改变形状。先找和目标形状一样的灯。",
        "蓝色星星和黄色星星都能变成红色星星。任选一盏就可以。"
      ],
      "success": "这盏星星灯涂红后就符合目标！原来的颜色不同，也可能得到同一个结果。",
      "type": "lantern-choice",
      "instruction": "看上方的机器和图画，再点选下面的一盏灯。",
      "wrong": "还差一点点。对照机器，看看这一步改变的是颜色还是形状。"
    },
    {
      "title": "中间哪里错了",
      "short": "检查一步，修好过程",
      "symbol": "⌕",
      "mode": "repair",
      "question": "中间那盏灯放错了，换成哪一盏？",
      "story": "示范员不小心把中间的灯放错了。起点和终点都不用动，只修好第一步的结果。",
      "clues": [
        "第一台是星星机，颜色不变",
        "第二台是蓝色机，形状不变"
      ],
      "input": {
        "color": "red",
        "shape": "circle"
      },
      "machines": [
        "star",
        "blue"
      ],
      "wrongMiddle": {
        "color": "red",
        "shape": "heart"
      },
      "target": {
        "color": "blue",
        "shape": "star"
      },
      "options": [
        {
          "color": "blue",
          "shape": "star"
        },
        {
          "color": "red",
          "shape": "star"
        },
        {
          "color": "red",
          "shape": "circle"
        }
      ],
      "hints": [
        "先只看第一台机器。红色圆灯经过星星机，颜色会变吗？",
        "中间应该是红色星星，之后再被涂成蓝色星星。"
      ],
      "success": "中间换成红色星星，两步就接上了！你找到了具体出错的一步。",
      "type": "lantern-choice",
      "instruction": "看上方的机器和图画，再点选下面的一盏灯。",
      "wrong": "还差一点点。对照机器，看看这一步改变的是颜色还是形状。"
    },
    {
      "title": "自己完成一盏灯",
      "short": "分别选好中间与最后的结果",
      "symbol": "☆",
      "mode": "pair",
      "question": "先涂红，再变星星，中间和最后分别是哪盏灯？",
      "story": "最后一盏交给你啦！先为第一步选一盏，再为第二步选一盏。两步都可以重新选择。",
      "clues": [
        "第一步只把蓝色换成红色",
        "第二步只把圆形换成星星"
      ],
      "input": {
        "color": "blue",
        "shape": "circle"
      },
      "machines": [
        "red",
        "star"
      ],
      "options": [
        {
          "color": "red",
          "shape": "circle"
        },
        {
          "color": "blue",
          "shape": "star"
        },
        {
          "color": "red",
          "shape": "star"
        }
      ],
      "finalOptions": [
        {
          "color": "blue",
          "shape": "star"
        },
        {
          "color": "red",
          "shape": "star"
        },
        {
          "color": "red",
          "shape": "circle"
        }
      ],
      "hints": [
        "先看第一步：只涂红色，圆形还在。选好中间结果，再继续。",
        "中间是红色圆灯。它再经过星星机，就变成红色星星灯。"
      ],
      "success": "中间和最后都选对啦！一步一步检查，你独立完成了两步变化。",
      "type": "lantern-choice",
      "instruction": "分别在「第一步后」和「第二步后」各选一盏，再检查。",
      "wrong": "还差一点点。对照机器，看看这一步改变的是颜色还是形状。"
    }
  ]
};
