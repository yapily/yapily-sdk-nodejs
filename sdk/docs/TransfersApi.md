# YapilyApi.TransfersApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transferUsingPUT**](TransfersApi.md#transferUsingPUT) | **PUT** /accounts/{accountId}/transfer | Transfer money from one account to another account accessible with the same consent



## transferUsingPUT

> ApiResponseOfTransferResponse transferUsingPUT(consent, accountId, opts)

Transfer money from one account to another account accessible with the same consent

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

var apiInstance = new YapilyApi.TransfersApi();
var consent = "consent_example"; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
var accountId = "accountId_example"; // String | __Mandatory__. The account Id of the user's bank account.
var opts = {
  'xYapilyApiVersion': "xYapilyApiVersion_example", // String | __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
  'transferRequest': new YapilyApi.TransferRequest() // TransferRequest | transferRequest
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.transferUsingPUT(consent, accountId, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consent** | **String**| __Mandatory__. The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the request. | 
 **accountId** | **String**| __Mandatory__. The account Id of the user&#39;s bank account. | 
 **xYapilyApiVersion** | **String**| __Optional__. Determines the API version to use. Valid values are &#x60;1.0&#x60; or &#x60;2.0-ALPHA&#x60;. Defaults to &#x60;1.0&#x60; | [optional] 
 **transferRequest** | [**TransferRequest**](TransferRequest.md)| transferRequest | [optional] 

### Return type

[**ApiResponseOfTransferResponse**](ApiResponseOfTransferResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

