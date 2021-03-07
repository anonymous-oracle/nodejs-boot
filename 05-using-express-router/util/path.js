// DO NOT USE THIS ANYMORE

const path = require('path');

// returns the main module of the path
module.exports = path.dirname(process.mainModule.filename);