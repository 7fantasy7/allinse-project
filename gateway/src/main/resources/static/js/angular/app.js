/**
 * Created by root on 12.09.2016.
 */
'use strict';
var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('loadApp', {
                url: '/',
                //abstract: true,
                views: {
                    'headerLayout': {
                        templateUrl: 'template/layout/loadHeader.html'
                    },
                    'footerLayout': {
                        templateUrl: 'template/layout/loadFooter.html'
                    }
                }
            })
            /*.state('app', {
                url: '',
                //abstract: true,
                templateUrl: 'mainLayout.html'
            })
            .state('OAuth2', {
                url: '',
                abstract: true,
                templateUrl: 'loginLayout.html'
            })*/
            .state('signin', {
                url: '/login',
                views: {
                    'headerLayout': {
                        templateUrl: 'template/layout/loginHeader.html'
                    },
                    'view1': {
                        templateUrl: 'template/login.html'
                    },
                    'footerLayout': {
                        templateUrl: 'template/layout/loginFooter.html'
                    }
                }
            })
            
}]);