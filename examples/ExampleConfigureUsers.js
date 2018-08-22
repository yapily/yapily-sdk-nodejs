var constants = require('./constants.js');
var YapilyApi = require('yapily_api');

var defaultClient = YapilyApi.ApiClient.instance;

var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = constants.APPLICATION_ID
basicAuth.password = constants.APPLICATION_SECRET

var api = new YapilyApi.ApplicationUsersApi()

var firstUser =  {"referenceId":"yourUsersReferenceId"}

api.addUserUsingPOST(firstUser,function(error, userAdded) {

 if(error) {
    console.error(error)
 } else{

    var secondUser = new YapilyApi.ApplicationUser()
    secondUser.referenceId= "yourSecondUsersReferenceId"

    api.addUserUsingPOST(secondUser,function(error,user) {

        if(error) {
            console.error(error);
        } else {

            api.getUsersUsingGET(function(error,users) {

                users.map(function(user) {
                    console.log(user.referenceId)
                });

                var user = users[0]

                api.deleteUserUsingDELETE(user.uuid,function(error,result) {

                    console.log("Deleted user %s",user.referenceId)
                })
            })
        }
    });
 }
});
