'use strict';

const sum = require('./script'); // Import the function

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2) / 2).toBe(1); // Fixed typo: 'toBee' -> 'toBe'
});
