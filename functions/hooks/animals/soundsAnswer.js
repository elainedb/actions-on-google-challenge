'use strict';


const SimpleIntent = require('../shared/simpleIntent');
const utils = require('../shared/_utils');
const chooseGame = require('../chooseGame');

const INTENT_ID = 'intent.auntie.game.animal';

const ENTITY_ANIMAL = "animal";
const ENTITY_GAME_ANIMAL_SOUNDS = "animal sounds";
const CONTEXT_ANIMAL_SOUNDS = "context_game_animal";


class AnimalSoundsAnswer extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {
        // if good answer
        let resultMessage;
        let context = app.getContext(CONTEXT_ANIMAL_SOUNDS);
        console.log("context in sounds Answer");
        console.log(context);
        if (!context) {
            app.setContext(CONTEXT_ANIMAL_SOUNDS, utils.DEFAULT_LIFESPAN, {
                set_number : 0,
                points : 0
            });
        }

        if (app.data.answer === app.getArgument(ENTITY_ANIMAL)) {
            context.parameters.points ++;

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
                resultMessage = richResponse;
            } else {
                resultMessage = `<speak>Good job! It was indeed a ${app.getArgument(ENTITY_ANIMAL)}</speak>`;
            }
        } else {

            resultMessage = `Too bad`;
        }

        app.setContext(CONTEXT_ANIMAL_SOUNDS, utils.DEFAULT_LIFESPAN, {
            set_number : context.set_number++,
            points : context.points
        });
        console.log("context after response");
        console.log(app.getContext(CONTEXT_ANIMAL_SOUNDS));


        // animal next question
        let answers = app.data.animalAnswers ? new Set(app.data.animalAnswers) : chooseGame.ANIMALS;
        if (answers.size === 0) {
            app.data.animalAnswers = chooseGame.ANIMALS;
        }
        let question = utils.randomFromArray(chooseGame.SENTENCES_ANIMAL_SOUNDS);


        app.ask(`${resultMessage}. 
        You now have: 
        ${app.getContext(CONTEXT_ANIMAL_SOUNDS).parameters.points}/${app.getContext(CONTEXT_ANIMAL_SOUNDS).parameters.set_number} 
        good responses. 
        Next!
        ${question} ${utils.getRandomAnswer(app, answers, chooseGame.ANIMAL_SOUNDS_SRC)}`);
    }
}

module.exports = AnimalSoundsAnswer;