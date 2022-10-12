# YapilyApi.FinancialProfileApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProfileConsent**](FinancialProfileApi.md#createProfileConsent) | **POST** /users/{userUuid}/profile/consents | Create Profile Consent
[**deleteProfileConsent**](FinancialProfileApi.md#deleteProfileConsent) | **DELETE** /users/{userUuid}/profile/consents/{profileConsentId} | Delete Profile Consent
[**getBalancePrediction**](FinancialProfileApi.md#getBalancePrediction) | **GET** /users/{userUuid}/profile/predicted-balances | Get Predicted Balances
[**getProfileConsent**](FinancialProfileApi.md#getProfileConsent) | **GET** /users/{userUuid}/profile/consents/{profileConsentId} | Get Profile Consent
[**getUserProfile**](FinancialProfileApi.md#getUserProfile) | **GET** /users/{userUuid}/profile | Get User Profile



## createProfileConsent

> ApiResponseOfFinancialProfileAuthorisationResponse createProfileConsent(userUuid, consent)

Create Profile Consent

Used to add a consent to a &#x60;Financial Profile&#x60; for a &#x60;User&#x60;.  The response is asynchronous, returned with pending status, while retrieval of financial data is commenced.  There is a limit of 10,000 transactions for enrichment.

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.FinancialProfileApi();
let userUuid = "userUuid_example"; // String | __Mandatory__. The Yapily generated UUID for the user.
let consent = "consent_example"; // String | __Mandatory__. The `consent-token` obtained from the original authorisation.
apiInstance.createProfileConsent(userUuid, consent, (error, data, response) => {
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
 **userUuid** | **String**| __Mandatory__. The Yapily generated UUID for the user. | 
 **consent** | **String**| __Mandatory__. The &#x60;consent-token&#x60; obtained from the original authorisation. | 

### Return type

[**ApiResponseOfFinancialProfileAuthorisationResponse**](ApiResponseOfFinancialProfileAuthorisationResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteProfileConsent

> ApiResponseOfFinancialProfileConsentRemoveResponse deleteProfileConsent(userUuid, profileConsentId)

Delete Profile Consent

Used to delete a &#x60;ProfileConsent&#x60; for a &#x60;User&#x60;. This will remove the consent and all associated financial data from the &#39;Financial Profile&#39;.

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.FinancialProfileApi();
let userUuid = "userUuid_example"; // String | __Mandatory__. The Yapily generated UUID for the user.
let profileConsentId = "profileConsentId_example"; // String | __Mandatory__. The ID of the ProfileConsent
apiInstance.deleteProfileConsent(userUuid, profileConsentId, (error, data, response) => {
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
 **userUuid** | **String**| __Mandatory__. The Yapily generated UUID for the user. | 
 **profileConsentId** | **String**| __Mandatory__. The ID of the ProfileConsent | 

### Return type

[**ApiResponseOfFinancialProfileConsentRemoveResponse**](ApiResponseOfFinancialProfileConsentRemoveResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBalancePrediction

> ApiResponseOfFinancialProfileBalancePrediction getBalancePrediction(userUuid)

Get Predicted Balances

Used to retrieve a &#x60;Balance Prediction Profile&#x60; for a &#x60;User&#x60;.  Status will be &#x60;PENDING&#x60; until all ProfileConsents are &#x60;COMPLETED&#x60;.

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.FinancialProfileApi();
let userUuid = "userUuid_example"; // String | __Mandatory__. The Yapily generated UUID for the user.
apiInstance.getBalancePrediction(userUuid, (error, data, response) => {
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
 **userUuid** | **String**| __Mandatory__. The Yapily generated UUID for the user. | 

### Return type

[**ApiResponseOfFinancialProfileBalancePrediction**](ApiResponseOfFinancialProfileBalancePrediction.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProfileConsent

> ApiResponseOfFinancialProfileConsent getProfileConsent(userUuid, profileConsentId)

Get Profile Consent

Used to retreive a specific ProfileConsent for a User.

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.FinancialProfileApi();
let userUuid = "userUuid_example"; // String | __Mandatory__. The Yapily generated UUID for the user.
let profileConsentId = "profileConsentId_example"; // String | __Mandatory__. The ID of the ProfileConsent
apiInstance.getProfileConsent(userUuid, profileConsentId, (error, data, response) => {
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
 **userUuid** | **String**| __Mandatory__. The Yapily generated UUID for the user. | 
 **profileConsentId** | **String**| __Mandatory__. The ID of the ProfileConsent | 

### Return type

[**ApiResponseOfFinancialProfileConsent**](ApiResponseOfFinancialProfileConsent.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserProfile

> ApiResponseOfFinancialProfile getUserProfile(userUuid)

Get User Profile

Used to retrieve a &#x60;FinancialProfile&#x60; for a &#x60;User&#x60;.  Status will be &#x60;PENDING&#x60; until all ProfileConsents are &#x60;COMPLETED&#x60;.

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.FinancialProfileApi();
let userUuid = "userUuid_example"; // String | __Mandatory__. The Yapily generated UUID for the user.
apiInstance.getUserProfile(userUuid, (error, data, response) => {
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
 **userUuid** | **String**| __Mandatory__. The Yapily generated UUID for the user. | 

### Return type

[**ApiResponseOfFinancialProfile**](ApiResponseOfFinancialProfile.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

