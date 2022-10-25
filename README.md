# Test Plan for E-Commerce store    

Course  : COMP.SE.200-2022-2023-1 Software Testing
Authors : Kulunu Samarawickrama & Sang Nguyen

---
## Table of contents

1. Introduction
2. Scenarios
3. Tools
4. Tests
5. Definitions, acronyms and abbrevations
6. References

---
## 1.Introduction

### The content and purpose of the test report

This report contains a test plan for a web application. The application is an E-commerce store selling food products. The application consists a REST back-end and a Front end build with react. The test report only concerns the utility library that is being used by the front-end of the E-commerce store application. 

The test plan is prepared by considering wider aspects of testing. Specifically following questions are being addressed.

- What functions of the utility library should be tested? and how are they tested?
- Does it require integrating testing / interface testing, performance testing?
- What are end-to-end common use cases of the app? How to validate them using tests?
- How to document the test results
- A template for issue and bug reports

A total of 10 functions from the utility library has to be selected for testing. The Following is a list of all the included function with a priority analysis.


| The function | Description |  Priority|
|--------------|-------------|----------|
|  add.js      |Adds two numbers|      |
|at.js         |Creates an array of values corresponding to `paths` of `object`|   |
|camelCase.js  |Converts `string` to camel case| |
|capitalize.js |Converts the first character of `string` to upper case and the remaining to lower case||
|castArray.js  |Converts `value` into an array if it's not one||
|ceil.js       |Computes `number` rounded up to `precision`||
|chunk.js	   |Creates an array of elements split into groups the length of given `size´||
|*clamp.js	   |Clamps `number` within the inclusive `lower` and `upper` bounds| selected |
|compact.js    |Creates an array with all falsey values removed. The values `false`, `null`,* `0`, `""`,`undefined`, and `NaN` are falsey.||
|countBy.js    |Creates an object composed of keys generated from the results of running each element of `collection` thru `iteratee`| selected |
|*defaultTo.js |Checks `value` to determine whether a default value should be returned in its place.The `defaultValue` is returned if `value` is `NaN`, `null`, or `undefined`||
|*defaultToAny.js|This method is like `defaultTo` except that it accepts multiple default values and returns the first one that is not `NaN`, `null`, or `undefined`| |
|difference.js |Creates an array of `array` values not included in the other given arrays||
|divide.js     |Divide two numbers||
|drop.js	   |Creates a slice of `array` with `n` elements dropped from the beginning ||
|endsWith.js   |Checks if `string` ends with the given target string| selected |
|eq.js 		   |Comparison between two values to determine if they are equivalent||
|every.js 	   |Checks if `predicate` returns truthy for **all** elements of `array`.| selected|
|*filter.js	   |Iterates over elements of `array`, returning an array of all elements * `predicate` returns truthy for.| selected|
|*get.js 	   |Gets the value at `path` of `object`. If the resolved value is * `undefined`, the`defaultValue` is returned in its place| selected |
|isArguments.js|Checks if `value` is likely an `arguments` object  ?????||
|isArrayLike.js|Checks if `value` is array-like.
|isArrayLikeObject.js|This method is like `isArrayLike` except that it also checks if `value` is an object ||
|isBoolean.js  |Checks if `value` is classified as a boolean primitive or object||
|isBuffer.js   |checks if `value` is a buffer||	
|isDate.js	   |Checks if `value` is classified as a `Date` object.||
|isEmpty.js    |Checks if `value` is an empty object, collection, map, or set||
|isLength.js   |Checks if `value` is a valid array-like length||
|isObject.js   |Returns `true` if `value` is an object, else `false`.||
|isSymbol.js   |Checks if `value` is classified as a `Symbol` primitive or object||
|isTypedArray.js|Checks if `value` is classified as a typed array.||
|keys.js	   |Creates an array of the own enumerable property names of `object`||
|*map.js 	   |Creates an array of values by running each element of `array` thru `iteratee`.| selected | 
|memoize.js	   |Creates a function that memoizes the result of `func`||
|reduce.js	   |Returns the accumulated value||
|slice.js	   |Creates a slice of `array` from `start` up to, but not including, `end`| selected |
|toFinite.js   |Converts `value` to a finite number.||
|toInteger.js  |Converts `value` to an integer||
|toNumber.js   |Converts `value` to a number||
|toString.js   |Returns the converted string| selected|
|upperFirst.js |Converts the first character of `string` to upper case.||
|words.js	   |Returns the words of `string` |selected |


---
## 2.Scenarios

Through analysing the application we concluded 3 end-to-end scenarios which are essential to be tested as below

### Scenario 1

- 2.1.1 Explanation + UML/Diagram

    1. User enters a search query as text search bar
    2. Application process the input text and break down words / amount
    3. Application proposes relevant results
    4. User applies sorting and verifies
    5. Search results should be updated
    6. User selects and add the items to cart

- 2.1.2 Why do we test this scenario
- 2.1.4 How to test test this
- 2.1.5 Associated libraries, chosen libraries , prioritization method for selecting

### Scenario 2

- 2.2.1 Explanation + UML/Diagram

    1. User preceeds to buy an item in the cart
    2. application asks for details
    3. User starts filling the data- Name/ address/ Contact
    4. application checks formating of the data
    5. checks for missing fields

- 2.2.2 Why do we test this scenario
- 2.2.4 How to test test this
- 2.2.5 Associated libraries, chosen libraries , prioritization method for selecting

### Scenario 3

- 2.3.1 Explanation + UML/Diagram
- 2.3.2 Why do we test this scenario
- 2.3.4 How to test test this
- 2.3.5 Associated libraries, chosen libraries , prioritization method for selecting

---
## 3.Tools
- 3.1 Description of the selected testing tools
- 3.2 Reasons for selecting above tools
- 3.3 How tools are testing above end-to-end scenarios?

---
## 4.Tests


---
## 5.Definitions, acronyms and abbrevations


---
## 6.References