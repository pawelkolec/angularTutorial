'use strict';

(function() {
    
    angular.module('phonecatApp', ['ui.router', 'phonecatControllers', 'phonecatFilters', 'phonecatServices', 'phonecatAnimations'])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', RouteConfig]);
    
    function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
		
           
        $stateProvider
			.state('home', {
				url: "/",
				views: {
					'header': {
						templateUrl: 'partials/header.html'
					},
					'content': {
						templateUrl: 'partials/phone-list.html',
						controller: 'PhoneListCtrl'
					}
        		}
			})
			.state('home.phoneDetails', {
				url: "phone/:phoneId",
				views: {
					'content@': {
						templateUrl: 'partials/phone-detail.html',
						controller: 'PhoneDetailCtrl'
					}
        		}
			});
		
		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});
		
		$urlRouterProvider.otherwise("/");
    }

})();