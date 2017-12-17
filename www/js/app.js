// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'app' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var ionicApp = angular.module('app', [
  // Base
  'ionic',
  'firebase',

  // App
  'app.controllers',
  'app.directives',
  'app.factories',
  'app.filters',

  'app.event',
  'app.eventList',
  'app.keys',

  // Libs
  'hm.readmore',
  'ngCordovaOauth',
  'ngGeolocation'
])

.run(['keys', function (keys) {
  if (keys.googleId.length == 0) {
    console.error("Missing googleId for Oauth");
  }
  // if (keys.twitterId.length == 0) {
  //   console.error("Missing twitterId for Oauth");
  // }
  // if (keys.twitterSecret.length == 0) {
  //   console.error("Missing twitterSecret for Oauth");
  // }
  if (keys.facebookId.length == 0) {
    console.error("Missing facebookId for Oauth");
  }
  if (keys.facebookSecret.length == 0) {
    console.error("Missing facebookSecret for Oauth");
  }
}])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  var config = {
    apiKey: "AIzaSyB5IMgeGJSB0qsY3jhZ49ewH8iVd8jEpvo",
    authDomain: "whatsup-346bd.firebaseapp.com",
    databaseURL: "https://whatsup-346bd.firebaseio.com",
    projectId: "whatsup-346bd",
    storageBucket: "whatsup-346bd.appspot.com",
    messagingSenderId: "669727991231"
  };
  
  firebase.initializeApp(config);
})

.run(['$rootScope', '$state', '$ionicLoading', 'Auth', function ($rootScope, $state, $ionicLoading, Auth) {
  $rootScope.appName = "What's Up";

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, error) {
    // Prevent going back to the login page after a successful authentication
    if (toState.name === 'login' && Auth.$getAuth()) {
      event.preventDefault();
    }

    if (toState.name !== 'error' && !navigator.onLine) {
      event.preventDefault();
      $state.go('error');
    }

    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });
  });

  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    $ionicLoading.hide();
    // We can catch the error thrown when the $requireSignIn promise is rejected
    // and redirect the user back to the home page
    if (error === 'AUTH_REQUIRED') {
      console.error('not authenticated');
      $state.go('login');
    } else {
      console.log("state change error")
      $state.go('error');
    }
  });

  $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, error) {
    $ionicLoading.hide();
  });

  // When logging in / logging out, change states automatically
  Auth.$onAuthStateChanged(function (authData) {
    if (authData) {
      // Go to dashboard after logging in
      if ($state.current.name === "login") {
        $state.go('app.eventList');
      }
    } else {
      // Go back to login when logging out
      $state.go('login');
    }
  });
}])

// If this is a desktop app, might want to disable drag scrolling
.config(['$ionicConfigProvider', function ($ionicConfigProvider) {
  $ionicConfigProvider.scrolling.jsScrolling(false);
}])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginController'
    })

    .state('error', {
      url: '/error',
      templateUrl: 'templates/error.html',
      controller: 'ErrorController'
    })

    .state('app', {
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'MenuController',
      // main app controller will not be loaded until $requireSignIn resolves
      // Auth refers to our $firebaseAuth wrapper in the factory below
      // $requireSignIn returns a promise so the resolve waits for it to complete
      // If the promise is rejected, it will throw a $stateChangeError (see above)
      resolve: {
        'currentAuth': ['Auth', function(Auth) {
          return Auth.$requireSignIn();
        }]
      }
    })

    .state('app.eventList', {
      url: '/',
      views: {
        'menuContent': {
          templateUrl: 'templates/eventList.html',
          controller: 'EventListController'
        }
      }
    })

    .state('app.upload', {
      url: '/upload',
      views: {
        'menuContent': {
          templateUrl: 'templates/upload.html',
          controller: 'UploadController'
        }
      }
    })

    .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings.html',
          controller: 'SettingsController'
        }
      }
    })

    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
})

;
