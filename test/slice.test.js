import {expect} from 'chai';
import slice from '../src/slice.js';

describe("slice", () => {

    it("basic functionality test ; slicing an array of numbers", () => {
        expect(slice([0.1,0.2,3/2,4*10,5,6,7,8],1,4))
            .to.be.eql([0.2,3/2,4*10]);
    });

    it("basic functionality test ; slicing an array of words", () => {
        expect(slice(["alpha","bravo","charlie","delta"],0,3))
            .to.be.eql(["alpha","bravo","charlie"]);
    });

    it("raise a RangeError for invalid index inputs", () => {
        expect(()=> slice([false,true,true,false],1,50)).to.throw(RangeError);
    });

    it("raise an error for empty input array", () => {
        expect(() => slice([],1,50)).to.throw(new Error('input cannot be empty!'));
    });


    it("Array of NaN inputs", () => {
        expect(slice([NaN, NaN, NaN, NaN],1,3))
            .to.be.eql([NaN,NaN]);
    });

    it("null input", () => {
        expect(slice([null,null,null],1,3))
            .to.be.eql([null,null]);
    });

    it("undefined input", () => {
        expect(slice([undefined],1,3))
            .to.be.eql([undefined, undefined]);
    });

    it("boolean input", () => {
        expect(slice([false,true,true,false],1,3))
            .to.be.eql([true,true]);
    });

});