'use strict';

module.exports.get = function() {
    return Math.random();
};

module.exports.getArbitrary = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

module.exports.getInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

module.exports.getIntInclusive = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};