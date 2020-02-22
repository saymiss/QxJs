/*
unlock vip by panxsn

链接：http://mrw.so/5eT2U5
版本：Appstore v3.1.9

[rewrite_local]
# 配音师-文字转语音助手
^http:\/\/101\.37\.76\.151:8055\/Svip\/SVIP_Existence\.aspx url script-response-body panxsn/pys.js

[mitm]
101.37.76.151:8055
*/

var obj = JSON.parse($response.body);

obj.Code.SVIP_ID = "123456";
obj.Code.Cre_Datetime = "2020-02-02 00:00:00";
obj.Code.Due_Datetime = "2088-08-08 00:00:00";

$done({body: JSON.stringify(obj)});
