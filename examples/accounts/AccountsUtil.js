var constants = require('../constants.js')
var YapilyApi = require('@yapily/yapily-api')

var defaultClient = YapilyApi.ApiClient.instance

var basicAuth = defaultClient.authentications['basicAuth']
basicAuth.username = constants.APPLICATION_ID
basicAuth.password = constants.APPLICATION_SECRET

var accountAuthorisationRequest = new YapilyApi.AccountAuthorisationRequest();
var accountsApi = new YapilyApi.AccountsApi()

/**
 * Yapily POST /account-auth-requests endpoint
 * 
 * See: https://api.yapily.com/explorer#!/Accounts/initiateAccountRequestUsingPOST
 */
module.exports.initiateAccountRequestUsingPOST = function(applicationUserId, institutionId, callback) {

    accountAuthorisationRequest.applicationUserId = applicationUserId;
    accountAuthorisationRequest.institutionId = institutionId;
    console.log("\nCreating authorisation request object: \n\n", accountAuthorisationRequest)

    accountsApi.initiateAccountRequestUsingPOST(accountAuthorisationRequest, function(error, response){
        if(error) {
            console.log("\nError creating authorisation request: \n\n", error)
        } else {
            console.log("\nCreated account authorisation request: \n\n", response)
            callback(null, response);
        }
    });
}

/**
 * Yapily PATCH /account-auth-requests endpoint
 * 
 * See: https://api.yapily.com/explorer#!/Accounts/reAuthoriseAccountUsingPATCH
 */
module.exports.reAuthoriseAccountUsingPATCH = function(consentToken, callback) {

    accountsApi.reAuthoriseAccountUsingPATCH(consentToken, function(error, response){
        if(error) {
            console.log("\nError re-authorising existing consent request: \n\n", error)
        } else {
            console.log("\nRe-authorising existing consent request: \n\n", response)
            callback(null, response);
        }
    });
}

/**
 * Yapily GET /accounts endpoint
 * 
 * See: https://api.yapily.com/explorer#!/Accounts/getAccountsUsingGET
 */
module.exports.getAccountsUsingGET = function(consentToken, callback) {
    
    accountsApi.getAccountsUsingGET(consentToken, function(error, accounts) {
        if(error) {
            if (error.status == 403) {
                console.log("\nError retrieving accounts with this consent. It is likely the bank has revoked the token. Create a new consent to access the accounts \n" +
                    "You can run the accounts/ReAuthoriseConsent example using this consentToken to re-use the same feature scopes\n\n")
            } else {
                console.log("\nError retrieving accounts with this consent", error)
            }
        } else {
            console.log("\n Accounts received: ")

            console.log("\n\n**************ACCOUNTS******************")
            console.log(accounts)
            console.log("****************************************")

            callback(null, accounts)
        }
    });
}
