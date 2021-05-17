# YapilyApi.ConsentsApi

All URIs are relative to *https://api.yapily.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addConsentUsingPOST**](ConsentsApi.md#addConsentUsingPOST) | **POST** /users/{userUuid}/consents | Post consent
[**createConsentWithCodeUsingPOST**](ConsentsApi.md#createConsentWithCodeUsingPOST) | **POST** /consent-auth-code | Post auth-code and auth-state
[**createPreAuthorisationRequestUsingPOST**](ConsentsApi.md#createPreAuthorisationRequestUsingPOST) | **POST** /pre-auth-requests | Initiate request for user to pre authorise
[**deleteUsingDELETE**](ConsentsApi.md#deleteUsingDELETE) | **DELETE** /consents/{consentId} | Delete consent
[**getConsentByIdUsingGET**](ConsentsApi.md#getConsentByIdUsingGET) | **GET** /consents/{consentId} | Get consent
[**getConsentBySingleAccessConsentUsingPOST**](ConsentsApi.md#getConsentBySingleAccessConsentUsingPOST) | **POST** /consent-one-time-token | Post one time token
[**getConsentsUsingGET**](ConsentsApi.md#getConsentsUsingGET) | **GET** /consents | Get consents sorted by creation date
[**getUserConsentsUsingGET**](ConsentsApi.md#getUserConsentsUsingGET) | **GET** /users/{userUuid}/consents | Get latest user consents



## addConsentUsingPOST

> Consent addConsentUsingPOST(userUuid, createConsentAccessToken, opts)

Post consent

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

var apiInstance = new YapilyApi.ConsentsApi();
var userUuid = "userUuid_example"; // String | User uuid
var createConsentAccessToken = new YapilyApi.CreateConsentAccessToken(); // CreateConsentAccessToken | createConsentAccessToken
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
apiInstance.addConsentUsingPOST(userUuid, createConsentAccessToken, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUuid** | **String**| User uuid | 
 **createConsentAccessToken** | [**CreateConsentAccessToken**](CreateConsentAccessToken.md)| createConsentAccessToken | 
 **xYapilyApiVersion** | **String**| Api Version | [optional] 

### Return type

[**Consent**](Consent.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json;charset=UTF-8


## createConsentWithCodeUsingPOST

> Consent createConsentWithCodeUsingPOST(consentByAuthCode, opts)

Post auth-code and auth-state

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

var apiInstance = new YapilyApi.ConsentsApi();
var consentByAuthCode = new YapilyApi.ConsentAuthCodeRequest(); // ConsentAuthCodeRequest | consentByAuthCode
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
apiInstance.createConsentWithCodeUsingPOST(consentByAuthCode, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentByAuthCode** | [**ConsentAuthCodeRequest**](ConsentAuthCodeRequest.md)| consentByAuthCode | 
 **xYapilyApiVersion** | **String**| Api Version | [optional] 

### Return type

[**Consent**](Consent.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json;charset=UTF-8


## createPreAuthorisationRequestUsingPOST

> ApiResponseOfAuthorisationRequestResponse createPreAuthorisationRequestUsingPOST(preAuthorisationRequest, opts)

Initiate request for user to pre authorise

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

var apiInstance = new YapilyApi.ConsentsApi();
var preAuthorisationRequest = new YapilyApi.PreAuthorisationRequest(); // PreAuthorisationRequest | preAuthorisationRequest
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
apiInstance.createPreAuthorisationRequestUsingPOST(preAuthorisationRequest, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **preAuthorisationRequest** | [**PreAuthorisationRequest**](PreAuthorisationRequest.md)| preAuthorisationRequest | 
 **xYapilyApiVersion** | **String**| Api Version | [optional] 

### Return type

[**ApiResponseOfAuthorisationRequestResponse**](ApiResponseOfAuthorisationRequestResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## deleteUsingDELETE

> ApiResponseOfConsentDeleteResponse deleteUsingDELETE(consentId, opts)

Delete consent

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

var apiInstance = new YapilyApi.ConsentsApi();
var consentId = "consentId_example"; // String | Consent Id
var opts = {
  'xYapilyApiVersion': "xYapilyApiVersion_example", // String | Api Version
  'forceDelete': true // Boolean | Force delete
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteUsingDELETE(consentId, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentId** | **String**| Consent Id | 
 **xYapilyApiVersion** | **String**| Api Version | [optional] 
 **forceDelete** | **Boolean**| Force delete | [optional] [default to true]

### Return type

[**ApiResponseOfConsentDeleteResponse**](ApiResponseOfConsentDeleteResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getConsentByIdUsingGET

> ApiResponseOfConsent getConsentByIdUsingGET(consentId, opts)

Get consent

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

var apiInstance = new YapilyApi.ConsentsApi();
var consentId = "consentId_example"; // String | Consent Id
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
apiInstance.getConsentByIdUsingGET(consentId, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentId** | **String**| Consent Id | 
 **xYapilyApiVersion** | **String**| Api Version | [optional] 

### Return type

[**ApiResponseOfConsent**](ApiResponseOfConsent.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getConsentBySingleAccessConsentUsingPOST

> Consent getConsentBySingleAccessConsentUsingPOST(oneTimeToken, opts)

Post one time token

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

var apiInstance = new YapilyApi.ConsentsApi();
var oneTimeToken = new YapilyApi.OneTimeTokenRequest(); // OneTimeTokenRequest | oneTimeToken
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
apiInstance.getConsentBySingleAccessConsentUsingPOST(oneTimeToken, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oneTimeToken** | [**OneTimeTokenRequest**](OneTimeTokenRequest.md)| oneTimeToken | 
 **xYapilyApiVersion** | **String**| Api Version | [optional] 

### Return type

[**Consent**](Consent.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json;charset=UTF-8


## getConsentsUsingGET

> ApiListResponseOfConsent getConsentsUsingGET(opts)

Get consents sorted by creation date

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

var apiInstance = new YapilyApi.ConsentsApi();
var opts = {
  'xYapilyApiVersion': "xYapilyApiVersion_example", // String | Api Version
  'filterApplicationUserId': ["null"], // [String] | Filter consents by your application user Id (applicationUserId)
  'filterUserUuid': ["null"], // [String] | Filter consents by Yapily user Id (userUuid)
  'filterInstitution': ["null"], // [String] | Use this parameter to filter consent by institution, using the Yapily institution Id
  'filterStatus': ["null"], // [String] | Use this parameter to filter consent by status
  'from': "from_example", // String | Use this parameter to filter consents created after the date specified
  'before': "before_example", // String | Use this parameter to filter consents created before the date specified
  'limit': 56, // Number | Use this parameter to limit consent results, max limit is 20
  'offset': 0 // Number | Use this parameter to specify the offset of the results
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getConsentsUsingGET(opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xYapilyApiVersion** | **String**| Api Version | [optional] 
 **filterApplicationUserId** | [**[String]**](String.md)| Filter consents by your application user Id (applicationUserId) | [optional] 
 **filterUserUuid** | [**[String]**](String.md)| Filter consents by Yapily user Id (userUuid) | [optional] 
 **filterInstitution** | [**[String]**](String.md)| Use this parameter to filter consent by institution, using the Yapily institution Id | [optional] 
 **filterStatus** | [**[String]**](String.md)| Use this parameter to filter consent by status | [optional] 
 **from** | **String**| Use this parameter to filter consents created after the date specified | [optional] 
 **before** | **String**| Use this parameter to filter consents created before the date specified | [optional] 
 **limit** | **Number**| Use this parameter to limit consent results, max limit is 20 | [optional] 
 **offset** | **Number**| Use this parameter to specify the offset of the results | [optional] [default to 0]

### Return type

[**ApiListResponseOfConsent**](ApiListResponseOfConsent.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getUserConsentsUsingGET

> [Consent] getUserConsentsUsingGET(userUuid, opts)

Get latest user consents

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

var apiInstance = new YapilyApi.ConsentsApi();
var userUuid = "userUuid_example"; // String | User uuid
var opts = {
  'xYapilyApiVersion': "xYapilyApiVersion_example", // String | Api Version
  'filterInstitution': "filterInstitution_example", // String | Use this parameter to filter consent by institution, using the Yapily institution Id. This replaces the deprecated `institutionId` query param.
  'limit': 56 // Number | Use this parameter to limit consent results, max limit is 20
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
 **userUuid** | **String**| User uuid | 
 **xYapilyApiVersion** | **String**| Api Version | [optional] 
 **filterInstitution** | **String**| Use this parameter to filter consent by institution, using the Yapily institution Id. This replaces the deprecated &#x60;institutionId&#x60; query param. | [optional] 
 **limit** | **Number**| Use this parameter to limit consent results, max limit is 20 | [optional] 

### Return type

[**[Consent]**](Consent.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

