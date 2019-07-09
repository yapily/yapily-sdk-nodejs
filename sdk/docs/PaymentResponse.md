# YapilyApi.PaymentResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**institutionConsentId** | **String** |  | [optional] 
**paymentLifecycleId** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**statusDetails** | [**PaymentStatusDetails**](PaymentStatusDetails.md) |  | [optional] 
**reference** | **String** |  | [optional] 
**amount** | **Number** |  | [optional] 
**currency** | **String** |  | [optional] 
**amountDetails** | [**Amount**](Amount.md) |  | [optional] 
**chargeDetails** | [**[ChargeDetails]**](ChargeDetails.md) |  | [optional] 
**payeeDetails** | [**Payee**](Payee.md) |  | [optional] 
**createdAt** | **Date** |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `PENDING` (value: `"PENDING"`)

* `FAILED` (value: `"FAILED"`)

* `DECLINED` (value: `"DECLINED"`)

* `COMPLETED` (value: `"COMPLETED"`)

* `EXPIRED` (value: `"EXPIRED"`)

* `UNKNOWN` (value: `"UNKNOWN"`)




