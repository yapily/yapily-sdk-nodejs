var constants = require('../constants.js');
var ConsentUtils = require('./ConsentsUtils');
var StatusEnum = require('@yapily/yapily-api').Consent.StatusEnum;

INSTITUTION_ID = constants.INSTITUTION_ID
NON_EXISTENT_INSTITUTION_ID = "fake-sandbox"

opts1 = {
    "filterStatus": [ StatusEnum.EXPIRED ]
}

ConsentUtils.getConsentsUsingGET(opts1, function(error, response) {
    
});

opts2 = {
    "filterStatus": [ StatusEnum.AWAITING_AUTHORIZATION ]
}

ConsentUtils.getConsentsUsingGET(opts2, function(error, response) {
    
});

opts3 = { 
    "filterStatus": [ StatusEnum.REVOKED ]
}

ConsentUtils.getConsentsUsingGET(opts3, function(error, response) {
    
});

opts4 = { 
    "filterStatus": [ StatusEnum.REJECTED ]
}

ConsentUtils.getConsentsUsingGET(opts4, function(error, response) {
    
});

opts5 = { 
    "filterStatus": [ StatusEnum.AUTHORIZED ] 
}

ConsentUtils.getConsentsUsingGET(opts5, function(error, response) {
    
});