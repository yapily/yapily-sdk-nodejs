var constants = require('../constants.js');
var YapilyApi = require('@yapily/yapily-api');

var defaultClient = YapilyApi.ApiClient.instance;

var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = constants.APPLICATION_ID
basicAuth.password = constants.APPLICATION_SECRET

var api = new YapilyApi.ApplicationUsersApi()

/**
 * Yapily GET /Users endpoint
 * 
 * See: https://api.yapily.com/explorer#!/Application_Users/getUsersUsingGET
 */
module.exports.getUsersUsingGET = function(callback) {
    api.getUsersUsingGET(function(error, response) {
        if(error) {
            console.log("\nCould not get all users:\n\n", error);
        } else {
            console.log("\nGetting all users:\n\n", response);
            callback(null, response);
        }
    });
}

/**
 * Yapily GET /Users/{userUuid} endpoint
 * 
 * See: https://api.yapily.com/explorer#!/Application_Users/getUserUsingGET
 */
module.exports.getUserUsingGET = function(uuid, callback) {
    api.getUserUsingGET(uuid, function(error, response) {
        if(error) {
            console.log("\nCould not get user with userUuid '%s'\n\n", uuid, error);
        } else {
            console.log("\nGetting user with userUuid '%s'\n\n", uuid, response);
            callback(null, response);
        }
    });
}

/**
 * Yapily POST /Users endpoint
 * 
 * See: https://api.yapily.com/explorer#!/Application_Users/addUserUsingPOST
 */
module.exports.addUserUsingPOST = function(referenceId, callback) {
    var user = new YapilyApi.ApplicationUser();
    user.referenceId = referenceId;

    api.addUserUsingPOST(user, function(error, response) {
        if(error) {
            console.log("\nCould not create new user:\n\n", error);
        } else {
            console.log("\nCreated new user:\n\n", response);
            callback(null, response);
        }
    });
}

/**
 * Yapily DELETE /Users/{userUuid} endpoint
 * 
 * See: https://api.yapily.com/explorer#!/Application_Users/deleteUserUsingDELETE
 */
module.exports.deleteUserUsingDELETE = function(user) {
    api.deleteUserUsingDELETE(user.uuid, function(error, response) {
        if(error) {
            console.log("\nCould not delete user with userUuid '%s'\n\n", user.uuid, error);
        } else {
            console.log("\nDeleted user with userUuid '%s'\n\n", user.uuid, response);
        }
    });
}