/*
unlock In-app purchase by saymiss

链接：http://mrw.so/4nUG9b
版本：Appstore v3.1

[rewrite_local]
# MAGE-魔法特效相机
# 拷贝此段到本地，用完后禁用
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body saymiss/MAGE.js

[mitm]  
buy.itunes.apple.com
*/

var obj = JSON.parse($response.body);
var bundle_id = obj.receipt["bundle_id"];

if (bundle_id == "org.skydomain.magecamera") {
  obj = {
 "status": 0,
 "environment": "Production",
 "receipt": {
  "receipt_type": "Production",
  "app_item_id": 1387462044,
  "receipt_creation_date": "2020-02-18 09:49:03 Etc/GMT",
  "bundle_id": "org.skydomain.magecamera",
  "original_purchase_date": "2020-02-18 09:34:08 Etc/GMT",
  "in_app": [
   {
    "quantity": "1",
    "purchase_date_ms": "1582018901000",
    "expires_date": "2088-02-21 09:41:41 Etc/GMT",
    "expires_date_pst": "2088-02-21 01:41:41 America/Los_Angeles",
    "is_in_intro_offer_period": "false",
    "transaction_id": "110000691232002",
    "is_trial_period": "true",
    "original_transaction_id": "110000691232002",
    "purchase_date": "2020-02-18 09:41:41 Etc/GMT",
    "product_id": "org.skydomain.magecamera.highmonthlysubscribe",
    "original_purchase_date_pst": "2020-02-18 01:41:41 America/Los_Angeles",
    "original_purchase_date_ms": "1582018901000",
    "web_order_line_item_id": "110000247502532",
    "expires_date_ms": "9876543210000",
    "purchase_date_pst": "2020-02-18 01:41:41 America/Los_Angeles",
    "original_purchase_date": "2020-02-18 09:41:41 Etc/GMT"
   }
  ],
  "adam_id": 1387462044,
  "receipt_creation_date_pst": "2020-02-18 01:49:03 America/Los_Angeles",
  "request_date": "2020-02-18 09:49:36 Etc/GMT",
  "request_date_pst": "2020-02-18 01:49:36 America/Los_Angeles",
  "version_external_identifier": 834429882,
  "request_date_ms": "1582019376417",
  "original_purchase_date_pst": "2020-02-18 01:34:08 America/Los_Angeles",
  "application_version": "4.0",
  "original_purchase_date_ms": "1582018448000",
  "receipt_creation_date_ms": "1582019343000",
  "original_application_version": "4.0",
  "download_id": 31067879504158
 },
 "pending_renewal_info": [
  {
   "product_id": "org.skydomain.magecamera.highmonthlysubscribe",
   "original_transaction_id": "110000691232002",
   "auto_renew_product_id": "org.skydomain.magecamera.highmonthlysubscribe",
   "auto_renew_status": "1"
  }
 ],
 "latest_receipt_info": [
  {
   "quantity": "1",
   "purchase_date_ms": "1582018901000",
   "expires_date": "2088-02-21 09:41:41 Etc/GMT",
   "expires_date_pst": "2088-02-21 01:41:41 America/Los_Angeles",
   "is_in_intro_offer_period": "false",
   "transaction_id": "110000691232002",
   "is_trial_period": "true",
   "original_transaction_id": "110000691232002",
   "purchase_date": "2020-02-18 09:41:41 Etc/GMT",
   "product_id": "org.skydomain.magecamera.highmonthlysubscribe",
   "original_purchase_date_pst": "2020-02-18 01:41:41 America/Los_Angeles",
   "subscription_group_identifier": "20455982",
   "original_purchase_date_ms": "1582018901000",
   "web_order_line_item_id": "110000247502532",
   "expires_date_ms": "9876543210000",
   "purchase_date_pst": "2020-02-18 01:41:41 America/Los_Angeles",
   "original_purchase_date": "2020-02-18 09:41:41 Etc/GMT"
  }
 ],
 "latest_receipt": "MIIUKAYJKoZIhvcNAQcCoIIUGTCCFBUCAQExCzAJBgUrDgMCGgUAMIIDyQYJKoZIhvcNAQcBoIIDugSCA7YxggOyMAoCARQCAQEEAgwAMAsCARkCAQEEAwIBAzAMAgEKAgEBBAQWAjQrMAwCAQ4CAQEEBAICAJ8wDQIBAwIBAQQFDAM0LjAwDQIBDQIBAQQFAgMB1SgwDQIBEwIBAQQFDAM0LjAwDgIBAQIBAQQGAgRSsv2cMA4CAQkCAQEEBgIEUDI1MzAOAgELAgEBBAYCBAcGLqcwDgIBEAIBAQQGAgQxvGO6MBACAQ8CAQEECAIGHEGN6/keMBQCAQACAQEEDAwKUHJvZHVjdGlvbjAYAgEEAgECBBALnMcgo4pRPweflgBUHvJWMBwCAQUCAQEEFGUXrUQTbMuOGLP2EKEAOPgdX7EWMB4CAQgCAQEEFhYUMjAyMC0wMi0xOFQwOTo0OTowM1owHgIBDAIBAQQWFhQyMDIwLTAyLTE4VDA5OjQ5OjM2WjAeAgESAgEBBBYWFDIwMjAtMDItMThUMDk6MzQ6MDhaMCICAQICAQEEGgwYb3JnLnNreWRvbWFpbi5tYWdlY2FtZXJhMEACAQcCAQEEOIOvNHkfl+yHX0YG7E+z3GSG+WxU35O86/3w4UvYLdbLoNmhR08mK22Nntj8pbL2BjwaaDk3UbUiMEoCAQYCAQEEQk6iU58awpBQL9yATFc6KP5CR+RPuw8xivCKqaV5765VzBI+9759sa8JV+CZtMOjrHLr101YPz+sxrTx7vi2meSIiTCCAZoCARECAQEEggGQMYIBjDALAgIGrQIBAQQCDAAwCwICBrACAQEEAhYAMAsCAgayAgEBBAIMADALAgIGswIBAQQCDAAwCwICBrQCAQEEAgwAMAsCAga1AgEBBAIMADALAgIGtgIBAQQCDAAwDAICBqUCAQEEAwIBATAMAgIGqwIBAQQDAgEDMAwCAgaxAgEBBAMCAQEwDAICBrcCAQEEAwIBADAPAgIGrgIBAQQGAgRWOOyBMBECAgavAgEBBAgCBmQLba12xDAaAgIGpwIBAQQRDA8xMTAwMDA2OTEyMzIwMDIwGgICBqkCAQEEEQwPMTEwMDAwNjkxMjMyMDAyMB8CAgaoAgEBBBYWFDIwMjAtMDItMThUMDk6NDE6NDFaMB8CAgaqAgEBBBYWFDIwMjAtMDItMThUMDk6NDE6NDFaMB8CAgasAgEBBBYWFDIwMjAtMDItMjFUMDk6NDE6NDFaMDgCAgamAgEBBC8MLW9yZy5za3lkb21haW4ubWFnZWNhbWVyYS5oaWdobW9udGhseXN1YnNjcmliZaCCDmUwggV8MIIEZKADAgECAggO61eH554JjTANBgkqhkiG9w0BAQUFADCBljELMAkGA1UEBhMCVVMxEzARBgNVBAoMCkFwcGxlIEluYy4xLDAqBgNVBAsMI0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zMUQwQgYDVQQDDDtBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9ucyBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTAeFw0xNTExMTMwMjE1MDlaFw0yMzAyMDcyMTQ4NDdaMIGJMTcwNQYDVQQDDC5NYWMgQXBwIFN0b3JlIGFuZCBpVHVuZXMgU3RvcmUgUmVjZWlwdCBTaWduaW5nMSwwKgYDVQQLDCNBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9uczETMBEGA1UECgwKQXBwbGUgSW5jLjELMAkGA1UEBhMCVVMwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQClz4H9JaKBW9aH7SPaMxyO4iPApcQmyz3Gn+xKDVWG/6QC15fKOVRtfX+yVBidxCxScY5ke4LOibpJ1gjltIhxzz9bRi7GxB24A6lYogQ+IXjV27fQjhKNg0xbKmg3k8LyvR7E0qEMSlhSqxLj7d0fmBWQNS3CzBLKjUiB91h4VGvojDE2H0oGDEdU8zeQuLKSiX1fpIVK4cCc4Lqku4KXY/Qrk8H9Pm/KwfU8qY9SGsAlCnYO3v6Z/v/Ca/VbXqxzUUkIVonMQ5DMjoEC0KCXtlyxoWlph5AQaCYmObgdEHOwCl3Fc9DfdjvYLdmIHuPsB8/ijtDT+iZVge/iA0kjAgMBAAGjggHXMIIB0zA/BggrBgEFBQcBAQQzMDEwLwYIKwYBBQUHMAGGI2h0dHA6Ly9vY3NwLmFwcGxlLmNvbS9vY3NwMDMtd3dkcjA0MB0GA1UdDgQWBBSRpJz8xHa3n6CK9E31jzZd7SsEhTAMBgNVHRMBAf8EAjAAMB8GA1UdIwQYMBaAFIgnFwmpthhgi+zruvZHWcVSVKO3MIIBHgYDVR0gBIIBFTCCAREwggENBgoqhkiG92NkBQYBMIH+MIHDBggrBgEFBQcCAjCBtgyBs1JlbGlhbmNlIG9uIHRoaXMgY2VydGlmaWNhdGUgYnkgYW55IHBhcnR5IGFzc3VtZXMgYWNjZXB0YW5jZSBvZiB0aGUgdGhlbiBhcHBsaWNhYmxlIHN0YW5kYXJkIHRlcm1zIGFuZCBjb25kaXRpb25zIG9mIHVzZSwgY2VydGlmaWNhdGUgcG9saWN5IGFuZCBjZXJ0aWZpY2F0aW9uIHByYWN0aWNlIHN0YXRlbWVudHMuMDYGCCsGAQUFBwIBFipodHRwOi8vd3d3LmFwcGxlLmNvbS9jZXJ0aWZpY2F0ZWF1dGhvcml0eS8wDgYDVR0PAQH/BAQDAgeAMBAGCiqGSIb3Y2QGCwEEAgUAMA0GCSqGSIb3DQEBBQUAA4IBAQANphvTLj3jWysHbkKWbNPojEMwgl/gXNGNvr0PvRr8JZLbjIXDgFnf4+LXLgUUrA3btrj+/DUufMutF2uOfx/kd7mxZ5W0E16mGYZ2+FogledjjA9z/Ojtxh+umfhlSFyg4Cg6wBA3LbmgBDkfc7nIBf3y3n8aKipuKwH8oCBc2et9J6Yz+PWY4L5E27FMZ/xuCk/J4gao0pfzp45rUaJahHVl0RYEYuPBX/UIqc9o2ZIAycGMs/iNAGS6WGDAfK+PdcppuVsq1h1obphC9UynNxmbzDscehlD86Ntv0hgBgw2kivs3hi1EdotI9CO/KBpnBcbnoB7OUdFMGEvxxOoMIIEIjCCAwqgAwIBAgIIAd68xDltoBAwDQYJKoZIhvcNAQEFBQAwYjELMAkGA1UEBhMCVVMxEzARBgNVBAoTCkFwcGxlIEluYy4xJjAkBgNVBAsTHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MRYwFAYDVQQDEw1BcHBsZSBSb290IENBMB4XDTEzMDIwNzIxNDg0N1oXDTIzMDIwNzIxNDg0N1owgZYxCzAJBgNVBAYTAlVTMRMwEQYDVQQKDApBcHBsZSBJbmMuMSwwKgYDVQQLDCNBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9uczFEMEIGA1UEAww7QXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDKOFSmy1aqyCQ5SOmM7uxfuH8mkbw0U3rOfGOAYXdkXqUHI7Y5/lAtFVZYcC1+xG7BSoU+L/DehBqhV8mvexj/avoVEkkVCBmsqtsqMu2WY2hSFT2Miuy/axiV4AOsAX2XBWfODoWVN2rtCbauZ81RZJ/GXNG8V25nNYB2NqSHgW44j9grFU57Jdhav06DwY3Sk9UacbVgnJ0zTlX5ElgMhrgWDcHld0WNUEi6Ky3klIXh6MSdxmilsKP8Z35wugJZS3dCkTm59c3hTO/AO0iMpuUhXf1qarunFjVg0uat80YpyejDi+l5wGphZxWy8P3laLxiX27Pmd3vG2P+kmWrAgMBAAGjgaYwgaMwHQYDVR0OBBYEFIgnFwmpthhgi+zruvZHWcVSVKO3MA8GA1UdEwEB/wQFMAMBAf8wHwYDVR0jBBgwFoAUK9BpR5R2Cf70a40uQKb3R01/CF4wLgYDVR0fBCcwJTAjoCGgH4YdaHR0cDovL2NybC5hcHBsZS5jb20vcm9vdC5jcmwwDgYDVR0PAQH/BAQDAgGGMBAGCiqGSIb3Y2QGAgEEAgUAMA0GCSqGSIb3DQEBBQUAA4IBAQBPz+9Zviz1smwvj+4ThzLoBTWobot9yWkMudkXvHcs1Gfi/ZptOllc34MBvbKuKmFysa/Nw0Uwj6ODDc4dR7Txk4qjdJukw5hyhzs+r0ULklS5MruQGFNrCk4QttkdUGwhgAqJTleMa1s8Pab93vcNIx0LSiaHP7qRkkykGRIZbVf1eliHe2iK5IaMSuviSRSqpd1VAKmuu0swruGgsbwpgOYJd+W+NKIByn/c4grmO7i77LpilfMFY0GCzQ87HUyVpNur+cmV6U/kTecmmYHpvPm0KdIBembhLoz2IYrF+Hjhga6/05Cdqa3zr/04GpZnMBxRpVzscYqCtGwPDBUfMIIEuzCCA6OgAwIBAgIBAjANBgkqhkiG9w0BAQUFADBiMQswCQYDVQQGEwJVUzETMBEGA1UEChMKQXBwbGUgSW5jLjEmMCQGA1UECxMdQXBwbGUgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkxFjAUBgNVBAMTDUFwcGxlIFJvb3QgQ0EwHhcNMDYwNDI1MjE0MDM2WhcNMzUwMjA5MjE0MDM2WjBiMQswCQYDVQQGEwJVUzETMBEGA1UEChMKQXBwbGUgSW5jLjEmMCQGA1UECxMdQXBwbGUgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkxFjAUBgNVBAMTDUFwcGxlIFJvb3QgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDkkakJH5HbHkdQ6wXtXnmELes2oldMVeyLGYne+Uts9QerIjAC6Bg++FAJ039BqJj50cpmnCRrEdCju+QbKsMflZ56DKRHi1vUFjczy8QPTc4UadHJGXL1XQ7Vf1+b8iUDulWPTV0N8WQ1IxVLFVkds5T39pyez1C6wVhQZ48ItCD3y6wsIG9wtj8BMIy3Q88PnT3zK0koGsj+zrW5DtleHNbLPbU6rfQPDgCSC7EhFi501TwN22IWq6NxkkdTVcGvL0Gz+PvjcM3mo0xFfh9Ma1CWQYnEdGILEINBhzOKgbEwWOxaBDKMaLOPHd5lc/9nXmW8Sdh2nzMUZaF3lMktAgMBAAGjggF6MIIBdjAOBgNVHQ8BAf8EBAMCAQYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUK9BpR5R2Cf70a40uQKb3R01/CF4wHwYDVR0jBBgwFoAUK9BpR5R2Cf70a40uQKb3R01/CF4wggERBgNVHSAEggEIMIIBBDCCAQAGCSqGSIb3Y2QFATCB8jAqBggrBgEFBQcCARYeaHR0cHM6Ly93d3cuYXBwbGUuY29tL2FwcGxlY2EvMIHDBggrBgEFBQcCAjCBthqBs1JlbGlhbmNlIG9uIHRoaXMgY2VydGlmaWNhdGUgYnkgYW55IHBhcnR5IGFzc3VtZXMgYWNjZXB0YW5jZSBvZiB0aGUgdGhlbiBhcHBsaWNhYmxlIHN0YW5kYXJkIHRlcm1zIGFuZCBjb25kaXRpb25zIG9mIHVzZSwgY2VydGlmaWNhdGUgcG9saWN5IGFuZCBjZXJ0aWZpY2F0aW9uIHByYWN0aWNlIHN0YXRlbWVudHMuMA0GCSqGSIb3DQEBBQUAA4IBAQBcNplMLXi37Yyb3PN3m/J20ncwT8EfhYOFG5k9RzfyqZtAjizUsZAS2L70c5vu0mQPy3lPNNiiPvl4/2vIB+x9OYOLUyDTOMSxv5pPCmv/K/xZpwUJfBdAVhEedNO3iyM7R6PVbyTi69G3cN8PReEnyvFteO3ntRcXqNx+IjXKJdXZD9Zr1KIkIxH3oayPc4FgxhtbCS+SsvhESPBgOJ4V9T0mZyCKM2r3DYLP3uujL/lTaltkwGMzd/c6ByxW69oPIQ7aunMZT7XZNn/Bh1XZp5m5MkL72NVxnn6hUrcbvZNCJBIqxw8dtk2cXmPIS4AXUKqK1drk/NAJBzewdXUhMYIByzCCAccCAQEwgaMwgZYxCzAJBgNVBAYTAlVTMRMwEQYDVQQKDApBcHBsZSBJbmMuMSwwKgYDVQQLDCNBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9uczFEMEIGA1UEAww7QXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkCCA7rV4fnngmNMAkGBSsOAwIaBQAwDQYJKoZIhvcNAQEBBQAEggEAawAgf/Hj82JesrQQIpZ96+cvc955g5j92k0uqrpo7xzGaTlssNinUiaFnMCDIjOAgiaL6ZX0YM44iGoGyy++PVWdpxbosEND1KXyWHnW+xxeQ5brj3z+E2gZOjWA3X5eo33Ll9wJxT8/lqwOGHwWS3p2AF+67vlBvHDv55PCLzMZTgwGMo0e1ZHLcFD4eTBs8g7rRQIsGJWDw6F1sNIytXVtnXlISYnnuR8Y+6YR7w/+7mTp734lOW8s3gdbN+RWRvvsoo+LBnYlcKA3TbT3nLhGQfcL7RnexSWNNxYc+AQmuJj1ohZHn1BS4Pk945dDlAR5VV6odHDrQqST7Bsmmg=="
};
}

$done({body:JSON.stringify(obj)});
