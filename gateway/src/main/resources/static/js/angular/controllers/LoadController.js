/**
 * Created by root on 05.10.2016.
 */
'use strict';
app.controller('LoadController', function ($scope, tokenFactory, $timeout, $state) {
    $timeout(function(){
        if(tokenFactory.getOauthTokenFromSession()!=null){
                $state.go('finance');
            } else {
            $state.go('signin');
        }
    }, 3000);
});