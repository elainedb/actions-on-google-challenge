const utils = require('../../shared/_utils');

const SoundsDataManager = require('./soundsDataManager');

const anotherTries = [
    'Oh ! Are you sure ?',
];

module.exports = class SoundsSentencesBuilder {

    constructor(app) {
        console.log('*** SoundsSentencesBuilder : instancite SoundsSentencesBuilder');
        this.soundsDataManager = new SoundsDataManager(app, anotherTries);
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