# YapilyApi.VariableRecurringPaymentsApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNonSweepingAuthorisation**](VariableRecurringPaymentsApi.md#createNonSweepingAuthorisation) | **POST** /variable-recurring-payments/non-sweeping/consents | Create Non-Sweeping Variable Recurring Payment Authorisation
[**createSweepingAuthorisation**](VariableRecurringPaymentsApi.md#createSweepingAuthorisation) | **POST** /variable-recurring-payments/sweeping/consents | Create Sweeping Variable Recurring Payment Authorisation
[**createVrpFundsConfirmation**](VariableRecurringPaymentsApi.md#createVrpFundsConfirmation) | **POST** /variable-recurring-payments/funds-confirmation | Confirm Funds for Variable Recurring Payment
[**createVrpPayment**](VariableRecurringPaymentsApi.md#createVrpPayment) | **POST** /variable-recurring-payments/payments | Create Variable Recurring Payment
[**getSweepingVrpConsentById**](VariableRecurringPaymentsApi.md#getSweepingVrpConsentById) | **GET** /variable-recurring-payments/sweeping/consents/{consentId} | Get Sweeping Variable Recurring Payment Consent Details
[**getVrpPaymentDetails**](VariableRecurringPaymentsApi.md#getVrpPaymentDetails) | **GET** /variable-recurring-payments/payments/{paymentId}/details | Get Variable Recurring Payment Details
[**getpNonSweepingVrpConsentById**](VariableRecurringPaymentsApi.md#getpNonSweepingVrpConsentById) | **GET** /variable-recurring-payments/non-sweeping/consents/{consentId} | Get Non-Sweeping Variable Recurring Payment Consent Details



## createNonSweepingAuthorisation

> ApiResponseOfNonSweepingAuthorisationResponse createNonSweepingAuthorisation(nonSweepingAuthorisationRequest)

Create Non-Sweeping Variable Recurring Payment Authorisation

Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for Non-Sweeping Variable Recurring Payments. The request would return an Authorization URL and an Identifier for the consent created at the Institution. First make sure that the payment feature you wish to execute is supported by the bank by checking the features array in [GET Institution](https://docs.yapily.com/api/#get-institution). &lt;br&gt;&lt;br&gt;See [Redirect Payment Flows](https://docs.yapily.com/guides/payments/payment-authorisation-flows/redirect/) for more information about this flow.&lt;br&gt;&lt;br&gt;Features:&lt;ul&gt;&lt;li&gt;&#x60;INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_NONSWEEPING&#x60;&lt;/li&gt;&lt;/ul&gt;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.VariableRecurringPaymentsApi();
let nonSweepingAuthorisationRequest = {"applicationUserId":"john.doe@company.com","institutionId":"modelo-sandbox","callback":"https://display-parameters.com/","controlParameters":{"psuAuthenticationMethods":["SCA_NOT_REQUIRED"],"periodicLimits":[{"totalMaxAmount":{"amount":100,"currency":"GBP"},"frequency":"DAILY","alignment":"CONSENT","maxNumberOfPayments":1}],"maxAmountPerPayment":{"amount":10,"currency":"GBP"},"maxCumulativeAmount":{"amount":100,"currency":"GBP"},"maxCumulativeNumberOfPayments":10},"initiationDetails":{"reference":"Bill Payment","payer":{"name":"John Doe","accountIdentifications":[{"type":"ACCOUNT_NUMBER","identification":"87654321"},{"type":"SORT_CODE","identification":"654321"}]},"payee":{"name":"Thames Water","accountIdentifications":[{"type":"ACCOUNT_NUMBER","identification":"12345678"},{"type":"SORT_CODE","identification":"123456"}]}}}; // NonSweepingAuthorisationRequest | 
apiInstance.createNonSweepingAuthorisation(nonSweepingAuthorisationRequest, (error, data, response) => {
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
 **nonSweepingAuthorisationRequest** | [**NonSweepingAuthorisationRequest**](NonSweepingAuthorisationRequest.md)|  | 

### Return type

[**ApiResponseOfNonSweepingAuthorisationResponse**](ApiResponseOfNonSweepingAuthorisationResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## createSweepingAuthorisation

> ApiResponseOfSweepingAuthorisationResponse createSweepingAuthorisation(sweepingAuthorisationRequest)

Create Sweeping Variable Recurring Payment Authorisation

Used to initiate the authorisation process and direct users to the login screen of their financial Institution in order to give their consent for Sweeping Variable Recurring Payments. The request would return an Authorization URL and an Identifier for the consent created at the Institution. First make sure that the payment feature you wish to execute is supported by the bank by checking the features array in [GET Institution](https://docs.yapily.com/api/#get-institution). &lt;br&gt;&lt;br&gt;See [Redirect Payment Flows](https://docs.yapily.com/guides/payments/payment-authorisation-flows/redirect/) for more information about this flow.&lt;br&gt;&lt;br&gt;Features:&lt;ul&gt;&lt;li&gt;&#x60;INITIATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_SWEEPING&#x60;&lt;/li&gt;&lt;/ul&gt;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.VariableRecurringPaymentsApi();
let sweepingAuthorisationRequest = {"applicationUserId":"john.doe@company.com","institutionId":"modelo-sandbox","callback":"https://display-parameters.com/","controlParameters":{"psuAuthenticationMethods":["SCA_NOT_REQUIRED"],"periodicLimits":[{"totalMaxAmount":{"amount":100,"currency":"GBP"},"frequency":"DAILY","alignment":"CONSENT"}],"maxAmountPerPayment":{"amount":10,"currency":"GBP"}},"initiationDetails":{"reference":"Own Account Sweeping","payer":{"name":"John Doe","accountIdentifications":[{"type":"ACCOUNT_NUMBER","identification":"87654321"},{"type":"SORT_CODE","identification":"654321"}]},"payee":{"name":"John Doe","accountIdentifications":[{"type":"ACCOUNT_NUMBER","identification":"12345678"},{"type":"SORT_CODE","identification":"123456"}]}}}; // SweepingAuthorisationRequest | 
apiInstance.createSweepingAuthorisation(sweepingAuthorisationRequest, (error, data, response) => {
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
 **sweepingAuthorisationRequest** | [**SweepingAuthorisationRequest**](SweepingAuthorisationRequest.md)|  | 

### Return type

[**ApiResponseOfSweepingAuthorisationResponse**](ApiResponseOfSweepingAuthorisationResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## createVrpFundsConfirmation

> ApiResponseOfFundsConfirmationResponse createVrpFundsConfirmation(consent, fundsConfirmationRequest)

Confirm Funds for Variable Recurring Payment

Used to confirm funds on the Payer account to execute Variable Recurring Payments after obtaining the user&#39;s authorisation. &lt;br&gt;&lt;br&gt;Features:&lt;ul&gt;&lt;li&gt;&#x60;VARIABLE_RECURRING_PAYMENT_FUNDS_CONFIRMATION&#x60;&lt;/li&gt;&lt;/ul&gt;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.VariableRecurringPaymentsApi();
let consent = {consentToken}; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
let fundsConfirmationRequest = {"reference":"Own Account Sweeping","paymentAmount":{"amount":10,"currency":"GBP"}}; // FundsConfirmationRequest | 
apiInstance.createVrpFundsConfirmation(consent, fundsConfirmationRequest, (error, data, response) => {
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
 **fundsConfirmationRequest** | [**FundsConfirmationRequest**](FundsConfirmationRequest.md)|  | 

### Return type

[**ApiResponseOfFundsConfirmationResponse**](ApiResponseOfFundsConfirmationResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## createVrpPayment

> ApiResponseOfSubmissionResponse createVrpPayment(consent, submissionRequest)

Create Variable Recurring Payment

Used to submit a Variable Recurring Payments transaction after obtaining the user&#39;s authorisation. First make sure that the payment feature you wish to execute is supported by the bank by checking the features array in [GET Institution](https://docs.yapily.com/api/#get-institution). &lt;br&gt;&lt;br&gt;Features:&lt;ul&gt;&lt;li&gt;&#x60;CREATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_SWEEPING&#x60;&lt;/li&gt;&lt;li&gt;&#x60;CREATE_DOMESTIC_VARIABLE_RECURRING_PAYMENT_NONSWEEPING&#x60;&lt;/li&gt;&lt;/ul&gt;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.VariableRecurringPaymentsApi();
let consent = {consentToken}; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
let submissionRequest = {"paymentIdempotencyId":"234g87t58tgeuo848wudjew489","psuAuthenticationMethod":"SCA_NOT_REQUIRED","paymentAmount":{"amount":10,"currency":"GBP"}}; // SubmissionRequest | 
apiInstance.createVrpPayment(consent, submissionRequest, (error, data, response) => {
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
 **submissionRequest** | [**SubmissionRequest**](SubmissionRequest.md)|  | 

### Return type

[**ApiResponseOfSubmissionResponse**](ApiResponseOfSubmissionResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## getSweepingVrpConsentById

> ApiResponseOfSweepingAuthorisationResponse getSweepingVrpConsentById(consentId)

Get Sweeping Variable Recurring Payment Consent Details

Get Sweeping Variable Recurring Payments consent details using the consent Id

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.VariableRecurringPaymentsApi();
let consentId = "consentId_example"; // String | __Mandatory__. The consent Id of the `Variable Recurring Payments Consent` to retrieve.
apiInstance.getSweepingVrpConsentById(consentId, (error, data, response) => {
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
 **consentId** | **String**| __Mandatory__. The consent Id of the &#x60;Variable Recurring Payments Consent&#x60; to retrieve. | 

### Return type

[**ApiResponseOfSweepingAuthorisationResponse**](ApiResponseOfSweepingAuthorisationResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getVrpPaymentDetails

> ApiResponseOfSubmissionResponse getVrpPaymentDetails(paymentId, consent)

Get Variable Recurring Payment Details

Get Variable Recurring Payment details using the Payment Id

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.VariableRecurringPaymentsApi();
let paymentId = "paymentId_example"; // String | __Mandatory__. The Payment Id of the `Variable Recurring Payments` to retrieve.
let consent = "consent_example"; // String | __Mandatory__. The consent token containing the user's authorisation to make the `Variable Recurring Payments` request.
apiInstance.getVrpPaymentDetails(paymentId, consent, (error, data, response) => {
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
 **paymentId** | **String**| __Mandatory__. The Payment Id of the &#x60;Variable Recurring Payments&#x60; to retrieve. | 
 **consent** | **String**| __Mandatory__. The consent token containing the user&#39;s authorisation to make the &#x60;Variable Recurring Payments&#x60; request. | 

### Return type

[**ApiResponseOfSubmissionResponse**](ApiResponseOfSubmissionResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getpNonSweepingVrpConsentById

> ApiResponseOfNonSweepingAuthorisationResponse getpNonSweepingVrpConsentById(consentId)

Get Non-Sweeping Variable Recurring Payment Consent Details

Get Non-Sweeping Variable Recurring Payments consent details using the consent Id

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.VariableRecurringPaymentsApi();
let consentId = "consentId_example"; // String | __Mandatory__. The consent Id of the `Variable Recurring Payments Consent` to retrieve.
apiInstance.getpNonSweepingVrpConsentById(consentId, (error, data, response) => {
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
 **consentId** | **String**| __Mandatory__. The consent Id of the &#x60;Variable Recurring Payments Consent&#x60; to retrieve. | 

### Return type

[**ApiResponseOfNonSweepingAuthorisationResponse**](ApiResponseOfNonSweepingAuthorisationResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

