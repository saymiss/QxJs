/*
unlock vip by saymiss

[rewrite_local]
# 百度云（自用）
^https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user url script-response-body saymiss/BaiduYun.js

[mitm]
pan.baidu.com
*/

var obj = JSON.parse($response.body);

obj= {
 "currenttime": 1560736381,
 "request_id": 3882752806031514000,
 "product_infos": [
  {
   "product_id": "5210897752128663390",
   "end_time": 9876543210,
   "buy_time": "1531907147",
   "cluster": "offlinedl",
   "status": "0",
   "start_time": 1531907147,
   "function_num": 2,
   "buy_description": "离线下载套餐(永久)",
   "product_description": "离线下载套餐(永久)",
   "detail_cluster": "offlinedl",
   "product_name": "offlinedl_permanent"
  },
  {
   "product_id": "15833841862550633768",
   "end_time": 9876543210,
   "buy_time": "1532096265",
   "cluster": "",
   "status": "0",
   "start_time": 1532096265,
   "function_num": 1,
   "buy_description": "广东电信网络体验包",
   "product_description": "广东电信网络体验包",
   "detail_cluster": "",
   "product_name": "gz_telecom_exp"
  },
  {
   "product_name": "svip2_nd",
   "product_description": "",
   "function_num": 0,
   "start_time": 1555603199,
   "buy_description": "",
   "buy_time": 0,
   "product_id": "",
   "auto_upgrade_to_svip": 0,
   "end_time": 9876543210,
   "cluster": "vip",
   "detail_cluster": "svip",
   "status": 0
  }
 ],
 "reminder": {
  "reminderWithContent": [],
  "advertiseContent": [],
  "svip": {
   "leftseconds": 99999999,
   "nextState": "normal"
  }
 }
};

$done({body: JSON.stringify(obj)});
