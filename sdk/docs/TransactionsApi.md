# YapilyApi.TransactionsApi

All URIs are relative to *http://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransactionsUsingGET**](TransactionsApi.md#getTransactionsUsingGET) | **GET** /accounts/{accountId}/transactions | Get account transactions



## getTransactionsUsingGET

> ApiListResponseOfTransaction getTransactionsUsingGET(consent, accountId, opts)

Get account transactions

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YapilyApi.TransactionsApi();
let consent = "consent_example"; // String | Consent Token
let accountId = "accountId_example"; // String | accountId
let opts = {
  '_with': ["null"], // [String] | with
  'from': "from_example", // String | from
  'before': "before_example", // String | before
  'limit': 56, // Number | limit
  'sort': "sort_example", // String | sort
  'offset': 56 // Number | offset
};
apiInstance.getTransactionsUsingGET(consent, accountId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consent** | **String**| Consent Token | 
 **accountId** | **String**| accountId | 
 **_with** | [**[String]**](String.md)| with | [optional] 
 **from** | **String**| from | [optional] 
 **before** | **String**| before | [optional] 
 **limit** | **Number**| limit | [optional] 
 **sort** | **String**| sort | [optional] 
 **offset** | **Number**| offset | [optional] 

### Return type

[**ApiListResponseOfTransaction**](ApiListResponseOfTransaction.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

