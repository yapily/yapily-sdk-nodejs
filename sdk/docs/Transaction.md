# YapilyApi.Transaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**date** | **Date** |  | [optional] 
**bookingDateTime** | **Date** |  | [optional] 
**valueDateTime** | **Date** |  | [optional] 
**status** | [**TransactionStatusEnum**](TransactionStatusEnum.md) |  | [optional] 
**amount** | **Number** |  | [optional] 
**currency** | **String** |  | [optional] 
**transactionAmount** | [**Amount**](Amount.md) |  | [optional] 
**grossAmount** | [**Amount**](Amount.md) |  | [optional] 
**currencyExchange** | [**CurrencyExchange**](CurrencyExchange.md) |  | [optional] 
**chargeDetails** | [**TransactionChargeDetails**](TransactionChargeDetails.md) |  | [optional] 
**reference** | **String** |  | [optional] 
**statementReferences** | [**[StatementReference]**](StatementReference.md) |  | [optional] 
**description** | **String** |  | [optional] 
**transactionInformation** | **[String]** |  | [optional] 
**addressDetails** | [**AddressDetails**](AddressDetails.md) |  | [optional] 
**isoBankTransactionCode** | [**IsoBankTransactionCode**](IsoBankTransactionCode.md) |  | [optional] 
**proprietaryBankTransactionCode** | [**ProprietaryBankTransactionCode**](ProprietaryBankTransactionCode.md) |  | [optional] 
**balance** | [**TransactionBalance**](TransactionBalance.md) |  | [optional] 
**payeeDetails** | [**Payee**](Payee.md) |  | [optional] 
**payerDetails** | [**Payer**](Payer.md) |  | [optional] 
**merchant** | [**Merchant**](Merchant.md) |  | [optional] 
**enrichment** | [**Enrichment**](Enrichment.md) |  | [optional] 
**supplementaryData** | **Object** |  | [optional] 
**transactionMutability** | **String** | __Optional__. Specifies the Mutability of the Transaction record.&lt;ul&gt;&lt;li&gt;A transaction with a &#x60;Status&#x60; of &#x60;Pending&#x60; is mutable.&lt;/li&gt;&lt;li&gt;A transaction with a &#x60;Status&#x60; of &#x60;Booked&#x60; where the &#x60;TransactionMutability&#x60; flag is not specified is not guaranteed to be immutable (although in most instances it will be).&lt;/li&gt;&lt;li&gt;A transaction with a &#x60;Status&#x60; of &#x60;Booked&#x60; with the &#x60;TransactionMutability&#x60; flag set to &#x60;Immutable&#x60; is immutable.&lt;/li&gt;&lt;li&gt;A transaction with a &#x60;Status&#x60; of &#x60;Booked&#x60; with the &#x60;TransactionMutability&#x60; flag set to &#x60;Mutable&#x60; is mutable.&lt;/li&gt;&lt;/ul&gt; | [optional] 


