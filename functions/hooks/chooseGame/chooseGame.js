'use strict';

const SimpleIntent = require('../shared/simpleIntent');
const utils = require('../shared/_utils');
const chooseGameData = require('./chooseGameData');
const animalData = require('../animals/animalData');
const songData = require('../song/songData');

const INTENT_ID = 'intent.auntie.choosegame';


// ANIMAL SOUNDS
const ENTITY_GAME_ANIMAL_SOUNDS = "animal sounds";
const CONTEXT_ANIMAL_SOUNDS = "context_game_animal";

// SING A SONG
const ENTITY_GAME_SING_A_SONG = "sing a song";
const CONTEXT_SONG = "context_game_song";

// TELL A STORY
const ENTITY_GAME_TELL_A_STORY = "tell a story";
const CONTEXT_STORY = "context_game_story";

class ChooseGame extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {
        app.data.gameName = app.getArgument(chooseGameData.ENTITY_GAME);
        
        if (app.getArgument(chooseGameData.ENTITY_GAME) === ENTITY_GAME_ANIMAL_SOUNDS) {
            // question
            let intro = utils.randomFromArray(chooseGameData.SENTENCES) + app.getArgument(chooseGameData.ENTITY_GAME) + ". ";
            let question = utils.randomFromArray(animalData.SENTENCES_ANIMAL_SOUNDS);

            // possible answers
            let answers = app.data.animalAnswers ? new Set(app.data.animalAnswers) : animalData.ANIMALS;
            if (answers.size === 0) {
                app.data.animalAnswers = animalData.ANIMALS;
            }

            app.setContext(CONTEXT_ANIMAL_SOUNDS, utils.DEFAULT_LIFESPAN, {
                round: 0,
                points: 0
            });
            app.ask(`<speak>${intro} ${question} ${utils.getRandomAnswer(app, answers, animalData.ANIMAL_SOUNDS_SRC)}</speak>`);
        } else if (app.getArgument(chooseGameData.ENTITY_GAME) === ENTITY_GAME_SING_A_SONG) {
            let intro = utils.randomFromArray(chooseGameData.SENTENCES) + app.getArgument(chooseGameData.ENTITY_GAME) + ". ";
            let question = utils.randomFromArray(songData.SENTENCES_SONG);

            app.setContext(CONTEXT_SONG, utils.DEFAULT_LIFESPAN, {});
            app.ask(`<speak>${intro} ${question}</speak>`);
        } else if (app.getArgument(chooseGameData.ENTITY_GAME) === ENTITY_GAME_TELL_A_STORY) {
            app.setContext(CONTEXT_STORY, utils.DEFAULT_LIFESPAN, {});
            app.ask('Tell a story is work in progress. What do you want to play?');
        } else {
            app.ask('entity_game, you should not be here... you said ' + app.getArgument(chooseGameData.ENTITY_GAME) + '. What do you want to play?');
        }
    }
}

module.exports = ChooseGame;