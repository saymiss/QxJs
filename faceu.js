/*
unlock vip by panxsn

[rewrite_local]
# 轻颜相机
^https:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info url script-response-body panxsn/BeautyCam.js

[mitm]
commerce-api.faceu.mobi
*/

body = $response.body.replace(/"end_time":\d+/g, "\"end_time\":9876543210").replace(/"flag":\w+/g, "\"flag\":true");

$done({body});
