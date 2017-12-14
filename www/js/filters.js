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

.filter('locationMap', function () {
    return function (input) {
        return input.street + ", " + input.city + ", " + input.state + " " + input.zip;;
    }
})

.filter('location', function() {
    return function(input) {
        var loc = "";

        if (input.name) loc += input.name + " (";
        loc += input.street + ", " + input.city + ", " + input.state + " " + input.zip;
        if (input.name) loc += ")";

        return loc;
    }
})