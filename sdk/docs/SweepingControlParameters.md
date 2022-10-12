# YapilyApi.SweepingControlParameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**psuAuthenticationMethods** | **[String]** | __Mandatory__. Defines the authentication method(s) allowed in payment submission step. Allowed values are [SCA_REQUIRED, SCA_NOT_REQUIRED]. | 
**periodicLimits** | [**[SweepingPeriodicLimits]**](SweepingPeriodicLimits.md) |  | 
**maxAmountPerPayment** | [**Amount**](Amount.md) | __Mandatory__. Max amount that can be submitted per payment. | 
**validFrom** | **Date** | __Optional__. Start date when the consent becomes valid. | [optional] 
**validTo** | **Date** | __Optional__. End date when the consent expires and becomes invalid. | [optional] 


