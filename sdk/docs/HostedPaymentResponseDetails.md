# YapilyApi.HostedPaymentResponseDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentIdempotencyId** | **String** | A unique identifier provided to identify the payment. This can be any alpha-numeric string but is limited to a maximum of 35 characters. | [optional] 
**reference** | **String** | The payment reference or description. Limited to a maximum of 18 characters for UK institutions. | [optional] 
**contextType** | [**PaymentContextTypeResponse**](PaymentContextTypeResponse.md) |  | [optional] 
**type** | [**PaymentTypeResponse**](PaymentTypeResponse.md) |  | [optional] 
**payee** | [**PayeeDetailsResponse**](PayeeDetailsResponse.md) |  | [optional] 
**payer** | [**PayerDetailsResponse**](PayerDetailsResponse.md) |  | [optional] 
**amountDetails** | [**AmountDetailsResponse**](AmountDetailsResponse.md) |  | [optional] 
**paymentDueDate** | **Date** | The date that the payment is due. | [optional] 


