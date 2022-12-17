import {expect} from 'chai';
import filter from '../src/filter.js';

function isPositive(n) {
    return n > 0
}

describe("filter", () => {
    it("filter for active users", () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred',   'active': false }
        ]
        const expected = [ { user: 'barney', active: true } ]
        expect(filter(users, ({ active }) => active)).to.be.eql(expected)
    });

    it("filter for active users with all active", () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred',   'active': true }
        ]
        const expected = [ { user: 'barney', active: true }, {'user': 'fred',   'active': true } ]
        expect(filter(users, ({ active }) => active)).to.be.eql(expected)
    });

    it("filter for positive numbers", () => {
        expect(filter([-1, -2, -3, -4, 0, 1, 2], isPositive)).to.be.eql([1, 2])
    });

    it("filter for positive numbers on empty array", () => {
        const empty_array = []
        expect(filter(empty_array, isPositive)).to.be.eql(empty_array)
    });
});