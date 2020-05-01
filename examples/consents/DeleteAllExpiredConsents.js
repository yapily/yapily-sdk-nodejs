var ConsentUtils = require('./ConsentsUtils');
var constants = require('../constants.js')
var StatusEnum = require('@yapily/yapily-api').Consent.StatusEnum;

INSTITUTION_ID = constants.INSTITUTION_ID
APPLICATION_USER_ID = constants.APPLICATION_USER_ID

opts = {
    "filterApplicationUserId": [ APPLICATION_USER_ID ],
    "filterInstitution": [ INSTITUTION_ID ],
    "filterStatus": [ StatusEnum.EXPIRED ]
}

ConsentUtils.getConsentsUsingGET(opts, function(error, consents){
    if (consents) {
        if (consents.data.length > 0) {
            for (i = 0; i < consents.data.length; i++) {
                ConsentUtils.deleteConsentUsingDELETE(consents.data[i].id, null);
            }
        } else {
            console.log("There are no EXPIRED consents to delete for this user and institution")
        }   
    }
})
