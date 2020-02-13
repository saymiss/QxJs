/*
unlock vip by panxsn

链接：http://t.cn/AiN0mk0G

[rewrite_local]
# 文字视频（开启规则后需重新微信登录）
^https:\/\/a\.aipike\.net\/api\/v1\/oauth\/WECHAT url script-response-body panxsn/wzsp.js

[mitm]  
a.aipike.net
*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

obj.data.folk.serviceEnd = 2088011011;
obj.data.folk.status = "NORMAL";

body = JSON.stringify(obj);

$done({body});
