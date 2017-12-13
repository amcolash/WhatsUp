angular.module('app.filters', [])

.filter('metersToMiles', function () {
    return function (input) {
        return (input * 0.000621371).toFixed(2);
    }
})

.filter('milesToMeters', function () {
    return function (input) {
        return (input * 1609.34).toFixed(2);
    }
})

.filter('totalAttending', function () {
    return function (input) {
        return input.attending + input.maybe;
    }
})

.filter('location', function() {
    return function(input) {
        var loc = input.street;

        if (input.name) loc = "(" + input.name + ") " + loc;
        if (input.city) loc += ", " + input.city;
        if (input.state) loc += ", " + input.state;
        if (input.zip) loc += " " + input.zip;

        return loc;
    }
})