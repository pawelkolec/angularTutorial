'use strict';

(function () {

    angular.module('phonecatServices', ['ngResource'])
    .factory('Phone', ['$resource', ResourcePhone]);
    
    function ResourcePhone($resource) {
        return $resource('api/phones/:phoneId', {}, {
            query: { method:'GET', params: { phoneId:'' }, isArray:true }
        });
    }
})();