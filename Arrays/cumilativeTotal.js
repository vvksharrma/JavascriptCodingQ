// Input array => 10, 15, 20, 25, 30. Output array => 10, 25, 45, 70, 100.

const cumulativeSum = arr => arr.reduce((acc, num) => [...acc, acc.length ? acc[acc.length - 1] + num : num], []);
