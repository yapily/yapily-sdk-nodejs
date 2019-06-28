# YapilyApi.OverdraftOverdraftFeeChargeCap

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cappingPeriod** | **String** |  | [optional] 
**feeCapAmount** | **String** |  | [optional] 
**feeCapOccurrence** | **Number** |  | [optional] 
**feeType** | **[String]** |  | [optional] 
**minMaxType** | **String** |  | [optional] 
**notes** | **[String]** |  | [optional] 
**otherFeeType** | [**[OverdraftOtherFeeType]**](OverdraftOtherFeeType.md) |  | [optional] 
**overdraftControlIndicator** | **Boolean** |  | [optional] 


<a name="CappingPeriodEnum"></a>
## Enum: CappingPeriodEnum


* `Day` (value: `"Day"`)

* `Half Year` (value: `"Half Year"`)

* `Month` (value: `"Month"`)

* `Quarter` (value: `"Quarter"`)

* `Week` (value: `"Week"`)

* `AcademicTerm` (value: `"AcademicTerm"`)

* `Year` (value: `"Year"`)




<a name="[FeeTypeEnum]"></a>
## Enum: [FeeTypeEnum]


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




<a name="MinMaxTypeEnum"></a>
## Enum: MinMaxTypeEnum


* `Minimum` (value: `"Minimum"`)

* `Maximum` (value: `"Maximum"`)




