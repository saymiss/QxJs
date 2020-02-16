/*
unlock vip by panxsn

链接：
①清爽视频编辑器：http://mrw.so/5l3Q2L
②迅捷文字识别：http://mrw.so/5dxDGA
③迅捷PDF转换器：http://mrw.so/56Holj
④迅捷论文查重：http://mrw.so/4v6nSk
⑤文字转语音助手：http://mrw.so/4K8LGI
⑥录音转文字助手：http://mrw.so/4K8LZ6

[rewrite_local]
# 迅捷系列(清爽视频编辑器、文字识别、PDF转换器、论文查重、文字转语音助手、录音转文字助手)
^https:\/\/app\.xunjiepdf\.com\/api\/v4\/(memprofile|virtualactregister) url script-response-body xunjie.js

[mitm]
app.xunjiepdf.com
*/

var obj = JSON.parse($response.body);

 obj.userinfo.vip = [
   {
    "id": 9917287,
    "auth_type": 1,
    "auth_value": 9876543210
   }
  ];

$done({body: JSON.stringify(obj)});

