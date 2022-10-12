# YapilyApi.VirtualAccountPayment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique id of the payment | [optional] 
**createdDateTime** | **Date** | Date and time that the payment was created | [optional] 
**paymentDate** | **Date** | Date on which the payment instruction will be executed, that may be in the future | [optional] 
**type** | **String** | Type of payment. One of PAY_IN, PAY_OUT, RETURN_IN or RETURN_OUT | [optional] 
**paymentScheme** | **String** | Method of settlement to complete the payment. One of: &lt;br&gt; FASTER_PAYMENTS &lt;br&gt; SEPA_CREDIT &lt;br&gt; SEPA_INSTANT &lt;br&gt; SWIFT &lt;br&gt; SWIFT_EXPRESS &lt;br&gt; CHAPS &lt;br&gt; IAT &lt;br&gt; WIRE | [optional] 
**amount** | [**Amount**](Amount.md) |  | [optional] 
**reference** | **String** | Reference to be associated with the payment. This will be appear on the beneficiary&#39;s bank statement | [optional] 
**status** | **String** | The current state of the transaction &lt;br&gt; INITIATED - The transaction request is acknowledged and will not undergo validation checks &lt;br&gt; PROCESSING - Initial checks succeeded and the transaction request is now being processed &lt;br&gt; COMPLETED - The transaction has been successfully processed (terminal status) &lt;br&gt; FAILED - An failure occured during transaction processing (terminal status) | [optional] 
**source** | [**VirtualAccountPaymentSource**](VirtualAccountPaymentSource.md) |  | [optional] 
**destination** | [**VirtualAccountPaymentDestination**](VirtualAccountPaymentDestination.md) |  | [optional] 
**originalPaymentId** | **String** | Unique id of the original payment that was refunded | [optional] 


