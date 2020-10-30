import chai from "chai"
import toFinite from "../src/toFinite.js"

const expect = chai.expect

describe("Converts `value` to a finite number", () => {

    it("value is finite", () => {
        expect(toFinite(3.2)).to.equal(3.2);
    });

    it("value is infinte", () => {
        expect(toFinite(Number.MIN_VALUE)).to.equal(5e-324);
    });

    it("value is infinite", () => {
        const INFINITY = 1 / 0

        expect(toFinite(Infinity)).to.equal(1.7976931348623157e+308);
    });

    it("value is a string", () => {
        expect(toFinite('3.2')).to.equal(3.2);
    });
})