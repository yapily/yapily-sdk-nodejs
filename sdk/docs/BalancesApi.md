# YapilyApi.BalancesApi

All URIs are relative to *https://api.yapily.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountBalancesUsingGET**](BalancesApi.md#getAccountBalancesUsingGET) | **GET** /accounts/{accountId}/balances | Get account balances



## getAccountBalancesUsingGET

> ApiResponseOfBalances getAccountBalancesUsingGET(accountId, opts)

Get account balances

### Example

```javascript
var YapilyApi = require('@yapily/yapily-api');
var defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: tokenAuth
var tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new YapilyApi.BalancesApi();
var accountId = "accountId_example"; // String | Account Id
var opts = {
  'xYapilyApiVersion': "xYapilyApiVersion_example", // String | Api Version
  'consent': "consent_example", // String | Consent Token
  'psuId': "psuId_example", // String | PSU ID
  'psuCorporateId': "psuCorporateId_example", // String | PSU ID CORPORATE
  'psuIpAddress': "psuIpAddress_example" // String | PSU IP ADDRESS
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccountBalancesUsingGET(accountId, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| Account Id | 
 **xYapilyApiVersion** | **String**| Api Version | [optional] 
 **consent** | **String**| Consent Token | [optional] 
 **psuId** | **String**| PSU ID | [optional] 
 **psuCorporateId** | **String**| PSU ID CORPORATE | [optional] 
 **psuIpAddress** | **String**| PSU IP ADDRESS | [optional] 

### Return type

[**ApiResponseOfBalances**](ApiResponseOfBalances.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

