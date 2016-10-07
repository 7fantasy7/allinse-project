/**
 * Created by root on 23.09.2016.
 */
'use strict';
app.factory('checkAuthFactory', function ($rootScope, tokenFactory) {

    function checkOAuthToken(template) {
        if(tokenFactory.getOauthTokenFromSession()!= null){
            console.log("if true");
            return template;
        } else {
            console.log("if false");
            return window.location.replace("/login.html");
        }
    }

    return {
        checkOAuthToken: checkOAuthToken(template)
    }
});