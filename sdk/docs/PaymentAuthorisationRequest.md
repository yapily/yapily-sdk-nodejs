# YapilyApi.PaymentAuthorisationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userUuid** | **String** |  | [optional] 
**applicationUserId** | **String** |  | [optional] 
**forwardParameters** | **[String]** |  | [optional] 
**institutionId** | **String** |  | 
**callback** | **String** |  | 
**oneTimeToken** | **Boolean** |  | 
**paymentRequest** | [**PaymentRequest**](PaymentRequest.md) |  | 
**totalMaxAmount** | **Number** |  | [optional] 
**totalMaxAmountFrequency** | **String** |  | [optional] 
**maxAmountPerRequest** | **Number** |  | [optional] 
**startsAt** | **Date** |  | [optional] 
**expiresAt** | **Date** |  | [optional] 
**allowOverdraft** | **Boolean** |  | [optional] 



## Enum: TotalMaxAmountFrequencyEnum


* `DAILY` (value: `"DAILY"`)

* `WEEKLY` (value: `"WEEKLY"`)

* `MONTHLY` (value: `"MONTHLY"`)

* `YEARLY` (value: `"YEARLY"`)




