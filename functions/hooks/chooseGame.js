'use strict';

const SimpleIntent = require('./shared/simpleIntent');
const utils = require('./shared/_utils');

const INTENT_ID = 'intent.auntie.choosegame';

const ENTITY_GAME = "game";

// ANIMAL SOUNDS
const ENTITY_GAME_ANIMAL_SOUNDS = "animal sounds";
const CONTEXT_ANIMAL_SOUNDS = "context_game_animal";
const CONTEXT_CHOOSE_GAME = "context_choose_game";

const ENTITY_DOG = "dog";
const ENTITY_CAT = "cat";
const ENTITY_MONKEY = "monkey";
const ENTITY_ELEPHANT = "elephant";
const ENTITY_PIGEON = "pigeon";
const ENTITY_LION = "lion";

const ANIMALS = new Set([ENTITY_DOG, ENTITY_CAT, ENTITY_MONKEY, ENTITY_ELEPHANT, ENTITY_PIGEON, ENTITY_LION]);
const ANIMAL_SOUNDS_SRC = new Set([
    'https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/animals/dog/bark.mp3',
    'https://actions.google.com/sounds/v1/animals/cat_purr_close.ogg',
    'http://www.freesoundeffects.com/mp3_466215.mp3',
    'http://www.freesoundeffects.com/mp3_466267.mp3',
    'http://www.freesoundeffects.com/mp3_466267.mp3',
    'http://www.freesoundeffects.com/mp3_466267.mp3'
]);
const SENTENCES_ANIMAL_SOUNDS = [
    "OK, here we go! Do you know which animal makes this sound?",
    "OK, let's play! Do you recognize this animal?",
    "Yeah! Can you guess which animal makes this sound?"
];

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
            let question = utils.randomFromArray(SENTENCES_ANIMAL_SOUNDS);


            // possible answers
            let answers = app.data.animalAnswers ? new Set(app.data.animalAnswers) : ANIMALS;
            if (answers.size === 0) {
                app.data.animalAnswers = ANIMALS;
            }

            app.ask(`<speak>${intro} ${question} ${utils.getRandomAnswer(app, answers, ANIMAL_SOUNDS_SRC)}</speak>`);

            app.setContext(CONTEXT_ANIMAL_SOUNDS, utils.DEFAULT_LIFESPAN, {
                set_number:0,
                points:0
            });

        } else {
            app.ask('entity_game, you should not be here if you want to play animal... you said ' + app.getArgument(ENTITY_GAME));
        }
    }
}

module.exports = ChooseGame;
exports.ANIMALS = ANIMALS;
exports.ANIMAL_SOUNDS_SRC = ANIMAL_SOUNDS_SRC;
exports.SENTENCES_ANIMAL_SOUNDS = SENTENCES_ANIMAL_SOUNDS;