'use strict';

const SimpleIntent = require('../shared/simpleIntent');
const utils = require('../shared/_utils');
const chooseGameData = require('./chooseGameData');

const INTENT_ID = 'intent.auntie.switchgame';

const CONTEXT_CHOOSE_GAME = "context_choose_game";
const DEFAULT_LIFESPAN = 5;

class SwitchGame extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {
        // copié collé depuis welcome.js
        let welcomeResponse = "";
        let chooseGameResponse = utils.randomFromArray(chooseGameData.CHOOSE_GAME_SENTENCES);

        app.setContext(CONTEXT_CHOOSE_GAME, DEFAULT_LIFESPAN, {});
        if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
            let richResponse = app.buildRichResponse()
                .addSimpleResponse(`<speak>${welcomeResponse} ${chooseGameResponse}</speak>`)
                .addSuggestions(chooseGameData.GAME_SUGGESTIONS);
            app.ask(richResponse);
        } else {
            app.ask(`<speak>${welcomeResponse} ${chooseGameResponse}</speak>`, chooseGameData.NO_INPUT_SUGGESTIONS);
        }
    }
}

module.exports = SwitchGame;