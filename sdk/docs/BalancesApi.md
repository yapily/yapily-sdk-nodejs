# YapilyApi.BalancesApi

All URIs are relative to *https://api.yapily.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountBalancesUsingGET**](BalancesApi.md#getAccountBalancesUsingGET) | **GET** /accounts/{accountId}/balances | Get account balances



## getAccountBalancesUsingGET

> ApiResponseOfBalances getAccountBalancesUsingGET(consent, accountId)

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
var consent = "consent_example"; // String | Consent Token
var accountId = "accountId_example"; // String | accountId
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccountBalancesUsingGET(consent, accountId, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consent** | **String**| Consent Token | 
 **accountId** | **String**| accountId | 

### Return type

[**ApiResponseOfBalances**](ApiResponseOfBalances.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

