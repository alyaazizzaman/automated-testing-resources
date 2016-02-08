var tax = require('../exercise2');

var chai = require('chai');

var expect = chai.expect;

describe("tax calculator", function() {
  it("should multiply 10 by 0.1 to equal 1", function() {
    expect(tax.calculate(10)).to.equal(1);
  });
  it("should multiply 13 by .07 to equal .91", function() {
    expect(tax.calculate(13)).to.equal(0.91);
  });
  it("should multiply 25 by .05 to equal", function() {
    expect(tax.calculate(25)).to.equal(1.25);
  });
  it("should multiply $33 by .03 to equal 9.9", function() {
    expect(tax.calculate(33)).to.equal(0.99);
  });
  it("should return null", function() {
    expect(tax.calculate(Math.sign(-1))).to.equal(null);
  });
});
