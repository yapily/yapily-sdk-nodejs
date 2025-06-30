# YapilyApi.Consent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier of the consent. | [optional] 
**userUuid** | **String** |  | [optional] 
**applicationUserId** | **String** | __Conditional__. The user-friendly reference to the &#x60;User&#x60; that will authorise the authorisation request. If a &#x60;User&#x60; with the specified &#x60;applicationUserId&#x60; exists, it will be used otherwise, a new &#x60;User&#x60; with the specified &#x60;applicationUserId&#x60; will be created and used. Either the &#x60;userUuid&#x60; or &#x60;applicationUserId&#x60; must be provided. | [optional] 
**referenceId** | **String** |  | [optional] 
**institutionId** | **String** | __Mandatory__. The &#x60;Institution&#x60; the authorisation request is sent to. | [optional] 
**status** | [**AuthorisationStatus**](AuthorisationStatus.md) |  | [optional] 
**createdAt** | **Date** | Date and time of when the consent was created. | [optional] 
**transactionFrom** | **Date** | When performing a transaction query using the consent, this is the earliest date of transaction records that can be retrieved. | [optional] 
**transactionTo** | **Date** | When performing a transaction query using the consent, this is the latest date of transaction records that can be retrieved. | [optional] 
**expiresAt** | **Date** | Date and time of when the authorisation will expire by. Reauthorisation will be needed to retain access. | [optional] 
**timeToExpireInMillis** | **Number** |  | [optional] 
**timeToExpire** | **String** |  | [optional] 
**featureScope** | [**[FeatureEnum]**](FeatureEnum.md) | The set of features that the consent will provide access to. | [optional] 
**consentToken** | **String** | Represents the authorisation to gain access to the requested features. Required to access account information or make a payment request. | [optional] 
**state** | **String** | Correlation ID used with the &#x60;Institution&#x60; during the authorisation process. | [optional] 
**authorizedAt** | **Date** | Date and time of when the request was authorised by the Institution. | [optional] 
**lastConfirmedAt** | **Date** | The time that the PSU last confirmed access to their account information, either through full authentication with the institution, or through reconfirmation with the TPP. | [optional] 
**reconfirmBy** | **Date** | The time by which the consent should be reconfirmed to ensure continued access to the account information. | [optional] 
**institutionConsentId** | **String** | Identification of the consent at the Institution. | [optional] 
**isDeletedByInstitution** | **Boolean** | Denotes whether the consent has been deleted on the institution side or not when a DELETE method is executed on a Yapily consent if that functionality is provided by the institution | [optional] 


