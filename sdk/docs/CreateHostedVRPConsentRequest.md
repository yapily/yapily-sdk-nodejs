# YapilyApi.CreateHostedVRPConsentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **String** | __Conditional__. Yapily Identifier for the &#x60;User&#x60; returned by the create user step POST /users. Clients must either provide userId or applicationUserId. | [optional] 
**applicationUserId** | **String** | __Conditional__. Client&#39;s own &#x60;User&#x60; reference. If the client wants to work with their own unique references for individual PSUs then they can use the applicationUserId property to provide that value. Where Yapily does not already have a Yapily userId that matches the supplied applicationUserId, then a new Yapily userId is created automatically and linked to the applicationUserId value. Clients must either provide userId or applicationUserId. | [optional] 
**institutionIdentifiers** | [**InstitutionIdentifiers**](InstitutionIdentifiers.md) |  | 
**userSettings** | [**UserSettings**](UserSettings.md) |  | [optional] 
**redirectUrl** | **String** | URL of client&#39;s server to redirect the PSU after completion of the consent authorisation. | 
**oneTimeToken** | **Boolean** | Used to receive a oneTimeToken rather than a consentToken at the redirectUrl for additional security. This can only be used when the redirectUrl is set. | [optional] 
**vrpSetup** | [**VRPSetupRequest**](VRPSetupRequest.md) |  | 


