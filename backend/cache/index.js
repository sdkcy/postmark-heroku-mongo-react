/**
 * Backend
 * index.js
 * Created by Sıdıka ÇAY on 2019-07-02
 */

const NodeCache = require("node-cache");

class Cache {
    constructor(ttl) {
        this._cache = new NodeCache({stdTTL: ttl});
    }

    get(key, callback) {
        let value = this._cache.get(key);
        if (value) {
            return Promise.resolve(value);
        }

        return callback().then((response) => {
            value = response;
            this._cache.set(key, value);

            return value;
        });
    }

    delete(keys) {
        this._cache.del(keys);
    }
}

module.exports = Cache;
