# YapilyApi.SweepingAuthorisationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **String** | This is the Yapily user identifier for the user returned by the create user step POST ../users | [optional] 
**applicationUserId** | **String** | A client&#39;s own user reference. If the client wants to work with their own unique references for individual PSUs then they can use the applicationUserId property to provide that value. Where Yapily does not already have a Yapily userId that matches the supplied applicationUserId, then a new Yapily userId is created automatically and linked to the applicationUserId value.  Clients can then use either their own applicationUserId or the Yapily userId to reference the same user in future calls. | [optional] 
**forwardParameters** | **[String]** | Extra parameters the TPP may want to get forwarded in the callback request after the PSU redirect. | [optional] 
**contextType** | [**PaymentContextType**](PaymentContextType.md) |  | [optional] 
**institutionId** | **String** | __Mandatory__. The reference to the &#x60;Institution&#x60; which identifies which institution the authorisation request is sent to. | 
**callback** | **String** | __Optional__. The server to redirect the user to after the user complete the authorisation at the &#x60;Institution&#x60;. &lt;br&gt;&lt;br&gt;See [Using a callback (Optional)](https://docs.yapily.com/knowledge/callback_url/#using-a-callback-optional) for more information. | [optional] 
**redirect** | [**RedirectRequest**](RedirectRequest.md) |  | [optional] 
**oneTimeToken** | **Boolean** | __Conditional__. Used to receive a &#x60;oneTimeToken&#x60; rather than a &#x60;consentToken&#x60; at the &#x60;callback&#x60; for additional security. This can only be used when the &#x60;callback&#x60; is set. &lt;br&gt;&lt;br&gt;See [Using a callback with an OTT (Optional)](https://docs.yapily.com/knowledge/callback_url/#using-a-callback-with-an-ott-optional) for more information. | [optional] 
**controlParameters** | [**SweepingControlParameters**](SweepingControlParameters.md) |  | 
**initiationDetails** | [**InitiationDetails**](InitiationDetails.md) |  | 


