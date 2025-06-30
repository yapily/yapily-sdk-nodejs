# YapilyApi.ApplicationManagementApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplicationVRPConfigurationByApplicationId**](ApplicationManagementApi.md#createApplicationVRPConfigurationByApplicationId) | **POST** /applications/{applicationId}/vrp | Create application VRP configuration by Application Id
[**createSubApplication**](ApplicationManagementApi.md#createSubApplication) | **POST** /applications | Creates a sub-application for the root application id provided in the authentication token
[**deleteApplication**](ApplicationManagementApi.md#deleteApplication) | **DELETE** /applications/{applicationId} | Delete an application
[**getApplicationById**](ApplicationManagementApi.md#getApplicationById) | **GET** /applications/{applicationId} | Get application details
[**getApplicationVRPConfigurationByApplicationId**](ApplicationManagementApi.md#getApplicationVRPConfigurationByApplicationId) | **GET** /applications/{applicationId}/vrp | Get application VRP configuration by Application Id
[**searchApplications**](ApplicationManagementApi.md#searchApplications) | **GET** /applications | Retrieve sub-applications for the root application provided in the authentication token.
[**updateApplication**](ApplicationManagementApi.md#updateApplication) | **PUT** /applications/{applicationId} | Update an Application
[**updateApplicationVRPConfigurationByApplicationId**](ApplicationManagementApi.md#updateApplicationVRPConfigurationByApplicationId) | **PUT** /applications/{applicationId}/vrp | Update application VRP configuration by Application Id



## createApplicationVRPConfigurationByApplicationId

> createApplicationVRPConfigurationByApplicationId(applicationId, vrpConfiguration)

Create application VRP configuration by Application Id

Create application vrp configuration

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.ApplicationManagementApi();
let applicationId = "applicationId_example"; // String | The id of the application that vrp configuration being created for
let vrpConfiguration = new YapilyApi.VrpConfiguration(); // VrpConfiguration | The vrp configuration to create
apiInstance.createApplicationVRPConfigurationByApplicationId(applicationId, vrpConfiguration, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **String**| The id of the application that vrp configuration being created for | 
 **vrpConfiguration** | [**VrpConfiguration**](VrpConfiguration.md)| The vrp configuration to create | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json;charset=UTF-8


## createSubApplication

> ApiResponseOfApplicationResponse createSubApplication(applicationRequest)

Creates a sub-application for the root application id provided in the authentication token

Creates a sub-application under the given root application id provided in the authentication token. The sub-application can use the root&#39;s credentials to call the API

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.ApplicationManagementApi();
let applicationRequest = new YapilyApi.ApplicationRequest(); // ApplicationRequest | The sub-application to create
apiInstance.createSubApplication(applicationRequest, (error, data, response) => {
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
 **applicationRequest** | [**ApplicationRequest**](ApplicationRequest.md)| The sub-application to create | 

### Return type

[**ApiResponseOfApplicationResponse**](ApiResponseOfApplicationResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json;charset=UTF-8


## deleteApplication

> deleteApplication(applicationId)

Delete an application

Deletes the application with the given ID in the path

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.ApplicationManagementApi();
let applicationId = "applicationId_example"; // String | The id of the application being deleted
apiInstance.deleteApplication(applicationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **String**| The id of the application being deleted | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getApplicationById

> ApiResponseOfApplicationResponse getApplicationById(applicationId)

Get application details

Retrieves an application by the id provided in the path

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.ApplicationManagementApi();
let applicationId = "applicationId_example"; // String | The id of the application being fetched
apiInstance.getApplicationById(applicationId, (error, data, response) => {
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
 **applicationId** | **String**| The id of the application being fetched | 

### Return type

[**ApiResponseOfApplicationResponse**](ApiResponseOfApplicationResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getApplicationVRPConfigurationByApplicationId

> VrpConfiguration getApplicationVRPConfigurationByApplicationId(applicationId)

Get application VRP configuration by Application Id

Get application vrp configuration

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.ApplicationManagementApi();
let applicationId = "applicationId_example"; // String | The id of the application that vrp configuration being created for
apiInstance.getApplicationVRPConfigurationByApplicationId(applicationId, (error, data, response) => {
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
 **applicationId** | **String**| The id of the application that vrp configuration being created for | 

### Return type

[**VrpConfiguration**](VrpConfiguration.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## searchApplications

> ApiListOfApplicationResponse searchApplications(opts)

Retrieve sub-applications for the root application provided in the authentication token.

Retrieves sub-applications for the root application provided in the authentication token. If a sub-application is provided in the authentication token, it will return an empty list.

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.ApplicationManagementApi();
let opts = {
  'publicFilterValues': {key: null} // PublicFilterValues | 
};
apiInstance.searchApplications(opts, (error, data, response) => {
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
 **publicFilterValues** | [**PublicFilterValues**](.md)|  | [optional] 

### Return type

[**ApiListOfApplicationResponse**](ApiListOfApplicationResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json;charset=UTF-8


## updateApplication

> ApiResponseOfApplicationResponse updateApplication(applicationId, applicationRequest)

Update an Application

Updates the application properties for the application with the given ID in the path

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.ApplicationManagementApi();
let applicationId = "applicationId_example"; // String | The id of the application being updated
let applicationRequest = new YapilyApi.ApplicationRequest(); // ApplicationRequest | The application to update
apiInstance.updateApplication(applicationId, applicationRequest, (error, data, response) => {
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
 **applicationId** | **String**| The id of the application being updated | 
 **applicationRequest** | [**ApplicationRequest**](ApplicationRequest.md)| The application to update | 

### Return type

[**ApiResponseOfApplicationResponse**](ApiResponseOfApplicationResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json;charset=UTF-8


## updateApplicationVRPConfigurationByApplicationId

> updateApplicationVRPConfigurationByApplicationId(applicationId, vrpConfiguration)

Update application VRP configuration by Application Id

Update application vrp configuration

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.ApplicationManagementApi();
let applicationId = "applicationId_example"; // String | The id of the application that vrp configuration being created for
let vrpConfiguration = new YapilyApi.VrpConfiguration(); // VrpConfiguration | The vrp configuration to create
apiInstance.updateApplicationVRPConfigurationByApplicationId(applicationId, vrpConfiguration, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **String**| The id of the application that vrp configuration being created for | 
 **vrpConfiguration** | [**VrpConfiguration**](VrpConfiguration.md)| The vrp configuration to create | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json;charset=UTF-8

