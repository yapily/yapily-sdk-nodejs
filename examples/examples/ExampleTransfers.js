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
var transfersApi = new YapilyApi.TransfersApi()

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

        institutionId = "monzo"
        userUUID = createUser.uuid

        redirectUrl = YapilyApi.Auth.authDirectUrl(constants.APPLICATION_ID,userUUID,institutionId,constants.CALLBACK_URL,"account")

        authorizationReadline.question(util.format('Press any key once authenticated to %s ',redirectUrl), (answer) => {
            authorizationReadline.close()

            getConsentToken(userUUID.uuid,institutionId, function(err,consentToken) {

                if(err) {
                    console.error(err)
                } else {
                    console.log("Consent Token fetched:  %s",consentToken)
                    getAccounts(consentToken,function(err,accounts) {
                        console.log("Accounts fetched: %s issuing transfer",accounts)
                        transfer(consentToken,function(err,transfer) {
                        })
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

var transfer = function(consentToken,callback) {

    var accountId = "{{account-id}}"
    var opts = {
        "transferRequest": {
            "accountId": "{{destination-account-id}}",
            "amount": 0.50,
            "currency": "GBP",
            "reference": "Your transaction with yapily",
            "transferReferenceId": "uuidReferenceId"
        }
    }

    transfersApi.transferUsingPUT(consentToken, accountId, opts, function(err,transfer) {

        if(err) {
            console.log(err);
            callback(err)
        } else {

            console.log("**************TRANSFER******************")
            console.log(transfer)
            console.log("****************************************")

            callback(null,transfer)
        }
    })
}
