const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(catsMatrix) {
  numberOfCats = 0;
  for (cats in catsMatrix) {
    for (obj in catsMatrix[cats]) {
      if (catsMatrix[cats][obj] == '^^') {
        numberOfCats++;
      }
    }
  }
  return numberOfCats;
}

module.exports = {
  countCats
};
