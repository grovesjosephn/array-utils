'use strict';

module.exports = head;

function head(array) {
  if (arguments.length === 0)
    throw new Error('function expects one array argument');
  if (!Array.isArray(array)) throw new Error('function expects an array');
  return array[0];
}
