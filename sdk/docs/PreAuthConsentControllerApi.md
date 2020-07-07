# YapilyApi.PreAuthConsentControllerApi

All URIs are relative to *https://api.yapily.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPreAuthorisationUsingPOST**](PreAuthConsentControllerApi.md#createPreAuthorisationUsingPOST) | **POST** /pre-auth-requests | Initiate request for user to pre authorise



## createPreAuthorisationUsingPOST

> ApiResponseOfAuthorisationRequestResponse createPreAuthorisationUsingPOST(preAuthorisationRequest)

Initiate request for user to pre authorise

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

var apiInstance = new YapilyApi.PreAuthConsentControllerApi();
var preAuthorisationRequest = new YapilyApi.PreAuthorisationRequest(); // PreAuthorisationRequest | preAuthorisationRequest
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPreAuthorisationUsingPOST(preAuthorisationRequest, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **preAuthorisationRequest** | [**PreAuthorisationRequest**](PreAuthorisationRequest.md)| preAuthorisationRequest | 

### Return type

[**ApiResponseOfAuthorisationRequestResponse**](ApiResponseOfAuthorisationRequestResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

