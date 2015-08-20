console.log('Got here!')
require("babel/register")({
  extensions: [".es6", ".es", ".jsx", ".js"],
});
PlumberTest = require('./plumberTest')
exports.PlumberTest = PlumberTest