# YapilyApi.AccountAuthorisationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the account authorisation request.&lt;br&gt;&lt;br&gt;The &#x60;consentID&#x60; used to [retrieve a consent](/api/reference/#operation/getConsentById). | [optional] 
**userUuid** | **String** | The &#x60;User&#x60; that the authorisation request was created for. | [optional] 
**applicationUserId** | **String** | The user-friendly reference to the &#x60;User&#x60; that the authorisation request was created for. | [optional] 
**referenceId** | **String** |  | [optional] 
**institutionId** | **String** | The &#x60;Institution&#x60; the authorisation request was sent to. | [optional] 
**status** | [**AuthorisationStatus**](AuthorisationStatus.md) |  | [optional] 
**createdAt** | **Date** | Date and time the consent was created. | [optional] 
**transactionFrom** | **Date** | When performing a transaction query using the consent, this is the earliest date of transaction records that can be retrieved. | [optional] 
**transactionTo** | **Date** | When performing a transaction query using the consent, this is the latest date of transaction records that can be retrieved. | [optional] 
**expiresAt** | **Date** | Date and time the authorisation expires. Re-authorisation is needed to retain access. | [optional] 
**timeToExpireInMillis** | **Number** |  | [optional] 
**timeToExpire** | **String** |  | [optional] 
**featureScope** | [**[FeatureEnum]**](FeatureEnum.md) | The set of features the consent provides access to. | [optional] 
**consentToken** | **String** | Represents the authorisation to gain access to the requested features. Required to access account information. | [optional] 
**state** | **String** | Correlation ID used with the &#x60;Institution&#x60; during the authorisation process. | [optional] 
**authorizedAt** | **Date** | Date and time the request was authorised by the &#x60;Institution&#x60;. | [optional] 
**lastConfirmedAt** | **Date** | The time the PSU last confirmed access to their account information, either through full authentication with the institution, or through reconfirmation with the TPP. | [optional] 
**reconfirmBy** | **Date** | The date and time the consent must be reconfirmed by to ensure continued access to the account information. | [optional] 
**institutionConsentId** | **String** | Unique identifier of the consent assigned by the &#x60;Institution&#x60;. | [optional] 
**authorisationUrl** | **String** |  | [optional] 
**qrCodeUrl** | **String** | The URL link for the QR code that may be scanned via a mobile device to make an authorisation redirect to the bank (authURL encoded). | [optional] 


