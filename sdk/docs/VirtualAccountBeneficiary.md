# YapilyApi.VirtualAccountBeneficiary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique id of the Beneficiary | [optional] 
**paymentSchemes** | **[String]** | Beneficiary payment schemes | [optional] 
**nickname** | **String** | Reference that can be provided in order to help with identification of the Beneficiary | [optional] 
**type** | **String** | Indicates the type of Beneficiary as either a INDIVIDUAL or BUSINESS | [optional] 
**name** | **String** |  | [optional] 
**birthDate** | **Date** |  | [optional] 
**address** | [**VirtualAccountBeneficiaryAddress**](VirtualAccountBeneficiaryAddress.md) |  | [optional] 
**account** | [**VirtualAccountBeneficiaryAccount**](VirtualAccountBeneficiaryAccount.md) |  | [optional] 
**status** | **String** | The current status of the Beneficiary &lt;br&gt; PENDING - Beneficiary is awaiting verification &lt;br&gt; ACTIVE - Beneficiary can be used in a Pay Out &lt;br&gt; BLOCKED - Beneficiary cannot be used in a Pay Out | [optional] 


