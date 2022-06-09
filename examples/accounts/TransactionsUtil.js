var constants = require('../constants.js')
var YapilyApi = require('@yapily/yapily-api')

var defaultClient = YapilyApi.ApiClient.instance

var basicAuth = defaultClient.authentications['basicAuth']
basicAuth.username = constants.APPLICATION_ID
basicAuth.password = constants.APPLICATION_SECRET

var transactionsApi = new YapilyApi.FinancialDataApi()

/**
 * Yapily POST /account-auth-requests endpoint
 * 
 * See: https://api.yapily.com/explorer#!/Transactions/getTransactionsUsingGET
 */
module.exports.getTransactionsUsingGET = function(consent, accountId, callback) {

    console.log("\nGetting transactions for account '%s': \n\n", accountId)

    var opts = {};

    transactionsApi.getTransactionsUsingGET(consent, accountId, opts, function(error, response){
        if(error) {
            console.log("\nError getting transactions: \n\n", error)
        } else {
            console.log("\nObtained transactions: \n\n", response)
            callback(null, response);
        }
    });
}
