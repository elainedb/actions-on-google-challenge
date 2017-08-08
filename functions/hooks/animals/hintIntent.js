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
    }
}

module.exports = HintIntent;