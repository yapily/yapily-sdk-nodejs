# YapilyApi.NonSweepingControlParameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**psuAuthenticationMethods** | **[String]** | __Mandatory__. Defines the authentication method(s) allowed in payment submission step. Allowed values are [SCA_REQUIRED, SCA_NOT_REQUIRED]. | 
**periodicLimits** | [**[NonSweepingPeriodicLimits]**](NonSweepingPeriodicLimits.md) |  | 
**maxAmountPerPayment** | [**Amount**](Amount.md) | __Mandatory__. Max amount that can be submitted per payment. | 
**maxCumulativeAmount** | [**Amount**](Amount.md) | __Optional__. Max cumulative amount that can be submitted under this consent. | [optional] 
**maxCumulativeNumberOfPayments** | **Number** | __Optional__. Max number of payments that can be submitted under this consent. | [optional] 
**validFrom** | **Date** | __Optional__. Start date when the consent becomes valid. | [optional] 
**validTo** | **Date** | __Optional__. End date when the consent expires and becomes invalid. | [optional] 


