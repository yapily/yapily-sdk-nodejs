const readline = require('readline')
var util = require('util')

var constants = require('../constants.js')
var YapilyApi = require('@yapily/yapily-api')
var StatusEnum = require('@yapily/yapily-api').Consent.StatusEnum;

var AccountsUtil = require('./AccountsUtil');
var ConsentUtils = require('../consents/ConsentsUtils');

var defaultClient = YapilyApi.ApiClient.instance

var basicAuth = defaultClient.authentications['basicAuth']
basicAuth.username = constants.APPLICATION_ID
basicAuth.password = constants.APPLICATION_SECRET

INSTITUTION_ID = constants.INSTITUTION_ID
USER_ID = constants.USER_ID

//Add an existing consent Id
CONSENT_ID="";

var createReadLine = function() {

    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

var authorizationReadline = createReadLine()

if (CONSENT_ID == null || CONSENT_ID == "")  {
    console.log("\nYou must set the CONSENT_ID property to use this example.")
} else {
    //Get an existing consnet
    ConsentUtils.getConsentByIdUsingGET(CONSENT_ID, function(error, consent) {
        
        //Check the consent exists
        if(consent) {

            //Check the existing consent has a token
            if(consent.data.consentToken) {
                
                //Create an account re-authorisation request using this token
                AccountsUtil.reAuthoriseAccountUsingPATCH(consent.data.consentToken, function(error, response) {
                    if(response) {
                        var redirectUrl = response.data.authorisationUrl;

                        //Prompt the user to authenticate the request
                        authorizationReadline.question(util.format('\nRe-authorise access to your accounts at: \n\n%s \n\nPress any key once authorised', redirectUrl), (answer) => {
                            authorizationReadline.close()

                            //Check the same consent is in the AUTHORIZED state after authorisation 
                            ConsentUtils.getConsentByIdUsingGET(CONSENT_ID, function(error, checkConsent) {
                                if(checkConsent) {
                                    if (checkConsent.data.status == StatusEnum.FAILED) {
                                        console.log("\nYapily failed to re-authorise this token. You will need to create a new consent token.\n" +
                                        "See GetAccountDetailsWithNewConsent.js to create a new consent")
                                    } else if (checkConsent.data.status == StatusEnum.AUTHORIZED) {
                                        console.log("\nConsent token for token with id '%s' was successfully re-authorised.", consentToken)
                                    }
                                }
                            })
                
                        })
                    }
                })
            } else {
                console.log("\nThe consent token for consent with id '%s' can no longer be re-authorised as the consent token is no longer valid", CONSENT_ID);
            }
        } else {
            console.log("\nCould not find consent with consent id '%s'", CONSENT_ID);
        }
    })
}