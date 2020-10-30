import chai from "chai"
import isDate from "../src/isDAte.js"

const expect = chai.expect

describe("Is object a Date?", () => {

    it("object is Date", () => {
        expect(isDate(new Date)).to.equal(true);
    });
    
    it("object is not a Date", () => {
        expect(isDate('Mon April 23 2012')).to.equal(false);
    });
})