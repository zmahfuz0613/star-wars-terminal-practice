/* eslint-env mocha */
const fs = require('fs');
const { exec } = require('child_process');
const { assert, expect } = require('chai');
const readShellCommands = require('../lib/readShellCommands');
const run = require('../lib/customRunner');

const setUp = (done) => {
  const act1 = readShellCommands('act1.sh').join(';');
  exec(act1, done);
};

const tearDown = done => exec('rm -rf star_wars', done);

const commands = readShellCommands('act2.sh');
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
  {
    'should create a directory called star_wars/rebellion/millenium_falcon': () => {
      assert.isTrue(fs.existsSync('star_wars/rebellion/millenium_falcon'), 'star_wars/rebellion/millenium_falcon should exist');
    },
  },
  {
    'should create a file called star_wars/rebellion/millenium_falcon/han_solo': () => {
      assert.isTrue(fs.existsSync('star_wars/rebellion/millenium_falcon/han_solo'), 'star_wars/rebellion/millenium_falcon/han_solo should exist');
    },
  },
  {
    'should create a file called star_wars/rebellion/millenium_falcon/chewy': () => {
      assert.isTrue(fs.existsSync('star_wars/rebellion/millenium_falcon/chewy'), 'star_wars/rebellion/millenium_falcon/chewy should exist');
    },
  },
  {
    'should move luke_skywalker into star_wars/rebellion/millenium_falcon': () => {
      assert.isFalse(fs.existsSync('star_wars/rebellion/luke_skywalker'), 'star_wars/rebellion/luke_skywalker should NOT exist');
      assert.isTrue(fs.existsSync('star_wars/rebellion/millenium_falcon/luke_skywalker'), 'star_wars/rebellion/millenium_falcon/luke_skywalker should exist');
    },
  },
  {
    'should move obi_wan into star_wars/rebellion/millenium_falcon': () => {
      assert.isFalse(fs.existsSync('star_wars/rebellion/obi_wan'), 'star_wars/rebellion/obi_wan should NOT exist');
      assert.isTrue(fs.existsSync('star_wars/rebellion/millenium_falcon/obi_wan'), 'star_wars/rebellion/millenium_falcon/obi_wan should exist');
    },
  },
  {
    'should move princess_leia into star_wars/rebellion/millenium_falcon': () => {
      assert.isFalse(fs.existsSync('star_wars/rebellion/princess_leia'), 'star_wars/rebellion/princess_leia should NOT exist');
      assert.isTrue(fs.existsSync('star_wars/rebellion/millenium_falcon/princess_leia'), 'star_wars/rebellion/millenium_falcon/princess_leia should exist');
    },
  },
  {
    'should move millenium_falcon into star_wars/empire/death_star': () => {
      assert.isFalse(fs.existsSync('star_wars/rebellion/millenium_falcon'), 'star_wars/rebellion/millenium_falcon should NOT exist');
      assert.isTrue(fs.existsSync('star_wars/empire/death_star/millenium_falcon'), 'star_wars/empire/death_star/millenium_falcon should exist');
    },
  },

];

describe('Act 2', () => {
  // set up
  before(setUp);
  after(tearDown);
  // dynamically generate the tests based on each of the commands
  run(it, commands, tests);
});
