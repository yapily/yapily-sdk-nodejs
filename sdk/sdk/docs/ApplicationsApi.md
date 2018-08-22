# YapilyApi.ApplicationsApi

All URIs are relative to *https://api.yapily.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApplicationMeUsingGET**](ApplicationsApi.md#getApplicationMeUsingGET) | **GET** /me | Returns the details of the application that owns the request credentials


<a name="getApplicationMeUsingGET"></a>
# **getApplicationMeUsingGET**
> Application getApplicationMeUsingGET()

Returns the details of the application that owns the request credentials

### Example
```javascript
var YapilyApi = require('yapily_api');
var defaultClient = YapilyApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new YapilyApi.ApplicationsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getApplicationMeUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Application**](Application.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

