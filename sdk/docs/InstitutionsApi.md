# YapilyApi.InstitutionsApi

All URIs are relative to *https://api.yapily.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInstitutionUsingGET**](InstitutionsApi.md#getInstitutionUsingGET) | **GET** /institutions/{institutionId} | Retrieves details of a specific institution available in Yapily
[**getInstitutionsUsingGET**](InstitutionsApi.md#getInstitutionsUsingGET) | **GET** /institutions | Retrieves the list of institutions available in Yapily


<a name="getInstitutionUsingGET"></a>
# **getInstitutionUsingGET**
> Institution getInstitutionUsingGET(institutionId)

Retrieves details of a specific institution available in Yapily

### Example
```javascript
var YapilyApi = require('yapily_api');
var defaultClient = YapilyApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new YapilyApi.InstitutionsApi();

var institutionId = "institutionId_example"; // String | institutionId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInstitutionUsingGET(institutionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **institutionId** | **String**| institutionId | 

### Return type

[**Institution**](Institution.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="getInstitutionsUsingGET"></a>
# **getInstitutionsUsingGET**
> [Institution] getInstitutionsUsingGET()

Retrieves the list of institutions available in Yapily

### Example
```javascript
var YapilyApi = require('yapily_api');
var defaultClient = YapilyApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new YapilyApi.InstitutionsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInstitutionsUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Institution]**](Institution.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

