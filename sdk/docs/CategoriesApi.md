# YapilyApi.CategoriesApi

All URIs are relative to *https://api.yapily.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCategoriesUsingGET**](CategoriesApi.md#getCategoriesUsingGET) | **GET** /categories/{country} | Retrieves a list of categories returned by the Yapily Categorisation engine for a given locale



## getCategoriesUsingGET

> ApiListResponseOfCategory getCategoriesUsingGET(country)

Retrieves a list of categories returned by the Yapily Categorisation engine for a given locale

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

var apiInstance = new YapilyApi.CategoriesApi();
var country = "country_example"; // String | country
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCategoriesUsingGET(country, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **String**| country | 

### Return type

[**ApiListResponseOfCategory**](ApiListResponseOfCategory.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

