/**
 * Created by root on 22.09.2016.
 */
'use strict';

app.factory('tokenFactory', function ($rootScope) {
    
    function getOauthTokenFromSession() {
        return sessionStorage.getItem('token');
    }

    function removeOauthTokenFromSession() {
        console.log("removeOauthTokenFromSession");
        return sessionStorage.removeItem('token');
    }
    function setOauthTokenFromSession(token) {
        return sessionStorage.setItem("token", token);
    }
    
    return {
        setOauthTokenFromSession: function(token) {return setOauthTokenFromSession(token);},
        getOauthTokenFromSession: function() {return getOauthTokenFromSession();},
        removeOauthTokenFromSession: function() {return removeOauthTokenFromSession();}
    }
});