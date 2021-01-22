const base = require('./lib/base')

module.exports = Object.assign(
    {},
    base,
    { extends: [...base.extends, './lib/ts.js', './lib/vue.js'] }
)
