const AbstractDataManager = require('../../shared/abstractDataManager');

const CLASS_PREFIX = 'Hint';
const INTROS_PROP = 'intros';

module.exports = class HintDataManager extends AbstractDataManager {

    constructor(app, intros) {
        super(app, CLASS_PREFIX, [
            [INTROS_PROP, intros]
        ]);

        HintDataManager._instance = this;
    }

    static getInstance() {
        if (HintDataManager._instance) {
            return HintDataManager._instance;
        }

        throw 'HintDataManager never instanciate, call a new first to initialize the builder !';
    }

    getIntrosAvailable() {
        let unusedIntros = this.getData('intros');
        return unusedIntros && [... unusedIntros] || [... this.references.intros];
    }
}