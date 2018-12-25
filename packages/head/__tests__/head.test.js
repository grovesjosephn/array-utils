'use strict';

const head = require('..');

describe('head', () => {
  test('function should only run on arrays', () => {
    expect(() => head()).toThrowError('function expects one array argument');
    expect(() => head(1)).toThrowError('function expects an array');
    expect(head([1, 2, 3])).toBe(1);
  });
});
