# YapilyApi.HostedConsentPagesApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createHostedConsentRequest**](HostedConsentPagesApi.md#createHostedConsentRequest) | **POST** /hosted/consent-requests | Create Hosted Consent Request
[**getHostedConsentRequest**](HostedConsentPagesApi.md#getHostedConsentRequest) | **GET** /hosted/consent-requests/{consentRequestId} | Get Hosted Consent Request



## createHostedConsentRequest

> ApiResponseOfCreateHostedConsentRequest createHostedConsentRequest(createHostedConsentRequest)

Create Hosted Consent Request

Used to initiate a consent request using Yapily Hosted Pages.

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.HostedConsentPagesApi();
let createHostedConsentRequest = new YapilyApi.CreateHostedConsentRequest(); // CreateHostedConsentRequest | 
apiInstance.createHostedConsentRequest(createHostedConsentRequest, (error, data, response) => {
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
 **createHostedConsentRequest** | [**CreateHostedConsentRequest**](CreateHostedConsentRequest.md)|  | 

### Return type

[**ApiResponseOfCreateHostedConsentRequest**](ApiResponseOfCreateHostedConsentRequest.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## getHostedConsentRequest

> ApiResponseOfGetHostedConsentRequest getHostedConsentRequest(consentRequestId)

Get Hosted Consent Request

Used to get details of a hosted consent request

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.HostedConsentPagesApi();
let consentRequestId = "consentRequestId_example"; // String | Unique Identifier of the consent request
apiInstance.getHostedConsentRequest(consentRequestId, (error, data, response) => {
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
 **consentRequestId** | **String**| Unique Identifier of the consent request | 

### Return type

[**ApiResponseOfGetHostedConsentRequest**](ApiResponseOfGetHostedConsentRequest.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

