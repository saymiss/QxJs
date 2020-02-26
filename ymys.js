/*
unlock vip by panxsn

链接：https://v.dzdv.cn/app/

[rewrite_local]
# 云梦影视
^https:\/\/v\.dzdv\.cn\/\/api\.php\/provide\/app\/ url script-response-body panxsn/ymys.js

[mitm]
v.dzdv.cn
*/

var url = $request.url;
var obj = JSON.parse($response.body);

const path = "login";

if (url.indexOf(path) != -1){
obj.user_end_time = 9876543210;
obj.user_points = 88888;
}

$done({body: JSON.stringify(obj)});
