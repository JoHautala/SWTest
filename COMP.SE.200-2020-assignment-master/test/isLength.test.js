import chai from "chai"
import isLength from "../src/isLength.js"

const expect = chai.expect

describe("Is object a valid array-like length?", () => {

    it("object is integer", () => {
        expect(isLength(3)).to.equal(true);
    });

    it("object is minimum number", () => {
        expect(isLength(Number.MIN_VALUE)).to.equal(false);
    });

    it("object is string", () => {
        expect(isLength('3')).to.equal(false);
    });
})