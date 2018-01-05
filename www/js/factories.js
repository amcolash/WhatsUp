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

// Use for favorites I think
.factory('MyEvents', ['Auth', '$firebaseArray', function (Auth, $firebaseArray) {
  var ref = firebase.database().ref('users/' + Auth.$getAuth().uid + '/myevents');
  return $firebaseArray(ref).$loaded();
}])