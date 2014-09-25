var fs = require('fs')
var Promise = require('promise');

exports.read = Promise.denodeify(fs.readFile)
