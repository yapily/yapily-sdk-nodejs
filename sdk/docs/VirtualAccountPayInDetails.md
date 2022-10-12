# YapilyApi.VirtualAccountPayInDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique id of the payment | [optional] 
**paymentScheme** | **String** | Method of settlement to complete the payment. One of: &lt;br&gt; FASTER_PAYMENTS &lt;br&gt; SEPA_CREDIT &lt;br&gt; SEPA_INSTANT &lt;br&gt; SWIFT &lt;br&gt; SWIFT_EXPRESS &lt;br&gt; CHAPS &lt;br&gt; IAT &lt;br&gt; WIRE | [optional] 
**amount** | [**Amount**](Amount.md) |  | [optional] 
**reference** | **String** | Reference associated with the payment and which appears on the beneficiary&#39;s bank statement | [optional] 
**source** | [**VirtualAccountPaymentSource**](VirtualAccountPaymentSource.md) |  | [optional] 
**name** | **String** | Account source name | [optional] 
**address** | **String** | The address of the source bank account | [optional] 


