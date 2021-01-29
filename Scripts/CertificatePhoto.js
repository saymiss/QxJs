/*
unlock vip by saymiss
下载地址：http://mrw.so/4YgQbP

[rewrite_local]
# 智能证件照相机
^http:\/\/certificate\.yiyongcad\.com\/api\/v4\/(virtualactregister|memprofile) url script-response-body saymiss/CertificatePhoto.js

MITM = certificate.yiyongcad.com
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

obj.userinfo.vip_deadline = 9876543210;
obj.userinfo.vip = [
   {
    "id": 9686238,
    "auth_type": 1,
    "auth_value": 9876543210
   }
  ];
obj.userinfo.vip_valid = 1;

body = JSON.stringify(obj);

$done({body});
