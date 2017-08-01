'use strict';

const SimpleIntent = require('./simpleIntent');

const utils = require('./_utils');

const INTENT_ID = 'auntie.game.animal';

const ENTITY_ANIMAL = "animal";


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