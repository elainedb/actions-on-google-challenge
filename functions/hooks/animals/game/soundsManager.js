const SoundsDataManager = require('./soundsDataManager');

module.exports = class SoundsManager {

    constructor() {
        console.log('*** SoundsManager : instanciate new SoundsManager, a new SoundsDataManager have to be called before there ...');
        this.dataManager = SoundsDataManager.getInstance();
    }

    isValidAnswer(useranswer) {
        return useranswer === this.dataManager.getValidAnimal().name;
    }

    hasOtherTry() {
        return this.dataManager.getRounds() <= 3;
    }
}