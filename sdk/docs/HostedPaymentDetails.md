# YapilyApi.HostedPaymentDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentRequestId** | **String** | The unique ID of the payment request. | [optional] 
**userId** | **String** | The Unique Identifier for the &#x60;User&#x60; assigned by Yapily. | [optional] 
**applicationUserId** | **String** | Your reference to the &#x60;User&#x60;. | [optional] 
**applicationId** | **String** | The Unique Identifier of the &#x60;Application&#x60; the user is associated with. | [optional] 
**institutionIdentifiers** | [**InstitutionIdentifiersResponse**](InstitutionIdentifiersResponse.md) |  | [optional] 
**userSettings** | [**UserSettings**](UserSettings.md) |  | [optional] 
**redirectUrl** | **String** | URL of your server to redirect the user after completion of the payment flow. | [optional] 
**paymentRequestDetails** | [**HostedPaymentRequestDetailsLink**](HostedPaymentRequestDetailsLink.md) |  | [optional] 
**createdAt** | **Date** | The date and time at which the payment request was created. | [optional] 
**authorisationExpiresAt** | **Date** | The date and time at which the auth Token will expire. | [optional] 
**status** | **String** | Current status of the payment request. &lt;br&gt; Possible values: &lt;br&gt; ACTIVE &lt;br&gt; INACTIVE | [optional] 
**payments** | [**[HostedPayment]**](HostedPayment.md) | Payments that have been initiated as part of this request | [optional] 


