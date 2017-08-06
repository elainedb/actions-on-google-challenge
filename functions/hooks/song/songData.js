'use strict';

exports.SENTENCES_SONG = [
    "Ask me to play a song or tell you what songs I know"
];

exports.SENTENCES_SONG_SING = [
    "Sing with me!"
];

const ENTITY_SPIDER = "itsy bitsy spider";
const ENTITY_TWINKLE = "twinkle twinkle little star";

exports.SONGS = new Set([ENTITY_SPIDER, ENTITY_TWINKLE]);

exports.SONGS_SRC = new Set([
                            'https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/songs/ItsyBitsySpider.mp3',
                            'https://storage.googleapis.com/project-2252662783422070807.appspot.com/sounds/songs/03TwinkleTwinkle.mp3']);