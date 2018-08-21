# YapilyApi.TransfersApi

All URIs are relative to *https://api.yapily.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPaymentUsingPUT**](TransfersApi.md#createPaymentUsingPUT) | **PUT** /accounts/{accountId}/transfer | Transfer money from one account to another account accessible with the same consent


<a name="createPaymentUsingPUT"></a>
# **createPaymentUsingPUT**
> ApiResponseOfTransferResponse createPaymentUsingPUT(consent, accountId, opts)

Transfer money from one account to another account accessible with the same consent

### Example
```javascript
var YapilyApi = require('yapily_api');
var defaultClient = YapilyApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new YapilyApi.TransfersApi();

var consent = "consent_example"; // String | Consent Token

var accountId = "accountId_example"; // String | accountId

var opts = { 
  'transferRequest': new YapilyApi.TransferRequest(), // TransferRequest | transferRequest
  'raw': true // Boolean | raw
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPaymentUsingPUT(consent, accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consent** | **String**| Consent Token | 
 **accountId** | **String**| accountId | 
 **transferRequest** | [**TransferRequest**](TransferRequest.md)| transferRequest | [optional] 
 **raw** | **Boolean**| raw | [optional] 

### Return type

[**ApiResponseOfTransferResponse**](ApiResponseOfTransferResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

