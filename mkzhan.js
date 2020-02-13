/*
unlock vip by panxsn

[rewrite_local]
# 漫客栈-旧版v2.4.6可用
^https:\/\/member\.mkzcdn\.com\/user\/funds\/info url script-response-body panxsn/mkzhan.js

[mitm]
member.mkzcdn.com
*/

var obj = JSON.parse($response.body);

obj = 
{
  "message" : "会员资金信息",
  "data" : {
    "ticket" : "9999",
    "vip_end_time" : "9876543210",
    "card_count" : "9999",
    "is_vip" : "1",
    "vip_type" : "1",
    "gold" : "9999",
    "integral" : "9999",
    "read_card_end_time" : "9876543210",
    "vip_baron_time" : "9876543210",
    "vip_viscount_time" : "9876543210"
  },
  "code" : "200"
};

$done({body:JSON.stringify(obj)});
