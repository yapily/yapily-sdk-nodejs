# YapilyApi.PaymentResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier of the payment. | [optional] 
**institutionConsentId** | **String** | Identification of the consent at the Institution. | [optional] 
**paymentIdempotencyId** | **String** | __Mandatory__. A unique identifier that you must provide to identify the payment. This can be any alpha-numeric string but is limited to a maximum of 35 characters. | [optional] 
**paymentLifecycleId** | **String** |  | [optional] 
**status** | [**PaymentStatus**](PaymentStatus.md) |  | [optional] 
**statusDetails** | [**PaymentStatusDetails**](PaymentStatusDetails.md) |  | [optional] 
**payer** | [**Payer**](Payer.md) |  | [optional] 
**payeeDetails** | [**Payee**](Payee.md) |  | [optional] 
**reference** | **String** | __Optional__. The payment reference or description. Limited to a maximum of 18 characters long. | [optional] 
**amount** | **Number** | Monetary amount. | [optional] 
**currency** | **String** | Currency the payment amount is denoted in. Specified as a 3-letter ISO 4217 code. | [optional] 
**amountDetails** | [**Amount**](Amount.md) |  | [optional] 
**createdAt** | **Date** | Date and time of when the payment request was created. | [optional] 
**firstPaymentAmount** | [**Amount**](Amount.md) |  | [optional] 
**firstPaymentDateTime** | **Date** | Date and time of when the first payment request is to be made. | [optional] 
**nextPaymentAmount** | [**Amount**](Amount.md) |  | [optional] 
**nextPaymentDateTime** | **Date** | __Conditional__. Defines when the recurring payment is to be made. | [optional] 
**finalPaymentAmount** | [**Amount**](Amount.md) |  | [optional] 
**finalPaymentDateTime** | **Date** | Date and time of when the final payment is to be made. | [optional] 
**numberOfPayments** | **Number** | Number of recurring payment requests to be made as part of the instructed payment schedule. | [optional] 
**previousPaymentAmount** | [**Amount**](Amount.md) |  | [optional] 
**previousPaymentDateTime** | **Date** | Date and time of when the previous payment request was posted. | [optional] 
**chargeDetails** | [**[PaymentChargeDetails]**](PaymentChargeDetails.md) |  | [optional] 
**scheduledPaymentType** | **String** | Details the execution type and the payment date between the payer and the payee. | [optional] 
**scheduledPaymentDateTime** | **Date** | Date and time of when the scheduled payment request will be made. | [optional] 
**frequency** | [**FrequencyResponse**](FrequencyResponse.md) |  | [optional] 
**currencyOfTransfer** | **String** | __Mandatory__. The currency to be transferred to the payee. This may differ from the currency the payment is denoted in and the currency of the payer&#39;s account. Specified as a 3-letter code (ISO 4217). | [optional] 
**purpose** | **String** | Specifies the external purpose code for the &#x60;Institution&#x60; - IS0 20022. | [optional] 
**priority** | [**PriorityCodeEnum**](PriorityCodeEnum.md) |  | [optional] 
**exchangeRate** | [**ExchangeRateInformationResponse**](ExchangeRateInformationResponse.md) |  | [optional] 
**refundAccount** | [**RefundAccount**](RefundAccount.md) |  | [optional] 
**bulkAmountSum** | **Number** |  | [optional] 


