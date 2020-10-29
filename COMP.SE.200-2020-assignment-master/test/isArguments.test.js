import chai from "chai"
import isArguments from "../src/isArguments.js"

const expect = chai.expect

describe("Arguments object", () => {

    it("is arguments", () => {
        expect(isArguments(function() { return arguments }())).to.equal(true);
    });

    it("is not arguments", () => {
        expect(isArguments(5)).to.equal(false);
    });
})