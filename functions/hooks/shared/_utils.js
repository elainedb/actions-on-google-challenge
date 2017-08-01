'use strict';
exports.DEFAULT_LIFESPAN = 5;

/**
 * Pick a random element from an array. The source array is not modified unless removePicked is true, then
 * the picked element is removed from source array
 *
 * @param array {[]} source array
 * @param removePicked {boolean=}
 * @return {*} picked element on null if array is null or empty
 */
exports.randomFromArray = function (array, removePicked) {
    if (!array || array.length === 0) {
        return null;
    }
    const index = Math.floor(Math.random() * array.length);
    const picked = array[index];
    if (removePicked) {
        array.splice(index, 1);
    }
    return picked;
};

exports.randomIndex = function (array) {
    let index = (Math.random() * (array - 1)).toFixed();
    return parseInt(index, 10);
};

/**
 * Remove an element from an array if element is present
 *
 * @param array {[]}
 * @param element {*}
 * @return {boolean} true if element was present, false otherwise
 */
exports.removeFromArray = function (array, element) {
    const index = array.indexOf(element);
    if (index >= 0) {
        array.splice(index, 1);
        return true;
    }
    return false;
};

/**
 * Return first array if defined and not empty, return fallback value otherwise
 *
 * @param array {[]}
 * @param fallback {[]}
 * @return {[]}
 */
exports.arrayOrDefaults = function (array, fallback) {
    return (array && array.size) ? array : fallback;
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
};

exports.article = function indefinite_article(phrase) {

    // Getting the first word
    let match = /\w+/.exec(phrase);
    let word;
    if (match) word = match[0];
    else return "an";

    let l_word = word.toLowerCase();
    // Specific start of words that should be preceded by 'an'
    let alt_cases = ["honest", "hour", "hono"];
    for (let i in alt_cases) {
        if (l_word.indexOf(alt_cases[i]) === 0)
            return "an";
    }

    // Single letter word which should be preceeded by 'an'
    if (l_word.length === 1) {
        if ("aedhilmnorsx".indexOf(l_word) >= 0)
            return "an";
        else
            return "a";
    }

    // Capital words which should likely be preceeded by 'an'
    if (word.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/)) {
        return "an";
    }

    // Special cases where a word that begins with a vowel should be preceeded by 'a'
    let regexes = [/^e[uw]/, /^onc?e\b/, /^uni([^nmd]|mo)/, /^u[bcfhjkqrst][aeiou]/];
    for (let i in regexes) {
        if (l_word.match(regexes[i]))
            return "a";
    }

    // Special capital words (UK, UN)
    if (word.match(/^U[NK][AIEO]/)) {
        return "a";
    }
    else if (word === word.toUpperCase()) {
        if ("aehilmnorsx".indexOf(l_word[0]) >= 0)
            return "an";
        else
            return "a";
    }

    // Basic method of words that begin with a vowel being preceeded by 'an'
    if ("aeiou".indexOf(l_word[0]) >= 0) return "an";

    // Instances where y follwed by specific letters is preceeded by 'an'
    if (l_word.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)) return "an";

    return "a";
};