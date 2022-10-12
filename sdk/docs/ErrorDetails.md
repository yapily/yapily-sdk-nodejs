# YapilyApi.ErrorDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tracingId** | **String** | Unique identifier of the request, used by Yapily for support purposes | 
**code** | **Number** | Numeric HTTP status code associated with the error | 
**status** | **String** | Textual description of the HTTP status | 
**supportUrl** | **String** | Link to where further information regarding the error can be found | [optional] 
**source** | **String** | Source of the error. This may be YAPILY, the INSTITUTION, or the USER | [optional] 
**issues** | [**[ErrorIssue]**](ErrorIssue.md) | List of issues relating to the error | [optional] 


