'use strict';

(function () {

    angular.module('phonecatServices', ['ngResource'])
    .factory('Phone', ['$resource', ResourcePhone]);
    
    function ResourcePhone($resource) {
        return $resource('phones/:phoneId.json', {}, {
            query: { method:'GET', params: { phoneId:'phones' }, isArray:true }
        });
    }
})();