# YapilyApi.PaymentResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**institutionConsentId** | **String** |  | [optional] 
**paymentIdempotencyId** | **String** |  | [optional] 
**paymentLifecycleId** | **String** |  | [optional] 
**status** | [**PaymentStatus**](PaymentStatus.md) |  | [optional] 
**statusDetails** | [**PaymentStatusDetails**](PaymentStatusDetails.md) |  | [optional] 
**payer** | [**Payer**](Payer.md) |  | [optional] 
**payeeDetails** | [**Payee**](Payee.md) |  | [optional] 
**reference** | **String** |  | [optional] 
**amount** | **Number** |  | [optional] 
**currency** | **String** |  | [optional] 
**amountDetails** | [**Amount**](Amount.md) |  | [optional] 
**createdAt** | **Date** |  | [optional] 
**firstPaymentAmount** | [**Amount**](Amount.md) |  | [optional] 
**firstPaymentDateTime** | **Date** |  | [optional] 
**nextPaymentAmount** | [**Amount**](Amount.md) |  | [optional] 
**nextPaymentDateTime** | **Date** |  | [optional] 
**finalPaymentAmount** | [**Amount**](Amount.md) |  | [optional] 
**finalPaymentDateTime** | **Date** |  | [optional] 
**numberOfPayments** | **Number** |  | [optional] 
**previousPaymentAmount** | [**Amount**](Amount.md) |  | [optional] 
**previousPaymentDateTime** | **Date** |  | [optional] 
**chargeDetails** | [**[PaymentChargeDetails]**](PaymentChargeDetails.md) |  | [optional] 
**scheduledPaymentType** | **String** |  | [optional] 
**scheduledPaymentDateTime** | **Date** |  | [optional] 
**frequency** | [**FrequencyResponse**](FrequencyResponse.md) |  | [optional] 
**currencyOfTransfer** | **String** |  | [optional] 
**purpose** | **String** |  | [optional] 
**priority** | [**PriorityCodeEnum**](PriorityCodeEnum.md) |  | [optional] 
**exchangeRate** | [**ExchangeRateInformationResponse**](ExchangeRateInformationResponse.md) |  | [optional] 
**refundAccount** | [**RefundAccount**](RefundAccount.md) |  | [optional] 
**bulkAmountSum** | **Number** |  | [optional] 


