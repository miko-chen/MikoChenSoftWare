﻿$axure.loadCurrentPage({
  "url":"登录.html",
  "generationDate":new Date(1557742085859.11),
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
              "x":178,
              "y":134},
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
                  "x":178,
                  "y":134},
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
              "x":178,
              "y":179},
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
                  "x":178,
                  "y":179},
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
              "x":250,
              "y":130},
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
              "x":250,
              "y":130},
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
              "x":250,
              "y":175},
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
              "x":250,
              "y":175},
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
          "id":"a2205930439a4a1ab66581f9c97658ab",
          "label":"",
          "type":"checkbox",
          "styleType":"checkbox",
          "visible":true,
          "style":{
            "location":{
              "x":300,
              "y":210},
            "size":{
              "width":100,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"c64f835657b74c4f8c1d3fb7e3eacb3f",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":300,
                  "y":210},
                "size":{
                  "width":100,
                  "height":16}},
              "adaptiveStyles":{
}}]},
{
          "id":"29b4573eaec2483cb3dd7473cba2f8fb",
          "label":"按钮_登录",
          "type":"button",
          "styleType":"button",
          "visible":true,
          "style":{
            "location":{
              "x":300,
              "y":236},
            "size":{
              "width":100,
              "height":25}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"判断账号是否存在<br> (If 部件文字 文本框_账号_输入 ≠ &quot;admin&quot;)",
                  "isNewIfGroup":false,
                  "condition":{
                    "exprType":"binaryOp",
                    "op":"!=",
                    "leftExpr":{
                      "exprType":"fcall",
                      "functionName":"GetWidgetText",
                      "arguments":[{
                          "exprType":"pathLiteral",
                          "isThis":false,
                          "isFocused":false,
                          "isTarget":false,
                          "value":["fe14e7cf4562434c9f7116d3c2824bf4"]}]},
                    "rightExpr":{
                      "exprType":"stringLiteral",
                      "value":"admin",
                      "stos":[]}},
                  "actions":[{
                      "action":"other",
                      "description":"该账号不存在",
                      "description":"该账号不存在",
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
                        "centerwindow":true}}]},
{
                  "description":"判断密码是否正确<br> (Else If 部件文字 文本框_密码_输入 ≠ &quot;admin&quot;)",
                  "isNewIfGroup":false,
                  "condition":{
                    "exprType":"binaryOp",
                    "op":"!=",
                    "leftExpr":{
                      "exprType":"fcall",
                      "functionName":"GetWidgetText",
                      "arguments":[{
                          "exprType":"pathLiteral",
                          "isThis":false,
                          "isFocused":false,
                          "isTarget":false,
                          "value":["a0958ed9d9d443bc9504abbaf00b5343"]}]},
                    "rightExpr":{
                      "exprType":"stringLiteral",
                      "value":"admin",
                      "stos":[]}},
                  "actions":[{
                      "action":"other",
                      "description":"密码错误",
                      "description":"密码错误",
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
                        "centerwindow":true}}]},
{
                  "description":"用例 1<br> (Else If 部件文字 文本框_账号_输入 = &quot;admin&quot; 和 部件文字 文本框_密码_输入 = &quot;admin&quot;)",
                  "isNewIfGroup":false,
                  "condition":{
                    "exprType":"binaryOp",
                    "op":"&&",
                    "leftExpr":{
                      "exprType":"binaryOp",
                      "op":"==",
                      "leftExpr":{
                        "exprType":"fcall",
                        "functionName":"GetWidgetText",
                        "arguments":[{
                            "exprType":"pathLiteral",
                            "isThis":false,
                            "isFocused":false,
                            "isTarget":false,
                            "value":["fe14e7cf4562434c9f7116d3c2824bf4"]}]},
                      "rightExpr":{
                        "exprType":"stringLiteral",
                        "value":"admin",
                        "stos":[]}},
                    "rightExpr":{
                      "exprType":"binaryOp",
                      "op":"==",
                      "leftExpr":{
                        "exprType":"fcall",
                        "functionName":"GetWidgetText",
                        "arguments":[{
                            "exprType":"pathLiteral",
                            "isThis":false,
                            "isFocused":false,
                            "isTarget":false,
                            "value":["a0958ed9d9d443bc9504abbaf00b5343"]}]},
                      "rightExpr":{
                        "exprType":"stringLiteral",
                        "value":"admin",
                        "stos":[]}}},
                  "actions":[{
                      "action":"other",
                      "description":"登录成功",
                      "description":"登录成功",
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
          "tabbable":true}]}},
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
    "a2205930439a4a1ab66581f9c97658ab":{
      "scriptId":"u8"},
    "c64f835657b74c4f8c1d3fb7e3eacb3f":{
      "scriptId":"u9"},
    "29b4573eaec2483cb3dd7473cba2f8fb":{
      "scriptId":"u10"}}});