'use strict';

const SimpleIntent = require('./simpleIntent');

const utils = require('./_utils');

const INTENT_ID = 'auntie.game.animal';

const ENTITY_ANIMAL = "animal";

const SENTENCES = [
    "Hi little one! I am your cool auntie, let's play together :)",
    "Hello there, glad to hear you.",
    "Hi again, I hope you are doing great.",
];

class AnimalSoundsAnswer extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {
        if (app.data.answer === app.getArgument(ENTITY_ANIMAL)) {
            app.ask("yoohoo!");
        } else {
            app.ask("too bad");
        }
        
    }
}

module.exports = AnimalSoundsAnswer;