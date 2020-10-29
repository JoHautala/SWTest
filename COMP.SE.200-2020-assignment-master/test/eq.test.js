import chai from "chai"
import eq from "../src/eq.js"

const expect = chai.expect

describe("Equivalent objects", () => {

    let obj1 = [1,2]
    let obj2 = [1,2]

    it("same object", () => {   
        expect(eq(obj1, obj1)).to.equal(true);
    });

    it("different objects", () => {
        expect(eq(obj1,obj2)).to.equal(false);
    });
})