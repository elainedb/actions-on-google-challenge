'use strict';


const SimpleIntent = require('../shared/simpleIntent');
const utils = require('../shared/_utils');
const animalData = require('./animalData');

const INTENT_ID = 'intent.auntie.game.animal';

const ENTITY_ANIMAL = "animal";
const ENTITY_GAME_ANIMAL_SOUNDS = "animal sounds";
const CONTEXT_ANIMAL_SOUNDS = "context_game_animal";


class AnimalSoundsAnswer extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {
        let resultMessage;
        let context = app.getContext(CONTEXT_ANIMAL_SOUNDS);
        let previousRound = context.parameters.round;
        let previousPoints = context.parameters.points;
        var actualPoints = previousPoints;

        // if good answer
        if (app.data.answer === app.getArgument(ENTITY_ANIMAL)) {
            actualPoints = previousPoints + 1;
            if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
                let richResponse = app.buildRichResponse()
                    .addSimpleResponse(`<speak>Good job! It was indeed a ${app.getArgument(ENTITY_ANIMAL)}</speak>`);
                    // FYI : can not put 2 cards, only take first one
                    // .addBasicCard(
                    //     app.buildBasicCard(GAME_SUGGESTIONS[0])
                    //         .setImage(image[0], image[1])
                    //         .addButton('GOOOOOGLE', 'https://www.google.com/about/'))
                    // .addBasicCard(
                    //     app.buildBasicCard(GAME_SUGGESTIONS[1])
                    //         .setImage(image[0], image[1])
                    //         .addButton('GOOOOOGLE_2', 'https://www.google.com/about/'))
                resultMessage = richResponse; // Object object !!!!
                resultMessage = `Good job! It was indeed a ${app.getArgument(ENTITY_ANIMAL)}`;
            } else {
                resultMessage = `Good job! It was indeed a ${app.getArgument(ENTITY_ANIMAL)}`;
            }
        } else {
            resultMessage = "too bad";
        }

        console.log("context after response");
        console.log(app.getContext(CONTEXT_ANIMAL_SOUNDS));

        // animal next round
        let answers = app.data.animalAnswers ? new Set(app.data.animalAnswers) : animalData.ANIMALS;
        if (answers.size === 0) {
            app.data.animalAnswers = animalData.ANIMALS;
        }
        let question = utils.randomFromArray(animalData.SENTENCES_ANIMAL_SOUNDS);

        let actualRound = previousRound + 1;

        app.data.question = `${question} ${utils.getRandomAnswer(app, answers, animalData.ANIMAL_SOUNDS_SRC)}`;

        app.setContext(CONTEXT_ANIMAL_SOUNDS, utils.DEFAULT_LIFESPAN, {
                round : actualRound,
                points : actualPoints
            });

        app.ask(`<speak>${resultMessage}. You now have: ${actualPoints}/${actualRound} good answers. Next!
                ${app.data.question}</speak>`);
    }
}

module.exports = AnimalSoundsAnswer;