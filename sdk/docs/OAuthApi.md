# YapilyApi.OAuthApi

All URIs are relative to *http://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**oauthToken**](OAuthApi.md#oauthToken) | **POST** /oauth/token | Retrieve Access Token



## oauthToken

> YapilyAccessToken oauthToken(grantType)

Retrieve Access Token

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.OAuthApi();
let grantType = "'client_credentials'"; // String | Grant type
apiInstance.oauthToken(grantType, (error, data, response) => {
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
 **grantType** | **String**| Grant type | [default to &#39;client_credentials&#39;]

### Return type

[**YapilyAccessToken**](YapilyAccessToken.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json, application/xml

