# YapilyApi.BulkUserDeleteDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**invalidApplicationUserIds** | **[String]** |  | [optional] 
**invalidUserUuids** | **[String]** |  | [optional] 
**status** | **String** |  | [optional] 
**startedAt** | **Date** |  | [optional] 
**users** | [**[UserDeleteResponse]**](UserDeleteResponse.md) |  | [optional] 
**links** | **{String: String}** |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `IN_PROGRESS` (value: `"IN_PROGRESS"`)

* `COMPLETED` (value: `"COMPLETED"`)

* `FAILED` (value: `"FAILED"`)




