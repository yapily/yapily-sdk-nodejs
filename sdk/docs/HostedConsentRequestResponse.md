# YapilyApi.HostedConsentRequestResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consentRequestId** | **String** | Unique Id of the consent request. | [optional] 
**userId** | **String** | Unique Id for the &#x60;User&#x60; assigned by Yapily. | [optional] 
**applicationUserId** | **String** | Your reference to the &#x60;User&#x60;. | [optional] 
**applicationId** | **String** | Unique Id of the &#x60;Application&#x60; the user is associated with. | [optional] 
**institutionIdentifiers** | [**InstitutionIdentifiersResponse**](InstitutionIdentifiersResponse.md) |  | [optional] 
**userSettings** | [**UserSettings**](UserSettings.md) |  | [optional] 
**redirectUrl** | **String** | URL of consent server to redirect the user after completion of the consent flow. | [optional] 
**accountRequestDetails** | [**HostedAccountRequestDetailsResponse**](HostedAccountRequestDetailsResponse.md) |  | [optional] 
**hostedUrl** | **String** | The URL of Hosted UI page for the applicationId which initiates the user journey for the consent. &lt;br&gt; URL would be appended with authToken, applicationId and userSettings. | [optional] 
**createdAt** | **Date** | The date and time at which the consent was created. | [optional] 
**authorisationExpiresAt** | **Date** | The date and time at which the auth Token will expire. | [optional] 


