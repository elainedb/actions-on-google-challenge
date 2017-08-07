'use strict';

const SimpleIntent = require('../shared/simpleIntent');
const utils = require('../shared/_utils');
const songData = require('./songData');

const INTENT_ID = 'intent.auntie.game.song.list';

const CONTEXT_CHOOSE_GAME = "context_choose_game";
const DEFAULT_LIFESPAN = 5;

const ENTITY_SONG = "song";

class ListSongs extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {
        // possible songs
        let songs = app.data.songs ? new Set(app.data.songs) : songData.SONGS;

        let songList = '';

        for (let song of songs.values()) {
            songList = songList.concat(song + ', ');
        }

        app.ask(`<speak> The available songs are: ${songList} Which one would you like to sing? </speak>`);
        

    }
}

module.exports = ListSongs;