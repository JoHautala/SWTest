import chai from "chai"
import difference from "../src/difference.js"

const expect = chai.expect

describe("Difference in arrays", () => {

    it("2 arrays with same values", () => {
        expect(difference([1, 2, 5], [1, 2, 5])).to.eql([]);
    });

    it("2 arrays with 1 same value", () => {
        expect(difference([1,2,5], [5,3,4])).to.eql([1,2]);
    });

    it("2 arrays with different values", () => {
        expect(difference([1,2,5], [3,4,6])).to.eql([1,2,5]);
    });
})