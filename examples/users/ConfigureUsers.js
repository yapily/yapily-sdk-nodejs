var ApplicationUserUtils = require('./ApplicationUserUtils');
/**
 * - Create a user with applicationUserId "A"
 * - Create a user with applicationUserId "B"
 * - Find all the users with the applicationUserIds "A" and "B"
 * - Use the UUIDs to delete the users with applicationUserId "A" and "B"
 */
ApplicationUserUtils.addUserUsingPOST("A", function(error, userA) {
    if(userA) {
        ApplicationUserUtils.addUserUsingPOST("B", function(error, userB) {
            if(userB){
                applicationUserIds = ["A", "B", "node-sdk@yapily.com"];
                ApplicationUserUtils.getUsersUsingGET(applicationUserIds, function(error, users) {
                    if(users) {
                        users.map(function(user) {  
                            console.log("Found user: ", user.applicationUserId);
                        });

                        users.map(function(user) {
                            ApplicationUserUtils.deleteUserUsingDELETE(user, null);
                        });
                    }
                });
            }
        });
    }
});

