# YapilyApi.SubmitBulkPaymentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idempotencyId** | **String** | __Optional__. An alphanumeric string (1-40 chars) used for idempotency. Unique per consent ID for 24 hours. Prevents duplicate bulk file payment submissions. | [optional] 
**payments** | [**[PaymentRequest]**](PaymentRequest.md) | __Mandatory__. The array of &#x60;PaymentRequest&#x60; objects to initiate in the bulk payment. | 
**originatorIdentificationNumber** | **String** | __Conditional__. The identification number of the originator.&lt;ul&gt;&lt;li&gt;Mandatory for AIB bulk payments&lt;/li&gt;&lt;/ul&gt; | [optional] 
**executionDateTime** | **Date** | __Optional__. Used to schedule the bulk payment to be executed at a future date if supported by the &#x60;Institution&#x60;. | [optional] 


