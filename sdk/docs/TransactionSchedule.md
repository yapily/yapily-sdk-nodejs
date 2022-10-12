# YapilyApi.TransactionSchedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frequency** | **String** | How often the transaction happens.  Can be &#39;Monthly&#39;, &#39;Twice monthly&#39;, &#39;Every two weeks&#39;, &#39;Every four weeks&#39;, &#39;Daily&#39;, &#39;Weekly&#39;, &#39;Every weekday&#39;, &#39;Twice daily&#39;, &#39;Twice every weekday&#39; | [optional] 
**detailedFrequency** | **String** | When in the cycle the transaction occurs.  Can be &#39;Daily&#39;, &#39;Twice daily&#39;, &#39;Twice every weekday&#39;, &#39;Every weekday&#39;, &#39;Weekly on day n&#39;, &#39;Every two weeks on day n&#39;, &#39;Monthly on working day before day n of month&#39;, &#39;Monthly on last working day of month&#39;, &#39;Twice a month on 15th and last working day of month&#39;, &#39;Every four weeks on day n&#39; | [optional] 
**detailedFrequencyParameter** | **Number** | The n in detailedFrequency where there is one - for week-based frequencies, an integer from 0 to 6 where 0 is Monday or for month-based frequencies, an integer from 0 to 27 where 0 is the first day of the month | [optional] 


