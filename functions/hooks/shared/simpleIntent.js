'use strict';

class SimpleIntent {

    constructor(intentId) {
        this.intentId = intentId;
    }

    /**
     * @param app {ApiAiApp}
     */
    trigger(app) {
        throw new Error('Not implemented');
    }

    register(actionMap) {
        actionMap.set(this.intentId, this.trigger.bind(this));
    }
}

module.exports = SimpleIntent;