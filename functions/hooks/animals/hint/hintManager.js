module.exports = class HintManager {
    
    /**
     * @param {AnimalModel} animal the animal with hints
     */
    incrementHintCounter(animal) {
        // no need to manage 3 possibility Intent should change it response on the third try
        return animal.hintCounter++;
    }
}