'use strict';

(function() {
    
    angular.module('phonecatControllers', [])
    .controller('PhoneListCtrl', ['$scope', 'Phone', PhoneListCtrl])
    .controller('PhoneDetailCtrl', ['$scope', '$stateParams', '$state', 'Phone', PhoneDetailCtrl])
    .run(['$rootScope', function($rootScope) {
        $rootScope.$on('queryEmit', function(event, args) {
            $rootScope.$broadcast('queryBroadcast', args);
        });
    }]);

    function PhoneListCtrl($scope, Phone) {

        $scope.phones = Phone.query();

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
    
    function PhoneDetailCtrl($scope, $stateParams, $state, Phone) {
        $scope.phoneId = $stateParams.phoneId;

		$scope.phone = Phone.get({phoneId: $stateParams.phoneId}, function(phone) {
			
			if(phone.images == null) {
				$state.go('home', null, { location: "replace" });
				return;
			}
			
			$scope.mainImageUrl = phone.images[0];
			
		}, function (error) {
			
		});
        
        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
        
        $scope.hello = function(name) {
            alert('Hello ' + (name || 'world') + '!');
        }
    }
    
})();