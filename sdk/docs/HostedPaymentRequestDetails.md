# YapilyApi.HostedPaymentRequestDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentIdempotencyId** | **String** | A unique identifier that you must provide to identify the payment. This can be any alpha-numeric string but is limited to a maximum of 35 characters. | 
**reference** | **String** | The payment reference or description. Limited to a maximum of 18 characters for UK institutions. | [optional] 
**contextType** | [**PaymentContextType**](PaymentContextType.md) |  | [optional] 
**type** | [**PaymentType**](PaymentType.md) |  | 
**payee** | [**Payee**](Payee.md) |  | 
**payer** | [**Payer**](Payer.md) |  | [optional] 
**amountDetails** | [**HostedAmountDetails**](HostedAmountDetails.md) |  | 
**paymentDueDate** | **Date** | The date that the payment is due. Displayed to the end user in the payment summary screen. | [optional] 


