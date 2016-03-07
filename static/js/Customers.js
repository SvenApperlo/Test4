angular.module('main.customers', [])

.controller('CustomersCtrl', function($scope, $state) {
	$scope.goEditCustomer=function() {
		$state.go('editcustomer');
	}
	$scope.goAddCustomer = function() {
		$state.go('addcustomer');
	}
})