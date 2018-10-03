# YapilyApi.CreditInterestTierBand

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AER** | **String** |  | [optional] 
**applicationFrequency** | **String** |  | [optional] 
**bankInterestRateType** | **String** |  | [optional] 
**calculationFrequency** | **String** |  | [optional] 
**depositInterestAppliedCoverage** | **String** |  | [optional] 
**fixedVariableInterestRateType** | **String** |  | [optional] 
**identification** | **String** |  | [optional] 
**notes** | **[String]** |  | [optional] 
**otherApplicationFrequency** | [**OtherApplicationFrequency**](OtherApplicationFrequency.md) |  | [optional] 
**otherBankInterestType** | [**OtherBankInterestType**](OtherBankInterestType.md) |  | [optional] 
**otherCalculationFrequency** | [**OtherCalculationFrequency**](OtherCalculationFrequency.md) |  | [optional] 
**tierValueMaximum** | **String** |  | [optional] 
**tierValueMinimum** | **String** |  | [optional] 


<a name="ApplicationFrequencyEnum"></a>
## Enum: ApplicationFrequencyEnum


* `PerAcademicTerm` (value: `"PerAcademicTerm"`)

* `Daily` (value: `"Daily"`)

* `HalfYearly` (value: `"HalfYearly"`)

* `Monthly` (value: `"Monthly"`)

* `Other` (value: `"Other"`)

* `Quarterly` (value: `"Quarterly"`)

* `PerStatementDate` (value: `"PerStatementDate"`)

* `Weekly` (value: `"Weekly"`)

* `Yearly` (value: `"Yearly"`)




<a name="BankInterestRateTypeEnum"></a>
## Enum: BankInterestRateTypeEnum


* `LinkedBaseRate` (value: `"LinkedBaseRate"`)

* `Gross` (value: `"Gross"`)

* `Net` (value: `"Net"`)

* `Other` (value: `"Other"`)




<a name="CalculationFrequencyEnum"></a>
## Enum: CalculationFrequencyEnum


* `PerAcademicTerm` (value: `"PerAcademicTerm"`)

* `Daily` (value: `"Daily"`)

* `HalfYearly` (value: `"HalfYearly"`)

* `Monthly` (value: `"Monthly"`)

* `Other` (value: `"Other"`)

* `Quarterly` (value: `"Quarterly"`)

* `PerStatementDate` (value: `"PerStatementDate"`)

* `Weekly` (value: `"Weekly"`)

* `Yearly` (value: `"Yearly"`)




<a name="DepositInterestAppliedCoverageEnum"></a>
## Enum: DepositInterestAppliedCoverageEnum


* `Tiered` (value: `"Tiered"`)

* `Whole` (value: `"Whole"`)




<a name="FixedVariableInterestRateTypeEnum"></a>
## Enum: FixedVariableInterestRateTypeEnum


* `Fixed` (value: `"Fixed"`)

* `Variable` (value: `"Variable"`)




