'use strict';

class SimpleIntent {

    constructor(intentId) {
        this.intentId = intentId;
    }

    trigger() {
        throw new Error('Not implemented');
    }

    register(actionMap) {
        actionMap.set(this.intentId, this.trigger.bind(this));
    }
}

module.exports = SimpleIntent;