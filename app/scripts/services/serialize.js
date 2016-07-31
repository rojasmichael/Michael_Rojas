'use strict';

/**
 * Created by Nirmal Solanki on 7/31/2016.
 * @ngdoc function
 * @name michaelRojasApp.service:SerializeService
 * @description
 * # SerializeService
 * service of the michaelRojasApp
 */
angular.module('michaelRojasApp')
    .factory('SerializeService', function () {
        /**
         * The workhorse; converts an object to x-www-form-urlencoded serialization.
         * @param {Object} obj
         * @return {String}
         */
        return {
            serialize: function (obj) {
                var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

                for (name in obj) {
                    value = obj[name];

                    if (value instanceof Array) {
                        for (i = 0; i < value.length; ++i) {
                            subValue = value[i];
                            fullSubName = name + '[' + i + ']';
                            innerObj = {};
                            innerObj[fullSubName] = subValue;
                            query += this.serialize(innerObj) + '&';
                        }
                    }
                    else if (value instanceof Object) {
                        for (subName in value) {
                            subValue = value[subName];
                            fullSubName = name + '[' + subName + ']';
                            innerObj = {};
                            innerObj[fullSubName] = subValue;
                            query += this.serialize(innerObj) + '&';
                        }
                    }
                    else if (angular.isDefined(value) && value !== null){
                        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
                    }
                }
                return query.length ? query.substr(0, query.length - 1) : query;
            }
        };
    });

