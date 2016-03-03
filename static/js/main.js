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
})