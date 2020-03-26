/*
unlock pro by panxsn

[rewrite_local]
# 克拉壁纸Pro v4.7（旧版）
^https:\/\/claritywallpaper\.com\/clarity\/api\/special url script-response-body panxsn/claritywallpaper.js

[mitm]
claritywallpaper.com
*/

body = $response.body.replace(/"isFree":\w+/g, "\"isFree\":true");

$done({body});
