# YapilyApi.PaymentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentIdempotencyId** | **String** |  | 
**payerAccountIdentifications** | [**[AccountIdentification]**](AccountIdentification.md) |  | [optional] 
**amount** | [**Amount**](Amount.md) |  | [optional] 
**reference** | **String** |  | [optional] 
**contextType** | **String** |  | [optional] 
**type** | **String** |  | [optional] 
**paymentDateTime** | **Date** |  | [optional] 
**payee** | [**Payee**](Payee.md) |  | 
**periodicPayments** | [**PeriodicPaymentRequest**](PeriodicPaymentRequest.md) |  | [optional] 



## Enum: ContextTypeEnum


* `BILL` (value: `"BILL"`)

* `GOODS` (value: `"GOODS"`)

* `SERVICES` (value: `"SERVICES"`)

* `OTHER` (value: `"OTHER"`)

* `PERSON_TO_PERSON` (value: `"PERSON_TO_PERSON"`)





## Enum: TypeEnum


* `PAYMENT` (value: `"DOMESTIC_PAYMENT"`)

* `VARIABLE_RECURRING_PAYMENT` (value: `"DOMESTIC_VARIABLE_RECURRING_PAYMENT"`)

* `SCHEDULED_PAYMENT` (value: `"DOMESTIC_SCHEDULED_PAYMENT"`)

* `PERIODIC_PAYMENT` (value: `"DOMESTIC_PERIODIC_PAYMENT"`)




