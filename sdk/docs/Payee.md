# YapilyApi.Payee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | __Mandatory__. The account holder name of the beneficiary. | 
**accountIdentifications** | [**[AccountIdentification]**](AccountIdentification.md) | __Mandatory__. The account identifications that identify the &#x60;Payee&#x60; bank account. | 
**accountType** | **String** | __Optional__. The payee account type. &lt;br&gt;&lt;br&gt;Allowed values: BUSINESS, BUSINESS_SAVING, CHARITY, COLLECTION, CORPORATE, E_WALLET, GOVERNMENT, INVESTMENT, INVESTMENT_ISA, JOINT_PERSONAL, PENSION, PERSONAL, PERSONAL_SAVING, PREMIER, WEALTH . | [optional] 
**address** | [**Address**](Address.md) |  | [optional] 
**merchantId** | **String** | __Optional__. The merchant ID is a unique code provided by the payment processor to the merchant. | [optional] 
**merchantCategoryCode** | **String** | __Optional__. The category code of the merchant in case the &#x60;Payee&#x60; is a business. Specified as a 3-letter ISO 18245 code. | [optional] 


