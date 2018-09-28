# YapilyApi.ATMOpenDataATM

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access24HoursIndicator** | **Boolean** |  | [optional] 
**accessibility** | **[String]** |  | [optional] 
**branch** | [**ATMBranch**](ATMBranch.md) |  | [optional] 
**identification** | **String** |  | [optional] 
**location** | [**ATMLocation**](ATMLocation.md) |  | [optional] 
**minimumPossibleAmount** | **String** |  | [optional] 
**note** | **String** |  | [optional] 
**otherATMServices** | [**[ATMOpenDataOtherATMServices]**](ATMOpenDataOtherATMServices.md) |  | [optional] 
**otherAccessibility** | [**[ATMOpenDataOtherAccessibility]**](ATMOpenDataOtherAccessibility.md) |  | [optional] 
**services** | **[String]** |  | [optional] 
**supportedCurrencies** | **[String]** |  | [optional] 
**supportedLanguages** | **[String]** |  | [optional] 


<a name="[AccessibilityEnum]"></a>
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




<a name="[ServicesEnum]"></a>
## Enum: [ServicesEnum]


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




