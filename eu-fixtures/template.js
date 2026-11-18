const _ = require('lodash')

module.exports = (source, values) => _.template(source)(values)
