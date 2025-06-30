# YapilyApi.TransactionStream

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the Transaction Stream. | [optional] 
**transactions** | [**[EnrichedTransaction]**](EnrichedTransaction.md) | A list of transaction details, identified by Yapily data services. | [optional] 
**transactionSchedule** | [**TransactionSchedule**](TransactionSchedule.md) |  | [optional] 
**scheduleConsistencyScore** | **Number** | The consistency of the transaction.  This is a number between 0 and 1 with 1 being the most consistent schedule. | [optional] 
**nextExpectedTransactionDate** | **Date** | When is the transaction expected to occur next. | [optional] 
**earliestTransactionDate** | **Date** | When is the first recorded transaction date | [optional] 
**mostRecentTransactionDate** | **Date** | When is the most recent transaction date | [optional] 
**amountConsistencyScore** | **Number** | The consistency of the amount of the transaction.  This is a number between 0 and 1 with 1 being the most consistent amount. | [optional] 
**averageAmount** | **Number** | The average amount of the transaction stream | [optional] 


