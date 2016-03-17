'use strict';

(function() {
    
    angular.module('phonecatApp', ['ngRoute', 'phonecatControllers', 'phonecatFilters', 'phonecatServices', 'phonecatAnimations'])
        .config(['$routeProvider', RouteConfig]);
    
    function RouteConfig($routeProvider) {
                
        $routeProvider.
          when('/phones', {
              templateUrl: 'partials/phone-list.html',
              controller: 'PhoneListCtrl'
          }).
          when('/phones/:phoneId', {
              templateUrl: 'partials/phone-detail.html',
              controller: 'PhoneDetailCtrl'
          }).
          otherwise({
              redirectTo: '/phones'
          });
    }

})();