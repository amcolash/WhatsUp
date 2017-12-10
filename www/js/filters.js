angular.module('app.filters', [])

.filter('metersToMiles', function () {
    return function (input) {
        return (input * 0.000621371).toFixed(2);
    }
})

.filter('totalAttending', function () {
    return function (input) {
        return input.attending + input.maybe;
    }
})

.filter('location', function() {
    return function(input) {
        return input.street + ", " + input.city + ", " + input.state + " " + input.zip + ")";
    }
})