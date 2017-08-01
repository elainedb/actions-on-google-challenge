'use strict';

const SimpleIntent = require('./simpleIntent');

const utils = require('./_utils');

const INTENT_ID = 'auntie.choosegame';

const DEFAULT_LIFESPAN = 5;

const ENTITY_GAME = "game";

// ANIMAL SOUNDS
const ENTITY_GAME_ANIMAL_SOUNDS = "animal sounds";
const CONTEXT_ANIMAL_SOUNDS = "game_animal";

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
                            // 'http://www.freesoundeffects.com/mp3_89451.mp3',
                            'http://www.freesoundeffects.com/mp3_466215.mp3',
                            'http://www.freesoundeffects.com/mp3_466267.mp3',
                            'http://www.freesoundeffects.com/mp3_466267.mp3',
                            'http://www.freesoundeffects.com/mp3_466267.mp3'
                        ]);

                            // dog alt : http://www.freesoundeffects.com/mp3_89452.mp3 / http://www.freesoundeffects.com/mp3_89455.mp3 / http://www.freesoundeffects.com/mp3_89459.mp3 / http://www.freesoundeffects.com/mp3_89461.mp3
                            // monkey alt : http://www.freesoundeffects.com/mp3_466218.mp3 / http://www.freesoundeffects.com/mp3_466219.mp3
                            // elephant alt : http://www.freesoundeffects.com/mp3_466268.mp3

// SING A SONG
const ENTITY_GAME_SING_A_SONG = "sing a song";

// TELL A STORY
const ENTITY_GAME_TELL_A_STORY = "tell a story";

const SENTENCES = [
    "OK, let's play ",
    "Cool, let's play ",
    "Yeah! Let's play "
];

const SENTENCES_ANIMAL_SOUNDS = [
    "OK, here we go! Do you know which animal makes this sound?",
    "OK, let's play! Do you recognize this animal?",
    "Yeah! Can you guess which animal makes this sound?"
];

class ChooseGame extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {
        if (app.getArgument(ENTITY_GAME) === ENTITY_GAME_ANIMAL_SOUNDS) {
            // possible answers
            let answers = app.data.animalAnswers ? new Set(app.data.animalAnswers) : ANIMALS;
            if (answers.size === 0) {
                app.data.animalAnswers = ANIMALS;
            }

            // question
            let intro = utils.randomFromArray(SENTENCES) + app.getArgument(ENTITY_GAME) + ". ";
            let question = utils.randomFromArray(SENTENCES_ANIMAL_SOUNDS);

            app.setContext(CONTEXT_ANIMAL_SOUNDS, DEFAULT_LIFESPAN, {});
            app.ask(`<speak>${intro} ${question} ${utils.getRandomAnswer(app, answers, ANIMAL_SOUNDS_SRC)}</speak>`);
        } else {
            app.tell('you said ' + app.getArgument(ENTITY_GAME));
        }
    }
}

module.exports = ChooseGame;