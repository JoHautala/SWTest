import chai from "chai"
import countBy from "../src/countBy.js"

const expect = chai.expect

describe("Counting by", () => {

    it("valid key", () => {

        const users = [    { 'user': 'barney', 'active': true },
                           { 'user': 'betty', 'active': true },
                           { 'user': 'fred', 'active': false } ]

        expect(countBy(users, value => value.active)).to.equal({'true': 2, 'false': 1});
    });

    it("invalid key", () => {

        const users = [    { 'user': 'barney', 'active': true },
                           { 'user': 'betty', 'active': true },
                           { 'user': 'fred', 'active': false } ]

        expect(countBy(users, value => value.status)).to.equal({undefuned: 3});
    });
})