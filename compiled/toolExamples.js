'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var fs = require('fs');
var SuperAgent = require('superagent');

var ToolExamples = (function () {
  function ToolExamples() {
    _classCallCheck(this, ToolExamples);
  }

  _createClass(ToolExamples, null, [{
    key: 'fromYamlFile',
    value: function fromYamlFile(file, callback) {
      fs.readFile(file, 'utf8', function (error, data) {
        if (error) {
          throw error;
        }
        SuperAgent.post('https://development-plumber-api.herokuapp.com/api/examples.json').set('Content-Type', 'text/plain').send(data).end(function (error, result) {
          if (error) {
            throw error;
          }
          callback(result.body);
        });
      });
    }
  }]);

  return ToolExamples;
})();

module.exports = ToolExamples;