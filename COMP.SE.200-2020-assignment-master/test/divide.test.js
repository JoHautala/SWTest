import chai from "chai"
import divide from "../src/divide.js"

const expect = chai.expect


describe("Divide", () => {

    it("two non-zero numbers", () => {
        expect(divide(6, 3)).to.equal(2);
    });

    it("divisor zero", () => {
        expect( function() { divide(10, 0) }).to.throw();
    });

    it("dividend and divisor zero", () => {
        expect( function() { divide(0, 0) }).to.throw();
    });

})