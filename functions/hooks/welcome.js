'use strict';
const utils = require('./_utils');

const SENTENCES = [
    "Hi little one! I am your cool auntie, let's play together :)",
    "Hello there, glad to hear you.",
    "Hi again, I hope you are doing great.",
];

exports.welcome = function welcome(app) {
    app.tell(utils.getRandomSentence(SENTENCES));
};