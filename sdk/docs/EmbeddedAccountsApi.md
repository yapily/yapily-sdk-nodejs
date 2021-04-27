# YapilyApi.EmbeddedAccountsApi

All URIs are relative to *https://api.yapily.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**initiateEmbeddedAccountRequestUsingPOST**](EmbeddedAccountsApi.md#initiateEmbeddedAccountRequestUsingPOST) | **POST** /embedded-account-auth-requests | Initiate a new embedded account request for user to authorize
[**updateEmbeddedAccountRequestUsingPUT**](EmbeddedAccountsApi.md#updateEmbeddedAccountRequestUsingPUT) | **PUT** /embedded-account-auth-requests/{consentId} | Update an embedded account request with SCA info



## initiateEmbeddedAccountRequestUsingPOST

> ApiResponseOfAuthorisationEmbeddedRequestResponse initiateEmbeddedAccountRequestUsingPOST(accountAuthRequest, opts)

Initiate a new embedded account request for user to authorize

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

var apiInstance = new YapilyApi.EmbeddedAccountsApi();
var accountAuthRequest = new YapilyApi.AccountEmbeddedAuthorisationRequest(); // AccountEmbeddedAuthorisationRequest | accountAuthRequest
var opts = {
  'psuId': "psuId_example", // String | PSU ID
  'psuCorporateId': "psuCorporateId_example", // String | PSU ID CORPORATE
  'psuIpAddress': "psuIpAddress_example" // String | PSU IP ADDRESS
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.initiateEmbeddedAccountRequestUsingPOST(accountAuthRequest, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountAuthRequest** | [**AccountEmbeddedAuthorisationRequest**](AccountEmbeddedAuthorisationRequest.md)| accountAuthRequest | 
 **psuId** | **String**| PSU ID | [optional] 
 **psuCorporateId** | **String**| PSU ID CORPORATE | [optional] 
 **psuIpAddress** | **String**| PSU IP ADDRESS | [optional] 

### Return type

[**ApiResponseOfAuthorisationEmbeddedRequestResponse**](ApiResponseOfAuthorisationEmbeddedRequestResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## updateEmbeddedAccountRequestUsingPUT

> ApiResponseOfAuthorisationEmbeddedRequestResponse updateEmbeddedAccountRequestUsingPUT(consentId, accountAuthRequest, opts)

Update an embedded account request with SCA info

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

var apiInstance = new YapilyApi.EmbeddedAccountsApi();
var consentId = "consentId_example"; // String | consentId
var accountAuthRequest = new YapilyApi.AccountEmbeddedAuthorisationRequest(); // AccountEmbeddedAuthorisationRequest | accountAuthRequest
var opts = {
  'psuId': "psuId_example", // String | PSU ID
  'psuCorporateId': "psuCorporateId_example", // String | PSU ID CORPORATE
  'psuIpAddress': "psuIpAddress_example" // String | PSU IP ADDRESS
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateEmbeddedAccountRequestUsingPUT(consentId, accountAuthRequest, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentId** | **String**| consentId | 
 **accountAuthRequest** | [**AccountEmbeddedAuthorisationRequest**](AccountEmbeddedAuthorisationRequest.md)| accountAuthRequest | 
 **psuId** | **String**| PSU ID | [optional] 
 **psuCorporateId** | **String**| PSU ID CORPORATE | [optional] 
 **psuIpAddress** | **String**| PSU IP ADDRESS | [optional] 

### Return type

[**ApiResponseOfAuthorisationEmbeddedRequestResponse**](ApiResponseOfAuthorisationEmbeddedRequestResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

