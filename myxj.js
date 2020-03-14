/*
by panxsn

数据来源于iosplayer公众号，感谢鸣一大佬

软件来源于Appstore，版本 v9.2.55

[rewrite_local]
# 美颜相机 (点击“找回已购素材”即可永久恢复素材，数据源于iosplayer)
^https:\/\/api\.meiyan\.com\/iap\/verify\.json url script-response-body panxsn/myxj.js

[mitm]  
api.meiyan.com
*/

var obj = JSON.parse($response.body);
obj=
{"meta":{"app_validate_result":0, "bundleName":"pay","code":0,"msg":"success", "enabled":true,"paid":true,"user":null,"id":56990,"subscription":0,"request_uri":"\/iap\/verify","error":""},"response":{"status":1}};

$done({body: JSON.stringify(obj)});

