const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(/* arr */ arr) {
  let positionArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      positionArr.push(i);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      arr.splice(i, 1);
      i--;
    }
  }

  arr.sort((a, b) => a - b);

  for (let i = 0; i < positionArr.length; i++) {
    arr.splice(positionArr[i], 0, -1);
  }

  return arr;
}

console.log(sortByHeight([4, 2, 9, 11, 2, 16]));

module.exports = {
  sortByHeight
};
