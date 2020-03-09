# YapilyApi.InstitutionsOpenDataApi

All URIs are relative to *http://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getATMDataUsingGET**](InstitutionsOpenDataApi.md#getATMDataUsingGET) | **GET** /institutions/{institutionId}/atms | Retrieves data about all ATMs of the selected institution
[**getPersonalCurrentAccountsUsingGET**](InstitutionsOpenDataApi.md#getPersonalCurrentAccountsUsingGET) | **GET** /institutions/{institutionId}/personal-current-accounts | Retrieves details of personal current accounts for an institution



## getATMDataUsingGET

> ApiResponseOfListOfATMOpenDataResponse getATMDataUsingGET(institutionId)

Retrieves data about all ATMs of the selected institution

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

var apiInstance = new YapilyApi.InstitutionsOpenDataApi();
var institutionId = "institutionId_example"; // String | institutionId
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getATMDataUsingGET(institutionId, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **institutionId** | **String**| institutionId | 

### Return type

[**ApiResponseOfListOfATMOpenDataResponse**](ApiResponseOfListOfATMOpenDataResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getPersonalCurrentAccountsUsingGET

> ApiResponseOfListOfPersonalCurrentAccountData getPersonalCurrentAccountsUsingGET(institutionId)

Retrieves details of personal current accounts for an institution

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

var apiInstance = new YapilyApi.InstitutionsOpenDataApi();
var institutionId = "institutionId_example"; // String | institutionId
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPersonalCurrentAccountsUsingGET(institutionId, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **institutionId** | **String**| institutionId | 

### Return type

[**ApiResponseOfListOfPersonalCurrentAccountData**](ApiResponseOfListOfPersonalCurrentAccountData.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

