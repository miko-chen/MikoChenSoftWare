﻿$axure.loadCurrentPage({
  "url":"车辆违法新增页面.html",
  "generationDate":new Date(1557742049351.47),
  "isCanvasEnabled":false,
  "variables":["yys_name",
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
"name"],
  "page":{
    "packageId":"d909fb4d28fb4ec1ab2b214ad49ae773",
    "type":"Axure:Page",
    "name":"车辆违法新增页面",
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
          "id":"65230464926d4bc2946a93ebb7ba8494",
          "label":"编辑_弹框",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "size":{
              "width":350,
              "height":425}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"9d1854d1a1404ed9821ea73ce21ff79f",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "size":{
                  "width":350,
                  "height":425}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/车辆信息新增页面/编辑_弹框_u0.png"}},
{
          "id":"66d6f4f04c2d47bb907a063eef979d95",
          "label":"新增_",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":32,
              "y":38},
            "size":{
              "width":40,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"2d08dcbc93ed49d990b1a040c0624d41",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":32,
                  "y":38},
                "size":{
                  "width":40,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"39cd9309879b46b6ae33726f3cadf353",
          "label":"新增_",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":32,
              "y":95},
            "size":{
              "width":27,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"874cef8f1ec7482ca5721a81a41c0e2a",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":32,
                  "y":95},
                "size":{
                  "width":27,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"9a4b9723a4054d5ba93dc743d9ab8ab0",
          "label":"新增_车牌号",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "location":{
              "x":118,
              "y":33},
            "size":{
              "width":200,
              "height":25}},
          "adaptiveStyles":{
}},
{
          "id":"975568a2d8ad4aaf81f4dd52a61c02e4",
          "label":"新增_IC卡号",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "location":{
              "x":118,
              "y":90},
            "size":{
              "width":200,
              "height":25}},
          "adaptiveStyles":{
}},
{
          "id":"fe84f242027c4f7f96bc6608211100a7",
          "label":"新增_保存",
          "type":"button",
          "styleType":"button",
          "visible":true,
          "style":{
            "location":{
              "x":70,
              "y":379},
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
                      "action":"other",
                      "description":"保存成功",
                      "description":"保存成功",
                      "popup":{
                        "left":0,
                        "top":0,
                        "width":300,
                        "height":300,
                        "toolbar":false,
                        "scrollbars":true,
                        "location":false,
                        "status":false,
                        "menubar":false,
                        "directories":false,
                        "resizable":true,
                        "centerwindow":true}}]}]}},
          "tabbable":true},
{
          "id":"067c2d6e63c34a619080a4efff7c0bb9",
          "label":"新增_关闭",
          "type":"button",
          "styleType":"button",
          "visible":true,
          "style":{
            "location":{
              "x":200,
              "y":379},
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
                      "description":"在 当前窗口 打开 车辆违法信息",
                      "target":{
                        "targetType":"page",
                        "url":"车辆违法信息.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"c77e9d825e784e7f9fcbdb3875672197",
          "label":"新增_",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":32,
              "y":157},
            "size":{
              "width":27,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"6a68345624124b67a97cccd85a9f8b07",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":32,
                  "y":157},
                "size":{
                  "width":27,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"6fc3b28ebb034ea7bcbfac1300278c2d",
          "label":"",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "location":{
              "x":118,
              "y":152},
            "size":{
              "width":200,
              "height":25}},
          "adaptiveStyles":{
}},
{
          "id":"39aad514964f47d49e1014e3e86c5755",
          "label":"新增_",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":32,
              "y":218},
            "size":{
              "width":53,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"2d119437aa5346ca82be132e384424c0",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":32,
                  "y":218},
                "size":{
                  "width":53,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"0e39ae41cc814c4989f148c065fa5a27",
          "label":"经营路线框",
          "type":"comboBox",
          "styleType":"comboBox",
          "visible":true,
          "style":{
            "location":{
              "x":118,
              "y":214},
            "size":{
              "width":200,
              "height":22}},
          "adaptiveStyles":{
}},
{
          "id":"66ee794d1dbb49abbc35341e57e193a6",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":32,
              "y":275},
            "size":{
              "width":60,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"f620d637774347e4a383461f7378f367",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":32,
                  "y":275},
                "size":{
                  "width":60,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"29b95e4554d948f597d7b4323412e925",
          "label":"",
          "type":"textArea",
          "styleType":"textArea",
          "visible":true,
          "style":{
            "location":{
              "x":118,
              "y":268},
            "size":{
              "width":200,
              "height":85}},
          "adaptiveStyles":{
}},
{
          "id":"2a87dd00301049988c1d134f612aa870",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFFFF0000,
              "opacity":1},
            "location":{
              "x":318,
              "y":90},
            "size":{
              "width":22,
              "height":17}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"85b1a645e59243b4ac9eba5414bfd4ec",
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
                  "x":318,
                  "y":90},
                "size":{
                  "width":22,
                  "height":17}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"a3c1944493224863ba5a11b4b45d4e2e",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFFFF0000,
              "opacity":1},
            "location":{
              "x":318,
              "y":152},
            "size":{
              "width":22,
              "height":17}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"c7a3733f5cbb4ecd80fe5bf721846094",
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
                  "x":318,
                  "y":152},
                "size":{
                  "width":22,
                  "height":17}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"10489e43d70143579d809f3d4c8d3171",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFFFF0000,
              "opacity":1},
            "location":{
              "x":318,
              "y":33},
            "size":{
              "width":22,
              "height":17}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"1e1ddb91bfc2486691ea488749140333",
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
                  "x":318,
                  "y":33},
                "size":{
                  "width":22,
                  "height":17}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"946d9b8dedec446a81e6adf0edf3a481",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFFFF0000,
              "opacity":1},
            "location":{
              "x":318,
              "y":214},
            "size":{
              "width":22,
              "height":17}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"7d99eb80ff824fd0ba3c8064e712ce42",
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
                  "x":318,
                  "y":214},
                "size":{
                  "width":22,
                  "height":17}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"d0a84858baae4598a2f602bf8343c4e4",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFFFF0000,
              "opacity":1},
            "location":{
              "x":318,
              "y":268},
            "size":{
              "width":22,
              "height":17}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"79fb054993084b09a750c2123b4fdb86",
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
                  "x":318,
                  "y":268},
                "size":{
                  "width":22,
                  "height":17}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}}]}},
  "masters":{
},
  "objectPaths":{
    "65230464926d4bc2946a93ebb7ba8494":{
      "scriptId":"u0"},
    "9d1854d1a1404ed9821ea73ce21ff79f":{
      "scriptId":"u1"},
    "66d6f4f04c2d47bb907a063eef979d95":{
      "scriptId":"u2"},
    "2d08dcbc93ed49d990b1a040c0624d41":{
      "scriptId":"u3"},
    "39cd9309879b46b6ae33726f3cadf353":{
      "scriptId":"u4"},
    "874cef8f1ec7482ca5721a81a41c0e2a":{
      "scriptId":"u5"},
    "9a4b9723a4054d5ba93dc743d9ab8ab0":{
      "scriptId":"u6"},
    "975568a2d8ad4aaf81f4dd52a61c02e4":{
      "scriptId":"u7"},
    "fe84f242027c4f7f96bc6608211100a7":{
      "scriptId":"u8"},
    "067c2d6e63c34a619080a4efff7c0bb9":{
      "scriptId":"u9"},
    "c77e9d825e784e7f9fcbdb3875672197":{
      "scriptId":"u10"},
    "6a68345624124b67a97cccd85a9f8b07":{
      "scriptId":"u11"},
    "6fc3b28ebb034ea7bcbfac1300278c2d":{
      "scriptId":"u12"},
    "39aad514964f47d49e1014e3e86c5755":{
      "scriptId":"u13"},
    "2d119437aa5346ca82be132e384424c0":{
      "scriptId":"u14"},
    "0e39ae41cc814c4989f148c065fa5a27":{
      "scriptId":"u15"},
    "66ee794d1dbb49abbc35341e57e193a6":{
      "scriptId":"u16"},
    "f620d637774347e4a383461f7378f367":{
      "scriptId":"u17"},
    "29b95e4554d948f597d7b4323412e925":{
      "scriptId":"u18"},
    "2a87dd00301049988c1d134f612aa870":{
      "scriptId":"u19"},
    "85b1a645e59243b4ac9eba5414bfd4ec":{
      "scriptId":"u20"},
    "a3c1944493224863ba5a11b4b45d4e2e":{
      "scriptId":"u21"},
    "c7a3733f5cbb4ecd80fe5bf721846094":{
      "scriptId":"u22"},
    "10489e43d70143579d809f3d4c8d3171":{
      "scriptId":"u23"},
    "1e1ddb91bfc2486691ea488749140333":{
      "scriptId":"u24"},
    "946d9b8dedec446a81e6adf0edf3a481":{
      "scriptId":"u25"},
    "7d99eb80ff824fd0ba3c8064e712ce42":{
      "scriptId":"u26"},
    "d0a84858baae4598a2f602bf8343c4e4":{
      "scriptId":"u27"},
    "79fb054993084b09a750c2123b4fdb86":{
      "scriptId":"u28"}}});