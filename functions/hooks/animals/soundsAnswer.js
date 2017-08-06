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
        let actualPoints = previousPoints;
        let goodAnswer = app.data.answer;
        let userAnswer = app.getArgument(ENTITY_ANIMAL);

        // if good answer
        if (goodAnswer === userAnswer) {
            actualPoints = previousPoints + 1;
            resultMessage = `Good job! It was indeed a ${goodAnswer}`;
        } else {
            resultMessage = `Wrong answer. It was a ${goodAnswer}`;
        }

        // console.log("context after response");
        // console.log(app.getContext(CONTEXT_ANIMAL_SOUNDS));

        // animal next round
        let answers = app.data.animalAnswers ? new Set(app.data.animalAnswers) : animalData.ANIMALS;
        if (answers.size === 0) {
            app.data.animalAnswers = animalData.ANIMALS;
        }
        let question = utils.randomFromArray(animalData.SENTENCES_ANIMAL_SOUNDS);

        let actualRound = previousRound + 1;

        app.data.question = `${question} ${utils.getRandomAnswer(app, answers, animalData.ANIMAL_SOUNDS_SRC)}`;

        app.setContext(CONTEXT_ANIMAL_SOUNDS, utils.DEFAULT_LIFESPAN, {
            round: actualRound,
            points: actualPoints
        });

        if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
            let richResponse = app.buildRichResponse()
                .addSimpleResponse(`<speak>${resultMessage}.</speak>`)
                .addBasicCard(
                    app.buildBasicCard(`Picture: ${goodAnswer}.`)
                        .setImage('https://www.animalaid.org.uk/wp-content/uploads/2016/08/lamb-iStock-copy-767x655.jpg', "img")
                        .addButton(`Learn more about ${goodAnswer}`, 'https://en.wikipedia.org/wiki/Sheep'))
                .addSimpleResponse(`<speak>You now have: ${actualPoints} over ${actualRound} good answers. 
                Next round!<break/> ${app.data.question}</speak>`);
            app.ask(richResponse);
        } else {
            app.ask(`<speak>${resultMessage}. You now have: ${actualPoints} over ${actualRound} good answers. 
                Next round!<break/> ${app.data.question}</speak>`);
        }
    }
}

module.exports = AnimalSoundsAnswer;