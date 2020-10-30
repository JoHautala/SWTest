import chai from "chai"
import slice from "../src/slice.js"

const expect = chai.expect

describe("Creates a slice of `array`", () => {

    it("create slice of an array", () => {
        var array = [1, 2, 3, 4]

        expect(_.slice(array, 2)).to.equal([3, 4]);
    });    
})