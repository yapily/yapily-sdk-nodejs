# YapilyApi.UsersApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUser**](UsersApi.md#addUser) | **POST** /users | Create User
[**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /users/{userUuid} | Delete User
[**getUser**](UsersApi.md#getUser) | **GET** /users/{userUuid} | Get User
[**getUsers**](UsersApi.md#getUsers) | **GET** /users | Get Users



## addUser

> ApplicationUser addUser(newApplicationUser)

Create User

Create a new user in your application

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.UsersApi();
let newApplicationUser = new YapilyApi.NewApplicationUser(); // NewApplicationUser | 
apiInstance.addUser(newApplicationUser, (error, data, response) => {
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
 **newApplicationUser** | [**NewApplicationUser**](NewApplicationUser.md)|  | 

### Return type

[**ApplicationUser**](ApplicationUser.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8


## deleteUser

> ApiResponseOfUserDeleteResponse deleteUser(userUuid)

Delete User

Delete a user from your application along with any sub-resources (including consent resources on institution APIs if they exist)

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.UsersApi();
let userUuid = "userUuid_example"; // String | __Mandatory__. The Yapily generated UUID for the user.
apiInstance.deleteUser(userUuid, (error, data, response) => {
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

[**ApiResponseOfUserDeleteResponse**](ApiResponseOfUserDeleteResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getUser

> ApplicationUser getUser(userUuid)

Get User

Get a specific user using the user UUID

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.UsersApi();
let userUuid = "userUuid_example"; // String | __Mandatory__. The Yapily generated UUID for the user.
apiInstance.getUser(userUuid, (error, data, response) => {
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

[**ApplicationUser**](ApplicationUser.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## getUsers

> [ApplicationUser] getUsers(opts)

Get Users

Get all the users configured in your application

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.UsersApi();
let opts = {
  'filterApplicationUserId': ["null"] // [String] | __Optional__. Filter records based on the list of `applicationUserId` users provided.
};
apiInstance.getUsers(opts, (error, data, response) => {
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
 **filterApplicationUserId** | [**[String]**](String.md)| __Optional__. Filter records based on the list of &#x60;applicationUserId&#x60; users provided. | [optional] 

### Return type

[**[ApplicationUser]**](ApplicationUser.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

