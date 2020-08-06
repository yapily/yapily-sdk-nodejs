const readline = require('readline')
var util = require('util')

var constants = require('../constants.js')
var YapilyApi = require('@yapily/yapily-api')
var StatusEnum = require('@yapily/yapily-api').Consent.StatusEnum;

var ApplicationUserUtils = require('../users/ApplicationUserUtils')
var AccountsUtil = require('./AccountsUtil');
var TransactionsUtil = require('./TransactionsUtil');
var ConsentUtils = require('../consents/ConsentsUtils');

var defaultClient = YapilyApi.ApiClient.instance

var basicAuth = defaultClient.authentications['basicAuth']
basicAuth.username = constants.APPLICATION_ID
basicAuth.password = constants.APPLICATION_SECRET

INSTITUTION_ID = constants.INSTITUTION_ID
APPLICATION_USER_ID = constants.APPLICATION_USER_ID

var createReadLine = function() {

    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

var authorizationReadline = createReadLine()

//Get an existing user
ApplicationUserUtils.getUsersUsingGET([APPLICATION_USER_ID], function(error, user) {
    var now = new Date();
    if(user) {

        opts = {
            "filterApplicationUserId": [ APPLICATION_USER_ID ],
            "filterInstitution": [ INSTITUTION_ID ],
            "filterStatus": [ StatusEnum.AUTHORIZED ],
            "limit": 1
        }

        //Get the first consent for this user and institution that is authorised
        ConsentUtils.getConsentsUsingGET(opts, function(error, consents) {
            if(consents) {
                var consentToken = consents.data[0].consentToken;
                var consentId = consents.data[0].id;
                
                //A successful authenticated request should have the consent token
                if(consentToken != null) {
                    console.log("\nConsent Token fetched for consent with id: %s", consentId)

                    //Use this consentToken to get all the available accounts
                    AccountsUtil.getAccountsUsingGET(consentToken, function(error, accounts) {
                        if(accounts) {
                            var accountId = accounts.data[0].id;
                            TransactionsUtil.getTransactionsUsingGET(consentToken, accountId, function(error, transactions){

                            });
                        }
                    })
                }
            } else {
                console.log("\nCould not find an existing authorized consent token. It may have expired or been revoked by the institution. Try creating a new consent!.")
            }
        })
    }
})
