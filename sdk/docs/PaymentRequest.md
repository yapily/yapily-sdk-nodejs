# YapilyApi.PaymentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentIdempotencyId** | **String** | __Mandatory__. A unique identifier that you must provide to identify the payment. This can be any alpha-numeric string but is limited to a maximum of 35 characters. | 
**payer** | [**Payer**](Payer.md) |  | [optional] 
**reference** | **String** | __Optional__. The payment reference or description. Limited to a maximum of 18 characters long. | [optional] 
**contextType** | [**PaymentContextType**](PaymentContextType.md) |  | [optional] 
**purposeCode** | **String** | __Optional__. The payment purpose code. &lt;br&gt;&lt;br&gt;Allowed values: INTP, DEPT, BEXP, LICF, SERV, SUPP, TRAD, SUBS, GDSV, ROYA, COMT, CHAR, ECPR, CLPR, INTE, LOAN, LOAR, INPC, INPR, INSC, INSU, LIFI, PPTI, HLRP, HLST, PDEP, IVPT, REBT, REFU, CDBL, CPKC, EDUC, FEES, GAMB, LOTT, GIFT, INSM, REOD, GOVT, TCSC, BLDM, RENT, DIVD, INVS, SAVG, HLTI, DNTS, LTCF, MDCS, VIEW, BECH, BENE, SSBE, PEFC, PENS, ADCS, BONU, COMM, SALA, ESTX, HSTX, INTX, PTXP, RDTX, TAXS, VATX, WHLD, TAXR, CBTV, ELEC, GASB, PHON, UBIL, WTER . &lt;br&gt;&lt;br&gt;See [Payment Purpose code](https://docs.yapily.com/pages/payments/payments-resources/tri-pilot/) to see the definition of each code | [optional] 
**type** | [**PaymentType**](PaymentType.md) |  | 
**payee** | [**Payee**](Payee.md) |  | 
**periodicPayment** | [**PeriodicPaymentRequest**](PeriodicPaymentRequest.md) |  | [optional] 
**internationalPayment** | [**InternationalPaymentRequest**](InternationalPaymentRequest.md) |  | [optional] 
**amount** | [**Amount**](Amount.md) |  | 
**paymentDateTime** | **Date** | __Conditional__. Used to specify the date of the payment when the payment type is one of the following:&lt;ul&gt;    &lt;li&gt;&lt;code&gt;DOMESTIC_SCHEDULED_PAYMENT&lt;/code&gt;&lt;/li&gt;    &lt;li&gt;&lt;code&gt;DOMESTIC_PERIODIC_PAYMENT&lt;/code&gt;&lt;/li&gt;    &lt;li&gt;&lt;code&gt;INTERNATIONAL_SCHEDULED_PAYMENT&lt;/code&gt;&lt;/li&gt;    &lt;li&gt;&lt;code&gt;INTERNATIONAL_PERIODIC_PAYMENT&lt;/code&gt;&lt;/li&gt;&lt;/ul&gt; | [optional] 
**readRefundAccount** | **Boolean** | __Optional__. Used to request the payer details in the payment response when the &#x60;Institution&#x60; provides the feature &#x60;READ_DOMESTIC_SINGLE_REFUND&#x60;.&lt;br&gt;&lt;br&gt;See [Reverse Payments](https://docs.yapily.com/pages/knowledge/open-banking/reverse_payments/) for more information. | [optional] 


