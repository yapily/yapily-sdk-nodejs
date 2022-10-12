# YapilyApi.VirtualAccountPayOutRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **String** | Unique id of the source / payer account | 
**amount** | [**Amount**](Amount.md) |  | 
**reference** | **String** | Reference to be associated with the payment. This will be appear on the beneficiary&#39;s bank statement | 
**beneficiaryId** | **String** | Unique id of the beneficiary to whom the payment will be made | 
**paymentScheme** | **String** | Method of settlement to complete the payment. One of: &lt;br&gt; FASTER_PAYMENTS &lt;br&gt; SEPA_CREDIT &lt;br&gt; SEPA_INSTANT &lt;br&gt; SWIFT &lt;br&gt; SWIFT_EXPRESS &lt;br&gt; CHAPS &lt;br&gt; IAT &lt;br&gt; WIRE | 
**paymentDate** | **Date** | Date on which a payment instruction will be executed, that must be in the future | [optional] 


