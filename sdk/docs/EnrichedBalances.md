# YapilyApi.EnrichedBalances

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountIds** | **[String]** | A list of Account Ids used to generate Balance Prediction Profile. | [optional] 
**institutions** | **[String]** | A list of Institution Ids associated with the accounts used to generate Balance Prediction Profile. | [optional] 
**historic** | [**[EnrichedHistoricBalance]**](EnrichedHistoricBalance.md) | A list of historic balances. Each balance in the list is an aggregation (sum) of the reported balance for each account within the profile at a point in time. | [optional] 
**predicted** | [**[EnrichedPredictedBalance]**](EnrichedPredictedBalance.md) | A list of predicted balances. Each balance in the list is a projected balance of the profile at a future point in time. | [optional] 


