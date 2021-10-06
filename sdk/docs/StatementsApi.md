# YapilyApi.StatementsApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStatementFileUsingGET**](StatementsApi.md#getStatementFileUsingGET) | **GET** /accounts/{accountId}/statements/{statementId}/file | Get account statement file
[**getStatementUsingGET**](StatementsApi.md#getStatementUsingGET) | **GET** /accounts/{accountId}/statements/{statementId} | Get account statement
[**getStatementsUsingGET**](StatementsApi.md#getStatementsUsingGET) | **GET** /accounts/{accountId}/statements | Get account statements



## getStatementFileUsingGET

> String getStatementFileUsingGET(consent, accountId, statementId, opts)

Get account statement file

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

var apiInstance = new YapilyApi.StatementsApi();
var consent = "consent_example"; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
var accountId = "accountId_example"; // String | __Mandatory__. The account Id of the user's bank account.
var statementId = "statementId_example"; // String | __Mandatory__. The statement Id of the statement file.
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
apiInstance.getStatementFileUsingGET(consent, accountId, statementId, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consent** | **String**| __Mandatory__. The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the request. | 
 **accountId** | **String**| __Mandatory__. The account Id of the user&#39;s bank account. | 
 **statementId** | **String**| __Mandatory__. The statement Id of the statement file. | 
 **xYapilyApiVersion** | **String**| __Optional__. Determines the API version to use. Valid values are &#x60;1.0&#x60; or &#x60;2.0-ALPHA&#x60;. Defaults to &#x60;1.0&#x60; | [optional] 

### Return type

**String**

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getStatementUsingGET

> ApiResponseOfAccountStatement getStatementUsingGET(consent, accountId, statementId, opts)

Get account statement

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

var apiInstance = new YapilyApi.StatementsApi();
var consent = "consent_example"; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
var accountId = "accountId_example"; // String | __Mandatory__. The account Id of the user's bank account.
var statementId = "statementId_example"; // String | __Mandatory__. The statement Id of the statement file.
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
apiInstance.getStatementUsingGET(consent, accountId, statementId, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consent** | **String**| __Mandatory__. The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the request. | 
 **accountId** | **String**| __Mandatory__. The account Id of the user&#39;s bank account. | 
 **statementId** | **String**| __Mandatory__. The statement Id of the statement file. | 
 **xYapilyApiVersion** | **String**| __Optional__. Determines the API version to use. Valid values are &#x60;1.0&#x60; or &#x60;2.0-ALPHA&#x60;. Defaults to &#x60;1.0&#x60; | [optional] 

### Return type

[**ApiResponseOfAccountStatement**](ApiResponseOfAccountStatement.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getStatementsUsingGET

> ApiListResponseOfAccountStatement getStatementsUsingGET(consent, accountId, opts)

Get account statements

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

var apiInstance = new YapilyApi.StatementsApi();
var consent = "consent_example"; // String | __Mandatory__. The `consent-token` containing the user's authorisation to make the request.
var accountId = "accountId_example"; // String | __Mandatory__. The account Id of the user's bank account.
var opts = {
  'xYapilyApiVersion': "xYapilyApiVersion_example", // String | __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
  'from': "from_example", // String | __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd'T'HH:mm:ss.SSSZ). 
  'before': "before_example", // String | __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd'T'HH:mm:ss.SSSZ).
  'limit': 56, // Number | __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
  'sort': "sort_example", // String | __Optional__. Sort transaction records by date ascending with 'date' or descending with '-date'. The default sort order is descending
  'offset': 56 // Number | __Optional__. The number of transaction records to be skipped. Used primarily with paginated results.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStatementsUsingGET(consent, accountId, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consent** | **String**| __Mandatory__. The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the request. | 
 **accountId** | **String**| __Mandatory__. The account Id of the user&#39;s bank account. | 
 **xYapilyApiVersion** | **String**| __Optional__. Determines the API version to use. Valid values are &#x60;1.0&#x60; or &#x60;2.0-ALPHA&#x60;. Defaults to &#x60;1.0&#x60; | [optional] 
 **from** | **String**| __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ).  | [optional] 
 **before** | **String**| __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ). | [optional] 
 **limit** | **Number**| __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000. | [optional] 
 **sort** | **String**| __Optional__. Sort transaction records by date ascending with &#39;date&#39; or descending with &#39;-date&#39;. The default sort order is descending | [optional] 
 **offset** | **Number**| __Optional__. The number of transaction records to be skipped. Used primarily with paginated results. | [optional] 

### Return type

[**ApiListResponseOfAccountStatement**](ApiListResponseOfAccountStatement.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

