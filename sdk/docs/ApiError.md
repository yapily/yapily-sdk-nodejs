# YapilyApi.ApiError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **Number** | _Mandatory_. Numeric &#x60;HTTP&#x60; status code associated with the error. | [optional] 
**institutionError** | [**InstitutionError**](InstitutionError.md) |  | [optional] 
**message** | **String** | __Mandatory__. Description of the exact error that has been experienced. | [optional] 
**source** | **String** |  | [optional] 
**status** | **String** | __Mandatory__. Textual description of the &#x60;HTTP&#x60; error status type. | [optional] 
**tracingId** | **String** | _Optional_.  A unique identifier assigned by Yapily for the request that can be used for support purposes. | [optional] 


