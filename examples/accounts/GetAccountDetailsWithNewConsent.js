const readline = require('readline')
var util = require('util')

var constants = require('../constants.js')
var YapilyApi = require('@yapily/yapily-api')

var ApplicationUserUtils = require('../users/ApplicationUserUtils')
var AccountsUtil = require('./AccountsUtil');
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

//Check for an existing user with application user Id
ApplicationUserUtils.applicationUserExists(APPLICATION_USER_ID, function(error, user) {
    var now = new Date();
    if (user) {
        //Create a new account authorisation request
        AccountsUtil.initiateAccountRequestUsingPOST(APPLICATION_USER_ID, INSTITUTION_ID, function(error, response) {
            if(response) {
                var redirectUrl = response.data.authorisationUrl;

                //Prompt the user to authenticate the request
                authorizationReadline.question(util.format('\nAuthorise access to your accounts at: \n\n%s \n\nPress any key once authorised', redirectUrl), (answer) => {
                    authorizationReadline.close()

                    opts = {
                        "filterApplicationUserId": [ APPLICATION_USER_ID ],
                        "filterInstitution": [ INSTITUTION_ID ],
                        "from": new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), 0, 0),
                        "limit": 1
                    }

                    //Get the most recent consent for this user and institution 
                    ConsentUtils.getConsentsUsingGET(opts, function(error, consents) {
                        if(consents) {
                            var consentToken = consents.data[0].consentToken;
                            
                            //A successful authenticated request should have the consent token
                            if(consentToken != null) {
                                console.log("\nConsent Token fetched: %s", consentToken)

                                //Use this consentToken to get all the available accounts
                                AccountsUtil.getAccountsUsingGET(consentToken, function(error, accounts) {
                              
                                })
                            } else {
                                console.log("\nCould not find consent token. Make sure you go to the authUrl and authorize consent before continuing.")
                            }
                        }
                    })
        
                })
            }
        })
    }
})
