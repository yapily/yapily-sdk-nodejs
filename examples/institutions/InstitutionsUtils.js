var constants = require('../constants.js');
var YapilyApi = require('@yapily/yapily-api');

var defaultClient = YapilyApi.ApiClient.instance;

var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = constants.APPLICATION_ID
basicAuth.password = constants.APPLICATION_SECRET

var institutionsApi = new YapilyApi.InstitutionsApi()
/**
 * Yapily GET /features endpoint
 * 
 * See: https://api.yapily.com/explorer#!/Institutions/getFeatureDetailsUsingGET
 */
module.exports.getFeatureDetailsUsingGET = function(callback) {
    institutionsApi.getFeatureDetailsUsingGET(function(error, features) {
        if (error) {
            console.error("\nCould not retrieve features:\n\n", error);
        } else {
            console.log("\nRetrieved all features:\n\n", features);
            callback(null, features);   
        }
    })
}

/**
 * Yapily GET /institutions endpoint
 * 
 * See: https://api.yapily.com/explorer#!/Institutions/getInstitutionsUsingGET
 */
module.exports.getInstitutionsUsingGET = function(callback) {
    institutionsApi.getInstitutionsUsingGET(function(error, institutions) {
        if (error) {
            console.error("\nCould not retrieve all institutions:\n\n", error);
        } else {
            console.log("\nRetrieved all institutions:\n\n", institutions);
            callback(null, institutions);   
        }
    })
}

/**
 * Yapily GET /institutions/{institutiond} endpoint
 * 
 * See: https://api.yapily.com/explorer#!/Institutions/getInstitutionUsingGET
 */
module.exports.getInstitutionUsingGET = function(institutionId, callback) {
    institutionsApi.getInstitutionUsingGET(institutionId, function(error, institutions) {
        if (error) {
            console.error("\nCould not retrieve the institution '" + institutionId + "':\n\n", error);
        } else {
            console.log("\nRetrieved the institution '" + institutionId + "':\n\n", institutions);
            callback(null, institutions);   
        }
    })
}