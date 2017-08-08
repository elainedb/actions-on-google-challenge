'use strict';


const SimpleIntent = require('../shared/simpleIntent');
const utils = require('../shared/_utils');
const animalData = require('./animalData');

const INTENT_ID = 'intent.auntie.game.animal';

const ENTITY_ANIMAL = "animal";
const CONTEXT_ANIMAL_SOUNDS = "context_game_animal";
const CONTEXT_ANIMAL_SOUNDS_AGAIN = "context_game_animal_play_again";

const MAX_ROUND = 3;


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
        console.log('YOOOOOOOOOOOOOO');
        console.log(goodAnswer, userAnswer);
        if (goodAnswer.name === userAnswer) {
            actualPoints = previousPoints + 1;
            resultMessage = `Good job! It was indeed ${utils.article(goodAnswer.name)} ${goodAnswer.name}`;
        } else {
            resultMessage = `Wrong answer. It was ${utils.article(goodAnswer.name)} ${goodAnswer.name}`;
        }

        // animal next round
        let answers = utils.getAnimalList(app, animalData.ANIMALS_OBJECTS);
        let question = utils.randomFromArray(animalData.SENTENCES_ANIMAL_SOUNDS);

        let actualRound = previousRound + 1;

        let randomAnswer = utils.getRandomAnswer(answers);
        app.data.answer = randomAnswer;
        app.data.question = `${question}  <audio src="${randomAnswer.src.sound}"></audio>`;

        app.setContext(CONTEXT_ANIMAL_SOUNDS, utils.DEFAULT_LIFESPAN, {
            round: actualRound,
            points: actualPoints
        });

        if (actualRound === MAX_ROUND) {
            let lastRoundResponse = `It was the last round, you got ${actualPoints} over ${actualRound} good answers. 
               Do you want to play another game of animal sounds?`;
            // restart rounds and points
            app.setContext(CONTEXT_ANIMAL_SOUNDS, utils.DEFAULT_LIFESPAN, {
                round: 0,
                points: 0
            });
            // yes no in context of "again"
            app.setContext(CONTEXT_ANIMAL_SOUNDS_AGAIN, 1, {});

            if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
                let richResponse = app.buildRichResponse()
                    .addSimpleResponse(`<speak>${resultMessage}.</speak>`)
                    .addBasicCard(
                        app.buildBasicCard(`Picture: ${goodAnswer.name}.`)
                            .setImage(goodAnswer.src.img, "img")
                            .addButton(`Learn more about ${goodAnswer.name}`, goodAnswer.info))
                    .addSimpleResponse(`<speak>${lastRoundResponse}</speak>`);
                app.ask(richResponse);
            } else {
                app.ask(`<speak>${resultMessage}. ${lastRoundResponse}</speak>`);
            }

        } else {
            let resultSoFar = `You now have: ${actualPoints}<sub alias="over">/</sub>${actualRound} good answers. Next round!<break/> ${app.data.question}`;
            if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
                let richResponse = app.buildRichResponse()
                    .addSimpleResponse(`<speak>${resultMessage}.</speak>`)
                    .addBasicCard(
                        app.buildBasicCard(`Picture: ${goodAnswer.name}.`)
                            .setImage(goodAnswer.src.img, "img")
                            .addButton(`Learn more about ${goodAnswer.name}`, goodAnswer.info))
                    .addSimpleResponse(`<speak>${resultSoFar}</speak>`);
                app.ask(richResponse);
            } else {
                app.ask(`<speak>${resultMessage}. ${resultSoFar}</speak>`);
            }
        }
    }
}

module.exports = AnimalSoundsAnswer;