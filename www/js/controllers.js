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
    if (authMethod === "anonymous") {
      $scope.auth.$signInAnonymously().catch(function (error) {
        console.error("Error: " + JSON.stringify(error));
      });
    } else {
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
      });
    }
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

.controller('MyEventsController', ['$firebaseObject', '$geolocation', '$ionicModal', '$scope', 'Auth', 'CustomEvents', 'Event', 'EventList', 'MyEvents',
  function ($firebaseObject, $geolocation, $ionicModal, $scope, Auth, CustomEvents, Event, EventList, MyEvents) {
    CustomEvents.then(function(data) {
      $scope.events = data;
    });

    $scope.newEvent = {};
    $scope.categoryList = ["Business", "Crafts", "Dance", "Family & Education", "Film & Media",
      "Fitness", "Food & Drink", "Health", "Music", "Other", "Science & Tech", "Theater", "Travel & Outdoor"];

    $ionicModal.fromTemplateUrl('templates/newEvent.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
    }).catch(function (error) {
      console.error(error);
    });

    $scope.openModal = function () {
      $scope.newEvent = {
        name: "New Event",
        description: "Event Description",
        startTime: new Date(),
        endTime: new Date(),
        category: "Other",
        location: { name: "Test Location" }
      };
      $scope.modal.show();
    };
    $scope.closeModal = function () {
      $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
      $scope.modal.remove();
    });

    // Needed to get the autocomplete working
    $scope.disableTap = function () {
      container = document.getElementsByClassName('pac-container');
      // disable ionic data tab
      angular.element(container).attr('data-tap-disabled', 'true');
      angular.element(container).css('pointer-events', 'auto');
      // leave input field if google-address-entry is selected
      angular.element(container).on("click", function () {
        document.getElementById('autocomplete').blur();
      });
    }

    $scope.clearLocation = function () {
      $scope.newEvent.location = {};
    }

    $scope.placeChanged = function () {
      $scope.newEvent.location.lat = this.getPlace().geometry.location.lat();
      $scope.newEvent.location.lng = this.getPlace().geometry.location.lng();
    }
    
    $scope.createEvent = function() {
      var id = "custom_" + UUIDjs.create();
      var name = $scope.newEvent.name;
      var description = $scope.newEvent.description;
      var url = "url";
      var startTime = $scope.newEvent.startTime.getTime();
      var endTime = $scope.newEvent.endTime.getTime();
      var icon = "icon-users";
      var source = "custom";
      var category = $scope.newEvent.category;
      var cost = 0;
      var attending = 0;
      var picture = "";
      var location = $scope.newEvent.location;

      var event = new Event(id, name, description, url, startTime, endTime, icon, source, category, cost, attending, picture, location);
      event.creator = Auth.$getAuth().uid;
      event.startTimezone = $scope.newEvent.startTime.getTimezoneOffset();
      event.endTimezone = $scope.newEvent.endTime.getTimezoneOffset();

      // Add to custom event list
      $scope.events[event.id] = event;
      $scope.events.$save();

      $scope.closeModal();
    }

    $scope.removeEvent = function(event) {
      $scope.events[event.id] = {};
      $scope.events.$save();
    }
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
  $scope.twitterAuth;

  $scope.updateProviders = function (init) {
    $scope.googleAuth = undefined;
    $scope.facebookAuth = undefined;
    $scope.twitterAuth = undefined;

    var providerData = $scope.auth.$getAuth().providerData;
    for (var i = 0; i < providerData.length; i++) {
      if (providerData[i].providerId === "google.com") {
        $scope.googleAuth = providerData[i];
      } else if (providerData[i].providerId === "facebook.com") {
        $scope.facebookAuth = providerData[i];
      } else if (providerData[i].providerId === "twitter.com") {
        $scope.twitterAuth = providerData[i];
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
    } else if (authMethod === "twitter") {
      var id = $scope.twitterAuth.providerId;
    }

    if (id) {
      $scope.auth.$getAuth().unlink(id).then(function (result) {
        console.log("Success unlinking: " + authMethod);
        $scope.updateProviders();
      }).catch(function (error) {
        console.error("Error: " + JSON.stringify(error));
        $scope.updateProviders();
      });
    }
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
    angular.element(container).css('pointer-events', 'auto');
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
    var warning = (!$scope.googleAuth && !$scope.facebookAuth && !$scope.twitterAuth) ?
      "WARNING: Your account has not been linked to a social media account. If you log out, all user data will be lost!" : "";

    var confirmPopup = $ionicPopup.confirm({
      title: 'Log Out',
      template: 'Are you sure you want to log out? ' + warning
    });

    confirmPopup.then(function (res) {
      if (res) {
        // Clean up state
        EventList.reset();
        $scope.settings.gpsFailed = false;
        $ionicHistory.clearCache();
        $ionicHistory.clearHistory();

        Auth.$signOut();
      }
    });
  }
}])
