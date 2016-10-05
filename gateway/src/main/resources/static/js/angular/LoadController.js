/**
 * Created by root on 05.10.2016.
 */
'use strict';
app.controller('LoadController', function ($scope, tokenFactory, particlesFactory, $timeout, $state) {
    particlesFactory.particlesRefresh;
    particlesFactory.particlesRun;
    $timeout(function(){
        if(tokenFactory.getOauthTokenFromSession!=null){
            $state.go('clients');
        } else {
            $state.go('signin');
        }
    }, 3000);
});