const adapter = require('./adapter');

const env = adapter.detectEnvironment();
let jsSDK;

if (env === 'Node') {
    jsSDK = require('./node/src/main');
} else if (env === 'Browser') {
    jsSDK = require('./browser/src/main')
} else {
    jsSDK = require('./base/src/main');
}

module.exports = jsSDK;