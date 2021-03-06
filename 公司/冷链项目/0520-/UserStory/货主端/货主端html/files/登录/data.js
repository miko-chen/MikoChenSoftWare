﻿$axure.loadCurrentPage({
  "url":"登录.html",
  "generationDate":new Date(1557736120252.21),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable",
"sfz",
"sfz_n",
"rl_date",
"rl_day"],
  "page":{
    "packageId":"db4bc73f4968479cb962a9b45a65eb02",
    "type":"Axure:Page",
    "name":"登录",
    "notes":{
      "默认":"<p><span>2）逻辑条件</span></p><p><span>&nbsp; &nbsp; a）进入界面时，默认情况下，只显示有账号输入框、密码输入框、保持登录状态选择框以及登录按钮。账号输入框与密码输入框均有浅色提示文字。</span></p><p><span>&nbsp; &nbsp; b）输入框被点击时</span></p><p><span>&nbsp; &nbsp; &nbsp; &nbsp; **账号输入框：文本框的形式，默认为空，账号输入框内提示文本消失，可输入账号，文本框内文字为明文显示。若“账号不存在”提示显示，则取消其显示</span></p><p><span>&nbsp; &nbsp; &nbsp; &nbsp; **密码输入框：文本框的形式，默认为空，密码输入框内提示文本消失，可输入密码，文本框内文字为密文显示。</span><span>若“</span><span>密码错误！！</span><span>”提示显示，则取消其显示</span></p><p><span>&nbsp; &nbsp; c）保持登录状态选择框，默认不选中</span></p><p><span>&nbsp; &nbsp; &nbsp; &nbsp; **当保持登录按钮被选中时</span></p><p><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **若登录成功，则保存登录状态</span></p><p><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; **若登录失败，则不改变登录状态</span></p><p><span>&nbsp; &nbsp; &nbsp; &nbsp; **当保持登录按钮取消选中时，若登录成功则清除保存状态。</span></p><p><span>&nbsp; &nbsp; d）登录按钮被点击时</span></p><p><span>&nbsp; &nbsp; &nbsp; &nbsp; **当账号输入框中账号不存在时，账号输入框右侧出现红色文本提示：“该账号不存在”</span></p><p><span>&nbsp; &nbsp; &nbsp; &nbsp; **当密码输入框中密码错误时，密码输入框右侧出现红色文本提示：“密码错误！”</span></p><p><span>&nbsp; &nbsp; &nbsp; &nbsp; **当账号密码输入均正确时，弹出成功登录提示框，成功登录。</span></p>"},
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
      "onLoad":{
        "description":"OnLoad",
        "cases":[{
            "description":"用例 1",
            "isNewIfGroup":false,
            "actions":[{
                "action":"fadeWidget",
                "description":"隐藏 文本框_账号_输入,<br>文本框_密码_输入",
                "objectsToFades":[{
                    "objectPath":["fe14e7cf4562434c9f7116d3c2824bf4"],
                    "fadeInfo":{
                      "fadeType":"hide",
                      "options":{
                        "showType":"none"}}},
{
                    "objectPath":["a0958ed9d9d443bc9504abbaf00b5343"],
                    "fadeInfo":{
                      "fadeType":"hide",
                      "options":{
                        "showType":"none"}}}]}]}]}},
    "diagram":{
      "objects":[{
          "id":"25acc843566644dfbd5f5cd084f49203",
          "label":"标签_账号",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":680,
              "y":234},
            "size":{
              "width":40,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"8de7977b9d16421d9b2974f86090001b",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":680,
                  "y":234},
                "size":{
                  "width":40,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"c2c0625e303b4d7f81ba232300be7a78",
          "label":"标签_密码",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":680,
              "y":294},
            "size":{
              "width":40,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"a7109c40ab154b00a3f89bd91484d3c6",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":680,
                  "y":294},
                "size":{
                  "width":40,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"fe14e7cf4562434c9f7116d3c2824bf4",
          "label":"文本框_账号_输入",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "fontSize":"14px",
            "location":{
              "x":730,
              "y":230},
            "size":{
              "width":200,
              "height":25}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onFocus":{
              "description":"OnFocus",
              "cases":[{
                  "description":"账号输入框获得焦点时",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"fadeWidget",
                      "description":"显示/隐藏部件",
                      "objectsToFades":[]}]}]},
            "onLostFocus":{
              "description":"OnLostFocus",
              "cases":[{
                  "description":"账号输入文本框失去焦点<br> (If 部件文字 当前部件 = &quot;&quot;)",
                  "isNewIfGroup":false,
                  "condition":{
                    "exprType":"binaryOp",
                    "op":"==",
                    "leftExpr":{
                      "exprType":"fcall",
                      "functionName":"GetWidgetText",
                      "arguments":[{
                          "exprType":"pathLiteral",
                          "isThis":true,
                          "isFocused":false,
                          "isTarget":false}]},
                    "rightExpr":{
                      "exprType":"stringLiteral",
                      "value":"",
                      "stos":[]}},
                  "actions":[{
                      "action":"fadeWidget",
                      "description":"切换 文本框_账号_输入,<br>文本框_账号_显示",
                      "objectsToFades":[{
                          "objectPath":["fe14e7cf4562434c9f7116d3c2824bf4"],
                          "fadeInfo":{
                            "fadeType":"toggle",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["d58547f1c249401f836a758d79e93f36"],
                          "fadeInfo":{
                            "fadeType":"toggle",
                            "options":{
                              "showType":"none"}}}]}]}]}},
          "tabbable":true},
{
          "id":"d58547f1c249401f836a758d79e93f36",
          "label":"文本框_账号_显示",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFF999999,
              "opacity":1},
            "location":{
              "x":730,
              "y":230},
            "size":{
              "width":200,
              "height":25}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onFocus":{
              "description":"OnFocus",
              "cases":[{
                  "description":"点击后提示文本小时",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"fadeWidget",
                      "description":"切换 文本框_账号_输入,<br>文本框_账号_显示",
                      "objectsToFades":[{
                          "objectPath":["fe14e7cf4562434c9f7116d3c2824bf4"],
                          "fadeInfo":{
                            "fadeType":"toggle",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["d58547f1c249401f836a758d79e93f36"],
                          "fadeInfo":{
                            "fadeType":"toggle",
                            "options":{
                              "showType":"none"}}}]},
{
                      "action":"setFocusOnWidget",
                      "description":"设置焦点在 文本框_账号_输入 上",
                      "objectPaths":[["fe14e7cf4562434c9f7116d3c2824bf4"]]}]}]},
            "onLostFocus":{
              "description":"OnLostFocus",
              "cases":[{
                  "description":"用例 1<br> (If 部件文字 当前部件 = &quot;&quot;)",
                  "isNewIfGroup":false,
                  "condition":{
                    "exprType":"binaryOp",
                    "op":"==",
                    "leftExpr":{
                      "exprType":"fcall",
                      "functionName":"GetWidgetText",
                      "arguments":[{
                          "exprType":"pathLiteral",
                          "isThis":true,
                          "isFocused":false,
                          "isTarget":false}]},
                    "rightExpr":{
                      "exprType":"stringLiteral",
                      "value":"",
                      "stos":[]}},
                  "actions":[{
                      "action":"setFunction",
                      "description":"设置 部件文字 当前部件 = &quot;请输入账号&quot;",
                      "expr":{
                        "exprType":"block",
                        "subExprs":[{
                            "exprType":"fcall",
                            "functionName":"SetWidgetFormText",
                            "arguments":[{
                                "exprType":"pathLiteral",
                                "isThis":true,
                                "isFocused":false,
                                "isTarget":false},
{
                                "exprType":"stringLiteral",
                                "value":"请输入账号",
                                "stos":[]}]}]}}]}]}},
          "tabbable":true},
{
          "id":"a0958ed9d9d443bc9504abbaf00b5343",
          "label":"文本框_密码_输入",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "fontSize":"28px",
            "location":{
              "x":730,
              "y":290},
            "size":{
              "width":200,
              "height":25}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onFocus":{
              "description":"OnFocus",
              "cases":[{
                  "description":"密码输入框获得焦点时",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"fadeWidget",
                      "description":"显示/隐藏部件",
                      "objectsToFades":[]}]}]},
            "onLostFocus":{
              "description":"OnLostFocus",
              "cases":[{
                  "description":"密码输入文本框失去焦点<br> (If 部件文字 当前部件 = &quot;&quot;)",
                  "isNewIfGroup":false,
                  "condition":{
                    "exprType":"binaryOp",
                    "op":"==",
                    "leftExpr":{
                      "exprType":"fcall",
                      "functionName":"GetWidgetText",
                      "arguments":[{
                          "exprType":"pathLiteral",
                          "isThis":true,
                          "isFocused":false,
                          "isTarget":false}]},
                    "rightExpr":{
                      "exprType":"stringLiteral",
                      "value":"",
                      "stos":[]}},
                  "actions":[{
                      "action":"fadeWidget",
                      "description":"切换 文本框_密码_显示,<br>文本框_密码_输入",
                      "objectsToFades":[{
                          "objectPath":["ff11cb84ab6348a4b5060b76d841d000"],
                          "fadeInfo":{
                            "fadeType":"toggle",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["a0958ed9d9d443bc9504abbaf00b5343"],
                          "fadeInfo":{
                            "fadeType":"toggle",
                            "options":{
                              "showType":"none"}}}]}]}]}},
          "tabbable":true},
{
          "id":"ff11cb84ab6348a4b5060b76d841d000",
          "label":"文本框_密码_显示",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFF999999,
              "opacity":1},
            "location":{
              "x":730,
              "y":290},
            "size":{
              "width":200,
              "height":25}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onFocus":{
              "description":"OnFocus",
              "cases":[{
                  "description":"密码显示文本框获得焦点",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"fadeWidget",
                      "description":"切换 文本框_密码_显示,<br>文本框_密码_输入",
                      "objectsToFades":[{
                          "objectPath":["ff11cb84ab6348a4b5060b76d841d000"],
                          "fadeInfo":{
                            "fadeType":"toggle",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["a0958ed9d9d443bc9504abbaf00b5343"],
                          "fadeInfo":{
                            "fadeType":"toggle",
                            "options":{
                              "showType":"none"}}}]},
{
                      "action":"setFocusOnWidget",
                      "description":"设置焦点在 文本框_密码_输入 上",
                      "objectPaths":[["a0958ed9d9d443bc9504abbaf00b5343"]]}]}]}},
          "tabbable":true},
{
          "id":"29b4573eaec2483cb3dd7473cba2f8fb",
          "label":"按钮_登录",
          "type":"button",
          "styleType":"button",
          "visible":true,
          "style":{
            "location":{
              "x":680,
              "y":380},
            "size":{
              "width":100,
              "height":25}},
          "adaptiveStyles":{
}},
{
          "id":"9c2cf30a9d1a4d6282d8e544f2e7e3b8",
          "label":"",
          "type":"button",
          "styleType":"button",
          "visible":true,
          "style":{
            "location":{
              "x":840,
              "y":380},
            "size":{
              "width":100,
              "height":25}},
          "adaptiveStyles":{
}},
{
          "id":"024c98c23d904221b4e12330508cc1d3",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "underline":true,
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFF0000FF,
              "opacity":1},
            "location":{
              "x":730,
              "y":334},
            "size":{
              "width":60,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"85220c0fa75244e7a7eedfd1125904f3",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "underline":true,
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0xFF0000FF,
                  "opacity":1},
                "location":{
                  "x":730,
                  "y":334},
                "size":{
                  "width":60,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"534adc4fb96343e58f858409708fd48a",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "fontSize":"16px",
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFFFF0000,
              "opacity":1},
            "location":{
              "x":958,
              "y":234},
            "size":{
              "width":7,
              "height":19}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"1c67dce03a404e7c8f6b4e970a5b36c2",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"16px",
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0xFFFF0000,
                  "opacity":1},
                "location":{
                  "x":958,
                  "y":234},
                "size":{
                  "width":7,
                  "height":19}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"3ed8bfddf334421c97bed5409f8e9d5b",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "fontSize":"16px",
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFFFF0000,
              "opacity":1},
            "location":{
              "x":958,
              "y":294},
            "size":{
              "width":7,
              "height":19}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"2969c3b3d2cf461daa988d28208c48cd",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"16px",
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0xFFFF0000,
                  "opacity":1},
                "location":{
                  "x":958,
                  "y":294},
                "size":{
                  "width":7,
                  "height":19}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}}]}},
  "masters":{
},
  "objectPaths":{
    "25acc843566644dfbd5f5cd084f49203":{
      "scriptId":"u0"},
    "8de7977b9d16421d9b2974f86090001b":{
      "scriptId":"u1"},
    "c2c0625e303b4d7f81ba232300be7a78":{
      "scriptId":"u2"},
    "a7109c40ab154b00a3f89bd91484d3c6":{
      "scriptId":"u3"},
    "fe14e7cf4562434c9f7116d3c2824bf4":{
      "scriptId":"u4"},
    "d58547f1c249401f836a758d79e93f36":{
      "scriptId":"u5"},
    "a0958ed9d9d443bc9504abbaf00b5343":{
      "scriptId":"u6"},
    "ff11cb84ab6348a4b5060b76d841d000":{
      "scriptId":"u7"},
    "29b4573eaec2483cb3dd7473cba2f8fb":{
      "scriptId":"u8"},
    "9c2cf30a9d1a4d6282d8e544f2e7e3b8":{
      "scriptId":"u9"},
    "024c98c23d904221b4e12330508cc1d3":{
      "scriptId":"u10"},
    "85220c0fa75244e7a7eedfd1125904f3":{
      "scriptId":"u11"},
    "534adc4fb96343e58f858409708fd48a":{
      "scriptId":"u12"},
    "1c67dce03a404e7c8f6b4e970a5b36c2":{
      "scriptId":"u13"},
    "3ed8bfddf334421c97bed5409f8e9d5b":{
      "scriptId":"u14"},
    "2969c3b3d2cf461daa988d28208c48cd":{
      "scriptId":"u15"}}});