import chai from "chai"
import isEmpty from "../src/isEmpty.js"

const expect = chai.expect

describe("Is object Empty", () => {

    it("object is null", () => {
        expect(isEmpty(null)).to.equal(true);
    });

    it("object is a boolean", () => {
        expect(isEmpty(true)).to.equal(true);
    });

    it("object is a integer", () => {
        expect(isEmpty(1)).to.equal(true); // should be false
    });

    it("object is an array", () => {
        expect(isEmpty([1, 2, 3])).to.equal(false);
    });

    it("object is a string", () => {
        expect(isEmpty('abc')).to.equal(false);
    });

    it("object is a library", () => {
        expect(isEmpty({ 'a': 1 })).to.equal(false);
    });
})