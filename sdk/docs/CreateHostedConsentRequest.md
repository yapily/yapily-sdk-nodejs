# YapilyApi.CreateHostedConsentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **String** | __Conditional__. Yapily Identifier for the &#x60;User&#x60; returned by the create user step POST /users. You must provide either a &#x60;userId&#x60; or &#x60;applicationUserId&#x60;. | [optional] 
**applicationUserId** | **String** | __Conditional__. Your own &#x60;User&#x60; reference. This field allows you to use your own unique references for individual users. Where the &#x60;User&#x60; reference doesn&#39;t have an associated Yapily &#x60;userId&#x60;, a new &#x60;userId&#x60; is created and linked to it. You must provide either a &#x60;userId&#x60; or &#x60;applicationUserId&#x60;. | [optional] 
**institutionIdentifiers** | [**InstitutionIdentifiers**](InstitutionIdentifiers.md) |  | 
**userSettings** | [**UserSettings**](UserSettings.md) |  | [optional] 
**redirectUrl** | **String** | URL of your server to redirect the user after completion of the consent flow. | 
**oneTimeToken** | **Boolean** | Used to receive a oneTimeToken rather than a consentToken at the redirectUrl for additional security. | [optional] 
**accountRequest** | [**HostedAccountRequest**](HostedAccountRequest.md) |  | [optional] 


