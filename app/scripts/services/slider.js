'use strict';

/**
 * Created by Nirmal Solanki on 7/31/2016.
 * @ngdoc function
 * @name michaelRojasApp.service:SliderService
 * @description
 * # SliderService
 * service of the michaelRojasApp
 */
angular.module('michaelRojasApp')
    .factory('SliderService', function () {
        var sliders = [
            {
                title: "I'm <span>Michael Rojas</span>",
                sub_titles: ["Web Programer From Gujarat, India"],
                image: "images/slider/1.jpg"
            },
            {
                title: "Say Hello to <span>Michael</span>",
                sub_titles: [
                    "Javascript - jQuery - Angular JS - Node JS - D3 JS - C3 JS",
                    "Bootstrap -  Angular Material - Zurb Foundation"],
                image: "images/slider/2.jpg"
            },
            {
                title: "I'm <span>Creative</span>",
                sub_titles: ["Website - Responsive Design - REST API"],
                image: "images/slider/3.jpg"
            }
        ];
        return {
            list: function () {
                return sliders;
            }
        };
    });

