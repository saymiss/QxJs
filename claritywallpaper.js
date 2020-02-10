/*
claritywallpaper unlock pro
by 蔠點丶

[rewrite_local]
# 克拉壁纸Pro
^https:\/\/claritywallpaper\.com\/clarity\/api\/special url script-response-body panxsn/claritywallpaper.js
[mitm]
claritywallpaper.com
*/

body = $response.body.replace(/"isFree":\w+/g, "\"isFree\":true");

$done({body});