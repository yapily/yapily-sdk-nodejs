# YapilyApi.InlineResponse2001ATM

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aTMServices** | **[String]** |  | [optional] 
**access24HoursIndicator** | **Boolean** |  | [optional] 
**accessibility** | **[String]** |  | [optional] 
**branch** | [**Branch**](Branch.md) |  | [optional] 
**identification** | **String** |  | [optional] 
**location** | [**Location**](Location.md) |  | [optional] 
**minimumPossibleAmount** | **String** |  | [optional] 
**note** | **[String]** |  | [optional] 
**otherATMServices** | [**[InlineResponse2001OtherATMServices]**](InlineResponse2001OtherATMServices.md) |  | [optional] 
**otherAccessibility** | [**[InlineResponse2001OtherAccessibility]**](InlineResponse2001OtherAccessibility.md) |  | [optional] 
**supportedCurrencies** | **[String]** |  | [optional] 
**supportedLanguages** | **[String]** |  | [optional] 



## Enum: [ATMServicesEnum]


* `Balance` (value: `"Balance"`)

* `BillPayments` (value: `"BillPayments"`)

* `CashDeposits` (value: `"CashDeposits"`)

* `CharityDonation` (value: `"CharityDonation"`)

* `ChequeDeposits` (value: `"ChequeDeposits"`)

* `CashWithdrawal` (value: `"CashWithdrawal"`)

* `EnvelopeDeposit` (value: `"EnvelopeDeposit"`)

* `FastCash` (value: `"FastCash"`)

* `MobileBankingRegistration` (value: `"MobileBankingRegistration"`)

* `MobilePaymentRegistration` (value: `"MobilePaymentRegistration"`)

* `MobilePhoneTopUp` (value: `"MobilePhoneTopUp"`)

* `OrderStatement` (value: `"OrderStatement"`)

* `Other` (value: `"Other"`)

* `PINActivation` (value: `"PINActivation"`)

* `PINChange` (value: `"PINChange"`)

* `PINUnblock` (value: `"PINUnblock"`)

* `MiniStatement` (value: `"MiniStatement"`)





## Enum: [AccessibilityEnum]


* `AudioCashMachine` (value: `"AudioCashMachine"`)

* `AutomaticDoors` (value: `"AutomaticDoors"`)

* `ExternalRamp` (value: `"ExternalRamp"`)

* `InductionLoop` (value: `"InductionLoop"`)

* `InternalRamp` (value: `"InternalRamp"`)

* `LevelAccess` (value: `"LevelAccess"`)

* `LowerLevelCounter` (value: `"LowerLevelCounter"`)

* `Other` (value: `"Other"`)

* `WheelchairAccess` (value: `"WheelchairAccess"`)




