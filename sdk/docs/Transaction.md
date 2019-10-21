# YapilyApi.Transaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Transaction Id returned by the institution if present | [optional] 
**_date** | **Date** | Transaction date as defined by the institution | [optional] 
**bookingDateTime** | **Date** | Date and (if available) time that transaction is posted | [optional] 
**valueDateTime** | **Date** | The actual or expected date and time transaction is cleared | [optional] 
**status** | **String** | The status of the transaction | [optional] 
**amount** | **Number** | Deprecated. Use the amount value in &#x60;transactionAmount&#x60; instead | [optional] 
**currency** | **String** | Deprecated. Use the currency value in &#x60;transactionAmount&#x60; instead | [optional] 
**transactionAmount** | [**Amount**](Amount.md) |  | [optional] 
**currencyExchange** | [**CurrencyExchange**](CurrencyExchange.md) |  | [optional] 
**chargeDetails** | [**ChargeDetails**](ChargeDetails.md) | If present, contains details of any charges applied during this transaction | [optional] 
**reference** | **String** | Transaction reference | [optional] 
**statementReferences** | [**[StatementReference]**](StatementReference.md) |  | [optional] 
**description** | **String** | Unstructured text containing details of the transaction. Usage varies according to the institution | [optional] 
**transactionInformation** | **[String]** | Further information related to the transaction. Usage varies according to the institution | [optional] 
**addressDetails** | [**AddressDetails**](AddressDetails.md) |  | [optional] 
**isoBankTransactionCode** | [**IsoBankTransactionCode**](IsoBankTransactionCode.md) |  | [optional] 
**proprietaryBankTransactionCode** | [**ProprietaryBankTransactionCode**](ProprietaryBankTransactionCode.md) |  | [optional] 
**balance** | [**Balance**](Balance.md) | Running account balance after transaction has been applied | [optional] 
**merchant** | [**Merchant**](Merchant.md) | Merchant details | [optional] 
**categorisation** | [**Categorisation**](Categorisation.md) | Categorisation | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `ACCOUNT_CHECK` (value: `"ACCOUNT_CHECK"`)

* `BOOKED` (value: `"BOOKED"`)

* `DECLINED` (value: `"DECLINED"`)

* `PENDING` (value: `"PENDING"`)

* `REFUNDED` (value: `"REFUNDED"`)

* `RETRYING` (value: `"RETRYING"`)

* `REVERSED` (value: `"REVERSED"`)

* `UPCOMING` (value: `"UPCOMING"`)




