# YapilyApi.HostedVRPConsentDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique ID of the consent request. | 
**userId** | **String** | Represents the Unique Identifier for the &#x60;User&#x60; assigned by Yapily. | [optional] 
**applicationUserId** | **String** | Represents the User-friendly reference to the &#x60;User&#x60;. | [optional] 
**applicationId** | **String** | Represens the Unique Identifier of the &#x60;Application&#x60; the user is associated with. | 
**institutionIdentifiers** | [**InstitutionIdentifiers**](InstitutionIdentifiers.md) |  | [optional] 
**userSettings** | [**UserSettings**](UserSettings.md) |  | [optional] 
**redirectUrl** | **String** | URL of client&#39;s server to redirect the PSU after completion of the consent authorisation. | [optional] 
**vrpSetup** | [**VRPSetup**](VRPSetup.md) |  | 
**createdAt** | **Date** |  | [optional] 
**authorisationExpiresAt** | **Date** | Represents the date and time at which the auth Token will expire. | [optional] 
**consentToken** | **String** | Represents the authorisation to make VRP payments | [optional] 
**consentStatus** | **String** | Current status of the authorisation. Can be one of [AWAITING_AUTHORIZATION, AUTHORIZED, REJECTED, REVOKED, FAILED, EXPIRED] | 
**phases** | [**[HostedVRPPhase]**](HostedVRPPhase.md) |  | [optional] 


