angular.module('app.controllers', [])

.controller('MenuController', ['$scope', 'Auth', 'Settings', 'Storage', function($scope, Auth, Settings, Storage) {
  Settings.then(function(data) {
    $scope.settings = data;
  });

  Storage.then(function(data) {
    $scope.fileList = data.fileList;
    $scope.storage = data.storage;
  });

  $scope.signOut = function() {
    // Remember to clean up references to FireBase objects/arrays here, otherwise you will get a ton of errors on a logout.
    if ($scope.settings) {
      $scope.settings.$destroy();
    }

    if ($scope.fileList) {
      $scope.fileList.$destroy();
    }

    Auth.$signOut();
  }
}])

.controller('ErrorController', ['$interval', '$scope', '$state', function($interval, $scope, $state) {
  $scope.check = $interval(function() {
    if (navigator.onLine) {
      $interval.cancel($scope.check);
      $state.go('app.dashboard');
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

.controller('DashboardController', ['$http', '$ionicLoading', '$ionicPopup', '$scope', 'Event', 'Location', 'keys', 'EventSearch',
    function($http, $ionicLoading, $ionicPopup, $scope, Event, Location, keys, EventSearch) {
  $scope.distance = 1;
  $scope.location;
  $scope.eventSearch;
  $scope.events;

  $scope.fbLoading = false;
  $scope.meetupLoading = false;

  EventSearch.then(function(data) {
    $scope.eventSearch = data;
    $scope.search();
  });

  $scope.sortEvent = function (event) {
    var date = new Date(event.startTime);
    return date;
  };

  $scope.search = function() {
    navigator.geolocation.getCurrentPosition(function (position) {
      $scope.position = position;
      $scope.location = "(Using Your GPS Location)";
      
      $ionicLoading.show();

      // fb events
      var fbPromise = new Promise(function (resolve, reject) {
        $scope.eventSearch.search({
          "lat": position.coords.latitude,
          "lng": position.coords.longitude,
          "distance": $scope.distance * 1609.34
        }).then(function (events) {
          var tmpEvents = [];
          for (var i = 0; i < events.events.length; i++) {
            tmpEvents.push(Event.convertFBEvent(events.events[i]));
          }
          // return resolve([]);
          return resolve(tmpEvents);
        }).catch(function (error) {
          return reject(error);
        });
      });

      // meetup events
      var meetupPromise = new Promise(function (resolve, reject) {
        var url = "https://api.meetup.com/find/upcoming_events?sign=true&photo-host=public&fields=featured_photo&lat="
          + position.coords.latitude + "&lon=" + position.coords.longitude + "&page=100&callback=JSON_CALLBACK&radius="
          + $scope.distance + "&key=" + keys.meetupSecret;

        $http.jsonp(url)
        .success(function (response) {
          var events = [];
          for (var i = 0; i < response.data.events.length; i++) {
            events.push(Event.convertMeetupEvent(response.data.events[i], position));
          }
          // return resolve([]);
          return resolve(events);
        }).catch(function (error) {
          return reject(error);
        });
      });
      
      // eventbrite events
      var eventbritePromise = new Promise(function (resolve, reject) {
        var url = "https://www.eventbriteapi.com/v3/events/search/?expand=venue&location.latitude=" + position.coords.latitude
          + "&location.longitude=" + position.coords.longitude + "&location.within=" + $scope.distance + "mi&token=" + keys.eventbriteSecret;

        $http.get(url)
        .success(function (response) {
          var events = [];
          for (var i = 0; i < response.events.length; i++) {
            events.push(Event.convertEventbriteEvent(response.events[i], position));
          }
          // return resolve([]);
          return resolve(events);
        }).catch(function (error) {
          return reject(error);
        });
      });

      Promise.all([fbPromise, meetupPromise, eventbritePromise])
      .then(function (allData) {
        $scope.events = [];
        for (var i = 0; i < allData.length; i++) {
          var data = allData[i];
          for (var j = 0; j < data.length; j++) {
            $scope.events.push(data[j]);
          }
        }
        $scope.$apply();
        $ionicLoading.hide();
      }).catch(function (error) {
        console.error(JSON.stringify(error));
      });

    }, function (error) {
      console.error(error);
      if (error.code === 1) {
        $ionicPopup.alert({
          title: 'Denied Location Access',
          template: 'It looks like you denied location access, you need to enable it for this page to use our service.'
        });
      }
    });
  }

}])

.controller('UploadController', ['$scope', '$timeout', 'Storage', function($scope, $timeout, Storage) {
  Storage.then(function(data) {
    $scope.fileList = data.fileList;
    $scope.storage = data.storage;
  });

  $scope.uploadProgress = 0;
  $scope.showSuccess = false;
  $scope.showError = false;

  $scope.uploadFile = function() {
    if ($scope.files !== undefined) {
      // Make the progress bar show up at the beginning of the upload
      $scope.uploadProgress = 5;

      var file = $scope.files[0];
      var originalName = file.name;
      var name = new Date().getTime().toString() + '.' + file.name.split('.').pop();
      var uploadTask = $scope.storage.child(name).put(file);

      uploadTask.on('state_changed', function(snapshot) {
        // Observe state change events such as progress, pause, and resume
        $scope.uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        $scope.$apply();
      }, function(error) {
        // Handle unsuccessful uploads
        $scope.showError = true;
        console.error(error);
      }, function() {
        // Handle successful uploads
        var dateObj = new Date();

        var file = {
          date: dateObj.toDateString(),
          time: dateObj.toTimeString(),
          name: name,
          original: originalName,
          url: uploadTask.snapshot.downloadURL,
        }

        console.log("upload complete");

        $scope.fileList.$add(file);
        $scope.showSuccess = true;
      })

      uploadTask.then(function() {
        $scope.uploadProgress = 0;

        $timeout(function() {
          $scope.showSuccess = false;
          $scope.showError = false;
        }, 3500);
      })


    } else {
      console.error("No file selected to upload!");
    }
  }

  $scope.removeFile = function(file) {
    var name = file.name;
    var uploadTask = $scope.storage.child(name).delete().then(function() {
      console.log("successfully removed file");
      $scope.fileList.$remove(file);
    }).catch(function(error) {
      console.error(error);
    });
  }
}])

.controller('SettingsController', ['$scope', '$state', 'Settings', function($scope, $state, Settings) {
  Settings.then(function(data) {
    data.$bindTo($scope, "settings").then(function(unbind) {
      $scope.$on('$ionicView.beforeLeave', function() {
        unbind();
      })
    });
  });
}])
