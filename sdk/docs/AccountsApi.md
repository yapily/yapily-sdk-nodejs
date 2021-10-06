# YapilyApi.AccountsApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountDirectDebitsUsingGET**](AccountsApi.md#getAccountDirectDebitsUsingGET) | **GET** /accounts/{accountId}/direct-debits | Get account direct debits
[**getAccountPeriodicPaymentsUsingGET**](AccountsApi.md#getAccountPeriodicPaymentsUsingGET) | **GET** /accounts/{accountId}/periodic-payments | Get account payments detail
[**getAccountScheduledPaymentsUsingGET**](AccountsApi.md#getAccountScheduledPaymentsUsingGET) | **GET** /accounts/{accountId}/scheduled-payments | Get account scheduled payments
[**getAccountUsingGET**](AccountsApi.md#getAccountUsingGET) | **GET** /accounts/{accountId} | Get account
[**getAccountsUsingGET**](AccountsApi.md#getAccountsUsingGET) | **GET** /accounts | Get accounts
[**getBeneficiariesUsingGET**](AccountsApi.md#getBeneficiariesUsingGET) | **GET** /accounts/{accountId}/beneficiaries | Get Beneficiaries
[**initiateAccountRequestUsingPOST**](AccountsApi.md#initiateAccountRequestUsingPOST) | **POST** /account-auth-requests | Initiate a new account request for user to authorize
[**reAuthoriseAccountUsingPATCH**](AccountsApi.md#reAuthoriseAccountUsingPATCH) | **PATCH** /account-auth-requests | Re-authorise account request
[**updatePreAuthoriseAccountConsentUsingPUT**](AccountsApi.md#updatePreAuthoriseAccountConsentUsingPUT) | **PUT** /account-auth-requests | Update pre authorize consent for user to authorise account



## getAccountDirectDebitsUsingGET

> ApiListResponseOfPaymentResponse getAccountDirectDebitsUsingGET(accountId, consent, opts)

Get account direct debits

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

var apiInstance = new YapilyApi.AccountsApi();
var accountId = "accountId_example"; // String | __Mandatory__. The account Id of the user's bank account.
var consent = "consent_example"; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
var opts = {
  'xYapilyApiVersion': "xYapilyApiVersion_example", // String | __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
  'limit': 56 // Number | __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccountDirectDebitsUsingGET(accountId, consent, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| __Mandatory__. The account Id of the user&#39;s bank account. | 
 **consent** | **String**| __Mandatory__. The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the request. | 
 **xYapilyApiVersion** | **String**| __Optional__. Determines the API version to use. Valid values are &#x60;1.0&#x60; or &#x60;2.0-ALPHA&#x60;. Defaults to &#x60;1.0&#x60; | [optional] 
 **limit** | **Number**| __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000. | [optional] 

### Return type

[**ApiListResponseOfPaymentResponse**](ApiListResponseOfPaymentResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getAccountPeriodicPaymentsUsingGET

> ApiListResponseOfPaymentResponse getAccountPeriodicPaymentsUsingGET(accountId, consent, opts)

Get account payments detail

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

var apiInstance = new YapilyApi.AccountsApi();
var accountId = "accountId_example"; // String | __Mandatory__. The account Id of the user's bank account.
var consent = "consent_example"; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
var opts = {
  'xYapilyApiVersion': "xYapilyApiVersion_example", // String | __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
  'limit': 56 // Number | __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccountPeriodicPaymentsUsingGET(accountId, consent, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| __Mandatory__. The account Id of the user&#39;s bank account. | 
 **consent** | **String**| __Mandatory__. The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the request. | 
 **xYapilyApiVersion** | **String**| __Optional__. Determines the API version to use. Valid values are &#x60;1.0&#x60; or &#x60;2.0-ALPHA&#x60;. Defaults to &#x60;1.0&#x60; | [optional] 
 **limit** | **Number**| __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000. | [optional] 

### Return type

[**ApiListResponseOfPaymentResponse**](ApiListResponseOfPaymentResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getAccountScheduledPaymentsUsingGET

> ApiListResponseOfPaymentResponse getAccountScheduledPaymentsUsingGET(accountId, consent, opts)

Get account scheduled payments

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

var apiInstance = new YapilyApi.AccountsApi();
var accountId = "accountId_example"; // String | __Mandatory__. The account Id of the user's bank account.
var consent = "consent_example"; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
var opts = {
  'xYapilyApiVersion': "xYapilyApiVersion_example", // String | __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
  'limit': 56 // Number | __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccountScheduledPaymentsUsingGET(accountId, consent, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| __Mandatory__. The account Id of the user&#39;s bank account. | 
 **consent** | **String**| __Mandatory__. The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the request. | 
 **xYapilyApiVersion** | **String**| __Optional__. Determines the API version to use. Valid values are &#x60;1.0&#x60; or &#x60;2.0-ALPHA&#x60;. Defaults to &#x60;1.0&#x60; | [optional] 
 **limit** | **Number**| __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000. | [optional] 

### Return type

[**ApiListResponseOfPaymentResponse**](ApiListResponseOfPaymentResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getAccountUsingGET

> ApiResponseOfAccount getAccountUsingGET(accountId, consent, opts)

Get account

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

var apiInstance = new YapilyApi.AccountsApi();
var accountId = "accountId_example"; // String | __Mandatory__. The account Id of the user's bank account.
var consent = "consent_example"; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
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
apiInstance.getAccountUsingGET(accountId, consent, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| __Mandatory__. The account Id of the user&#39;s bank account. | 
 **consent** | **String**| __Mandatory__. The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the request. | 
 **xYapilyApiVersion** | **String**| __Optional__. Determines the API version to use. Valid values are &#x60;1.0&#x60; or &#x60;2.0-ALPHA&#x60;. Defaults to &#x60;1.0&#x60; | [optional] 
 **psuId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | [optional] 
 **psuCorporateId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | [optional] 
 **psuIpAddress** | **String**| __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | [optional] 

### Return type

[**ApiResponseOfAccount**](ApiResponseOfAccount.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getAccountsUsingGET

> ApiListResponseOfAccount getAccountsUsingGET(consent, opts)

Get accounts

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

var apiInstance = new YapilyApi.AccountsApi();
var consent = "consent_example"; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
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
apiInstance.getAccountsUsingGET(consent, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consent** | **String**| __Mandatory__. The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the request. | 
 **xYapilyApiVersion** | **String**| __Optional__. Determines the API version to use. Valid values are &#x60;1.0&#x60; or &#x60;2.0-ALPHA&#x60;. Defaults to &#x60;1.0&#x60; | [optional] 
 **psuId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | [optional] 
 **psuCorporateId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | [optional] 
 **psuIpAddress** | **String**| __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | [optional] 

### Return type

[**ApiListResponseOfAccount**](ApiListResponseOfAccount.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getBeneficiariesUsingGET

> ApiResponseOfListOfBeneficiary getBeneficiariesUsingGET(accountId, consent, opts)

Get Beneficiaries

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

var apiInstance = new YapilyApi.AccountsApi();
var accountId = "accountId_example"; // String | __Mandatory__. The account Id of the user's bank account.
var consent = "consent_example"; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
var opts = {
  'xYapilyApiVersion': "xYapilyApiVersion_example" // String | __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBeneficiariesUsingGET(accountId, consent, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| __Mandatory__. The account Id of the user&#39;s bank account. | 
 **consent** | **String**| __Mandatory__. The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the request. | 
 **xYapilyApiVersion** | **String**| __Optional__. Determines the API version to use. Valid values are &#x60;1.0&#x60; or &#x60;2.0-ALPHA&#x60;. Defaults to &#x60;1.0&#x60; | [optional] 

### Return type

[**ApiResponseOfListOfBeneficiary**](ApiResponseOfListOfBeneficiary.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## initiateAccountRequestUsingPOST

> ApiResponseOfAuthorisationRequestResponse initiateAccountRequestUsingPOST(accountAuthRequest, opts)

Initiate a new account request for user to authorize

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

var apiInstance = new YapilyApi.AccountsApi();
var accountAuthRequest = new YapilyApi.AccountAuthorisationRequest(); // AccountAuthorisationRequest | accountAuthRequest
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
apiInstance.initiateAccountRequestUsingPOST(accountAuthRequest, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountAuthRequest** | [**AccountAuthorisationRequest**](AccountAuthorisationRequest.md)| accountAuthRequest | 
 **xYapilyApiVersion** | **String**| __Optional__. Determines the API version to use. Valid values are &#x60;1.0&#x60; or &#x60;2.0-ALPHA&#x60;. Defaults to &#x60;1.0&#x60; | [optional] 
 **psuId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | [optional] 
 **psuCorporateId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | [optional] 
 **psuIpAddress** | **String**| __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | [optional] 

### Return type

[**ApiResponseOfAuthorisationRequestResponse**](ApiResponseOfAuthorisationRequestResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## reAuthoriseAccountUsingPATCH

> ApiResponseOfAuthorisationRequestResponse reAuthoriseAccountUsingPATCH(consent, opts)

Re-authorise account request

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

var apiInstance = new YapilyApi.AccountsApi();
var consent = "consent_example"; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
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
apiInstance.reAuthoriseAccountUsingPATCH(consent, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consent** | **String**| __Mandatory__. The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the request. | 
 **xYapilyApiVersion** | **String**| __Optional__. Determines the API version to use. Valid values are &#x60;1.0&#x60; or &#x60;2.0-ALPHA&#x60;. Defaults to &#x60;1.0&#x60; | [optional] 
 **psuId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | [optional] 
 **psuCorporateId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | [optional] 
 **psuIpAddress** | **String**| __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | [optional] 

### Return type

[**ApiResponseOfAuthorisationRequestResponse**](ApiResponseOfAuthorisationRequestResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## updatePreAuthoriseAccountConsentUsingPUT

> ApiResponseOfAuthorisationRequestResponse updatePreAuthoriseAccountConsentUsingPUT(consent, accountAuthRequest, opts)

Update pre authorize consent for user to authorise account

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

var apiInstance = new YapilyApi.AccountsApi();
var consent = "consent_example"; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
var accountAuthRequest = new YapilyApi.AccountAuthorisationRequest(); // AccountAuthorisationRequest | accountAuthRequest
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
apiInstance.updatePreAuthoriseAccountConsentUsingPUT(consent, accountAuthRequest, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consent** | **String**| __Mandatory__. The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the request. | 
 **accountAuthRequest** | [**AccountAuthorisationRequest**](AccountAuthorisationRequest.md)| accountAuthRequest | 
 **xYapilyApiVersion** | **String**| __Optional__. Determines the API version to use. Valid values are &#x60;1.0&#x60; or &#x60;2.0-ALPHA&#x60;. Defaults to &#x60;1.0&#x60; | [optional] 
 **psuId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | [optional] 
 **psuCorporateId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | [optional] 
 **psuIpAddress** | **String**| __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | [optional] 

### Return type

[**ApiResponseOfAuthorisationRequestResponse**](ApiResponseOfAuthorisationRequestResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

