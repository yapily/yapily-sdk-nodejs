# YapilyApi.VirtualAccountPaymentDestination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of destination for a payment. One of ACCOUNT, EXTERNAL or BENEFICIARY | 
**accountId** | **String** | Only present if type is ACCOUNT. Identifies the Virtual Account to which the payment was made | [optional] 
**accountIdentifications** | [**[AccountIdentification]**](AccountIdentification.md) | Only present if type is EXTERNAL. The account identifications that identify an external destination | [optional] 
**beneficiaryId** | **String** | Only present if type is BENEFICIARY. Unique id of the beneficiary | [optional] 


