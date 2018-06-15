/* eslint-env mocha */
const fs = require('fs');
const { exec } = require('child_process');
const { assert, expect } = require('chai');
const run = require('../lib/customRunner');

const commands = require('../lib/readShellCommands')('act1.sh.js');

const tearDown = done => exec('rm -rf star_wars', done);

const tests = [
/* ACT 1 */
  {
    'should have a folder called star_wars': () => {
    // assert
      assert.isTrue(fs.existsSync('star_wars'), 'star_wars should exist');
    },
  },
  {
    'should have a new folder called star_wars/empire': () => {
      assert.isTrue(fs.existsSync('star_wars/empire'), 'star_wars should exist');
    },
  },
  {
    'should have a new folder called star_wars/rebellion': () => {
      assert.isTrue(fs.existsSync('star_wars/rebellion'), 'star_wars should exist');
    },
  },
  {
    'should have a file star_wars/empire/darth_vader.txt': () => {
      assert.isTrue(fs.existsSync('star_wars/empire/darth_vader.txt'), 'star_wars/empire/darth_vader.txt should exist');
    },
  },
  {
    'darth_vader.txt should contain heavy breathing': () => {
      // ARRANGE
      const expected = '...heavy breathing...';

      // ACT
      const actual = fs.readFileSync('star_wars/empire/darth_vader.txt', 'utf-8');

      // ASSERT
      expect(actual.trim()).to.eql(expected);
    },
  },
  {
    'should have a file called star_wars/empire/emperor_palpatine.txt': () => {
      assert.isTrue(fs.existsSync('star_wars/empire/emperor_palpatine.txt'), 'star_wars/empire/emperor_palpatine.txt should exist');
    },
  },
  {
    'should have a folder called star_wars/empire/death_star': () => {
      assert.isTrue(fs.existsSync('star_wars/empire/death_star'), 'star_wars/empire/death_star should exist');
    },
  },
  {
    'should move darth_vader.txt to  star_wars/empire/death_star': () => {
      assert.isTrue(fs.existsSync('star_wars/empire/death_star/darth_vader.txt'), 'star_wars/empire/death_star/darth_vader.txt should exist');
      assert.isFalse(fs.existsSync('star_wars/empire/darth_vader.txt'), 'star_wars/empire/darth_vader.txt should NOT exist');
    },
  },

];


describe('Act 1', () => {
  // clean up after ourselves
  before(tearDown);
  after(tearDown);
  run(it, commands, tests);
});
