import {expect} from 'chai';
import every from '../src/every.js';
function isPositive(n) {
    return n > 0
}
describe("every", () => {
    it("calling every on Boolean predicate", () => {
        expect(every([true, 1, null, 'yes'], Boolean)).to.be.false
        expect(every([true, 1, true, 'yes'], Boolean)).to.be.true
        expect(every(null, Boolean)).to.be.true
    });

    it("calling every on custom predicate", () => {
        expect(every([1, 2, 3, 4], isPositive)).to.be.true
        expect(every([0, 1, 2, 3, 4], isPositive)).to.be.false
    });
});