# YapilyApi.SweepingAuthorisationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**userId** | **String** | This is the Yapily user identifier for the user returned by the create user step POST ../users | [optional] 
**applicationUserId** | **String** | A client&#39;s own user reference. If the client wants to work with their own unique references for individual PSUs then they can use the applicationUserId property to provide that value. Where Yapily does not already have a Yapily userId that matches the supplied applicationUserId, then a new Yapily userId is created automatically and linked to the applicationUserId value.  Clients can then use either their own applicationUserId or the Yapily userId to reference the same user in future calls. | [optional] 
**institutionId** | **String** | The reference to the Institution which identifies which institution the authorisation request is sent to. | [optional] 
**status** | [**AuthorisationStatus**](AuthorisationStatus.md) |  | [optional] 
**createdAt** | **Date** |  | [optional] 
**featureScope** | [**[FeatureEnum]**](FeatureEnum.md) | __Optional__. Used to granularly specify the set of features that the user will give their consent for when requesting access to their account information. Depending on the &#x60;Institution&#x60;, this may also populate a consent screen which list these scopes before the user authorises.&lt;br&gt;&lt;br&gt;This endpoint accepts allow all [Financial Data Features](/guides/financial-data/features/#feature-list) that the &#x60;Institution&#x60; supports.To find out which scopes an &#x60;Institution&#x60; supports, check [GET Institution](./#get-institution). | [optional] 
**consentToken** | **String** | The &#x60;consent-token&#x60; containing the user&#39;s authorisation to make the payment request. | [optional] 
**state** | **String** |  | [optional] 
**authorizedAt** | **Date** |  | [optional] 
**institutionConsentId** | **String** |  | [optional] 
**authorisationUrl** | **String** |  | [optional] 
**qrCodeUrl** | **String** |  | [optional] 
**controlParameters** | [**SweepingControlParameters**](SweepingControlParameters.md) |  | [optional] 
**payer** | [**Payer**](Payer.md) |  | [optional] 
**initiationDetails** | [**InitiationDetails**](InitiationDetails.md) |  | [optional] 


