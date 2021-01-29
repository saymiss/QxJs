/*
unlock vip by saymiss

链接：http://t.cn/AilGVWcb
版本：Appstore v2.4.7

[rewrite_local]
# 男人装
^http:\/\/ssl4xyy\.enrz\.com\/api\/user4app\/myinfo url script-response-body saymiss/enrz.js

[mitm]
ssl4xyy.enrz.com
*/

var obj = JSON.parse($response.body);

obj.result.IsVip = 1;
obj.result.ExpTime = "/Date(9876543210000)/";

$done({body: JSON.stringify(obj)});
