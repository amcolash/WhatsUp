angular.module('app.factories', [])

.factory('Credentials', ['keys', '$cordovaOauth', function (keys, $cordovaOauth) {
  return function (authMethod) {
    var promise = new Promise(function (resolve, reject) {
      // Redirect login method
      if (ionic.Platform.isAndroid() && window.cordova) {
        if (authMethod === "google") {
          window.plugins.googleplus.login({
            'offline': true,
            'webClientId': keys.googleId,
          },
            function (oauth) {
              resolve(firebase.auth.GoogleAuthProvider.credential(oauth.idToken));
            },
            function (error) {
              console.error('Error: ' + JSON.stringify(error));
              reject(error);
            });
        } else if (authMethod === "twitter") {
          $cordovaOauth.twitter(keys.twitterId, keys.twitterSecret).then(function (oauth) {
            deferred.resolve(firebase.auth.TwitterAuthProvider.credential(oauth.oauth_token, oauth.oauth_token_secret));
          }, function (error) {
            console.error("Error: " + JSON.stringify(error));
            reject(error);
          });
        } else if (authMethod === "facebook") {
          $cordovaOauth.facebook(keys.facebookId, keys.facebookSecret).then(function (oauth) {
            deferred.resolve(firebase.auth.FacebookAuthProvider.credential(oauth.oauth_token, oauth.oauth_token_secret));
          }, function (error) {
            console.error("Error: " + JSON.stringify(error));
            reject(error);
          });
        }
      } else {
        if (authMethod === "google") {
          resolve(new firebase.auth.GoogleAuthProvider());
        } else if (authMethod === "twitter") {
          resolve(new firebase.auth.TwitterAuthProvider());
        } else if (authMethod === "facebook") {
          resolve(new firebase.auth.FacebookAuthProvider());
        }
      }
    });

    return promise;
  }
}])

.factory('FBEventSearch', ['$http', 'keys', function($http, keys) {
  var promise = new Promise(function(resolve, reject) {
    $http.get("https://graph.facebook.com/oauth/access_token?client_id=" + keys.facebookId + "&client_secret=" + keys.facebookSecret + "&grant_type=client_credentials")
      .then(function (response) {
        var search = new EventSearch({ "accessToken": response.data.access_token })
        resolve(search);
      }).catch(function (error) {
        reject(error);
      });
  });

  return promise;
}])

.factory('Auth', ['$firebaseAuth', function ($firebaseAuth) {
  return $firebaseAuth();
}])


.factory('Settings', ['Auth', '$firebaseObject', function(Auth, $firebaseObject) {
  var ref = firebase.database().ref('users/' + Auth.$getAuth().uid + '/settings');
  return $firebaseObject(ref).$loaded();
}])

.factory('CustomEvents', ['Auth', '$firebaseObject', function (Auth, $firebaseObject) {
  var ref = firebase.database().ref('events/').orderByChild('creator').equalTo(Auth.$getAuth().uid);
  return $firebaseObject(ref).$loaded();
}])

.factory('GeoFire', ['$firebaseObject', function ($firebaseObject) {
  var ref = firebase.database().ref('geo');
  var geoFire = new GeoFire(ref);

  var query;
  var events = [];

  var updateQuery = function(config) {
    var eventIDs = [];
    events = []; // Clear existing events

    var promise = new Promise(function (resolve, reject) {
      if (query) query.cancel();

      query = geoFire.query(config);

      query.on("ready", function () {
        var promises = [];

        for (var i = 0; i < eventIDs.length; i++) {
          var ref = firebase.database().ref('events/' + eventIDs[i]);
          promises.push(ref.once("value"));
        }

        Promise.settleAll(promises).then(function(data) {
          for (var i = 0; i < data.length; i++) {
            events.push(data[i].val());
          }

          resolve(events);
        }).catch(function(error) {
          console.error(error);
          reject();
        });
      })

      query.on("key_entered", function (key, location) {
        eventIDs.push(key);
      });

      query.on("key_exited", function (key, location) {
        var index = eventIDs.indexOf(key);
        if (index > -1) eventIDs.splice(index, 1);
      });
    });

    return promise;
  };

  return { geoFire: geoFire, updateQuery: updateQuery, events: events };
}])

.factory('MyEvents', ['Auth', '$firebaseArray', function (Auth, $firebaseArray) {
  var ref = firebase.database().ref('users/' + Auth.$getAuth().uid + '/myevents');
  return $firebaseArray(ref).$loaded();
}])

.factory('Favorites', ['Auth', '$firebaseArray', function (Auth, $firebaseArray) {
  var ref = firebase.database().ref('users/' + Auth.$getAuth().uid + '/favorites');
  var array = $firebaseArray(ref);

  var addFavorite = function(event) {
    array.$add({ id: event.id });
  }

  var removeFavorite = function(event) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].id === event.id) {
        array.$remove(i);
      }
    }
  }
  
  var isFavorite = function (event) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].id === event.id) return true;
    }
    return false;
  }

  var toggleFavorite = function (event) {
    if (isFavorite(event)) {
      removeFavorite(event);
    } else {
      addFavorite(event);
    }
  }

  return {
    isFavorite: isFavorite,
    toggleFavorite: toggleFavorite,
    promise: array.$loaded()
  };
}])