﻿$axure.loadCurrentPage({
  "url":"货主消息新增页面.html",
  "generationDate":new Date(1557742087255.77),
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
    "packageId":"6eeb625b906a439384766a9cad31fda3",
    "type":"Axure:Page",
    "name":"货主消息新增页面",
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
      "onLoad":{
        "description":"OnLoad",
        "cases":[{
            "description":"用例 1",
            "isNewIfGroup":false,
            "actions":[{
                "action":"fadeWidget",
                "description":"隐藏 新增未填提示",
                "objectsToFades":[{
                    "objectPath":["cfc294824ce04241b1918c9c101e2afd"],
                    "fadeInfo":{
                      "fadeType":"hide",
                      "options":{
                        "showType":"none"}}}]}]}]}},
    "diagram":{
      "objects":[{
          "id":"2aafc8511ca248ccb07b640cdfb34137",
          "label":"新增_",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "horizontalAlignment":"center",
            "verticalAlignment":"bottom",
            "location":{
              "x":38,
              "y":81},
            "size":{
              "width":53,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"9d6952d3a06d4cd4acba38176723b671",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "horizontalAlignment":"center",
                "verticalAlignment":"bottom",
                "location":{
                  "x":38,
                  "y":81},
                "size":{
                  "width":53,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"77f0a614a1664931a0360ee4e4b5ef86",
          "label":"新增_",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "horizontalAlignment":"center",
            "verticalAlignment":"bottom",
            "location":{
              "x":31,
              "y":229},
            "size":{
              "width":14,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"4a4df2185ef14019aebb904656485b5c",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "horizontalAlignment":"center",
                "verticalAlignment":"bottom",
                "location":{
                  "x":31,
                  "y":229},
                "size":{
                  "width":14,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"d4fe2a238a4d47d39a0342c45804b0b5",
          "label":"新增_保存",
          "type":"button",
          "styleType":"button",
          "visible":true,
          "style":{
            "location":{
              "x":31,
              "y":258},
            "size":{
              "width":127,
              "height":38}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"若某项为空<br> (If 部件文字 不明 = &quot;&quot; 或 部件文字 不明 = &quot;&quot; 或 选中项值 不明 = &quot;请选择&quot; 或 选中项值 不明 = &quot;请选择&quot; 或 选中项值 不明 = &quot;请选择&quot; 或 选中项值 不明 = &quot;全部&quot; 或 选中项值 不明 = &quot;请选择&quot; 或 选中项值 不明 = &quot;请选择&quot; 或 选中项值 不明 = &quot;请选择&quot; 或 选中项值 不明 = &quot;请选择&quot;)",
                  "isNewIfGroup":false,
                  "condition":{
                    "exprType":"binaryOp",
                    "op":"||",
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
                            "value":["205aa56a70094d68871dfb53ae1b370d"]}]},
                      "rightExpr":{
                        "exprType":"stringLiteral",
                        "value":"",
                        "stos":[]}},
                    "rightExpr":{
                      "exprType":"binaryOp",
                      "op":"||",
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
                              "value":["53279d324a474fddabc5ab5d3fc1d846"]}]},
                        "rightExpr":{
                          "exprType":"stringLiteral",
                          "value":"",
                          "stos":[]}},
                      "rightExpr":{
                        "exprType":"binaryOp",
                        "op":"||",
                        "leftExpr":{
                          "exprType":"binaryOp",
                          "op":"==",
                          "leftExpr":{
                            "exprType":"fcall",
                            "functionName":"GetSelectedOption",
                            "arguments":[{
                                "exprType":"pathLiteral",
                                "isThis":false,
                                "isFocused":false,
                                "isTarget":false,
                                "value":["ed2d05c358ad461aa42b24262ca78e5e"]}]},
                          "rightExpr":{
                            "exprType":"stringLiteral",
                            "value":"请选择",
                            "stos":[]}},
                        "rightExpr":{
                          "exprType":"binaryOp",
                          "op":"||",
                          "leftExpr":{
                            "exprType":"binaryOp",
                            "op":"==",
                            "leftExpr":{
                              "exprType":"fcall",
                              "functionName":"GetSelectedOption",
                              "arguments":[{
                                  "exprType":"pathLiteral",
                                  "isThis":false,
                                  "isFocused":false,
                                  "isTarget":false,
                                  "value":["2e5d09a1b7ec445ea188ab353d2ccf72"]}]},
                            "rightExpr":{
                              "exprType":"stringLiteral",
                              "value":"请选择",
                              "stos":[]}},
                          "rightExpr":{
                            "exprType":"binaryOp",
                            "op":"||",
                            "leftExpr":{
                              "exprType":"binaryOp",
                              "op":"==",
                              "leftExpr":{
                                "exprType":"fcall",
                                "functionName":"GetSelectedOption",
                                "arguments":[{
                                    "exprType":"pathLiteral",
                                    "isThis":false,
                                    "isFocused":false,
                                    "isTarget":false,
                                    "value":["bf2437c09dd740fda8c39a7aa70527eb"]}]},
                              "rightExpr":{
                                "exprType":"stringLiteral",
                                "value":"请选择",
                                "stos":[]}},
                            "rightExpr":{
                              "exprType":"binaryOp",
                              "op":"||",
                              "leftExpr":{
                                "exprType":"binaryOp",
                                "op":"==",
                                "leftExpr":{
                                  "exprType":"fcall",
                                  "functionName":"GetSelectedOption",
                                  "arguments":[{
                                      "exprType":"pathLiteral",
                                      "isThis":false,
                                      "isFocused":false,
                                      "isTarget":false,
                                      "value":["8f1393abf5934e77a03acc069dc04b49"]}]},
                                "rightExpr":{
                                  "exprType":"stringLiteral",
                                  "value":"全部",
                                  "stos":[]}},
                              "rightExpr":{
                                "exprType":"binaryOp",
                                "op":"||",
                                "leftExpr":{
                                  "exprType":"binaryOp",
                                  "op":"==",
                                  "leftExpr":{
                                    "exprType":"fcall",
                                    "functionName":"GetSelectedOption",
                                    "arguments":[{
                                        "exprType":"pathLiteral",
                                        "isThis":false,
                                        "isFocused":false,
                                        "isTarget":false,
                                        "value":["db7aae2299414ac9af71ff1c2529fb6e"]}]},
                                  "rightExpr":{
                                    "exprType":"stringLiteral",
                                    "value":"请选择",
                                    "stos":[]}},
                                "rightExpr":{
                                  "exprType":"binaryOp",
                                  "op":"||",
                                  "leftExpr":{
                                    "exprType":"binaryOp",
                                    "op":"==",
                                    "leftExpr":{
                                      "exprType":"fcall",
                                      "functionName":"GetSelectedOption",
                                      "arguments":[{
                                          "exprType":"pathLiteral",
                                          "isThis":false,
                                          "isFocused":false,
                                          "isTarget":false,
                                          "value":["dbc5031492c243159f28ade0847ba565"]}]},
                                    "rightExpr":{
                                      "exprType":"stringLiteral",
                                      "value":"请选择",
                                      "stos":[]}},
                                  "rightExpr":{
                                    "exprType":"binaryOp",
                                    "op":"||",
                                    "leftExpr":{
                                      "exprType":"binaryOp",
                                      "op":"==",
                                      "leftExpr":{
                                        "exprType":"fcall",
                                        "functionName":"GetSelectedOption",
                                        "arguments":[{
                                            "exprType":"pathLiteral",
                                            "isThis":false,
                                            "isFocused":false,
                                            "isTarget":false,
                                            "value":["50cb0f8762ee4c7180bd74a21e5a5c21"]}]},
                                      "rightExpr":{
                                        "exprType":"stringLiteral",
                                        "value":"请选择",
                                        "stos":[]}},
                                    "rightExpr":{
                                      "exprType":"binaryOp",
                                      "op":"==",
                                      "leftExpr":{
                                        "exprType":"fcall",
                                        "functionName":"GetSelectedOption",
                                        "arguments":[{
                                            "exprType":"pathLiteral",
                                            "isThis":false,
                                            "isFocused":false,
                                            "isTarget":false,
                                            "value":["22beeb103c22409a92adfcbf4e9ba188"]}]},
                                      "rightExpr":{
                                        "exprType":"stringLiteral",
                                        "value":"请选择",
                                        "stos":[]}}}}}}}}}}},
                  "actions":[{
                      "action":"fadeWidget",
                      "description":"显示 新增未填提示",
                      "objectsToFades":[{
                          "objectPath":["cfc294824ce04241b1918c9c101e2afd"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}}]}]},
{
                  "description":"若全有<br> (Else If True)",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setFunction",
                      "description":"设置 变量 yys_name = 选中项值 不明, 且<br> 变量 car_chePai_card = 部件文字 不明, 且<br> 变量 car_chePai_color = 选中项值 不明, 且<br> 变量 car_leixing = 选中项值 不明, 且<br> 变量 car_ICcard = 部件文字 不明, 且<br> 变量 yy_leixing = 选中项值 不明, 且<br> 变量 car_InterNet_leixing = 选中项值 不明, 且<br> 变量 car_jingYingLuXian = 选中项值 不明, 且<br> 变量 car_zhuangTai = 选中项值 不明, 且<br> 变量 quYu = 选中项值 不明",
                      "expr":{
                        "exprType":"block",
                        "subExprs":[]}},
{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 链接",
                      "target":{
                        "targetType":"page",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"4d8adff86be6469c88cd8fc2765ed4fb",
          "label":"",
          "type":"dynamicPanel",
          "styleType":"dynamicPanel",
          "visible":true,
          "style":{
            "location":{
              "x":454,
              "y":83},
            "size":{
              "width":10,
              "height":10}},
          "adaptiveStyles":{
},
          "fixedHorizontal":"center",
          "fixedMarginHorizontal":0,
          "fixedVertical":"middle",
          "fixedMarginVertical":0,
          "fixedKeepInFront":true,
          "scrollbars":"none",
          "fitToContent":true,
          "propagate":false,
          "diagrams":[{
              "id":"35eeae21b28448fd8ca6fac033b5e906",
              "label":"状态1",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"cfc294824ce04241b1918c9c101e2afd",
                  "label":"新增未填提示",
                  "parentDynamicPanel":"4d8adff86be6469c88cd8fc2765ed4fb",
                  "panelIndex":0,
                  "type":"buttonShape",
                  "styleType":"buttonShape",
                  "visible":true,
                  "style":{
                    "size":{
                      "width":286,
                      "height":120}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"5da83d3f86154f3eade7a4b23860301f",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"4d8adff86be6469c88cd8fc2765ed4fb",
                      "panelIndex":0,
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "size":{
                          "width":286,
                          "height":120}},
                      "adaptiveStyles":{
}}],
                  "interactionMap":{
                    "onMouseOver":{
                      "description":"OnMouseOver",
                      "cases":[{
                          "description":"用例 1",
                          "isNewIfGroup":false,
                          "actions":[{
                              "action":"wait",
                              "description":"等待1000毫秒",
                              "waitTime":1000},
{
                              "action":"fadeWidget",
                              "description":"隐藏 新增未填提示",
                              "objectsToFades":[{
                                  "objectPath":["cfc294824ce04241b1918c9c101e2afd"],
                                  "fadeInfo":{
                                    "fadeType":"hide",
                                    "options":{
                                      "showType":"none"}}}]}]}]}},
                  "images":{
                    "normal~":"images/车辆维护保养新增页面/新增未填提示_u1.png"}}],
              "style":{
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "image":null,
                "imageHorizontalAlignment":"near",
                "imageVerticalAlignment":"near",
                "imageRepeat":"auto"},
              "adaptiveStyles":{
}}]},
{
          "id":"b95cda2110be44ceb6e81fee1d03cc1f",
          "label":"",
          "type":"verticalLine",
          "styleType":"verticalLine",
          "visible":true,
          "style":{
            "location":{
              "x":20,
              "y":13},
            "size":{
              "width":10,
              "height":327}},
          "adaptiveStyles":{
},
          "images":{
            "start~":"resources/images/transparent.gif",
            "end~":"resources/images/transparent.gif",
            "line~":"images/货主消息新增页面/u8_line.png"}},
{
          "id":"2af5ce874edd40a291410b160b28f6a9",
          "label":"",
          "type":"horizontalLine",
          "styleType":"horizontalLine",
          "visible":true,
          "style":{
            "location":{
              "x":24,
              "y":8.5},
            "size":{
              "width":326,
              "height":10}},
          "adaptiveStyles":{
},
          "images":{
            "start~":"resources/images/transparent.gif",
            "end~":"resources/images/transparent.gif",
            "line~":"images/货主消息新增页面/u9_line.png"}},
{
          "id":"c1e2fa58988c4c58a57b90a70448e8fd",
          "label":"",
          "type":"horizontalLine",
          "styleType":"horizontalLine",
          "visible":true,
          "style":{
            "location":{
              "x":24,
              "y":330},
            "size":{
              "width":325,
              "height":10}},
          "adaptiveStyles":{
},
          "images":{
            "start~":"resources/images/transparent.gif",
            "end~":"resources/images/transparent.gif",
            "line~":"images/货主消息新增页面/u10_line.png"}},
{
          "id":"6fc02c90576b44258de5adea81a778a6",
          "label":"",
          "type":"verticalLine",
          "styleType":"verticalLine",
          "visible":true,
          "style":{
            "location":{
              "x":341,
              "y":13},
            "size":{
              "width":10,
              "height":322}},
          "adaptiveStyles":{
},
          "images":{
            "start~":"resources/images/transparent.gif",
            "end~":"resources/images/transparent.gif",
            "line~":"images/货主消息新增页面/u11_line.png"}},
{
          "id":"441ad7f7bf924a98914dd74b945b7821",
          "label":"新增_关闭",
          "type":"button",
          "styleType":"button",
          "visible":true,
          "style":{
            "location":{
              "x":183,
              "y":258},
            "size":{
              "width":127,
              "height":38}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setFunction",
                      "description":"设置 变量 yys_name = &quot;&quot;, 且<br> 变量 car_chePai_card = &quot;&quot;, 且<br> 变量 car_chePai_color = &quot;&quot;, 且<br> 变量 car_leixing = &quot;&quot;, 且<br> 变量 car_ICcard = &quot;&quot;, 且<br> 变量 yy_leixing = &quot;&quot;, 且<br> 变量 car_InterNet_leixing = &quot;&quot;, 且<br> 变量 car_jingYingLuXian = &quot;&quot;, 且<br> 变量 car_zhuangTai = &quot;&quot;, 且<br> 变量 quYu = &quot;&quot;",
                      "expr":{
                        "exprType":"block",
                        "subExprs":[{
                            "exprType":"fcall",
                            "functionName":"SetGlobalVariableValue",
                            "arguments":[{
                                "exprType":"globalVariableLiteral",
                                "variableName":"yys_name"},
{
                                "exprType":"stringLiteral",
                                "value":"",
                                "stos":[]}]},
{
                            "exprType":"fcall",
                            "functionName":"SetGlobalVariableValue",
                            "arguments":[{
                                "exprType":"globalVariableLiteral",
                                "variableName":"car_chePai_card"},
{
                                "exprType":"stringLiteral",
                                "value":"",
                                "stos":[]}]},
{
                            "exprType":"fcall",
                            "functionName":"SetGlobalVariableValue",
                            "arguments":[{
                                "exprType":"globalVariableLiteral",
                                "variableName":"car_chePai_color"},
{
                                "exprType":"stringLiteral",
                                "value":"",
                                "stos":[]}]},
{
                            "exprType":"fcall",
                            "functionName":"SetGlobalVariableValue",
                            "arguments":[{
                                "exprType":"globalVariableLiteral",
                                "variableName":"car_leixing"},
{
                                "exprType":"stringLiteral",
                                "value":"",
                                "stos":[]}]},
{
                            "exprType":"fcall",
                            "functionName":"SetGlobalVariableValue",
                            "arguments":[{
                                "exprType":"globalVariableLiteral",
                                "variableName":"car_ICcard"},
{
                                "exprType":"stringLiteral",
                                "value":"",
                                "stos":[]}]},
{
                            "exprType":"fcall",
                            "functionName":"SetGlobalVariableValue",
                            "arguments":[{
                                "exprType":"globalVariableLiteral",
                                "variableName":"yy_leixing"},
{
                                "exprType":"stringLiteral",
                                "value":"",
                                "stos":[]}]},
{
                            "exprType":"fcall",
                            "functionName":"SetGlobalVariableValue",
                            "arguments":[{
                                "exprType":"globalVariableLiteral",
                                "variableName":"car_InterNet_leixing"},
{
                                "exprType":"stringLiteral",
                                "value":"",
                                "stos":[]}]},
{
                            "exprType":"fcall",
                            "functionName":"SetGlobalVariableValue",
                            "arguments":[{
                                "exprType":"globalVariableLiteral",
                                "variableName":"car_jingYingLuXian"},
{
                                "exprType":"stringLiteral",
                                "value":"",
                                "stos":[]}]},
{
                            "exprType":"fcall",
                            "functionName":"SetGlobalVariableValue",
                            "arguments":[{
                                "exprType":"globalVariableLiteral",
                                "variableName":"car_zhuangTai"},
{
                                "exprType":"stringLiteral",
                                "value":"",
                                "stos":[]}]},
{
                            "exprType":"fcall",
                            "functionName":"SetGlobalVariableValue",
                            "arguments":[{
                                "exprType":"globalVariableLiteral",
                                "variableName":"quYu"},
{
                                "exprType":"stringLiteral",
                                "value":"",
                                "stos":[]}]}]}},
{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 链接",
                      "target":{
                        "targetType":"page",
                        "includeVariables":true},
                      "linkType":"current"},
{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 货主消息管理",
                      "target":{
                        "targetType":"page",
                        "url":"货主消息管理.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"948efc0563154b5a802bd09e97ff39f7",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":47,
              "y":35},
            "size":{
              "width":40,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"a3a035f9c82244dab17a35e32ccf7395",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":47,
                  "y":35},
                "size":{
                  "width":40,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"5867675431944ffe9948eb61bb1271cf",
          "label":"",
          "type":"comboBox",
          "styleType":"comboBox",
          "visible":true,
          "style":{
            "location":{
              "x":101,
              "y":32},
            "size":{
              "width":200,
              "height":22}},
          "adaptiveStyles":{
}},
{
          "id":"d761f74889af45ba838051ad8cb56063",
          "label":"",
          "type":"textArea",
          "styleType":"textArea",
          "visible":true,
          "style":{
            "location":{
              "x":38,
              "y":108},
            "size":{
              "width":282,
              "height":100}},
          "adaptiveStyles":{
}}]}},
  "masters":{
},
  "objectPaths":{
    "2aafc8511ca248ccb07b640cdfb34137":{
      "scriptId":"u0"},
    "9d6952d3a06d4cd4acba38176723b671":{
      "scriptId":"u1"},
    "77f0a614a1664931a0360ee4e4b5ef86":{
      "scriptId":"u2"},
    "4a4df2185ef14019aebb904656485b5c":{
      "scriptId":"u3"},
    "d4fe2a238a4d47d39a0342c45804b0b5":{
      "scriptId":"u4"},
    "4d8adff86be6469c88cd8fc2765ed4fb":{
      "scriptId":"u5"},
    "cfc294824ce04241b1918c9c101e2afd":{
      "scriptId":"u6"},
    "5da83d3f86154f3eade7a4b23860301f":{
      "scriptId":"u7"},
    "b95cda2110be44ceb6e81fee1d03cc1f":{
      "scriptId":"u8"},
    "2af5ce874edd40a291410b160b28f6a9":{
      "scriptId":"u9"},
    "c1e2fa58988c4c58a57b90a70448e8fd":{
      "scriptId":"u10"},
    "6fc02c90576b44258de5adea81a778a6":{
      "scriptId":"u11"},
    "441ad7f7bf924a98914dd74b945b7821":{
      "scriptId":"u12"},
    "948efc0563154b5a802bd09e97ff39f7":{
      "scriptId":"u13"},
    "a3a035f9c82244dab17a35e32ccf7395":{
      "scriptId":"u14"},
    "5867675431944ffe9948eb61bb1271cf":{
      "scriptId":"u15"},
    "d761f74889af45ba838051ad8cb56063":{
      "scriptId":"u16"}}});