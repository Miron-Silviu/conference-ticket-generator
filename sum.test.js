'use strict';

const sum = require('./sum'); // Import the function

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3); // Fixed typo: 'toBee' -> 'toBe'
});
