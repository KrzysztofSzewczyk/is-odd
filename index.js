/*!
 * is-odd <https://github.com/jonschlinkert/is-odd>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

const isNumber = require('is-number');

module.exports = function isOdd(value) {
  const n = Math.abs(value);
  if (!isNumber(n)) {
    throw new TypeError('expected a number');
  }
  if (!Number.isInteger(n)) {
    throw new Error('expected an integer');
  }
  if (!isSafeInteger(n)) {
    throw new Error('value exceeds maximum safe integer');
  }
  return (n % 2) === 1;
};

function isSafeInteger(n) {
  if (typeof Number.isSafeInteger === 'function') {
    return Number.isInteger(n) && (n <= Number.MAX_SAFE_INTEGER);
  }
  return Number.isSafeInteger(n);
}
