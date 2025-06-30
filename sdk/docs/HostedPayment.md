# YapilyApi.HostedPayment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentId** | **String** | The Unique Identifier of the payment. | [optional] 
**hostedPaymentId** | **String** | The Unique Identifier of the payment created using Yapily hosted application. | [optional] 
**consentId** | **String** | The Unique Identifier of the consent. | [optional] 
**institutionIdentifiers** | [**InstitutionIdentifiersResponse**](InstitutionIdentifiersResponse.md) |  | [optional] 
**phases** | [**[HostedPaymentPhase]**](HostedPaymentPhase.md) | The phase reached by the payment and its timestamp. | [optional] 
**paymentStatus** | **String** | Payment status based on latest HostedAuthPaymentPhase in phases. Value can be &lt;ul&gt; &lt;li&gt;PENDING  -  Payment pending processing&lt;/li&gt; &lt;li&gt;COMPLETED  -  Payment processing completed&lt;/li&gt; &lt;li&gt;FAILED  -  Payment process failed&lt;/li&gt;&lt;/ul&gt; | [optional] 
**statusDetails** | [**[HostedPaymentStatusDetails]**](HostedPaymentStatusDetails.md) | Details of the payment status. | [optional] 
**institutionPaymentId** | **String** | The Unique Identifier of the payment created with the &#x60;Institution&#x60;. | [optional] 
**paymentLifecycleId** | **String** | The Unique Identifier provided by TPP in the Payment request to identify the payment. | [optional] 
**paymentIdempotencyId** | **String** | A unique identifier that you must provide to identify the payment. This can be any alpha-numeric string but is limited to a maximum of 35 characters. | [optional] 
**reference** | **String** | The payment reference or description. Limited to a maximum of 18 characters for UK institutions. | [optional] 
**contextType** | [**PaymentContextTypeResponse**](PaymentContextTypeResponse.md) |  | [optional] 
**type** | [**PaymentTypeResponse**](PaymentTypeResponse.md) |  | [optional] 
**payee** | [**PayeeDetailsResponse**](PayeeDetailsResponse.md) |  | [optional] 
**payer** | [**PayerDetailsResponse**](PayerDetailsResponse.md) |  | [optional] 
**amount** | [**AmountDetailsResponse**](AmountDetailsResponse.md) |  | [optional] 


