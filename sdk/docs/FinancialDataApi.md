# YapilyApi.FinancialDataApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccount**](FinancialDataApi.md#getAccount) | **GET** /accounts/{accountId} | Get Account
[**getAccountBalances**](FinancialDataApi.md#getAccountBalances) | **GET** /accounts/{accountId}/balances | Get Account Balances
[**getAccountDirectDebits**](FinancialDataApi.md#getAccountDirectDebits) | **GET** /accounts/{accountId}/direct-debits | Get Account Direct Debits
[**getAccountPeriodicPayments**](FinancialDataApi.md#getAccountPeriodicPayments) | **GET** /accounts/{accountId}/periodic-payments | Get Account Periodic Payments
[**getAccountScheduledPayments**](FinancialDataApi.md#getAccountScheduledPayments) | **GET** /accounts/{accountId}/scheduled-payments | Get Account Scheduled Payments
[**getAccounts**](FinancialDataApi.md#getAccounts) | **GET** /accounts | Get Accounts
[**getBeneficiaries**](FinancialDataApi.md#getBeneficiaries) | **GET** /accounts/{accountId}/beneficiaries | Get Account Beneficiaries
[**getCategories**](FinancialDataApi.md#getCategories) | **GET** /categories/{country} | Get Categories
[**getIdentity**](FinancialDataApi.md#getIdentity) | **GET** /identity | Get Identity
[**getRealTimeTransactions**](FinancialDataApi.md#getRealTimeTransactions) | **GET** /accounts/{accountId}/real-time/transactions | Get Real Time Account Transactions
[**getStatement**](FinancialDataApi.md#getStatement) | **GET** /accounts/{accountId}/statements/{statementId} | Get Account Statement
[**getStatementFile**](FinancialDataApi.md#getStatementFile) | **GET** /accounts/{accountId}/statements/{statementId}/file | Get Account Statement File
[**getStatements**](FinancialDataApi.md#getStatements) | **GET** /accounts/{accountId}/statements | Get Account Statements
[**getTransactions**](FinancialDataApi.md#getTransactions) | **GET** /accounts/{accountId}/transactions | Get Account Transactions



## getAccount

> ApiResponseOfAccount getAccount(accountId, consent, opts)

Get Account

Returns the account and balance information for a user&#39;s specified account.&lt;br&gt;&lt;br&gt;Feature: &#x60;ACCOUNT&#x60;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.FinancialDataApi();
let accountId = "accountId_example"; // String | __Mandatory__. The account Id of the user's bank account.
let consent = {consentToken}; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
let opts = {
  'psuId': "psuId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuCorporateId': "psuCorporateId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuIpAddress': "psuIpAddress_example", // String | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'subApplication': "subApplication_example" // String | The sub-application ID to which event type is being subscribed to
};
apiInstance.getAccount(accountId, consent, opts, (error, data, response) => {
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
 **accountId** | **String**| __Mandatory__. The account Id of the user&#39;s bank account. | 
 **consent** | **String**| __Mandatory__. The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the request. | 
 **psuId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuCorporateId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuIpAddress** | **String**| __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **subApplication** | **String**| The sub-application ID to which event type is being subscribed to | [optional] 

### Return type

[**ApiResponseOfAccount**](ApiResponseOfAccount.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getAccountBalances

> ApiResponseOfBalances getAccountBalances(accountId, consent, opts)

Get Account Balances

Returns the balance for the end user associated with the presented consent token.&lt;br&gt;&lt;br&gt;Feature: &#x60;ACCOUNT_BALANCES&#x60;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.FinancialDataApi();
let accountId = "accountId_example"; // String | __Mandatory__. The account Id of the user's bank account.
let consent = {consentToken}; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
let opts = {
  'psuId': "psuId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuCorporateId': "psuCorporateId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuIpAddress': "psuIpAddress_example", // String | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'subApplication': "subApplication_example" // String | The sub-application ID to which event type is being subscribed to
};
apiInstance.getAccountBalances(accountId, consent, opts, (error, data, response) => {
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
 **accountId** | **String**| __Mandatory__. The account Id of the user&#39;s bank account. | 
 **consent** | **String**| __Mandatory__. The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the request. | 
 **psuId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuCorporateId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuIpAddress** | **String**| __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **subApplication** | **String**| The sub-application ID to which event type is being subscribed to | [optional] 

### Return type

[**ApiResponseOfBalances**](ApiResponseOfBalances.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getAccountDirectDebits

> ApiListResponseOfDirectDebitResponse getAccountDirectDebits(accountId, consent, opts)

Get Account Direct Debits

Returns the list of direct debits for an account.&lt;br&gt;&lt;br&gt;Feature: &#x60;ACCOUNT_DIRECT_DEBITS&#x60;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.FinancialDataApi();
let accountId = "accountId_example"; // String | __Mandatory__. The account Id of the user's bank account.
let consent = {consentToken}; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
let opts = {
  'subApplication': "subApplication_example", // String | The sub-application ID to which event type is being subscribed to
  'limit': 56 // Number | __Optional__. The maximum number of transaction records to be returned. Must be between 1 and 1000.
};
apiInstance.getAccountDirectDebits(accountId, consent, opts, (error, data, response) => {
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
 **accountId** | **String**| __Mandatory__. The account Id of the user&#39;s bank account. | 
 **consent** | **String**| __Mandatory__. The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the request. | 
 **subApplication** | **String**| The sub-application ID to which event type is being subscribed to | [optional] 
 **limit** | **Number**| __Optional__. The maximum number of transaction records to be returned. Must be between 1 and 1000. | [optional] 

### Return type

[**ApiListResponseOfDirectDebitResponse**](ApiListResponseOfDirectDebitResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getAccountPeriodicPayments

> ApiListResponseOfPaymentResponse getAccountPeriodicPayments(accountId, consent, opts)

Get Account Periodic Payments

Returns the list of periodic payments (standing orders in the UK) for an account.&lt;br&gt;&lt;br&gt;Feature: &#x60;ACCOUNT_PERIODIC_PAYMENTS&#x60;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.FinancialDataApi();
let accountId = "accountId_example"; // String | __Mandatory__. The account Id of the user's bank account.
let consent = {consentToken}; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
let opts = {
  'subApplication': "subApplication_example", // String | The sub-application ID to which event type is being subscribed to
  'limit': 56 // Number | __Optional__. The maximum number of transaction records to be returned. Must be between 1 and 1000.
};
apiInstance.getAccountPeriodicPayments(accountId, consent, opts, (error, data, response) => {
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
 **accountId** | **String**| __Mandatory__. The account Id of the user&#39;s bank account. | 
 **consent** | **String**| __Mandatory__. The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the request. | 
 **subApplication** | **String**| The sub-application ID to which event type is being subscribed to | [optional] 
 **limit** | **Number**| __Optional__. The maximum number of transaction records to be returned. Must be between 1 and 1000. | [optional] 

### Return type

[**ApiListResponseOfPaymentResponse**](ApiListResponseOfPaymentResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getAccountScheduledPayments

> ApiListResponseOfPaymentResponse getAccountScheduledPayments(accountId, consent, opts)

Get Account Scheduled Payments

Returns the list of scheduled payments for an account.&lt;br&gt;&lt;br&gt;Feature: &#x60;ACCOUNT_SCHEDULED_PAYMENTS&#x60;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.FinancialDataApi();
let accountId = "accountId_example"; // String | __Mandatory__. The account Id of the user's bank account.
let consent = {consentToken}; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
let opts = {
  'subApplication': "subApplication_example", // String | The sub-application ID to which event type is being subscribed to
  'limit': 56 // Number | __Optional__. The maximum number of transaction records to be returned. Must be between 1 and 1000.
};
apiInstance.getAccountScheduledPayments(accountId, consent, opts, (error, data, response) => {
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
 **accountId** | **String**| __Mandatory__. The account Id of the user&#39;s bank account. | 
 **consent** | **String**| __Mandatory__. The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the request. | 
 **subApplication** | **String**| The sub-application ID to which event type is being subscribed to | [optional] 
 **limit** | **Number**| __Optional__. The maximum number of transaction records to be returned. Must be between 1 and 1000. | [optional] 

### Return type

[**ApiListResponseOfPaymentResponse**](ApiListResponseOfPaymentResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getAccounts

> AccountApiListResponse getAccounts(consent, opts)

Get Accounts

Returns all accounts and balances for the end user associated with the presented consent token.&lt;br&gt;&lt;br&gt;Feature: &#x60;ACCOUNTS&#x60;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.FinancialDataApi();
let consent = {consentToken}; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
let opts = {
  'psuId': "psuId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuCorporateId': "psuCorporateId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuIpAddress': "psuIpAddress_example", // String | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'subApplication': "subApplication_example" // String | The sub-application ID to which event type is being subscribed to
};
apiInstance.getAccounts(consent, opts, (error, data, response) => {
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
 **subApplication** | **String**| The sub-application ID to which event type is being subscribed to | [optional] 

### Return type

[**AccountApiListResponse**](AccountApiListResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getBeneficiaries

> ApiListResponseOfBeneficiary getBeneficiaries(accountId, consent, opts)

Get Account Beneficiaries

Returns all the beneficiaries of a user&#39;s account.&lt;br&gt;&lt;br&gt;Feature: &#x60;ACCOUNT_BENEFICIARIES&#x60;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.FinancialDataApi();
let accountId = "accountId_example"; // String | __Mandatory__. The account Id of the user's bank account.
let consent = {consentToken}; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
let opts = {
  'subApplication': "subApplication_example" // String | The sub-application ID to which event type is being subscribed to
};
apiInstance.getBeneficiaries(accountId, consent, opts, (error, data, response) => {
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
 **accountId** | **String**| __Mandatory__. The account Id of the user&#39;s bank account. | 
 **consent** | **String**| __Mandatory__. The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the request. | 
 **subApplication** | **String**| The sub-application ID to which event type is being subscribed to | [optional] 

### Return type

[**ApiListResponseOfBeneficiary**](ApiListResponseOfBeneficiary.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getCategories

> ApiListResponseOfCategory getCategories(country)

Get Categories

Used to retrieve the list of categories returned by the Yapily Categorisation engine for a given locale. &lt;br&gt;&lt;br&gt;See [Data Enrichment](https://docs.yapily.com/pages/key-concepts/account-data/data-enrichment/intro-to-data-enrichment/) for more information.

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.FinancialDataApi();
let country = "country_example"; // String | __Mandatory__. The 2 letter country code e.g. 'GB'.
apiInstance.getCategories(country, (error, data, response) => {
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
 **country** | **String**| __Mandatory__. The 2 letter country code e.g. &#39;GB&#39;. | 

### Return type

[**ApiListResponseOfCategory**](ApiListResponseOfCategory.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getIdentity

> ApiResponseOfIdentity getIdentity(consent, opts)

Get Identity

Returns the identity information for an account.&lt;br&gt;&lt;br&gt;Feature: &#x60;IDENTITY&#x60;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.FinancialDataApi();
let consent = {consentToken}; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
let opts = {
  'subApplication': "subApplication_example" // String | The sub-application ID to which event type is being subscribed to
};
apiInstance.getIdentity(consent, opts, (error, data, response) => {
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
 **subApplication** | **String**| The sub-application ID to which event type is being subscribed to | [optional] 

### Return type

[**ApiResponseOfIdentity**](ApiResponseOfIdentity.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getRealTimeTransactions

> ApiListResponseOfRealTimeTransaction getRealTimeTransactions(accountId, consent, opts)

Get Real Time Account Transactions

Used to get the account transactions for an account in real time with cursor pagination&lt;br&gt;&lt;br&gt;Feature: &#x60;ACCOUNT_TRANSACTIONS&#x60;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.FinancialDataApi();
let accountId = "accountId_example"; // String | __Mandatory__. The account Id of the user's bank account.
let consent = {consentToken}; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
let opts = {
  'psuId': "psuId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
  'psuCorporateId': "psuCorporateId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
  'psuIpAddress': "psuIpAddress_example", // String | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required.
  'subApplication': "subApplication_example", // String | The sub-application ID to which event type is being subscribed to
  'from': "from_example", // String | __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd'T'HH:mm:ss.SSSZ).
  'before': "before_example", // String | __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd'T'HH:mm:ss.SSSZ).
  'cursor': "cursor_example" // String | __Optional__. The cursor token supplied by a previous call. The cursor represents a location in the data set.
};
apiInstance.getRealTimeTransactions(accountId, consent, opts, (error, data, response) => {
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
 **accountId** | **String**| __Mandatory__. The account Id of the user&#39;s bank account. | 
 **consent** | **String**| __Mandatory__. The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the request. | 
 **psuId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | [optional] 
 **psuCorporateId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | [optional] 
 **psuIpAddress** | **String**| __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/knowledge/psu_identifiers/) to see if this header is required. | [optional] 
 **subApplication** | **String**| The sub-application ID to which event type is being subscribed to | [optional] 
 **from** | **String**| __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ). | [optional] 
 **before** | **String**| __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ). | [optional] 
 **cursor** | **String**| __Optional__. The cursor token supplied by a previous call. The cursor represents a location in the data set. | [optional] 

### Return type

[**ApiListResponseOfRealTimeTransaction**](ApiListResponseOfRealTimeTransaction.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getStatement

> ApiResponseOfAccountStatement getStatement(consent, accountId, statementId, opts)

Get Account Statement

Returns a statement for an account.&lt;br&gt;&lt;br&gt;Feature: &#x60;ACCOUNT_STATEMENT&#x60;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.FinancialDataApi();
let consent = "consent_example"; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
let accountId = "accountId_example"; // String | __Mandatory__. The account Id of the user's bank account.
let statementId = "statementId_example"; // String | __Mandatory__. The statement Id of the statement file.
let opts = {
  'subApplication': "subApplication_example" // String | The sub-application ID to which event type is being subscribed to
};
apiInstance.getStatement(consent, accountId, statementId, opts, (error, data, response) => {
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
 **accountId** | **String**| __Mandatory__. The account Id of the user&#39;s bank account. | 
 **statementId** | **String**| __Mandatory__. The statement Id of the statement file. | 
 **subApplication** | **String**| The sub-application ID to which event type is being subscribed to | [optional] 

### Return type

[**ApiResponseOfAccountStatement**](ApiResponseOfAccountStatement.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getStatementFile

> File getStatementFile(consent, accountId, statementId, opts)

Get Account Statement File

Returns a PDF file of a statement for an account.&lt;br&gt;&lt;br&gt;Feature: &#x60;ACCOUNT_STATEMENT_FILE&#x60;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.FinancialDataApi();
let consent = {consentToken}; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
let accountId = "accountId_example"; // String | __Mandatory__. The account Id of the user's bank account.
let statementId = "statementId_example"; // String | __Mandatory__. The statement Id of the statement file.
let opts = {
  'subApplication': "subApplication_example" // String | The sub-application ID to which event type is being subscribed to
};
apiInstance.getStatementFile(consent, accountId, statementId, opts, (error, data, response) => {
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
 **accountId** | **String**| __Mandatory__. The account Id of the user&#39;s bank account. | 
 **statementId** | **String**| __Mandatory__. The statement Id of the statement file. | 
 **subApplication** | **String**| The sub-application ID to which event type is being subscribed to | [optional] 

### Return type

**File**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf, application/json;charset=UTF-8


## getStatements

> ApiListResponseOfAccountStatement getStatements(consent, accountId, opts)

Get Account Statements

Returns the list of statements for an account.&lt;br&gt;&lt;br&gt;Feature: &#x60;ACCOUNT_STATEMENTS&#x60;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.FinancialDataApi();
let consent = {consentToken}; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
let accountId = "accountId_example"; // String | __Mandatory__. The account Id of the user's bank account.
let opts = {
  'subApplication': "subApplication_example", // String | The sub-application ID to which event type is being subscribed to
  'from': "from_example", // String | __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd'T'HH:mm:ss.SSSZ). 
  'before': "before_example", // String | __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd'T'HH:mm:ss.SSSZ).
  'limit': 56, // Number | __Optional__. The maximum number of transaction records to be returned. Must be between 1 and 1000.
  'sort': new YapilyApi.SortEnum(), // SortEnum | __Optional__. Sort transaction records by date ascending with 'date' or descending with '-date'. The default sort order is descending
  'offset': 56 // Number | __Optional__. The number of transaction records to be skipped. Used primarily with paginated results.
};
apiInstance.getStatements(consent, accountId, opts, (error, data, response) => {
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
 **accountId** | **String**| __Mandatory__. The account Id of the user&#39;s bank account. | 
 **subApplication** | **String**| The sub-application ID to which event type is being subscribed to | [optional] 
 **from** | **String**| __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ).  | [optional] 
 **before** | **String**| __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ). | [optional] 
 **limit** | **Number**| __Optional__. The maximum number of transaction records to be returned. Must be between 1 and 1000. | [optional] 
 **sort** | [**SortEnum**](.md)| __Optional__. Sort transaction records by date ascending with &#39;date&#39; or descending with &#39;-date&#39;. The default sort order is descending | [optional] 
 **offset** | **Number**| __Optional__. The number of transaction records to be skipped. Used primarily with paginated results. | [optional] 

### Return type

[**ApiListResponseOfAccountStatement**](ApiListResponseOfAccountStatement.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getTransactions

> ApiListResponseOfTransaction getTransactions(accountId, consent, opts)

Get Account Transactions

Returns the account transactions for an account.&lt;br&gt;&lt;br&gt;Feature: &#x60;ACCOUNT_TRANSACTIONS&#x60;

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.FinancialDataApi();
let accountId = "accountId_example"; // String | __Mandatory__. The account Id of the user's bank account.
let consent = {consentToken}; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
let opts = {
  'psuId': "psuId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuCorporateId': "psuCorporateId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuIpAddress': "psuIpAddress_example", // String | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'subApplication': "subApplication_example", // String | The sub-application ID to which event type is being subscribed to
  '_with': ["null"], // [String] | __Optional__. Acceptable value: `categorisation`. When set, will include enrichment data in the transactions returned. <br><br>Enrichment data is optional, e.g. when 'categorisation' enrichment data is requested, the enrichment response will include categorisation data and merchant name, only if it can be evaluated from the transaction. This service is limited for UK institution transactions currently. __This is a legacy feature and will be deprecated. Date TBC__
  'from': "from_example", // String | __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd'T'HH:mm:ss.SSSZ). 
  'before': "before_example", // String | __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd'T'HH:mm:ss.SSSZ).
  'limit': 56, // Number | __Optional__. The maximum number of transaction records to be returned. Must be between 1 and 1000.
  'sort': new YapilyApi.SortEnum(), // SortEnum | __Optional__. Sort transaction records by date ascending with 'date' or descending with '-date'. The default sort order is descending
  'offset': 56, // Number | __Optional__. The number of transaction records to be skipped. Used primarily with paginated results.
  'cursor': "cursor_example" // String | __Optional__. This property is not currently in use.
};
apiInstance.getTransactions(accountId, consent, opts, (error, data, response) => {
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
 **accountId** | **String**| __Mandatory__. The account Id of the user&#39;s bank account. | 
 **consent** | **String**| __Mandatory__. The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the request. | 
 **psuId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuCorporateId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuIpAddress** | **String**| __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **subApplication** | **String**| The sub-application ID to which event type is being subscribed to | [optional] 
 **_with** | [**[String]**](String.md)| __Optional__. Acceptable value: &#x60;categorisation&#x60;. When set, will include enrichment data in the transactions returned. &lt;br&gt;&lt;br&gt;Enrichment data is optional, e.g. when &#39;categorisation&#39; enrichment data is requested, the enrichment response will include categorisation data and merchant name, only if it can be evaluated from the transaction. This service is limited for UK institution transactions currently. __This is a legacy feature and will be deprecated. Date TBC__ | [optional] 
 **from** | **String**| __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ).  | [optional] 
 **before** | **String**| __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ). | [optional] 
 **limit** | **Number**| __Optional__. The maximum number of transaction records to be returned. Must be between 1 and 1000. | [optional] 
 **sort** | [**SortEnum**](.md)| __Optional__. Sort transaction records by date ascending with &#39;date&#39; or descending with &#39;-date&#39;. The default sort order is descending | [optional] 
 **offset** | **Number**| __Optional__. The number of transaction records to be skipped. Used primarily with paginated results. | [optional] 
 **cursor** | **String**| __Optional__. This property is not currently in use. | [optional] 

### Return type

[**ApiListResponseOfTransaction**](ApiListResponseOfTransaction.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

