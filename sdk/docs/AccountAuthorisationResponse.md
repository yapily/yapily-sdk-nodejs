# YapilyApi.AccountAuthorisationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**userUuid** | **String** |  | [optional] 
**applicationUserId** | **String** |  | [optional] 
**referenceId** | **String** |  | [optional] 
**institutionId** | **String** |  | [optional] 
**status** | [**AuthorisationStatus**](AuthorisationStatus.md) |  | [optional] 
**createdAt** | **Date** |  | [optional] 
**transactionFrom** | **Date** |  | [optional] 
**transactionTo** | **Date** |  | [optional] 
**expiresAt** | **Date** |  | [optional] 
**timeToExpireInMillis** | **Number** |  | [optional] 
**timeToExpire** | **String** |  | [optional] 
**featureScope** | [**[FeatureEnum]**](FeatureEnum.md) |  | [optional] 
**consentToken** | **String** |  | [optional] 
**state** | **String** |  | [optional] 
**authorizedAt** | **Date** |  | [optional] 
**lastConfirmedAt** | **Date** | The time that the PSU last confirmed access to their account information, either through full authentication with the institution, or through reconfirmation with the TPP. | [optional] 
**reconfirmBy** | **Date** | The time by which the consent should be reconfirmed to ensure continued access to the account information. | [optional] 
**institutionConsentId** | **String** |  | [optional] 
**authorisationUrl** | **String** |  | [optional] 
**qrCodeUrl** | **String** |  | [optional] 


