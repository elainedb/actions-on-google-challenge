const utils = require('../shared/_utils');

const AnimalsDataManager = require('./animalsDataManager');

module.exports = class AnimalsSentencesBuilder {

    constructor() {
        this.animalsDataManager = AnimalsDataManager.getInstance();
    }

    getQuestion() {
        return utils.randomFromArray(this.animalsDataManager.getQuestionsAvailable(), true);
    }
}