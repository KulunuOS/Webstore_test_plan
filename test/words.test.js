import {expect} from 'chai';
import words from '../src/words.js';

describe("words", () => {

    it("basic functionality test", () => {
        expect(words('and then & now at 0%'))
            .to.be.eql(['and','then', 'now', 'at', '0']);
    });

    it("text input with defined pattern", () => {
        expect(words('and then & now at 0%',  /[^, ]+/g ))
            .to.be.eql(['and','then', '&', 'now', 'at', '0%']);
    });

    it("text input with undefined pattern", () => {
        expect(words('and then & now at 0%', undefined ))
            .to.be.eql(['and','then', 'now', 'at', '0']);
    });

    it("raise Typeerror for integer inputs ", () => {
        expect(() => words(1,2,3,4)).to.throw(TypeError);
    });


});