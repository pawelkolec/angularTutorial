'use strict';

/* Filters */
(function () {
    
    angular.module('phonecatFilters', [])
    .filter('checkmark', Checkmark);
            
    function Checkmark() {
        
        return function(input) {
            return input ? '\u2713' : '\u2718';
        }
    }

})();