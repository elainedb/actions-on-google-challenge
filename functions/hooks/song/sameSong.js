'use strict';

const SimpleIntent = require('../shared/simpleIntent');
const utils = require('../shared/_utils');
const songData = require('./songData');

const INTENT_ID = 'intent.auntie.game.song.end.same';

const CONTEXT_CHOOSE_GAME = "context_choose_game";
const CONTEXT_SONG = "context_game_song";
const DEFAULT_LIFESPAN = 5;

const ENTITY_SONG = "song";

class SameSong extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {
        // copié collé depuis chooseSong.js
        let startSentence = `${utils.randomFromArray(songData.SENTENCES_SONG_SING)}`;
        let fullResponse = `<speak> ${startSentence} ${app.data.song}
                ${utils.randomFromArray(songData.END_SENTENCES_SONG)} Do you want to sing the same song again, another song or do you want to play another game?</speak>`;
        let writtenResponse = `${startSentence}`;

        app.setContext(CONTEXT_SONG, utils.DEFAULT_LIFESPAN, {});
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
}

module.exports = SameSong;