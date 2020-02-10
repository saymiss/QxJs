/*
by 蔠點丶 

[rewrite_local]
# 咿啦看书
^https:\/\/api\.ellabook\.cn\/rest\/api\/service url script-response-body panxsn/YiLaKanShu.js

[mitm]  
api.ellabook.cn

*/

body = $response.body.replace(/ip":"NO"/g, "ip\":\"YES\"").replace(/ip":"VIP_NO"/g, "ip\":\"VIP_YES\"").replace(/code":"\d{10}/g, "code\":\"0x00000000").replace(/status":"\d/g, "status\":\"1");

$done({body});