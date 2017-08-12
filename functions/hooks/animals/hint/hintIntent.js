'use strict';

const SimpleIntent = require('../../shared/simpleIntent');
const utils = require('../../shared/_utils');

const animalData = require('../animalData');
const chooseGameData = require('../../chooseGame/chooseGameData');

const HintManager = require('./hintManager');
const HintSentenceBuilder = require('./hintSentencesBuilder');

const INTENT_ID = 'intent.auntie.animal.hint';
const CONTEXT_ANIMAL_SOUNDS = "context_game_animal";

class HintIntent extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {

        let hintManager = new HintManager();
        console.log(app);
        let hintSentenceBuilder = new HintSentenceBuilder(app);

        let hintIndex = hintManager.incrementHintCounter(app.data.answer);

        app.setContext(CONTEXT_ANIMAL_SOUNDS, utils.DEFAULT_LIFESPAN, {});
        app.ask(`<speak>
            ${hintSentenceBuilder.getRandomIntro()}.
            ${hintSentenceBuilder.getHint(app.data.answer, hintIndex)}
        </speak>`);
    }
}

module.exports = HintIntent;