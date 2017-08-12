'use strict';

const SimpleIntent = require('../shared/simpleIntent');
const utils = require('../shared/_utils');
const animalData = require('./animalData');
const chooseGameData = require('../chooseGame/chooseGameData');

const INTENT_ID = 'intent.auntie.game.animal.again.yes';
const CONTEXT_ANIMAL_SOUNDS = "context_game_animal";


class AgainYes extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {
        // question
        let intro = utils.randomFromArray(chooseGameData.SENTENCES_AGAIN);
        let question = utils.randomFromArray(animalData.SENTENCES_ANIMAL_SOUNDS);

        // possible answers
        let answers = utils.getAnimalList(app, animalData.ANIMALS_OBJECTS);

        app.setContext(CONTEXT_ANIMAL_SOUNDS, utils.DEFAULT_LIFESPAN, {
            round: 0,
            points: 0
        });

        let randomAnswer = utils.getRandomAnswer(app, answers);
        app.data.answer = randomAnswer;

        let manager = new AnimalDataManager(app, randomAnswer);

        app.ask(`<speak>${intro} ${question} <audio src="${randomAnswer.src.sound}"></audio></speak>`);
    }
}

module.exports = AgainYes;