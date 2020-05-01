var constants = require('../constants.js');
var ConsentUtils = require('./ConsentsUtils');

APPLICATION_USER_ID = constants.APPLICATION_USER_ID
NON_EXISTENT_USER_ID = "aa00aaa0-0000-0000-aa00-0a000a00a0aa"

opts1 = {
    "filterApplicationUserId": [ APPLICATION_USER_ID ]
}

ConsentUtils.getConsentsUsingGET(opts1, function(error, response) {
    
});

opts2 = {
    "filterUserUuid": [ NON_EXISTENT_USER_ID ]
}

ConsentUtils.getConsentsUsingGET(opts2, function(error, response) {
    
});
