# YapilyApi.VirtualAccountPaymentSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of source for a payment. One of ACCOUNT or EXTERNAL | 
**accountId** | **String** | Only present if type is ACCOUNT. Identifies the Virtual Account from which the payment was made | [optional] 
**accountIdentifications** | [**[AccountIdentification]**](AccountIdentification.md) | Only present if type is EXTERNAL. The account identifications that identify an external source | [optional] 


