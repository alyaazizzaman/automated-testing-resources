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
});
