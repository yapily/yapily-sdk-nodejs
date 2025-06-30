# YapilyApi.Transaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier of the transaction. | [optional] 
**date** | **Date** |  | [optional] 
**bookingDateTime** | **Date** | Date and time in UTC format of when a transaction was booked. | [optional] 
**valueDateTime** | **Date** | Date and time in UTC format when the funds either cease to be available (for debit transactions) or become available (for credit transactions) to the account owner. | [optional] 
**status** | [**TransactionStatusEnum**](TransactionStatusEnum.md) |  | [optional] 
**amount** | **Number** | The transaction amount. | [optional] 
**currency** | **String** | Currency the transaction amount is denoted in. Specified as a 3-letter ISO 4217 code. | [optional] 
**transactionAmount** | [**Amount**](Amount.md) |  | [optional] 
**grossAmount** | [**Amount**](Amount.md) |  | [optional] 
**currencyExchange** | [**CurrencyExchange**](CurrencyExchange.md) |  | [optional] 
**chargeDetails** | [**TransactionChargeDetails**](TransactionChargeDetails.md) |  | [optional] 
**reference** | **String** |  | [optional] 
**statementReferences** | [**[StatementReference]**](StatementReference.md) |  | [optional] 
**description** | **String** |  | [optional] 
**transactionInformation** | **[String]** | Further details on the transaction. This is narrative data, caught as unstructured text. | [optional] 
**addressDetails** | [**AddressDetails**](AddressDetails.md) |  | [optional] 
**isoBankTransactionCode** | [**IsoBankTransactionCode**](IsoBankTransactionCode.md) |  | [optional] 
**proprietaryBankTransactionCode** | [**ProprietaryBankTransactionCode**](ProprietaryBankTransactionCode.md) |  | [optional] 
**balance** | [**TransactionBalance**](TransactionBalance.md) |  | [optional] 
**payeeDetails** | [**TransactionPayeeDetails**](TransactionPayeeDetails.md) |  | [optional] 
**payerDetails** | [**TransactionPayerDetails**](TransactionPayerDetails.md) |  | [optional] 
**merchant** | [**Merchant**](Merchant.md) |  | [optional] 
**enrichment** | [**Enrichment**](Enrichment.md) |  | [optional] 
**supplementaryData** | **Object** | Additional information that cannot be captured in a structured field or block. | [optional] 
**transactionMutability** | **String** | __Optional__. Specifies the Mutability of the Transaction record.&lt;ul&gt;&lt;li&gt;A transaction with a &#x60;Status&#x60; of &#x60;Pending&#x60; is mutable.&lt;/li&gt;&lt;li&gt;A transaction with a &#x60;Status&#x60; of &#x60;Booked&#x60; where the &#x60;TransactionMutability&#x60; flag is not specified is not guaranteed to be immutable (although in most instances it will be).&lt;/li&gt;&lt;li&gt;A transaction with a &#x60;Status&#x60; of &#x60;Booked&#x60; with the &#x60;TransactionMutability&#x60; flag set to &#x60;Immutable&#x60; is immutable.&lt;/li&gt;&lt;li&gt;A transaction with a &#x60;Status&#x60; of &#x60;Booked&#x60; with the &#x60;TransactionMutability&#x60; flag set to &#x60;Mutable&#x60; is mutable.&lt;/li&gt;&lt;/ul&gt; | [optional] 


