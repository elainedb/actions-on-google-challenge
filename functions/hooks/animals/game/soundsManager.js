const SoundsDataManager = require('./soundsDataManager');

module.exports = class SoundsManager {

    constructor() {
        console.log('*** SoundsManager : instanciate new SoundsManager, a new SoundsDataManager have to be called before there ...');
        this.dataManager = SoundsDataManager.getInstance();
    }

    isValidAnswer(userAnswer) {

        let animalName = this.dataManager.getValidAnimal().name;

        console.log('*** SoundsManager : user say ', userAnswer);
        console.log('*** SoundsManager : expected :', animalName);
        return userAnswer === animalName;
    }

    getValidAnimal() {
        return this.dataManager.getValidAnimal();
    }

    hasOtherTry() {
        let round = this.dataManager.getRounds();
        console.log('*** SoundsManager : current round : ', round);
        return round <= 2;
    }

    incrementRound() {
        this.dataManager.setRounds(this.dataManager.getRounds() + 1);
    }
}