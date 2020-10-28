import chai from "chai"
import add from "../src/add.js"

const expect = chai.expect

describe("Add", () => {
    it("Adds 2 positive integers", () => {
        expect(add(10,35)).to.equal(45);
    });
    it("Adds two negative integers", () => {
        expect(add(-50,-4)).to.equal(-54);
    });
    it("Adds two float numbers", () => {
        expect(add(2.4,1.6)).to.equal(4.0);
    });
})