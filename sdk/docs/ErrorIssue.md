# YapilyApi.ErrorIssue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Category of the issue | 
**code** | **String** | Code that uniquely identifies the type of issue | 
**parameter** | **String** | Identfies the parameter / property within the request (headers, query parameters or body) that the issue relates to. For headers and query parameters, it refers to the parameter name. For the body, it refers to the JSONPath of the property | [optional] 
**message** | **String** | Human readable description of the issue that was experienced | [optional] 
**institutionError** | [**InstitutionError**](InstitutionError.md) |  | [optional] 


