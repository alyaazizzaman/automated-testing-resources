module.exports = {
  calculate: function(num) {
    if (num <= 10 && num > 0) {
      return (num * (0.1));
    } else if (num > 10 && num < 20) {
      return (parseFloat((num * (0.07)).toFixed(2)));
    } else if (num >= 20 && num <= 30) {
      return (parseFloat((num * (0.05)).toFixed(2)));
    } else if (num >= 30) {
      return (parseFloat((num * (0.03)).toFixed(2)));
    } else {
      return null;
    }
  }
};
