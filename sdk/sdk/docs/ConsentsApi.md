# YapilyApi.ConsentsApi

All URIs are relative to *https://api.yapily.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addConsentUsingPOST**](ConsentsApi.md#addConsentUsingPOST) | **POST** /users/{userUuid}/consents | Post consent
[**deleteUsingDELETE**](ConsentsApi.md#deleteUsingDELETE) | **DELETE** /users/{userUuid}/consents/{consentToken} | Delete consent
[**getUserConsentsUsingGET**](ConsentsApi.md#getUserConsentsUsingGET) | **GET** /users/{userUuid}/consents | Get consent


<a name="addConsentUsingPOST"></a>
# **addConsentUsingPOST**
> Consent addConsentUsingPOST(userUuid, createConsentApiKey)

Post consent

### Example
```javascript
var YapilyApi = require('yapily_api');
var defaultClient = YapilyApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new YapilyApi.ConsentsApi();

var userUuid = "userUuid_example"; // String | userUuid

var createConsentApiKey = new YapilyApi.CreateConsentApiKey(); // CreateConsentApiKey | createConsentApiKey


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addConsentUsingPOST(userUuid, createConsentApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUuid** | **String**| userUuid | 
 **createConsentApiKey** | [**CreateConsentApiKey**](CreateConsentApiKey.md)| createConsentApiKey | 

### Return type

[**Consent**](Consent.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="deleteUsingDELETE"></a>
# **deleteUsingDELETE**
> ResponseEntity deleteUsingDELETE(userUuid, consentToken)

Delete consent

### Example
```javascript
var YapilyApi = require('yapily_api');
var defaultClient = YapilyApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new YapilyApi.ConsentsApi();

var userUuid = "userUuid_example"; // String | userUuid

var consentToken = "consentToken_example"; // String | consentToken


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteUsingDELETE(userUuid, consentToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUuid** | **String**| userUuid | 
 **consentToken** | **String**| consentToken | 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="getUserConsentsUsingGET"></a>
# **getUserConsentsUsingGET**
> [Consent] getUserConsentsUsingGET(userUuid, opts)

Get consent

### Example
```javascript
var YapilyApi = require('yapily_api');
var defaultClient = YapilyApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new YapilyApi.ConsentsApi();

var userUuid = "userUuid_example"; // String | userUuid

var opts = { 
  'institutionId': "institutionId_example" // String | institutionId
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserConsentsUsingGET(userUuid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUuid** | **String**| userUuid | 
 **institutionId** | **String**| institutionId | [optional] 

### Return type

[**[Consent]**](Consent.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

