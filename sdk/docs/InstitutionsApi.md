# YapilyApi.InstitutionsApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFeatureDetails**](InstitutionsApi.md#getFeatureDetails) | **GET** /features | Get Features
[**getInstitution**](InstitutionsApi.md#getInstitution) | **GET** /institutions/{institutionId} | Get Institution
[**getInstitutions**](InstitutionsApi.md#getInstitutions) | **GET** /institutions | Get Institutions



## getFeatureDetails

> ApiListResponseOfFeatureDetails getFeatureDetails()

Get Features

Used to retrieve all features available from Yapily. Each &#x60;Institution&#x60; supports a one, many or all of these features and can be seen in the features field of the &#x60;Institution&#x60; object.&lt;br&gt;&lt;br&gt;Note: Every &#x60;Institution&#x60; does not necessarily support every feature. To see which features are available for a particular Institution, use either the [Get Institutions](https://docs.yapily.com/api/reference/#operation/getInstitutions) or [Get Institution](https://docs.yapily.com/api/reference/#operation/getInstitution) endpoint and check the features array within the &#x60;Institution&#x60; payload.

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.InstitutionsApi();
apiInstance.getFeatureDetails((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiListResponseOfFeatureDetails**](ApiListResponseOfFeatureDetails.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getInstitution

> Institution getInstitution(institutionId)

Get Institution

Used to retrieves details of a specific &#x60;Institution&#x60; within an application

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.InstitutionsApi();
let institutionId = "institutionId_example"; // String | __Mandatory__. The Yapily institution Id for the `Institution`.
apiInstance.getInstitution(institutionId, (error, data, response) => {
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
 **institutionId** | **String**| __Mandatory__. The Yapily institution Id for the &#x60;Institution&#x60;. | 

### Return type

[**Institution**](Institution.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getInstitutions

> ApiListResponseOfInstitution getInstitutions()

Get Institutions

Used to retrieve all &#x60;Institutions&#x60; within an application

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.InstitutionsApi();
apiInstance.getInstitutions((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiListResponseOfInstitution**](ApiListResponseOfInstitution.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

