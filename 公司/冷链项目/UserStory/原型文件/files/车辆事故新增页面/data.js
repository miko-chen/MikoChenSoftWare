﻿$axure.loadCurrentPage({
  "url":"车辆事故新增页面.html",
  "generationDate":new Date(1558324039331.48),
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
    "packageId":"d117a82708f44185bd8d714736d0fe97",
    "type":"Axure:Page",
    "name":"车辆事故新增页面",
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
          "id":"f022e70755284761a47f707bd085fc0f",
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
              "id":"2b7c61ab3e044c908174d6768e90117a",
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
          "id":"79321894464d4ddf9af35c6af28232c4",
          "label":"新增_",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":42,
              "y":41},
            "size":{
              "width":40,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"2387ad1dbd67436e99e5fb7cc6611a2c",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":42,
                  "y":41},
                "size":{
                  "width":40,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"2b30c7a6ad2d4bd5b01daaa44fa02067",
          "label":"新增_",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":54,
              "y":95},
            "size":{
              "width":27,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"4ae5b5215b2a45db86380fc4dfa63239",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":54,
                  "y":95},
                "size":{
                  "width":27,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"cd893023cab74c3392ff5c7ae7a93f7c",
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
          "id":"a70e591d1f9d4073af7699655898f338",
          "label":"新增_保存",
          "type":"button",
          "styleType":"button",
          "visible":true,
          "style":{
            "location":{
              "x":70,
              "y":374},
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
                      "description":"在 当前窗口 打开 车辆事故",
                      "target":{
                        "targetType":"page",
                        "url":"车辆事故.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"38dff6b414ed48bba50001dd0b6f0343",
          "label":"新增_关闭",
          "type":"button",
          "styleType":"button",
          "visible":true,
          "style":{
            "location":{
              "x":200,
              "y":374},
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
                      "description":"显示 是否关闭,<br>是,<br>否",
                      "objectsToFades":[{
                          "objectPath":["04e9a0b8fef04994b0e28ee6be206bb4"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["24c14516208d49199834d6f9cfa0aeda"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["2c3e196bae27434dbb5c44f5ff4ee653"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}}]}]}]}},
          "tabbable":true},
{
          "id":"9a3ba67f254d4e4b862288fd78766bf7",
          "label":"新增_",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":54,
              "y":158},
            "size":{
              "width":27,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"234f0a9782fe4b499f886f93f206fd5f",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":54,
                  "y":158},
                "size":{
                  "width":27,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"d921d55411d94a38bdf07004b36ba811",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":32,
              "y":215},
            "size":{
              "width":60,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"16dfc66ea1964edb849c4d0653469dd1",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":32,
                  "y":215},
                "size":{
                  "width":60,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"8054a277c96b487d934a147507678a0f",
          "label":"",
          "type":"textArea",
          "styleType":"textArea",
          "visible":true,
          "style":{
            "location":{
              "x":118,
              "y":215},
            "size":{
              "width":200,
              "height":125}},
          "adaptiveStyles":{
}},
{
          "id":"63d4c939609f43d08a011d74b6094f32",
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
              "id":"03cce68dd151479bb8996627126c1a0c",
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
          "id":"45dee1e5e35e4e71be6996e03cb63182",
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
              "id":"ffbab490052f4d28873dfe47301b8882",
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
          "id":"4e0e25d5efed42788fb05a715e72a118",
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
              "id":"a414f33b729943a29174df51d572f6db",
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
          "id":"7d766c1777554d2a9ae36f89f0bc6866",
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
              "y":215},
            "size":{
              "width":22,
              "height":17}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"09353f3c203c4be6bd619bbea90343ff",
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
                  "y":215},
                "size":{
                  "width":22,
                  "height":17}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"e7e80af8f54b471cbb1ae6777e14e3f3",
          "label":"车牌号框",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "location":{
              "x":240,
              "y":34},
            "size":{
              "width":78,
              "height":22}},
          "adaptiveStyles":{
}},
{
          "id":"75969266a6af4daf9bf4127b26d94c5f",
          "label":"",
          "type":"comboBox",
          "styleType":"comboBox",
          "visible":true,
          "style":{
            "location":{
              "x":118,
              "y":34},
            "size":{
              "width":61,
              "height":22}},
          "adaptiveStyles":{
}},
{
          "id":"b864a07878aa42d6b1b1f20caec2f6be",
          "label":"",
          "type":"comboBox",
          "styleType":"comboBox",
          "visible":true,
          "style":{
            "location":{
              "x":179,
              "y":34},
            "size":{
              "width":61,
              "height":22}},
          "adaptiveStyles":{
}},
{
          "id":"d5f48b41fb154606aa5a15798ed7aeab",
          "label":"IC卡号框",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "location":{
              "x":280,
              "y":154},
            "size":{
              "width":38,
              "height":22}},
          "adaptiveStyles":{
}},
{
          "id":"dd346e8e4913429e974cab77b645d070",
          "label":"",
          "type":"comboBox",
          "styleType":"comboBox",
          "visible":true,
          "style":{
            "location":{
              "x":118,
              "y":154},
            "size":{
              "width":54,
              "height":22}},
          "adaptiveStyles":{
}},
{
          "id":"2c87d01755194236a981c6089a8bbce4",
          "label":"",
          "type":"comboBox",
          "styleType":"comboBox",
          "visible":true,
          "style":{
            "location":{
              "x":172,
              "y":154},
            "size":{
              "width":54,
              "height":22}},
          "adaptiveStyles":{
}},
{
          "id":"cbf5ae502a4741e8a891b589b4ea407a",
          "label":"",
          "type":"comboBox",
          "styleType":"comboBox",
          "visible":true,
          "style":{
            "location":{
              "x":226,
              "y":154},
            "size":{
              "width":54,
              "height":22}},
          "adaptiveStyles":{
}},
{
          "id":"04e9a0b8fef04994b0e28ee6be206bb4",
          "label":"是否关闭",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":false,
          "style":{
            "fontSize":"20px",
            "horizontalAlignment":"center",
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFF000000,
              "opacity":1},
            "fill":{
              "fillType":"solid",
              "color":0xFF999999},
            "location":{
              "x":120,
              "y":90},
            "size":{
              "width":150,
              "height":165},
            "visible":false},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"4751850e1e4d4a8fa1879f01c0ff11db",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":false,
              "style":{
                "fontSize":"20px",
                "horizontalAlignment":"center",
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0xFF000000,
                  "opacity":1},
                "fill":{
                  "fillType":"solid",
                  "color":0xFF999999},
                "location":{
                  "x":120,
                  "y":90},
                "size":{
                  "width":150,
                  "height":165},
                "visible":false},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/车辆基本信息/是否删除_u181.png"}},
{
          "id":"24c14516208d49199834d6f9cfa0aeda",
          "label":"是",
          "type":"button",
          "styleType":"button",
          "visible":false,
          "style":{
            "location":{
              "x":145,
              "y":165},
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
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 车辆事故",
                      "target":{
                        "targetType":"page",
                        "url":"车辆事故.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"2c3e196bae27434dbb5c44f5ff4ee653",
          "label":"否",
          "type":"button",
          "styleType":"button",
          "visible":false,
          "style":{
            "location":{
              "x":145,
              "y":210},
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
                      "description":"隐藏 是否关闭,<br>是,<br>否",
                      "objectsToFades":[{
                          "objectPath":["04e9a0b8fef04994b0e28ee6be206bb4"],
                          "fadeInfo":{
                            "fadeType":"hide",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["24c14516208d49199834d6f9cfa0aeda"],
                          "fadeInfo":{
                            "fadeType":"hide",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["2c3e196bae27434dbb5c44f5ff4ee653"],
                          "fadeInfo":{
                            "fadeType":"hide",
                            "options":{
                              "showType":"none"}}}]}]}]}},
          "tabbable":true}]}},
  "masters":{
},
  "objectPaths":{
    "f022e70755284761a47f707bd085fc0f":{
      "scriptId":"u0"},
    "2b7c61ab3e044c908174d6768e90117a":{
      "scriptId":"u1"},
    "79321894464d4ddf9af35c6af28232c4":{
      "scriptId":"u2"},
    "2387ad1dbd67436e99e5fb7cc6611a2c":{
      "scriptId":"u3"},
    "2b30c7a6ad2d4bd5b01daaa44fa02067":{
      "scriptId":"u4"},
    "4ae5b5215b2a45db86380fc4dfa63239":{
      "scriptId":"u5"},
    "cd893023cab74c3392ff5c7ae7a93f7c":{
      "scriptId":"u6"},
    "a70e591d1f9d4073af7699655898f338":{
      "scriptId":"u7"},
    "38dff6b414ed48bba50001dd0b6f0343":{
      "scriptId":"u8"},
    "9a3ba67f254d4e4b862288fd78766bf7":{
      "scriptId":"u9"},
    "234f0a9782fe4b499f886f93f206fd5f":{
      "scriptId":"u10"},
    "d921d55411d94a38bdf07004b36ba811":{
      "scriptId":"u11"},
    "16dfc66ea1964edb849c4d0653469dd1":{
      "scriptId":"u12"},
    "8054a277c96b487d934a147507678a0f":{
      "scriptId":"u13"},
    "63d4c939609f43d08a011d74b6094f32":{
      "scriptId":"u14"},
    "03cce68dd151479bb8996627126c1a0c":{
      "scriptId":"u15"},
    "45dee1e5e35e4e71be6996e03cb63182":{
      "scriptId":"u16"},
    "ffbab490052f4d28873dfe47301b8882":{
      "scriptId":"u17"},
    "4e0e25d5efed42788fb05a715e72a118":{
      "scriptId":"u18"},
    "a414f33b729943a29174df51d572f6db":{
      "scriptId":"u19"},
    "7d766c1777554d2a9ae36f89f0bc6866":{
      "scriptId":"u20"},
    "09353f3c203c4be6bd619bbea90343ff":{
      "scriptId":"u21"},
    "e7e80af8f54b471cbb1ae6777e14e3f3":{
      "scriptId":"u22"},
    "75969266a6af4daf9bf4127b26d94c5f":{
      "scriptId":"u23"},
    "b864a07878aa42d6b1b1f20caec2f6be":{
      "scriptId":"u24"},
    "d5f48b41fb154606aa5a15798ed7aeab":{
      "scriptId":"u25"},
    "dd346e8e4913429e974cab77b645d070":{
      "scriptId":"u26"},
    "2c87d01755194236a981c6089a8bbce4":{
      "scriptId":"u27"},
    "cbf5ae502a4741e8a891b589b4ea407a":{
      "scriptId":"u28"},
    "04e9a0b8fef04994b0e28ee6be206bb4":{
      "scriptId":"u29"},
    "4751850e1e4d4a8fa1879f01c0ff11db":{
      "scriptId":"u30"},
    "24c14516208d49199834d6f9cfa0aeda":{
      "scriptId":"u31"},
    "2c3e196bae27434dbb5c44f5ff4ee653":{
      "scriptId":"u32"}}});