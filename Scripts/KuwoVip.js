/*
unlock vip by saymiss

[rewrite_local]
# 酷我音乐解锁VIP和主题
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice|vip\/v2\/theme) url script-response-body saymiss/KuwoVip.js

# 酷我VIP音乐下载
^https?:\/\/musicpay\.kuwo\.cn\/music\.pay\?uid\=\d+ url 302 http://musicpay.kuwo.cn/music.pay?uid=1

MITM = vip1.kuwo.cn
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/vip/v2/user/vip';
const mservice = '/vip/spi/mservice';
const theme = '/vip/v2/theme';

if (url.indexOf(vip) != -1) {
	obj.data["isNewUser"] = "2";
	obj.data["vipExpire"] = "9876453210000";
	obj.data["isYearUser"] = "2";
	obj.data["vipOverSeasExpire"] = "9876543210000";
	obj.data["vip3Expire"] = "9876543210000";
	obj.data["vipmExpire"] = "9876543210000";
	obj.data["vipLuxuryExpire"] = "9876543210000";
	
	body = JSON.stringify(obj);
}

if (url.indexOf(mservice) != -1) {
	obj.data["isVIPMAutoPay"] = 2;
	obj.data["isVIPLuxAutoPay"] = 2;

	body = JSON.stringify(obj);
}

if (url.indexOf(theme) != -1) {
	obj.data.vipTheme.type = "free";
	obj.data.needBieds = null;

	body = JSON.stringify(obj);
}

$done({body});
