'use strict';

const SimpleIntent = require('../shared/simpleIntent');
const utils = require('../shared/_utils');
const songData = require('./songData');

const INTENT_ID = 'intent.auntie.game.song.choose';

const CONTEXT_CHOOSE_GAME = "context_choose_game";
const DEFAULT_LIFESPAN = 5;

const ENTITY_SONG = "song";

class ChooseSong extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {
        // possible songs
        let songs = app.data.songs ? new Set(app.data.songs) : songData.SONGS;

        app.ask(`<speak> ${utils.randomFromArray(songData.SENTENCES_SONG_SING)} ${utils.getSong(app, app.getArgument(ENTITY_SONG), songs, songData.SONGS_SRC)} </speak>`)
        

    }
}

module.exports = ChooseSong;