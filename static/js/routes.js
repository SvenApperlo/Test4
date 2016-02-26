angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
        
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })

    .state('main', {
      url: '/main',
      abstract:true,
      templateUrl: 'templates/menu.html',
      controller: 'MainCtrl'
    })

    .state('main.content', {
      url:'/main_content',
      views: {
        'menuContent': {
          templateUrl: 'templates/main.html',
          controller:'MainCtrl'
        }
      }
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});