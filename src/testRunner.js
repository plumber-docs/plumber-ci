let _ = require('lodash')
let Mocha = require('mocha')
let Test = Mocha.Test
let should = require('should');
let exec = require('child_process').exec;
let S = require('string')
class TestRunner {
  static runTest(example, suite) {
    suite.addTest(new Test(example.name, (done) => {
      let testCommand = example.stepsAsTest
      console.log(`    Running test command: ${testCommand}`)
      exec(testCommand, function(error, stdout, stderr) {
        if(error) {
          throw new Error(`Command returned error: ${error} \n Standard Error: ${stderr}`)
        }
        //Not sure why last doesn't work, seems to be second last ???
        let result = _.last(_.dropRight(S(stdout).split('\n')))
        if(example.expected_result) {
          result.should.be.exactly(example.expected_result.toString())  
        }
        done()
      });
    }))
  }
}

module.exports = TestRunner