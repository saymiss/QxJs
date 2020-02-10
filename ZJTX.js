/*
by 蔠點丶 

[rewrite_local]
# 指尖特效
^https:\/\/www\.jidiandian\.cn\/finevideo-account\/api\/user\/detail url script-response-body panxsn/QxJs/ZJTX.js

[mitm]  
www.jidiandian.cn

*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const path = '/finevideo-account/api/user/detail';

if (url.indexOf(path) != -1) {
	obj.data["vip"] = 1;
	body = JSON.stringify(obj);
}

$done({body});