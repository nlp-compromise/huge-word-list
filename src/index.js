const unpack = require('efrt-unpack')
const packd = require('../_build')

const allWords = Object.keys(unpack(packd))
module.exports = allWords
