module.exports = class HintManager {
    incrementHintCounter(animal) {
        return animal.hintCounter < 3 ? animal.hintCounter++ : animal.hintCounter = 0;
    }
}