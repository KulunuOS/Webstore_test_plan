import {expect} from 'chai';
import get from '../src/get.js';

describe("get", () => {
    it("get on valid object", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] }
        expect(get(object, 'a[0].b.c')).to.be.eql(3)
        expect(get(object, ['a', '0', 'b', 'c'])).to.be.eql(3)
        expect(get(object, 'a.b.c', 'defaultValue')).to.be.eql('defaultValue')
        expect(get(object, 'a.b.c')).to.be.eql(undefined)
    });

    it("get on undefined object returns default value if provided", () => {
        expect(get(undefined, 'a.b.c', 'defaultVal')).to.be.eql('defaultVal')
    });

    it("get on undefined object returns undefined", () => {
        expect(get(undefined, 'a.b.c')).to.be.eql(undefined)
    });
});