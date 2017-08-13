'use strict';

exports.SENTENCES_SONG = [
    "Which song do you want to sing? ",
    "I know the following songs: ",
    "Here are the available songs: "
];

exports.SENTENCES_SONG_SING = [
    "Sing with me!",
    "Let's sing!"
];

exports.END_SENTENCES_SONG = [
    `Nice singing! <break time="1s"/>`,
    `You have a really nice voice <break time="1s"/>`,
    `I really like the way you sing! <break time="1s"/>`,
    `Cool singing! <break time="1s"/>`,
    `That was cool! <break time="1s"/>`
];

const ENTITY_SPIDER = "itsy bitsy spider";
const ENTITY_TWINKLE = "twinkle twinkle little star";
const ENTITY_BINGO = "bingo";
const ENTITY_HAPPY = "if you're happy and you know it";

exports.SONGS = new Set([ENTITY_SPIDER, ENTITY_TWINKLE, ENTITY_BINGO, ENTITY_HAPPY]);

exports.SONGS2 = {
    spider: {
        title: 'Itsy Bitsy Spider',
        shortTitle: 'Itsy Bitsy Spider',
        content: 'https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/songs/casimps1_-_Itsy_Bitsy_Spider.mp3'
    },
    twinkle: {
        title: 'Twinkle Twinkle Little Star',
        shortTitle: 'Twinkle Twinkle Little ⭐',
        content: 'https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/songs/casimps1_-_Twinkle_Twinkle_Little_Star.mp3'
    },
    bingo: {
        title: 'BINGO',
        shortTitle: 'BINGO',
        content: 'https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/songs/casimps1_-_Bingo_(B-I-N-G-O).mp3'
    },
    happy: {
        title: `If You're Happy and You Know It`,
        shortTitle: `Happy and You Know It`,
        content: 'https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/songs/casimps1_-_If_You_re_Happy_and_You_Know_It.mp3'
    }
};

const SONGS_SUGGESTIONS = Object.values(exports.SONGS2).map(s => s.title);

exports.SONGS_SUGGESTIONS = SONGS_SUGGESTIONS;
exports.SONGS_SUGGESTIONS_SHORT = Object.values(exports.SONGS2).map(s => s.shortTitle);

exports.NO_INPUT_SUGGESTIONS = [
    "I did not get that, you can choose between " + SONGS_SUGGESTIONS.toString(),
    "Please choose a song: " + SONGS_SUGGESTIONS.toString()
];

exports.NO_INPUT_SUGGESTIONS_END = [
    "Do you want to sing the same song again, another song or do you want to play another game?"
];

exports.SONGS_SRC = new Set([
                            'https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/songs/casimps1_-_Itsy_Bitsy_Spider.mp3',
                            'https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/songs/casimps1_-_Twinkle_Twinkle_Little_Star.mp3',
                            'https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/songs/casimps1_-_Bingo_(B-I-N-G-O).mp3',
                            'https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/songs/casimps1_-_If_You_re_Happy_and_You_Know_It.mp3']);

// sources:
// http://ccmixter.org/people/casimps1 -> we used these ones for the 1st version
// https://archive.org/details/ItsybitsySpider
// https://archive.org/details/TwinkleTwinkle_486
// http://www.grandparents.com/grandkids/activities-games-and-crafts/childrens-songs -> very cool songs, royalty free, but we have to PAY 299usd