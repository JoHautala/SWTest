import chai from "chai"
import isSymbol from "../src/isSymbol.js"

const expect = chai.expect

describe("Is object classified as a `Symbol`", () => {

    it("object is Symbol", () => {
        expect(isSymbol(Symbol.iterator)).to.equal(true);
    });

    it("object is string", () => {
        expect(isSymbol("abc")).to.equal(false);
    });
    
})