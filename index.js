require("babel/register")({
  extensions: [".es6", ".es", ".jsx", ".js"],
});
PlumberCi = require('./plumberCi')
module.exports = PlumberCi