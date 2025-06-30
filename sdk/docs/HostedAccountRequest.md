# YapilyApi.HostedAccountRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionFrom** | **Date** | __Optional__. Specifies the earliest date of the transaction records to be returned.&lt;br&gt;&lt;br&gt; You must supply this field to retrieve transactions older than 90 days for banks accessed via the the [CBI Globe Gateway](https://docs.yapily.com/pages/data/financial-data-resources/data-restrictions/#cbi-globe-gateway). | [optional] 
**transactionTo** | **Date** | __Optional__. Specifies the latest date of the transaction records to be returned. | [optional] 
**expiresAt** | **Date** | __Optional__. Used to set a hard date for when the user&#39;s associated &#x60;Consent&#x60; will expire.&lt;br&gt;&lt;br&gt;**Note**: If this supported by the bank, specifying this is property is opting out of having a long-lived consent that can be perpetually re-authorised by the user. This will add an &#x60;expiresAt&#x60; field on the &#x60;Consent&#x60; object which will render it unusable after this date.&lt;br&gt;&lt;br&gt;**Note**: This is not supported by every &#x60;Institution&#x60;. In such case, the request will not fail but the property will be ignored and the created &#x60;Consent&#x60; will not have an expiry date. | [optional] 
**featureScope** | [**[FeatureEnum]**](FeatureEnum.md) | __Optional__. Used to granularly specify the set of features that the user will give their consent for when requesting access to their account information. Depending on the &#x60;Institution&#x60;, this may also populate a consent screen which list these scopes before the user authorises.&lt;br&gt;&lt;br&gt;This endpoint accepts allow all [Financial Data Features](/guides/financial-data/features/#feature-list) that the &#x60;Institution&#x60; supports.To find out which scopes an &#x60;Institution&#x60; supports, check [GET Institution](./#get-institution). | [optional] 


