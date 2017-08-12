const AbstractDataManager = require('../../shared/abstractDataManager');

const CLASS_PREFIX = 'Hint';
const INTROS_PROP = 'intros';

module.exports = class HintDataManager extends AbstractDataManager {

    constructor(app, intros) {
        super(app, CLASS_PREFIX);

        // equivalent to if (this.getData(INTROS_PROP) == false) this.setData(INTROS_PROP, intro);
        // or if no data found for INTROS_PROP, set one :)
        this.getData(INTROS_PROP) || this.setData(INTROS_PROP, intros);
    }

    getIntrosAvailable() {
        let unusedIntros = this.getData('intros');
        return unusedIntros && [... unusedIntros] || [... this.references.intros];
    }
}