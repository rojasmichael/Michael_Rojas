'use strict';

/**
 * Created by Nirmal Solanki on 7/31/2016.
 * @ngdoc function
 * @name michaelRojasApp.directive:progressBar
 * @description
 * # progressBar
 * directive of the michaelRojasApp
 */
angular.module('michaelRojasApp')
    .directive('progressBar', function ($window) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                // Progress Bar
                angular.element(element).bind('inview', function (event, visible, visiblePartX, visiblePartY) {
                    if (visible) {
                        $.each(angular.element('div.progress-bar'), function () {
                            angular.element(this).css('width', angular.element(this).attr('aria-valuetransitiongoal') + '%');
                        });
                        angular.element(this).unbind('inview');
                    }
                });
            }
        };
    });
