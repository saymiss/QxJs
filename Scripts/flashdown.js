/*
unlock vip by saymiss

链接：http://bbs.flashdown365.com/download.html

[rewrite_local]
# 闪电下载
^http:\/\/app\.flashdown365\.com\/ios\/login url script-response-body saymiss/flashdown.js

[mitm]
app.flashdown365.com
*/

var obj = JSON.parse($response.body);

obj.body.isvip = true;

$done({body: JSON.stringify(obj)});
