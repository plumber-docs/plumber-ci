let TestRunner = require('./TestRunner')
let ToolExamples = require('./ToolExamples')
let _ = require('lodash')
let Mocha = require('mocha')
let Suite = Mocha.Suite


class PlumberTest {
  static runTests(directory) {
    console.log('Running Tests!')
    let mocha = new Mocha({timeout: 60000})
    let suite = Suite.create(mocha.suite, 'Plumber suite')

    ToolExamples.fromYamlFile(directory + '/plumber.yaml', (toolExamples) => {
      _.each(toolExamples.examples, (toolExample) => TestRunner.runTest(toolExample, suite))
      mocha.run(() => console.log("done"))
    })
  }
}

module.exports = PlumberTest