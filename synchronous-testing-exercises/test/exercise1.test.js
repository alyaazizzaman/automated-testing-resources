var math = require('../exercise1');

var chai = require('chai');

var expect = chai.expect;

describe("testing math library", function(){
  describe('testing addition', function(){
    it('should add 1+1 to equal 2', function() {
      expect(math.add(1,1)).to.equal(2);
    });
  });
  describe('testing subtraction', function() {
    it('should subtract 1-1 to equal 0', function(){
      expect(math.subtract(1,1)).to.equal(0);
    });
  });
  describe('testing multiplication', function() {
    it('should multiply 3*2 to equal 6', function () {
      expect(math.multiply(3,2)).to.equal(6);
    });
  });
  describe('testing division', function() {
    it('should divide 9*3 to equal 3', function() {
      expect(math.divide(9,3)).to.equal(3);
    });
  });
  describe('testing power', function(){
    it('should return 10 to the power 2, which equals 100', function() {
      expect(math.power(10,2)).to.equal(100);
    });
  });
  describe('testing square root', function() {
    it('should return the square root of 100, which is 10', function() {
      expect(math.squareRoot(100)).to.equal(10);
    });
  });
});
