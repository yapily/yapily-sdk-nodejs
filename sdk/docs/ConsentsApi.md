# YapilyApi.ConsentsApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callDelete**](ConsentsApi.md#callDelete) | **DELETE** /consents/{consentId} | Delete Consent
[**createConsentWithCode**](ConsentsApi.md#createConsentWithCode) | **POST** /consent-auth-code | Exchange OAuth2 Code
[**extendConsent**](ConsentsApi.md#extendConsent) | **POST** /consents/{consentId}/extend | Extend Consent
[**getConsentById**](ConsentsApi.md#getConsentById) | **GET** /consents/{consentId} | Get Consent
[**getConsentBySingleAccessConsent**](ConsentsApi.md#getConsentBySingleAccessConsent) | **POST** /consent-one-time-token | Exchange One Time Token
[**getConsents**](ConsentsApi.md#getConsents) | **GET** /consents | Get Consents



## callDelete

> ApiResponseOfConsentDeleteResponse callDelete(consentId, opts)

Delete Consent

Delete a consent using the consent Id

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.ConsentsApi();
let consentId = "consentId_example"; // String | __Mandatory__. The consent Id of the `Consent` to update.
let opts = {
  'forceDelete': true // Boolean | __Optional__. Whether to force the deletion.
};
apiInstance.callDelete(consentId, opts, (error, data, response) => {
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
 **consentId** | **String**| __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update. | 
 **forceDelete** | **Boolean**| __Optional__. Whether to force the deletion. | [optional] [default to true]

### Return type

[**ApiResponseOfConsentDeleteResponse**](ApiResponseOfConsentDeleteResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## createConsentWithCode

> Consent createConsentWithCode(consentAuthCodeRequest)

Exchange OAuth2 Code

Used to obtain a Yapily Consent object containing the &#x60;consentToken&#x60; once the user has authenticated and you have an OAuth2 authorisation code &#x60;auth-code&#x60; and state &#x60;auth-state&#x60;.

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.ConsentsApi();
let consentAuthCodeRequest = new YapilyApi.ConsentAuthCodeRequest(); // ConsentAuthCodeRequest | 
apiInstance.createConsentWithCode(consentAuthCodeRequest, (error, data, response) => {
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
 **consentAuthCodeRequest** | [**ConsentAuthCodeRequest**](ConsentAuthCodeRequest.md)|  | 

### Return type

[**Consent**](Consent.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json;charset=UTF-8


## extendConsent

> ApiResponseOfConsent extendConsent(consentId, extendConsentRequest)

Extend Consent

Used to indicate to Yapily that reconfirmation has occurred for a given Consent, and to update lastUpdatedAt and reconfirmBy for that Consent. Returns the Consent.

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.ConsentsApi();
let consentId = "consentId_example"; // String | __Mandatory__. The consent Id of the `Consent` to update.
let extendConsentRequest = new YapilyApi.ExtendConsentRequest(); // ExtendConsentRequest | 
apiInstance.extendConsent(consentId, extendConsentRequest, (error, data, response) => {
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
 **consentId** | **String**| __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update. | 
 **extendConsentRequest** | [**ExtendConsentRequest**](ExtendConsentRequest.md)|  | 

### Return type

[**ApiResponseOfConsent**](ApiResponseOfConsent.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## getConsentById

> ApiResponseOfConsent getConsentById(consentId)

Get Consent

Get consent using the consent Id

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.ConsentsApi();
let consentId = "consentId_example"; // String | __Mandatory__. The consent Id of the `Consent` to update.
apiInstance.getConsentById(consentId, (error, data, response) => {
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
 **consentId** | **String**| __Mandatory__. The consent Id of the &#x60;Consent&#x60; to update. | 

### Return type

[**ApiResponseOfConsent**](ApiResponseOfConsent.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getConsentBySingleAccessConsent

> Consent getConsentBySingleAccessConsent(oneTimeTokenRequest)

Exchange One Time Token

Exchange a One-time-token for the consent token

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.ConsentsApi();
let oneTimeTokenRequest = new YapilyApi.OneTimeTokenRequest(); // OneTimeTokenRequest | 
apiInstance.getConsentBySingleAccessConsent(oneTimeTokenRequest, (error, data, response) => {
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
 **oneTimeTokenRequest** | [**OneTimeTokenRequest**](OneTimeTokenRequest.md)|  | 

### Return type

[**Consent**](Consent.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json;charset=UTF-8


## getConsents

> ApiListResponseOfConsent getConsents(opts)

Get Consents

Used to retrieve all the consents created for each user within an application

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.ConsentsApi();
let opts = {
  'filterApplicationUserId': ["null"], // [String] | __Optional__. Filter records based on the list of `applicationUserId` users provided.
  'filterUserUuid': ["null"], // [String] | __Optional__. Filter records based on the list of `userUuid` users provided.
  'filterInstitution': ["null"], // [String] | __Optional__. Filter records based on the list of `Institution` provided.
  'filterStatus': ["null"], // [String] | __Optional__. Filter records based on the list of `Consent` [statuses](https://docs.yapily.com/api/reference/#operation/getConsents!c=200&path=data/status&t=response).
  'from': "from_example", // String | __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd'T'HH:mm:ss.SSSZ). 
  'before': "before_example", // String | __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd'T'HH:mm:ss.SSSZ).
  'limit': 56, // Number | __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000.
  'offset': 0 // Number | __Optional__. The number of transaction records to be skipped. Used primarily with paginated results.
};
apiInstance.getConsents(opts, (error, data, response) => {
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
 **filterApplicationUserId** | [**[String]**](String.md)| __Optional__. Filter records based on the list of &#x60;applicationUserId&#x60; users provided. | [optional] 
 **filterUserUuid** | [**[String]**](String.md)| __Optional__. Filter records based on the list of &#x60;userUuid&#x60; users provided. | [optional] 
 **filterInstitution** | [**[String]**](String.md)| __Optional__. Filter records based on the list of &#x60;Institution&#x60; provided. | [optional] 
 **filterStatus** | [**[String]**](String.md)| __Optional__. Filter records based on the list of &#x60;Consent&#x60; [statuses](https://docs.yapily.com/api/reference/#operation/getConsents!c&#x3D;200&amp;path&#x3D;data/status&amp;t&#x3D;response). | [optional] 
 **from** | **String**| __Optional__. Returned transactions will be on or after this date (yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ).  | [optional] 
 **before** | **String**| __Optional__. Returned transactions will be on or before this date (yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ). | [optional] 
 **limit** | **Number**| __Optional__. The maximum number of transaction records to be returned. Must be between 0 and 1000. | [optional] 
 **offset** | **Number**| __Optional__. The number of transaction records to be skipped. Used primarily with paginated results. | [optional] [default to 0]

### Return type

[**ApiListResponseOfConsent**](ApiListResponseOfConsent.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

