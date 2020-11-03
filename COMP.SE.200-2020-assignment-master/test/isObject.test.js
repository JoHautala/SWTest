import chai from "chai"
import isObject from "../src/isObject.js"

const expect = chai.expect

describe("Is 'value' an object", () => {

    it("object is empty library", () => {
        expect(isObject({})).to.equal(true);
    });

    it("object is an array", () => {
        expect(isObject([1, 2, 3])).to.equal(true);
    });

    it("object is function", () => {
        expect(isObject(isObject)).to.equal(false);
    });

    it("object is null", () => {
        expect(isObject(null)).to.equal(false);
    });
})