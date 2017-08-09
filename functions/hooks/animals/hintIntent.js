'use strict';

const SimpleIntent = require('../shared/simpleIntent');
const utils = require('../shared/_utils');
const animalData = require('./animalData');
const chooseGameData = require('../chooseGame/chooseGameData');

const INTENT_ID = 'intent.auntie.animal.hint';
const CONTEXT_ANIMAL_SOUNDS = "context_game_animal";

class HintIntent extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {

        let intro = 'This one was hard, guess it with this hint';

console.log(app.data.answer);
        // if is not set hintCounter, initialize it to 0
        // should not be greater than 3 because choose game should manage rounds ... !
        app.data.answer.hintCounter = app.data.answer.hintCounter || 0;
        // affect actual hint var to the hint x and increment at the same time
        let hint = app.data.answer.hints[app.data.answer.hintCounter++] || 'Oh, i\'m a afraid, i have none to help you, try my friend';

        app.setContext(CONTEXT_ANIMAL_SOUNDS, utils.DEFAULT_LIFESPAN, {});
        app.ask(`<speak>${intro}. ${hint}</speak>`);
    }
}

module.exports = HintIntent;