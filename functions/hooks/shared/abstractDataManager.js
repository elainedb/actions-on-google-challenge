module.exports = class AbstractDataManager {
    /**
     * 
     * @param {ApiAiApp} app ...
     * @return {AbstractDataManager} a singelton of SoundsDataManager
     */
    static getInstance() {
        throw 'getInctance should be implemented by the child class ! ! !';
    }

    /**
     * centralize all rules to access app.data props
     * @param {ApiAiApp} app the app variable available from trigger intent function
     * @param {string} prefix a prefix to scope data in app.data
     * @param {[string, any]} defaultProps all default key to set with default any value if no data setted
     */
    constructor(app, prefix, defaultProps) {
        console.log('--- AbstractDataManager : create new AbstractDataManger with:');
        console.log(app.data);
        console.log(prefix);
        console.log(defaultProps);
        this.app = app;
        this.prefix = prefix;
        this.references = {};

        for (let props of defaultProps) {
            let items = this.getData(props[0]);
            if (!items || items.length < 1) {
                this.setData(props[0], props[1]);
                console.log('save new data : ', props[0], props[1]);
            } else {
                console.log('keep data from app.data : ', items);
            }
        }
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