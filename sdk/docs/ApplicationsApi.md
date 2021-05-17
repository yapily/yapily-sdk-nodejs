# YapilyApi.ApplicationsApi

All URIs are relative to *https://api.yapily.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApplicationMeUsingGET**](ApplicationsApi.md#getApplicationMeUsingGET) | **GET** /me | Returns the details of the application that owns the request credentials



## getApplicationMeUsingGET

> Application getApplicationMeUsingGET(opts)

Returns the details of the application that owns the request credentials

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

var apiInstance = new YapilyApi.ApplicationsApi();
var opts = {
  'xYapilyApiVersion': "xYapilyApiVersion_example" // String | Api Version
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getApplicationMeUsingGET(opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xYapilyApiVersion** | **String**| Api Version | [optional] 

### Return type

[**Application**](Application.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

