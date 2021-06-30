# YapilyApi.PaymentAuthorisationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userUuid** | **String** | Uuid of the application user who will authorise access to their data. Either the userUuid or applicationUserId must be provided. | [optional] 
**applicationUserId** | **String** | Descriptive identifier for the application user.Either the userUuid or applicationUserId must be provided. | [optional] 
**forwardParameters** | **[String]** |  | [optional] 
**institutionId** | **String** |  | 
**callback** | **String** |  | 
**redirect** | [**RedirectRequest**](RedirectRequest.md) |  | [optional] 
**oneTimeToken** | **Boolean** |  | 
**totalMaxAmount** | **Number** |  | [optional] 
**totalMaxAmountFrequency** | **String** |  | [optional] 
**maxAmountPerRequest** | **Number** |  | [optional] 
**startsAt** | **Date** |  | [optional] 
**expiresAt** | **Date** |  | [optional] 
**allowOverdraft** | **Boolean** |  | [optional] 
**paymentRequest** | [**PaymentRequest**](PaymentRequest.md) |  | 



## Enum: TotalMaxAmountFrequencyEnum


* `DAILY` (value: `"DAILY"`)

* `WEEKLY` (value: `"WEEKLY"`)

* `MONTHLY` (value: `"MONTHLY"`)

* `YEARLY` (value: `"YEARLY"`)




