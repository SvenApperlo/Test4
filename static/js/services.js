angular.module('alessio.services', [])

.factory('BlankFactory', [function(){

}])

.service('alessioService', function ($http, Backand) {
  var baseUrl = '/1/objects/';
  var objectName = 'userinfo/';
 
  function getUrl() {
    return Backand.getApiUrl() + baseUrl + objectName;
  }
 
  function getUrlForId(id) {
    return getUrl() + id;
  }
  
  getUsers = function () {
    return $http.get(getUrl());
  }
 
  addUser = function(User) {
    return $http.post(getUrl(), User);
  }
  
  deleteUser = function (id) {
    return $http.delete(getUrlForId(id));
  };
 
  return {
    getUsers: getUsers,
    addUser: addUser,
    deleteUser: deleteUser
  }
})

.service('BlankService', [function(){

}]);

