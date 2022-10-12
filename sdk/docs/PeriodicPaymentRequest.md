# YapilyApi.PeriodicPaymentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frequency** | [**FrequencyRequest**](FrequencyRequest.md) |  | 
**numberOfPayments** | **Number** | __Conditional__. Defines the total number of payments to be made.&lt;br&gt;&lt;br&gt;This is required if &#x60;finalPaymentDateTime&#x60; is not specified and it is intended for the periodic payment have a fixed amount of payments. | [optional] 
**nextPaymentDateTime** | **Date** | __Conditional__. Defines when to start the recurring payment date and time. Specify this if you want the first payment to start on a different day than what the frequency object defines. | [optional] 
**nextPaymentAmount** | [**Amount**](Amount.md) |  | [optional] 
**finalPaymentDateTime** | **Date** | __Conditional__. Defines the final payment date and time. To create an open-ended periodic payment, do not specify this property. | [optional] 
**finalPaymentAmount** | [**Amount**](Amount.md) |  | [optional] 


