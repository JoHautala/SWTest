import chai from "chai"
import endsWith from "../src/endsWith.js"

const expect = chai.expect

describe("String ending", () => {

    it("ends with given string", () => {
        expect(endsWith("abcdef", "ef")).to.equal(true);
    });

    it("does not end with given string", () => {
        expect(endsWith("abcdef", "gh")).to.equal(false);
    });

    it("string in given position", () => {
        expect(endsWith("abcdef", "cd", 4)).to.equal(true);
    });

    it("string not in given position", () => {
        expect(endsWith("abcdef", "cd", 3)).to.equal(false);
    });

})