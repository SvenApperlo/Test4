angular.module('app.editcustomer', [])

.controller('EditCustomerCtrl', function($scope, $state, $ionicHistory) {
	$scope.goBack=function() {
		$state.go('main.customers');
	}
})