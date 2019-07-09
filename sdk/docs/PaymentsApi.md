# YapilyApi.PaymentsApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPaymentAuthorisationWithSortCodeUsingPOST**](PaymentsApi.md#createPaymentAuthorisationWithSortCodeUsingPOST) | **POST** /payment-sortcode-auth-requests | Initiate a new single payment for user to authorise
[**createPaymentWithSortCodeUsingPOST**](PaymentsApi.md#createPaymentWithSortCodeUsingPOST) | **POST** /payment-sortcode | Create a new single payment
[**getPaymentStatusUsingGET**](PaymentsApi.md#getPaymentStatusUsingGET) | **GET** /payments/{paymentId} | Get status of a payment


<a name="createPaymentAuthorisationWithSortCodeUsingPOST"></a>
# **createPaymentAuthorisationWithSortCodeUsingPOST**
> ApiResponseOfAuthorisationRequestResponse createPaymentAuthorisationWithSortCodeUsingPOST(paymentAuthRequest)

Initiate a new single payment for user to authorise

### Example
```javascript
var YapilyApi = require('yapily_api');
var defaultClient = YapilyApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: tokenAuth
var tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new YapilyApi.PaymentsApi();

var paymentAuthRequest = new YapilyApi.SortCodePaymentAuthRequest(); // SortCodePaymentAuthRequest | paymentAuthRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPaymentAuthorisationWithSortCodeUsingPOST(paymentAuthRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentAuthRequest** | [**SortCodePaymentAuthRequest**](SortCodePaymentAuthRequest.md)| paymentAuthRequest | 

### Return type

[**ApiResponseOfAuthorisationRequestResponse**](ApiResponseOfAuthorisationRequestResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

<a name="createPaymentWithSortCodeUsingPOST"></a>
# **createPaymentWithSortCodeUsingPOST**
> ApiResponseOfPaymentResponse createPaymentWithSortCodeUsingPOST(consent, paymentRequest)

Create a new single payment

### Example
```javascript
var YapilyApi = require('yapily_api');
var defaultClient = YapilyApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: tokenAuth
var tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new YapilyApi.PaymentsApi();

var consent = "consent_example"; // String | Consent Token

var paymentRequest = new YapilyApi.SortCodePaymentRequest(); // SortCodePaymentRequest | paymentRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPaymentWithSortCodeUsingPOST(consent, paymentRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consent** | **String**| Consent Token | 
 **paymentRequest** | [**SortCodePaymentRequest**](SortCodePaymentRequest.md)| paymentRequest | 

### Return type

[**ApiResponseOfPaymentResponse**](ApiResponseOfPaymentResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

<a name="getPaymentStatusUsingGET"></a>
# **getPaymentStatusUsingGET**
> ApiResponseOfPaymentResponse getPaymentStatusUsingGET(paymentId, consent)

Get status of a payment

### Example
```javascript
var YapilyApi = require('yapily_api');
var defaultClient = YapilyApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: tokenAuth
var tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new YapilyApi.PaymentsApi();

var paymentId = "paymentId_example"; // String | paymentId

var consent = "consent_example"; // String | Consent Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPaymentStatusUsingGET(paymentId, consent, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentId** | **String**| paymentId | 
 **consent** | **String**| Consent Token | 

### Return type

[**ApiResponseOfPaymentResponse**](ApiResponseOfPaymentResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

