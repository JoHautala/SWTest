import chai from "chai"
import isBoolean from "../src/isBoolean.js"

const expect = chai.expect

describe("Is object a boolean?", () => {

    it("object is boolean", () => {
        expect(isboolean(false)).to.equal(true);
    });

    it("object is null", () => {
        expect(isBoolean(null)).to.equal(false);
    });
    
})