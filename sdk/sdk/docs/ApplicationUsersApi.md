# YapilyApi.ApplicationUsersApi

All URIs are relative to *https://api.yapily.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserUsingPOST**](ApplicationUsersApi.md#addUserUsingPOST) | **POST** /users | Add an application user
[**getUserUsingGET**](ApplicationUsersApi.md#getUserUsingGET) | **GET** /users/{uuid} | Get an application user
[**getUsersUsingGET**](ApplicationUsersApi.md#getUsersUsingGET) | **GET** /users | Get application users
[**updateUserUsingPUT**](ApplicationUsersApi.md#updateUserUsingPUT) | **PUT** /users/{uuid} | Update an application user


<a name="addUserUsingPOST"></a>
# **addUserUsingPOST**
> ApplicationUser addUserUsingPOST(applicationUser)

Add an application user

### Example
```javascript
var YapilyApi = require('yapily_api');
var defaultClient = YapilyApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new YapilyApi.ApplicationUsersApi();

var applicationUser = new YapilyApi.ApplicationUser(); // ApplicationUser | applicationUser


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addUserUsingPOST(applicationUser, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationUser** | [**ApplicationUser**](ApplicationUser.md)| applicationUser | 

### Return type

[**ApplicationUser**](ApplicationUser.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="getUserUsingGET"></a>
# **getUserUsingGET**
> ApplicationUser getUserUsingGET(uuid)

Get an application user

### Example
```javascript
var YapilyApi = require('yapily_api');
var defaultClient = YapilyApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new YapilyApi.ApplicationUsersApi();

var uuid = "uuid_example"; // String | uuid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserUsingGET(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| uuid | 

### Return type

[**ApplicationUser**](ApplicationUser.md)

### Authorization

[basicAuth](../README.md#basicAuth)

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

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="updateUserUsingPUT"></a>
# **updateUserUsingPUT**
> ApplicationUser updateUserUsingPUT(uuid, applicationUser)

Update an application user

### Example
```javascript
var YapilyApi = require('yapily_api');
var defaultClient = YapilyApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new YapilyApi.ApplicationUsersApi();

var uuid = "uuid_example"; // String | uuid

var applicationUser = new YapilyApi.ApplicationUser(); // ApplicationUser | applicationUser


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateUserUsingPUT(uuid, applicationUser, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| uuid | 
 **applicationUser** | [**ApplicationUser**](ApplicationUser.md)| applicationUser | 

### Return type

[**ApplicationUser**](ApplicationUser.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

