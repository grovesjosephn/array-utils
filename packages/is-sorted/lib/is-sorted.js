'use strict';

module.exports = isSorted;

function isSorted(array, compareFn = (a, b) => a - b) {
  if (arguments.length === 0)
    throw new Error('function expects at least one argument');
  if (!Array.isArray(array))
    throw new Error('function expected an array as first argument');
  if (typeof compareFn !== 'function')
    throw new Error('second argument should be a comparison function');

  let i = 0;
  while (i + 1 < array.length) {
    if (compareFn(array[i], array[i + 1]) > 0) return false;
    i++;
  }

  return true;
}
