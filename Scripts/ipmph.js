/*
unlock paid ebook by saymiss

[rewrite_local]
# 人卫临床助手-解锁付费电子书
^https:\/\/ccdas\.ipmph\.com\/App\/Pmph\/AppEbookDetail url script-response-body saymiss/ipmph.js

[mitm]  
ccdas.ipmph.com
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

obj.result.isPay = "Y";
obj.result.eBookPaygm.vippay = "0.0";
obj.result.eBookPaygm.pay = "0.0";

body = JSON.stringify(obj);

$done({body});
