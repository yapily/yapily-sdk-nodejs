## Requirements

To connect to the Yapily API, you will need to register your 
application at [https://dashboard.yapily.com]().

These application credentials can then be used to authorise all
your API requests.

## Usage

Sample usage of the SDK can be seen in the `examples` folder.

- Retrieve a list of available financial institutions to connect to

```javascript	
var institutionsApi = new YapilyApi.InstitutionsApi();
var institutionList = institutionsApi.getInstitutionUsingGET();
```

- Creating users and retrieving users for your application registered in the Yapily Dashboard
```javascript
var usersApi = new YapilyApi.ApplicationUsersApi();
var appUser = new YapilyApi.ApplicationUser();
appUser.appUserId = "Bojack";
usersApi.addUserUsingPOST(appUser, addUserCallback);

var users = usersApi.getUsersUsingGET(getUsersCallback);
```

- Build authorisation URL for your users to log into their institution

```javascript
var directUrl = `https://auth.yapily.com/direct/?institution=${institutionId}&application=${applicationId}&user=${userUuid}&callback=${myCallbackUrl}`;
```
 
- Returning user account details

```javascript
var opts = { consent : consentToken };
//...
var accountsApi = new YapilyApi.AccountsApi();
accountsApi.getAccountsUsingGET(opts, accountsCallback);
```

- Returning user transaction details

```javascript
var opts = { consent : consentToken };
//...
var transactionsApi = new YapilyApi.TransactionsApi();
transactionsApi.getTransactionsUsingGET(accountId, opts, transactionsCallback);
```

- Returning user identity details
```javascript
var opts = { consent : consentToken };
//...
var identitiesApi = new YapilyApi.IdentityApi();
identitiesApi.getIdentity(opts, identityCallback);
```

## Further information

For more information on how to get connected, visit the
[Yapily developer resources](https://github.com/yapily/developer-resources) repo.
