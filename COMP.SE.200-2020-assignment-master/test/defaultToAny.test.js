import chai from "chai"
import defaultToAny from "../src/defaultToAny.js"

const expect = chai.expect

describe("Defaulting to any", () => {

    it("no need to default", () => {
        expect(defaultToAny('a', 'b', 'c')).to.equal('a');
    });

    it("first 'NaN, then valid default value", () => {
        expect(defaultToAny(NaN, 3)).to.equal(3);
    });

    it("first 'null', then valid default value", () => {
        expect(defaultToAny(null, 3)).to.equal(3);
    });

    it("first 'undefined', then valid default value", () => {
        expect(defaultToAny(undefined, 3)).to.equal(3);
    });

    it("first invalids, then valid 4th default value", () => {
        expect(defaultToAny(null, null, undefined, 3)).to.equal(3);
    });

    it("only invalid values", () => {
        expect(defaultToAny(undefined, null, undefined)).to.equal(undefined);
    });
})