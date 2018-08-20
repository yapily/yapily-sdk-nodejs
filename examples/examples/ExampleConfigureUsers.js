var constants = require('./constants.js');
var YapilyApi = require('yapily_api');

var defaultClient = YapilyApi.ApiClient.instance;

var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = constants.APPLICATION_ID
basicAuth.password = constants.APPLICATION_SECRET

var api = new YapilyApi.ApplicationUsersApi()

var firstUser = new YapilyApi.ApplicationUser()

api.addUserUsingPOST(firstUser,function(error, userAdded) {

 if(error) {
    console.error(error)
 } else{

    var secondUser = new YapilyApi.ApplicationUser()
    secondUser.appUserId = "The application uuid"

    api.addUserUsingPOST(secondUser,function(error,user) {

        if(error) {
            console.error(error);
        } else {

            api.getUsersUsingGET(function(error,users) {

                users.map(function(user) {
                    console.log(user.appUserId)
                });

                var user = users[0]
                user.appUserId = "updated-user-application-id"

                api.updateUserUsingPUT(user.uuid,user,function(error,user) {

                    api.getUserUsingGET(user.uuid,function(error,user) {

                        console.log("Fetched user with uuid %s and user application id %s",user.uuid,user.appUserId)
                    });
                })
            })
        }
    });
 }
});
