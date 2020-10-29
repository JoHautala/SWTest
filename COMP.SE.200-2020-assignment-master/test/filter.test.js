import chai from "chai"
import filter from "../src/filter.js"

const expect = chai.expect

describe("Filtering truthies", () => {

    it("only truthies", () => {
        let users = [ { 'user': 'barney', 'active': true },
                 { 'user': 'fred',   'active': true } ]
        expect(filter(users, ({ active }) => active)).to.eql([ { user: 'barney', active: true },
                                                               { user: 'fred', active: true }]);
    });

    it("some truthies", () => {
        let users = [ { 'user': 'barney', 'active': true },
                 { 'user': 'fred',   'active': false } ]
        expect(filter(users, ({ active }) => active)).to.eql([ { user: 'barney', active: true } ]);
    });

    it("only falsies", () => {
        let users = [ { 'user': 'barney', 'active': false },
                 { 'user': 'fred',   'active': false } ]
        expect(filter(users, ({ active }) => active)).to.eql([ [] ]);
    });

    it("empty array", () => {
        let users = []
        expect(filter(users, ({ active }) => active)).to.eql([ [] ]);
    });
})