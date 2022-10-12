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
[**getStatement**](FinancialDataApi.md#getStatement) | **GET** /accounts/{accountId}/statements/{statementId} | Get Account Statement
[**getStatementFile**](FinancialDataApi.md#getStatementFile) | **GET** /accounts/{accountId}/statements/{statementId}/file | Get Account Statement File
[**getStatements**](FinancialDataApi.md#getStatements) | **GET** /accounts/{accountId}/statements | Get Account Statements
[**getTransactions**](FinancialDataApi.md#getTransactions) | **GET** /accounts/{accountId}/transactions | Get Account Transactions



## getAccount

> ApiResponseOfAccount getAccount(accountId, consent, opts)

Get Account

Used to return the account and balance information for the end user associated with the presented consent token.&lt;br&gt;&lt;br&gt;Feature: &#x60;ACCOUNTS&#x60;

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
  'raw': true // Boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
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
 **raw** | **Boolean**| __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | [optional] 

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

Used to return the balance for the end user associated with the presented consent token.&lt;br&gt;&lt;br&gt; __Note__: This endpoint is only for obtaining the balance information of an account belonging to an &#x60;Institution&#x60; that exposes their APIs through the [CBI Globe Gateway](https://docs.yapily.com/pages/knowledge/open-banking/cbi_globe//). If the &#x60;Institution&#x60; you wish to obtain balance data is not in the CBI Globe, use [Get Account](https://docs.yapily.com/api/reference/#operation/getAccount) or [Get Accounts](https://docs.yapily.com/api/reference/#operation/getAccounts) to get balance data. &lt;br&gt;&lt;br&gt;Feature: &#x60;ACCOUNT_BALANCES&#x60; 

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
  'raw': true // Boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
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
 **raw** | **Boolean**| __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | [optional] 

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

Used to get the list of direct debits for an account.&lt;br&gt;&lt;br&gt;Feature: &#x60;ACCOUNT_DIRECT_DEBIT&#x60;

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
  'limit': 56, // Number | __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
  'raw': true // Boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
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
 **limit** | **Number**| __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000. | [optional] 
 **raw** | **Boolean**| __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | [optional] 

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

Used to get the list of periodic payments (standing orders in the UK) for an account.&lt;br&gt;&lt;br&gt;Feature: &#x60;ACCOUNT_PERIODIC_PAYMENTS&#x60;

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
  'limit': 56, // Number | __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
  'raw': true // Boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
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
 **limit** | **Number**| __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000. | [optional] 
 **raw** | **Boolean**| __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | [optional] 

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

Used to get the list of scheduled payments for an account.&lt;br&gt;&lt;br&gt;Feature: &#x60;ACCOUNT_SCHEDULED_PAYMENT&#x60;

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
  'limit': 56, // Number | __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
  'raw': true // Boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
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
 **limit** | **Number**| __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000. | [optional] 
 **raw** | **Boolean**| __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | [optional] 

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

Used to return all accounts and balances for the end user associated with the presented consent token.&lt;br&gt;&lt;br&gt;Feature: &#x60;ACCOUNTS&#x60;

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
  'raw': true // Boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
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
 **raw** | **Boolean**| __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | [optional] 

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

Used to get all the beneficiaries of a user&#39;s account&lt;br&gt;&lt;br&gt;Feature: &#x60;ACCOUNT_BENEFICIARIES&#x60;

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
  'raw': true // Boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
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
 **raw** | **Boolean**| __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | [optional] 

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

Used to get the identity information for an account.&lt;br&gt;&lt;br&gt;Feature: &#x60;IDENTITY&#x60;

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
  'raw': true // Boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
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
 **raw** | **Boolean**| __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | [optional] 

### Return type

[**ApiResponseOfIdentity**](ApiResponseOfIdentity.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getStatement

> ApiResponseOfAccountStatement getStatement(consent, accountId, statementId, opts)

Get Account Statement

Used to get a statement for an account.&lt;br&gt;&lt;br&gt;Feature: &#x60;ACCOUNT_STATEMENT&#x60;

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
  'raw': true // Boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
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
 **raw** | **Boolean**| __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | [optional] 

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

Used to get the statement file for an account.&lt;br&gt;&lt;br&gt;Feature: &#x60;ACCOUNT_STATEMENT_FILE&#x60;

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
  'raw': true // Boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
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
 **raw** | **Boolean**| __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | [optional] 

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

Used to get the list of statements for an account.&lt;br&gt;&lt;br&gt;Feature: &#x60;ACCOUNT_STATEMENTS&#x60;

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
  'from': "from_example", // String | __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd'T'HH:mm:ss.SSSZ). 
  'before': "before_example", // String | __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd'T'HH:mm:ss.SSSZ).
  'limit': 56, // Number | __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
  'sort': new YapilyApi.SortEnum(), // SortEnum | __Optional__. Sort transaction records by date ascending with 'date' or descending with '-date'. The default sort order is descending
  'offset': 56, // Number | __Optional__. The number of transaction records to be skipped. Used primarily with paginated results.
  'raw': true // Boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
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
 **from** | **String**| __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ).  | [optional] 
 **before** | **String**| __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ). | [optional] 
 **limit** | **Number**| __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000. | [optional] 
 **sort** | [**SortEnum**](.md)| __Optional__. Sort transaction records by date ascending with &#39;date&#39; or descending with &#39;-date&#39;. The default sort order is descending | [optional] 
 **offset** | **Number**| __Optional__. The number of transaction records to be skipped. Used primarily with paginated results. | [optional] 
 **raw** | **Boolean**| __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | [optional] 

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

Used to get the account transactions for an account&lt;br&gt;&lt;br&gt;Feature: &#x60;ACCOUNT_TRANSACTIONS&#x60;

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
  '_with': ["null"], // [String] | __Optional__. Can be `categories` or `merchant`. When set, will include enrichment data in the transactions returned. <br><br>Enrichment data is optional, e.g. when 'merchant' enrichment data is requested, the enrichment response will include merchant data only if it can be evaluated from the transaction.
  'from': "from_example", // String | __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd'T'HH:mm:ss.SSSZ). 
  'before': "before_example", // String | __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd'T'HH:mm:ss.SSSZ).
  'limit': 56, // Number | __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
  'sort': new YapilyApi.SortEnum(), // SortEnum | __Optional__. Sort transaction records by date ascending with 'date' or descending with '-date'. The default sort order is descending
  'offset': 56, // Number | __Optional__. The number of transaction records to be skipped. Used primarily with paginated results.
  'cursor': "cursor_example", // String | __Optional__. This property is not currently in use.
  'raw': true // Boolean | __Optional__. Used to obtain the raw request and response to and from the <code>Institution</code>.
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
 **_with** | [**[String]**](String.md)| __Optional__. Can be &#x60;categories&#x60; or &#x60;merchant&#x60;. When set, will include enrichment data in the transactions returned. &lt;br&gt;&lt;br&gt;Enrichment data is optional, e.g. when &#39;merchant&#39; enrichment data is requested, the enrichment response will include merchant data only if it can be evaluated from the transaction. | [optional] 
 **from** | **String**| __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ).  | [optional] 
 **before** | **String**| __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ). | [optional] 
 **limit** | **Number**| __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000. | [optional] 
 **sort** | [**SortEnum**](.md)| __Optional__. Sort transaction records by date ascending with &#39;date&#39; or descending with &#39;-date&#39;. The default sort order is descending | [optional] 
 **offset** | **Number**| __Optional__. The number of transaction records to be skipped. Used primarily with paginated results. | [optional] 
 **cursor** | **String**| __Optional__. This property is not currently in use. | [optional] 
 **raw** | **Boolean**| __Optional__. Used to obtain the raw request and response to and from the &lt;code&gt;Institution&lt;/code&gt;. | [optional] 

### Return type

[**ApiListResponseOfTransaction**](ApiListResponseOfTransaction.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

