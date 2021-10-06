# YapilyApi.IdentityApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getIdentityUsingGET**](IdentityApi.md#getIdentityUsingGET) | **GET** /identity | Get identity



## getIdentityUsingGET

> ApiResponseOfIdentity getIdentityUsingGET(consent, opts)

Get identity

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

var apiInstance = new YapilyApi.IdentityApi();
var consent = "consent_example"; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
var opts = {
  'xYapilyApiVersion': "xYapilyApiVersion_example" // String | __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIdentityUsingGET(consent, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consent** | **String**| __Mandatory__. The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the request. | 
 **xYapilyApiVersion** | **String**| __Optional__. Determines the API version to use. Valid values are &#x60;1.0&#x60; or &#x60;2.0-ALPHA&#x60;. Defaults to &#x60;1.0&#x60; | [optional] 

### Return type

[**ApiResponseOfIdentity**](ApiResponseOfIdentity.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

