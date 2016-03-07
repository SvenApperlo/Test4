angular.module('app.main', [])

.controller('MainCtrl', function($scope, $state, $ionicSideMenuDelegate ) {
	$scope.goDetail = function(){
		$state.go('detail');
	};

	$scope.goCitasPendient=function() {
		$state.go('main.citasPendient');
	}

	$scope.goAddAppointment=function() {
		$state.go('main.addappointment');	
	}
	$scope.goCustomers=function() {
		$state.go('main.customers');	
	}
	$scope.goAdjustment=function() {
		$state.go('main.adjustment');	
	}
	$scope.goNewAppointment=function() {
		$state.go('main.addappointment');	
	}
	$scope.goDiary=function() {
		$state.go('main.content');	
	}
})