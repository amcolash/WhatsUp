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

.controller('EventListController', ['$geolocation', '$ionicLoading', '$ionicPopup', '$scope', 'EventList', 'Settings',
    function ($geolocation, $ionicLoading, $ionicPopup, $scope, EventList, Settings) {
  $scope.events;
  $scope.searchText = "";
  $scope.categories;
  $scope.selectedCategory;
  $scope.position;

  Settings.then(function (data) {
    if (data.location) {
      $scope.position = data.location;
      $scope.search();
    } else {
      $geolocation.getCurrentPosition({
        timeout: 30000
      }).then(function (position) {
        $scope.position = { lat: position.coords.latitude, lng: position.coords.longitude };
        $scope.search();
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
    }
  });

  $scope.search = function() {
    $ionicLoading.show({ "showBackdrop": false });

    EventList.search($scope.position).then(function (data) {
      $ionicLoading.hide();

      $scope.categories = data.categories;
      $scope.events = data.events;
      $scope.selectedCategory = "All";
    }).catch(function (error) {
      $ionicLoading.hide();
      console.error(error);
    });
  }

  $scope.clearSearch = function() {
    // Make this click feel more responsive
    var button = angular.element(document.querySelector('#clearButton'));
    if (button) button.addClass("ng-hide");

    $scope.searchText = "";
  };
}])

.controller('MapController', ['$geolocation', '$ionicLoading', '$ionicPopup', '$scope', 'EventList', 'NgMap', 'Settings',
  function ($geolocation, $ionicLoading, $ionicPopup, $scope, EventList, NgMap, Settings) {

    $scope.events;
    $scope.map;
    $scope.position;
    $scope.selectedEvent;

    Settings.then(function (data) {
      if (data.location) {
        $scope.position = data.location;
        $scope.search();
      } else {
        $geolocation.getCurrentPosition({
          timeout: 30000
        }).then(function (position) {
          $scope.position = { lat: position.coords.latitude, lng: position.coords.longitude };
          $scope.search();
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
      }
    });

    $scope.search = function () {
      $ionicLoading.show({ "showBackdrop": false });

      EventList.search($scope.position).then(function (data) {
        $ionicLoading.hide();

        $scope.events = data.events;

        NgMap.getMap().then(function (map) {
          $scope.map = map;

          map.setCenter($scope.position);
          map.setZoom(15);
        });
      }).catch(function (error) {
        $ionicLoading.hide();
        console.error(error);
      });
    }

    $scope.showDetail = function (e, event) {
      $scope.selectedEvent = event;
      $scope.map.showInfoWindow('info-window', event.id);
    }
}])

.controller('SettingsController', ['$ionicPopup', '$scope', '$state', 'Auth', 'EventList', 'NgMap', 'Settings',
    function($ionicPopup, $scope, $state, Auth, EventList, NgMap, Settings) {
  Settings.then(function(data) {
    data.$bindTo($scope, "settings").then(function(unbind) {
      $scope.$on('$ionicView.beforeLeave', function() {
        unbind();
      })
    });
  });

  $scope.clearLocation = function() {
    console.log("clear")
    $scope.settings.location = {};
    $scope.settings.locationFriendly = "";
    EventList.reset();
  }

  $scope.placeChanged = function() {
    $scope.settings.location = { lat: this.getPlace().geometry.location.lat(), lng: this.getPlace().geometry.location.lng() };
    EventList.reset();
  }

  // not worrying about errors right now
  $scope.signOut = function () {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Log Out',
      template: 'Are you sure you want to log out?'
    });

    confirmPopup.then(function (res) {
      if (res) {
        Auth.$signOut();
      }
    });
  }
}])
