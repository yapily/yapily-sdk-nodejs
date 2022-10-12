# YapilyApi.ApplicationApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApplicationMe**](ApplicationApi.md#getApplicationMe) | **GET** /me | Get Application Self



## getApplicationMe

> Application getApplicationMe()

Get Application Self

Get the information about the institutions configured in your application

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.ApplicationApi();
apiInstance.getApplicationMe((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Application**](Application.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

