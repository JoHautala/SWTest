import chai from "chai"
import isObjectLike from "../src/isObjectLike.js"

const expect = chai.expect

describe("Is object object-like?", () => {

    it("object is empty library", () => {
        expect(isObjectLike({})).to.equal(true);
    });

    it("object is array", () => {
        expect(isObjectLike([1, 2, 3])).to.equal(true);
    });

    it("object is function", () => {
        expect(isObjectLike(isObjectLike)).to.equal(false);
    });

    it("object is null", () => {
        expect(isObjectLike(null)).to.equal(false);
    });
})