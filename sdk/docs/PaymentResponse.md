# YapilyApi.PaymentResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**paymentIdempotencyId** | **String** |  | [optional] 
**institutionConsentId** | **String** |  | [optional] 
**paymentLifecycleId** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**statusDetails** | [**PaymentStatusDetails**](PaymentStatusDetails.md) |  | [optional] 
**payeeDetails** | [**Payee**](Payee.md) |  | [optional] 
**reference** | **String** |  | [optional] 
**amount** | **Number** |  | [optional] 
**currency** | **String** |  | [optional] 
**amountDetails** | [**Amount**](Amount.md) |  | [optional] 
**firstPaymentAmountDetails** | [**Amount**](Amount.md) |  | [optional] 
**firstPaymentDateTime** | **Date** |  | [optional] 
**nextPaymentAmountDetails** | [**Amount**](Amount.md) |  | [optional] 
**nextPaymentDateTime** | **Date** |  | [optional] 
**finalPaymentAmountDetails** | [**Amount**](Amount.md) |  | [optional] 
**finalPaymentDateTime** | **Date** |  | [optional] 
**createdAt** | **Date** |  | [optional] 
**previousPaymentAmountDetails** | [**Amount**](Amount.md) |  | [optional] 
**previousPaymentDateTime** | **Date** |  | [optional] 
**chargeDetails** | [**[ChargeDetails]**](ChargeDetails.md) |  | [optional] 
**scheduledPaymentType** | **String** |  | [optional] 
**scheduledPaymentDateTime** | **Date** |  | [optional] 
**frequencyDetails** | [**FrequencyResponse**](FrequencyResponse.md) |  | [optional] 
**accountId** | **String** |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `PENDING` (value: `"PENDING"`)

* `FAILED` (value: `"FAILED"`)

* `DECLINED` (value: `"DECLINED"`)

* `COMPLETED` (value: `"COMPLETED"`)

* `EXPIRED` (value: `"EXPIRED"`)

* `UNKNOWN` (value: `"UNKNOWN"`)

* `ACTIVE` (value: `"ACTIVE"`)

* `INACTIVE` (value: `"INACTIVE"`)




