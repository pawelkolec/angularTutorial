'use strict';

(function() {
    
    angular.module('phonecatControllers', [])
    .controller('PhoneListCtrl', ['$scope', '$http', PhoneListCtrl])
    .controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', PhoneDetailCtrl])
    .run(['$rootScope', function($rootScope) {
        $rootScope.$on('queryEmit', function(event, args) {
            $rootScope.$broadcast('queryBroadcast', args);
        });
    }]);

    function PhoneListCtrl($scope, $http) {

        $http.get('phones/phones.json').success(function(data) {
            $scope.phones = data;
        });

        $scope.name = "World";
        $scope.query = "";
        $scope.orderProp = 'age';
        
        $scope.queryChanged = function(query) {
            $scope.$emit('queryEmit', { query: query });
        };
        
         $scope.$on('queryBroadcast', function(event, args) {
            $scope.query = args.query;
        });  
    }
    
    function PhoneDetailCtrl($scope, $routeParams, $http) {
        $scope.phoneId = $routeParams.phoneId;
        $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
            $scope.phone = data;
        });
    }
    
})();