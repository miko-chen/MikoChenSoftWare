﻿$axure.loadCurrentPage({
  "url":"字典修改页面.html",
  "generationDate":new Date(1558324040096.48),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable",
"yys_name",
"car_chePai_card",
"car_chePai_color",
"car_leixing",
"car_ICcard",
"yy_leixing",
"car_InterNet_leixing",
"car_jingYingLuXian",
"car_zhuangTai",
"quYu",
"phone",
"mail",
"name",
"NewVariable"],
  "page":{
    "packageId":"bc10f517d4a14bbeb49792e39766e6c0",
    "type":"Axure:Page",
    "name":"字典修改页面",
    "notes":{
},
    "style":{
      "baseStyle":"627587b6038d43cca051c114ac41ad32",
      "pageAlignment":"near",
      "fill":{
        "fillType":"solid",
        "color":0xFFFFFFFF},
      "image":null,
      "imageHorizontalAlignment":"near",
      "imageVerticalAlignment":"near",
      "imageRepeat":"auto",
      "favicon":null,
      "sketchFactor":"0",
      "colorStyle":"appliedColor",
      "fontName":"应用字体",
      "borderWidth":"0"},
    "adaptiveStyles":{
},
    "interactionMap":{
},
    "diagram":{
      "objects":[{
          "id":"f9448860827d4fb0876ca39f47cf0848",
          "label":"编辑_弹框",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "location":{
              "x":17,
              "y":0},
            "size":{
              "width":350,
              "height":425}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"57c1f5418faa4dd98fe1c1ed04c20d5a",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":17,
                  "y":0},
                "size":{
                  "width":350,
                  "height":425}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/车辆信息新增页面/编辑_弹框_u0.png"}},
{
          "id":"1f0d9d5774664dfd96dfad82bdf76ec6",
          "label":"新增_",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":49,
              "y":38},
            "size":{
              "width":27,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"a91e2a659f324c658140383802b22420",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":49,
                  "y":38},
                "size":{
                  "width":27,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"d7980cd414aa4605ad4792f3da729968",
          "label":"新增_",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":49,
              "y":90},
            "size":{
              "width":58,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"7c6d486212904576a08e8233967169a8",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":49,
                  "y":90},
                "size":{
                  "width":58,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"48c6032b348a451c935ecbf0d9acbd58",
          "label":"新增_车牌号",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "location":{
              "x":135,
              "y":33},
            "size":{
              "width":200,
              "height":25}},
          "adaptiveStyles":{
}},
{
          "id":"7531c84b560448c1870e61f60014deca",
          "label":"新增_IC卡号",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "location":{
              "x":135,
              "y":85},
            "size":{
              "width":200,
              "height":25}},
          "adaptiveStyles":{
}},
{
          "id":"12f7cf9d5c75435d8e21089439c6b4b9",
          "label":"新增_保存",
          "type":"button",
          "styleType":"button",
          "visible":true,
          "style":{
            "location":{
              "x":87,
              "y":350},
            "size":{
              "width":100,
              "height":25}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 字典管理",
                      "target":{
                        "targetType":"page",
                        "url":"字典管理.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"649d516a148c44fa9eccfb024abf8887",
          "label":"新增_关闭",
          "type":"button",
          "styleType":"button",
          "visible":true,
          "style":{
            "location":{
              "x":217,
              "y":350},
            "size":{
              "width":100,
              "height":25}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"fadeWidget",
                      "description":"显示 确定,<br>取消,<br>确定要取消吗",
                      "objectsToFades":[{
                          "objectPath":["5862868dfae14470914237f198500583"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["77899c961cc047adba97d500b67b9d7f"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["4cacf00fd9a54a74b5e2ee6afa1afc94"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}}]}]}]}},
          "tabbable":true},
{
          "id":"80060d1bdeb340b48e49604793481617",
          "label":"新增_",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":49,
              "y":140},
            "size":{
              "width":53,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"fb37df8d93cd48739af2d0881a767185",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":49,
                  "y":140},
                "size":{
                  "width":53,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"c8ea0ebe8a314ffb92a63b690cd3a9f4",
          "label":"",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "location":{
              "x":135,
              "y":135},
            "size":{
              "width":200,
              "height":25}},
          "adaptiveStyles":{
}},
{
          "id":"4a4019af628e48f7a0ef6e3106c6df2b",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":49,
              "y":190},
            "size":{
              "width":60,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"3a7cf3ece11e445dbe7c94d5d306f41a",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":49,
                  "y":190},
                "size":{
                  "width":60,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"f2cb622be177418fadc8b1daf98b5559",
          "label":"",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "location":{
              "x":135,
              "y":237},
            "size":{
              "width":200,
              "height":25}},
          "adaptiveStyles":{
}},
{
          "id":"873f4e3705184bb3bc38e441618ebb39",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":49,
              "y":292},
            "size":{
              "width":60,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"c9b9547723954e1889e0ef4e0c74302f",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":49,
                  "y":292},
                "size":{
                  "width":60,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"a2beb7d267f34afd9c329d2414c41aba",
          "label":"",
          "type":"comboBox",
          "styleType":"comboBox",
          "visible":true,
          "style":{
            "location":{
              "x":135,
              "y":288},
            "size":{
              "width":200,
              "height":22}},
          "adaptiveStyles":{
}},
{
          "id":"74ebc8fa1b8e4e04b08866cd3ada2c87",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":49,
              "y":242},
            "size":{
              "width":27,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"4d3455db201043e8917d020028b2cb12",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":49,
                  "y":242},
                "size":{
                  "width":27,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"71b067d8b705462fad991253b2754380",
          "label":"",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "location":{
              "x":135,
              "y":185},
            "size":{
              "width":200,
              "height":25}},
          "adaptiveStyles":{
}},
{
          "id":"ae1475c85f5e4da0a3e1e3bb113b9ca3",
          "label":"新增_",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFFFF0000,
              "opacity":1},
            "location":{
              "x":335,
              "y":38},
            "size":{
              "width":30,
              "height":10}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"015def11688b4b5fa0ed1874074d431f",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0xFFFF0000,
                  "opacity":1},
                "location":{
                  "x":335,
                  "y":38},
                "size":{
                  "width":30,
                  "height":10}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"c82deab5f99c4117ae31c10448317132",
          "label":"新增_",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFFFF0000,
              "opacity":1},
            "location":{
              "x":335,
              "y":90},
            "size":{
              "width":30,
              "height":14}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"8850509d18d74cafa2f0c5701c5f3a8a",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0xFFFF0000,
                  "opacity":1},
                "location":{
                  "x":335,
                  "y":90},
                "size":{
                  "width":30,
                  "height":14}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"3f610620c19d49deb975f807bb65dab9",
          "label":"新增_",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFFFF0000,
              "opacity":1},
            "location":{
              "x":335,
              "y":140},
            "size":{
              "width":30,
              "height":10}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"c2697af1570147efb2306993ba804eec",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0xFFFF0000,
                  "opacity":1},
                "location":{
                  "x":335,
                  "y":140},
                "size":{
                  "width":30,
                  "height":10}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"7e3dc74e82ec42b59ec57d45378414df",
          "label":"新增_",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFFFF0000,
              "opacity":1},
            "location":{
              "x":335,
              "y":242},
            "size":{
              "width":30,
              "height":10}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"407524b9e15e453e9b0b07bcca63d1b4",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0xFFFF0000,
                  "opacity":1},
                "location":{
                  "x":335,
                  "y":242},
                "size":{
                  "width":30,
                  "height":10}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"c7887b9f342b407bb705bd14fac2c287",
          "label":"新增_",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFFFF0000,
              "opacity":1},
            "location":{
              "x":335,
              "y":292},
            "size":{
              "width":30,
              "height":10}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"0c59418f862e4a14afe496e855ca7d90",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0xFFFF0000,
                  "opacity":1},
                "location":{
                  "x":335,
                  "y":292},
                "size":{
                  "width":30,
                  "height":10}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"5862868dfae14470914237f198500583",
          "label":"确定",
          "type":"button",
          "styleType":"button",
          "visible":false,
          "style":{
            "location":{
              "x":150,
              "y":190},
            "size":{
              "width":100,
              "height":25},
            "visible":false},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"closeCurrent",
                      "description":"关闭当前窗口"}]}]}},
          "tabbable":true},
{
          "id":"77899c961cc047adba97d500b67b9d7f",
          "label":"取消",
          "type":"button",
          "styleType":"button",
          "visible":false,
          "style":{
            "location":{
              "x":286,
              "y":190},
            "size":{
              "width":100,
              "height":25},
            "visible":false},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"fadeWidget",
                      "description":"隐藏 确定要取消吗,<br>确定,<br>取消",
                      "objectsToFades":[{
                          "objectPath":["4cacf00fd9a54a74b5e2ee6afa1afc94"],
                          "fadeInfo":{
                            "fadeType":"hide",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["5862868dfae14470914237f198500583"],
                          "fadeInfo":{
                            "fadeType":"hide",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["77899c961cc047adba97d500b67b9d7f"],
                          "fadeInfo":{
                            "fadeType":"hide",
                            "options":{
                              "showType":"none"}}}]}]}]}},
          "tabbable":true},
{
          "id":"4cacf00fd9a54a74b5e2ee6afa1afc94",
          "label":"确定要取消吗",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":false,
          "style":{
            "horizontalAlignment":"center",
            "fill":{
              "fillType":"solid",
              "color":0xFFCCCCCC},
            "location":{
              "x":150,
              "y":120},
            "size":{
              "width":236,
              "height":70},
            "visible":false},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"b29229a3776a42b587fab3e13ed77ce1",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":false,
              "style":{
                "horizontalAlignment":"center",
                "fill":{
                  "fillType":"solid",
                  "color":0xFFCCCCCC},
                "location":{
                  "x":150,
                  "y":120},
                "size":{
                  "width":236,
                  "height":70},
                "visible":false},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/设备基本信息管理/确认要删除么_u76.png"}}]}},
  "masters":{
},
  "objectPaths":{
    "f9448860827d4fb0876ca39f47cf0848":{
      "scriptId":"u0"},
    "57c1f5418faa4dd98fe1c1ed04c20d5a":{
      "scriptId":"u1"},
    "1f0d9d5774664dfd96dfad82bdf76ec6":{
      "scriptId":"u2"},
    "a91e2a659f324c658140383802b22420":{
      "scriptId":"u3"},
    "d7980cd414aa4605ad4792f3da729968":{
      "scriptId":"u4"},
    "7c6d486212904576a08e8233967169a8":{
      "scriptId":"u5"},
    "48c6032b348a451c935ecbf0d9acbd58":{
      "scriptId":"u6"},
    "7531c84b560448c1870e61f60014deca":{
      "scriptId":"u7"},
    "12f7cf9d5c75435d8e21089439c6b4b9":{
      "scriptId":"u8"},
    "649d516a148c44fa9eccfb024abf8887":{
      "scriptId":"u9"},
    "80060d1bdeb340b48e49604793481617":{
      "scriptId":"u10"},
    "fb37df8d93cd48739af2d0881a767185":{
      "scriptId":"u11"},
    "c8ea0ebe8a314ffb92a63b690cd3a9f4":{
      "scriptId":"u12"},
    "4a4019af628e48f7a0ef6e3106c6df2b":{
      "scriptId":"u13"},
    "3a7cf3ece11e445dbe7c94d5d306f41a":{
      "scriptId":"u14"},
    "f2cb622be177418fadc8b1daf98b5559":{
      "scriptId":"u15"},
    "873f4e3705184bb3bc38e441618ebb39":{
      "scriptId":"u16"},
    "c9b9547723954e1889e0ef4e0c74302f":{
      "scriptId":"u17"},
    "a2beb7d267f34afd9c329d2414c41aba":{
      "scriptId":"u18"},
    "74ebc8fa1b8e4e04b08866cd3ada2c87":{
      "scriptId":"u19"},
    "4d3455db201043e8917d020028b2cb12":{
      "scriptId":"u20"},
    "71b067d8b705462fad991253b2754380":{
      "scriptId":"u21"},
    "ae1475c85f5e4da0a3e1e3bb113b9ca3":{
      "scriptId":"u22"},
    "015def11688b4b5fa0ed1874074d431f":{
      "scriptId":"u23"},
    "c82deab5f99c4117ae31c10448317132":{
      "scriptId":"u24"},
    "8850509d18d74cafa2f0c5701c5f3a8a":{
      "scriptId":"u25"},
    "3f610620c19d49deb975f807bb65dab9":{
      "scriptId":"u26"},
    "c2697af1570147efb2306993ba804eec":{
      "scriptId":"u27"},
    "7e3dc74e82ec42b59ec57d45378414df":{
      "scriptId":"u28"},
    "407524b9e15e453e9b0b07bcca63d1b4":{
      "scriptId":"u29"},
    "c7887b9f342b407bb705bd14fac2c287":{
      "scriptId":"u30"},
    "0c59418f862e4a14afe496e855ca7d90":{
      "scriptId":"u31"},
    "5862868dfae14470914237f198500583":{
      "scriptId":"u32"},
    "77899c961cc047adba97d500b67b9d7f":{
      "scriptId":"u33"},
    "4cacf00fd9a54a74b5e2ee6afa1afc94":{
      "scriptId":"u34"},
    "b29229a3776a42b587fab3e13ed77ce1":{
      "scriptId":"u35"}}});