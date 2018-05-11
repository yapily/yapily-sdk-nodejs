# YapilyRestApiExplorer.AccountsApi

All URIs are relative to *https://api.yapily.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountUsingGET**](AccountsApi.md#getAccountUsingGET) | **GET** /users/{userUuid}/institutions/{institutionId}/accounts/{accountId} | getAccount
[**getAccountsUsingGET**](AccountsApi.md#getAccountsUsingGET) | **GET** /users/{userUuid}/institutions/{institutionId}/accounts | getAccounts


<a name="getAccountUsingGET"></a>
# **getAccountUsingGET**
> Account getAccountUsingGET(userUuid, institutionId, accountId)

getAccount

### Example
```javascript
var YapilyRestApiExplorer = require('yapily_rest_api_explorer');

var apiInstance = new YapilyRestApiExplorer.AccountsApi();

var userUuid = "userUuid_example"; // String | userUuid

var institutionId = "institutionId_example"; // String | institutionId

var accountId = "accountId_example"; // String | accountId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccountUsingGET(userUuid, institutionId, accountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUuid** | **String**| userUuid | 
 **institutionId** | **String**| institutionId | 
 **accountId** | **String**| accountId | 

### Return type

[**Account**](Account.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="getAccountsUsingGET"></a>
# **getAccountsUsingGET**
> [Account] getAccountsUsingGET(userUuid, institutionId)

getAccounts

### Example
```javascript
var YapilyRestApiExplorer = require('yapily_rest_api_explorer');

var apiInstance = new YapilyRestApiExplorer.AccountsApi();

var userUuid = "userUuid_example"; // String | userUuid

var institutionId = "institutionId_example"; // String | institutionId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccountsUsingGET(userUuid, institutionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUuid** | **String**| userUuid | 
 **institutionId** | **String**| institutionId | 

### Return type

[**[Account]**](Account.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

