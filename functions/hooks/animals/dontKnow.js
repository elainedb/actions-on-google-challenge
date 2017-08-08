'use strict';

const SimpleIntent = require('../shared/simpleIntent');
const utils = require('../shared/_utils');
const animalData = require('./animalData');

const INTENT_ID = 'intent.auntie.animal.dont_know';
const CONTEXT_ANIMAL_SOUNDS = "context_game_animal";


class DontKnow extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {
        // TODO refacto avec soundsAnwser
        let resultMessage;
        let context = app.getContext(CONTEXT_ANIMAL_SOUNDS);
        let previousRound = context.parameters.round;
        let actualPoints = context.parameters.points;
        let goodAnswer = app.data.answer;

        resultMessage = `Maybe next time. It was ${utils.article(goodAnswer)} ${goodAnswer}`;

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

        let resultSoFar = `You now have: ${actualPoints}<sub alias="over">/</sub>${actualRound} good answers. Next round!<break/> ${app.data.question}`;

        if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
            let richResponse = app.buildRichResponse()
                .addSimpleResponse(`<speak>${resultMessage}.</speak>`)
                .addBasicCard(
                    app.buildBasicCard(`Picture: ${goodAnswer}.`)
                        .setImage('https://www.animalaid.org.uk/wp-content/uploads/2016/08/lamb-iStock-copy-767x655.jpg', "img")
                        .addButton(`Learn more about ${goodAnswer}`, 'https://en.wikipedia.org/wiki/Sheep'))
                .addSimpleResponse(`<speak>${resultSoFar}</speak>`);
            app.ask(richResponse);
        } else {
            app.ask(`<speak>${resultMessage}. ${resultSoFar}</speak>`);
        }
    }
}

module.exports = DontKnow;