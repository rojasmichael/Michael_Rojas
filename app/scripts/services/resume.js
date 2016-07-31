'use strict';

/**
 * Created by Nirmal Solanki on 7/31/2016.
 * @ngdoc function
 * @name michaelRojasApp.service:ResumeService
 * @description
 * # ResumeService
 * service of the michaelRojasApp
 */
angular.module('michaelRojasApp')
    .factory('ResumeService', function () {
        var resume = [
            {
                heading: "2009-2011",
                sub_heading: "Our Humble Beginnings",
                image: "images/resume/1.jpg",
                details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
            }, {
                heading: "March 2011",
                sub_heading: "An Agency is Born",
                image: "images/resume/2.jpg",
                details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
            }, {
                heading: "December 2012",
                sub_heading: "Transition to Full Service",
                image: "images/resume/3.jpg",
                details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
            }, {
                heading: "July 2014",
                sub_heading: "Phase Two Expansion",
                image: "images/resume/4.jpg",
                details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
            }
        ];
        return {
            list: function () {
                return resume;
            }
        };
    });

