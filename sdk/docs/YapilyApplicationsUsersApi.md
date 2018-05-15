# YapilyRestApiExplorer.YapilyApplicationsUsersApi

All URIs are relative to *https://api.yapily.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserUsingPOST**](YapilyApplicationsUsersApi.md#addUserUsingPOST) | **POST** /users | addUser
[**getUserUsingGET**](YapilyApplicationsUsersApi.md#getUserUsingGET) | **GET** /users/{uuid} | getUser
[**getUsersUsingGET**](YapilyApplicationsUsersApi.md#getUsersUsingGET) | **GET** /users | getUsers
[**updateUserUsingPUT**](YapilyApplicationsUsersApi.md#updateUserUsingPUT) | **PUT** /users/{uuid} | updateUser


<a name="addUserUsingPOST"></a>
# **addUserUsingPOST**
> ApplicationUser addUserUsingPOST(applicationUser)

addUser

### Example
```javascript
var YapilyRestApiExplorer = require('yapily_rest_api_explorer');

var apiInstance = new YapilyRestApiExplorer.YapilyApplicationsUsersApi();

var applicationUser = new YapilyRestApiExplorer.ApplicationUser(); // ApplicationUser | applicationUser


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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getUserUsingGET"></a>
# **getUserUsingGET**
> ApplicationUser getUserUsingGET(uuid)

getUser

### Example
```javascript
var YapilyRestApiExplorer = require('yapily_rest_api_explorer');

var apiInstance = new YapilyRestApiExplorer.YapilyApplicationsUsersApi();

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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getUsersUsingGET"></a>
# **getUsersUsingGET**
> [ApplicationUser] getUsersUsingGET()

getUsers

### Example
```javascript
var YapilyRestApiExplorer = require('yapily_rest_api_explorer');

var apiInstance = new YapilyRestApiExplorer.YapilyApplicationsUsersApi();

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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateUserUsingPUT"></a>
# **updateUserUsingPUT**
> ApplicationUser updateUserUsingPUT(uuid, applicationUser)

updateUser

### Example
```javascript
var YapilyRestApiExplorer = require('yapily_rest_api_explorer');

var apiInstance = new YapilyRestApiExplorer.YapilyApplicationsUsersApi();

var uuid = "uuid_example"; // String | uuid

var applicationUser = new YapilyRestApiExplorer.ApplicationUser(); // ApplicationUser | applicationUser


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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

