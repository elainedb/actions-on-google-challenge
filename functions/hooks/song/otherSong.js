'use strict';

const SimpleIntent = require('../shared/simpleIntent');
const utils = require('../shared/_utils');
const songData = require('./songData');
const chooseGameData = require('../chooseGame/chooseGameData');

const INTENT_ID = 'intent.auntie.game.song.end.other_song';

const CONTEXT_CHOOSE_GAME = "context_choose_game";
const DEFAULT_LIFESPAN = 5;

const ENTITY_SONG = "song";

class OtherSong extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {
        // copié collé du if dans chooseGame.js
        let intro = "";
        let question = utils.randomFromArray(songData.SENTENCES_SONG);

        // app.setContext(CONTEXT_SONG, utils.DEFAULT_LIFESPAN, {});
        app.ask(`<speak>${intro} ${question}</speak>`);
    }
}

module.exports = OtherSong;