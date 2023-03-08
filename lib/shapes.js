// A constructor shapes is created.
function shapes() {}

// Constructor shapes is given a sum method that returns two numbers added together.
shapes.prototype.sum = (a, b) => { // TODO: NOT SUM
  return a + b;
};

// Constructor shapes is exported from the file.
module.exports = shapes;