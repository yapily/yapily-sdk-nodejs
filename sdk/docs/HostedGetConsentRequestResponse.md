# YapilyApi.HostedGetConsentRequestResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consentRequestId** | **String** | Unique Id of the consent request. | [optional] 
**consentId** | **String** | Identification of the consent. | [optional] 
**userId** | **String** | Unique Id for the &#x60;User&#x60; assigned by Yapily. | [optional] 
**applicationUserId** | **String** | Your reference to the &#x60;User&#x60;. | [optional] 
**applicationId** | **String** | Unique Id of the &#x60;Application&#x60; the user is associated with. | [optional] 
**institutionIdentifiers** | [**InstitutionIdentifiersResponse**](InstitutionIdentifiersResponse.md) |  | [optional] 
**userSettings** | [**UserSettings**](UserSettings.md) |  | [optional] 
**redirectUrl** | **String** | URL of consent server to redirect the user after completion of the consent flow. | [optional] 
**createdAt** | **Date** | The date and time at which the payment was created. | [optional] 
**authorisationExpiresAt** | **Date** | The date and time at which the auth Token will expire. | [optional] 
**status** | **String** | Current status of the consent request. Allowed values are [AWAITING_AUTHORIZATION, AUTHORIZED, REJECTED, REVOKED, FAILED, EXPIRED, AWAITING_DECOUPLED_AUTHORIZATION] | [optional] 
**phases** | [**[HostedConsentPhase]**](HostedConsentPhase.md) | The phase reached by the consent and its timestamp. | [optional] 
**consentToken** | **String** | Represents the authorisation to gain access to the requested features. Required to access account information. | [optional] 


