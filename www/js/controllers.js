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

        if (error.error.code === 1 && !data.gpsFailed) {
          data.gpsFailed = true;
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

.controller('MapController', ['$geolocation', '$ionicLoading', '$ionicPopup', '$scope', '$timeout', 'EventList', 'NgMap', 'Settings',
  function ($geolocation, $ionicLoading, $ionicPopup, $scope, $timeout, EventList, NgMap, Settings) {

    $scope.events;
    $scope.map;
    $scope.position;
    $scope.selectedEvent;
    $scope.radius = 30;
    $scope.theta = 0;

    $scope.intervalFunction = function () {
      $timeout(function () {
        $scope.radius = Math.abs(Math.sin($scope.theta)) * 15 + 35;
        $scope.theta += .1;
        $scope.intervalFunction();
      }, 100)
    };

    $scope.intervalFunction();

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

          if (error.error.code === 1 && !data.gpsFailed) {
            data.gpsFailed = true;
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

    $scope.centerMap = function() {
      $scope.map.setCenter($scope.position);
      $scope.map.setZoom(15);
    }
}])

.controller('SettingsController', ['$ionicHistory', '$ionicPopup', '$scope', '$state', 'Auth', 'Credentials', 'EventList', 'NgMap', 'Settings',
    function($ionicHistory, $ionicPopup, $scope, $state, Auth, Credentials, EventList, NgMap, Settings) {
  Settings.then(function(data) {
    data.$bindTo($scope, "settings").then(function(unbind) {
      $scope.$on('$ionicView.beforeLeave', function() {
        unbind();
      })
    });
  });

  $scope.auth = Auth;
  $scope.credentials = Credentials;

  $scope.googleAuth;
  $scope.facebookAuth;

  $scope.updateProviders = function (init) {
    $scope.googleAuth = undefined;
    $scope.facebookAuth = undefined;

    var providerData = $scope.auth.$getAuth().providerData;
    for (var i = 0; i < providerData.length; i++) {
      if (providerData[i].providerId === "google.com") {
        $scope.googleAuth = providerData[i];
      } else if (providerData[i].providerId === "facebook.com") {
        $scope.facebookAuth = providerData[i];
        console.log(providerData)
      }
    }

    if (!init) {
      $scope.$apply();
    }
  }

  // Do this after the function is defined
  $scope.updateProviders(true);

  $scope.unlink = function (authMethod) {
    if (authMethod === "google") {
      var id = $scope.googleAuth.providerId;
    } else if (authMethod === "facebook") {
      var id = $scope.facebookAuth.providerId;
    }

    $scope.auth.$getAuth().unlink(id).then(function (result) {
      console.log("Success unlinking: " + authMethod);
      $scope.updateProviders();
    }).catch(function (error) {
      console.error("Error: " + JSON.stringify(error));
      $scope.updateProviders();
    });

  }

  $scope.link = function (authMethod) {
    console.log($scope.auth)

    $scope.credentials(authMethod).then(function (credential) {
      if (ionic.Platform.isAndroid() && window.cordova) {
        $scope.auth.$getAuth().link(credential).then(function (result) {
          console.log("Success linking: " + authMethod);
          $scope.updateProviders();
        }).catch(function (error) {
          console.error("Error: " + JSON.stringify(error));
          $scope.updateProviders();
        });
      } else {
        $scope.auth.$getAuth().linkWithPopup(credential).then(function (result) {
          console.log("Success linking: " + authMethod);
          $scope.updateProviders();
        }).catch(function (error) {
          console.error("Error: " + JSON.stringify(error));
          $scope.updateProviders();
        });
      }
    }, function (error) {
      console.error("Error: " + JSON.stringify(error));
      $scope.updateProviders();
    })
  }

  // Needed to get the autocomplete working
  $scope.disableTap = function () {
    container = document.getElementsByClassName('pac-container');
    // disable ionic data tab
    angular.element(container).attr('data-tap-disabled', 'true');
    // leave input field if google-address-entry is selected
    angular.element(container).on("click", function () {
      document.getElementById('autocomplete').blur();
    });
  }

  $scope.clearLocation = function() {
    $scope.settings.location = {};
    $scope.settings.locationFriendly = "";
    $scope.reset();
  }

  $scope.placeChanged = function() {
    $scope.settings.location = { lat: this.getPlace().geometry.location.lat(), lng: this.getPlace().geometry.location.lng() };
    $scope.reset();
  }

  $scope.reset = function() {
    EventList.reset();
    $scope.settings.gpsFailed = false;
    $ionicHistory.clearCache();
    $ionicHistory.clearHistory();
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
