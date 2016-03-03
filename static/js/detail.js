angular.module('app.detail', [])

.controller('DetailCtrl', function($scope, $ionicHistory) {
	$scope.goBack=function() {
		$ionicHistory.goBack();
	}
})