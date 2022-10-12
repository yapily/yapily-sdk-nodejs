# YapilyApi.AuthorisationsApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBulkPaymentAuthorisation**](AuthorisationsApi.md#createBulkPaymentAuthorisation) | **POST** /bulk-payment-auth-requests | Create Bulk Payment Authorisation
[**createEmbeddedBulkPaymentAuthorisation**](AuthorisationsApi.md#createEmbeddedBulkPaymentAuthorisation) | **POST** /embedded-bulk-payment-auth-requests | Create Embedded Bulk Payment Authorisation
[**createEmbeddedPaymentAuthorisation**](AuthorisationsApi.md#createEmbeddedPaymentAuthorisation) | **POST** /embedded-payment-auth-requests | Create Embedded Payment Authorisation
[**createPaymentAuthorisation**](AuthorisationsApi.md#createPaymentAuthorisation) | **POST** /payment-auth-requests | Create Payment Authorisation
[**createPaymentPreAuthorisationRequest**](AuthorisationsApi.md#createPaymentPreAuthorisationRequest) | **POST** /payment-pre-auth-requests | Create Payment Pre-authorisation
[**createPreAuthorisationRequest**](AuthorisationsApi.md#createPreAuthorisationRequest) | **POST** /pre-auth-requests | Create Pre-authorisation
[**initiateAccountRequest**](AuthorisationsApi.md#initiateAccountRequest) | **POST** /account-auth-requests | Create Account Authorisation
[**initiateEmbeddedAccountRequest**](AuthorisationsApi.md#initiateEmbeddedAccountRequest) | **POST** /embedded-account-auth-requests | Create Embedded Account Authorisation
[**reAuthoriseAccount**](AuthorisationsApi.md#reAuthoriseAccount) | **PATCH** /account-auth-requests | Re-authorise Account Consent
[**updateEmbeddedAccountRequest**](AuthorisationsApi.md#updateEmbeddedAccountRequest) | **PUT** /embedded-account-auth-requests/{consentId} | Update Embedded Account Authorisation
[**updateEmbeddedBulkPaymentAuthorisation**](AuthorisationsApi.md#updateEmbeddedBulkPaymentAuthorisation) | **PUT** /embedded-bulk-payment-auth-requests/{consentId} | Update Embedded Bulk Payment Authorisation
[**updateEmbeddedPaymentAuthorisation**](AuthorisationsApi.md#updateEmbeddedPaymentAuthorisation) | **PUT** /embedded-payment-auth-requests/{consentId} | Update Embedded Payment Authorisation
[**updatePaymentAuthorisation**](AuthorisationsApi.md#updatePaymentAuthorisation) | **PUT** /payment-auth-requests | Update Payment Pre-authorisation
[**updatePreAuthoriseAccountConsent**](AuthorisationsApi.md#updatePreAuthoriseAccountConsent) | **PUT** /account-auth-requests | Update Account Pre-authorisation



## createBulkPaymentAuthorisation

> ApiResponseOfPaymentAuthorisationRequestResponse createBulkPaymentAuthorisation(bulkPaymentAuthorisationRequest, opts)

Create Bulk Payment Authorisation

Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for a bulk payment. See [Bulk Payments](https://docs.yapily.com/pages/key-concepts/payments/payment-execution/bulk-payments/) for more information. &lt;br&gt;&lt;br&gt;See [Redirect Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/redirect-payment-flows/) for more information about this flow.&lt;br&gt;&lt;br&gt;Feature: &#x60;INITIATE_BULK_PAYMENT&#x60;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.AuthorisationsApi();
let bulkPaymentAuthorisationRequest = new YapilyApi.BulkPaymentAuthorisationRequest(); // BulkPaymentAuthorisationRequest | 
let opts = {
  'psuId': "psuId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuCorporateId': "psuCorporateId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuIpAddress': "psuIpAddress_example", // String | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'raw': true // Boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
};
apiInstance.createBulkPaymentAuthorisation(bulkPaymentAuthorisationRequest, opts, (error, data, response) => {
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
 **bulkPaymentAuthorisationRequest** | [**BulkPaymentAuthorisationRequest**](BulkPaymentAuthorisationRequest.md)|  | 
 **psuId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuCorporateId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuIpAddress** | **String**| __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **raw** | **Boolean**| __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | [optional] 

### Return type

[**ApiResponseOfPaymentAuthorisationRequestResponse**](ApiResponseOfPaymentAuthorisationRequestResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## createEmbeddedBulkPaymentAuthorisation

> ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse createEmbeddedBulkPaymentAuthorisation(bulkPaymentEmbeddedAuthorisationRequest, opts)

Create Embedded Bulk Payment Authorisation

Used to initiate the embedded authorisation process for an &#x60;Institution&#x60; that contains the &#x60;INITIATE_EMBEDDED_BULK_PAYMENT&#x60; feature in order to obtain the the user&#39;s authorisation for a bulk payment. See [Bulk Payments](https://docs.yapily.com/pages/key-concepts/payments/payment-execution/bulk-payments/) for more information. &lt;br&gt;&lt;br&gt; See [Embedded Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/embedded-payment-flows/) for more information about this flow.&lt;br&gt;&lt;br&gt;Feature: &#x60;INITIATE_EMBEDDED_BULK_PAYMENT&#x60;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.AuthorisationsApi();
let bulkPaymentEmbeddedAuthorisationRequest = new YapilyApi.BulkPaymentEmbeddedAuthorisationRequest(); // BulkPaymentEmbeddedAuthorisationRequest | 
let opts = {
  'psuId': "psuId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuCorporateId': "psuCorporateId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuIpAddress': "psuIpAddress_example", // String | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'raw': true // Boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
};
apiInstance.createEmbeddedBulkPaymentAuthorisation(bulkPaymentEmbeddedAuthorisationRequest, opts, (error, data, response) => {
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
 **bulkPaymentEmbeddedAuthorisationRequest** | [**BulkPaymentEmbeddedAuthorisationRequest**](BulkPaymentEmbeddedAuthorisationRequest.md)|  | 
 **psuId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuCorporateId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuIpAddress** | **String**| __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **raw** | **Boolean**| __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | [optional] 

### Return type

[**ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse**](ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## createEmbeddedPaymentAuthorisation

> ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse createEmbeddedPaymentAuthorisation(paymentEmbeddedAuthorisationRequest, opts)

Create Embedded Payment Authorisation

Used to initiate the embedded authorisation process for an &#x60;Institution&#x60; that contains the &#x60;INITIATE_EMBEDDED_DOMESTIC_SINGLE_PAYMENT&#x60; feature in order to obtain the the user&#39;s authorisation for a payment.&lt;br&gt;&lt;br&gt; See [Embedded Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/embedded-payment-flows/) for more information about this flow.&lt;br&gt;&lt;br&gt;Feature: &#x60;INITIATE_EMBEDDED_DOMESTIC_SINGLE_PAYMENT&#x60;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.AuthorisationsApi();
let paymentEmbeddedAuthorisationRequest = new YapilyApi.PaymentEmbeddedAuthorisationRequest(); // PaymentEmbeddedAuthorisationRequest | 
let opts = {
  'psuId': "psuId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuCorporateId': "psuCorporateId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuIpAddress': "psuIpAddress_example", // String | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'raw': true // Boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
};
apiInstance.createEmbeddedPaymentAuthorisation(paymentEmbeddedAuthorisationRequest, opts, (error, data, response) => {
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
 **paymentEmbeddedAuthorisationRequest** | [**PaymentEmbeddedAuthorisationRequest**](PaymentEmbeddedAuthorisationRequest.md)|  | 
 **psuId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuCorporateId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuIpAddress** | **String**| __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **raw** | **Boolean**| __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | [optional] 

### Return type

[**ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse**](ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## createPaymentAuthorisation

> ApiResponseOfPaymentAuthorisationRequestResponse createPaymentAuthorisation(paymentAuthorisationRequest, opts)

Create Payment Authorisation

Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for a payment. This endpoint is used to initiate all the different payment listed below. Based on the type of payment you wish to make, you may be required to provide specific properties in [PaymentRequest](https://docs.yapily.com/api/reference/#operation/createPaymentAuthorisation!path&#x3D;paymentRequest&amp;t&#x3D;request). First make sure that the payment feature you wish to execute is supported by the bank by checking the features array in [GET Institution](https://docs.yapily.com/api/reference/#operation/getInstitution). &lt;br&gt;&lt;br&gt;See [Redirect Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/redirect-payment-flows/) for more information about this flow.&lt;br&gt;&lt;br&gt;Features:&lt;ul&gt;&lt;li&gt;&#x60;INITIATE_DOMESTIC_PERIODIC_PAYMENT&#x60;&lt;/li&gt;&lt;li&gt;&#x60;INITIATE_DOMESTIC_SCHEDULED_PAYMENT&#x60;&lt;/li&gt;&lt;li&gt;&#x60;INITIATE_DOMESTIC_SINGLE_INSTANT_PAYMENT&#x60;&lt;/li&gt;&lt;li&gt;&#x60;INITIATE_DOMESTIC_SINGLE_PAYMENT&#x60;&lt;/li&gt;&lt;li&gt;&#x60;INITIATE_INTERNATIONAL_PERIODIC_PAYMENT&#x60;&lt;/li&gt;&lt;li&gt;&#x60;INITIATE_INTERNATIONAL_SCHEDULED_PAYMENT&#x60;&lt;/li&gt;&lt;li&gt;&#x60;INITIATE_INTERNATIONAL_SINGLE_PAYMENT&#x60;&lt;/li&gt;&lt;/ul&gt;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.AuthorisationsApi();
let paymentAuthorisationRequest = new YapilyApi.PaymentAuthorisationRequest(); // PaymentAuthorisationRequest | 
let opts = {
  'psuId': "psuId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuCorporateId': "psuCorporateId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuIpAddress': "psuIpAddress_example", // String | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'raw': true // Boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
};
apiInstance.createPaymentAuthorisation(paymentAuthorisationRequest, opts, (error, data, response) => {
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
 **paymentAuthorisationRequest** | [**PaymentAuthorisationRequest**](PaymentAuthorisationRequest.md)|  | 
 **psuId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuCorporateId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuIpAddress** | **String**| __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **raw** | **Boolean**| __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | [optional] 

### Return type

[**ApiResponseOfPaymentAuthorisationRequestResponse**](ApiResponseOfPaymentAuthorisationRequestResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## createPaymentPreAuthorisationRequest

> ApiResponseOfAccountAuthorisationResponse createPaymentPreAuthorisationRequest(paymentPreAuthorisationRequest, opts)

Create Payment Pre-authorisation

Used to initiate the pre-authorisation process for payments for CbiGlobe &#x60;Institution&#x60; that contains the &#x60;INITIATE_ONETIME_PRE_AUTHORISATION_PAYMENTS&#x60; feature to authenticate the user. &lt;br&gt;&lt;br&gt;Feature: &#x60;INITIATE_ONETIME_PRE_AUTHORISATION_PAYMENTS&#x60;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.AuthorisationsApi();
let paymentPreAuthorisationRequest = new YapilyApi.PaymentPreAuthorisationRequest(); // PaymentPreAuthorisationRequest | 
let opts = {
  'raw': true // Boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
};
apiInstance.createPaymentPreAuthorisationRequest(paymentPreAuthorisationRequest, opts, (error, data, response) => {
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
 **paymentPreAuthorisationRequest** | [**PaymentPreAuthorisationRequest**](PaymentPreAuthorisationRequest.md)|  | 
 **raw** | **Boolean**| __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | [optional] 

### Return type

[**ApiResponseOfAccountAuthorisationResponse**](ApiResponseOfAccountAuthorisationResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## createPreAuthorisationRequest

> ApiResponseOfAccountAuthorisationResponse createPreAuthorisationRequest(preAuthorisationRequest, opts)

Create Pre-authorisation

Used to initiate the pre-authorisation process for any &#x60;Institution&#x60; that contains the &#x60;INITIATE_PRE_AUTHORISATION&#x60; feature to authenticate the user. &lt;br&gt;&lt;br&gt;Feature: &#x60;INITIATE_PRE_AUTHORISATION&#x60;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.AuthorisationsApi();
let preAuthorisationRequest = new YapilyApi.PreAuthorisationRequest(); // PreAuthorisationRequest | 
let opts = {
  'raw': true // Boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
};
apiInstance.createPreAuthorisationRequest(preAuthorisationRequest, opts, (error, data, response) => {
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
 **preAuthorisationRequest** | [**PreAuthorisationRequest**](PreAuthorisationRequest.md)|  | 
 **raw** | **Boolean**| __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | [optional] 

### Return type

[**ApiResponseOfAccountAuthorisationResponse**](ApiResponseOfAccountAuthorisationResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## initiateAccountRequest

> ApiResponseOfAccountAuthorisationResponse initiateAccountRequest(accountAuthorisationRequest, opts)

Create Account Authorisation

Used to initiate the authorisation process and direct users to the login screen of their financial institution in order to give consent to access account data.&lt;br&gt;&lt;br&gt;See [Redirect Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/redirect-account-flows/) for more information about this flow.&lt;br&gt;&lt;br&gt;Feature: &#x60;INITIATE_ACCOUNT_REQUEST&#x60;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.AuthorisationsApi();
let accountAuthorisationRequest = new YapilyApi.AccountAuthorisationRequest(); // AccountAuthorisationRequest | 
let opts = {
  'psuId': "psuId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuCorporateId': "psuCorporateId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuIpAddress': "psuIpAddress_example", // String | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'raw': true // Boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
};
apiInstance.initiateAccountRequest(accountAuthorisationRequest, opts, (error, data, response) => {
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
 **accountAuthorisationRequest** | [**AccountAuthorisationRequest**](AccountAuthorisationRequest.md)|  | 
 **psuId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuCorporateId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuIpAddress** | **String**| __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **raw** | **Boolean**| __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | [optional] 

### Return type

[**ApiResponseOfAccountAuthorisationResponse**](ApiResponseOfAccountAuthorisationResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## initiateEmbeddedAccountRequest

> ApiResponseOfEmbeddedAccountAuthorisationResponse initiateEmbeddedAccountRequest(embeddedAccountAuthorisationRequest, opts)

Create Embedded Account Authorisation

Used to initiate the embedded authorisation process for an &#x60;Institution&#x60; that contains the &#x60;INITIATE_EMBEDDED_ACCOUNT_REQUEST&#x60; feature in order to obtain the the user&#39;s authorisation to access their account information. &lt;br&gt;&lt;br&gt;See [Embedded Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/embedded-account-flows/) for more information about this flow.&lt;br&gt;&lt;br&gt;Feature: &#x60;INITIATE_EMBEDDED_ACCOUNT_REQUEST&#x60;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.AuthorisationsApi();
let embeddedAccountAuthorisationRequest = new YapilyApi.EmbeddedAccountAuthorisationRequest(); // EmbeddedAccountAuthorisationRequest | 
let opts = {
  'psuId': "psuId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuCorporateId': "psuCorporateId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuIpAddress': "psuIpAddress_example", // String | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'raw': true // Boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
};
apiInstance.initiateEmbeddedAccountRequest(embeddedAccountAuthorisationRequest, opts, (error, data, response) => {
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
 **embeddedAccountAuthorisationRequest** | [**EmbeddedAccountAuthorisationRequest**](EmbeddedAccountAuthorisationRequest.md)|  | 
 **psuId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuCorporateId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuIpAddress** | **String**| __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **raw** | **Boolean**| __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | [optional] 

### Return type

[**ApiResponseOfEmbeddedAccountAuthorisationResponse**](ApiResponseOfEmbeddedAccountAuthorisationResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## reAuthoriseAccount

> ApiResponseOfAccountAuthorisationResponse reAuthoriseAccount(consent, opts)

Re-authorise Account Consent

Used to prompt the account holder for continued access to their financial data. This endpoint should be used when a &#x60;Consent&#x60; that was previously &#x60;AUTHORIZED&#x60; can no longer be used to retrieve data.&lt;br&gt;&lt;br&gt;See [Re-Authorisation](https://docs.yapily.com/pages/key-concepts/account-data/account-consents/#re-authorisation) for more information.

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.AuthorisationsApi();
let consent = {consentToken}; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
let opts = {
  'psuId': "psuId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuCorporateId': "psuCorporateId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuIpAddress': "psuIpAddress_example", // String | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'raw': true // Boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
};
apiInstance.reAuthoriseAccount(consent, opts, (error, data, response) => {
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
 **consent** | **String**| __Mandatory__. The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the request. | 
 **psuId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuCorporateId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuIpAddress** | **String**| __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **raw** | **Boolean**| __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | [optional] 

### Return type

[**ApiResponseOfAccountAuthorisationResponse**](ApiResponseOfAccountAuthorisationResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## updateEmbeddedAccountRequest

> ApiResponseOfEmbeddedAccountAuthorisationResponse updateEmbeddedAccountRequest(consentId, embeddedAccountAuthorisationRequest, opts)

Update Embedded Account Authorisation

Used to pass the SCA Code received from the &#x60;Institution&#x60; (and the SCA method selected by the user where multiple SCA methods are supported by the &#x60;Institution&#x60;) in order to complete the embedded authorisation to access the user&#39;s financial data. &lt;br&gt;&lt;br&gt;See [Embedded Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/embedded-account-flows/) for more information about this flow.&lt;br&gt;&lt;br&gt;Feature: &#x60;INITIATE_EMBEDDED_ACCOUNT_REQUEST&#x60;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.AuthorisationsApi();
let consentId = "consentId_example"; // String | __Mandatory__. The consent Id of the `Consent` to update.
let embeddedAccountAuthorisationRequest = new YapilyApi.EmbeddedAccountAuthorisationRequest(); // EmbeddedAccountAuthorisationRequest | 
let opts = {
  'psuId': "psuId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuCorporateId': "psuCorporateId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuIpAddress': "psuIpAddress_example", // String | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'raw': true // Boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
};
apiInstance.updateEmbeddedAccountRequest(consentId, embeddedAccountAuthorisationRequest, opts, (error, data, response) => {
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
 **consentId** | **String**| __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update. | 
 **embeddedAccountAuthorisationRequest** | [**EmbeddedAccountAuthorisationRequest**](EmbeddedAccountAuthorisationRequest.md)|  | 
 **psuId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuCorporateId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuIpAddress** | **String**| __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **raw** | **Boolean**| __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | [optional] 

### Return type

[**ApiResponseOfEmbeddedAccountAuthorisationResponse**](ApiResponseOfEmbeddedAccountAuthorisationResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## updateEmbeddedBulkPaymentAuthorisation

> ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse updateEmbeddedBulkPaymentAuthorisation(consentId, bulkPaymentEmbeddedAuthorisationRequest, opts)

Update Embedded Bulk Payment Authorisation

Used to pass the SCA Code received from the &#x60;Institution&#x60; (and the SCA method selected by the user where multiple SCA methods are supported by the &#x60;Institution&#x60;) in order to complete the embedded authorisation to initiate a bulk payment. See [Bulk Payments](https://docs.yapily.com/pages/key-concepts/payments/payment-execution/bulk-payments/) for more information. &lt;br&gt;&lt;br&gt;See [Embedded Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/embedded-payment-flows/) for more information about this flow.&lt;br&gt;&lt;br&gt;Feature: &#x60;INITIATE_EMBEDDED_BULK_PAYMENT&#x60;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.AuthorisationsApi();
let consentId = "consentId_example"; // String | __Mandatory__. The consent Id of the `Consent` to update.
let bulkPaymentEmbeddedAuthorisationRequest = new YapilyApi.BulkPaymentEmbeddedAuthorisationRequest(); // BulkPaymentEmbeddedAuthorisationRequest | 
let opts = {
  'psuId': "psuId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuCorporateId': "psuCorporateId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuIpAddress': "psuIpAddress_example", // String | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'raw': true // Boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
};
apiInstance.updateEmbeddedBulkPaymentAuthorisation(consentId, bulkPaymentEmbeddedAuthorisationRequest, opts, (error, data, response) => {
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
 **consentId** | **String**| __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update. | 
 **bulkPaymentEmbeddedAuthorisationRequest** | [**BulkPaymentEmbeddedAuthorisationRequest**](BulkPaymentEmbeddedAuthorisationRequest.md)|  | 
 **psuId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuCorporateId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuIpAddress** | **String**| __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **raw** | **Boolean**| __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | [optional] 

### Return type

[**ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse**](ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## updateEmbeddedPaymentAuthorisation

> ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse updateEmbeddedPaymentAuthorisation(consentId, paymentEmbeddedAuthorisationRequest, opts)

Update Embedded Payment Authorisation

Used to pass the SCA Code received from the &#x60;Institution&#x60; (and the SCA method selected by the user where multiple SCA methods are supported by the &#x60;Institution&#x60;) in order to complete the embedded authorisation to initiate a payment. &lt;br&gt;&lt;br&gt; See [Embedded Payment Flows](https://docs.yapily.com/guides/payments/payment-authorisation-flows/embedded/) for more information about this flow.&lt;br&gt;&lt;br&gt;Feature: &#x60;INITIATE_EMBEDDED_DOMESTIC_SINGLE_PAYMENT&#x60;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.AuthorisationsApi();
let consentId = "consentId_example"; // String | __Mandatory__. The consent Id of the `Consent` to update.
let paymentEmbeddedAuthorisationRequest = new YapilyApi.PaymentEmbeddedAuthorisationRequest(); // PaymentEmbeddedAuthorisationRequest | 
let opts = {
  'psuId': "psuId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuCorporateId': "psuCorporateId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuIpAddress': "psuIpAddress_example", // String | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'raw': true // Boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
};
apiInstance.updateEmbeddedPaymentAuthorisation(consentId, paymentEmbeddedAuthorisationRequest, opts, (error, data, response) => {
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
 **consentId** | **String**| __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update. | 
 **paymentEmbeddedAuthorisationRequest** | [**PaymentEmbeddedAuthorisationRequest**](PaymentEmbeddedAuthorisationRequest.md)|  | 
 **psuId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuCorporateId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuIpAddress** | **String**| __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **raw** | **Boolean**| __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | [optional] 

### Return type

[**ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse**](ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## updatePaymentAuthorisation

> ApiResponseOfPaymentAuthorisationRequestResponse updatePaymentAuthorisation(consent, paymentAuthorisationRequest, opts)

Update Payment Pre-authorisation

Used to continue the authorisation process and for any &#x60;Institution&#x60; that contains the &#x60;INITIATE_PRE_AUTHORISATION&#x60; feature and direct user to the login screen of their financial institution in order to give consent to initiate a payment. &lt;br&gt;&lt;br&gt;See [Redirect Payment Flows](https://docs.yapily.com/pages/key-concepts/payments/payment-authorisation/redirect-payment-flows/) for more information about this flow. &lt;br&gt;&lt;br&gt;Feature: &#x60;INITIATE_PRE_AUTHORISATION&#x60;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.AuthorisationsApi();
let consent = {consentToken}; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
let paymentAuthorisationRequest = new YapilyApi.PaymentAuthorisationRequest(); // PaymentAuthorisationRequest | 
let opts = {
  'psuId': "psuId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuCorporateId': "psuCorporateId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuIpAddress': "psuIpAddress_example", // String | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'raw': true // Boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
};
apiInstance.updatePaymentAuthorisation(consent, paymentAuthorisationRequest, opts, (error, data, response) => {
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
 **consent** | **String**| __Mandatory__. The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the request. | 
 **paymentAuthorisationRequest** | [**PaymentAuthorisationRequest**](PaymentAuthorisationRequest.md)|  | 
 **psuId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuCorporateId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuIpAddress** | **String**| __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **raw** | **Boolean**| __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | [optional] 

### Return type

[**ApiResponseOfPaymentAuthorisationRequestResponse**](ApiResponseOfPaymentAuthorisationRequestResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## updatePreAuthoriseAccountConsent

> ApiResponseOfAccountAuthorisationResponse updatePreAuthoriseAccountConsent(consent, accountAuthorisationRequest, opts)

Update Account Pre-authorisation

Used to continue the authorisation process and for any &#x60;Institution&#x60; that contains the &#x60;INITIATE_PRE_AUTHORISATION&#x60; feature and direct user to the login screen of their financial institution in order to give consent to access account data. &lt;br&gt;&lt;br&gt;See [Redirect Account Flows](https://docs.yapily.com/pages/key-concepts/account-data/account-authorisation/redirect-account-flows/) for more information about this flow. &lt;br&gt;&lt;br&gt;Features: &lt;ul&gt;&lt;li&gt;&#x60;INITIATE_ACCOUNT_REQUEST&#x60;&lt;/li&gt;&lt;li&gt;&#x60;INITIATE_PRE_AUTHORISATION&#x60;&lt;/li&gt;&lt;/ul&gt;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.AuthorisationsApi();
let consent = {consentToken}; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
let accountAuthorisationRequest = new YapilyApi.AccountAuthorisationRequest(); // AccountAuthorisationRequest | 
let opts = {
  'psuId': "psuId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuCorporateId': "psuCorporateId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuIpAddress': "psuIpAddress_example", // String | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'raw': true // Boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
};
apiInstance.updatePreAuthoriseAccountConsent(consent, accountAuthorisationRequest, opts, (error, data, response) => {
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
 **consent** | **String**| __Mandatory__. The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the request. | 
 **accountAuthorisationRequest** | [**AccountAuthorisationRequest**](AccountAuthorisationRequest.md)|  | 
 **psuId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuCorporateId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuIpAddress** | **String**| __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **raw** | **Boolean**| __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | [optional] 

### Return type

[**ApiResponseOfAccountAuthorisationResponse**](ApiResponseOfAccountAuthorisationResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

