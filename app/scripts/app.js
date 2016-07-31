'use strict';

/**
 * @ngdoc overview
 * @name michaelRojasApp
 * @description
 * # michaelRojasApp
 *
 * Main module of the application.
 */
angular
    .module('michaelRojasApp', [
        'ngAnimate',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap'
    ])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });

