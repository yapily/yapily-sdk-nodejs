var YapilyApi = require('yapily_api');
var constants = require('./constants.js');

var defaultClient = YapilyApi.ApiClient.instance;

var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = constants.APPLICATION_ID
basicAuth.password = constants.APPLICATION_SECRET

var api = new YapilyApi.InstitutionsApi()

api.getInstitutionsUsingGET(
    function(error, institutions, response) {
        if (error) {
            console.error(error);
        } else {
            institutions.data.map(function(institution) {
                console.log(institution.id)
            });

            var institution = institutions.data[0];

            api.getInstitutionUsingGET(institution.id,
                function(error, data, response) {
                    if(error) {
                        console.error(error);
                    } else {
                        console.log(institution.id);
                    }
                }
            );
        }
    });
