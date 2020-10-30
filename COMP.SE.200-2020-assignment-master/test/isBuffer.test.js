import chai from "chai"
import isBuffer from "../src/isBuffer.js"

const expect = chai.expect

describe("Is object a buffer?", () => {

    it("object is a buffer", () => {
        expect(isBuffer(new Buffer(2))).to.equal(true);
    });

    it("object is not a buffer", () => {
        expect(isBuffer(new Uint8Array(2))).to.equal(false);
    });
})