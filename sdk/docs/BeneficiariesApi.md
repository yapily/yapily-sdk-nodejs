# YapilyApi.BeneficiariesApi

All URIs are relative to *https://api.yapily.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBeneficiariesUsingGET**](BeneficiariesApi.md#getBeneficiariesUsingGET) | **GET** /accounts/{accountId}/beneficiaries | Get beneficiaries



## getBeneficiariesUsingGET

> ApiResponseOfListOfBeneficiary getBeneficiariesUsingGET(accountId, consent, opts)

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
var accountId = "accountId_example"; // String | Account Id
var consent = "consent_example"; // String | Consent Token
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
apiInstance.getBeneficiariesUsingGET(accountId, consent, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| Account Id | 
 **consent** | **String**| Consent Token | 
 **xYapilyApiVersion** | **String**| Api Version | [optional] 

### Return type

[**ApiResponseOfListOfBeneficiary**](ApiResponseOfListOfBeneficiary.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

