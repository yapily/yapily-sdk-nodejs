# YapilyApi.VRPSetupRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payer** | [**Payer**](Payer.md) |  | [optional] 
**payee** | [**Payee**](Payee.md) |  | 
**reference** | **String** | __Optional__. The payment reference or description. Limited to a maximum of 18 characters long. | [optional] 
**limits** | [**HostedVRPLimitsRequest**](HostedVRPLimitsRequest.md) |  | [optional] 
**validFrom** | **Date** | __Optional__. Start date when the consent becomes valid. | [optional] 
**validTo** | **Date** | __Optional__. End date when the consent expires and becomes invalid. | [optional] 
**recurringPaymentCategory** | **String** | The use-case for the VRP consent supported by the bank. Allowed values: &lt;br&gt;&#x60;ONGOING&#x60; &lt;br&gt;&#x60;SUBSCRIPTION&#x60; | [optional] 
**initialPayment** | [**Amount**](Amount.md) | __Optional__. Initial payment to be charged under this consent. If enforced, this amount must match the first payment amount executed using this consent. | [optional] 
**risk** | [**PaymentRisk**](PaymentRisk.md) |  | [optional] 


