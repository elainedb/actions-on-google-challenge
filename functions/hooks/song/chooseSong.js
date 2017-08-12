'use strict';

const SimpleIntent = require('../shared/simpleIntent');
const utils = require('../shared/_utils');
const songData = require('./songData');
const chooseGameData = require('../chooseGame/chooseGameData');

const INTENT_ID = 'intent.auntie.game.song.choose';

const CONTEXT_CHOOSE_GAME = "context_choose_game";
const DEFAULT_LIFESPAN = 5;

const SONGS_SUGGESTIONS = songData.SONGS_SUGGESTIONS;
const SONGS2 = songData.SONGS2;

const ENTITY_SONG = "song";

class ChooseSong extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {
        // possible songs
        let songs = app.data.songs ? new Set(app.data.songs) : songData.SONGS;

        let songCode = app.getArgument(ENTITY_SONG);
        const pickedSong = SONGS2[songCode];

        let startSentence = `${utils.randomFromArray(songData.SENTENCES_SONG_SING)}`;
        let fullResponse = `<speak> ${startSentence} ${utils.getSong(app, pickedSong, songs, songData.SONGS_SRC)}
                ${utils.randomFromArray(songData.END_SENTENCES_SONG)} Do you want to sing the same song again, another song or do you want to play another game?</speak>`;
        let writtenResponse = `${startSentence}`;
        if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
            app.ask(app.buildRichResponse()
            .addSimpleResponse({speech: fullResponse,
                                displayText: writtenResponse})
            .addSuggestions(['Again!', 'Another', 'Play another game'])
            );
        } else {
            app.ask(fullResponse);
        }
    }

    /** @param app {ApiAiApp} */
    static songsIntro(app) {
        let intro = utils.randomFromArray(chooseGameData.SENTENCES) + "Sing a Song. ";
        let question = utils.randomFromArray(songData.SENTENCES_SONG);
        let text = `${intro} ${question}`;

        SONGS_SUGGESTIONS.forEach(s => text += `<p>${s}</p>`);
        utils.askWithSuggestions(app, `<speak>${intro} ${question}</speak>`, SONGS_SUGGESTIONS);
        // app.ask(`<speak>${intro} ${question}</speak>`);
    }
}

module.exports = ChooseSong;