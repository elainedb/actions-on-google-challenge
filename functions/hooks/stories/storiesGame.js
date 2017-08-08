'use strict';

const utils = require('../shared/_utils');
const SimpleIntent = require('../shared/simpleIntent');

const SwitchGame = require('../chooseGame/switchGame');

const storiesData = require('./storiesGameData');

const INTENT_ID = storiesData.INTENT_ID;
const LIST_STORIES_SENTENCES = storiesData.LIST_STORIES_SENTENCES;
const STORIES = storiesData.STORIES;
const ARGS = storiesData.ARGS;
const CHOICES = storiesData.CHOICES;


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

        app.ask(`<speak>${pickedStory.content}<break/> Do you want to ear another story ?</speak>`);

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
                new SwitchGame().trigger(app);
                break;
        }
    }

    /** @param app {ApiAiApp} */
    static listStories(app) {
        let text = utils.randomFromArray(LIST_STORIES_SENTENCES);
        Object.values(STORIES).forEach(s => text += `<p>${s.title}</p>`);
        app.ask(`<speak>${text}</speak>`);
    }
}

module.exports = StoriesGame;
