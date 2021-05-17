# YapilyApi.InstitutionsApi

All URIs are relative to *https://api.yapily.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFeatureDetailsUsingGET**](InstitutionsApi.md#getFeatureDetailsUsingGET) | **GET** /features | Retrieve details for Yapily&#39;s institution features
[**getInstitutionUsingGET**](InstitutionsApi.md#getInstitutionUsingGET) | **GET** /institutions/{institutionId} | Retrieves details of a specific institution available in Yapily
[**getInstitutionsUsingGET**](InstitutionsApi.md#getInstitutionsUsingGET) | **GET** /institutions | Retrieves the list of institutions available in Yapily



## getFeatureDetailsUsingGET

> ApiListResponseOfFeatureDetails getFeatureDetailsUsingGET(opts)

Retrieve details for Yapily&#39;s institution features

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

var apiInstance = new YapilyApi.InstitutionsApi();
var opts = {
  'xYapilyApiVersion': "xYapilyApiVersion_example" // String | Api Version
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFeatureDetailsUsingGET(opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xYapilyApiVersion** | **String**| Api Version | [optional] 

### Return type

[**ApiListResponseOfFeatureDetails**](ApiListResponseOfFeatureDetails.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getInstitutionUsingGET

> Institution getInstitutionUsingGET(institutionId, opts)

Retrieves details of a specific institution available in Yapily

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

var apiInstance = new YapilyApi.InstitutionsApi();
var institutionId = "institutionId_example"; // String | Institution Id
var opts = {
  'xYapilyApiVersion': "xYapilyApiVersion_example" // String | Api Version
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInstitutionUsingGET(institutionId, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **institutionId** | **String**| Institution Id | 
 **xYapilyApiVersion** | **String**| Api Version | [optional] 

### Return type

[**Institution**](Institution.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getInstitutionsUsingGET

> ApiListResponseOfInstitution getInstitutionsUsingGET(opts)

Retrieves the list of institutions available in Yapily

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

var apiInstance = new YapilyApi.InstitutionsApi();
var opts = {
  'xYapilyApiVersion': "xYapilyApiVersion_example" // String | Api Version
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInstitutionsUsingGET(opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xYapilyApiVersion** | **String**| Api Version | [optional] 

### Return type

[**ApiListResponseOfInstitution**](ApiListResponseOfInstitution.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

