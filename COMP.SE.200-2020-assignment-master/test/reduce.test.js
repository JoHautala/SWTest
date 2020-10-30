import chai from "chai"
import reduce from "../src/reduce.js"

const expect = chai.expect

describe("Reduces `collection` to a value", () => {

    it("reduce an array", () => {
        expect(reduce([1, 2], (sum, n) => sum + n, 0)).to.equal(3);
    });

    it("object is string", () => {
        expect(reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
            (result[value] || (result[value] = [])).push(key)
                return result
            }, {})).to.equal({ '1': ['a', 'c'], '2': ['b'] });
    });

    
})