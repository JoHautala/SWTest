import chai from "chai"
import get from "../src/get.js"

const expect = chai.expect

describe("Get object path value", () => {

    const object = { 'a': [{ 'b': { 'c': 4 } }] }

    it("resolved value is defined", () => {
        expect(get(object, 'a[0].b.c', "def")).to.equal(4);
    });

    it("resolved value is not defined", () => {
        expect(get(object, 'a[0].b.c.e', "def")).to.equal("def");
    });
})