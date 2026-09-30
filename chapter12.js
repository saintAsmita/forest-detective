'use strict';
window.WATER_CHAPTER={
  "id": "water",
  "number": "012",
  "name": "溪谷引水园",
  "subtitle": "旋转水渠，让水连通",
  "title": "花圃口渴了，<br><span>水要怎么流？</span>",
  "description": "转动弯管和三通，观察水从哪里来。<br>连起每个接口，让花朵都喝到水。",
  "skills": [
    "空间旋转",
    "路径连通",
    "局部修复"
  ],
  "endingTitle": "溪谷花圃，喝到水啦！",
  "endingText": "一朵朵花抬起了头，水在小渠里轻轻流动。<br>你检查了入口、分路和每个接口，让整张水网连通了。",
  "endingQuestion": "用积木搭一条弯弯的小路，试着找出断开的一块，再只调整那一块。",
  "lessons": [
    {
      "type": "water",
      "title": "小水渠转个弯",
      "short": "旋转与连通",
      "symbol": "◇",
      "question": "转动四块水渠，让水流到花朵吧！",
      "story": "花圃口渴了。水从蓝色水滴进入，顺着接好的水渠到花朵。",
      "clues": [
        "水滴是入口，花朵是出口",
        "相邻接口要面对面接好",
        "四块水渠都通水，不能漏水"
      ],
      "hints": [
        "先让入口那块横着接水，再沿着蓝色水路往前看。",
        "左上横着，右边拐向下；下排中间拐向右，最右横着接花朵。"
      ],
      "success": "四块水渠接起来，第一朵花喝到水了！",
      "wrong": "还有一处没有符合要求。看看标出的地方，调整后再检查。",
      "positions": [
        0,
        1,
        4,
        5
      ],
      "shapes": [
        "straight",
        "elbow",
        "elbow",
        "straight"
      ],
      "initial": [
        0,
        0,
        1,
        0
      ],
      "ports": [
        {
          "pos": 0,
          "dir": 3,
          "kind": "source"
        },
        {
          "pos": 5,
          "dir": 1,
          "kind": "flower"
        }
      ],
      "cols": 3,
      "rows": 2,
      "instruction": "点一块水渠，顺时针转动。蓝色表示已经接到水源，全部接好后检查。"
    },
    {
      "type": "water",
      "title": "分给两朵花",
      "short": "旋转与连通",
      "symbol": "◇",
      "question": "同一股水，怎样同时送到两朵花？",
      "story": "这次有一块三通水渠。它能把水分到两个方向，但每个接口都要接好。",
      "clues": [
        "上方水滴进水",
        "左右两朵花都要喝到水",
        "三通的三个口都要接好",
        "四块水渠全部通水"
      ],
      "hints": [
        "从上面的入口往下看，三通该朝哪三个方向？",
        "上方竖着。中间三通朝上、左、右；左右两块横着，把水送到两朵花。"
      ],
      "success": "你让水分成两路，每朵花都喝到了！",
      "wrong": "还有一处没有符合要求。看看标出的地方，调整后再检查。",
      "positions": [
        1,
        3,
        4,
        5
      ],
      "shapes": [
        "straight",
        "straight",
        "tee",
        "straight"
      ],
      "initial": [
        1,
        0,
        1,
        0
      ],
      "ports": [
        {
          "pos": 1,
          "dir": 0,
          "kind": "source"
        },
        {
          "pos": 3,
          "dir": 3,
          "kind": "flower"
        },
        {
          "pos": 5,
          "dir": 1,
          "kind": "flower"
        }
      ],
      "cols": 3,
      "rows": 2,
      "instruction": "点一块水渠，顺时针转动。蓝色表示已经接到水源，全部接好后检查。"
    },
    {
      "type": "water",
      "title": "绕一圈也能通",
      "short": "旋转与连通",
      "symbol": "◇",
      "question": "这四块水渠，可以连成一个圈吗？",
      "story": "水渠可以绕圈，只要每块都连着入口、没有漏口，花朵照样能喝到水。",
      "clues": [
        "水从左上进来，右下送到花朵",
        "每个接口都要接住",
        "四块水渠都连着水源"
      ],
      "hints": [
        "先接好左上入口和右下花朵，再看看剩下两块转角能不能合成一圈。",
        "左上三通朝左、右、下；右上朝左、下；左下朝上、右；右下三通朝上、左、右。"
      ],
      "success": "绕圈也可以！你检查了所有接口，没有漏掉任何一块。",
      "wrong": "还有一处没有符合要求。看看标出的地方，调整后再检查。",
      "positions": [
        0,
        1,
        3,
        4
      ],
      "shapes": [
        "tee",
        "elbow",
        "elbow",
        "tee"
      ],
      "initial": [
        0,
        0,
        2,
        1
      ],
      "ports": [
        {
          "pos": 0,
          "dir": 3,
          "kind": "source"
        },
        {
          "pos": 4,
          "dir": 1,
          "kind": "flower"
        }
      ],
      "cols": 3,
      "rows": 2,
      "instruction": "点一块水渠，顺时针转动。蓝色表示已经接到水源，全部接好后检查。"
    },
    {
      "type": "water",
      "title": "只修一块水渠",
      "short": "旋转与连通",
      "symbol": "◇",
      "question": "只调整一块水渠，修好这次漏水吧！",
      "story": "大部分水渠已经接好。只选一块调整，转几次都可以；选错了可以重新开始。",
      "clues": [
        "只调整一块水渠",
        "每块都通水，接口不能漏",
        "水要到达右下的花朵"
      ],
      "hints": [
        "沿入口的蓝色水路看，水在哪里接不上了？",
        "需要调整下排中间的弯管，让它朝上、朝右。其他三块不用动。"
      ],
      "success": "只修一块，水路又通了！",
      "wrong": "还有一处没有符合要求。看看标出的地方，调整后再检查。",
      "positions": [
        0,
        1,
        4,
        5
      ],
      "shapes": [
        "straight",
        "elbow",
        "elbow",
        "straight"
      ],
      "initial": [
        1,
        2,
        1,
        1
      ],
      "ports": [
        {
          "pos": 0,
          "dir": 3,
          "kind": "source"
        },
        {
          "pos": 5,
          "dir": 1,
          "kind": "flower"
        }
      ],
      "repair": true,
      "cols": 3,
      "rows": 2,
      "instruction": "点一块水渠，顺时针转动。只调整一块，可以转多次；也能重新开始。"
    },
    {
      "type": "water",
      "title": "多一条回流路",
      "short": "旋转与连通",
      "symbol": "◇",
      "question": "五块水渠连起来，让每一块都通水。",
      "story": "花圃扩大了。水可以从不同方向绕回同一个地方，但不能留下没接好的接口。",
      "clues": [
        "左边进水，下方花朵出水",
        "五块水渠全部连通",
        "相邻接口必须相对",
        "不能把接口朝向空地"
      ],
      "hints": [
        "先接左边入口和下面花朵。上排中间的三通还需要向右接出一条路。",
        "上排从左到右：横管，朝左、右、下的三通，朝左、下的弯管。下排中间三通朝上、右、下，右边弯管朝上、左。"
      ],
      "success": "两条水路合在一起，五块水渠全都通了！",
      "wrong": "还有一处没有符合要求。看看标出的地方，调整后再检查。",
      "positions": [
        0,
        1,
        2,
        4,
        5
      ],
      "shapes": [
        "straight",
        "tee",
        "elbow",
        "tee",
        "elbow"
      ],
      "initial": [
        0,
        0,
        0,
        0,
        0
      ],
      "ports": [
        {
          "pos": 0,
          "dir": 3,
          "kind": "source"
        },
        {
          "pos": 4,
          "dir": 2,
          "kind": "flower"
        }
      ],
      "cols": 3,
      "rows": 2,
      "instruction": "点一块水渠，顺时针转动。蓝色表示已经接到水源，全部接好后检查。"
    },
    {
      "type": "water",
      "title": "花圃一起喝水",
      "short": "旋转与连通",
      "symbol": "◇",
      "question": "五块水渠、两朵花，最后再检查一次吧！",
      "story": "右边和下方都有花。把分流和回流一起想，所有水渠都要加入这张水网。",
      "clues": [
        "左边水滴进水",
        "右边花朵要通水",
        "下方花朵也要通水",
        "五块水渠全都连着入口",
        "所有接口都接住，不能漏"
      ],
      "hints": [
        "先沿上排把水送到右边。再用两个向下的接口，把水接到下面的花朵。",
        "上排左边横着，另外两块三通都朝左、右、下。下排中间三通朝上、右、下，右边弯管朝上、左。"
      ],
      "success": "整片花圃都有水啦！你学会了从入口出发，检查分路、回路和每个接口。",
      "wrong": "还有一处没有符合要求。看看标出的地方，调整后再检查。",
      "positions": [
        0,
        1,
        2,
        4,
        5
      ],
      "shapes": [
        "straight",
        "tee",
        "tee",
        "tee",
        "elbow"
      ],
      "initial": [
        0,
        0,
        0,
        0,
        0
      ],
      "ports": [
        {
          "pos": 0,
          "dir": 3,
          "kind": "source"
        },
        {
          "pos": 2,
          "dir": 1,
          "kind": "flower"
        },
        {
          "pos": 4,
          "dir": 2,
          "kind": "flower"
        }
      ],
      "cols": 3,
      "rows": 2,
      "instruction": "点一块水渠，顺时针转动。蓝色表示已经接到水源，全部接好后检查。"
    }
  ],
  "image": "./assets/water.svg",
  "imageAlt": "溪谷引水园的森林手绘场景",
  "tag": "进阶委托：溪谷引水园 ☆",
  "audioRoot": "./assets/audio/water/",
  "audioExtension": "wav",
  "audioReady":true
};
