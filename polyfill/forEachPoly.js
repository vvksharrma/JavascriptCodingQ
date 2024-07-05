if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback, thisArg) {
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg || null, this[i], i, this);
        }
    };
}


// with all edge cases
// Check if forEach is not defined on Array.prototype
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback, thisArg) {
        if (this === null || this === undefined) {
            throw new TypeError('Array.prototype.forEach called on null or undefined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }

        var array = Object(this);
        var length = array.length >>> 0; // convert length to unsigned 32-bit integer

        for (var i = 0; i < length; i++) {
            if (i in array) {
                callback.call(thisArg, array[i], i, array);
            }
        }
    };
}
