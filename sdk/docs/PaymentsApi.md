# YapilyApi.PaymentsApi

All URIs are relative to *https://api.yapily.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBulkPaymentAuthorisationUsingPOST**](PaymentsApi.md#createBulkPaymentAuthorisationUsingPOST) | **POST** /bulk-payment-auth-requests | Initiate bulk payment for user to authorise
[**createBulkPaymentUsingPOST**](PaymentsApi.md#createBulkPaymentUsingPOST) | **POST** /bulk-payments | Create bulk payment
[**createPaymentAuthorisationUsingPOST**](PaymentsApi.md#createPaymentAuthorisationUsingPOST) | **POST** /payment-auth-requests | Initiate a payment for user to authorise
[**createPaymentAuthorisationWithSortCodeUsingPOST**](PaymentsApi.md#createPaymentAuthorisationWithSortCodeUsingPOST) | **POST** /payment-sortcode-auth-requests | Initiate a new single payment for user to authorise
[**createPaymentUsingPOST**](PaymentsApi.md#createPaymentUsingPOST) | **POST** /payments | Create a payment
[**createPaymentWithSortCodeUsingPOST**](PaymentsApi.md#createPaymentWithSortCodeUsingPOST) | **POST** /payment-sortcode | Create a new single payment
[**getPaymentStatusUsingGET**](PaymentsApi.md#getPaymentStatusUsingGET) | **GET** /payments/{paymentId} | Get status of a payment
[**getPaymentsUsingGET**](PaymentsApi.md#getPaymentsUsingGET) | **GET** /payments/{paymentId}/details | Get payments detail
[**updatePaymentAuthorisationUsingPUT**](PaymentsApi.md#updatePaymentAuthorisationUsingPUT) | **PUT** /payment-auth-requests | Update pre authorize consent for user to authorise payment



## createBulkPaymentAuthorisationUsingPOST

> ApiResponseOfPaymentAuthorisationRequestResponse createBulkPaymentAuthorisationUsingPOST(paymentAuthRequest, opts)

Initiate bulk payment for user to authorise

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

var apiInstance = new YapilyApi.PaymentsApi();
var paymentAuthRequest = new YapilyApi.BulkPaymentAuthorisationRequest(); // BulkPaymentAuthorisationRequest | paymentAuthRequest
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
apiInstance.createBulkPaymentAuthorisationUsingPOST(paymentAuthRequest, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentAuthRequest** | [**BulkPaymentAuthorisationRequest**](BulkPaymentAuthorisationRequest.md)| paymentAuthRequest | 
 **psuId** | **String**| PSU ID | [optional] 
 **psuCorporateId** | **String**| PSU ID CORPORATE | [optional] 
 **psuIpAddress** | **String**| PSU IP ADDRESS | [optional] 

### Return type

[**ApiResponseOfPaymentAuthorisationRequestResponse**](ApiResponseOfPaymentAuthorisationRequestResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## createBulkPaymentUsingPOST

> ApiResponseOfPaymentResponse createBulkPaymentUsingPOST(consent, paymentRequest, opts)

Create bulk payment

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

var apiInstance = new YapilyApi.PaymentsApi();
var consent = "consent_example"; // String | Consent Token
var paymentRequest = new YapilyApi.BulkPaymentRequest(); // BulkPaymentRequest | paymentRequest
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
apiInstance.createBulkPaymentUsingPOST(consent, paymentRequest, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consent** | **String**| Consent Token | 
 **paymentRequest** | [**BulkPaymentRequest**](BulkPaymentRequest.md)| paymentRequest | 
 **psuId** | **String**| PSU ID | [optional] 
 **psuCorporateId** | **String**| PSU ID CORPORATE | [optional] 
 **psuIpAddress** | **String**| PSU IP ADDRESS | [optional] 

### Return type

[**ApiResponseOfPaymentResponse**](ApiResponseOfPaymentResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## createPaymentAuthorisationUsingPOST

> ApiResponseOfPaymentAuthorisationRequestResponse createPaymentAuthorisationUsingPOST(paymentAuthRequest, opts)

Initiate a payment for user to authorise

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

var apiInstance = new YapilyApi.PaymentsApi();
var paymentAuthRequest = new YapilyApi.PaymentAuthorisationRequest(); // PaymentAuthorisationRequest | paymentAuthRequest
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
apiInstance.createPaymentAuthorisationUsingPOST(paymentAuthRequest, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentAuthRequest** | [**PaymentAuthorisationRequest**](PaymentAuthorisationRequest.md)| paymentAuthRequest | 
 **psuId** | **String**| PSU ID | [optional] 
 **psuCorporateId** | **String**| PSU ID CORPORATE | [optional] 
 **psuIpAddress** | **String**| PSU IP ADDRESS | [optional] 

### Return type

[**ApiResponseOfPaymentAuthorisationRequestResponse**](ApiResponseOfPaymentAuthorisationRequestResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## createPaymentAuthorisationWithSortCodeUsingPOST

> ApiResponseOfAuthorisationRequestResponse createPaymentAuthorisationWithSortCodeUsingPOST(paymentAuthRequest, opts)

Initiate a new single payment for user to authorise

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

var apiInstance = new YapilyApi.PaymentsApi();
var paymentAuthRequest = new YapilyApi.SortCodePaymentAuthRequest(); // SortCodePaymentAuthRequest | paymentAuthRequest
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
apiInstance.createPaymentAuthorisationWithSortCodeUsingPOST(paymentAuthRequest, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentAuthRequest** | [**SortCodePaymentAuthRequest**](SortCodePaymentAuthRequest.md)| paymentAuthRequest | 
 **psuId** | **String**| PSU ID | [optional] 
 **psuCorporateId** | **String**| PSU ID CORPORATE | [optional] 
 **psuIpAddress** | **String**| PSU IP ADDRESS | [optional] 

### Return type

[**ApiResponseOfAuthorisationRequestResponse**](ApiResponseOfAuthorisationRequestResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## createPaymentUsingPOST

> ApiResponseOfPaymentResponse createPaymentUsingPOST(consent, paymentRequest, opts)

Create a payment

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

var apiInstance = new YapilyApi.PaymentsApi();
var consent = "consent_example"; // String | Consent Token
var paymentRequest = new YapilyApi.PaymentRequest(); // PaymentRequest | paymentRequest
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
apiInstance.createPaymentUsingPOST(consent, paymentRequest, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consent** | **String**| Consent Token | 
 **paymentRequest** | [**PaymentRequest**](PaymentRequest.md)| paymentRequest | 
 **psuId** | **String**| PSU ID | [optional] 
 **psuCorporateId** | **String**| PSU ID CORPORATE | [optional] 
 **psuIpAddress** | **String**| PSU IP ADDRESS | [optional] 

### Return type

[**ApiResponseOfPaymentResponse**](ApiResponseOfPaymentResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## createPaymentWithSortCodeUsingPOST

> ApiResponseOfPaymentResponse createPaymentWithSortCodeUsingPOST(consent, paymentRequest, opts)

Create a new single payment

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

var apiInstance = new YapilyApi.PaymentsApi();
var consent = "consent_example"; // String | Consent Token
var paymentRequest = new YapilyApi.SortCodePaymentRequest(); // SortCodePaymentRequest | paymentRequest
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
apiInstance.createPaymentWithSortCodeUsingPOST(consent, paymentRequest, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consent** | **String**| Consent Token | 
 **paymentRequest** | [**SortCodePaymentRequest**](SortCodePaymentRequest.md)| paymentRequest | 
 **psuId** | **String**| PSU ID | [optional] 
 **psuCorporateId** | **String**| PSU ID CORPORATE | [optional] 
 **psuIpAddress** | **String**| PSU IP ADDRESS | [optional] 

### Return type

[**ApiResponseOfPaymentResponse**](ApiResponseOfPaymentResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## getPaymentStatusUsingGET

> ApiResponseOfPaymentResponse getPaymentStatusUsingGET(paymentId, consent, opts)

Get status of a payment

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

var apiInstance = new YapilyApi.PaymentsApi();
var paymentId = "paymentId_example"; // String | paymentId
var consent = "consent_example"; // String | Consent Token
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
apiInstance.getPaymentStatusUsingGET(paymentId, consent, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentId** | **String**| paymentId | 
 **consent** | **String**| Consent Token | 
 **psuId** | **String**| PSU ID | [optional] 
 **psuCorporateId** | **String**| PSU ID CORPORATE | [optional] 
 **psuIpAddress** | **String**| PSU IP ADDRESS | [optional] 

### Return type

[**ApiResponseOfPaymentResponse**](ApiResponseOfPaymentResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getPaymentsUsingGET

> ApiResponseOfPaymentResponses getPaymentsUsingGET(paymentId, consent, opts)

Get payments detail

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

var apiInstance = new YapilyApi.PaymentsApi();
var paymentId = "paymentId_example"; // String | paymentId
var consent = "consent_example"; // String | Consent Token
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
apiInstance.getPaymentsUsingGET(paymentId, consent, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentId** | **String**| paymentId | 
 **consent** | **String**| Consent Token | 
 **psuId** | **String**| PSU ID | [optional] 
 **psuCorporateId** | **String**| PSU ID CORPORATE | [optional] 
 **psuIpAddress** | **String**| PSU IP ADDRESS | [optional] 

### Return type

[**ApiResponseOfPaymentResponses**](ApiResponseOfPaymentResponses.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## updatePaymentAuthorisationUsingPUT

> ApiResponseOfPaymentAuthorisationRequestResponse updatePaymentAuthorisationUsingPUT(consent, paymentAuthRequest, opts)

Update pre authorize consent for user to authorise payment

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

var apiInstance = new YapilyApi.PaymentsApi();
var consent = "consent_example"; // String | Consent Token
var paymentAuthRequest = new YapilyApi.PaymentAuthorisationRequest(); // PaymentAuthorisationRequest | paymentAuthRequest
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
apiInstance.updatePaymentAuthorisationUsingPUT(consent, paymentAuthRequest, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consent** | **String**| Consent Token | 
 **paymentAuthRequest** | [**PaymentAuthorisationRequest**](PaymentAuthorisationRequest.md)| paymentAuthRequest | 
 **psuId** | **String**| PSU ID | [optional] 
 **psuCorporateId** | **String**| PSU ID CORPORATE | [optional] 
 **psuIpAddress** | **String**| PSU IP ADDRESS | [optional] 

### Return type

[**ApiResponseOfPaymentAuthorisationRequestResponse**](ApiResponseOfPaymentAuthorisationRequestResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

