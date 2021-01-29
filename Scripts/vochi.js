/*
unlock pro by saymiss

链接：http://mrw.so/56dCsD
版本：1.1.9

[rewrite_local]
# VOCHI 特效视频软件
^https:\/\/api\.vochi\.app\/api\/v1\/subscriptions url script-response-body saymiss/vochi.js

[mitm]  
api.vochi.app
*/

var obj = JSON.parse($response.body);

obj = 9876543210000;

$done({body: JSON.stringify(obj)});
