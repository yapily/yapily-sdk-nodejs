var ApplicationUserUtils = require('./ApplicationUserUtils');
/**
 * - Create 2 users with reference "A" and "B"
 * - Loop through all users and log the reference Id
 * - Find the user with reference "A" by it's UUID
 * - Delete users with reference "A" and "B"
 */
ApplicationUserUtils.addUserUsingPOST("A", function(error, userA) {
    if(userA) {
        ApplicationUserUtils.addUserUsingPOST("B", function(error, userB) {
            if(userB){
                ApplicationUserUtils.getUsersUsingGET(function(error, users) {
    
                    if(users) {
                        users.map(function(user) {  
                            console.log("Found user: ", user.referenceId);
                        });

                        ApplicationUserUtils.getUserUsingGET(userA.uuid, function(error, user){
                            ApplicationUserUtils.deleteUserUsingDELETE(userA, null);
                            ApplicationUserUtils.deleteUserUsingDELETE(userB, null);
                        });
                    }
                })
            }
        });
    }
});

