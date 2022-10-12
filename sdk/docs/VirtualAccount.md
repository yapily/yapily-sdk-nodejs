# YapilyApi.VirtualAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique id of the account | [optional] 
**createdDateTime** | **Date** | Date and time that the account was created | [optional] 
**status** | **String** | The current state of the Account &lt;br&gt; PENDING - Creation of the account is in progress &lt;br&gt; ACTIVE - The account is active and in use &lt;br&gt; FAILED - An issue occured during account creation &lt;br&gt; SUSPENDED - The account has been temporarily suspended by the account provider. It cannot currently be used &lt;br&gt; CLOSED - The account has been permanently closed and cannot be used | [optional] 
**nickname** | **String** | Reference that can be provided in order to help with identification of the account | [optional] 
**currency** | **String** | Three-letter ISO 4217 currency code | [optional] 
**balances** | [**[VirtualAccountBalance]**](VirtualAccountBalance.md) |  | [optional] 
**bankAccount** | [**VirtualAccountBankAccount**](VirtualAccountBankAccount.md) |  | [optional] 


