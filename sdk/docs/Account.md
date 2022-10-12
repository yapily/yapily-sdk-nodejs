# YapilyApi.Account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier of the account. | [optional] 
**type** | **String** | Specifies the type of account e.g. (BUSINESS_CURRENT). | [optional] 
**description** | **String** | Product name as defined by the financial institution for this account | [optional] 
**balance** | **Number** | Main / headline balance for the account. &lt;br&gt;&lt;br&gt; Use of this field is recommended as fallback only. Instead, use of the typed balances (accountBalances) is recommended. | [optional] 
**currency** | **String** | Currency the bank account balance is denoted in. &lt;br&gt;&lt;br&gt; Specified as a 3-letter ISO 4217 currency code | [optional] 
**usageType** | [**UsageType**](UsageType.md) |  | [optional] 
**accountType** | [**AccountType**](AccountType.md) |  | [optional] 
**nickname** | **String** | Nickname of the account that was provided by the account owner. &lt;br&gt;&lt;br&gt; May be used to aid identification of the account. | [optional] 
**details** | **String** | Supplementary specifications that might be provided by the Bank. These provide further characteristics about the account. | [optional] 
**accountNames** | [**[AccountName]**](AccountName.md) |  | [optional] 
**accountIdentifications** | [**[AccountIdentification]**](AccountIdentification.md) |  | [optional] 
**accountBalances** | [**[AccountBalance]**](AccountBalance.md) |  | [optional] 
**consolidatedAccountInformation** | [**ConsolidatedAccountInformation**](ConsolidatedAccountInformation.md) |  | [optional] 


