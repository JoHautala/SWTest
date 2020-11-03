import chai from "chai"
import toInteger from "../src/toInteger.js"

const expect = chai.expect

describe("Converts `value` to an integer", () => {

    it("value is float", () => {
        expect(toInteger(3.2)).to.equal(3);
    });

    it("value is min value", () => {
        expect(toInteger(Number.MIN_VALUE)).to.equal(0);
    });

    it("value is infinite", () => {
        expect(toInteger(Infinity)).to.equal(1.7976931348623157e+308);
    });

    it("value is a string", () => {
        expect(toInteger('3.2')).to.equal(3);
    });
})