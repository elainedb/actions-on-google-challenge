'use strict';

const SimpleIntent = require('../../shared/simpleIntent');
const utils = require('../../shared/_utils');

const AnimalDataManager = require('../animalsDataManager');
const AnimalSentencesBuilder = require('../animalsSentencesBuilder');
const animalData = require('../animalData');

const SoundsManager = require('./soundsManager');
const SoundsSentencesBuilder = require('./soundsSentencesBuilder');

const HintManager = require('../hint/hintManager');
const HintSentenceBuilder = require('../hint/hintSentencesBuilder');

const INTENT_ID = 'intent.auntie.game.animal';

const ENTITY_ANIMAL = 'animal';
const CONTEXT_ANIMAL_SOUNDS = 'context_game_animal';
const CONTEXT_ANIMAL_SOUNDS_AGAIN = 'context_game_animal_play_again';

const MAX_ROUND = 5;

class AnimalSoundsAnswerIntent extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger_new(app) {

        console.log('+++ AnimalSoundsAnswerIntent : instanciate dependencies for AnimalSoundsAnswerIntent.trigger');
        let animalDataManager = new AnimalDataManager(app);

        if (!animalDataManager.getAnswer()) {
            throw 'Oooops ! No soundsAnswerIntent trigger but chooseGame never called for animal game :\'(';
        }

        let soundsSentencesBuilder = new SoundsSentencesBuilder(app);
        let soundsManager = new SoundsManager();

        let response;

        let userAnswer = app.getArgument(ENTITY_ANIMAL);
        if (soundsManager.isValidAnswer(userAnswer)) {
            app.setContext(CONTEXT_ANIMAL_SOUNDS_AGAIN, 1, {});
            response = `<speak>${soundsSentencesBuilder.getYouWooon()}</<peak>`;
        } else if (soundsManager.hasOtherTry()) {

            console.log('+++ AnimalSoundsAnswerIntent : user have another chance to find :)');
            console.log('+++ AnimalSoundsAnswerIntent : instanciate hints Manager and builder to help him');
            let hintManager = new HintManager();
            let hintSentenceBuilder = new HintSentenceBuilder(app);

            let hintIndex = hintManager.incrementHintCounter(app.data.answer);
            let hint = hintSentenceBuilder.getHint(soundsManager.getValidAnimal(), hintIndex);

            soundsManager.incrementRound();

            app.setContext(CONTEXT_ANIMAL_SOUNDS);
            response = `<speak>${hint} ${soundsSentencesBuilder.getAnotherTry()}</speak>`;
        } else {

            app.setContext(CONTEXT_ANIMAL_SOUNDS_AGAIN, 1, {});
            response = `<speak>
                <p>It was the last round ${soundsSentencesBuilder.getAnotherTry()}</p>
                <p>${soundsSentencesBuilder.getOoopsYouLost()}
                <p>Do you want to play another game of animal sounds?</p>
            </speak>`;
        }

        app.ask(response);
    }

    trigger(app) {
        let resultMessage;
        let context = app.getContext(CONTEXT_ANIMAL_SOUNDS);
        let previousRound = context.parameters.round;
        let previousPoints = context.parameters.points;
        let actualPoints = previousPoints;
        let goodAnswer = app.data.answer;
        let userAnswer = app.getArgument(ENTITY_ANIMAL);

// https://freesound.org/people/rhodesmas/sounds/342756/
// https://freesound.org/people/rhodesmas/sounds/322930/
        // if good answer
        if (goodAnswer.name === userAnswer) {
            actualPoints = previousPoints + 1;
            // resultMessage = `Good job! It was indeed ${utils.article(goodAnswer.name)} ${goodAnswer.name}`;
            resultMessage = `<audio src="https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/effects/322930__rhodesmas__success-03.wav"></audio> <break time="500ms"/>  
            ${utils.randomFromArray(animalData.SENTENCES_ANIMAL_SOUNDS_END)} <audio src="${goodAnswer.src.sound}"></audio> Again! <audio src="${goodAnswer.src.sound}"></audio>`;
        } else {
            resultMessage = `<audio src="https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/effects/342756__rhodesmas__failure-01.wav"></audio> <break time="500ms"/> 
            Wrong answer. It was ${utils.article(goodAnswer.name)} ${goodAnswer.name}`;
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
                    .addSimpleResponse(`<speak>${resultMessage}</speak>`)
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
            // let resultSoFar = `You now have: ${actualPoints}<sub alias="over">/</sub>${actualRound} good answers. Next round!<break/> ${app.data.question}`;
            let resultSoFar = `Next round!<break/> ${app.data.question}`;
            if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
                let richResponse = app.buildRichResponse()
                    .addSimpleResponse(`<speak>${resultMessage}</speak>`)
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

module.exports = AnimalSoundsAnswerIntent;