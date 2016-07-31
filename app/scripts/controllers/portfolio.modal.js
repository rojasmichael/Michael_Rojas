'use strict';

/**
 * @ngdoc function
 * @name michaelRojasApp.controller:PortfolioModalCtrl
 * @description
 * # PortfolioModalCtrl
 * Controller of the michaelRojasApp
 */
angular.module('michaelRojasApp')
    .controller('PortfolioModalCtrl', function ($uibModalInstance, portfolioItem) {
        var vm = this;
        vm.portfolioItem = portfolioItem;

        vm.fnCancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    });
