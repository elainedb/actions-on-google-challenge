module.exports = class AbstractDataManager {

    constructor(app, prefix) {
        this.app = app;
        this.prefix = prefix;
        this.references = {};
    }

    getCompletPropName(propName) {
        return this.prefix + propName;
    }

    getData(propName) {
        return this.app.data[this.getCompletPropName(propName)];
    }

    setData(propName, value) {
        let completPropName = this.getCompletPropName(propName);

        this.app.data[completPropName] = value;
        return this.getData(completPropName);
    }
}