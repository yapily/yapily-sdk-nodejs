# YapilyApi.HostedPaymentPagesApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createHostedPaymentRequest**](HostedPaymentPagesApi.md#createHostedPaymentRequest) | **POST** /hosted/payment-requests | Create Hosted payment request
[**createHostedPaymentRequestLink**](HostedPaymentPagesApi.md#createHostedPaymentRequestLink) | **POST** /hosted/payment-requests/links | Create Pay By Link
[**createHostedVRPConsentRequest**](HostedPaymentPagesApi.md#createHostedVRPConsentRequest) | **POST** /hosted/vrp/consent-requests | Create VRP Consent
[**createHostedVrpFundsConfirmation**](HostedPaymentPagesApi.md#createHostedVrpFundsConfirmation) | **POST** /hosted/vrp/consent-requests/{consentRequestId}/funds-confirmation | Check Funds Availability
[**createHostedVrpPayment**](HostedPaymentPagesApi.md#createHostedVrpPayment) | **POST** /hosted/vrp/consent-requests/{consentRequestId}/payments | Create VRP Payment
[**getHostedPaymentRequest**](HostedPaymentPagesApi.md#getHostedPaymentRequest) | **GET** /hosted/payment-requests/{paymentRequestId} | Get Hosted payment request
[**getHostedVRPConsentRequests**](HostedPaymentPagesApi.md#getHostedVRPConsentRequests) | **GET** /hosted/vrp/consent-requests | Get Hosted VRP Consent Requests
[**getHostedVRPPaymentRequest**](HostedPaymentPagesApi.md#getHostedVRPPaymentRequest) | **GET** /hosted/vrp/consent-requests/{consentRequestId}/payments/{paymentId} | Get VRP payment
[**getHostedVrpConsentRequest**](HostedPaymentPagesApi.md#getHostedVrpConsentRequest) | **GET** /hosted/vrp/consent-requests/{consentRequestId} | Get Hosted VRP Consent Request
[**revokeHostedConsentRequest**](HostedPaymentPagesApi.md#revokeHostedConsentRequest) | **POST** /hosted/vrp/consent-requests/{consentRequestId}/revoke | Revoke Hosted VRP Consent Request



## createHostedPaymentRequest

> ApiResponseOfCreateHostedPaymentRequest createHostedPaymentRequest(createHostedPaymentRequest)

Create Hosted payment request

Used to initiate a payment request using Yapily Hosted Pages.

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.HostedPaymentPagesApi();
let createHostedPaymentRequest = new YapilyApi.CreateHostedPaymentRequest(); // CreateHostedPaymentRequest | 
apiInstance.createHostedPaymentRequest(createHostedPaymentRequest, (error, data, response) => {
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
 **createHostedPaymentRequest** | [**CreateHostedPaymentRequest**](CreateHostedPaymentRequest.md)|  | 

### Return type

[**ApiResponseOfCreateHostedPaymentRequest**](ApiResponseOfCreateHostedPaymentRequest.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## createHostedPaymentRequestLink

> ApiResponseOfCreateHostedPaymentRequestLink createHostedPaymentRequestLink(createHostedPaymentRequestLink)

Create Pay By Link

Used to created a long lived payment request for Pay By Link

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.HostedPaymentPagesApi();
let createHostedPaymentRequestLink = new YapilyApi.CreateHostedPaymentRequestLink(); // CreateHostedPaymentRequestLink | 
apiInstance.createHostedPaymentRequestLink(createHostedPaymentRequestLink, (error, data, response) => {
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
 **createHostedPaymentRequestLink** | [**CreateHostedPaymentRequestLink**](CreateHostedPaymentRequestLink.md)|  | 

### Return type

[**ApiResponseOfCreateHostedPaymentRequestLink**](ApiResponseOfCreateHostedPaymentRequestLink.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## createHostedVRPConsentRequest

> ApiResponseOfCreateHostedVRPConsentRequest createHostedVRPConsentRequest(subApplication, createHostedVRPConsentRequest)

Create VRP Consent

Used to initiate a VRP consent / mandate request through Yapily Hosted Pages

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.HostedPaymentPagesApi();
let subApplication = "subApplication_example"; // String | __Mandatory__. The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
let createHostedVRPConsentRequest = new YapilyApi.CreateHostedVRPConsentRequest(); // CreateHostedVRPConsentRequest | 
apiInstance.createHostedVRPConsentRequest(subApplication, createHostedVRPConsentRequest, (error, data, response) => {
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
 **subApplication** | **String**| __Mandatory__. The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant) | 
 **createHostedVRPConsentRequest** | [**CreateHostedVRPConsentRequest**](CreateHostedVRPConsentRequest.md)|  | 

### Return type

[**ApiResponseOfCreateHostedVRPConsentRequest**](ApiResponseOfCreateHostedVRPConsentRequest.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## createHostedVrpFundsConfirmation

> ApiResponseOfFundsConfirmationResponse createHostedVrpFundsConfirmation(consentRequestId, consentToken, fundsConfirmationRequest, opts)

Check Funds Availability

Confirms whether there are available funds on the Payer account to execute a Variable Recurring Payment after obtaining the user&#39;s authorisation. &lt;br&gt;&lt;br&gt;Features:&lt;ul&gt;&lt;li&gt;&#x60;VARIABLE_RECURRING_PAYMENT_FUNDS_CONFIRMATION&#x60;&lt;/li&gt;&lt;/ul&gt;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.HostedPaymentPagesApi();
let consentRequestId = "consentRequestId_example"; // String | Unique Identifier of the Consent Request
let consentToken = {consentToken}; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
let fundsConfirmationRequest = new YapilyApi.FundsConfirmationRequest(); // FundsConfirmationRequest | 
let opts = {
  'subApplication': "subApplication_example" // String | The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
};
apiInstance.createHostedVrpFundsConfirmation(consentRequestId, consentToken, fundsConfirmationRequest, opts, (error, data, response) => {
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
 **consentRequestId** | **String**| Unique Identifier of the Consent Request | 
 **consentToken** | **String**| __Mandatory__. The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the request. | 
 **fundsConfirmationRequest** | [**FundsConfirmationRequest**](FundsConfirmationRequest.md)|  | 
 **subApplication** | **String**| The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant) | [optional] 

### Return type

[**ApiResponseOfFundsConfirmationResponse**](ApiResponseOfFundsConfirmationResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## createHostedVrpPayment

> ApiResponseOfCreateHostedVRPPaymentRequest createHostedVrpPayment(consentRequestId, consentToken, createHostedVRPPaymentRequest, opts)

Create VRP Payment

Creates a Variable Recurring Payment

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.HostedPaymentPagesApi();
let consentRequestId = "consentRequestId_example"; // String | Unique Identifier of the Consent Request
let consentToken = {consentToken}; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
let createHostedVRPPaymentRequest = new YapilyApi.CreateHostedVRPPaymentRequest(); // CreateHostedVRPPaymentRequest | 
let opts = {
  'subApplication': "subApplication_example" // String | The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
};
apiInstance.createHostedVrpPayment(consentRequestId, consentToken, createHostedVRPPaymentRequest, opts, (error, data, response) => {
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
 **consentRequestId** | **String**| Unique Identifier of the Consent Request | 
 **consentToken** | **String**| __Mandatory__. The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the request. | 
 **createHostedVRPPaymentRequest** | [**CreateHostedVRPPaymentRequest**](CreateHostedVRPPaymentRequest.md)|  | 
 **subApplication** | **String**| The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant) | [optional] 

### Return type

[**ApiResponseOfCreateHostedVRPPaymentRequest**](ApiResponseOfCreateHostedVRPPaymentRequest.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## getHostedPaymentRequest

> ApiResponseOfGetHostedPaymentRequest getHostedPaymentRequest(paymentRequestId)

Get Hosted payment request

Used to get details of a payment request

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.HostedPaymentPagesApi();
let paymentRequestId = "paymentRequestId_example"; // String | Unique Identifier of the payment request
apiInstance.getHostedPaymentRequest(paymentRequestId, (error, data, response) => {
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
 **paymentRequestId** | **String**| Unique Identifier of the payment request | 

### Return type

[**ApiResponseOfGetHostedPaymentRequest**](ApiResponseOfGetHostedPaymentRequest.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getHostedVRPConsentRequests

> ApiResponseOfGetHostedVRPConsentsRequest getHostedVRPConsentRequests(subApplication)

Get Hosted VRP Consent Requests

Used to get all VRP consent requests initiated through Yapily Hosted Pages

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.HostedPaymentPagesApi();
let subApplication = "subApplication_example"; // String | __Mandatory__. The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
apiInstance.getHostedVRPConsentRequests(subApplication, (error, data, response) => {
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
 **subApplication** | **String**| __Mandatory__. The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant) | 

### Return type

[**ApiResponseOfGetHostedVRPConsentsRequest**](ApiResponseOfGetHostedVRPConsentsRequest.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getHostedVRPPaymentRequest

> ApiResponseOfGetHostedVRPPaymentRequest getHostedVRPPaymentRequest(consentRequestId, paymentId, opts)

Get VRP payment

Used to get details of a VRP Payment

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.HostedPaymentPagesApi();
let consentRequestId = "consentRequestId_example"; // String | Unique Identifier of the Consent Request
let paymentId = "paymentId_example"; // String | Unique Identifier of the Consent Request
let opts = {
  'subApplication': "subApplication_example" // String | The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
};
apiInstance.getHostedVRPPaymentRequest(consentRequestId, paymentId, opts, (error, data, response) => {
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
 **consentRequestId** | **String**| Unique Identifier of the Consent Request | 
 **paymentId** | **String**| Unique Identifier of the Consent Request | 
 **subApplication** | **String**| The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant) | [optional] 

### Return type

[**ApiResponseOfGetHostedVRPPaymentRequest**](ApiResponseOfGetHostedVRPPaymentRequest.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getHostedVrpConsentRequest

> ApiResponseOfGetHostedVRPConsentRequest getHostedVrpConsentRequest(consentRequestId, opts)

Get Hosted VRP Consent Request

Used to get details of a VRP Consent Request

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.HostedPaymentPagesApi();
let consentRequestId = "consentRequestId_example"; // String | Unique Identifier of the Consent Request
let opts = {
  'subApplication': "subApplication_example" // String | The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
};
apiInstance.getHostedVrpConsentRequest(consentRequestId, opts, (error, data, response) => {
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
 **consentRequestId** | **String**| Unique Identifier of the Consent Request | 
 **subApplication** | **String**| The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant) | [optional] 

### Return type

[**ApiResponseOfGetHostedVRPConsentRequest**](ApiResponseOfGetHostedVRPConsentRequest.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## revokeHostedConsentRequest

> ApiResponseOfRevokeHostedVRPConsentRequest revokeHostedConsentRequest(consentRequestId, opts)

Revoke Hosted VRP Consent Request

Revoke Hosted VRP Consent Request

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.HostedPaymentPagesApi();
let consentRequestId = "consentRequestId_example"; // String | Unique Identifier of the Consent Request
let opts = {
  'subApplication': "subApplication_example" // String | The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant)
};
apiInstance.revokeHostedConsentRequest(consentRequestId, opts, (error, data, response) => {
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
 **consentRequestId** | **String**| Unique Identifier of the Consent Request | 
 **subApplication** | **String**| The unique identifier of the sub application the request is being submitted on behalf of (e.g. an underlying merchant) | [optional] 

### Return type

[**ApiResponseOfRevokeHostedVRPConsentRequest**](ApiResponseOfRevokeHostedVRPConsentRequest.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

