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
        var loc = "";

        if (input.street) loc += input.street;
        if (input.city) loc += (loc.length > 0 ? ", " : "") + input.city;
        if (input.state) loc += (loc.length > 0 ? ", " : "") + input.state;
        if (input.zip) loc += (loc.length > 0 ? " " : "") + input.zip;

        if (input.name && loc.length == 0) loc = input.name;

        return loc;
    }
})

.filter('location', function() {
    return function(input) {
        var loc = "";

        if (input.street) loc += input.street;
        if (input.city) loc += (loc.length > 0 ? ", " : "") + input.city;
        if (input.state) loc += (loc.length > 0 ? ", " : "") + input.state;
        if (input.zip) loc += (loc.length > 0 ? " " : "") + input.zip;
        
        if (input.name && loc.length > 0) {
            loc = input.name + " (" + loc + ")";
        } else {
            loc = input.name;
        }

        return loc;
    }
})

.filter('categoryFilter', function () {
    return function (events, category) {
        if (category === undefined || category === "All") {
            return events;
        } else {
            var data = [];
            for (var i = 0; i < events.length; i++) {
                if (events[i].category === category) data.push(events[i]);
            }

            return data;
        }
    }
})

.filter('upcomingFilter', function () {
    return function (events) {
        var data = [];

        if (events) {
            var now = new Date();
            for (var i = 0; i < events.length; i++) {
                if (new Date(events[i].endTime) > now) {
                    data.push(events[i]);
                }
            }
        }

        return data;
    }
})

// Found at: https://justinklemm.com/angularjs-filter-ordering-objects-ngrepeat/
.filter('orderObjectBy', function () {
    return function (items, field, reverse) {
        var filtered = [];
        angular.forEach(items, function (item) {
            filtered.push(item);
        });
        filtered.sort(function (a, b) {
            return (a[field] > b[field] ? 1 : -1);
        });
        if (reverse) filtered.reverse();
        return filtered;
    };
})


;