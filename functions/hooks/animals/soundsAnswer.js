'use strict';


const SimpleIntent = require('../shared/simpleIntent');
const utils = require('../shared/_utils');

const INTENT_ID = 'intent.auntie.game.animal';

const ENTITY_ANIMAL = "animal";
const ENTITY_GAME_ANIMAL_SOUNDS = "animal sounds";
const CONTEXT_ANIMAL_SOUNDS = "context_game_animal";


class AnimalSoundsAnswer extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    trigger(app) {
        app.setContext(CONTEXT_ANIMAL_SOUNDS, utils.DEFAULT_LIFESPAN, {});
        // if good answer
        if (app.data.answer === app.getArgument(ENTITY_ANIMAL)) {
            app.ask("yoohoo!");
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
                app.ask(richResponse);
            } else {
                app.ask(`<speak>Good job! It was indeed a ${app.getArgument(ENTITY_ANIMAL)}</speak>`);
            }
        } else {
            app.ask("too bad");
        }
    }
}

module.exports = AnimalSoundsAnswer;