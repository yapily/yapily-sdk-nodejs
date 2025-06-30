# YapilyApi.Beneficiary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier of the &#x60;beneficiary&#x60;. | [optional] 
**reference** | **String** | A creditor reference that is requested to be used for all payment instructions to this beneficiary. | [optional] 
**payee** | [**BeneficiaryPayee**](BeneficiaryPayee.md) |  | [optional] 
**trusted** | **Boolean** | Indicates whether the account owner has stated that this beneficiary should be trusted. This often results in reduced authentication and authorisation requirements on payments to the beneficiary. | [optional] 


