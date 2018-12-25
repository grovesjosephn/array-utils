'use strict';

const isSorted = require('..');

describe('is-sorted', () => {
  test('it should be a function', () => {
    expect(typeof isSorted).toBe('function');
  });

  test('without arguments, it should throw an error', () => {
    expect(() => isSorted()).toThrowError(
      'function expects at least one argument'
    );
  });

  it('should expect an array as first input', () => {
    expect(() => isSorted([1, 2, 3])).not.toThrow();
    expect(() => isSorted(1)).toThrowError(
      'function expected an array as first argument'
    );
  });

  test('when given and empty array, it should return true', () => {
    expect(isSorted([])).toBe(true);
  });

  test('when given an array of unordered numbers, it should return false', () => {
    expect(isSorted([1, 2, 3])).toBe(true);
    expect(isSorted([1, 3, 2])).toBe(false);
  });

  test('second argument should be a function', () => {
    expect(() => isSorted([1, 2, 3], () => {})).not.toThrow();
    expect(() => isSorted([1, 2, 3], '() => {}')).toThrowError(
      'second argument should be a comparison function'
    );
  });

  test('with custom comparison function', () => {
    const lengthCompare = (a, b) => a.length - b.length;
    expect(isSorted(['a', 'aa'], lengthCompare)).toBe(true);
    expect(isSorted(['aa', 'a'], lengthCompare)).toBe(false);
  });
});
