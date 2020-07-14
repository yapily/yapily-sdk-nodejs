# YapilyApi.PaymentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentIdempotencyId** | **String** |  | [optional] 
**payer** | [**Payer**](Payer.md) |  | [optional] 
**amount** | [**Amount**](Amount.md) |  | [optional] 
**reference** | **String** |  | [optional] 
**contextType** | **String** |  | [optional] 
**type** | **String** |  | 
**paymentDateTime** | **Date** |  | [optional] 
**payee** | [**Payee**](Payee.md) |  | 
**periodicPayment** | [**PeriodicPaymentRequest**](PeriodicPaymentRequest.md) |  | [optional] 
**internationalPayment** | [**InternationalPaymentRequest**](InternationalPaymentRequest.md) |  | [optional] 



## Enum: ContextTypeEnum


* `BILL` (value: `"BILL"`)

* `GOODS` (value: `"GOODS"`)

* `SERVICES` (value: `"SERVICES"`)

* `OTHER` (value: `"OTHER"`)

* `PERSON_TO_PERSON` (value: `"PERSON_TO_PERSON"`)





## Enum: TypeEnum


* `DOMESTIC_PAYMENT` (value: `"DOMESTIC_PAYMENT"`)

* `DOMESTIC_INSTANT_PAYMENT` (value: `"DOMESTIC_INSTANT_PAYMENT"`)

* `DOMESTIC_VARIABLE_RECURRING_PAYMENT` (value: `"DOMESTIC_VARIABLE_RECURRING_PAYMENT"`)

* `DOMESTIC_SCHEDULED_PAYMENT` (value: `"DOMESTIC_SCHEDULED_PAYMENT"`)

* `DOMESTIC_PERIODIC_PAYMENT` (value: `"DOMESTIC_PERIODIC_PAYMENT"`)

* `INTERNATIONAL_PAYMENT` (value: `"INTERNATIONAL_PAYMENT"`)

* `INTERNATIONAL_SCHEDULED_PAYMENT` (value: `"INTERNATIONAL_SCHEDULED_PAYMENT"`)

* `INTERNATIONAL_PERIODIC_PAYMENT` (value: `"INTERNATIONAL_PERIODIC_PAYMENT"`)

* `BULK_PAYMENT` (value: `"BULK_PAYMENT"`)




