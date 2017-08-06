'use strict';

const SimpleIntent = require('../shared/simpleIntent');
const utils = require('../shared/_utils');
const chooseGameData = require('../chooseGame/chooseGameData');

const INTENT_ID = 'intent.auntie.game.animal.again.no';

class AgainNo extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {
        let chooseGameResponse = utils.randomFromArray(chooseGameData.CHOOSE_GAME_SENTENCES);
        app.ask(`<speak> Ok let's switch game. ${chooseGameResponse}</speak>`, chooseGameData.NO_INPUT_SUGGESTIONS);
    }
}

module.exports = AgainNo;