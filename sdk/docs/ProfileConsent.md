# YapilyApi.ProfileConsent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier of the &#x60;consent&#x60; in context of a user&#39;s profile. | [optional] 
**status** | **String** | The status, can be PENDING, COMPLETED or ERROR. | [optional] 
**userId** | **String** | The userUuid. | [optional] 
**referenceConsentId** | **String** | Unique identifier of the consent. | [optional] 
**institutionId** | **String** | __Mandatory__. The  &#x60;Institution&#x60; the authorisation request is sent to. | [optional] 
**createdAt** | **Date** | When a profile consent is created. | [optional] 
**expiresAt** | **Date** | When a profile consent is expired after created + X. | [optional] 
**dataInsertedAt** | **Date** | After data retrieval from aggregated profile consent is completed. | [optional] 


