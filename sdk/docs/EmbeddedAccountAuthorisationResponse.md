# YapilyApi.EmbeddedAccountAuthorisationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | &#x60;User&#x60; for which the authorisation request was created. | [optional] 
**userUuid** | **String** | __Conditional__. User-friendly identifier of the &#x60;User&#x60; that provides authorisation. If a &#x60;User&#x60; with the specified &#x60;applicationUserId&#x60; exists, it will be used otherwise, a new &#x60;User&#x60; with the specified &#x60;applicationUserId&#x60; will be created and used. Either the &#x60;userUuid&#x60; or &#x60;applicationUserId&#x60; must be provided. | [optional] 
**applicationUserId** | **String** | __Conditional__. The user-friendly reference to the &#x60;User&#x60; that will authorise the authorisation request. If a &#x60;User&#x60; with the specified &#x60;applicationUserId&#x60; exists, it will be used otherwise, a new &#x60;User&#x60; with the specified &#x60;applicationUserId&#x60; will be created and used. Either the &#x60;userUuid&#x60; or &#x60;applicationUserId&#x60; must be provided. | [optional] 
**referenceId** | **String** |  | [optional] 
**institutionId** | **String** | __Mandatory__. The &#x60;Institution&#x60; the authorisation request is sent to. | [optional] 
**status** | [**AuthorisationStatus**](AuthorisationStatus.md) |  | [optional] 
**createdAt** | **Date** | Date and time of when the embedded authorisation was created by the application user. | [optional] 
**transactionFrom** | **Date** | When performing a transaction query using the consent, this is the earliest date of transaction records that can be retrieved. | [optional] 
**transactionTo** | **Date** | When performing a transaction query using the consent, this is the latest date of transaction records that can be retrieved. | [optional] 
**expiresAt** | **Date** | Date and time of when the embedded authorisation will expire by. Reauthorisation will be needed to retain access. | [optional] 
**timeToExpireInMillis** | **Number** |  | [optional] 
**timeToExpire** | **String** |  | [optional] 
**featureScope** | [**[FeatureEnum]**](FeatureEnum.md) | The set of features that the consent will provide access to. | [optional] 
**consentToken** | **String** | Represents the authorisation to gain access to the requested features. Required to access account information or make a payment request. | [optional] 
**state** | **String** | Corellation ID used when handshaking with a new insitution via OAuth2 registration. | [optional] 
**authorizedAt** | **Date** | Date and time of when the request was authorised by the Institution. | [optional] 
**institutionConsentId** | **String** | Identification of the consent at the Institution. | [optional] 
**authorisationUrl** | **String** |  | [optional] 
**qrCodeUrl** | **String** | The URL link for the QR code that may be scanned via a mobile device to make a authorisation redirect to the bank (authURL encoded). | [optional] 
**scaMethods** | [**[ScaMethod]**](ScaMethod.md) | List of &#x60;SCA methods&#x60; the &#x60;Institution&#x60; supports and that are available for selection. | [optional] 
**selectedScaMethod** | [**ScaMethod**](ScaMethod.md) |  | [optional] 


