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
**transactionAmount** | [**TransactionAmount**](TransactionAmount.md) |  | [optional] 
**currencyExchange** | [**CurrencyExchange**](CurrencyExchange.md) |  | [optional] 
**chargeDetails** | [**ChargeDetails**](ChargeDetails.md) |  | [optional] 
**reference** | **String** | Transaction reference | [optional] 
**statementReferences** | [**[StatementReference]**](StatementReference.md) |  | [optional] 
**description** | **String** | Unstructured text containing details of the transaction. Usage varies according to the institution | [optional] 
**transactionInformation** | **[String]** | Further information related to the transaction. Usage varies according to the institution | [optional] 
**addressDetails** | [**AddressDetails**](AddressDetails.md) |  | [optional] 
**isoBankTransactionCode** | [**IsoBankTransactionCode**](IsoBankTransactionCode.md) |  | [optional] 
**proprietaryBankTransactionCode** | [**ProprietaryBankTransactionCode**](ProprietaryBankTransactionCode.md) |  | [optional] 
**balance** | [**Balance**](Balance.md) |  | [optional] 
**merchant** | [**Merchant**](Merchant.md) |  | [optional] 
**enrichment** | [**Enrichment**](Enrichment.md) |  | [optional] 
**supplementaryData** | **String** | Additional information that can not be captured in the structured fields and/or any other specific block. | [optional] 



## Enum: StatusEnum


* `BOOKED` (value: `"BOOKED"`)

* `PENDING` (value: `"PENDING"`)




