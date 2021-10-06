# YapilyApi.ConsentsApi

All URIs are relative to *https://api.yapily.com*

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
var userUuid = "userUuid_example"; // String | __Mandatory__. The Yapily generated UUID for the user.
var createConsentAccessToken = new YapilyApi.CreateConsentAccessToken(); // CreateConsentAccessToken | createConsentAccessToken
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
apiInstance.addConsentUsingPOST(userUuid, createConsentAccessToken, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUuid** | **String**| __Mandatory__. The Yapily generated UUID for the user. | 
 **createConsentAccessToken** | [**CreateConsentAccessToken**](CreateConsentAccessToken.md)| createConsentAccessToken | 
 **xYapilyApiVersion** | **String**| __Optional__. Determines the API version to use. Valid values are &#x60;1.0&#x60; or &#x60;2.0-ALPHA&#x60;. Defaults to &#x60;1.0&#x60; | [optional] 

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
  'xYapilyApiVersion': "xYapilyApiVersion_example" // String | __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
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
 **xYapilyApiVersion** | **String**| __Optional__. Determines the API version to use. Valid values are &#x60;1.0&#x60; or &#x60;2.0-ALPHA&#x60;. Defaults to &#x60;1.0&#x60; | [optional] 

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
  'xYapilyApiVersion': "xYapilyApiVersion_example" // String | __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
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
 **xYapilyApiVersion** | **String**| __Optional__. Determines the API version to use. Valid values are &#x60;1.0&#x60; or &#x60;2.0-ALPHA&#x60;. Defaults to &#x60;1.0&#x60; | [optional] 

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
var consentId = "consentId_example"; // String | __Mandatory__. The consent Id of the `Consent` to update.
var opts = {
  'xYapilyApiVersion': "xYapilyApiVersion_example", // String | __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
  'forceDelete': true // Boolean | __Optional__. Whether to force the deletion.
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
 **consentId** | **String**| __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update. | 
 **xYapilyApiVersion** | **String**| __Optional__. Determines the API version to use. Valid values are &#x60;1.0&#x60; or &#x60;2.0-ALPHA&#x60;. Defaults to &#x60;1.0&#x60; | [optional] 
 **forceDelete** | **Boolean**| __Optional__. Whether to force the deletion. | [optional] [default to true]

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
var consentId = "consentId_example"; // String | __Mandatory__. The consent Id of the `Consent` to update.
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
apiInstance.getConsentByIdUsingGET(consentId, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentId** | **String**| __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update. | 
 **xYapilyApiVersion** | **String**| __Optional__. Determines the API version to use. Valid values are &#x60;1.0&#x60; or &#x60;2.0-ALPHA&#x60;. Defaults to &#x60;1.0&#x60; | [optional] 

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
  'xYapilyApiVersion': "xYapilyApiVersion_example" // String | __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
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
 **xYapilyApiVersion** | **String**| __Optional__. Determines the API version to use. Valid values are &#x60;1.0&#x60; or &#x60;2.0-ALPHA&#x60;. Defaults to &#x60;1.0&#x60; | [optional] 

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
  'xYapilyApiVersion': "xYapilyApiVersion_example", // String | __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
  'filterApplicationUserId': ["null"], // [String] | __Optional__. Filter records based on the list of `applicationUserId` users provided.
  'filterUserUuid': ["null"], // [String] | __Optional__. Filter records based on the list of `userUuid` users provided.
  'filterInstitution': ["null"], // [String] | __Optional__. Filter records based on the list of `Institution` provided.
  'filterStatus': ["null"], // [String] | __Optional__. Filter records based on the list of `Consent` [statuses](https://docs.yapily.com/api/#tocS_AuthorisationStatus).
  'from': "from_example", // String | __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd'T'HH:mm:ss.SSSZ). 
  'before': "before_example", // String | __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd'T'HH:mm:ss.SSSZ).
  'limit': 56, // Number | Use this parameter to limit consent results, max limit is 20
  'offset': 0 // Number | __Optional__. The number of transaction records to be skipped. Used primarily with paginated results.
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
 **xYapilyApiVersion** | **String**| __Optional__. Determines the API version to use. Valid values are &#x60;1.0&#x60; or &#x60;2.0-ALPHA&#x60;. Defaults to &#x60;1.0&#x60; | [optional] 
 **filterApplicationUserId** | [**[String]**](String.md)| __Optional__. Filter records based on the list of &#x60;applicationUserId&#x60; users provided. | [optional] 
 **filterUserUuid** | [**[String]**](String.md)| __Optional__. Filter records based on the list of &#x60;userUuid&#x60; users provided. | [optional] 
 **filterInstitution** | [**[String]**](String.md)| __Optional__. Filter records based on the list of &#x60;Institution&#x60; provided. | [optional] 
 **filterStatus** | [**[String]**](String.md)| __Optional__. Filter records based on the list of &#x60;Consent&#x60; [statuses](https://docs.yapily.com/api/#tocS_AuthorisationStatus). | [optional] 
 **from** | **String**| __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ).  | [optional] 
 **before** | **String**| __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ). | [optional] 
 **limit** | **Number**| Use this parameter to limit consent results, max limit is 20 | [optional] 
 **offset** | **Number**| __Optional__. The number of transaction records to be skipped. Used primarily with paginated results. | [optional] [default to 0]

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
var userUuid = "userUuid_example"; // String | __Mandatory__. The Yapily generated UUID for the user.
var opts = {
  'xYapilyApiVersion': "xYapilyApiVersion_example", // String | __Optional__. Determines the API version to use. Valid values are `1.0` or `2.0-ALPHA`. Defaults to `1.0`
  'institutionId': "institutionId_example", // String | Use this parameter to filter consent by institution, using the Yapily institution Id. This replaces the deprecated `institutionId` query param.
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
 **userUuid** | **String**| __Mandatory__. The Yapily generated UUID for the user. | 
 **xYapilyApiVersion** | **String**| __Optional__. Determines the API version to use. Valid values are &#x60;1.0&#x60; or &#x60;2.0-ALPHA&#x60;. Defaults to &#x60;1.0&#x60; | [optional] 
 **institutionId** | **String**| Use this parameter to filter consent by institution, using the Yapily institution Id. This replaces the deprecated &#x60;institutionId&#x60; query param. | [optional] 
 **limit** | **Number**| Use this parameter to limit consent results, max limit is 20 | [optional] 

### Return type

[**[Consent]**](Consent.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

