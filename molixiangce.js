/*
unlock vip by panxsn

[rewrite_local]
# 魔力相册
^https:\/\/n\.molixiangce\.com\/index\/newapi\/(getUserData|getMemberData) url script-response-body panxsn/molixiangce.js

[mitm]
n.molixiangce.com
*/

var obj = JSON.parse($response.body);

obj.data.levelName = "钻石会员";
obj.data.levelType = 2;

$done({body: JSON.stringify(obj)});
