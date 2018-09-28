# YapilyApi.TransactionsApi

All URIs are relative to *https://api.yapily.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransactionsUsingGET**](TransactionsApi.md#getTransactionsUsingGET) | **GET** /accounts/{accountId}/transactions | Get account transactions


<a name="getTransactionsUsingGET"></a>
# **getTransactionsUsingGET**
> ApiListResponseOfTransaction getTransactionsUsingGET(consent, accountId, opts)

Get account transactions

### Example
```javascript
var YapilyApi = require('yapily_api');
var defaultClient = YapilyApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new YapilyApi.TransactionsApi();

var consent = "consent_example"; // String | Consent Token

var accountId = "accountId_example"; // String | accountId

var opts = { 
  '_with': ["_with_example"] // [String] | with
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTransactionsUsingGET(consent, accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consent** | **String**| Consent Token | 
 **accountId** | **String**| accountId | 
 **_with** | [**[String]**](String.md)| with | [optional] 

### Return type

[**ApiListResponseOfTransaction**](ApiListResponseOfTransaction.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

