'use strict';
exports.DEFAULT_LIFESPAN = 5;

exports.randomFromArray = function (array) {
    return array[Math.floor(Math.random() * array.length)];
};

exports.randomIndex = function (array) {
    let index = (Math.random() * (array - 1)).toFixed();
    return parseInt(index, 10);
};

exports.getRandomAnswer = function (app, answers, answerSounds) {
    if (answers < 0) {
            return null;
    }
    let randomIndex = (Math.random() * (answers.size - 1)).toFixed();
    let randomAswerIndex = parseInt(randomIndex, 10);
    
    let counter = 0;
    let randomAnswer = '';
    let randomAnswerSound = '';
    for (let answer of answers.values()) {
        if (counter === randomAswerIndex) {
            randomAnswer = answer;
            break;
        }
        counter++;
    }

    counter = 0;
    for (let answerSound of answerSounds.values()) {
        if (counter === randomAswerIndex) {
            randomAnswerSound = answerSound;
            break;
        }
        counter++;
    }

    app.data.answer = randomAnswer;
    answers.delete(randomAnswer);
    answerSounds.delete(randomAnswerSound);
    return `<audio src="${randomAnswerSound}"></audio>`;
};

exports.getSong = function(app, chosenSong, songs, songsSrc) {
    let counter = 0;
    for (let song of songs.values()) {
        if (song === chosenSong) {
            break;
        }
        counter++;
    }

    let counter2 = 0;
    let chosenSongSrc = '';
    for (let songSrc of songsSrc) {
        if (counter2 === counter) {
            chosenSongSrc = songSrc;
            break;
        }
        counter2++;
    }

    songs.delete(chosenSong);
    songsSrc.delete(chosenSongSrc);

    return `<audio src="${chosenSongSrc}"></audio>`;
}