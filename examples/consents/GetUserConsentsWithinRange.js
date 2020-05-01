var ConsentUtils = require('./ConsentsUtils');

var OCT_21_2019 = "2019-10-21T00:00:00.000Z"
var NOV_21_2019 = "2019-11-21T00:00:00.000Z"

opts1 = {
    "from": OCT_21_2019
}

ConsentUtils.getConsentsUsingGET(opts1, function(error, response) {
    
});

opts2 = {
    "before": OCT_21_2019
}

ConsentUtils.getConsentsUsingGET(opts2, function(error, response) {
    
});

opts3 = {
    "from": OCT_21_2019,
    "before": NOV_21_2019
}

ConsentUtils.getConsentsUsingGET(opts3, function(error, response) {
    
});

opts4 = {
    "from": OCT_21_2019,
    "before": NOV_21_2019,
    "limit": 3
}

ConsentUtils.getConsentsUsingGET(opts4, function(error, response) {
    
});
