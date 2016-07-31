'use strict';

/**
 * Created by Nirmal Solanki on 7/31/2016.
 * @ngdoc function
 * @name michaelRojasApp.directive:pageHeight
 * @description
 * # pageHeight
 * directive of the michaelRojasApp
 */
angular.module('michaelRojasApp')
    .directive('pageHeight', function ($window) {
        return {
            scope: {
                imageHeight: "="
            },
            link: function (scope, element) {
                var styleProp = scope.imageHeight ? "height" : "min-height";
                element.css(styleProp, angular.element($window).height());
                angular.element($window).on('resize', function () {
                    element.css(styleProp, angular.element($window).height());
                });
            }
        };
    });
