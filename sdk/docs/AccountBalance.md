# YapilyApi.AccountBalance

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | [optional] 
**dateTime** | **Date** | Timestamp of the last change of the balance amount | [optional] 
**balanceAmount** | [**Amount**](Amount.md) |  | [optional] 
**creditLineIncluded** | **Boolean** | Indicates whether or not the credit line is included in the balance | [optional] 
**creditLines** | [**[CreditLine]**](CreditLine.md) |  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `CLOSING_AVAILABLE` (value: `"CLOSING_AVAILABLE"`)

* `CLOSING_BOOKED` (value: `"CLOSING_BOOKED"`)

* `CLOSING_CLEARED` (value: `"CLOSING_CLEARED"`)

* `EXPECTED` (value: `"EXPECTED"`)

* `FORWARD_AVAILABLE` (value: `"FORWARD_AVAILABLE"`)

* `INFORMATION` (value: `"INFORMATION"`)

* `INTERIM_AVAILABLE` (value: `"INTERIM_AVAILABLE"`)

* `INTERIM_BOOKED` (value: `"INTERIM_BOOKED"`)

* `INTERIM_CLEARED` (value: `"INTERIM_CLEARED"`)

* `OPENING_AVAILABLE` (value: `"OPENING_AVAILABLE"`)

* `OPENING_BOOKED` (value: `"OPENING_BOOKED"`)

* `OPENING_CLEARED` (value: `"OPENING_CLEARED"`)

* `PREVIOUSLY_CLOSED_BOOKED` (value: `"PREVIOUSLY_CLOSED_BOOKED"`)

* `AUTHORISED` (value: `"AUTHORISED"`)

* `OTHER` (value: `"OTHER"`)

* `UNKNOWN` (value: `"UNKNOWN"`)




