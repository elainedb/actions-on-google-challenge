'use strict';

exports.SENTENCES_SONG = [
    "Ask me to play a song or tell you what songs I know"
];

exports.SENTENCES_SONG_SING = [
    "Sing with me!"
];

exports.END_SENTENCES_SONG = [
    "Nice singing!",
    "You have a really nice voice",
    "I really like the way you sing!",
    "Cool singing!",
    "That was cool!"
];

const ENTITY_SPIDER = "itsy bitsy spider";
const ENTITY_TWINKLE = "twinkle twinkle little star";
const ENTITY_BINGO = "bingo";
const ENTITY_HAPPY = "if you're happy and you know it";

exports.SONGS = new Set([ENTITY_SPIDER, ENTITY_TWINKLE, ENTITY_BINGO, ENTITY_HAPPY]);

exports.SONGS2 = {
    spider: {
        title: 'Itsy Bitsy Spider',
        content: 'https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/songs/casimps1_-_Itsy_Bitsy_Spider.mp3'
    },
    twinkle: {
        title: 'Twinkle Twinkle Little ⭐',
        content: 'https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/songs/casimps1_-_Twinkle_Twinkle_Little_Star.mp3'
    },
    bingo: {
        title: 'BINGO',
        content: 'https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/songs/casimps1_-_Bingo_(B-I-N-G-O).mp3'
    },
    happy: {
        title: `Happy and You Know It`,
        content: 'https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/songs/casimps1_-_If_You_re_Happy_and_You_Know_It.mp3'
    }
};

exports.SONGS_SUGGESTIONS = Object.values(exports.SONGS2).map(s => s.title);

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