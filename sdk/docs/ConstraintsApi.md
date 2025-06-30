# YapilyApi.ConstraintsApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountConstraintsRulesByInstitution**](ConstraintsApi.md#getAccountConstraintsRulesByInstitution) | **GET** /institutions/constraints/data | Get Data Constraints Rules
[**getPaymentConstraintsRulesByInstitution**](ConstraintsApi.md#getPaymentConstraintsRulesByInstitution) | **GET** /institutions/constraints/payments | Get Payment Constraints Rules



## getAccountConstraintsRulesByInstitution

> ApiListResponseOfDataConstraints getAccountConstraintsRulesByInstitution(institutionIds, institutionCountryCode, opts)

Get Data Constraints Rules

Get Data Constraints Rules against an Institution for Account Authorisation requests

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.ConstraintsApi();
let institutionIds = ["null"]; // [String] | Unique Id(s) of the `Institution`(s) to retrieve the Data Constraints for. Multiple institutionIds need to be separated by `,`
let institutionCountryCode = "institutionCountryCode_example"; // String | Country code of the `Institution`(s). Ensure that the country code matches the respective institutionIds; any mismatch will result in an HTTP 404 error response.
let opts = {
  'endpointPath': "endpointPath_example", // String | The path on the API that is associated with the operation for which constraints are to be retrieved
  'endpointMethod': "endpointMethod_example" // String | The HTTP method that is associated with the operation for which constraints are to be retrieved
};
apiInstance.getAccountConstraintsRulesByInstitution(institutionIds, institutionCountryCode, opts, (error, data, response) => {
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
 **institutionIds** | [**[String]**](String.md)| Unique Id(s) of the &#x60;Institution&#x60;(s) to retrieve the Data Constraints for. Multiple institutionIds need to be separated by &#x60;,&#x60; | 
 **institutionCountryCode** | **String**| Country code of the &#x60;Institution&#x60;(s). Ensure that the country code matches the respective institutionIds; any mismatch will result in an HTTP 404 error response. | 
 **endpointPath** | **String**| The path on the API that is associated with the operation for which constraints are to be retrieved | [optional] 
 **endpointMethod** | **String**| The HTTP method that is associated with the operation for which constraints are to be retrieved | [optional] 

### Return type

[**ApiListResponseOfDataConstraints**](ApiListResponseOfDataConstraints.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getPaymentConstraintsRulesByInstitution

> ApiListResponseOfPaymentConstraints getPaymentConstraintsRulesByInstitution(institutionIds, institutionCountryCode, paymentType, opts)

Get Payment Constraints Rules

Retrieve institution specific constraints for payment authorisation and submission requests

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.ConstraintsApi();
let institutionIds = ["null"]; // [String] | Unique Id(s) of the `Institution`(s) to retrieve the Payment Constraints for. Multiple institutionIds need to be separated by `,`
let institutionCountryCode = "institutionCountryCode_example"; // String | Country code of the `Institution`(s). Ensure that the country code matches the respective institutionIds; any mismatch will result in an HTTP 404 error response.
let paymentType = "paymentType_example"; // String | Type of payment to retrieve payment constraints for
let opts = {
  'endpointPath': "endpointPath_example", // String | The path on the API that is associated with the operation for which constraints are to be retrieved
  'endpointMethod': "endpointMethod_example" // String | The HTTP method that is associated with the operation for which constraints are to be retrieved
};
apiInstance.getPaymentConstraintsRulesByInstitution(institutionIds, institutionCountryCode, paymentType, opts, (error, data, response) => {
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
 **institutionIds** | [**[String]**](String.md)| Unique Id(s) of the &#x60;Institution&#x60;(s) to retrieve the Payment Constraints for. Multiple institutionIds need to be separated by &#x60;,&#x60; | 
 **institutionCountryCode** | **String**| Country code of the &#x60;Institution&#x60;(s). Ensure that the country code matches the respective institutionIds; any mismatch will result in an HTTP 404 error response. | 
 **paymentType** | **String**| Type of payment to retrieve payment constraints for | 
 **endpointPath** | **String**| The path on the API that is associated with the operation for which constraints are to be retrieved | [optional] 
 **endpointMethod** | **String**| The HTTP method that is associated with the operation for which constraints are to be retrieved | [optional] 

### Return type

[**ApiListResponseOfPaymentConstraints**](ApiListResponseOfPaymentConstraints.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

