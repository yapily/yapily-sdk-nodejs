# YapilyApi.StatementsApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStatementFileUsingGET**](StatementsApi.md#getStatementFileUsingGET) | **GET** /accounts/{accountId}/statements/{statementId}/file | Get account statement file
[**getStatementUsingGET**](StatementsApi.md#getStatementUsingGET) | **GET** /accounts/{accountId}/statements/{statementId} | Get account statement
[**getStatementsUsingGET**](StatementsApi.md#getStatementsUsingGET) | **GET** /accounts/{accountId}/statements | Get account statements


<a name="getStatementFileUsingGET"></a>
# **getStatementFileUsingGET**
> &#39;String&#39; getStatementFileUsingGET(consent, accountId, statementId)

Get account statement file

### Example
```javascript
var YapilyApi = require('yapily-api');
var defaultClient = YapilyApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: tokenAuth
var tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new YapilyApi.StatementsApi();

var consent = "consent_example"; // String | Consent Token

var accountId = "accountId_example"; // String | accountId

var statementId = "statementId_example"; // String | statementId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStatementFileUsingGET(consent, accountId, statementId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consent** | **String**| Consent Token | 
 **accountId** | **String**| accountId | 
 **statementId** | **String**| statementId | 

### Return type

**&#39;String&#39;**

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getStatementUsingGET"></a>
# **getStatementUsingGET**
> ApiResponseOfAccountStatement getStatementUsingGET(consent, accountId, statementId)

Get account statement

### Example
```javascript
var YapilyApi = require('yapily-api');
var defaultClient = YapilyApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: tokenAuth
var tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new YapilyApi.StatementsApi();

var consent = "consent_example"; // String | Consent Token

var accountId = "accountId_example"; // String | accountId

var statementId = "statementId_example"; // String | statementId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStatementUsingGET(consent, accountId, statementId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consent** | **String**| Consent Token | 
 **accountId** | **String**| accountId | 
 **statementId** | **String**| statementId | 

### Return type

[**ApiResponseOfAccountStatement**](ApiResponseOfAccountStatement.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="getStatementsUsingGET"></a>
# **getStatementsUsingGET**
> ApiListResponseOfAccountStatement getStatementsUsingGET(consent, accountId, opts)

Get account statements

### Example
```javascript
var YapilyApi = require('yapily-api');
var defaultClient = YapilyApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: tokenAuth
var tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new YapilyApi.StatementsApi();

var consent = "consent_example"; // String | Consent Token

var accountId = "accountId_example"; // String | accountId

var opts = { 
  'from': "from_example", // String | from
  'before': "before_example", // String | before
  'limit': 56, // Number | limit
  'sort': "sort_example", // String | sort
  'offset': 56 // Number | offset
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
 **consent** | **String**| Consent Token | 
 **accountId** | **String**| accountId | 
 **from** | **String**| from | [optional] 
 **before** | **String**| before | [optional] 
 **limit** | **Number**| limit | [optional] 
 **sort** | **String**| sort | [optional] 
 **offset** | **Number**| offset | [optional] 

### Return type

[**ApiListResponseOfAccountStatement**](ApiListResponseOfAccountStatement.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

