import chai from "chai"
import chunk from "../src/chunk.js"

const expect = chai.expect

describe("Splitting arrays", () => {

    it("array with even chunks", () => {
        expect(chunk(['a', 'b', 'c', 'd'], 2)).to.eql([['a', 'b'], ['c', 'd']]);
    });

    it("array with uneven chunks", () => {
        expect(chunk([1, 2, 3, 4, 5], 3)).to.eql([ [1, 2, 3], [4, 5] ]);
    });

    it("chunk length > array length", () => {
        expect(chunk([1, 2, 3], 5)).to.eql([ [1, 2, 3] ]);
    });

    it("empty array", () => {
        expect(chunk( [] )).to.eql( [] );
    });
})