import chai from "chai"
import isTypedArray from "../src/isTypedArray.js"

const expect = chai.expect

describe("Is object a typed array?", () => {

    it("object is a typed array", () => {
        expect(isTypedArray(new Uint8Array)).to.equal(true);
    });

    it("object is a empty array", () => {
        expect(isTypedArray([])).to.equal(false);
    });
    
})