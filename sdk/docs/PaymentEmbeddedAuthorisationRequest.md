# YapilyApi.PaymentEmbeddedAuthorisationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userUuid** | **String** |  | [optional] 
**applicationUserId** | **String** | __Conditional__. The user-friendly reference to the &#x60;User&#x60; that will authorise the authorisation request. If a &#x60;User&#x60; with the specified &#x60;applicationUserId&#x60; exists, it will be used otherwise, a new &#x60;User&#x60; with the specified &#x60;applicationUserId&#x60; will be created and used. Either the &#x60;userUuid&#x60; or &#x60;applicationUserId&#x60; must be provided. | [optional] 
**institutionId** | **String** | __Mandatory__. The reference to the &#x60;Institution&#x60; which identifies which institution the authorisation request is sent to. | 
**callback** | **String** | __Optional__. The server to redirect the user to after the user complete the authorisation at the &#x60;Institution&#x60;. &lt;br&gt;&lt;br&gt;See [Using a callback (Optional)](https://docs.yapily.com/pages/knowledge/yapily-concepts/callback_url/#using-a-callback-optional) for more information. | [optional] 
**redirect** | [**RedirectRequest**](RedirectRequest.md) |  | [optional] 
**oneTimeToken** | **Boolean** | __Conditional__. Used to receive a &#x60;oneTimeToken&#x60; rather than a &#x60;consentToken&#x60; at the &#x60;callback&#x60; for additional security. This can only be used when the &#x60;callback&#x60; is set. &lt;br&gt;&lt;br&gt;See [Using a callback with an OTT (Optional)](https://docs.yapily.com/pages/knowledge/yapily-concepts/callback_url/#using-a-callback-with-an-ott-optional) for more information. | [optional] 
**paymentRequest** | [**PaymentRequest**](PaymentRequest.md) |  | 
**userCredentials** | [**UserCredentials**](UserCredentials.md) |  | [optional] 
**selectedScaMethod** | [**ScaMethod**](ScaMethod.md) |  | [optional] 
**scaCode** | **String** | __Conditional__. Used to update the authorisation with the sca code received by the user from the &#x60;Institution&#x60; using the embedded payment authorisation flow.&lt;br&gt;&lt;br&gt;This is the penultimate step required in the embedded payment authorisation flow to authorise the &#x60;Consent&#x60;. After sending the sca code, to obtain an authorised consent, the last step is to poll [Get Consent](https://docs.yapily.com/api/reference/#operation/getConsentById) until the &#x60;Institution&#x60; authorises the request and the &#x60;Consent&#x60; &#x60;status&#x60; transitions to &#x60;AUTHORIZED&#x60;. | [optional] 


