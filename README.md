## Requirements

To connect to the Yapily API, you will need to register your 
application at [https://dashboard.yapily.com]().

These application credentials can then be used to authorise all
your API requests.

## Usage

Sample usage of the SDK can be seen in the `examples` folder.

- Retrieve a list of available financial institutions to connect to

```javascript
Institutions institutionsApi = new Institutions();
List<Institution> institutionList = institutionsApi.listInstitutions();
```

- Creating users and retrieving users for your application registered in the Yapily Dashboard
```javascript
Users usersApi = new Users();
usersApi.createUser("Bojack");
List<ApplicationUser> users = usersApi.listUsers();
```

- Receiving an authorisation URL your users to log into their institution

```javascript
Auth auth = new Auth();
URI directUrl = auth.authDirectURL(applicationId, userUuid, institutionId, YOUR_CALLBACK_URL, "account");
```
 
- Returning user account details

```javascript
Accounts accountsApi = new Accounts();
List<Account> accounts = accountsApi.listAccounts(userUuid, institutionId);
```

- Returning user transaction details

```javascript
Transactions transactionsApi = new Transactions();
List<Transaction> transactions = transactionsApi.listTransactions(userUuid, accountId, institutionId);
```

- Returning user identity details
```javascript
Identities identitiesApi = new Identities();
Identity identity = identitiesApi.getIdentity(userUuid, institutionId);
```

## Further information

For more information on how to get connected, visit the
[Yapily developer resources](https://github.com/yapily/developer-resources) repo.
