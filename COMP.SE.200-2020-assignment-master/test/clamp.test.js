import chai from "chai"
import clamp from "../src/clamp.js"

const expect = chai.expect

describe("Clamping numbers", () => {

    it("number inside bounds", () => {
        expect(clamp(3, -10, 10)).to.equal(3);
    });

    it("number < lower bound", () => {
        expect(clamp(-18, -10, 10)).to.equal(-10);
    });

    it("number > upper bound", () => {
        expect(clamp(23, -10, 10)).to.equal(10);
    });
})