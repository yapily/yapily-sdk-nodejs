# YapilyApi.Account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Account Id returned by the institution if present | [optional] 
**type** | **String** |  | [optional] 
**description** | **String** | Product name as defined by the financial institution for this account | [optional] 
**balance** | **Number** |  | [optional] 
**currency** | **String** | ISO 4217 currency code | [optional] 
**usageType** | **String** |  | [optional] 
**accountType** | **String** |  | [optional] 
**nickname** | **String** | Name of the account as defined by the financial institution or the end user | [optional] 
**details** | **String** | Specifications that might be provided by the institution - characteristics of the account - characteristics of the relevant card | [optional] 
**accountNames** | [**[AccountName]**](AccountName.md) |  | [optional] 
**accountIdentifications** | [**[AccountIdentification]**](AccountIdentification.md) |  | [optional] 
**accountBalances** | [**[AccountBalance]**](AccountBalance.md) |  | [optional] 



## Enum: UsageTypeEnum


* `PERSONAL` (value: `"PERSONAL"`)

* `BUSINESS` (value: `"BUSINESS"`)

* `OTHER` (value: `"OTHER"`)

* `UNKNOWN` (value: `"UNKNOWN"`)





## Enum: AccountTypeEnum


* `CASH_TRADING` (value: `"CASH_TRADING"`)

* `CASH_INCOME` (value: `"CASH_INCOME"`)

* `CASH_PAYMENT` (value: `"CASH_PAYMENT"`)

* `CHARGE_CARD` (value: `"CHARGE_CARD"`)

* `CHARGES` (value: `"CHARGES"`)

* `COMMISSION` (value: `"COMMISSION"`)

* `CREDIT_CARD` (value: `"CREDIT_CARD"`)

* `CURRENT` (value: `"CURRENT"`)

* `E_MONEY` (value: `"E_MONEY"`)

* `LIMITED_LIQUIDITY_SAVINGS_ACCOUNT` (value: `"LIMITED_LIQUIDITY_SAVINGS_ACCOUNT"`)

* `LOAN` (value: `"LOAN"`)

* `MARGINAL_LENDING` (value: `"MARGINAL_LENDING"`)

* `MONEY_MARKET` (value: `"MONEY_MARKET"`)

* `MORTGAGE` (value: `"MORTGAGE"`)

* `NON_RESIDENT_EXTERNAL` (value: `"NON_RESIDENT_EXTERNAL"`)

* `OTHER` (value: `"OTHER"`)

* `OVERDRAFT` (value: `"OVERDRAFT"`)

* `OVERNIGHT_DEPOSIT` (value: `"OVERNIGHT_DEPOSIT"`)

* `PREPAID_CARD` (value: `"PREPAID_CARD"`)

* `SALARY` (value: `"SALARY"`)

* `SAVINGS` (value: `"SAVINGS"`)

* `SETTLEMENT` (value: `"SETTLEMENT"`)

* `TAX` (value: `"TAX"`)

* `UNKNOWN` (value: `"UNKNOWN"`)




