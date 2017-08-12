'use strict';

const SimpleIntent = require('../shared/simpleIntent');
const utils = require('../shared/_utils');
const songData = require('./songData');
const chooseGameData = require('../chooseGame/chooseGameData');
const ChooseSong = require('../song/chooseSong');

const INTENT_ID = 'intent.auntie.game.song.end.other_song';

const CONTEXT_CHOOSE_GAME = "context_choose_game";
const DEFAULT_LIFESPAN = 5;

const ENTITY_SONG = "song";

class OtherSong extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {
        ChooseSong.songsIntro(app);
    }
}

module.exports = OtherSong;