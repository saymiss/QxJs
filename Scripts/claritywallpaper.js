/*
unlock pro by saymiss

[rewrite_local]
# 克拉壁纸Pro v4.7.4（旧版）
^https:\/\/claritywallpaper\.com\/clarity\/api\/special url script-response-body saymiss/claritywallpaper.js

[mitm]
claritywallpaper.com
*/

body = $response.body.replace(/"isFree":\w+/g, "\"isFree\":true");

$done({body});
