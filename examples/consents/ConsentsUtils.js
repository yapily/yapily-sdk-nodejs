var constants = require('../constants.js');
var YapilyApi = require('@yapily/yapily-api');

var defaultClient = YapilyApi.ApiClient.instance;

var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = constants.APPLICATION_ID
basicAuth.password = constants.APPLICATION_SECRET

var consentsApi = new YapilyApi.ConsentsApi()

/**
 * Yapily GET /consents/{consentId} endpoint
 * 
 * See: https://api.yapily.com/explorer#!/Consents/getConsentByIdUsingGET
 */
module.exports.getConsentByIdUsingGET = function(consentId, callback) {
    consentsApi.getConsentByIdUsingGET(consentId, function(error, response) {
        if(error) {
            console.log("\nError getting consent with consentId '%s': ", consentId, error);
        } else {
            console.log("\nGetting the consent with consentId '%s':\n\n", consentId, response);
            callback(null, response);
        }
    });
}

/**
 * Yapily Delete /consents/{consentId} endpoint
 * 
 * See: https://api.yapily.com/explorer#!/Consents/deleteUsingDELETE
 */
module.exports.deleteConsentUsingDELETE = function(consentId, opts) {
    consentsApi.deleteUsingDELETE(consentId, opts, function(error, response) {
        
        console.log("\nUsing opts: \n\n", opts)

        if(error) {
            console.log("\nError deleting the consent with consentId '%s': ",  consentId, error);
        } else {
            console.log("\nDeleting the consent with consentId '%s':\n\n", consentId, response);
        }
    });
}

/**
 * Yapily GET /consents endpoint
 * 
 * See: https://api.yapily.com/explorer#!/Consents/getConsentsUsingGET
 */
module.exports.getConsentsUsingGET = function(opts, callback) {
    consentsApi.getConsentsUsingGET(opts, function(error, response) {

        console.log("\nUsing opts: \n\n", opts)

        if(error) {
            console.log("\nError getting all consents: ", error);
        } else {
            console.log("\nGetting all consents:\n\n", response);
            callback(null, response);
        }
    });
}
