# YapilyApi.Enrichment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categorisation** | [**Categorisation**](Categorisation.md) |  | [optional] 
**transactionHash** | [**TransactionHash**](TransactionHash.md) |  | [optional] 
**cleansedDescription** | **String** | Cleaned version of the &#x60;Transaction Description&#x60; that removes miscellaneous, generic and unhelpful text. | [optional] 
**merchant** | [**EnrichmentMerchant**](EnrichmentMerchant.md) |  | [optional] 
**location** | **String** | The location of where the transaction took place. | [optional] 
**paymentProcessor** | **String** | A payment provider that manages (credit/debit) transactions between the &#x60;Institution&#x60; and the merchant. | [optional] 
**correctedDate** | **Date** | The likely date and time on which the transaction took place. This is distinct from &#x60;Booking Date Time&#x60; which usually refers to the post-clearing value. | [optional] 


