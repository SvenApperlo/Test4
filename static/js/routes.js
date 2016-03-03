angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('top');
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
          controller:'ContentCtrl'
        }
      }
    })

    .state('main.citasPendient', {
      url:'/citasPendient',
      views: {
        'menuContent': {
          templateUrl: 'templates/citasPendient.html',
          controller:'PendientCtrl'
        }
      }
    })

    .state('main.addappointment', {
      url:'/addappointment',
      views: {
        'menuContent': {
          templateUrl: 'templates/AddAppointment.html',
          controller:'AddAppointmentCtrl'
        }
      }
    })

    .state('main.addappointment.newclient', {
      url:'/newclient',
      views: {
        'addtab': {
          templateUrl: 'templates/NewClient.html',
          controller:'NewClientCtrl'
        }
      }
    })

    .state('main.addappointment.existclient', {
      url:'/existclient',
      views: {
        'existtab': {
          templateUrl: 'templates/ExistClient.html',
          controller:'ExistClientCtrl'
        }
      }
    })

    .state('detail', {
      url: '/detail',
      templateUrl: 'templates/detail.html',
      controller: 'DetailCtrl'
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});