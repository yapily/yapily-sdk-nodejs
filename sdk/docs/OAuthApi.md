# YapilyApi.OAuthApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**oauthToken**](OAuthApi.md#oauthToken) | **POST** /oauth/token | Retrieve Access Token


<a name="oauthToken"></a>
# **oauthToken**
> YapilyAccessToken oauthToken(grantType)

Retrieve Access Token

### Example
```javascript
var YapilyApi = require('yapily-api');
var defaultClient = YapilyApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new YapilyApi.OAuthApi();

var grantType = "client_credentials"; // String | Grant type


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.oauthToken(grantType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | **String**| Grant type | [default to client_credentials]

### Return type

[**YapilyAccessToken**](YapilyAccessToken.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

