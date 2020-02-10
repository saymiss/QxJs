/*
unlock vip by 蔠點丶

链接：http://mrw.so/4sSX6U
版本：Appstore v1.2.1

[rewrite_local]
# 儿童睡前故事
^https:\/\/www\.babybooks\.top\/v0\/(series|profile) url script-response-body panxsn/QxJs/babybooks.js

[mitm]
www.babybooks.top
*/

body = $response.body.replace(/is_free":\d/g, "is_free\":1").replace(/is_vip":\w+/g, "is_vip\":true").replace(/vip_exp_time":\d+/g, "vip_exp_time\":9876543210");

$done({body});