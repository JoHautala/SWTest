import chai from "chai"
import compact from "../src/compact.js"

const expect = chai.expect

describe("Removing falseys from array", () => {

    it("array without falseys", () => {
        expect(compact( [1, 2, 4] )).to.eql( [1, 2, 4] );
    });

    it("array with false", () => {
        expect(compact( [false] )).to.eql( [] );
    });

    it("array with null", () => {
        expect(compact( [null] )).to.eql( [] );
    });

    it("array with 0", () => {
        expect(compact( [0] )).to.eql( [] );
    });

    it('array with ""', () => {
        expect(compact( [""] )).to.eql( [] );
    });

    it("array with undefined", () => {
        expect(compact( [undefined] )).to.eql( [] );
    });

    it("array with NaN", () => {
        expect(compact( [NaN] )).to.eql( [] );
    });
})