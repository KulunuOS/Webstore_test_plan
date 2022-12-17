import {expect} from 'chai';
import countBy from '../src/countBy.js';

describe("countBy", () => {
    it("count number of active users", () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'betty', 'active': true },
            { 'user': 'fred', 'active': false }
        ]
        const expected = { 'true': 2, 'false': 1 }
        expect(countBy(users, value => value.active)).to.be.eql(expected)
    });
});