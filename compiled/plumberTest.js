'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TestRunner = require('./TestRunner');
var ToolExamples = require('./ToolExamples');
var _ = require('lodash');
var Mocha = require('mocha');
var Suite = Mocha.Suite;

var PlumberTest = (function () {
  function PlumberTest() {
    _classCallCheck(this, PlumberTest);
  }

  _createClass(PlumberTest, null, [{
    key: 'runTests',
    value: function runTests(directory) {
      console.log('Running Tests!');
      var mocha = new Mocha({ timeout: 60000 });
      var suite = Suite.create(mocha.suite, 'Plumber suite');

      ToolExamples.fromYamlFile(directory + '/plumber.yaml', function (toolExamples) {
        _.each(toolExamples.examples, function (toolExample) {
          return TestRunner.runTest(toolExample, suite);
        });
        mocha.run(function () {
          return console.log("done");
        });
      });
    }
  }]);

  return PlumberTest;
})();

module.exports = PlumberTest;