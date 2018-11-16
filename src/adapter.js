let adapter = {}
const isBrowser = new Function("try {return this===window;}catch(e){ return false;}");
var isNode = new Function("try {return this===global;}catch(e){return false;}");

adapter.detectEnvironment = () => {
    if (isBrowser()) {
        return 'Browser'
    }
    if (isNode()) {
        return 'Node'
    }
    return 'Base'
}

module.exports = adapter;