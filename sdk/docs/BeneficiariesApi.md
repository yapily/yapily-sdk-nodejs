# YapilyApi.BeneficiariesApi

All URIs are relative to *https://api.yapily.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBeneficiariesUsingGET**](BeneficiariesApi.md#getBeneficiariesUsingGET) | **GET** /accounts/{accountId}/beneficiaries | Get beneficiaries



## getBeneficiariesUsingGET

> ApiResponseOfListOfBeneficiary getBeneficiariesUsingGET(accountId, consent)

Get beneficiaries

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

var apiInstance = new YapilyApi.BeneficiariesApi();
var accountId = "accountId_example"; // String | accountId
var consent = "consent_example"; // String | Consent Token
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBeneficiariesUsingGET(accountId, consent, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| accountId | 
 **consent** | **String**| Consent Token | 

### Return type

[**ApiResponseOfListOfBeneficiary**](ApiResponseOfListOfBeneficiary.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

