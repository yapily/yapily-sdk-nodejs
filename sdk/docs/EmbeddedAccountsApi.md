# YapilyApi.EmbeddedAccountsApi

All URIs are relative to *https://api.yapily.com*

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
  'xYapilyApiVersion': "xYapilyApiVersion_example", // String | __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
  'psuId': "psuId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
  'psuCorporateId': "psuCorporateId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
  'psuIpAddress': "psuIpAddress_example" // String | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
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
 **xYapilyApiVersion** | **String**| __Optional__. Determines the API version to use. Valid values are &#x60;1.0&#x60; or &#x60;2.0-ALPHA&#x60;. Defaults to &#x60;1.0&#x60; | [optional] 
 **psuId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | [optional] 
 **psuCorporateId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | [optional] 
 **psuIpAddress** | **String**| __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | [optional] 

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
var consentId = "consentId_example"; // String | __Mandatory__. The consent Id of the `Consent` to update.
var accountAuthRequest = new YapilyApi.AccountEmbeddedAuthorisationRequest(); // AccountEmbeddedAuthorisationRequest | accountAuthRequest
var opts = {
  'xYapilyApiVersion': "xYapilyApiVersion_example", // String | __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
  'psuId': "psuId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
  'psuCorporateId': "psuCorporateId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
  'psuIpAddress': "psuIpAddress_example" // String | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
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
 **consentId** | **String**| __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update. | 
 **accountAuthRequest** | [**AccountEmbeddedAuthorisationRequest**](AccountEmbeddedAuthorisationRequest.md)| accountAuthRequest | 
 **xYapilyApiVersion** | **String**| __Optional__. Determines the API version to use. Valid values are &#x60;1.0&#x60; or &#x60;2.0-ALPHA&#x60;. Defaults to &#x60;1.0&#x60; | [optional] 
 **psuId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | [optional] 
 **psuCorporateId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | [optional] 
 **psuIpAddress** | **String**| __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | [optional] 

### Return type

[**ApiResponseOfAuthorisationEmbeddedRequestResponse**](ApiResponseOfAuthorisationEmbeddedRequestResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

