// 1. Function expression
const divide = function(a, b) {
  return a / b;
};

// 2. Arrow function with one parameter
const square = (x) => x * x;

// 3. Arrow function with two parameters
const add = (a, b) => a + b;

// export if needed for tests
module.exports = { divide, square, add };
