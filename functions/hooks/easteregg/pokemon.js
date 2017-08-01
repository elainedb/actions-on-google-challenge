'use strict';

const SimpleIntent = require('../shared/simpleIntent');
const utils = require('../shared/_utils');

const INTENT_ID = 'auntie.easteregg.pokemon';

const CONTEXT_CHOOSE_GAME = "choose_game";
const DEFAULT_LIFESPAN = 5;

const ENTITY_POKEMON = "pokemon";

const WELCOME_SENTENCES = [
    "Hi little one! I am your cool auntie.",
    "Hello there, glad to hear you.",
    "Hi again, I hope you are doing great.",
];

const CHOOSE_GAME_SENTENCES = [
    "What do you want to do? Play the animal sounds? Sing a song? Hear a story?",
    "Let's play together! You can choose between: " +
    "<p> The animal sounds </p>" +
    "<p> Sing a song </p>" +
    "<p> Hear a story </p>"
];

class Pokemon extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {
        // app.setContext(CONTEXT_CHOOSE_GAME, DEFAULT_LIFESPAN, {});
        app.tell(app.getArgument(ENTITY_POKEMON));
    }
}

module.exports = Pokemon;