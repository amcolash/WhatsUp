angular.module('app.controllers', [])

.controller('ErrorController', ['$interval', '$scope', '$state', function($interval, $scope, $state) {
  $scope.check = $interval(function() {
    if (navigator.onLine) {
      $interval.cancel($scope.check);
      $state.go('app.eventList');
    }
  }, 3000);
}])

.controller('LoginController', ['$scope', 'Auth', 'Credentials', '$ionicPopup', function ($scope, Auth, Credentials, $ionicPopup) {
  $scope.auth = Auth;
  $scope.credentials = Credentials;

  $scope.login = function (authMethod) {
    $scope.credentials(authMethod).then(function (credentials) {
      if (ionic.Platform.isAndroid() && window.cordova) {
        $scope.auth.$signInWithCredential(credentials);
      } else {
        $scope.auth.$signInWithPopup(credentials).catch(function(error) {
          console.error("Error: " + JSON.stringify(error));

          if (error.code && error.code === "auth/account-exists-with-different-credential") {
            $ionicPopup.alert({
              title: 'Existing Account',
              template: 'It looks like you made an account with a different sign-in method, please login with that user account instead.'
            });
          }
        });
      }
    }, function (error) {
      console.error("Error: " + JSON.stringify(error));
    })
  };
}])

.controller('EventListController', ['$geolocation', '$ionicLoading', '$ionicPopup', '$scope', 'EventList',
    function ($geolocation, $ionicLoading, $ionicPopup, $scope, EventList) {
  $scope.events;
  $scope.categories;
  $scope.searchText = "";

  
  $geolocation.getCurrentPosition({
    timeout: 30000
  }).then(function (position) {
    $ionicLoading.show( { "showBackdrop": false });

    EventList.search(position).then(function(data) {
      $ionicLoading.hide();

      $scope.categories = data.categories;
      $scope.events = data.events;
    }).catch(function (error) {
      $ionicLoading.hide();
      console.error(error);
    });
  }).catch(function (error) {
    console.error(error);

    if (error.error.code === 1) {
      $ionicPopup.alert({
        title: 'Denied Location Access',
        template: 'It looks like you denied location access, you need to enable it for location-based features or add your location '
          + 'to the settings page to use our service.'
      });
    }
  });

  $scope.clearSearch = function() {
    // Make this click feel more responsive
    var button = angular.element(document.querySelector('#clearButton'));
    if (button) button.addClass("ng-hide");

    $scope.searchText = "";
  };
}])

.controller('MapController', ['$geolocation', '$ionicLoading', '$ionicPopup', '$scope', 'EventList',
  function ($geolocation, $ionicLoading, $ionicPopup, $scope, EventList) {

    $geolocation.getCurrentPosition({
      timeout: 30000
    }).then(function (position) {
      $ionicLoading.show({ "showBackdrop": false });

      EventList.search(position).then(function (data) {
        $ionicLoading.hide();

        $scope.categories = data.categories;
        $scope.events = data.events;
      }).catch(function (error) {
        $ionicLoading.hide();
        console.error(error);
      });
    }).catch(function (error) {
      console.error(error);

      if (error.error.code === 1) {
        $ionicPopup.alert({
          title: 'Denied Location Access',
          template: 'It looks like you denied location access, you need to enable it for location-based features or add your location '
            + 'to the settings page to use our service.'
        });
      }
    });
}])

.controller('SettingsController', ['$scope', '$state', 'Auth', 'Settings', function($scope, $state, Auth, Settings) {
  Settings.then(function(data) {
    data.$bindTo($scope, "settings").then(function(unbind) {
      $scope.$on('$ionicView.beforeLeave', function() {
        unbind();
      })
    });
  });

  // not worrying about errors right now
  $scope.signOut = function () {
    Auth.$signOut();
  }
}])
