'use strict';

/**
 * @ngdoc function
 * @name michaelRojasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the michaelRojasApp
 */
angular.module('michaelRojasApp')
    .controller('MainCtrl', function () {
        var vm = this;

        vm.fnNavigation = function(){
            // jQuery for page scrolling feature - requires jQuery Easing plugin
            angular.element('a.page-scroll').bind('click', function (event) {
                var anchor = angular.element(this);
                angular.element('html, body').stop().animate({
                    scrollTop: (angular.element(anchor.attr('href')).offset().top - 50)
                }, 1250, 'easeInOutExpo');
                event.preventDefault();
            });

            // Highlight the top nav as scrolling occurs
            angular.element('body').scrollspy({
                target: '.navbar-fixed-top',
                offset: 51
            });

            // Closes the Responsive Menu on Menu Item Click
            angular.element('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function () {
                angular.element('.navbar-toggle:visible').click();
            });

            // Offset for Main Navigation
            angular.element('#mainNav').affix({
                offset: {
                    top: 100
                }
            });
        };


        vm.fnInitMainPage = function(){
            vm.fnNavigation();
        };

    });
