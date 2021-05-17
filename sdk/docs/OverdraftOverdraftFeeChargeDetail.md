# YapilyApi.OverdraftOverdraftFeeChargeDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationFrequency** | **String** |  | [optional] 
**calculationFrequency** | **String** |  | [optional] 
**feeAmount** | **String** |  | [optional] 
**feeRate** | **String** |  | [optional] 
**feeRateType** | **String** |  | [optional] 
**feeType** | **String** |  | [optional] 
**incrementalBorrowingAmount** | **String** |  | [optional] 
**notes** | **[String]** |  | [optional] 
**otherApplicationFrequency** | [**OtherApplicationFrequency**](OtherApplicationFrequency.md) |  | [optional] 
**otherCalculationFrequency** | [**OtherCalculationFrequency**](OtherCalculationFrequency.md) |  | [optional] 
**otherFeeRateType** | [**OtherFeeRateType**](OtherFeeRateType.md) |  | [optional] 
**otherFeeType** | [**OtherFeeType**](OtherFeeType.md) |  | [optional] 
**overdraftControlIndicator** | **Boolean** |  | [optional] 
**overdraftFeeChargeCap** | [**OverdraftOverdraftFeeChargeCap**](OverdraftOverdraftFeeChargeCap.md) |  | [optional] 



## Enum: ApplicationFrequencyEnum


* `AccountClosing` (value: `"AccountClosing"`)

* `AccountOpening` (value: `"AccountOpening"`)

* `AcademicTerm` (value: `"AcademicTerm"`)

* `ChargingPeriod` (value: `"ChargingPeriod"`)

* `Daily` (value: `"Daily"`)

* `PerItem` (value: `"PerItem"`)

* `Monthly` (value: `"Monthly"`)

* `OnAccountAnniversary` (value: `"OnAccountAnniversary"`)

* `Other` (value: `"Other"`)

* `PerHour` (value: `"PerHour"`)

* `PerOccurrence` (value: `"PerOccurrence"`)

* `PerSheet` (value: `"PerSheet"`)

* `PerTransaction` (value: `"PerTransaction"`)

* `PerTransactionAmount` (value: `"PerTransactionAmount"`)

* `PerTransactionPercentage` (value: `"PerTransactionPercentage"`)

* `Quarterly` (value: `"Quarterly"`)

* `SixMonthly` (value: `"SixMonthly"`)

* `StatementMonthly` (value: `"StatementMonthly"`)

* `Weekly` (value: `"Weekly"`)

* `Yearly` (value: `"Yearly"`)





## Enum: CalculationFrequencyEnum


* `AccountClosing` (value: `"AccountClosing"`)

* `AccountOpening` (value: `"AccountOpening"`)

* `AcademicTerm` (value: `"AcademicTerm"`)

* `ChargingPeriod` (value: `"ChargingPeriod"`)

* `Daily` (value: `"Daily"`)

* `PerItem` (value: `"PerItem"`)

* `Monthly` (value: `"Monthly"`)

* `OnAccountAnniversary` (value: `"OnAccountAnniversary"`)

* `Other` (value: `"Other"`)

* `PerHour` (value: `"PerHour"`)

* `PerOccurrence` (value: `"PerOccurrence"`)

* `PerSheet` (value: `"PerSheet"`)

* `PerTransaction` (value: `"PerTransaction"`)

* `PerTransactionAmount` (value: `"PerTransactionAmount"`)

* `PerTransactionPercentage` (value: `"PerTransactionPercentage"`)

* `Quarterly` (value: `"Quarterly"`)

* `SixMonthly` (value: `"SixMonthly"`)

* `StatementMonthly` (value: `"StatementMonthly"`)

* `Weekly` (value: `"Weekly"`)

* `Yearly` (value: `"Yearly"`)





## Enum: FeeRateTypeEnum


* `LinkedBaseRate` (value: `"LinkedBaseRate"`)

* `Gross` (value: `"Gross"`)

* `Net` (value: `"Net"`)

* `Other` (value: `"Other"`)





## Enum: FeeTypeEnum


* `ArrangedOverdraft` (value: `"ArrangedOverdraft"`)

* `EmergencyBorrowing` (value: `"EmergencyBorrowing"`)

* `BorrowingItem` (value: `"BorrowingItem"`)

* `OverdraftRenewal` (value: `"OverdraftRenewal"`)

* `AnnualReview` (value: `"AnnualReview"`)

* `OverdraftSetup` (value: `"OverdraftSetup"`)

* `Surcharge` (value: `"Surcharge"`)

* `TempOverdraft` (value: `"TempOverdraft"`)

* `UnauthorisedBorrowing` (value: `"UnauthorisedBorrowing"`)

* `UnauthorisedPaidTrans` (value: `"UnauthorisedPaidTrans"`)

* `Other` (value: `"Other"`)

* `UnauthorisedUnpaidTrans` (value: `"UnauthorisedUnpaidTrans"`)




