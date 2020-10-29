import chai from "chai"
import every from "../src/every.js"

const expect = chai.expect

describe("Every", () => {

    it("all evaluates to true", () => {
        expect(every([true,false], Boolean)).to.equal(true);
    });

    it("some evaluate to false", () => {
        expect(every(["something", true], Boolean)).to.equal(false);
    });
})