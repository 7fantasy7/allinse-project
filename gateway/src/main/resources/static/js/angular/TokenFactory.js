/**
 * Created by root on 22.09.2016.
 */
'use strict';

app.factory('$mediator', function ($rootScope) {

    function getOauthTokenFromSession() {
        return sessionStorage.getItem('token');
    }

    function removeOauthTokenFromSession() {
        return sessionStorage.removeItem('token');
    }

});