var chai = require("chai")
var divisionOfIntegers = require ("../divisionOfIntegers.js")
const expect = chai.expect


describe("Integer Division", () => {
 it("devides positive integer by a positive integer", () =>{
    var result = divisionOfIntegers(6,3)    
    expect(result).to.have.property('quotient')
    expect(result.quotient).to.equal(2)
    expect(result).to.have.property('reminder')
    expect(result.reminder).to.equal(0)
 });
})

describe("Division by zero", () => {
    it("devides positive integer by zero", () =>{
        expect(() => divisionOfIntegers(6,0)).to.throw(RangeError)
    });
   })

describe("Division by non-integer", () => {
    it("devides positive integer by zero", () =>{
        expect(() => divisionOfIntegers('A','C')).to.throw(TypeError)
    });
   })

