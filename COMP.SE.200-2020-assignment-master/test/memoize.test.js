import chai from "chai"
import memoize from "../src/memoize.js"

const expect = chai.expect

describe("Creates a function that memoizes the result of `func`", () => {

    it("object is array", () => {

        const object = { 'a': 1, 'b': 2 }
        const other = { 'c': 3, 'd': 4 }

        const values = memoize(values)

        expect(values(object)).to.equal([1, 2]);
        expect(values(other)).to.equal([3, 4]);

        object.a = 2
        expect(values(object)).to.equal([1, 2]);

        values.cache.set(object, ['a', 'b'])
        expect(values(object)).to.equal(['a', 'b']);
    });    
})