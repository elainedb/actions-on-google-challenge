const AbstractDataManager = require('../shared/abstractDataManager');

const ANIMALS_QUESTION = require('./animalData').SENTENCES_ANIMAL_SOUNDS;

const CLASS_PREFIX = 'Animals';
const QUESTION_PROP = 'WichIsThisAnimal';
const ANIMAL_ANSWER = 'the animal :)';

let _this;

module.exports = class AnimalsDataManager  extends AbstractDataManager {
    constructor(app, animalAnswer) {
        super(app, CLASS_PREFIX, [
            [QUESTION_PROP, ANIMALS_QUESTION],
            [ANIMAL_ANSWER, animalAnswer],
        ]);

        console.log('*** AnimalsDataManager : save instance of AnimalsDataManager with :');
        console.log(animalAnswer);
        AnimalsDataManager._instance = this; 
    }

    static getInstance() {
        if (AnimalsDataManager._instance) {
            return AnimalsDataManager._instance;
        }

        throw 'AnimalsDataManager never instanciate, call a new first to initialize the builder !';
    }

    getQuestionsAvailable() {
        return this.getData(QUESTION_PROP);
    }


    getAnswer() {
        return this.getData(ANIMAL_ANSWER);
    }
}