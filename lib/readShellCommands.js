const fs = require('fs');

module.exports = filename => fs.readFileSync(filename, 'utf8')
  /* split on newlines */
  .split(/\n/g)

  /* remove blank lines */
  .filter(x => x.trim())

  /* remove any line with a # */
  .filter(x => !(/#/g).test(x))

  /* take out any whitespace */
  .map(x => x.trim());
