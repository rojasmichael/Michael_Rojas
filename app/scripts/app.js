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
        'ui.bootstrap',
        'duScroll'
    ])
    .config(function ($routeProvider, $locationProvider) {

        // Set options third-party lib
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };

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

