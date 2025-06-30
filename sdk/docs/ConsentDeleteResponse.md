# YapilyApi.ConsentDeleteResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | __Conditional__. User-friendly identifier of the &#x60;User&#x60; that provides authorisation. If a &#x60;User&#x60; with the specified &#x60;applicationUserId&#x60; exists, it will be used otherwise, a new &#x60;User&#x60; with the specified &#x60;applicationUserId&#x60; will be created and used. Either the &#x60;userUuid&#x60; or &#x60;applicationUserId&#x60; must be provided. | [optional] 
**deleteStatus** | [**DeleteStatusEnum**](DeleteStatusEnum.md) |  | [optional] 
**institutionId** | **String** | __Mandatory__. The &#x60;Institution&#x60; the authorisation request is sent to. | [optional] 
**institutionConsentId** | **String** | Identification of the consent at the Institution. | [optional] 
**creationDate** | **Date** | Date and time of when the consent was authorised. | [optional] 


