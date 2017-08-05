'use strict';

const SimpleIntent = require('./shared/simpleIntent');
const utils = require('./shared/_utils');
const animalData = require('./animals/animalData');

const INTENT_ID = 'intent.auntie.choosegame';

const ENTITY_GAME = "game";

// ANIMAL SOUNDS
const ENTITY_GAME_ANIMAL_SOUNDS = "animal sounds";
const CONTEXT_ANIMAL_SOUNDS = "context_game_animal";

const CONTEXT_CHOOSE_GAME = "context_choose_game";

// SING A SONG
const ENTITY_GAME_SING_A_SONG = "sing a song";

// TELL A STORY
const ENTITY_GAME_TELL_A_STORY = "tell a story";

const SENTENCES = [
    "OK, let's play ",
    "Cool, let's play ",
    "Yeah! Let's play "
];

class ChooseGame extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {
        if (app.getArgument(ENTITY_GAME) === ENTITY_GAME_ANIMAL_SOUNDS) {
            // question
            let intro = utils.randomFromArray(SENTENCES) + app.getArgument(ENTITY_GAME) + ". ";
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
        } else {
            app.ask('entity_game, you should not be here... you said ' + app.getArgument(ENTITY_GAME));
        }
    }
}

module.exports = ChooseGame;