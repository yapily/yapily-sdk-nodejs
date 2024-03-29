# yapily-api

YapilyApi - JavaScript client for yapily-api
The Yapily API enables connections between your application and users' banks. For more information check out our [documentation](https://docs.yapily.com/).<br><br>In particular, make sure to view our [Getting Started](https://docs.yapily.com/pages/home/getting-started/) steps if this is your first time here.<br><br>While testing the API, our list of [sandbox credentials](https://docs.yapily.com/pages/key-concepts/sandbox-credentials/) maybe useful.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2.13.1
- Package version: 2.13.1
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://docs.yapily.com/pages/resources/support/](https://docs.yapily.com/pages/resources/support/)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install @yapily/yapily-api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your yapily-api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var YapilyApi = require('@yapily/yapily-api');

var defaultClient = YapilyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new YapilyApi.ApplicationApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getApplicationMe(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.yapily.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*YapilyApi.ApplicationApi* | [**getApplicationMe**](docs/ApplicationApi.md#getApplicationMe) | **GET** /me | Get Application Self
*YapilyApi.AuthorisationsApi* | [**createBulkPaymentAuthorisation**](docs/AuthorisationsApi.md#createBulkPaymentAuthorisation) | **POST** /bulk-payment-auth-requests | Create Bulk Payment Authorisation
*YapilyApi.AuthorisationsApi* | [**createEmbeddedBulkPaymentAuthorisation**](docs/AuthorisationsApi.md#createEmbeddedBulkPaymentAuthorisation) | **POST** /embedded-bulk-payment-auth-requests | Create Embedded Bulk Payment Authorisation
*YapilyApi.AuthorisationsApi* | [**createEmbeddedPaymentAuthorisation**](docs/AuthorisationsApi.md#createEmbeddedPaymentAuthorisation) | **POST** /embedded-payment-auth-requests | Create Embedded Payment Authorisation
*YapilyApi.AuthorisationsApi* | [**createPaymentAuthorisation**](docs/AuthorisationsApi.md#createPaymentAuthorisation) | **POST** /payment-auth-requests | Create Payment Authorisation
*YapilyApi.AuthorisationsApi* | [**createPaymentPreAuthorisationRequest**](docs/AuthorisationsApi.md#createPaymentPreAuthorisationRequest) | **POST** /payment-pre-auth-requests | Create Payment Pre-authorisation
*YapilyApi.AuthorisationsApi* | [**createPreAuthorisationRequest**](docs/AuthorisationsApi.md#createPreAuthorisationRequest) | **POST** /pre-auth-requests | Create Pre-authorisation
*YapilyApi.AuthorisationsApi* | [**initiateAccountRequest**](docs/AuthorisationsApi.md#initiateAccountRequest) | **POST** /account-auth-requests | Create Account Authorisation
*YapilyApi.AuthorisationsApi* | [**initiateEmbeddedAccountRequest**](docs/AuthorisationsApi.md#initiateEmbeddedAccountRequest) | **POST** /embedded-account-auth-requests | Create Embedded Account Authorisation
*YapilyApi.AuthorisationsApi* | [**reAuthoriseAccount**](docs/AuthorisationsApi.md#reAuthoriseAccount) | **PATCH** /account-auth-requests | Re-authorise Account Consent
*YapilyApi.AuthorisationsApi* | [**updateEmbeddedAccountRequest**](docs/AuthorisationsApi.md#updateEmbeddedAccountRequest) | **PUT** /embedded-account-auth-requests/{consentId} | Update Embedded Account Authorisation
*YapilyApi.AuthorisationsApi* | [**updateEmbeddedBulkPaymentAuthorisation**](docs/AuthorisationsApi.md#updateEmbeddedBulkPaymentAuthorisation) | **PUT** /embedded-bulk-payment-auth-requests/{consentId} | Update Embedded Bulk Payment Authorisation
*YapilyApi.AuthorisationsApi* | [**updateEmbeddedPaymentAuthorisation**](docs/AuthorisationsApi.md#updateEmbeddedPaymentAuthorisation) | **PUT** /embedded-payment-auth-requests/{consentId} | Update Embedded Payment Authorisation
*YapilyApi.AuthorisationsApi* | [**updatePaymentAuthorisation**](docs/AuthorisationsApi.md#updatePaymentAuthorisation) | **PUT** /payment-auth-requests | Update Payment Pre-authorisation
*YapilyApi.AuthorisationsApi* | [**updatePreAuthoriseAccountConsent**](docs/AuthorisationsApi.md#updatePreAuthoriseAccountConsent) | **PUT** /account-auth-requests | Update Account Pre-authorisation
*YapilyApi.ConsentsApi* | [**callDelete**](docs/ConsentsApi.md#callDelete) | **DELETE** /consents/{consentId} | Delete Consent
*YapilyApi.ConsentsApi* | [**createConsentWithCode**](docs/ConsentsApi.md#createConsentWithCode) | **POST** /consent-auth-code | Exchange OAuth2 Code
*YapilyApi.ConsentsApi* | [**extendConsent**](docs/ConsentsApi.md#extendConsent) | **POST** /consents/{consentId}/extend | Extend Consent
*YapilyApi.ConsentsApi* | [**getConsentById**](docs/ConsentsApi.md#getConsentById) | **GET** /consents/{consentId} | Get Consent
*YapilyApi.ConsentsApi* | [**getConsentBySingleAccessConsent**](docs/ConsentsApi.md#getConsentBySingleAccessConsent) | **POST** /consent-one-time-token | Exchange One Time Token
*YapilyApi.ConsentsApi* | [**getConsents**](docs/ConsentsApi.md#getConsents) | **GET** /consents | Get Consents
*YapilyApi.FinancialDataApi* | [**getAccount**](docs/FinancialDataApi.md#getAccount) | **GET** /accounts/{accountId} | Get Account
*YapilyApi.FinancialDataApi* | [**getAccountBalances**](docs/FinancialDataApi.md#getAccountBalances) | **GET** /accounts/{accountId}/balances | Get Account Balances
*YapilyApi.FinancialDataApi* | [**getAccountDirectDebits**](docs/FinancialDataApi.md#getAccountDirectDebits) | **GET** /accounts/{accountId}/direct-debits | Get Account Direct Debits
*YapilyApi.FinancialDataApi* | [**getAccountPeriodicPayments**](docs/FinancialDataApi.md#getAccountPeriodicPayments) | **GET** /accounts/{accountId}/periodic-payments | Get Account Periodic Payments
*YapilyApi.FinancialDataApi* | [**getAccountScheduledPayments**](docs/FinancialDataApi.md#getAccountScheduledPayments) | **GET** /accounts/{accountId}/scheduled-payments | Get Account Scheduled Payments
*YapilyApi.FinancialDataApi* | [**getAccounts**](docs/FinancialDataApi.md#getAccounts) | **GET** /accounts | Get Accounts
*YapilyApi.FinancialDataApi* | [**getBeneficiaries**](docs/FinancialDataApi.md#getBeneficiaries) | **GET** /accounts/{accountId}/beneficiaries | Get Account Beneficiaries
*YapilyApi.FinancialDataApi* | [**getCategories**](docs/FinancialDataApi.md#getCategories) | **GET** /categories/{country} | Get Categories
*YapilyApi.FinancialDataApi* | [**getIdentity**](docs/FinancialDataApi.md#getIdentity) | **GET** /identity | Get Identity
*YapilyApi.FinancialDataApi* | [**getStatement**](docs/FinancialDataApi.md#getStatement) | **GET** /accounts/{accountId}/statements/{statementId} | Get Account Statement
*YapilyApi.FinancialDataApi* | [**getStatementFile**](docs/FinancialDataApi.md#getStatementFile) | **GET** /accounts/{accountId}/statements/{statementId}/file | Get Account Statement File
*YapilyApi.FinancialDataApi* | [**getStatements**](docs/FinancialDataApi.md#getStatements) | **GET** /accounts/{accountId}/statements | Get Account Statements
*YapilyApi.FinancialDataApi* | [**getTransactions**](docs/FinancialDataApi.md#getTransactions) | **GET** /accounts/{accountId}/transactions | Get Account Transactions
*YapilyApi.FinancialProfileApi* | [**createProfileConsent**](docs/FinancialProfileApi.md#createProfileConsent) | **POST** /users/{userUuid}/profile/consents | Create Profile Consent
*YapilyApi.FinancialProfileApi* | [**deleteProfileConsent**](docs/FinancialProfileApi.md#deleteProfileConsent) | **DELETE** /users/{userUuid}/profile/consents/{profileConsentId} | Delete Profile Consent
*YapilyApi.FinancialProfileApi* | [**getBalancePrediction**](docs/FinancialProfileApi.md#getBalancePrediction) | **GET** /users/{userUuid}/profile/predicted-balances | Get Predicted Balances
*YapilyApi.FinancialProfileApi* | [**getProfileConsent**](docs/FinancialProfileApi.md#getProfileConsent) | **GET** /users/{userUuid}/profile/consents/{profileConsentId} | Get Profile Consent
*YapilyApi.FinancialProfileApi* | [**getUserProfile**](docs/FinancialProfileApi.md#getUserProfile) | **GET** /users/{userUuid}/profile | Get User Profile
*YapilyApi.InstitutionsApi* | [**getFeatureDetails**](docs/InstitutionsApi.md#getFeatureDetails) | **GET** /features | Get Features
*YapilyApi.InstitutionsApi* | [**getInstitution**](docs/InstitutionsApi.md#getInstitution) | **GET** /institutions/{institutionId} | Get Institution
*YapilyApi.InstitutionsApi* | [**getInstitutions**](docs/InstitutionsApi.md#getInstitutions) | **GET** /institutions | Get Institutions
*YapilyApi.NotificationsApi* | [**createEventSubscription**](docs/NotificationsApi.md#createEventSubscription) | **POST** /notifications/event-subscriptions | Create Event Subscription
*YapilyApi.NotificationsApi* | [**deleteEventSubscriptionById**](docs/NotificationsApi.md#deleteEventSubscriptionById) | **DELETE** /notifications/event-subscriptions/{eventTypeId} | Delete Event Subscription
*YapilyApi.NotificationsApi* | [**getEventSubscriptionById**](docs/NotificationsApi.md#getEventSubscriptionById) | **GET** /notifications/event-subscriptions/{eventTypeId} | Get Event Subscription
*YapilyApi.NotificationsApi* | [**getEventSubscriptions**](docs/NotificationsApi.md#getEventSubscriptions) | **GET** /notifications/event-subscriptions | Get Event Subscriptions
*YapilyApi.PaymentsApi* | [**createBulkPayment**](docs/PaymentsApi.md#createBulkPayment) | **POST** /bulk-payments | Create Bulk Payment
*YapilyApi.PaymentsApi* | [**createPayment**](docs/PaymentsApi.md#createPayment) | **POST** /payments | Create Payment
*YapilyApi.PaymentsApi* | [**getPayments**](docs/PaymentsApi.md#getPayments) | **GET** /payments/{paymentId}/details | Get Payment Details
*YapilyApi.UsersApi* | [**addUser**](docs/UsersApi.md#addUser) | **POST** /users | Create User
*YapilyApi.UsersApi* | [**deleteUser**](docs/UsersApi.md#deleteUser) | **DELETE** /users/{userUuid} | Delete User
*YapilyApi.UsersApi* | [**getUser**](docs/UsersApi.md#getUser) | **GET** /users/{userUuid} | Get User
*YapilyApi.UsersApi* | [**getUsers**](docs/UsersApi.md#getUsers) | **GET** /users | Get Users
*YapilyApi.VariableRecurringPaymentsApi* | [**createNonSweepingAuthorisation**](docs/VariableRecurringPaymentsApi.md#createNonSweepingAuthorisation) | **POST** /variable-recurring-payments/non-sweeping/consents | Create Non-Sweeping Variable Recurring Payment Authorisation
*YapilyApi.VariableRecurringPaymentsApi* | [**createSweepingAuthorisation**](docs/VariableRecurringPaymentsApi.md#createSweepingAuthorisation) | **POST** /variable-recurring-payments/sweeping/consents | Create Sweeping Variable Recurring Payment Authorisation
*YapilyApi.VariableRecurringPaymentsApi* | [**createVrpFundsConfirmation**](docs/VariableRecurringPaymentsApi.md#createVrpFundsConfirmation) | **POST** /variable-recurring-payments/funds-confirmation | Confirm Funds for Variable Recurring Payment
*YapilyApi.VariableRecurringPaymentsApi* | [**createVrpPayment**](docs/VariableRecurringPaymentsApi.md#createVrpPayment) | **POST** /variable-recurring-payments/payments | Create Variable Recurring Payment
*YapilyApi.VariableRecurringPaymentsApi* | [**getSweepingVrpConsentById**](docs/VariableRecurringPaymentsApi.md#getSweepingVrpConsentById) | **GET** /variable-recurring-payments/sweeping/consents/{consentId} | Get Sweeping Variable Recurring Payment Consent Details
*YapilyApi.VariableRecurringPaymentsApi* | [**getVrpPaymentDetails**](docs/VariableRecurringPaymentsApi.md#getVrpPaymentDetails) | **GET** /variable-recurring-payments/payments/{paymentId}/details | Get Variable Recurring Payment Details
*YapilyApi.VariableRecurringPaymentsApi* | [**getpNonSweepingVrpConsentById**](docs/VariableRecurringPaymentsApi.md#getpNonSweepingVrpConsentById) | **GET** /variable-recurring-payments/non-sweeping/consents/{consentId} | Get Non-Sweeping Variable Recurring Payment Consent Details
*YapilyApi.VirtualAccountsApi* | [**createVirtualAccount**](docs/VirtualAccountsApi.md#createVirtualAccount) | **POST** /virtual-accounts/accounts | Create Account
*YapilyApi.VirtualAccountsApi* | [**createVirtualAccountBeneficiary**](docs/VirtualAccountsApi.md#createVirtualAccountBeneficiary) | **POST** /virtual-accounts/beneficiaries | Create Beneficiary
*YapilyApi.VirtualAccountsApi* | [**createVirtualAccountClient**](docs/VirtualAccountsApi.md#createVirtualAccountClient) | **POST** /virtual-accounts/clients | Create Virtual Account Client
*YapilyApi.VirtualAccountsApi* | [**createVirtualAccountPayOut**](docs/VirtualAccountsApi.md#createVirtualAccountPayOut) | **POST** /virtual-accounts/payments/pay-outs | Create Pay Out
*YapilyApi.VirtualAccountsApi* | [**createVirtualAccountTransfer**](docs/VirtualAccountsApi.md#createVirtualAccountTransfer) | **POST** /virtual-accounts/payments/transfers | Create Virtual Account Transfer
*YapilyApi.VirtualAccountsApi* | [**getPayInDetails**](docs/VirtualAccountsApi.md#getPayInDetails) | **GET** /virtual-accounts/payments/{paymentId}/pay-in-details | Get Pay-In Details
*YapilyApi.VirtualAccountsApi* | [**getPaymentsById**](docs/VirtualAccountsApi.md#getPaymentsById) | **GET** /virtual-accounts/payments/{id} | Get Payment
*YapilyApi.VirtualAccountsApi* | [**getVirtualAccountBeneficiaries**](docs/VirtualAccountsApi.md#getVirtualAccountBeneficiaries) | **GET** /virtual-accounts/beneficiaries | Get List Of Beneficiaries
*YapilyApi.VirtualAccountsApi* | [**getVirtualAccountBeneficiary**](docs/VirtualAccountsApi.md#getVirtualAccountBeneficiary) | **GET** /virtual-accounts/beneficiaries/{beneficiaryId} | Get Beneficiary
*YapilyApi.VirtualAccountsApi* | [**getVirtualAccountById**](docs/VirtualAccountsApi.md#getVirtualAccountById) | **GET** /virtual-accounts/accounts/{accountId} | Get Account
*YapilyApi.VirtualAccountsApi* | [**getVirtualAccountClients**](docs/VirtualAccountsApi.md#getVirtualAccountClients) | **GET** /virtual-accounts/clients | Get List of Virtual Account Clients
*YapilyApi.VirtualAccountsApi* | [**getVirtualAccountPayments**](docs/VirtualAccountsApi.md#getVirtualAccountPayments) | **GET** /virtual-accounts/payments | Get Payments
*YapilyApi.VirtualAccountsApi* | [**getVirtualAccounts**](docs/VirtualAccountsApi.md#getVirtualAccounts) | **GET** /virtual-accounts/accounts | Get Accounts
*YapilyApi.VirtualAccountsApi* | [**updateVirtualAccountById**](docs/VirtualAccountsApi.md#updateVirtualAccountById) | **PATCH** /virtual-accounts/accounts/{accountId} | Update Account


## Documentation for Models

 - [YapilyApi.Account](docs/Account.md)
 - [YapilyApi.AccountApiListResponse](docs/AccountApiListResponse.md)
 - [YapilyApi.AccountAuthorisationRequest](docs/AccountAuthorisationRequest.md)
 - [YapilyApi.AccountAuthorisationResponse](docs/AccountAuthorisationResponse.md)
 - [YapilyApi.AccountBalance](docs/AccountBalance.md)
 - [YapilyApi.AccountBalanceType](docs/AccountBalanceType.md)
 - [YapilyApi.AccountIdentification](docs/AccountIdentification.md)
 - [YapilyApi.AccountIdentificationType](docs/AccountIdentificationType.md)
 - [YapilyApi.AccountInfo](docs/AccountInfo.md)
 - [YapilyApi.AccountName](docs/AccountName.md)
 - [YapilyApi.AccountRequest](docs/AccountRequest.md)
 - [YapilyApi.AccountStatement](docs/AccountStatement.md)
 - [YapilyApi.AccountType](docs/AccountType.md)
 - [YapilyApi.Address](docs/Address.md)
 - [YapilyApi.AddressDetails](docs/AddressDetails.md)
 - [YapilyApi.AddressTypeEnum](docs/AddressTypeEnum.md)
 - [YapilyApi.Amount](docs/Amount.md)
 - [YapilyApi.ApiError](docs/ApiError.md)
 - [YapilyApi.ApiErrorResponse](docs/ApiErrorResponse.md)
 - [YapilyApi.ApiListResponseOfAccountStatement](docs/ApiListResponseOfAccountStatement.md)
 - [YapilyApi.ApiListResponseOfBeneficiary](docs/ApiListResponseOfBeneficiary.md)
 - [YapilyApi.ApiListResponseOfCategory](docs/ApiListResponseOfCategory.md)
 - [YapilyApi.ApiListResponseOfConsent](docs/ApiListResponseOfConsent.md)
 - [YapilyApi.ApiListResponseOfDirectDebitResponse](docs/ApiListResponseOfDirectDebitResponse.md)
 - [YapilyApi.ApiListResponseOfEventSubscriptionResponse](docs/ApiListResponseOfEventSubscriptionResponse.md)
 - [YapilyApi.ApiListResponseOfFeatureDetails](docs/ApiListResponseOfFeatureDetails.md)
 - [YapilyApi.ApiListResponseOfInstitution](docs/ApiListResponseOfInstitution.md)
 - [YapilyApi.ApiListResponseOfPaymentResponse](docs/ApiListResponseOfPaymentResponse.md)
 - [YapilyApi.ApiListResponseOfTransaction](docs/ApiListResponseOfTransaction.md)
 - [YapilyApi.ApiListResponseOfVirtualAccount](docs/ApiListResponseOfVirtualAccount.md)
 - [YapilyApi.ApiListResponseOfVirtualAccountBeneficiary](docs/ApiListResponseOfVirtualAccountBeneficiary.md)
 - [YapilyApi.ApiListResponseOfVirtualAccountClient](docs/ApiListResponseOfVirtualAccountClient.md)
 - [YapilyApi.ApiListResponseOfVirtualAccountPayment](docs/ApiListResponseOfVirtualAccountPayment.md)
 - [YapilyApi.ApiResponseError](docs/ApiResponseError.md)
 - [YapilyApi.ApiResponseOfAccount](docs/ApiResponseOfAccount.md)
 - [YapilyApi.ApiResponseOfAccountAuthorisationResponse](docs/ApiResponseOfAccountAuthorisationResponse.md)
 - [YapilyApi.ApiResponseOfAccountStatement](docs/ApiResponseOfAccountStatement.md)
 - [YapilyApi.ApiResponseOfBalances](docs/ApiResponseOfBalances.md)
 - [YapilyApi.ApiResponseOfConsent](docs/ApiResponseOfConsent.md)
 - [YapilyApi.ApiResponseOfConsentDeleteResponse](docs/ApiResponseOfConsentDeleteResponse.md)
 - [YapilyApi.ApiResponseOfEmbeddedAccountAuthorisationResponse](docs/ApiResponseOfEmbeddedAccountAuthorisationResponse.md)
 - [YapilyApi.ApiResponseOfEventSubscriptionDeleteResponse](docs/ApiResponseOfEventSubscriptionDeleteResponse.md)
 - [YapilyApi.ApiResponseOfEventSubscriptionResponse](docs/ApiResponseOfEventSubscriptionResponse.md)
 - [YapilyApi.ApiResponseOfFinancialProfile](docs/ApiResponseOfFinancialProfile.md)
 - [YapilyApi.ApiResponseOfFinancialProfileAuthorisationResponse](docs/ApiResponseOfFinancialProfileAuthorisationResponse.md)
 - [YapilyApi.ApiResponseOfFinancialProfileBalancePrediction](docs/ApiResponseOfFinancialProfileBalancePrediction.md)
 - [YapilyApi.ApiResponseOfFinancialProfileConsent](docs/ApiResponseOfFinancialProfileConsent.md)
 - [YapilyApi.ApiResponseOfFinancialProfileConsentRemoveResponse](docs/ApiResponseOfFinancialProfileConsentRemoveResponse.md)
 - [YapilyApi.ApiResponseOfFundsConfirmationResponse](docs/ApiResponseOfFundsConfirmationResponse.md)
 - [YapilyApi.ApiResponseOfIdentity](docs/ApiResponseOfIdentity.md)
 - [YapilyApi.ApiResponseOfNonSweepingAuthorisationResponse](docs/ApiResponseOfNonSweepingAuthorisationResponse.md)
 - [YapilyApi.ApiResponseOfPaymentAuthorisationRequestResponse](docs/ApiResponseOfPaymentAuthorisationRequestResponse.md)
 - [YapilyApi.ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse](docs/ApiResponseOfPaymentEmbeddedAuthorisationRequestResponse.md)
 - [YapilyApi.ApiResponseOfPaymentResponse](docs/ApiResponseOfPaymentResponse.md)
 - [YapilyApi.ApiResponseOfPaymentResponses](docs/ApiResponseOfPaymentResponses.md)
 - [YapilyApi.ApiResponseOfSubmissionResponse](docs/ApiResponseOfSubmissionResponse.md)
 - [YapilyApi.ApiResponseOfSweepingAuthorisationResponse](docs/ApiResponseOfSweepingAuthorisationResponse.md)
 - [YapilyApi.ApiResponseOfUserDeleteResponse](docs/ApiResponseOfUserDeleteResponse.md)
 - [YapilyApi.ApiResponseOfVirtualAccount](docs/ApiResponseOfVirtualAccount.md)
 - [YapilyApi.ApiResponseOfVirtualAccountBeneficiary](docs/ApiResponseOfVirtualAccountBeneficiary.md)
 - [YapilyApi.ApiResponseOfVirtualAccountClient](docs/ApiResponseOfVirtualAccountClient.md)
 - [YapilyApi.ApiResponseOfVirtualAccountPayInDetails](docs/ApiResponseOfVirtualAccountPayInDetails.md)
 - [YapilyApi.ApiResponseOfVirtualAccountPayment](docs/ApiResponseOfVirtualAccountPayment.md)
 - [YapilyApi.Application](docs/Application.md)
 - [YapilyApi.ApplicationUser](docs/ApplicationUser.md)
 - [YapilyApi.AuthorisationStatus](docs/AuthorisationStatus.md)
 - [YapilyApi.BalancePredictionProfile](docs/BalancePredictionProfile.md)
 - [YapilyApi.Balances](docs/Balances.md)
 - [YapilyApi.Beneficiary](docs/Beneficiary.md)
 - [YapilyApi.BeneficiaryPayee](docs/BeneficiaryPayee.md)
 - [YapilyApi.BulkPaymentAuthorisationRequest](docs/BulkPaymentAuthorisationRequest.md)
 - [YapilyApi.BulkPaymentEmbeddedAuthorisationRequest](docs/BulkPaymentEmbeddedAuthorisationRequest.md)
 - [YapilyApi.BulkPaymentRequest](docs/BulkPaymentRequest.md)
 - [YapilyApi.Categorisation](docs/Categorisation.md)
 - [YapilyApi.Category](docs/Category.md)
 - [YapilyApi.ChargeBearerType](docs/ChargeBearerType.md)
 - [YapilyApi.Consent](docs/Consent.md)
 - [YapilyApi.ConsentAuthCodeRequest](docs/ConsentAuthCodeRequest.md)
 - [YapilyApi.ConsentDeleteResponse](docs/ConsentDeleteResponse.md)
 - [YapilyApi.ConsolidatedAccountInformation](docs/ConsolidatedAccountInformation.md)
 - [YapilyApi.Country](docs/Country.md)
 - [YapilyApi.CredentialsType](docs/CredentialsType.md)
 - [YapilyApi.CreditLine](docs/CreditLine.md)
 - [YapilyApi.CreditLineType](docs/CreditLineType.md)
 - [YapilyApi.CurrencyExchange](docs/CurrencyExchange.md)
 - [YapilyApi.DeleteStatusEnum](docs/DeleteStatusEnum.md)
 - [YapilyApi.DirectDebitPayee](docs/DirectDebitPayee.md)
 - [YapilyApi.DirectDebitResponse](docs/DirectDebitResponse.md)
 - [YapilyApi.EmbeddedAccountAuthorisationRequest](docs/EmbeddedAccountAuthorisationRequest.md)
 - [YapilyApi.EmbeddedAccountAuthorisationResponse](docs/EmbeddedAccountAuthorisationResponse.md)
 - [YapilyApi.EnrichedBalances](docs/EnrichedBalances.md)
 - [YapilyApi.EnrichedHistoricBalance](docs/EnrichedHistoricBalance.md)
 - [YapilyApi.EnrichedPredictedBalance](docs/EnrichedPredictedBalance.md)
 - [YapilyApi.EnrichedTransaction](docs/EnrichedTransaction.md)
 - [YapilyApi.EnrichedWrapper](docs/EnrichedWrapper.md)
 - [YapilyApi.Enrichment](docs/Enrichment.md)
 - [YapilyApi.EnrichmentMerchant](docs/EnrichmentMerchant.md)
 - [YapilyApi.EnvironmentType](docs/EnvironmentType.md)
 - [YapilyApi.ErrorDetails](docs/ErrorDetails.md)
 - [YapilyApi.ErrorIssue](docs/ErrorIssue.md)
 - [YapilyApi.EventSubscriptionDeleteResponse](docs/EventSubscriptionDeleteResponse.md)
 - [YapilyApi.EventSubscriptionRequest](docs/EventSubscriptionRequest.md)
 - [YapilyApi.EventSubscriptionResponse](docs/EventSubscriptionResponse.md)
 - [YapilyApi.ExchangeRateInformation](docs/ExchangeRateInformation.md)
 - [YapilyApi.ExchangeRateInformationResponse](docs/ExchangeRateInformationResponse.md)
 - [YapilyApi.ExtendConsentRequest](docs/ExtendConsentRequest.md)
 - [YapilyApi.FeatureDetails](docs/FeatureDetails.md)
 - [YapilyApi.FeatureEnum](docs/FeatureEnum.md)
 - [YapilyApi.FilterAndSort](docs/FilterAndSort.md)
 - [YapilyApi.FilteredClientPayloadListAccount](docs/FilteredClientPayloadListAccount.md)
 - [YapilyApi.FilteredClientPayloadListAccountStatement](docs/FilteredClientPayloadListAccountStatement.md)
 - [YapilyApi.FilteredClientPayloadListCategory](docs/FilteredClientPayloadListCategory.md)
 - [YapilyApi.FilteredClientPayloadListConsent](docs/FilteredClientPayloadListConsent.md)
 - [YapilyApi.FilteredClientPayloadListDirectDebitResponse](docs/FilteredClientPayloadListDirectDebitResponse.md)
 - [YapilyApi.FilteredClientPayloadListFeatureDetails](docs/FilteredClientPayloadListFeatureDetails.md)
 - [YapilyApi.FilteredClientPayloadListInstitution](docs/FilteredClientPayloadListInstitution.md)
 - [YapilyApi.FilteredClientPayloadListPaymentResponse](docs/FilteredClientPayloadListPaymentResponse.md)
 - [YapilyApi.FilteredClientPayloadListTransaction](docs/FilteredClientPayloadListTransaction.md)
 - [YapilyApi.FinancialProfile](docs/FinancialProfile.md)
 - [YapilyApi.FrequencyEnumExtended](docs/FrequencyEnumExtended.md)
 - [YapilyApi.FrequencyRequest](docs/FrequencyRequest.md)
 - [YapilyApi.FrequencyResponse](docs/FrequencyResponse.md)
 - [YapilyApi.FundsAvailable](docs/FundsAvailable.md)
 - [YapilyApi.FundsConfirmationRequest](docs/FundsConfirmationRequest.md)
 - [YapilyApi.FundsConfirmationResponse](docs/FundsConfirmationResponse.md)
 - [YapilyApi.Identity](docs/Identity.md)
 - [YapilyApi.IdentityAddress](docs/IdentityAddress.md)
 - [YapilyApi.InitiationDetails](docs/InitiationDetails.md)
 - [YapilyApi.Institution](docs/Institution.md)
 - [YapilyApi.InstitutionConsent](docs/InstitutionConsent.md)
 - [YapilyApi.InstitutionError](docs/InstitutionError.md)
 - [YapilyApi.InternationalPaymentRequest](docs/InternationalPaymentRequest.md)
 - [YapilyApi.IsoBankTransactionCode](docs/IsoBankTransactionCode.md)
 - [YapilyApi.IsoCodeDetails](docs/IsoCodeDetails.md)
 - [YapilyApi.Links](docs/Links.md)
 - [YapilyApi.Media](docs/Media.md)
 - [YapilyApi.Merchant](docs/Merchant.md)
 - [YapilyApi.MonitoringEndpointStatus](docs/MonitoringEndpointStatus.md)
 - [YapilyApi.MonitoringFeatureStatus](docs/MonitoringFeatureStatus.md)
 - [YapilyApi.MonitoringStatusEnum](docs/MonitoringStatusEnum.md)
 - [YapilyApi.MultiAuthorisation](docs/MultiAuthorisation.md)
 - [YapilyApi.NewApplicationUser](docs/NewApplicationUser.md)
 - [YapilyApi.Next](docs/Next.md)
 - [YapilyApi.NonSweepingAuthorisationRequest](docs/NonSweepingAuthorisationRequest.md)
 - [YapilyApi.NonSweepingAuthorisationResponse](docs/NonSweepingAuthorisationResponse.md)
 - [YapilyApi.NonSweepingControlParameters](docs/NonSweepingControlParameters.md)
 - [YapilyApi.NonSweepingPeriodicLimits](docs/NonSweepingPeriodicLimits.md)
 - [YapilyApi.Notification](docs/Notification.md)
 - [YapilyApi.OneTimeTokenRequest](docs/OneTimeTokenRequest.md)
 - [YapilyApi.Pagination](docs/Pagination.md)
 - [YapilyApi.Payee](docs/Payee.md)
 - [YapilyApi.PayeeDetails](docs/PayeeDetails.md)
 - [YapilyApi.Payer](docs/Payer.md)
 - [YapilyApi.PayerDetails](docs/PayerDetails.md)
 - [YapilyApi.PaymentAuthorisationRequest](docs/PaymentAuthorisationRequest.md)
 - [YapilyApi.PaymentAuthorisationRequestResponse](docs/PaymentAuthorisationRequestResponse.md)
 - [YapilyApi.PaymentChargeDetails](docs/PaymentChargeDetails.md)
 - [YapilyApi.PaymentContextType](docs/PaymentContextType.md)
 - [YapilyApi.PaymentEmbeddedAuthorisationRequest](docs/PaymentEmbeddedAuthorisationRequest.md)
 - [YapilyApi.PaymentEmbeddedAuthorisationRequestResponse](docs/PaymentEmbeddedAuthorisationRequestResponse.md)
 - [YapilyApi.PaymentIsoStatus](docs/PaymentIsoStatus.md)
 - [YapilyApi.PaymentIsoStatusCodeEnum](docs/PaymentIsoStatusCodeEnum.md)
 - [YapilyApi.PaymentPreAuthorisationRequest](docs/PaymentPreAuthorisationRequest.md)
 - [YapilyApi.PaymentRequest](docs/PaymentRequest.md)
 - [YapilyApi.PaymentResponse](docs/PaymentResponse.md)
 - [YapilyApi.PaymentResponses](docs/PaymentResponses.md)
 - [YapilyApi.PaymentStatus](docs/PaymentStatus.md)
 - [YapilyApi.PaymentStatusDetails](docs/PaymentStatusDetails.md)
 - [YapilyApi.PaymentType](docs/PaymentType.md)
 - [YapilyApi.PeriodicPaymentRequest](docs/PeriodicPaymentRequest.md)
 - [YapilyApi.PreAuthorisationRequest](docs/PreAuthorisationRequest.md)
 - [YapilyApi.PriorityCodeEnum](docs/PriorityCodeEnum.md)
 - [YapilyApi.ProfileConsent](docs/ProfileConsent.md)
 - [YapilyApi.ProprietaryBankTransactionCode](docs/ProprietaryBankTransactionCode.md)
 - [YapilyApi.RateTypeEnum](docs/RateTypeEnum.md)
 - [YapilyApi.RawRequest](docs/RawRequest.md)
 - [YapilyApi.RawResponse](docs/RawResponse.md)
 - [YapilyApi.RedirectRequest](docs/RedirectRequest.md)
 - [YapilyApi.RefundAccount](docs/RefundAccount.md)
 - [YapilyApi.ResponseForwardedData](docs/ResponseForwardedData.md)
 - [YapilyApi.ResponseListMeta](docs/ResponseListMeta.md)
 - [YapilyApi.ResponseMeta](docs/ResponseMeta.md)
 - [YapilyApi.ScaMethod](docs/ScaMethod.md)
 - [YapilyApi.SortEnum](docs/SortEnum.md)
 - [YapilyApi.StatementReference](docs/StatementReference.md)
 - [YapilyApi.Subcategory](docs/Subcategory.md)
 - [YapilyApi.SubmissionDetails](docs/SubmissionDetails.md)
 - [YapilyApi.SubmissionRequest](docs/SubmissionRequest.md)
 - [YapilyApi.SubmissionResponse](docs/SubmissionResponse.md)
 - [YapilyApi.SweepingAuthorisationRequest](docs/SweepingAuthorisationRequest.md)
 - [YapilyApi.SweepingAuthorisationResponse](docs/SweepingAuthorisationResponse.md)
 - [YapilyApi.SweepingControlParameters](docs/SweepingControlParameters.md)
 - [YapilyApi.SweepingPeriodicLimits](docs/SweepingPeriodicLimits.md)
 - [YapilyApi.TerminatedTransactionStream](docs/TerminatedTransactionStream.md)
 - [YapilyApi.Transaction](docs/Transaction.md)
 - [YapilyApi.TransactionBalance](docs/TransactionBalance.md)
 - [YapilyApi.TransactionChargeDetails](docs/TransactionChargeDetails.md)
 - [YapilyApi.TransactionHash](docs/TransactionHash.md)
 - [YapilyApi.TransactionSchedule](docs/TransactionSchedule.md)
 - [YapilyApi.TransactionStatusEnum](docs/TransactionStatusEnum.md)
 - [YapilyApi.TransactionStream](docs/TransactionStream.md)
 - [YapilyApi.Type](docs/Type.md)
 - [YapilyApi.UpdateVirtualAccountRequest](docs/UpdateVirtualAccountRequest.md)
 - [YapilyApi.UsageType](docs/UsageType.md)
 - [YapilyApi.UserCredentials](docs/UserCredentials.md)
 - [YapilyApi.UserDeleteResponse](docs/UserDeleteResponse.md)
 - [YapilyApi.VirtualAccount](docs/VirtualAccount.md)
 - [YapilyApi.VirtualAccountAddress](docs/VirtualAccountAddress.md)
 - [YapilyApi.VirtualAccountBalance](docs/VirtualAccountBalance.md)
 - [YapilyApi.VirtualAccountBalanceType](docs/VirtualAccountBalanceType.md)
 - [YapilyApi.VirtualAccountBankAccount](docs/VirtualAccountBankAccount.md)
 - [YapilyApi.VirtualAccountBeneficiary](docs/VirtualAccountBeneficiary.md)
 - [YapilyApi.VirtualAccountBeneficiaryAccount](docs/VirtualAccountBeneficiaryAccount.md)
 - [YapilyApi.VirtualAccountBeneficiaryAddress](docs/VirtualAccountBeneficiaryAddress.md)
 - [YapilyApi.VirtualAccountBeneficiaryRequest](docs/VirtualAccountBeneficiaryRequest.md)
 - [YapilyApi.VirtualAccountBusinessClient](docs/VirtualAccountBusinessClient.md)
 - [YapilyApi.VirtualAccountClient](docs/VirtualAccountClient.md)
 - [YapilyApi.VirtualAccountClientBusinessType](docs/VirtualAccountClientBusinessType.md)
 - [YapilyApi.VirtualAccountClientRequest](docs/VirtualAccountClientRequest.md)
 - [YapilyApi.VirtualAccountClientStatus](docs/VirtualAccountClientStatus.md)
 - [YapilyApi.VirtualAccountClientType](docs/VirtualAccountClientType.md)
 - [YapilyApi.VirtualAccountIndividualClient](docs/VirtualAccountIndividualClient.md)
 - [YapilyApi.VirtualAccountKycStatus](docs/VirtualAccountKycStatus.md)
 - [YapilyApi.VirtualAccountPayInDetails](docs/VirtualAccountPayInDetails.md)
 - [YapilyApi.VirtualAccountPayOutRequest](docs/VirtualAccountPayOutRequest.md)
 - [YapilyApi.VirtualAccountPayment](docs/VirtualAccountPayment.md)
 - [YapilyApi.VirtualAccountPaymentDestination](docs/VirtualAccountPaymentDestination.md)
 - [YapilyApi.VirtualAccountPaymentSource](docs/VirtualAccountPaymentSource.md)
 - [YapilyApi.VirtualAccountRequest](docs/VirtualAccountRequest.md)
 - [YapilyApi.VirtualAccountTransferDestination](docs/VirtualAccountTransferDestination.md)
 - [YapilyApi.VirtualAccountTransferRequest](docs/VirtualAccountTransferRequest.md)
 - [YapilyApi.VirtualAccountTransferSource](docs/VirtualAccountTransferSource.md)


## Documentation for Authorization



### basicAuth

- **Type**: HTTP basic authentication

