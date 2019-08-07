# YapilyApi.ApplicationUsersApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserUsingPOST**](ApplicationUsersApi.md#addUserUsingPOST) | **POST** /users | Add an application user
[**deleteUserUsingDELETE**](ApplicationUsersApi.md#deleteUserUsingDELETE) | **DELETE** /users/{userUuid} | Delete an application user and sub-resources (including consent resources on institution APIs if they exist)
[**getDeleteUsersJobUsingGET**](ApplicationUsersApi.md#getDeleteUsersJobUsingGET) | **GET** /delete-users/{job-id} | Get details of a user deletion job
[**getDeleteUsersJobsUsingGET**](ApplicationUsersApi.md#getDeleteUsersJobsUsingGET) | **GET** /delete-users | Get details of all user deletion jobs
[**getUserUsingGET**](ApplicationUsersApi.md#getUserUsingGET) | **GET** /users/{userUuid} | Get an application user
[**getUsersUsingGET**](ApplicationUsersApi.md#getUsersUsingGET) | **GET** /users | Get application users
[**startDeleteUsersJobUsingPOST**](ApplicationUsersApi.md#startDeleteUsersJobUsingPOST) | **POST** /delete-users | Start a job to delete application users by specifying their identifiers


<a name="addUserUsingPOST"></a>
# **addUserUsingPOST**
> ApplicationUser addUserUsingPOST(newApplicationUser)

Add an application user

### Example
```javascript
var YapilyApi = require('yapily_api');
var defaultClient = YapilyApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: tokenAuth
var tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new YapilyApi.ApplicationUsersApi();

var newApplicationUser = new YapilyApi.NewApplicationUser(); // NewApplicationUser | newApplicationUser


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addUserUsingPOST(newApplicationUser, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newApplicationUser** | [**NewApplicationUser**](NewApplicationUser.md)| newApplicationUser | 

### Return type

[**ApplicationUser**](ApplicationUser.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

<a name="deleteUserUsingDELETE"></a>
# **deleteUserUsingDELETE**
> ApiResponseOfUserDeleteResponse deleteUserUsingDELETE(userUuid)

Delete an application user and sub-resources (including consent resources on institution APIs if they exist)

### Example
```javascript
var YapilyApi = require('yapily_api');
var defaultClient = YapilyApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: tokenAuth
var tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new YapilyApi.ApplicationUsersApi();

var userUuid = "userUuid_example"; // String | userUuid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteUserUsingDELETE(userUuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUuid** | **String**| userUuid | 

### Return type

[**ApiResponseOfUserDeleteResponse**](ApiResponseOfUserDeleteResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="getDeleteUsersJobUsingGET"></a>
# **getDeleteUsersJobUsingGET**
> ApiResponseOfBulkUserDeleteDetails getDeleteUsersJobUsingGET(jobId)

Get details of a user deletion job

### Example
```javascript
var YapilyApi = require('yapily_api');
var defaultClient = YapilyApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: tokenAuth
var tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new YapilyApi.ApplicationUsersApi();

var jobId = "jobId_example"; // String | job-id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeleteUsersJobUsingGET(jobId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| job-id | 

### Return type

[**ApiResponseOfBulkUserDeleteDetails**](ApiResponseOfBulkUserDeleteDetails.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="getDeleteUsersJobsUsingGET"></a>
# **getDeleteUsersJobsUsingGET**
> ApiListResponseOfBulkUserDelete getDeleteUsersJobsUsingGET()

Get details of all user deletion jobs

### Example
```javascript
var YapilyApi = require('yapily_api');
var defaultClient = YapilyApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: tokenAuth
var tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new YapilyApi.ApplicationUsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeleteUsersJobsUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ApiListResponseOfBulkUserDelete**](ApiListResponseOfBulkUserDelete.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="getUserUsingGET"></a>
# **getUserUsingGET**
> ApplicationUser getUserUsingGET(userUuid)

Get an application user

### Example
```javascript
var YapilyApi = require('yapily_api');
var defaultClient = YapilyApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: tokenAuth
var tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new YapilyApi.ApplicationUsersApi();

var userUuid = "userUuid_example"; // String | userUuid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserUsingGET(userUuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUuid** | **String**| userUuid | 

### Return type

[**ApplicationUser**](ApplicationUser.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="getUsersUsingGET"></a>
# **getUsersUsingGET**
> [ApplicationUser] getUsersUsingGET()

Get application users

### Example
```javascript
var YapilyApi = require('yapily_api');
var defaultClient = YapilyApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: tokenAuth
var tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new YapilyApi.ApplicationUsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsersUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ApplicationUser]**](ApplicationUser.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="startDeleteUsersJobUsingPOST"></a>
# **startDeleteUsersJobUsingPOST**
> ApiResponseOfBulkUserDeleteDetails startDeleteUsersJobUsingPOST(userDeleteRequest)

Start a job to delete application users by specifying their identifiers

### Example
```javascript
var YapilyApi = require('yapily_api');
var defaultClient = YapilyApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: tokenAuth
var tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new YapilyApi.ApplicationUsersApi();

var userDeleteRequest = new YapilyApi.UserDeleteRequest(); // UserDeleteRequest | userDeleteRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.startDeleteUsersJobUsingPOST(userDeleteRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userDeleteRequest** | [**UserDeleteRequest**](UserDeleteRequest.md)| userDeleteRequest | 

### Return type

[**ApiResponseOfBulkUserDeleteDetails**](ApiResponseOfBulkUserDeleteDetails.md)

### Authorization

[basicAuth](../README.md#basicAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

