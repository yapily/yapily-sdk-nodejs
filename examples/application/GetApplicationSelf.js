var constants = require('../constants.js')
var YapilyApi = require('@yapily/yapily-api')

var defaultClient = YapilyApi.ApiClient.instance

var basicAuth = defaultClient.authentications['basicAuth']
basicAuth.username = constants.APPLICATION_ID
basicAuth.password = constants.APPLICATION_SECRET

var applicationsApi = new YapilyApi.ApplicationApi()

/**
 * Yapily GET /me endpoint
 * 
 * See: https://api.yapily.com/explorer#!/Applications/getApplicationMeUsingGET
 */
applicationsApi.getApplicationMe(function(error, response) {
    if(error) {
        console.error(error);
    } else {
        console.log("Getting application self: \n\n", response);
    }
})
