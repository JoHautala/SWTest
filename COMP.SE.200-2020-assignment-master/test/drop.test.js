import chai from "chai"
import drop from "../src/drop.js"

const expect = chai.expect

describe("Drop elements from beginning", () => {

    it("drop 0", () => {
        expect(drop(['a', 'b', 'c', 'd'], 0)).to.eql(['a', 'b', 'c', 'd']);
    });

    it("drop < (size(n) - 1)", () => {
        expect(drop(['a', 'b', 'c', 'd'], 2)).to.eql(['c', 'd']);
    });

    it("drop size(n)", () => {
        expect(drop(['a', 'b', 'c', 'd'], 4)).to.eql( [] );
    });

    it("drop > size(n)", () => {
        expect(drop(['a', 'b', 'c', 'd'], 10)).to.eql( [] );
    });
})