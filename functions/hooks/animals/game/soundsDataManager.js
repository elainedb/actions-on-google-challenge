const AbstractDataManager = require('../../shared/abstractDataManager');

const AnimalDataManager = require('../animalsDataManager');

const CLASS_PREFIX = 'Sounds';
const ROUND_PROP = 'rounds';
const TRIES_SENTENCES_PROP = 'tries sentences';
const _PROP = 'prop';

module.exports = class SoundsDataManager  extends AbstractDataManager {
    constructor(app, triesSentences) {
        super(app, CLASS_PREFIX, [
            [ROUND_PROP, 1],
            [TRIES_SENTENCES_PROP, triesSentences],
        ]);

        console.log('*** SoundsDataManager : get instance of AnimalDataManager, it should be initialize before there ! ! !');
        this.animalDataManager = AnimalDataManager.getInstance();

        console.log('*** SoundsDataManager : save instance of SoundsDataManager');
        SoundsDataManager._instance = this;
    }

    static getInstance() {
        if (SoundsDataManager._instance) {
            return SoundsDataManager._instance;
        }

        throw 'SoundsDataManager never instanciate, call a new first to initialize the builder !';
    }

    getValidAnimal() {
        return this.animalDataManager.getAnswer();
    }

    getRounds() {
        return this.getData(ROUND_PROP);
    }

    setRounds(rounds) {
        this.setData(ROUND_PROP, rounds);
    }

    getTriesSentencesAvailable() {
        return this.getData(TRIES_SENTENCES_PROP);
    }
}