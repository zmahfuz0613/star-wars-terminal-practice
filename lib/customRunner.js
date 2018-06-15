const { exec } = require('child_process');

module.exports = (it, commands, tests) => {
  tests.forEach((test, i) => {
    // our test is an array of arrays.
    // use destructuring to separate the key from the val
    const [[should, f]] = Object.entries(test);

    if (i in commands) {
      // we need to pass done, otherwise they'll execute out of order
      it(should, (done) => {
        // execute the command, call the callback when done
        exec(commands[i], (...args) => {
          // execute the test then done
          f();
          done(...args);
        });
      });
    } else {
      it(should, f);
    }
  });
};
