# YapilyApi.InternationalPaymentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currencyOfTransfer** | **String** | __Mandatory__. The currency to be transferred to the payee. This may differ from the currency the payment is denoted in and the currency of the payer&#39;s account. Specified as a 3-letter code (ISO 4217). | 
**exchangeRateInformation** | [**ExchangeRateInformation**](ExchangeRateInformation.md) |  | [optional] 
**purpose** | **String** | __Optional__. Used to indicate the external purpose as a [ISO20022 purpose code](https://www.rba.hr/documents/20182/183267/External+purpose+codes+list/8a28f888-1f83-5e29-d6ed-fce05f428689?version&#x3D;1.1) value. | [optional] 
**priority** | [**PriorityCodeEnum**](PriorityCodeEnum.md) |  | [optional] 
**chargeBearer** | [**ChargeBearerType**](ChargeBearerType.md) |  | [optional] 


