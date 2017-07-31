'use strict';

/**
 * Pick a random element from an array. The source array is not modified unless removePicked is true, then
 * the picked element is removed from source array
 *
 * @param array {[]} source array
 * @param removePicked {boolean=}
 * @return {*} picked element on null if array is null or empty
 */
exports.randomFromArray = function (array, removePicked) {
    if (!array || array.length === 0) {
        return null;
    }
    const index = Math.floor(Math.random() * array.length);
    const picked = array[index];
    if (removePicked) {
        array.splice(index, 1);
    }
    return picked;
};