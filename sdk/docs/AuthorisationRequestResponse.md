# YapilyApi.AuthorisationRequestResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**userUuid** | **String** |  | [optional] 
**institutionId** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**createdAt** | **Date** |  | [optional] 
**expiresAt** | **Date** |  | [optional] 
**timeToExpireInMillis** | **Number** |  | [optional] 
**featureScope** | **[String]** |  | [optional] 
**authorisationUrl** | **String** |  | [optional] 
**consentToken** | **String** |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `AWAITING_AUTHORIZATION` (value: `"AWAITING_AUTHORIZATION"`)

* `AUTHORIZED` (value: `"AUTHORIZED"`)

* `REJECTED` (value: `"REJECTED"`)

* `REVOKED` (value: `"REVOKED"`)

* `FAILED` (value: `"FAILED"`)

* `EXPIRED` (value: `"EXPIRED"`)

* `UNKNOWN` (value: `"UNKNOWN"`)




<a name="[FeatureScopeEnum]"></a>
## Enum: [FeatureScopeEnum]


* `INITIATE_ACCOUNT_REQUEST` (value: `"INITIATE_ACCOUNT_REQUEST"`)

* `ACCOUNT_REQUEST_DETAILS` (value: `"ACCOUNT_REQUEST_DETAILS"`)

* `ACCOUNTS` (value: `"ACCOUNTS"`)

* `ACCOUNT` (value: `"ACCOUNT"`)

* `ACCOUNT_TRANSACTIONS` (value: `"ACCOUNT_TRANSACTIONS"`)

* `ACCOUNT_TRANSACTIONS_WITH_MERCHANT` (value: `"ACCOUNT_TRANSACTIONS_WITH_MERCHANT"`)

* `IDENTITY` (value: `"IDENTITY"`)

* `INITIATE_SINGLE_PAYMENT_SORTCODE` (value: `"INITIATE_SINGLE_PAYMENT_SORTCODE"`)

* `EXISTING_PAYMENT_INITIATION_DETAILS` (value: `"EXISTING_PAYMENT_INITIATION_DETAILS"`)

* `CREATE_SINGLE_PAYMENT_SORTCODE` (value: `"CREATE_SINGLE_PAYMENT_SORTCODE"`)

* `EXISTING_PAYMENTS_DETAILS` (value: `"EXISTING_PAYMENTS_DETAILS"`)

* `TRANSFER` (value: `"TRANSFER"`)

* `OPEN_DATA_PERSONAL_CURRENT_ACCOUNTS` (value: `"OPEN_DATA_PERSONAL_CURRENT_ACCOUNTS"`)

* `OPEN_DATA_ATMS` (value: `"OPEN_DATA_ATMS"`)




