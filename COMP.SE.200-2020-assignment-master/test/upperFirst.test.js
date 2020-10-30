import chai from "chai"
import upperFirst from "../src/upperFirst.js"

const expect = chai.expect

describe("Converts the first character of `string` to upper case", () => {

    it("object is not upper first string", () => {
        expect(upperFirst('fred')).to.equal('Fred');
    });

    it("object is upper first string", () => {
        expect(upperFirst('FRED')).to.equal('FRED');
    });
})