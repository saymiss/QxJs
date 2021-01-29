/*
by saymiss

[rewrite_local]
# MolyCam and VaporCam（两个APP）
^https:\/\/pay\.wecut\.com\/apple\/(iosVerifyReceipt|iosAppVerifyReceipt)\.php url script-response-body saymiss/MolyCam_VaporCam.js

[mitm]  
pay.wecut.com
*/

var obj = JSON.parse($response.body);
obj=
{
 "msg": "处理成功",
 "data": {
  "isValid": 1,
  "expiresTs": 9876543210
 },
 "code": 0
};
$done({body: JSON.stringify(obj)});

