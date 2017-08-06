'use strict';

exports.ENTITY_GAME = "game";

exports.SENTENCES = [
    "OK, let's play ",
    "Cool, let's play ",
    "Yeah! Let's play "
];

exports.SENTENCES_AGAIN = [
    "OK, let's play another game of animal sounds!",
    "Cool, let's play a new game of animal sounds!",
    "Yeah! Let's play a new game of animal sounds!"
];

const GAME_SUGGESTIONS = [
    "The animal sounds ",
    "Sing a song",
    "Hear a story"
];

exports.GAME_SUGGESTIONS = GAME_SUGGESTIONS;

exports.NO_INPUT_SUGGESTIONS = [
    "I did not get that, you can choose between " + GAME_SUGGESTIONS.toString(),
    "Please choose a game: " + GAME_SUGGESTIONS.toString()
];

exports.CHOOSE_GAME_SENTENCES = [
    "What do you want to do? Play the animal sounds? Sing a song? Hear a story?",
    "Let's play together! You can choose between: " +
    "<p> The animal sounds, </p>" +
    "<p> Sing a song or </p>" +
    "<p> Hear a story</p>"
];
