'use strict';

/**
 * @ngdoc function
 * @name michaelRojasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the michaelRojasApp
 */
angular.module('michaelRojasApp')
    .controller('MainCtrl', function ($uibModal, SliderService, PortfolioService) {
        var vm = this;
        vm.sliders = SliderService.list();
        vm.portfolio = PortfolioService.list();

        vm.fnNavigation = function(){
            // Offset for Main Navigation
            angular.element('#mainNav').affix({
                offset: {
                    top: 100
                }
            });
        };

        vm.fnOpenPortfolioModal = function (item) {
            $uibModal.open({
                animation: true,
                templateUrl: 'views/portfolio.modal.html',
                controller: 'PortfolioModalCtrl as pm',
                size: 'md',
                resolve: {
                    portfolioItem: function () {
                        return item;
                    }
                }
            });
        };


        vm.fnInitMainPage = function(){
            vm.fnNavigation();
        };

    });
