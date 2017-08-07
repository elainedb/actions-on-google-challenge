'use strict';

const SimpleIntent = require('../shared/simpleIntent');
const utils = require('../shared/_utils');

const INTENT_ID = 'input.game.story';

const ARGS = {
    story: 'story',
    afterStoryChoice: 'choice'
};

const STORIES = {
    numbers: 'What did 0 say to 8 ?<break time="3s"/>Nice belt!',
    towels: 'What gets wetter the more it dries ?<break time="3s"/>A towel!'
};

const CHOICES = {
    yes: 'yes',
    no: 'no'
};

const REMOVE_STORY_WHEN_TOLD = true;

class StoriesGame extends SimpleIntent {

    constructor() {
        super(INTENT_ID);
    }

    /** @param app {ApiAiApp} */
    trigger(app) {
        const afterStoryResponse = app.getArgument(ARGS.afterStoryChoice);
        if (!afterStoryResponse) {
            StoriesGame.tellAStory(app);
        } else {
            StoriesGame.afterStory(app);
        }
    }

    /** @param app {ApiAiApp} */
    static tellAStory(app) {
        let availableStories, pickedStory;
        if (app.data.stories && app.data.stories.length) {
            availableStories = app.data.stories.slice();
        } else {
            availableStories = Object.values(STORIES).slice();
        }

        const storyCode = app.getArgument(ARGS.story);
        if (storyCode) {
            pickedStory = STORIES[storyCode];
        } else {
            pickedStory = utils.randomFromArray(availableStories, REMOVE_STORY_WHEN_TOLD);
        }

        app.ask(`<speak>${pickedStory}<break/> Do you want to ear another story ?</speak>`);

        app.data.stories = availableStories;
    }

    /** @param app {ApiAiApp} */
    static afterStory(app) {
        const choice = app.getArgument(ARGS.afterStoryChoice);
        if(choice === CHOICES.yes) {
            StoriesGame.tellAStory(app);
        } else if(choice === CHOICES.no) {
            // TODO ask what to do. Remove context ?
        }
    }
}

module.exports = StoriesGame;