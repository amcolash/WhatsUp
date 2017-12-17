// Slightly different format of the standard Date.toISOString()
if (!Date.prototype.toISOStringCustom) {
    (function () {
        function pad(number) {
            if (number < 10) {
                return '0' + number;
            }
            return number;
        }

        Date.prototype.toISOStringCustom = function () {
            return this.getUTCFullYear() +
                '-' + pad(this.getUTCMonth() + 1) +
                '-' + pad(this.getUTCDate()) +
                'T' + pad(this.getUTCHours()) +
                ':' + pad(this.getUTCMinutes()) +
                ':' + pad(this.getUTCSeconds());
        };
    }());
}

// settle all promises.  For rejeted promises, return a specific rejectVal that is
// distinguishable from your successful return values (often null or 0 or "" or {})
Promise.settleAll = function (promises) {
    return Promise.all(promises.map(function (p) {
        // make sure any values or foreign promises are wrapped in a promise
        return Promise.resolve(p).catch(function (err) {
            console.error(err);
            // instead of rejection, just return the rejectVal (often null or 0 or "" or {})
            return [];
        });
    }));
};