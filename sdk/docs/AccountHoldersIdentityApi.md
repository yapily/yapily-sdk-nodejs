# YapilyRestApiExplorer.AccountHoldersIdentityApi

All URIs are relative to *https://api.yapily.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**identityUsingGET**](AccountHoldersIdentityApi.md#identityUsingGET) | **GET** /users/{userUuid}/institutions/{institutionId}/identity | identity


<a name="identityUsingGET"></a>
# **identityUsingGET**
> Identity identityUsingGET(userUuid, institutionId)

identity

### Example
```javascript
var YapilyRestApiExplorer = require('yapily_rest_api_explorer');

var apiInstance = new YapilyRestApiExplorer.AccountHoldersIdentityApi();

var userUuid = "userUuid_example"; // String | userUuid

var institutionId = "institutionId_example"; // String | institutionId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.identityUsingGET(userUuid, institutionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUuid** | **String**| userUuid | 
 **institutionId** | **String**| institutionId | 

### Return type

[**Identity**](Identity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

