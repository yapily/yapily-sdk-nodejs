# YapilyApi.VirtualAccountsApi

All URIs are relative to *https://api.yapily.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVirtualAccount**](VirtualAccountsApi.md#createVirtualAccount) | **POST** /virtual-accounts/accounts | Create Account
[**createVirtualAccountBeneficiary**](VirtualAccountsApi.md#createVirtualAccountBeneficiary) | **POST** /virtual-accounts/beneficiaries | Create Beneficiary
[**createVirtualAccountClient**](VirtualAccountsApi.md#createVirtualAccountClient) | **POST** /virtual-accounts/clients | Create Virtual Account Client
[**createVirtualAccountPayOut**](VirtualAccountsApi.md#createVirtualAccountPayOut) | **POST** /virtual-accounts/payments/pay-outs | Create Pay Out
[**createVirtualAccountTransfer**](VirtualAccountsApi.md#createVirtualAccountTransfer) | **POST** /virtual-accounts/payments/transfers | Create Virtual Account Transfer
[**getPayInDetails**](VirtualAccountsApi.md#getPayInDetails) | **GET** /virtual-accounts/payments/{paymentId}/pay-in-details | Get Pay-In Details
[**getPaymentsById**](VirtualAccountsApi.md#getPaymentsById) | **GET** /virtual-accounts/payments/{id} | Get Payment
[**getVirtualAccountBeneficiaries**](VirtualAccountsApi.md#getVirtualAccountBeneficiaries) | **GET** /virtual-accounts/beneficiaries | Get List Of Beneficiaries
[**getVirtualAccountBeneficiary**](VirtualAccountsApi.md#getVirtualAccountBeneficiary) | **GET** /virtual-accounts/beneficiaries/{beneficiaryId} | Get Beneficiary
[**getVirtualAccountById**](VirtualAccountsApi.md#getVirtualAccountById) | **GET** /virtual-accounts/accounts/{accountId} | Get Account
[**getVirtualAccountClients**](VirtualAccountsApi.md#getVirtualAccountClients) | **GET** /virtual-accounts/clients | Get List of Virtual Account Clients
[**getVirtualAccountPayments**](VirtualAccountsApi.md#getVirtualAccountPayments) | **GET** /virtual-accounts/payments | Get Payments
[**getVirtualAccounts**](VirtualAccountsApi.md#getVirtualAccounts) | **GET** /virtual-accounts/accounts | Get Accounts
[**updateVirtualAccountById**](VirtualAccountsApi.md#updateVirtualAccountById) | **PATCH** /virtual-accounts/accounts/{accountId} | Update Account



## createVirtualAccount

> ApiResponseOfVirtualAccount createVirtualAccount(clientId, virtualAccountRequest)

Create Account

Create a new virtual account

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.VirtualAccountsApi();
let clientId = 5a7294ab-6b7d-4681-835a-f9b9775c75db; // String | __Mandatory__. The customer or sub-customer id for which the request will be done
let virtualAccountRequest = {"nickname":"MyAccount123","currency":"GBP"}; // VirtualAccountRequest | 
apiInstance.createVirtualAccount(clientId, virtualAccountRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| __Mandatory__. The customer or sub-customer id for which the request will be done | 
 **virtualAccountRequest** | [**VirtualAccountRequest**](VirtualAccountRequest.md)|  | 

### Return type

[**ApiResponseOfVirtualAccount**](ApiResponseOfVirtualAccount.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json


## createVirtualAccountBeneficiary

> ApiResponseOfVirtualAccountBeneficiary createVirtualAccountBeneficiary(clientId, virtualAccountBeneficiaryRequest)

Create Beneficiary

Create a new beneficiary (individual or business account) to which a Pay Out can be made. The beneficiary can be used from any virtual account that is held

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.VirtualAccountsApi();
let clientId = 5a7294ab-6b7d-4681-835a-f9b9775c75db; // String | __Mandatory__. The customer or sub-customer id for which the request will be done
let virtualAccountBeneficiaryRequest = {"nickname":"MyBeneficiary123","paymentSchemes":["FASTER_PAYMENTS","CHAPS"],"type":"INDIVIDUAL","name":"Mr Jack Williams","birthDate":"1999-10-04","address":{"addressLine":"12 New Street","townName":"London","postCode":"NE15 PLZ","country":"GB"},"account":{"currency":"GBP","bankName":"Lloyds Bank","bankAddress":"London, WE12 ABC","bankCountry":"GB","accountIdentifications":[{"type":"SORT_CODE","identification":"401016"},{"type":"ACCOUNT_NUMBER","identification":"71518920"}]}}; // VirtualAccountBeneficiaryRequest | 
apiInstance.createVirtualAccountBeneficiary(clientId, virtualAccountBeneficiaryRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| __Mandatory__. The customer or sub-customer id for which the request will be done | 
 **virtualAccountBeneficiaryRequest** | [**VirtualAccountBeneficiaryRequest**](VirtualAccountBeneficiaryRequest.md)|  | 

### Return type

[**ApiResponseOfVirtualAccountBeneficiary**](ApiResponseOfVirtualAccountBeneficiary.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json


## createVirtualAccountClient

> ApiResponseOfVirtualAccountClient createVirtualAccountClient(clientId, virtualAccountClientRequest)

Create Virtual Account Client

Create a new virtual account client (individual or business client). Available for clients who have direct onboarding permissions only. Please contact your CSM to enquire about access

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.VirtualAccountsApi();
let clientId = 5a7294ab-6b7d-4681-835a-f9b9775c75db; // String | __Mandatory__. This must be your master / parent client-id (and not one associated with one of your clients)
let virtualAccountClientRequest = {"type":"BUSINESS","business":{"name":"Payments ltd company","type":"LIMITED_LIABILITY","registrationNumber":"1234567","contactName":"James Edward Rhodes","email":"james.rhodes@example.com","phone":"447006783009","registeredAddress":{"addressLine1":"123 Queens Street","addressLine2":"Unit 13","townName":"York","postCode":"12345","country":"GB"},"tradingAddress":{"addressLine1":"123 Queens Street","addressLine2":"Unit 13","townName":"York","postCode":"12345","country":"GB"}}}; // VirtualAccountClientRequest | 
apiInstance.createVirtualAccountClient(clientId, virtualAccountClientRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| __Mandatory__. This must be your master / parent client-id (and not one associated with one of your clients) | 
 **virtualAccountClientRequest** | [**VirtualAccountClientRequest**](VirtualAccountClientRequest.md)|  | 

### Return type

[**ApiResponseOfVirtualAccountClient**](ApiResponseOfVirtualAccountClient.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json


## createVirtualAccountPayOut

> ApiResponseOfVirtualAccountPayment createVirtualAccountPayOut(idempotencyKey, clientId, virtualAccountPayOutRequest)

Create Pay Out

Initiate a payment from a specified virtual account to a previously added beneficiary using any of the schemes that it supports &lt;br&gt; When subscribed to virtualAccount.payOut.status notifications, further updates on payment processing status will be develivered asynchronously 

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.VirtualAccountsApi();
let idempotencyKey = a346fe67-1d81-4ccd-8409-bf9d6c07980f; // String | Uniquely identifies a request, such that requests made with a same value are considered retries <br> We recommend that a v4 UUID is supplied 
let clientId = 5a7294ab-6b7d-4681-835a-f9b9775c75db; // String | __Mandatory__. The customer or sub-customer id for which the request will be done
let virtualAccountPayOutRequest = {"accountId":"eb2ad083-a111-4143-8756-a3a3cef4031c","amount":{"amount":10.5,"currency":"GBP"},"reference":"Invoice 1267765","beneficiaryId":"sd6ad034-a111-4143-8756-a3a3cef4045v","paymentScheme":"FASTER_PAYMENTS","paymentDate":"2022-08-28"}; // VirtualAccountPayOutRequest | 
apiInstance.createVirtualAccountPayOut(idempotencyKey, clientId, virtualAccountPayOutRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idempotencyKey** | **String**| Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied  | 
 **clientId** | **String**| __Mandatory__. The customer or sub-customer id for which the request will be done | 
 **virtualAccountPayOutRequest** | [**VirtualAccountPayOutRequest**](VirtualAccountPayOutRequest.md)|  | 

### Return type

[**ApiResponseOfVirtualAccountPayment**](ApiResponseOfVirtualAccountPayment.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json


## createVirtualAccountTransfer

> ApiResponseOfVirtualAccountPayment createVirtualAccountTransfer(idempotencyKey, clientId, virtualAccountTransferRequest)

Create Virtual Account Transfer

Create a transfer between two virtual accounts

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.VirtualAccountsApi();
let idempotencyKey = a346fe67-1d81-4ccd-8409-bf9d6c07980f; // String | Uniquely identifies a request, such that requests made with a same value are considered retries <br> We recommend that a v4 UUID is supplied 
let clientId = 5a7294ab-6b7d-4681-835a-f9b9775c75db; // String | __Mandatory__. The customer or sub-customer id for which the request will be done
let virtualAccountTransferRequest = {"amount":{"amount":10.5,"currency":"GBP"},"source":{"accountId":"a346fe67-1d81-4ccd-8409-bf9d6c07980f"},"destination":{"accountId":"e3465e67-1d81-4ccd-8409-tf9d6c07980r"},"reference":"Ref 86543"}; // VirtualAccountTransferRequest | 
apiInstance.createVirtualAccountTransfer(idempotencyKey, clientId, virtualAccountTransferRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idempotencyKey** | **String**| Uniquely identifies a request, such that requests made with a same value are considered retries &lt;br&gt; We recommend that a v4 UUID is supplied  | 
 **clientId** | **String**| __Mandatory__. The customer or sub-customer id for which the request will be done | 
 **virtualAccountTransferRequest** | [**VirtualAccountTransferRequest**](VirtualAccountTransferRequest.md)|  | 

### Return type

[**ApiResponseOfVirtualAccountPayment**](ApiResponseOfVirtualAccountPayment.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json


## getPayInDetails

> ApiResponseOfVirtualAccountPayInDetails getPayInDetails(paymentId)

Get Pay-In Details

Get the details of a pay-in transaction

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.VirtualAccountsApi();
let paymentId = 8b66abb5-5412-4454-aa7b-4e693ada6321; // String | Uniquely identifies a transaction
apiInstance.getPayInDetails(paymentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentId** | **String**| Uniquely identifies a transaction | 

### Return type

[**ApiResponseOfVirtualAccountPayInDetails**](ApiResponseOfVirtualAccountPayInDetails.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPaymentsById

> ApiResponseOfVirtualAccountPayment getPaymentsById(id, clientId)

Get Payment

Get the details of a specific payment using its Id

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.VirtualAccountsApi();
let id = "id_example"; // String | __Mandatory__. The id of the payment
let clientId = 5a7294ab-6b7d-4681-835a-f9b9775c75db; // String | __Mandatory__. The customer or sub-customer id for which the request will be done
apiInstance.getPaymentsById(id, clientId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| __Mandatory__. The id of the payment | 
 **clientId** | **String**| __Mandatory__. The customer or sub-customer id for which the request will be done | 

### Return type

[**ApiResponseOfVirtualAccountPayment**](ApiResponseOfVirtualAccountPayment.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVirtualAccountBeneficiaries

> ApiListResponseOfVirtualAccountBeneficiary getVirtualAccountBeneficiaries(clientId, opts)

Get List Of Beneficiaries

Gets the list of beneficiaries (individual or business account) to which a Pay Out can be made.

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.VirtualAccountsApi();
let clientId = 5a7294ab-6b7d-4681-835a-f9b9775c75db; // String | __Mandatory__. The customer or sub-customer id for which the request will be done
let opts = {
  'cursor': "cursor_example" // String | __Optional__. Data required to provide pagination
};
apiInstance.getVirtualAccountBeneficiaries(clientId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| __Mandatory__. The customer or sub-customer id for which the request will be done | 
 **cursor** | **String**| __Optional__. Data required to provide pagination | [optional] 

### Return type

[**ApiListResponseOfVirtualAccountBeneficiary**](ApiListResponseOfVirtualAccountBeneficiary.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVirtualAccountBeneficiary

> ApiResponseOfVirtualAccountBeneficiary getVirtualAccountBeneficiary(beneficiaryId, clientId)

Get Beneficiary

Get the details of a specific beneficiary (individual or business account) to which a Pay Out can be made from its id.

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.VirtualAccountsApi();
let beneficiaryId = "beneficiaryId_example"; // String | __Mandatory__. The Id of the requested beneficiary.
let clientId = 5a7294ab-6b7d-4681-835a-f9b9775c75db; // String | __Mandatory__. The customer or sub-customer id for which the request will be done
apiInstance.getVirtualAccountBeneficiary(beneficiaryId, clientId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **beneficiaryId** | **String**| __Mandatory__. The Id of the requested beneficiary. | 
 **clientId** | **String**| __Mandatory__. The customer or sub-customer id for which the request will be done | 

### Return type

[**ApiResponseOfVirtualAccountBeneficiary**](ApiResponseOfVirtualAccountBeneficiary.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVirtualAccountById

> ApiResponseOfVirtualAccount getVirtualAccountById(accountId, clientId)

Get Account

Get the details of a specific account using its Id

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.VirtualAccountsApi();
let accountId = "accountId_example"; // String | __Mandatory__. The Id of the account.
let clientId = 5a7294ab-6b7d-4681-835a-f9b9775c75db; // String | __Mandatory__. The customer or sub-customer id for which the request will be done
apiInstance.getVirtualAccountById(accountId, clientId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| __Mandatory__. The Id of the account. | 
 **clientId** | **String**| __Mandatory__. The customer or sub-customer id for which the request will be done | 

### Return type

[**ApiResponseOfVirtualAccount**](ApiResponseOfVirtualAccount.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVirtualAccountClients

> ApiListResponseOfVirtualAccountClient getVirtualAccountClients(clientId, opts)

Get List of Virtual Account Clients

Get Virtual Account Clients (individual or business client).

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.VirtualAccountsApi();
let clientId = 5a7294ab-6b7d-4681-835a-f9b9775c75db; // String | __Mandatory__. This must be your master / parent client-id (and not one associated with one of your clients)
let opts = {
  'type': BUSINESS, // String | __Optional__.  Filter clients based on client type. One of BUSINESS or INDIVIDUAL
  'status': ACTIVE, // String | __Optional__.  Filter clients based on client status. One of ACTIVE, PENDING or SUSPENDED
  'cursor': "cursor_example" // String | __Optional__. Data required to provide pagination
};
apiInstance.getVirtualAccountClients(clientId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| __Mandatory__. This must be your master / parent client-id (and not one associated with one of your clients) | 
 **type** | **String**| __Optional__.  Filter clients based on client type. One of BUSINESS or INDIVIDUAL | [optional] 
 **status** | **String**| __Optional__.  Filter clients based on client status. One of ACTIVE, PENDING or SUSPENDED | [optional] 
 **cursor** | **String**| __Optional__. Data required to provide pagination | [optional] 

### Return type

[**ApiListResponseOfVirtualAccountClient**](ApiListResponseOfVirtualAccountClient.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVirtualAccountPayments

> ApiListResponseOfVirtualAccountPayment getVirtualAccountPayments(clientId, opts)

Get Payments

Retrieve a list of virtual account payments

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.VirtualAccountsApi();
let clientId = 5a7294ab-6b7d-4681-835a-f9b9775c75db; // String | __Mandatory__. The customer or sub-customer id for which the request will be done
let opts = {
  'accountId': eb2ad083-a111-4143-8756-a3a3cef4031c, // String | __Optional__. Filter payments based on accountId
  'createdDateTimeFrom': 2022-04-24T00:30:19.951Z, // Date | __Optional__. Filter payments based on the createdDateTime
  'createdDateTimeTo': 2022-04-24T00:30:19.951Z, // Date | __Optional__. Filter payments based on the createdDateTime
  'status': ["INITIATED","COMPLETED"], // [String] | __Optional__. Filter payments based on the payment status. One of INITIATED, PROCESSING, COMPLETED, FAILED
  'type': ["PAY_IN","PAY_OUT"], // [String] | __Optional__. Filter payments based on the payment type. One of PAY_IN, PAY_OUT, RETURN_IN, RETURN_OUT
  'cursor': "cursor_example" // String | __Optional__. Data required to provide pagination
};
apiInstance.getVirtualAccountPayments(clientId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| __Mandatory__. The customer or sub-customer id for which the request will be done | 
 **accountId** | **String**| __Optional__. Filter payments based on accountId | [optional] 
 **createdDateTimeFrom** | **Date**| __Optional__. Filter payments based on the createdDateTime | [optional] 
 **createdDateTimeTo** | **Date**| __Optional__. Filter payments based on the createdDateTime | [optional] 
 **status** | [**[String]**](String.md)| __Optional__. Filter payments based on the payment status. One of INITIATED, PROCESSING, COMPLETED, FAILED | [optional] 
 **type** | [**[String]**](String.md)| __Optional__. Filter payments based on the payment type. One of PAY_IN, PAY_OUT, RETURN_IN, RETURN_OUT | [optional] 
 **cursor** | **String**| __Optional__. Data required to provide pagination | [optional] 

### Return type

[**ApiListResponseOfVirtualAccountPayment**](ApiListResponseOfVirtualAccountPayment.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVirtualAccounts

> ApiListResponseOfVirtualAccount getVirtualAccounts(clientId, opts)

Get Accounts

Retrieve a list of all virtual accounts held

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.VirtualAccountsApi();
let clientId = 5a7294ab-6b7d-4681-835a-f9b9775c75db; // String | __Mandatory__. The customer or sub-customer id for which the request will be done
let opts = {
  'nickname': "nickname_example", // String | __Optional__. Filter accounts based on reference provided in order to help with identification of the account
  'currency': "currency_example", // String | __Optional__. Filter accounts based on three-letter ISO 4217 currency code
  'status': "status_example", // String | __Optional__. Filter accounts based on their current state. One of PENDING, ACTIVE, FAILED, SUSPENDED or CLOSED
  'cursor': "cursor_example" // String | __Optional__. Data required to provide pagination
};
apiInstance.getVirtualAccounts(clientId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| __Mandatory__. The customer or sub-customer id for which the request will be done | 
 **nickname** | **String**| __Optional__. Filter accounts based on reference provided in order to help with identification of the account | [optional] 
 **currency** | **String**| __Optional__. Filter accounts based on three-letter ISO 4217 currency code | [optional] 
 **status** | **String**| __Optional__. Filter accounts based on their current state. One of PENDING, ACTIVE, FAILED, SUSPENDED or CLOSED | [optional] 
 **cursor** | **String**| __Optional__. Data required to provide pagination | [optional] 

### Return type

[**ApiListResponseOfVirtualAccount**](ApiListResponseOfVirtualAccount.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateVirtualAccountById

> ApiResponseOfVirtualAccount updateVirtualAccountById(accountId, clientId, updateVirtualAccountRequest)

Update Account

Update the details of a specific account using its Id

### Example

```javascript
import YapilyApi from 'yapily-api';
let defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new YapilyApi.VirtualAccountsApi();
let accountId = "accountId_example"; // String | __Mandatory__. The Id of the account.
let clientId = 5a7294ab-6b7d-4681-835a-f9b9775c75db; // String | __Mandatory__. The customer or sub-customer id for which the request will be done
let updateVirtualAccountRequest = {"nickname":"MyAccount456","status":"CLOSED"}; // UpdateVirtualAccountRequest | 
apiInstance.updateVirtualAccountById(accountId, clientId, updateVirtualAccountRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| __Mandatory__. The Id of the account. | 
 **clientId** | **String**| __Mandatory__. The customer or sub-customer id for which the request will be done | 
 **updateVirtualAccountRequest** | [**UpdateVirtualAccountRequest**](UpdateVirtualAccountRequest.md)|  | 

### Return type

[**ApiResponseOfVirtualAccount**](ApiResponseOfVirtualAccount.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json

