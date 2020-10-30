import chai from "chai"
import keys from "../src/keys.js"

const expect = chai.expect

describe("Creates an array of the own enumerable property", () => {

    it("object is array", () => {

        function Foo() {
               this.a = 1
               this.b = 2
            }
        
        Foo.prototype.c = 3

        expect(keys(new Foo)).to.equal(['a', 'b']);
    });

    it("object is string", () => {
        expect(keys("hi")).to.equal(['0', '1']);
    });

    
})