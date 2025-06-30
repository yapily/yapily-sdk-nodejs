# YapilyApi.HostedVRPPaymentResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**paymentIdempotencyId** | **String** |  | [optional] 
**amount** | [**Amount**](Amount.md) |  | [optional] 
**reference** | **String** | __Optional__. The payment reference or description. Limited to a maximum of 18 characters long. | [optional] 
**payee** | [**Payee**](Payee.md) |  | [optional] 
**payer** | [**HostedVrpPayerResponse**](HostedVrpPayerResponse.md) |  | [optional] 
**refundAccount** | [**HostedVrpRefundAccount**](HostedVrpRefundAccount.md) |  | [optional] 
**risk** | [**PaymentRisk**](PaymentRisk.md) |  | [optional] 
**paymentLifecycleId** | **String** | The Unique Identifier provided by TPP in the Payment request to identify the payment. | [optional] 
**expectedExecutionTime** | **Date** |  | [optional] 
**expectedSettlementTime** | **Date** |  | [optional] 
**institutionPaymentId** | **String** |  | [optional] 
**statusDetails** | [**HostedPaymentStatusDetails**](HostedPaymentStatusDetails.md) |  | [optional] 


