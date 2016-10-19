/**
 * Created by root on 12.09.2016.
 */
'use strict';
var app = angular.module('app', ['ui.router', 'ngAlertify']);

app.run( ['$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
]);

app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('loadApp', {
                url: '/',
                views: {
                    'headerLayout': {
                        templateUrl: 'template/layout/loadHeader.html',
                        controller: 'LoadController'
                    },
                    'footerLayout': {
                        templateUrl: 'template/layout/loadFooter.html'
                    }
                }
            })
            .state('signin', {
                url: '/sign-in',
                views: {
                    'headerLayout': {
                        templateUrl: 'template/layout/login/loginHeader.html'
                    },
                    'footerLayout': {
                        templateUrl: 'template/layout/login/loginFooter.html'
                    },
                    'content': {
                        templateUrl: 'template/layout/login/login.html',
                        controller: 'OAuth2Controller'
                    }

                }

            })
            .state('clients', {
                url: '/cl',
                views: {
                    'headerLayout': {
                        templateUrl: 'template/layout/appHeader.html'
                    },
                    'footerLayout': {
                        templateUrl: 'template/layout/appFooter.html'
                    },
                    'content': {
                        templateUrl: 'template/layout/clients/clients.html'
                    }
                }
            })
            .state('finance', {
                url: '/fn',
                views: {
                    'headerLayout': {
                        templateUrl: 'template/layout/appHeader.html'
                    },
                    'footerLayout': {
                        templateUrl: 'template/layout/appFooter.html'
                    },
                    'content': {
                        templateUrl: 'template/layout/finance/finance.html'
                    }
                }
            })
}]);