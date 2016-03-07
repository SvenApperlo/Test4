angular.module('app.addcustomer', [])

.controller('AddCustomerCtrl', function($scope, $state, $ionicHistory) {
	$scope.goBack=function() {
		$state.go('main.customers');
	}
})