var constants = require('../constants.js');
var ConsentUtils = require('./ConsentsUtils');

INSTITUTION_ID = constants.INSTITUTION_ID
NON_EXISTENT_INSTITUTION_ID = "fake-sandbox"

opts1 = {
    "filterInstitution": [ INSTITUTION_ID ]
}

ConsentUtils.getConsentsUsingGET(opts1, function(error, response) {
    
});

opts2 = {
    "filterInstitution": [ NON_EXISTENT_INSTITUTION_ID ]
}

ConsentUtils.getConsentsUsingGET(opts2, function(error, response) {
    
});
