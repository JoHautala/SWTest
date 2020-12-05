import chai from "chai"
import isArrayLikeObject from "../src/isArrayLikeObject.js"

const expect = chai.expect

describe("Is object array-like and is value an object", () => {

    it("object is array", () => {
        expect(isArrayLikeObject( [1, 2, 3] )).to.equal(true);
    });

    it("object is string", () => {
        expect(isArrayLikeObject('abc')).to.equal(false);
    });

    it("object is function", () => {
        expect(isArrayLikeObject(isArrayLikeObject)).to.equal(false);
    });
})