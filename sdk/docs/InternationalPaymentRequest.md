# YapilyApi.InternationalPaymentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currencyOfTransfer** | **String** | __Mandatory__. The 3-letter currency code for the currency of the payment to be transferred which can differ from the currency of the payer&#39;s account. | 
**exchangeRateInformation** | [**ExchangeRateInformation**](ExchangeRateInformation.md) |  | [optional] 
**purpose** | **String** | __Optional__. Used to indicate the external purpose as a [ISO20022 purpose code](https://www.rba.hr/documents/20182/183267/External+purpose+codes+list/8a28f888-1f83-5e29-d6ed-fce05f428689?version&#x3D;1.1) value. | [optional] 
**priority** | [**PriorityCodeEnum**](PriorityCodeEnum.md) |  | [optional] 
**chargeBearer** | [**ChargeBearerType**](ChargeBearerType.md) |  | [optional] 


