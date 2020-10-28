import chai from "chai"
import camelCase from "../src/camelCase.js"

const expect = chai.expect

describe("Making string camelCased", () => {

    it("String was already camelCase", () => {
        expect(camelCase("oneStringHere")).to.equal("oneStringHere");
    });

    it("String consists of one word", () => {
        expect(camelCase("word")).to.equal("word");
    });

    it("A mix of letter cases", () => {
        expect(camelCase("ThIs Is eXaMpLe")).to.equal("thisIsExample");
    });

    it("Special symbols in string", () => {
        expect(camelCase("_symbols#-here")).to.equal("symbolsHere");
    });
})