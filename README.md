# Yapily Node.js SDK
[![GitHub version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=gh&type=6&v=2.3.1-SNAPSHOT)](http://badge.fury.io/gh/boennemann%2Fbadges)

This SDK can be used as a module or an example of how to connect to any financial institution integrated by Yapily.


## Requirements

To connect to the Yapily API, you will need to register your 
application at [https://dashboard.yapily.com]().

These application credentials will be used to authorise all
your API requests.

## Installation

The SDK is currently available in the Yapily github repository and 
can be included in your project 
by adding it to your dependencies

#### pip

```bash
npm install https://github.com/yapily/yapily-sdk-npm.git
```

## Usage

Sample usage of the SDK can be seen in the `examples` folder.

- Configure the application credentials

```javascript
var defaultClient = YapilyApi.ApiClient.instance;
var basicAuth = defaultClient.authentications['basicAuth']
basicAuth.username = constants.APPLICATION_ID
basicAuth.password = constants.APPLICATION_SECRET
```

- Retrieve a list of available financial institutions to connect to

```javascript	
var institutionsApi = new YapilyApi.InstitutionsApi()
institutionsApi.getInstitutionsUsingGET(function(error,institutions) {})
```


- Creating users and retrieving users for your application registered in the Yapily Dashboard
```javascript
var usersApi =  new YapilyApi.ApplicationUsersApi()
var appUser = new YapilyApi.ApplicationUser()
appUser.appUserId = "Bojack"
usersApi.addUserUsingPOST(appUser,function(error,user) {})
usersApi.getUsersUsingGET(function(error,users) {})
```


- Receiving an authorisation URL your users to log into their institution

```javascript
var institutionAuthorisationUrl = YapilyApi.Auth.authDirectUrl('application-id','user-uuid','institution-id','callback url',"account")
```

- Receiving consents issued by your user authorizing
```javascript
var opts = {
    "institutionId": institutionId
}
//...
consentsApi.getUserConsentsUsingGET(userUUID,opts,function(error,consents) {})
```

- Returning user account details

```javascript
var opts = { consent : consentToken };
//...
var accountsApi = new YapilyApi.AccountsApi();
accountsApi.getAccountsUsingGET(opts, accountsCallback);
```

- Returning user identity details
```javascript
var opts = { consent : consentToken };
//...
var identitiesApi = new YapilyApi.IdentityApi();
identitiesApi.identityUsingGET(opts, identityCallback);
```

## Further information

For more information on how to get connected, visit the
[Yapily developer resources](https://github.com/yapily/developer-resources) repo.
