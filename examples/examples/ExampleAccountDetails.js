const readline = require('readline')

var util = require('util')

var constants = require('./constants.js')
var YapilyApi = require('yapily_api')

var defaultClient = YapilyApi.ApiClient.instance

var basicAuth = defaultClient.authentications['basicAuth']
basicAuth.username = constants.APPLICATION_ID
basicAuth.password = constants.APPLICATION_SECRET

var usersApi = new YapilyApi.ApplicationUsersApi()
var accountsApi = new YapilyApi.AccountsApi()
var consentsApi = new YapilyApi.ConsentsApi()
var identityApi = new YapilyApi.IdentityApi()
var transactionsApi = new YapilyApi.TransactionsApi()

var user = {"referenceId":"yourUsersReferenceId"}

var createReadLine = function() {

    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

var authorizationReadline = createReadLine()

usersApi.addUserUsingPOST(user,function(error, createUser) {

    if(error) {
        console.error(error)
    } else {

        institutionId = "bbva-sandbox"
        userUUID = createUser.uuid

        redirectUrl = YapilyApi.Auth.authDirectUrl(constants.APPLICATION_ID,userUUID,institutionId,constants.CALLBACK_URL,"account")

        authorizationReadline.question(util.format('Press any key once authenticated to %s ',redirectUrl), (answer) => {
            authorizationReadline.close()

            getConsentToken(userUUID.uuid,institutionId, function(err,consentToken) {

                if(err) {
                    console.error(err)
                } else {
                    console.log("Consent Token fetched:  %s",consentToken)
                    getIdentity(consentToken,function(err,identity) {
                        if(err) {
                            console.error(err);
                        } else {
                            console.log(identity)
                                getAccounts(consentToken,function(err,accounts) {
                            })
                        }
                    })
                }
            })

        })
    }
})


var getConsentToken = function(userUuid,institutionId,callback) {

    console.log("Getting token for %s",userUUID)

    opts = {
        "institutionId": institutionId
    }

    consentsApi.getUserConsentsUsingGET(userUUID,opts,function(error,consents) {
        if(error) {
            callback(error)
        } else {
            callback(null,consents[0].consentToken)
        }
    })
}

var getIdentity = function(consentToken,callback) {

    identityApi.getIdentityUsingGET(consentToken,function(err,identity) {
        if(err) {
            callback(err)
        } else{

            console.log("**************IDENTITY******************")
            console.log(identity)
            console.log("****************************************")

            callback(null,identity)
        }
    })
}

var getAccounts = function(consentToken,callback) {

    accountsApi.getAccountsUsingGET(consentToken,function(err,accounts) {

        if(err) {
            callback(err)
        } else {

            console.log("**************ACCOUNTS******************")
            console.log(accounts)
            console.log("****************************************")

            callback(null,accounts)
        }
    })
}
