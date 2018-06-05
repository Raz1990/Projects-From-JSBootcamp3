const {getHashCode} = require('./hashCode');

class ObjectPool {

    constructor(){
        this.container = {};
    }

    add(obj) {
        const hashCode = getHashCode(obj);
        if (!this.contains(obj)) {
            this.container[hashCode] = obj;
        }
    }

    contains(obj){
        const hashCode = getHashCode(obj);
        return !!this.container[hashCode];
    }
}

module.exports = ObjectPool;