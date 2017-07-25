'use strict';

const SimpleIntent = require('./simpleIntent');

const utils = require('./_utils');

const INTENT_ID = 'input.welcome';

const SENTENCES = [
    "Hi little one! I am your cool auntie, let's play together :)",
    "Hello there, glad to hear you.",
    "Hi again, I hope you are doing great.",
];

class Welcome extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {
        app.tell(utils.randomFromArray(SENTENCES));
    }
}

module.exports = Welcome;