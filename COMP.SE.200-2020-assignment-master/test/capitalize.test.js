import chai from "chai"
import capitalize from "../src/capitalize.js"

const expect = chai.expect

describe("Capitalizing strings", () => {

    it("1-letter capitalized string", () => {
        expect(capitalize("A")).to.equal("A");
    });

    it("1-letter uncapitalized string", () => {
        expect(capitalize("a")).to.equal("A");
    });

    it("longer string", () => {
        expect(capitalize("lonGER STRing")).to.equal("Longer string");
    });

    it("special symbols in string", () => {
        expect(capitalize("str#%ing")).to.equal("Str#%ing");
    });
})