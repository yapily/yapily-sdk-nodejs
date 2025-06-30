# YapilyApi.Schema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** |  | [optional] 
**maximum** | **Number** |  | [optional] 
**exclusiveMaximum** | **Number** |  | [optional] 
**minimum** | **Number** |  | [optional] 
**exclusiveMinimum** | **Number** |  | [optional] 
**pattern** | **String** |  | [optional] 
**maxItems** | **Number** |  | [optional] 
**minItems** | **Number** |  | [optional] 
**uniqueItems** | **Boolean** |  | [optional] 
**required** | **[String]** |  | [optional] 
**_enum** | **[Object]** |  | [optional] 
**type** | [**SchemaType**](SchemaType.md) |  | [optional] 
**contains** | [**Schema**](Schema.md) |  | [optional] 
**not** | [**Schema**](Schema.md) |  | [optional] 
**_if** | [**Schema**](Schema.md) |  | [optional] 
**then** | [**Schema**](Schema.md) |  | [optional] 
**_else** | [**Schema**](Schema.md) |  | [optional] 
**allOf** | [**[Schema]**](Schema.md) |  | [optional] 
**oneOf** | [**[Schema]**](Schema.md) |  | [optional] 
**anyOf** | [**[Schema]**](Schema.md) |  | [optional] 
**items** | [**Schema**](Schema.md) |  | [optional] 
**properties** | [**{String: Schema}**](Schema.md) |  | [optional] 
**description** | **String** |  | [optional] 
**format** | **String** |  | [optional] 
**_default** | **Object** |  | [optional] 
**example** | **Object** |  | [optional] 
**dependentRequired** | **{String: [String]}** | dependentRequired keyword is used to satisfy dependency between fields | [optional] 
**defs** | [**{String: Schema}**](Schema.md) |  | [optional] 
**ref** | **String** |  | [optional] 
**xYapilyAnnotations** | [**SchemaXYapilyAnnotations**](SchemaXYapilyAnnotations.md) |  | [optional] 
**xYapilyValidations** | [**SchemaXYapilyValidations**](SchemaXYapilyValidations.md) |  | [optional] 


