/**
 * Created by root on 22.09.2016.
 */
'use strict';

app.controller('OAuth2Controller', function ($scope, $http, tokenFactory, particlesFactory, $httpParamSerializerJQLike) {

    $scope.userData = {};

    $scope.auth = function () {
        login($scope.userData.login, $scope.userData.password);
    };
    particlesFactory.particlesRun;
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
            sessionStorage.setItem("token", data.access_token);
            console.log(data.access_token);
            getCurrentAccount();

        }).error(function(data, status, headers, config) {
            alertify.error("Invalid login: <b style='color: #3c3c3c'>"+login+"</b> or password: <b style='color: #3c3c3c'>"+password+"</b> <br/> status " + status);
        });
        

    }

    function getCurrentAccount() {

        var token = tokenFactory.getOauthTokenFromSession;
        console.log(token);

        if(token) {
            $http({
                method: 'GET',
                url: '/uaa/users/current',
                headers: {'Authorization': 'Bearer ' + token}
            }).success(function (data, status, headers, config) {
                alertify.success("Success! OAuth2 your token = <b style='color: #3c3c3c'>" + tokenFactory.getOauthTokenFromSession + "</b>");
                window.location.replace("/index.html");
                console.log(data);
            }).error(function (status) {
                tokenFactory.removeOauthTokenFromSession;
                alertify.error("Access is denied " + status);
            });
        }
    }

});