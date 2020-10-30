import chai from "chai"
import toNumber from "../src/toNumber.js"

const expect = chai.expect

describe("Converts `value` to a number.", () => {

    it("object is number", () => {
        expect(toNumber(3.2)).to.equal(3.2);
    });

    it("object is min number", () => {
        expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
    });

    it("object is string", () => {
        expect(toNumber('3.2')).to.equal(3.2);
    });
})