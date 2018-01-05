angular.module('app.eventList', [])

.factory('EventList', ['$http', 'Event', 'Location', 'FBEventSearch', 'keys', function ($http, Event, Location, FBEventSearch, keys) {

  var eventList = {};
  
  eventList.search = function (position) {
    var promise = new Promise(function (resolve, reject) {
    
      if (eventList.data) {
        console.log("using cached data");
        resolve(eventList.data);
      }

      var distance = 5;
      var logEvents = false;
      var maxEvents = 50;
      var endTime = new Date();
      var trimEvents = true;
      endTime.setDate(endTime.getDate() + 3); // Search 3 days out

      var config = {
        distance,
        endTime,
        logEvents,
        maxEvents,
        position
      };

      // Run all promises, do not fail on promises that are rejected
      Promise.settleAll([
        // Comment these out to disable specific services from the event search
        fbPromise(config),
        meetupPromise(config),
        eventbritePromise(config)
      ])
      .then(function (allData) {
        var events = [];
        var categories = [];

        // Can't seem to loop over set in this version of angular
        tmpCategories = new Set();
        
        var trimmed = 0;
        for (var i = 0; i < allData.length; i++) {
          var data = allData[i];
          for (var j = 0; j < data.length; j++) {

            // Cut things that are longer than 3 days
            if (!trimEvents || new Date(data[j].endTime) - new Date(data[j].startTime) < (1000 * 60 * 60 * 24 * 3)) {
              events.push(data[j]);
              if (data[j].category) {
                tmpCategories.add(data[j].category);
              }
            } else {
              trimmed++;
            }
          }
        }
        if (logEvents) console.log("trimmed " + trimmed + " events longer than 3 days");

        events.sort(function(a, b) {
          return new Date(a.startTime) - new Date(b.startTime);
        });

        // seems like angular doesn't like sets, so pushing to an array
        for (let category of tmpCategories) {
          categories.push(category);
        }
        categories.push("All");
        categories.sort();

        console.log(categories);

        eventList.data = { events, categories, position };

        resolve(eventList.data);
      }).catch(function (error) {
        console.error(JSON.stringify(error));
        reject(error);
      });

    });

    return promise;
  }

  eventList.reset = function() {
    eventList.data = undefined;
  }

  function fbPromise(config) {
    // fb events
    return new Promise(function (resolve, reject) {
      FBEventSearch.then(function (eventSearch) {
        eventSearch.search({
          "lat": config.position.lat,
          "lng": config.position.lng,
          "distance": config.distance * 1609.34,
          "until": config.endTime.toISOStringCustom()
        }).then(function (events) {
          if (config.logEvents) console.log(events.events);

          var tmpEvents = [];
          for (var i = 0; i < events.events.length; i++) {
            tmpEvents.push(Event.convertFBEvent(events.events[i]));
          }
          return resolve(tmpEvents);
        }).catch(function (error) {
          return reject(error);
        });
      }).catch(function (error) {
        reject(error);
      });
    });
  }

  function meetupPromise(config) {
    // meetup events
    return new Promise(function (resolve, reject) {
      var url = "https://api.meetup.com/find/upcoming_events?sign=true&photo-host=public&fields=featured_photo,group_photo,group_category,plain_text_no_images_description&lat="
        + config.position.lat + "&lon=" + config.position.lng + "&page=" + config.maxEvents + "&end_date_range="
        + config.endTime.toISOStringCustom() + "&callback=JSON_CALLBACK&radius=" + config.distance + "&key=" + keys.meetupSecret;

      $http.jsonp(url)
        .success(function (response) {
          if (response.data.errors) return reject(response.data.errors);

          if (config.logEvents) console.log(response.data.events);
          var tmpEvents = [];
          for (var i = 0; i < response.data.events.length; i++) {
            tmpEvents.push(Event.convertMeetupEvent(response.data.events[i], config.position));
          }
          return resolve(tmpEvents);
        }).catch(function (error) {
          return reject(error);
        });
    });
  }

  function eventbritePromise(config) {
    // eventbrite events
    return new Promise(function (resolve, reject) {
      var url = "https://www.eventbriteapi.com/v3/events/search/?expand=venue,category,subcategory&location.latitude=" + config.position.lat
        + "&location.longitude=" + config.position.lng + "&location.within=" + config.distance + "mi&start_date.range_end="
        + config.endTime.toISOStringCustom() + "&token=" + keys.eventbriteSecret;

      $http.get(url)
        .success(function (response) {
          if (config.logEvents) console.log(response.events);

          var tmpEvents = [];
          for (var i = 0; i < response.events.length; i++) {
            tmpEvents.push(Event.convertEventbriteEvent(response.events[i], config.position));
          }
          return resolve(tmpEvents);
        }).catch(function (error) {
          return reject(error);
        });
    });
  }


  return eventList;
}]);