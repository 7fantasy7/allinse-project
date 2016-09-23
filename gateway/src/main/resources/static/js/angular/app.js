/**
 * Created by root on 12.09.2016.
 */
'use strict';
var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, checkAuthFactory) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('clients', {
            url: "/clients",
            templateUrl: function (stateParams) {
                checkAuthFactory.checkOAuthToken("/template/clients.html");
            }
        })
});