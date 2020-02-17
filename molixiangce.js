/*
unlock vip by panxsn

[rewrite_local]
# 魔力相册
^https:\/\/n\.molixiangce\.com\/index\/newapi\/(getUserData|getMemberData) url script-response-body panxsn/molixiangce.js

[mitm]
n.molixiangce.com
*/

body = $response.body.replace(/levelName":".*?"/g, "levelName\":\"钻石会员\"").replace(/levelType":\d/g, "levelType\":2");

$done({body});
