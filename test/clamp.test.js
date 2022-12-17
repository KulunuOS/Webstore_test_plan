const expect = require("chai").expect
const clamp = require("../src/clamp.js");

describe("clamp", () => {
    it("clamp a number mid range where bounds are both positive", () => {
        expect(clamp(3, 2, 4)).to.be.eql(3);
    });

    it("clamp a number mid range where lower bound is negative", () => {
        expect(clamp(3, -2, 4)).to.be.eql(3);
    });

    it("clamp a number mid range where bounds are negative", () => {
        expect(clamp(-2, -6, -1)).to.be.eql(-2);
    });

    it("clamp a number greater than positive upper bound", () => {
        expect(clamp(100, 1, 99)).to.be.eql(99);
    });

    it("clamp a number greater than negative bound ", () => {
        expect(clamp(0, -100, -1)).to.be.eql(0);
    });

    it("clamp a number greater than both negative and positive bounds", () => {
        expect(clamp(10, -5, 5)).to.be.eql(5);
    });

    it("clamp a number less than positive bounds", () => {
        expect(clamp(0, 1, 2)).to.be.eql(1);
    });

    it("clamp a number less than negative bounds", () => {
        expect(clamp(-9, -8, -7)).to.be.eql(-8);
    });

    it("clamp a number less than with both positive and negative bounds", () => {
        expect(clamp(-5, -4, 100)).to.be.eql(-4);
    });

    it("clamp with invalid lower bound", () => {
        // lower bound turns to 0
        expect(clamp(-5, "invalid", 9)).to.be.eql(0);
    });

    it("clamp with invalid upper bound", () => {
        // upper bound turns to 0
        expect(clamp(-5, 0, "invalid")).to.be.eql(0);
    });

    it("clamp with invalid number", () => {
        expect(clamp("invalid", 0, 1)).to.be.eql(NaN);
    });

    it("clamp to upper bound inclusively", () => {
        expect(clamp(4, 2, 4)).to.be.eql(4);
    });

    it("clamp to lower bound inclusively", () => {
        expect(clamp(2, 2, 4)).to.be.eql(2);
    });

    it("clamp where lower bound is greater than upper bound", () => {
        // There's no specification said on what should behave in this case. 
        // I assume we should not allow this operation and return NaN. 
        expect(clamp(2, 4, 3)).to.be.eql(NaN);
    });
});