import chai from "chai"
import castArray from "../src/castArray.js"

const expect = chai.expect

describe("Casting arrays", () => {

    it("parameter already array", () => {
        expect(castArray([1, 2, 3])).to.be.an('array');
    });

    it("parameter not yet array", () => {
        expect(castArray("test string")).to.be.an('array');
    });

    it("empty parameter", () => {
        expect(castArray()).to.be.an('array');
    });
})