'use strict';

/**
 * @ngdoc function
 * @name michaelRojasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the michaelRojasApp
 */
angular.module('michaelRojasApp')
    .controller('MainCtrl', function ($http, $uibModal, SliderService, ProgressService, PortfolioService, ResumeService, SerializeService) {
        var vm = this;
        vm.contact = {isProcessing: false};
        vm.sliders = SliderService.list();
        vm.progress = ProgressService.list();
        vm.portfolio = PortfolioService.list();
        vm.resume = ResumeService.list();
        vm.wowDelay = "500ms";
        vm.wowDuration = "1000ms";

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

        vm.fnSendMail = function(contact){
            contact.isProcessing = true;
            var clone = angular.copy(contact);
            delete clone.isProcessing;
            $http({
                method: 'POST',
                url: 'contact_me.php',
                data: SerializeService.serialize(clone),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function () {
                contact.isProcessing = false;
                toastr.success("Email send successfully.", "Thank you!");
            }, function () {
                contact.isProcessing = false;
                toastr.error("Email not send. Please try again.");
            });
        };

        vm.fnInitMainPage = function(){
            vm.fnNavigation();
            new WOW().init();
        };

    });
