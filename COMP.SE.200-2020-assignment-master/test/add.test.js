import chai from "chai"
import add from "../src/add.js"

const expect = chai.expect

describe("Add", () => {
    it("adds 2 positive integers", () => {
        expect(add(10,35)).to.equal(45);
    });
    it("adds two negative integers", () => {
        expect(add(-50,-4)).to.equal(-54);
    });
    it("adds two float numbers", () => {
        expect(add(2.4,1.6)).to.equal(4.0);
    });
})