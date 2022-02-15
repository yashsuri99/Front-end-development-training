// Node JS import statement
// import {sum} from './arithmetic.js';

// CommonJS import syntax
const {sum} = require('./arithmetic.js');

// we define a unit test
test('sum returns 3 when 1 and 2 are passed', () => {
    // arrange
    const x = 1, y = 2;
    let result;

    // act
    result = sum(x,y);

    // assert
    expect(result).toBe(3);
});