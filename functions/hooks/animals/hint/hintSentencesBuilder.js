const utils = require('../../shared/_utils');
const HintDataManager = require('./hintDataManager');

const INTROS = [
     'This one was hard, guess it with this hint',
];

/**
 * Centralize all specific sentences of hint intent
 */
module.exports = class HintSentencesBuilder {

    constructor(app) {
        this.hintDataManager = new HintDataManager(app, INTROS);
    }

    /**
     * return a random intro
     */
    getRandomIntro() {
        return utils.randomFromArray(this.hintDataManager.getIntrosAvailable(), true);
    }

    /**
     * @param {AnimalModel} animal the animal containing hints
     * @param {number} index the index of the hint
     * @return {string} animal.hints[index] or default sentence if none is set
     */
    getHint(animal, index) {
        return animal.hints[index] || 'Oh, i\'m a afraid, i have none to help you, try my friend';
    }
}