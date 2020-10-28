import chai from "chai"
import ceil from "../src/ceil.js"

const expect = chai.expect

describe("Rounding up numbers", () => {

    it("precision = 0", () => {
        expect(ceil(30.02, 0)).to.equal(31);
    });

    it("precision > 0", () => {
        expect(ceil(299.792458, 3)).to.equal(299.793);
    });

    it("precision < 0", () => {
        expect(ceil(299.792458, -2)).to.equal(300); //or 300.0?
    });
})