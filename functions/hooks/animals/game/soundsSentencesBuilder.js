const utils = require('../../shared/_utils');

const SoundsDataManager = require('./soundsDataManager');

exports.anotherTries = [
    'Oh ! Are you sure ?',
];

module.exports = class SoundsSentencesBuilder {

    constructor() {
        this.soundsDataManager = SoundsDataManager.getInstance();
    }

    getYouWooon() {
        let animalName = this.soundsDataManager.getValidAnimal().name;
        return `Good job! It was indeed ${utils.article(animalName)} ${animalName}`;
    }

    getAnotherTry() {
        return utils.randomFromArray(this.soundsDataManager.getTriesSentencesAvailable());
    }

    getOoopsYouLost() {
        let animalName = this.soundsDataManager.getValidAnimal().name;
        return `Wrong answer. It was ${utils.article(animalName)} ${animalName}`;
    }
}