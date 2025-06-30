# YapilyApi.CreateHostedPaymentRequestLink

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **String** | __Conditional__. Yapily Identifier for the &#x60;User&#x60; returned by the create user step POST /users. You must either provide &#x60;userId&#x60; or &#x60;applicationUserId&#x60;. | [optional] 
**applicationUserId** | **String** | __Conditional__. Your own &#x60;User&#x60; reference. If you want to work with their own unique references for individual PSUs then you can use the &#x60;applicationUserId&#x60; property to provide that value. Where Yapily does not already have a Yapily userId that matches the supplied &#x60;applicationUserId&#x60;, then a new Yapily userId is created automatically and linked to the &#x60;applicationUserId&#x60; value. You must either provide userId or &#x60;applicationUserId&#x60;. | [optional] 
**institutionIdentifiers** | [**InstitutionIdentifiers**](InstitutionIdentifiers.md) |  | 
**userSettings** | [**UserSettings**](UserSettings.md) |  | [optional] 
**redirectUrl** | **String** | URL of your server to redirect the user after completion of the payment flow. | 
**authorisationExpiresAt** | **Date** | The date and time that the authorisation expires. Must be between 10 minutes and 30 days in the future. If not specified, the authorisation URL will expire 10 minutes after creation. | [optional] 
**paymentRequestDetails** | [**HostedPaymentRequestDetailsLink**](HostedPaymentRequestDetailsLink.md) |  | 


