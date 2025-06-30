# YapilyApi.EmbeddedAccountAuthorisationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the embedded account authorisation request. | [optional] 
**userUuid** | **String** | The &#x60;User&#x60; that the authorisation request was created for. | [optional] 
**applicationUserId** | **String** | The user-friendly reference to the &#x60;User&#x60; that the authorisation request was created for. | [optional] 
**referenceId** | **String** |  | [optional] 
**institutionId** | **String** | The &#x60;Institution&#x60; the authorisation request was sent to. | [optional] 
**status** | [**AuthorisationStatus**](AuthorisationStatus.md) |  | [optional] 
**createdAt** | **Date** | Date and time the embedded authorisation was created by the application user. | [optional] 
**transactionFrom** | **Date** | When performing a transaction query using the consent, this is the earliest date of transaction records that can be retrieved. | [optional] 
**transactionTo** | **Date** | When performing a transaction query using the consent, this is the latest date of transaction records that can be retrieved. | [optional] 
**expiresAt** | **Date** | Date and time the embedded authorisation expires. Re-authorisation is needed to retain access. | [optional] 
**timeToExpireInMillis** | **Number** |  | [optional] 
**timeToExpire** | **String** |  | [optional] 
**featureScope** | [**[FeatureEnum]**](FeatureEnum.md) | The set of features the consent provides access to. | [optional] 
**consentToken** | **String** | Represents the authorisation to gain access to the requested features. Required to access account information. | [optional] 
**state** | **String** | Correlation ID used when handshaking with a new institution via OAuth2 registration. | [optional] 
**authorizedAt** | **Date** | Date and time the request was authorised by the &#x60;Institution&#x60;. | [optional] 
**institutionConsentId** | **String** | Identification of the consent at the &#x60;Institution&#x60;. | [optional] 
**authorisationUrl** | **String** |  | [optional] 
**qrCodeUrl** | **String** | The URL link for the QR code that may be scanned via a mobile device to make an authorisation redirect to the bank (authURL encoded). | [optional] 
**scaMethods** | [**[ScaMethod]**](ScaMethod.md) | List of &#x60;SCA methods&#x60; that the &#x60;Institution&#x60; supports and are available for selection. | [optional] 
**selectedScaMethod** | [**ScaMethod**](ScaMethod.md) |  | [optional] 


