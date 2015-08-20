'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ = require('lodash');
var Mocha = require('mocha');
var Test = Mocha.Test;
var should = require('should');
var exec = require('child_process').exec;
var S = require('string');

var TestRunner = (function () {
  function TestRunner() {
    _classCallCheck(this, TestRunner);
  }

  _createClass(TestRunner, null, [{
    key: 'runTest',
    value: function runTest(example, suite) {
      console.log(example);
      suite.addTest(new Test(example.name, function (done) {
        var testCommand = example.stepsAsTest;
        console.log('    Running test command: ' + testCommand);
        exec(testCommand, function (error, stdout, stderr) {
          if (error) {
            throw new Error('Command returned error: ' + error + ' \n Standard Error: ' + stderr);
          }
          //Not sure why last doesn't work, seems to be second last ???
          var result = _.last(_.dropRight(S(stdout).split('\n')));
          if (example.expected_result) {
            result.should.be.exactly(example.expected_result.toString());
          }
          done();
        });
      }));
    }
  }]);

  return TestRunner;
})();

module.exports = TestRunner;