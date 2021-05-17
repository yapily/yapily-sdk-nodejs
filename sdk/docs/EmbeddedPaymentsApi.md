# YapilyApi.EmbeddedPaymentsApi

All URIs are relative to *https://api.yapily.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEmbeddedPaymentAuthorisationUsingPOST**](EmbeddedPaymentsApi.md#createEmbeddedPaymentAuthorisationUsingPOST) | **POST** /embedded-payment-auth-requests | Initiate an embedded payment for user to authorise
[**updateEmbeddedPaymentAuthorisationUsingPUT**](EmbeddedPaymentsApi.md#updateEmbeddedPaymentAuthorisationUsingPUT) | **PUT** /embedded-payment-auth-requests/{consentId} | Update an embedded payment initiation with SCA info



## createEmbeddedPaymentAuthorisationUsingPOST

> ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse createEmbeddedPaymentAuthorisationUsingPOST(paymentAuthRequest, opts)

Initiate an embedded payment for user to authorise

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

var apiInstance = new YapilyApi.EmbeddedPaymentsApi();
var paymentAuthRequest = new YapilyApi.PaymentEmbeddedAuthorisationRequest(); // PaymentEmbeddedAuthorisationRequest | paymentAuthRequest
var opts = {
  'xYapilyApiVersion': "xYapilyApiVersion_example", // String | Api Version
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
apiInstance.createEmbeddedPaymentAuthorisationUsingPOST(paymentAuthRequest, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentAuthRequest** | [**PaymentEmbeddedAuthorisationRequest**](PaymentEmbeddedAuthorisationRequest.md)| paymentAuthRequest | 
 **xYapilyApiVersion** | **String**| Api Version | [optional] 
 **psuId** | **String**| PSU ID | [optional] 
 **psuCorporateId** | **String**| PSU ID CORPORATE | [optional] 
 **psuIpAddress** | **String**| PSU IP ADDRESS | [optional] 

### Return type

[**ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse**](ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## updateEmbeddedPaymentAuthorisationUsingPUT

> ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse updateEmbeddedPaymentAuthorisationUsingPUT(consentId, paymentAuthRequest, opts)

Update an embedded payment initiation with SCA info

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

var apiInstance = new YapilyApi.EmbeddedPaymentsApi();
var consentId = "consentId_example"; // String | Consent Id
var paymentAuthRequest = new YapilyApi.PaymentEmbeddedAuthorisationRequest(); // PaymentEmbeddedAuthorisationRequest | paymentAuthRequest
var opts = {
  'xYapilyApiVersion': "xYapilyApiVersion_example", // String | Api Version
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
apiInstance.updateEmbeddedPaymentAuthorisationUsingPUT(consentId, paymentAuthRequest, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentId** | **String**| Consent Id | 
 **paymentAuthRequest** | [**PaymentEmbeddedAuthorisationRequest**](PaymentEmbeddedAuthorisationRequest.md)| paymentAuthRequest | 
 **xYapilyApiVersion** | **String**| Api Version | [optional] 
 **psuId** | **String**| PSU ID | [optional] 
 **psuCorporateId** | **String**| PSU ID CORPORATE | [optional] 
 **psuIpAddress** | **String**| PSU IP ADDRESS | [optional] 

### Return type

[**ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse**](ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

