/**
 * Created by root on 22.09.2016.
 */
'use strict';

app.controller('OAuth2Controller', function ($scope, $http, $mediator, $httpParamSerializerJQLike) {

    $scope.userData = {};

    $scope.auth = function () {
        login($scope.userData.login, $scope.userData.password);
    };

    /**
     *  Getting a token from the OAuth2 services
     * @param login
     * @param password
     * @returns {boolean}
     */
    function login(login, password) {

        var success = false;

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
            success = true;
            /*getCallendar();
            saveCalendar("qweqeqeqe", "qweqe", "TYPE qdsadasd");*/
            getCurrentAccount();
            alertify.success("Success! OAuth2 your token = <b style='color: #3c3c3c'>" + getOauthTokenFromSession() + "</b>");

        }).error(function(data, status, headers, config) {
            alertify.error("Invalid login: <b style='color: #3c3c3c'>"+login+"</b> or password: <b style='color: #3c3c3c'>"+password+"</b> <br/> status " + status);
        });

        return console.log(success);

    }

    function getCurrentAccount() {

        var token = $mediator.getOauthTokenFromSession();
        console.log(token);

        if(token) {
            $http({
                method: 'GET',
                url: '/uaa/users/current',
                headers: {'Authorization': 'Bearer ' + token}
            }).success(function (data, status, headers, config) {
                //window.location.replace("/index.html");
                console.log(data);
            }).error(function (status) {
                $mediator.removeOauthTokenFromSession();
                alertify.error("Access is denied " + status);
            });
        }
    }



});