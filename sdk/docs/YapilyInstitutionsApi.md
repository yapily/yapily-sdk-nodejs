# YapilyRestApiExplorer.YapilyInstitutionsApi

All URIs are relative to *https://api.yapily.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInstitutionsUsingGET**](YapilyInstitutionsApi.md#getInstitutionsUsingGET) | **GET** /institutions | Retrieves the list of Institutions available in Yapily


<a name="getInstitutionsUsingGET"></a>
# **getInstitutionsUsingGET**
> [Institution] getInstitutionsUsingGET()

Retrieves the list of Institutions available in Yapily

### Example
```javascript
var YapilyRestApiExplorer = require('yapily_rest_api_explorer');

var apiInstance = new YapilyRestApiExplorer.YapilyInstitutionsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInstitutionsUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Institution]**](Institution.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

