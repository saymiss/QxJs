/*
by saymiss

[rewrite_local]
# 墨墨背单词 v3.5.4（旧版）
^https:\/\/api\.maimemo\.com\/api\/v1\/users\/info url script-response-body saymiss/mmbdc.js
# 去除系统检测
^https:\/\/api\.maimemo\.com\/api\/v1\/system\/check url reject

[mitm]
api.maimemo.com
*/

var obj = JSON.parse($response.body);

obj.data.user.inf_level = "66";
obj.data.user.level = "66";
obj.data.user.inf_pk_level = "66";
obj.data.user.inf_words_limit = "888888";

$done({body: JSON.stringify(obj)});
