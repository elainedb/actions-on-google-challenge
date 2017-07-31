'use strict';

exports.randomFromArray = function (array) {
    return array[Math.floor(Math.random() * array.length)];
};

exports.randomIndex = function (array) {
    let index = (Math.random() * (array - 1)).toFixed();
    return parseInt(index, 10);
}

exports.getRandomAnswer = function (app, answers, answerSounds) {
    if (answers < 0) {
            return null;
        }
        let randomIndex = (Math.random() * (answers.size - 1)).toFixed();
        let randomAswerIndex = parseInt(randomIndex, 10);
        // let randomAswerIndex = 0;
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

        for (let answerSound of answerSounds.values()) {
            if (counter === randomAswerIndex) {
                randomAnswerSound = answerSound;
                break;
            }
            counter++;
        }

        app.data.answer = randomAnswer;
        answers.delete(randomAnswer);
        return randomAnswer + `<audio src="${randomAnswerSound}"></audio>`;
}