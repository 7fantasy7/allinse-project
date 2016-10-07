/**
 * Created by root on 22.09.2016.
 */
'use strict';

app.controller('OAuth2Controller', function ($scope, $http, tokenFactory, $httpParamSerializerJQLike, alertify, $state) {

    $scope.userData = {};

    $scope.auth = function () {
        login($scope.userData.login, $scope.userData.password);
    };

    console.log("hello");


    /**
     *  Getting a token from the OAuth2 services
     * @param login
     * @param password
     * @returns {boolean}
     */
    function login(login, password) {
        

        $http({
            method: 'POST',
            url: '/uaa/oauth/token',
            headers: {'Content-Type': 'application/x-www-form-urlencoded','Authorization': 'Basic YnJvd3Nlcjo='},
            data: $httpParamSerializerJQLike({
                scope: 'ui',
                username: login,
                password: password,
                grant_type: 'password'
            })
        }).success(function(data, status, headers, config) {
            tokenFactory.setOauthTokenFromSession(data.access_token);
            console.log(tokenFactory.getOauthTokenFromSession());
            getCurrentAccount();
            //alertify.success("Success! OAuth2 your token = <b style='color: #3c3c3c'>" + tokenFactory.getOauthTokenFromSession + "</b>");

        }).error(function(data, status, headers, config) {
            alertify.error("Invalid login: <b style='color: #3c3c3c'>"+login+"</b> or password: <b style='color: #3c3c3c'>"+password+"</b> <br/> status " + status);
        });
        

    }

    function getCurrentAccount() {
        
        console.log(tokenFactory.getOauthTokenFromSession());

        if(tokenFactory.getOauthTokenFromSession()) {
            $http({
                method: 'GET',
                url: '/uaa/users/current',
                headers: {'Authorization': 'Bearer ' + tokenFactory.getOauthTokenFromSession()}
            }).success(function (data, status, headers, config) {
                alertify.delay(2000).success("Success! OAuth2 your token = <b style='color: #3c3c3c'>" + tokenFactory.getOauthTokenFromSession() + "</b>");
                $state.go('loadApp');
            }).error(function (data, status, headers, config) {
                //tokenFactory.removeOauthTokenFromSession;
                alertify.error("Access is denied " + status);
            });
        }
    }

});