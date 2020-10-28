import chai from "chai"
import defaultTo from "../src/defaultTo.js"

const expect = chai.expect

describe("Defaulting", () => {

    it("no need to default", () => {
        expect(defaultTo('b', 2)).to.equal('b');
    });

    it("defaulting 'NaN'", () => {
        expect(defaultTo(NaN, 2)).to.equal(2);
    });

    it("defaulting 'null'", () => {
        expect(defaultTo(null, 2)).to.equal(2);
    });

    it("defaulting 'undefined'", () => {
        expect(defaultTo(undefined, 2)).to.equal(2);
    });
})