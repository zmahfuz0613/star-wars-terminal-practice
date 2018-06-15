/* eslint-env mocha */
const fs                  = require('fs');
const { exec }            = require('child_process');
const { assert, expect }  = require('chai');
const readShellCommands   = require('../lib/readShellCommands');
const run                 = require('../lib/customRunner');

const setUp = (done) => {
  const act1 = readShellCommands('act1.sh.js');
  const act2 = readShellCommands('act2.sh.js');
  exec([...act1, ...act2].join(';'), done);
};

// const tearDown = done => exec('rm -rf star_wars', done);

const commands = readShellCommands('act3.sh.js');
const tests = [
  {
    'should move the whole crew into the death_star': () => {
      assert.isTrue(fs.existsSync('star_wars/empire/death_star/han_solo'), 'star_wars/empire/death_star/han_solo should exist');
      assert.isTrue(fs.existsSync('star_wars/empire/death_star/chewy'), 'star_wars/empire/death_star/chewy should exist');
      assert.isTrue(fs.existsSync('star_wars/empire/death_star/luke_skywalker'), 'star_wars/empire/death_star/luke_skywalker should exist');
      assert.isTrue(fs.existsSync('star_wars/empire/death_star/obi_wan'), 'star_wars/empire/death_star/obi_wan should exist');
      assert.isTrue(fs.existsSync('star_wars/empire/death_star/princess_leia'), 'star_wars/empire/death_star/princess_leia should exist');

      assert.isFalse(fs.existsSync('star_wars/star_wars/empire/death_star/millenium_falcon/han_solo'), 'star_wars/star_wars/empire/death_star/millenium_falcon/han_solo should NOT exist');
      assert.isFalse(fs.existsSync('star_wars/star_wars/empire/death_star/millenium_falcon/chewy'), 'star_wars/star_wars/empire/death_star/millenium_falcon/chewy should NOT exist');
      assert.isFalse(fs.existsSync('star_wars/star_wars/empire/death_star/millenium_falcon/luke_skywalker'), 'star_wars/star_wars/empire/death_star/millenium_falcon/luke_skywalker should NOT exist');
      assert.isFalse(fs.existsSync('star_wars/star_wars/empire/death_star/millenium_falcon/obi_wan'), 'star_wars/star_wars/empire/death_star/millenium_falcon/obi_wan should NOT exist');
      assert.isFalse(fs.existsSync('star_wars/star_wars/empire/death_star/millenium_falcon/princess_leia'), 'star_wars/star_wars/empire/death_star/millenium_falcon/princess_leia should NOT exist');
    },
  },
  {
    'should remove obi_wan': () => {
      assert.isFalse(fs.existsSync('star_wars/empire/death_star/obi_wan'), 'star_wars/empire/death_star/obi_wan should NOT exist');
    },
  },
  {
    'should move han_solo back into millenium_falcon': () => {
      assert.isTrue(fs.existsSync('star_wars/empire/death_star/millenium_falcon/han_solo'), 'star_wars/empire/death_star/millenium_falcon/han_solo should exist');
    },
  },
  {
    'should move chewy back into millenium_falcon': () => {
      assert.isTrue(fs.existsSync('star_wars/empire/death_star/millenium_falcon/chewy'), 'star_wars/empire/death_star/millenium_falcon/chewy should exist');
    },
  },
  {
    'should move luke back into millenium_falcon': () => {
      assert.isTrue(fs.existsSync('star_wars/empire/death_star/millenium_falcon/luke_skywalker'), 'star_wars/empire/death_star/millenium_falcon/luke_skywalker should exist');
    },
  },
  {
    'should move princess_leia back into millenium_falcon': () => {
      assert.isTrue(fs.existsSync('star_wars/empire/death_star/millenium_falcon/princess_leia'), 'star_wars/empire/death_star/millenium_falcon/princess_leia should exist');
    },
  },
  {
    'should move the millenium_falcon into the rebellion': () => {
      assert.isTrue(fs.existsSync('star_wars/rebellion/millenium_falcon'), 'star_wars/rebellion/millenium_falcon should exist');
    },
  },
  {
    'should move the darth_vader into the empire': () => {
      assert.isTrue(fs.existsSync('star_wars/empire/darth_vader'), 'star_wars/darth_vader should exist');
    },
  },
  {
    'should remove the death_star': () => {
      assert.isFalse(fs.existsSync('star_wars/empire/death_star'), 'star_wars/death_star should NOT exist');
    },
  },
];

describe('Act 3', () => {
  // // set up
  before(setUp);

  // dynamically generate the tests based on each of the commands
  run(it, commands, tests);


  it('should maintain the correct file structure', (done) => {
    // EXPECT
    const final_scene = fs.readFileSync('test/final_scene', 'utf-8');

    // ACT
    exec('tree star_wars', (error, stdout) => {
      // ASSERT
      assert.isNull(error);
      expect(stdout).to.equal(final_scene);
      done(error);
    });
  });
});
