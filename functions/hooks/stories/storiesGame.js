'use strict';

const utils = require('../shared/_utils');
const SimpleIntent = require('../shared/simpleIntent');

const SwitchGame = require('../chooseGame/switchGame');

const storiesData = require('./storiesGameData');

const INTENT_ID = storiesData.INTENT_ID;
const STORIES = storiesData.STORIES;
const STORIES_SUGGESTIONS = storiesData.STORIES_SUGGESTIONS;
const AFTER_STORY_SUGGESTIONS = storiesData.AFTER_STORY_SUGGESTIONS;
const LIST_STORIES_SENTENCES = storiesData.LIST_STORIES_SENTENCES;
const LIST_STORIES_END_SENTENCES = storiesData.LIST_STORIES_END_SENTENCES;
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
        // Retrieve stories
        let availableStories;
        if (app.data.stories && app.data.stories.length) {
            // remaining stories
            availableStories = app.data.stories.slice();
        } else {
            // first time or stories depleted
            availableStories = Object.keys(STORIES).slice();
        }

        // Pick a story
        storyCode = storyCode || utils.randomFromArray(availableStories, app.data.lastToldStory);
        utils.removeFromArray(availableStories, storyCode);
        const pickedStory = STORIES[storyCode];

        app.data.lastToldStory = storyCode;
        app.data.stories = availableStories;

        // Speak time
        utils.askWithSuggestions(app,
            `<speak>${pickedStory.content}<break/> ${utils.randomFromArray(LIST_STORIES_END_SENTENCES)}</speak>`,
            AFTER_STORY_SUGGESTIONS);
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
        STORIES_SUGGESTIONS.forEach(s => text += `<p>${s}</p>`);
        utils.askWithSuggestions(app, `<speak>${text}</speak>`, STORIES_SUGGESTIONS);
    }
}

module.exports = StoriesGame;
