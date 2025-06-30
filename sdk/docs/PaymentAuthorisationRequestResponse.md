# YapilyApi.PaymentAuthorisationRequestResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the payment authorisation request. &lt;br&gt;&lt;br&gt;The &#x60;consentID&#x60; used to [retrieve a consent](/api/reference/#operation/getConsentById). | [optional] 
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
**consentToken** | **String** | Represents the authorisation to gain access to the requested features. Required to make a payment request. | [optional] 
**state** | **String** | Correlation ID used with the &#x60;Institution&#x60; during the authorisation process. | [optional] 
**authorizedAt** | **Date** | Date and time the request was authorised by the &#x60;Institution&#x60;. | [optional] 
**institutionConsentId** | **String** | Unique identifier of the consent assigned by the &#x60;Institution&#x60;. | [optional] 
**charges** | [**[PaymentChargeDetails]**](PaymentChargeDetails.md) |  | [optional] 
**exchangeRateInformation** | [**ExchangeRateInformationResponse**](ExchangeRateInformationResponse.md) |  | [optional] 
**authorisationUrl** | **String** |  | [optional] 
**qrCodeUrl** | **String** | The URL for a QR code that may be scanned via a mobile device to make a authorisation redirect to the bank (authURL encoded). | [optional] 
**explanation** | **String** | Message from the &#x60;Institution&#x60; received by Yapily, detailing the next action the user is required to take. This is used only for Decoupled flows. | [optional] 


