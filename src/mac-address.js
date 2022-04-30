const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(/* n */ n) {
  let splitted = n.split('-');

  for (let i = 0; i < splitted.length; i++) {
    for (let j = 0; j < splitted[i].length; j++) {
      if ((splitted[i][j] >= 0 && splitted[i][j] <= 9) || (splitted[i][j] >= 'A' && splitted[i][j] < 'G')) {
        continue;
      } else {
        return false;
      }
    }
  }

  return true;
}
module.exports = {
  isMAC48Address
};
