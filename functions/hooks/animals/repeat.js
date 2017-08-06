'use strict';

const SimpleIntent = require('../shared/simpleIntent');
const utils = require('../shared/_utils');

const INTENT_ID = 'intent.auntie.game.animal.repeat';

const CONTEXT_CHOOSE_GAME = "context_choose_game";
const DEFAULT_LIFESPAN = 5;

const SENTENCES = [
    "OK, let's play ",
    "Cool, let's play ",
    "Yeah! Let's play "
];

class Repeat extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {
        app.ask(`<speak> ${app.data.question} </speak>`);
    }
}

module.exports = Repeat;