import {expect} from 'chai';
import endsWith from '../src/endsWith.js';

describe("endsWith", () => {
    it("basic functionality test", () => {
        expect(endsWith('abc', 'c')).to.be.true
        expect(endsWith('abc', 'b')).to.be.false
        expect(endsWith('abc', 'b', 2)).to.be.true
        expect(endsWith('', 'abc')).to.be.false
        expect(endsWith('abc', 'abc')).to.be.true
        // Empty string can end with empty string. 
        expect(endsWith('', '')).to.be.true
    });

    it("a non-empty string cannot end with an empty string", () => {
        expect(endsWith('abc', '')).to.be.false
    });

    it("position greater than string length is clamped", () => {
        expect(endsWith('abc', 'c', 5)).to.be.true
    });

    it("position less than zero", () => {
        expect(endsWith('abc', 'a', -3)).to.be.false
    });

    it("position is not a number", () => {
        expect(endsWith('abc', 'a', 'not-a-number')).to.be.false
    });
});