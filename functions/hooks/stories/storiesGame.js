'use strict';

const utils = require('../shared/_utils');
const SimpleIntent = require('../shared/simpleIntent');

const chooseGameData = require('../chooseGame/chooseGameData');

const INTENT_ID = 'intent.auntie.game.story';

const ARGS = {
    story: 'story',
    afterStoryChoice: 'choice'
};

const LIST_STORIES_SENTENCES = [
    'Great! Here are the available stories: <p>numbers</p><p>towel</p>'
];

const STORIES = {
    numbers: 'What did 0 say to 8 ?<break time="3s"/>Nice belt!',
    towel: 'What gets wetter the more it dries ?<break time="3s"/>A towel!'
};

const CHOICES = {
    yes: 'yes',
    again: 'again',
    no: 'no'
};

class StoriesGame extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    /** @param app {ApiAiApp} */
    trigger(app) {
        const afterStoryResponse = app.getArgument(ARGS.afterStoryChoice);
        if (!afterStoryResponse) {
            StoriesGame.chooseAndTellAStory(app, app.getArgument(ARGS.story));
        } else {
            StoriesGame.afterStory(app);
        }
    }

    /** @param app {ApiAiApp}
     * @param storyCode {string|object=} */
    static chooseAndTellAStory(app, storyCode) {
        let availableStories, pickedStory;
        if (app.data.stories && app.data.stories.length) {
            availableStories = app.data.stories.slice();
        } else {
            availableStories = Object.keys(STORIES).slice();
        }

        storyCode = storyCode || utils.randomFromArray(availableStories);
        utils.removeFromArray(availableStories, storyCode);

        pickedStory = STORIES[storyCode];

        app.ask(`<speak>${pickedStory}<break/> Do you want to ear another story ?</speak>`);

        app.data.lastToldStory = storyCode;
        app.data.stories = availableStories;
    }

    /** @param app {ApiAiApp} */
    static afterStory(app) {
        const choice = app.getArgument(ARGS.afterStoryChoice);
        switch (choice) {
            case CHOICES.yes:
                StoriesGame.chooseAndTellAStory(app);
                break;
            case CHOICES.again:
                StoriesGame.chooseAndTellAStory(app, app.data.lastToldStory);
                break;
            case CHOICES.no:
                let chooseGameResponse = utils.randomFromArray(chooseGameData.CHOOSE_GAME_SENTENCES);
                app.ask(`<speak>Ok let's switch game. ${chooseGameResponse}</speak>`, chooseGameData.NO_INPUT_SUGGESTIONS);
                break;
        }
    }

    /** @param app {ApiAiApp} */
    static listStories(app) {
        const text = utils.randomFromArray(LIST_STORIES_SENTENCES);
        app.ask(`<speak>${text}</speak>`);
    }
}

module.exports = StoriesGame;