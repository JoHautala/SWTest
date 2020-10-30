import chai from "chai"
import words from "../src/words.js"

const expect = chai.expect

describe("Splits `string` into an array of its words", () => {

    it("object is string", () => {
        expect(words('fred, barney, & pebbles')).to.equal(['fred', 'barney', 'pebbles']);
    });

    it("object is string", () => {
        expect(words('fred, barney, & pebbles', /[^, ]+/g)).to.equal(['fred', 'barney', '&', 'pebbles']);
    });
})