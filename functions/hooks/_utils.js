'use strict';

exports.getRandomSentence = function(sentences) {
    return sentences[Math.floor(Math.random() * images.length)];
}