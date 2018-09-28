# YapilyApi.Institution

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**fullName** | **String** |  | [optional] 
**countries** | [**[Country]**](Country.md) |  | [optional] 
**environmentType** | **String** |  | [optional] 
**credentialsType** | **String** |  | [optional] 
**media** | [**[Media]**](Media.md) |  | [optional] 
**features** | **[String]** |  | [optional] 


<a name="EnvironmentTypeEnum"></a>
## Enum: EnvironmentTypeEnum


* `SANDBOX` (value: `"SANDBOX"`)

* `MOCK` (value: `"MOCK"`)

* `LIVE` (value: `"LIVE"`)




<a name="CredentialsTypeEnum"></a>
## Enum: CredentialsTypeEnum


* `OAUTH1` (value: `"OAUTH1"`)

* `OAUTH2` (value: `"OAUTH2"`)

* `OAUTH2_NOSECRET` (value: `"OAUTH2_NOSECRET"`)

* `OPEN_BANKING` (value: `"OPEN_BANKING"`)

* `OPEN_BANKING_SANDBOX` (value: `"OPEN_BANKING_SANDBOX"`)

* `OPEN_BANKING_IBM` (value: `"OPEN_BANKING_IBM"`)

* `OPEN_BANKING_KEY_SECRET_SANDBOX` (value: `"OPEN_BANKING_KEY_SECRET_SANDBOX"`)

* `API_KEY` (value: `"API_KEY"`)




<a name="[FeaturesEnum]"></a>
## Enum: [FeaturesEnum]


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




