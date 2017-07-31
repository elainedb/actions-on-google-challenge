'use strict';

const SimpleIntent = require('../simpleIntent');

const utils = require('../_utils');

const INTENT_ID = 'input.game.animal';

const ANIMAL_SOUNDS = [
    "Can you guess this one ? Wof! Wof!",
    "Which animal i am ? Meeooow"
];

class AnimalGame extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {
        const animalSounds = (app.data.animalSounds || ANIMAL_SOUNDS).slice();

        if (!animalSounds) {
            app.tell('You\'ve found then all! You\'re the best!');
            return;
        }

        // TODO lifespan ?
        app.tell(utils.randomFromArray(ANIMAL_SOUNDS, true));
    }
}

module.exports = AnimalGame;