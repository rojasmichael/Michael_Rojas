'use strict';

/**
 * Created by Nirmal Solanki on 7/31/2016.
 * @ngdoc function
 * @name michaelRojasApp.service:ProgressService
 * @description
 * # ProgressService
 * service of the michaelRojasApp
 */
angular.module('michaelRojasApp')
    .factory('ProgressService', function () {
        var progress = [
            {
                name: "User Experiences",
                value: 95
            }, {
                name: "Web Design",
                value: 65
            }, {
                name: "Programming",
                value: 72
            }, {
                name: "Javascript",
                value: 60
            }, {
                name: "jQuery",
                value: 75
            }, {
                name: "Angular",
                value: 80
            }, {
                name: "HTML",
                value: 85
            }, {
                name: "CSS",
                value: 80
            }
        ];
        return {
            list: function () {
                return progress;
            }
        };
    });

