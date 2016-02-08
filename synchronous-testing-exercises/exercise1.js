module.exports = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    if (b === 0) {
      return null;
    } else {
      return a / b;
    }
  },
  power: function(a, b) {
    return Math.pow(a, b);
  },
  squareRoot: function(a) {
    return Math.sqrt(a);
  }
};
