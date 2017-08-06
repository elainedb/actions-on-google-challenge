'use strict';

const SimpleIntent = require('../shared/simpleIntent');

const INTENT_ID = 'intent.auntie.game.animal.repeat';

class Repeat extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {
        app.ask(`<speak> ${app.data.question} </speak>`);
    }
}

module.exports = Repeat;