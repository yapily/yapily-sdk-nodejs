# YapilyApi.SweepingPeriodicLimits

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalMaxAmount** | [**Amount**](Amount.md) | __Mandatory__. Maximum amount that can be specified in all payment instructions in a given period under this VRP consent. If the Alignment is Calendar, the limit is pro-rated in the first period to the remaining number of days. | 
**frequency** | **String** | __Mandatory__. Frequency for which the payment limits are enforced. Allowed values are [DAILY, WEEKLY, FORTNIGHTLY, MONTHLY, YEARLY]. | 
**alignment** | **String** | __Mandatory__. Period alignment for which the payment limits are enforced. Allowed values are [CONSENT, CALENDAR]. If CONSENT, then period starts on consent creation date. If CALENDAR, then period lines up with the frequency e.g. WEEKLY period will begin at start of the week in question. | 


