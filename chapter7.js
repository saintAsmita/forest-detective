'use strict';
window.GARDEN_CHAPTER={
  "id": "garden",
  "number": "007",
  "name": "蝴蝶花园",
  "subtitle": "看清两条，找到同类",
  "title": "花屋准备好，<br><span>欢迎蝴蝶来做客</span>",
  "description": "彩色蝴蝶带着不同花纹飞来了。<br>先看一条规则，再合起两条，给朋友找合适的花屋。",
  "image": "./assets/garden.svg",
  "imageAlt": "花园里有彩色屋顶的小屋和带圆点条纹的蝴蝶",
  "tag": "今日委托：给蝴蝶找花屋 ♧",
  "audioRoot": "./assets/audio/garden/",
  "audioExtension": "wav",
  "audioReady":true,
  "skills": [
    "分类依据",
    "双条件匹配",
    "检查差异"
  ],
  "endingTitle": "每位朋友，都找到花屋啦！",
  "endingText": "花园里飞来了快乐的蝴蝶。<br>你知道了什么时候只看一条规则，什么时候两条都要符合。<br>颜色、花纹和大小，都逃不过你的细心观察！",
  "endingQuestion": "试着把家里的积木按颜色分一次，再按形状分一次。同一块积木，会去哪个小组？",
  "lessons": [
    {
      "title": "先看颜色",
      "short": "忽略无关特征",
      "symbol": "●",
      "mode": "home",
      "question": "只看颜色，这只蝴蝶该去哪个花屋？",
      "story": "花园刚开门，先按翅膀颜色找花屋。翅膀上的花纹这次不用管。",
      "clues": [
        "翅膀和屋顶的颜色一样",
        "这一关不要求花纹相同"
      ],
      "input": {
        "color": "red",
        "pattern": "dot",
        "size": "normal"
      },
      "options": [
        {
          "color": "blue",
          "pattern": null
        },
        {
          "color": "red",
          "pattern": null
        },
        {
          "color": "yellow",
          "pattern": null
        }
      ],
      "hints": [
        "先看看蝴蝶翅膀的颜色，再比较三个屋顶。",
        "蝴蝶是红色的，找红屋顶。翅膀上的圆点不影响这一关。"
      ],
      "success": "找对啦！你只用了这次需要的颜色线索，没有被花纹带跑。",
      "type": "garden-choice",
      "instruction": "观察蝴蝶，再从下面三间花屋中选一间。",
      "wrong": "再对照这一关的规则，看看该比较颜色、花纹，还是两样都要看。"
    },
    {
      "title": "再看花纹",
      "short": "更换分类依据",
      "symbol": "≋",
      "mode": "home",
      "question": "这次只看花纹，该选哪间花屋？",
      "story": "松松换了新规则。屋顶不再指定颜色，要看门口的花纹牌。",
      "clues": [
        "翅膀和门牌的花纹一样",
        "这一关不要求颜色相同"
      ],
      "input": {
        "color": "yellow",
        "pattern": "stripe",
        "size": "normal"
      },
      "options": [
        {
          "color": null,
          "pattern": "dot"
        },
        {
          "color": null,
          "pattern": "plain"
        },
        {
          "color": null,
          "pattern": "stripe"
        }
      ],
      "hints": [
        "先不管翅膀是什么颜色。看看上面的图案是圆点，还是一条一条的？",
        "翅膀是一条一条的条纹，找条纹门牌。"
      ],
      "success": "条纹配条纹！规则换了，你也换了观察的方法。",
      "type": "garden-choice",
      "instruction": "观察蝴蝶，再从下面三间花屋中选一间。",
      "wrong": "再对照这一关的规则，看看该比较颜色、花纹，还是两样都要看。"
    },
    {
      "title": "两条都要对",
      "short": "合并颜色与花纹",
      "symbol": "⊕",
      "mode": "home",
      "question": "这回颜色和花纹都要一样，哪间才合适？",
      "story": "花园准备了更细致的房间。这一次，不能只看屋顶，也不能只看门牌。",
      "clues": [
        "先看屋顶颜色是否相同",
        "再看门牌花纹是否相同"
      ],
      "input": {
        "color": "red",
        "pattern": "stripe",
        "size": "normal"
      },
      "options": [
        {
          "color": "red",
          "pattern": "dot"
        },
        {
          "color": "blue",
          "pattern": "stripe"
        },
        {
          "color": "red",
          "pattern": "stripe"
        }
      ],
      "hints": [
        "先排除屋顶颜色不同的，再看留下的门牌。",
        "红色条纹蝴蝶，需要红屋顶和条纹门牌一起符合。"
      ],
      "success": "两条都对！只符合颜色或只符合花纹，还不够。",
      "type": "garden-choice",
      "instruction": "观察蝴蝶，再从下面三间花屋中选一间。",
      "wrong": "再对照这一关的规则，看看该比较颜色、花纹，还是两样都要看。"
    },
    {
      "title": "谁能来做客",
      "short": "反向匹配，忽略大小",
      "symbol": "↶",
      "mode": "visitor",
      "question": "选一只符合这间花屋规则的蝴蝶，好吗？",
      "story": "蓝屋顶、圆点门牌的花屋在邀请客人。只看颜色和花纹，大小不限制，有不止一种好选择。",
      "clues": [
        "客人的翅膀要和屋顶同色",
        "翅膀花纹要和门牌相同"
      ],
      "target": {
        "color": "blue",
        "pattern": "dot"
      },
      "options": [
        {
          "color": "blue",
          "pattern": "stripe",
          "size": "normal"
        },
        {
          "color": "blue",
          "pattern": "dot",
          "size": "small"
        },
        {
          "color": "blue",
          "pattern": "dot",
          "size": "large"
        }
      ],
      "hints": [
        "先看颜色，再看花纹。个头大或小，这次都没有关系。",
        "小的蓝色圆点蝴蝶和大的蓝色圆点蝴蝶都可以，任选一只。"
      ],
      "success": "这位客人符合两条规则！大小不同，也可以住进同一类花屋。",
      "type": "garden-choice",
      "instruction": "从下面三只里，选一只符合规则的客人。",
      "wrong": "再对照这一关的规则，看看该比较颜色、花纹，还是两样都要看。"
    },
    {
      "title": "找错门的朋友",
      "short": "检查条件，发现不匹配",
      "symbol": "⌕",
      "mode": "odd",
      "question": "哪只蝴蝶没有同时符合花屋的两条规则？",
      "story": "三位朋友来到红屋顶、圆点门牌前。有一位走错了门，仔细看它的翅膀。",
      "clues": [
        "颜色要和屋顶一样",
        "花纹也要和门牌一样"
      ],
      "target": {
        "color": "red",
        "pattern": "dot"
      },
      "options": [
        {
          "color": "red",
          "pattern": "dot",
          "size": "small"
        },
        {
          "color": "red",
          "pattern": "stripe",
          "size": "normal"
        },
        {
          "color": "red",
          "pattern": "dot",
          "size": "large"
        }
      ],
      "hints": [
        "三只蝴蝶颜色一样，单看颜色找不出。再比较花纹。",
        "中间那只虽然是红色，但翅膀是条纹，不符合圆点门牌。"
      ],
      "success": "你发现了花纹不同的朋友！检查两条条件，才不会漏掉小差别。",
      "type": "garden-choice",
      "instruction": "从下面三只里，点选走错门的那一只。",
      "wrong": "再对照这一关的规则，看看该比较颜色、花纹，还是两样都要看。"
    },
    {
      "title": "安排两位新朋友",
      "short": "逐个匹配，完成两步",
      "symbol": "☆",
      "mode": "pair",
      "question": "分别给两只蝴蝶选花屋，两条规则都要符合。",
      "story": "最后来了两位新朋友。一次只安排一位，蝴蝶和规则一直留在画面上。",
      "clues": [
        "先给第一只找同色、同花纹的花屋",
        "再用同样方法安排第二只"
      ],
      "input": {
        "color": "blue",
        "pattern": "stripe",
        "size": "normal"
      },
      "second": {
        "color": "red",
        "pattern": "dot",
        "size": "normal"
      },
      "options": [
        {
          "color": "blue",
          "pattern": "dot"
        },
        {
          "color": "blue",
          "pattern": "stripe"
        },
        {
          "color": "red",
          "pattern": "stripe"
        }
      ],
      "finalOptions": [
        {
          "color": "red",
          "pattern": "dot"
        },
        {
          "color": "blue",
          "pattern": "dot"
        },
        {
          "color": "red",
          "pattern": "stripe"
        }
      ],
      "hints": [
        "先安排第一只蓝色条纹蝴蝶。只看这一行的三个花屋。",
        "第一只选蓝屋顶、条纹门牌。第二只选红屋顶、圆点门牌。"
      ],
      "success": "两位朋友都住对啦！你把同一种检查方法，用在了两次任务里。",
      "type": "garden-choice",
      "instruction": "每只蝴蝶下方各选一间花屋，再检查。",
      "wrong": "再对照这一关的规则，看看该比较颜色、花纹，还是两样都要看。"
    }
  ]
};
