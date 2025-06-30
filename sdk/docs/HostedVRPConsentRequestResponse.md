# YapilyApi.HostedVRPConsentRequestResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Represents the Unique Id of the VRP consent request | 
**userId** | **String** | Represents the Unique Id for the &#x60;User&#x60; assigned by Yapily. | [optional] 
**applicationUserId** | **String** | Represents the user-friendly reference to the &#x60;User&#x60;. | [optional] 
**applicationId** | **String** | Represents the Unique Id of the &#x60;Application&#x60; the user is associated with. | 
**institutionIdentifiers** | [**InstitutionIdentifiers**](InstitutionIdentifiers.md) |  | [optional] 
**userSettings** | [**UserSettings**](UserSettings.md) |  | [optional] 
**redirectUrl** | **String** | URL of client&#39;s server to redirect the PSU after completion of the consent authorisation. | [optional] 
**vrpSetup** | [**VRPSetupRequest**](VRPSetupRequest.md) |  | [optional] 
**hostedUrl** | **String** | Represents the URL of Hosted UI page for the applicationId which initiates the user journey for the Consent. &lt;br&gt; URL would be appended with authToken, applicationId and userSettings. | 
**authToken** | **String** | Represents the JWT Token signed by the certificate-vault using Yapily&#39;s keys. | 
**createdAt** | **Date** | Represents the date and time at which the Consent was created. | 
**authorisationExpiresAt** | **Date** | Represents the date and time at which the auth Token will expire. | [optional] 


