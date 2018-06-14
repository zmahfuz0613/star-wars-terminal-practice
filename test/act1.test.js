/* eslint-env mocha */
const fs = require('fs');
const { exec } = require('child_process');
const { assert, expect } = require('chai');

const tearDown = done => exec('rm -rf star_wars', done);

const tests = [
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

  const commands = fs.readFileSync('act1.sh', 'utf8')
    /* split on newlines */
    .split(/\n/g)

    /* remove blank lines */
    .filter(x => x.trim())

    /* remove any line with a # */
    .filter(x => !(/#/g).test(x))

    /* take out any whitespace */
    .map(x => x.trim());

  // dynamically generate the tests based on each of the commands
  tests.forEach((test, i) => {
    // our test is an array of arrays.
    // use destructuring to separate the key from the val
    const [[should, f]] = Object.entries(test);

    // execute the command then test
    it(should, () => exec(commands[i], f));
  });
});
