var toaster = require('../exercise3');

var chai = require('chai');

var expect = chai.expect;

describe("toaster", function() {
      describe('status', function() {
        it("should instantiate toaster and return a power status of 'off'", function() {
          var t = new toaster();
          expect(t.powerStatus).to.equal("off");
        });
        it("should instantiate toaster and return a toasting status of 'off'", function() {
          var t = new toaster();
          expect(t.toastingStatus).to.equal("off");
        });
      });
      describe("power", function() {
        it("should call the power function and change the power status to 'on'", function() {
          var p = new toaster();
          expect(p.power()).to.equal("on");
        });
        it("should call the power function and change the power status to the opposite of the current status", function() {
          var x = new toaster();
          if (x.power() === "off") {
            var y = new toaster();
            expect(y.power()).to.equal('on');
          } else if (x.power() === "on") {
            var z = new toaster();
            expect(z.power()).to.equal('off');
          }
        });
      });
      describe("toast", function() {
        it("should call the toast function, and if powerStatus is 'off', does not change toasting status to 'on'", function() {
          var t = new toaster();
          if (t.power() === "off") {
            var x = new toaster();
            expect(x.toast()).to.equal('off');
          }
        });
        it("should call the toast function and if the power is 'on', it should set the toasting status to the opposite", function() {
          var m = new toaster();
          if (m.power() === "on") {
            if (m.toast() === "off") {
              expect(m.toast()).to.equal('on');
            } else if (m.toast() === "on") {
              expect(m.toast()).to.equal('off');
            }
          }
        });
        it("should call the toast function and if the power status is 'on', and the toasting status is 'on', and the power function is called, it should set the power status and the toasting status to 'off'", function() {
          var p = new toaster();
          if (p.power() === 'on' && p.toast() === 'on' && p.power()) {
            expect(p.power() === 'off') && expect(p.toast() === 'off');
          }
        }
      );
    });
  });
