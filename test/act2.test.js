/* eslint-env mocha */
const fs = require('fs');
const { exec } = require('child_process');
const { assert, expect } = require('chai');
const readShellCommands = require('../lib/readShellCommands');

const setUp = (done) => {
  const act1 = readShellCommands('act1.sh.js').join(';');
  exec(act1, done);
}
//const tearDown = done => exec('rm -rf star_wars', done);

const commands = readShellCommands('act2.sh.js');
const tests = [
  {
    'should create a princess_leia file, and contain the right contents': () => {
      // ARRANGE
      const expected = 'Help me, Obi-Wan…You’re my only hope.';

      // ACT
      const actual = fs.readFileSync('star_wars/rebellion/princess_leia', 'utf-8');

      // ASSERT
      expect(actual.trim()).to.eql(expected);
    },
  },
  {
    'should create a file called star_wars/rebellion/obi_wan': () => {
      assert.isTrue(fs.existsSync('star_wars/rebellion/obi_wan'), 'star_wars/rebellion/obi_wan should exist');
    },
  },
  {

    'should create a file called star_wars/rebellion/luke_skywalker': () => {
      assert.isTrue(fs.existsSync('star_wars/rebellion/luke_skywalker'), 'star_wars/rebellion/luke_skywalker should exist');
    },
  },
];

console.log(tests, commands)
describe('Act 2', () => {
  // set up
  before(setUp);

  // dynamically generate the tests based on each of the commands
  tests.forEach((test, i) => {
    console.log(i)
    // our test is an array of arrays.
    // use destructuring to separate the key from the val
    const [[should, f]] = Object.entries(test);

    // execute the command then test
    it(should, () => exec(commands[i], f));
  });
});
