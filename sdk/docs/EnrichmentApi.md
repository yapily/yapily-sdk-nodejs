# YapilyApi.EnrichmentApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountsTransactionsCategorised**](EnrichmentApi.md#getAccountsTransactionsCategorised) | **GET** /accounts/{accountId}/transactions/categorisation/{categorisationId} | Get Categorised Transactions
[**getCategorisationAccountType**](EnrichmentApi.md#getCategorisationAccountType) | **GET** /transactions/categorisation/categories/{accountType} | Get the list of all categories for a specific account type
[**postAccountsAccountIdTransactionsCategorisation**](EnrichmentApi.md#postAccountsAccountIdTransactionsCategorisation) | **POST** /accounts/{accountId}/transactions/categorisation | Trigger transaction categorisation



## getAccountsTransactionsCategorised

> InlineResponse2001 getAccountsTransactionsCategorised(consent, accountId, categorisationId, opts)

Get Categorised Transactions

Retrieve a set of categorised transactions using a provided categorisation ID (__Note__: A categorisation ID will only be valid for 30 mins after a __transactions.categorisation.successful__ wedhook has be received)

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.EnrichmentApi();
let consent = {consentToken}; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
let accountId = "accountId_example"; // String | Unique identifier for account
let categorisationId = "categorisationId_example"; // String | Unique identifier for transaction categorisation request
let opts = {
  'subApplication': "subApplication_example", // String | The sub-application ID to which event type is being subscribed to
  'limit': 56, // Number | __Optional__. The maximum number of transaction records to be returned. Must be between 100 and 1000. If not specified will default to 100.
  'page': 56 // Number | __Optional__. The page number to be returned. If not specified will default to 1.
};
apiInstance.getAccountsTransactionsCategorised(consent, accountId, categorisationId, opts, (error, data, response) => {
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
 **accountId** | **String**| Unique identifier for account | 
 **categorisationId** | **String**| Unique identifier for transaction categorisation request | 
 **subApplication** | **String**| The sub-application ID to which event type is being subscribed to | [optional] 
 **limit** | **Number**| __Optional__. The maximum number of transaction records to be returned. Must be between 100 and 1000. If not specified will default to 100. | [optional] 
 **page** | **Number**| __Optional__. The page number to be returned. If not specified will default to 1. | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json;charset=UTF-8


## getCategorisationAccountType

> InlineResponse2002 getCategorisationAccountType(accountType, opts)

Get the list of all categories for a specific account type

Returns the list of categories that can be returned for a specific account type (consumer or business)

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.EnrichmentApi();
let accountType = "accountType_example"; // String | type of bank account (consumer or business)
let opts = {
  'subApplication': "subApplication_example" // String | The sub-application ID to which event type is being subscribed to
};
apiInstance.getCategorisationAccountType(accountType, opts, (error, data, response) => {
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
 **accountType** | **String**| type of bank account (consumer or business) | 
 **subApplication** | **String**| The sub-application ID to which event type is being subscribed to | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json;charset=UTF-8


## postAccountsAccountIdTransactionsCategorisation

> InlineResponse201 postAccountsAccountIdTransactionsCategorisation(consent, accountId, opts)

Trigger transaction categorisation

Trigger categorisation for a specified set of transactions

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.EnrichmentApi();
let consent = {consentToken}; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
let accountId = "accountId_example"; // String | Unique identifier for account
let opts = {
  'psuId': "psuId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a personal account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuCorporateId': "psuCorporateId_example", // String | __Conditional__. Represents the user's login ID for the `Institution` to a business account. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'psuIpAddress': "psuIpAddress_example", // String | __Conditional__. The IP address of the PSU. <br><br>See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required.
  'subApplication': "subApplication_example", // String | The sub-application ID to which event type is being subscribed to
  'inlineObject': new YapilyApi.InlineObject() // InlineObject | 
};
apiInstance.postAccountsAccountIdTransactionsCategorisation(consent, accountId, opts, (error, data, response) => {
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
 **accountId** | **String**| Unique identifier for account | 
 **psuId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a personal account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuCorporateId** | **String**| __Conditional__. Represents the user&#39;s login ID for the &#x60;Institution&#x60; to a business account. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **psuIpAddress** | **String**| __Conditional__. The IP address of the PSU. &lt;br&gt;&lt;br&gt;See [PSU identifiers](https://docs.yapily.com/pages/knowledge/open-banking/psu_identifiers/) to see if this header is required. | [optional] 
 **subApplication** | **String**| The sub-application ID to which event type is being subscribed to | [optional] 
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/json;charset=UTF-8

