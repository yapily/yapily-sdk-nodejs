# YapilyApi.NonSweepingControlParameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**psuAuthenticationMethods** | **[String]** | __Mandatory__. Defines the authentication method(s) allowed in payment submission step. Allowed values are [SCA_REQUIRED, SCA_NOT_REQUIRED]. | 
**periodicLimits** | [**[NonSweepingPeriodicLimits]**](NonSweepingPeriodicLimits.md) |  | [optional] 
**maxAmountPerPayment** | [**Amount**](Amount.md) | __Mandatory__. Max amount that can be submitted per payment. | [optional] 
**maxCumulativeAmount** | [**Amount**](Amount.md) | __Optional__. Max cumulative amount that can be submitted under this consent. | [optional] 
**initialPayment** | [**Amount**](Amount.md) | __Mandatory__. Initial payment to be charged under this consent. If enforced, this amount must match the first payment amount executed using this consent. | [optional] 
**maxCumulativeNumberOfPayments** | **Number** | __Optional__. Max number of payments that can be submitted under this consent. | [optional] 
**validFrom** | **Date** | __Optional__. Start date when the consent becomes valid. | [optional] 
**validTo** | **Date** | __Optional__. End date when the consent expires and becomes invalid. | [optional] 
**recurringPaymentCategory** | **String** | The use-case for the VRP consent supported by the bank. Allowed values: &lt;br&gt;&#x60;ONGOING&#x60; &lt;br&gt;&#x60;SUBSCRIPTION&#x60; | [optional] 


