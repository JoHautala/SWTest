import chai from "chai"
import map from "../src/map.js"

const expect = chai.expect

describe("Creates an array of values by running each element of `array` thru `iteratee`", () => {

    it("object is array", () => {

        function square(n) {
              return n * n
            }
        
        

        expect(map([4, 8], square)).to.equal([16, 64]);
    });
    
})