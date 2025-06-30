# YapilyApi.PublicFilterValues

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationIds** | **[String]** | Sub-application ids to filter the results for. If provided, the results will only include sub-applications with the given ids. Non-existent ids will be ignored. | [optional] 
**offset** | **Number** | The number of results to skip. | [optional] [default to 0]
**limit** | **Number** | The maximum number of results to return. | [optional] [default to 1000]
**sort** | **String** | The field to sort the results by.&lt;br&gt;&lt;br&gt;Possible values:&lt;ul&gt;&lt;li&gt;&#x60;last_updated&#x60; (ascending)&lt;/li&gt;&lt;li&gt;&#x60;-last_updated&#x60; (descending)&lt;/li&gt;&lt;li&gt;&#x60;name&#x60; (ascending)&lt;/li&gt;&lt;li&gt;&#x60;-name&#x60; (descending)&lt;/li&gt;&lt;li&gt;&#x60;uuid&#x60; (ascending)&lt;/li&gt;&lt;li&gt;&#x60;-uuid&#x60; (descending)&lt;/li&gt;&lt;/ul&gt; | [optional] [default to &#39;name&#39;]


