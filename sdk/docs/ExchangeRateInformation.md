# YapilyApi.ExchangeRateInformation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unitCurrency** | **String** | __Mandatory__. The currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP &#x3D; xxxCUR, the unit currency is &#x60;GBP&#x60;. | 
**rate** | **Number** | __Optional__. The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency. | [optional] 
**rateType** | [**RateTypeEnum**](RateTypeEnum.md) |  | 
**foreignExchangeContractReference** | **String** | __Optional__. The unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent. | [optional] 


