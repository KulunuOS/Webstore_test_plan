import {expect} from 'chai';
import map from '../src/map.js';

function square(n) {
     return n * n
}

describe("map", () => {

    it("basic functionality test", () => {
        expect(map(["moi"], () => {return false}))
            .to.be.eql([false]);
    });

    it(" simple square function on a number of arrayes ", () => {
        expect(map([2,4], square)).to.be.eql([4,16])
    });

    it("NaN input", () => {
        expect(map(NaN))
            .to.be.eql([undefined]);
    });

    it("null input", () => {
        expect(map(null))
            .to.be.eql([]);
    });

    it("undefined input", () => {
        expect(map(undefined))
            .to.be.eql([]);
    });

    it("boolean input", () => {
        expect(map(false))
            .to.be.eql([undefined]);
    });

});