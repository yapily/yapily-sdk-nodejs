# YapilyApi.PaymentEmbeddedAuthorisationRequestResponse

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
**institutionConsentId** | **String** |  | [optional] 
**charges** | [**[PaymentChargeDetails]**](PaymentChargeDetails.md) |  | [optional] 
**exchangeRateInformation** | [**ExchangeRateInformationResponse**](ExchangeRateInformationResponse.md) |  | [optional] 
**authorisationUrl** | **String** |  | [optional] 
**qrCodeUrl** | **String** |  | [optional] 
**explanation** | **String** |  | [optional] 
**scaMethods** | [**[ScaMethod]**](ScaMethod.md) |  | [optional] 
**selectedScaMethod** | [**ScaMethod**](ScaMethod.md) |  | [optional] 


