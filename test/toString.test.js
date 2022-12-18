import {expect} from 'chai';
import toString from '../src/toString.js';

describe("toString", () => {

    it("null input should and return empty string", () => {
        expect(toString(null)).to.be.eql('');
    });

    it("undefined input should return empty string ", () => {
        expect(toString(undefined)).to.be.eql('');
    });

    it("test intiger array input to string conversion", () => {
        expect(toString([1, 1/2, 4*4, 0.00001]))
            .to.be.eql('1,1/2, 4*4, 0.00001');
    });

    it("test intiger input to string conversion", () => {
        expect(toString(1, 1/2, 4*4, 0.00001))
            .to.be.eql('1,1/2, 4*4, 0.00001');
    });

    it("test standard intiger input to string conversion", () => {
        expect(toString(1, 2, 4, 0.00001))
            .to.be.eql('1, 2, 4, 0.00001');
    });

    it("test standard string input to string conversion", () => {
        expect(toString('I am already a string'))
            .to.be.eql('I am already a string');
    });


});