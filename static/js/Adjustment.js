angular.module('app.adjustment', [])

.controller('AdjustmentCtrl', function($scope, $ionicHistory) {
	$scope.goBack=function() {
		$ionicHistory.goBack();
	}
})