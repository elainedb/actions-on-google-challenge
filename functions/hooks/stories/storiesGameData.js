'use strict';

exports.INTENT_ID = 'intent.auntie.game.story';

exports.ARGS = {
    story: 'story',
    afterStoryChoice: 'choice'
};

exports.LIST_STORIES_SENTENCES = [
    'Great! Here are the available stories: '
];

exports.STORIES = {
    numbers: {
        title: 'Numbers',
        content: 'What did 0 say to 8 ?<break time="3s"/>Nice belt!'
    },
    towel: {
        title: 'Towel',
        content: 'What gets wetter the more it dries ?<break time="3s"/>A towel!'
    }
};

exports.CHOICES = {
    yes: 'yes',
    again: 'again',
    no: 'no'
};
