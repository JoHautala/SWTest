import chai from "chai"
import isArrayLike from "../src/isArrayLike.js"

const expect = chai.expect

describe("Is object array-like?", () => {

    it("object is array", () => {
        expect(isArrayLike( [1,2,3,4,5] )).to.equal(true);
    });

    it("object is string", () => {
        expect(isArrayLike("string here")).to.equal(true);
    });

    it("object is function", () => {
        expect(isArrayLike(isArrayLike)).to.equal(false);
    });
})