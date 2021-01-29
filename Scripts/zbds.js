/*
unlock vip by saymiss

[rewrite_local]
# 装裱大师
^http:\/\/140\.143\.148\.31:7070\/api\/v1\/user\/info url script-response-body saymiss/zbds.js

[mitm]  
140.143.148.31:7070
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

obj.result.viptime = "9876543210";

body = JSON.stringify(obj);

$done({body});
