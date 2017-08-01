'use strict';

const SimpleIntent = require('./simpleIntent');

const utils = require('./_utils');

const INTENT_ID = 'intent.input.welcome';

const CONTEXT_CHOOSE_GAME = "context_choose_game";
const DEFAULT_LIFESPAN = 5;

const WELCOME_SENTENCES = [
    "Hi little one! I am your cool auntie.",
    "Hello there, glad to hear you.",
    "Hi again, I hope you are doing great.",
];

const CHOOSE_GAME_SENTENCES = [
    "What do you want to do? Play the animal sounds? Sing a song? Hear a story?",
    "Let's play together! You can choose between: " +
    "<p> The animal sounds, </p>" +
    "<p> Sing a song, </p>" +
    "<p> Hear a story, </p>"
];

const GAME_SUGGESTIONS = [
    "The animal sounds ",
    "Sing a song",
    "Hear a story"
];

const NO_INPUT_SUGGESTIONS = [
    "I did not get that, you can choose between " + GAME_SUGGESTIONS.toString(),
    "Please choose a game: " + GAME_SUGGESTIONS.toString()
];

class Welcome extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {
        let welcomeResponse = utils.randomFromArray(WELCOME_SENTENCES);
        let chooseGameResponse = utils.randomFromArray(CHOOSE_GAME_SENTENCES);

        app.setContext(CONTEXT_CHOOSE_GAME, DEFAULT_LIFESPAN, {});
        if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
            let richResponse = app.buildRichResponse()
                .addSimpleResponse(`<speak>${welcomeResponse} ${chooseGameResponse}</speak>`)
                // FYI : can not put 2 cards, only take first one
                // .addBasicCard(
                //     app.buildBasicCard(GAME_SUGGESTIONS[0])
                //         .setImage(image[0], image[1])
                //         .addButton('GOOOOOGLE', 'https://www.google.com/about/'))
                // .addBasicCard(
                //     app.buildBasicCard(GAME_SUGGESTIONS[1])
                //         .setImage(image[0], image[1])
                //         .addButton('GOOOOOGLE_2', 'https://www.google.com/about/'))
                .addSuggestions(GAME_SUGGESTIONS);
            app.ask(richResponse);
        } else {
            app.ask(`<speak>${welcomeResponse} ${chooseGameResponse}</speak>`, NO_INPUT_SUGGESTIONS);
        }
    }
}

module.exports = Welcome;