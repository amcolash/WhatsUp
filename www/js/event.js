angular.module('app.event', [])

/* Shared Event Format */

.factory('Event', ['Location', function (Location) {
    function Event(name, description, url, startTime, endTime, icon, attending, picture, location) {
        // Required
        this.name = name;
        this.description = description;
        this.url = url;
        this.startTime = startTime;
        this.endTime = endTime;
        this.icon = icon;
        this.attending = attending;

        // Optional
        this.picture = picture;
        this.location = location;
    }

    Event.convertFBEvent = function(fbEvent) {
        var name = fbEvent.name;
        var description = fbEvent.description;
        var url = "https://www.facebook.com/events/" + fbEvent.id;
        var startTime = fbEvent.startTime;
        var endTime = fbEvent.endTime;
        var icon = "ion-social-facebook";
        var attending = fbEvent.stats.attending;
        var picture = fbEvent.coverPicture;

        var street = fbEvent.place.location.street;
        var city = fbEvent.place.location.city;
        var state = fbEvent.place.location.state;
        var zip = fbEvent.place.location.zip;
        var lat = fbEvent.place.location.latitude;
        var lng = fbEvent.place.location.longitude;
        var distance = fbEvent.distance;
        var locationName = fbEvent.place.name;

        var location = new Location(street, city, state, zip, lat, lng, distance, locationName);

        return new Event(name, description, url, startTime, endTime, icon, attending, picture, location);
    }

    Event.convertMeetupEvent = function (meetupEvent, position) {
        var name = meetupEvent.group.name + " - " + meetupEvent.name;
        var description = meetupEvent.description;
        var url = meetupEvent.link;
        var startTime = meetupEvent.time;
        var endTime = meetupEvent.time + meetupEvent.duration;
        var icon = "ion-person-stalker";
        var attending = meetupEvent.yes_rsvp_count;

        if (meetupEvent.featured_photo) {
            var picture = meetupEvent.featured_photo.thumb_link;
        }

        if (meetupEvent.venue) {
            var street = (meetupEvent.venue.address_1 ? meetupEvent.venue.address_1 : "") + (meetupEvent.venue.address_2 ? meetupEvent.venue.address_2 : "");
            var city = meetupEvent.venue.city;
            var state = meetupEvent.venue.state;
            var zip = meetupEvent.venue.zip;
            var lat = meetupEvent.venue.lat;
            var lng = meetupEvent.venue.lon;
            var distance = measureGeo(position.coords.latitude, position.coords.longitude, lat, lng);

            var location = new Location(street, city, state, zip, lat, lng, distance);
        }

        var newEvent = new Event(name, description, url, startTime, endTime, icon, attending, picture, location);
        return newEvent;
    }

    Event.convertEventbriteEvent = function (eventbriteEvent, position) {
        var name = eventbriteEvent.name.text;
        var description = eventbriteEvent.description.text;
        var url = eventbriteEvent.url;
        var startTime = eventbriteEvent.start.utc;
        var endTime = eventbriteEvent.end.utc;
        var icon = "ion-card";
        var attending; // Maybe we want this?
        var picture = eventbriteEvent.logo ? eventbriteEvent.logo.url : undefined;

        if (eventbriteEvent.venue) {
            var street;
            if (eventbriteEvent.venue.address.address_1 !== null) street = eventbriteEvent.venue.address.address_1;
            if (eventbriteEvent.venue.address.address_2 !== null) street += " " + eventbriteEvent.venue.address.address_2;

            var city = eventbriteEvent.venue.address.city;
            var state = eventbriteEvent.venue.address.region;
            var zip = eventbriteEvent.venue.address.postal_code === null ? undefined : eventbriteEvent.venue.postal_code;
            var lat = eventbriteEvent.venue.latitude;
            var lng = eventbriteEvent.venue.longitude;
            var distance = measureGeo(position.coords.latitude, position.coords.longitude, lat, lng);
            var locationName = eventbriteEvent.venue.name;

            var location = new Location(street, city, state, zip, lat, lng, distance, locationName);
        }

        var newEvent = new Event(name, description, url, startTime, endTime, icon, attending, picture, location);
        return newEvent;
    }

    // generally used geo measurement function
    function measureGeo(lat1, lon1, lat2, lon2) {
        var rad = 0.0174533;
        var R = 6378.137; // Radius of earth in KM
        var dLat = lat2 * rad - lat1 * rad;
        var dLon = lon2 * rad - lon1 * rad;
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * rad) * Math.cos(lat2 * rad) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d * 1000; // meters
    }

    return Event;
}])

.factory('Location', function() {
    function Location(street, city, state, zip, lat, lng, distance, name) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.lat = lat;
        this.lng = lng;
        this.distance = distance;

        // Optional
        this.name = name;
    }

    return Location;
})