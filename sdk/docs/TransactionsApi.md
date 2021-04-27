# YapilyApi.TransactionsApi

All URIs are relative to *https://api.yapily.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransactionsUsingGET**](TransactionsApi.md#getTransactionsUsingGET) | **GET** /accounts/{accountId}/transactions | Get account transactions



## getTransactionsUsingGET

> ApiListResponseOfTransaction getTransactionsUsingGET(consent, accountId, opts)

Get account transactions

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

var apiInstance = new YapilyApi.TransactionsApi();
var consent = "consent_example"; // String | Consent Token
var accountId = "accountId_example"; // String | accountId
var opts = {
  'psuId': "psuId_example", // String | PSU ID
  'psuCorporateId': "psuCorporateId_example", // String | PSU ID CORPORATE
  'psuIpAddress': "psuIpAddress_example", // String | PSU IP ADDRESS
  '_with': ["null"], // [String] | with
  'from': "from_example", // String | from
  'before': "before_example", // String | before
  'limit': 56, // Number | limit
  'sort': "sort_example", // String | sort
  'offset': 56, // Number | offset
  'cursor': "cursor_example" // String | cursor
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
 **psuId** | **String**| PSU ID | [optional] 
 **psuCorporateId** | **String**| PSU ID CORPORATE | [optional] 
 **psuIpAddress** | **String**| PSU IP ADDRESS | [optional] 
 **_with** | [**[String]**](String.md)| with | [optional] 
 **from** | **String**| from | [optional] 
 **before** | **String**| before | [optional] 
 **limit** | **Number**| limit | [optional] 
 **sort** | **String**| sort | [optional] 
 **offset** | **Number**| offset | [optional] 
 **cursor** | **String**| cursor | [optional] 

### Return type

[**ApiListResponseOfTransaction**](ApiListResponseOfTransaction.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

