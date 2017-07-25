'use strict';

exports.randomFromArray = function (array) {
    return array[Math.floor(Math.random() * array.length)];
};