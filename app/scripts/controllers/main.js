'use strict';

/**
 * @ngdoc function
 * @name michaelRojasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the michaelRojasApp
 */
angular.module('michaelRojasApp')
    .controller('MainCtrl', function (SliderService) {
        var vm = this;
        vm.sliders = SliderService.list();

        vm.fnNavigation = function(){
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
