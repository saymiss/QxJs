/*
by saymiss

链接：https://apps.apple.com/cn/app/instapaper/id288545208
版本：7.8.2

[rewrite_local]
# Instapaper
^https:\/\/www\.instapaper\.com\/api\/subscription_status url script-response-body saymiss/Instapaper.js

[mitm]
www.instapaper.com
*/

body = $response.body.replace(/.+/, "ipsubnow=1585151004&ipsubexp=2000000000&ipsub=1");

$done({body});
