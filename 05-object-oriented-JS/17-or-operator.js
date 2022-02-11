
// falsy values
// false, null, undefined, 0, ''
// truthy value - any value except these 5

// or operator
// op1 || op2 (expression)
// if op1 is truthy, the value of the expression is op1
// if op1 is falsy, the value of the expression is op2
const x = 1 || 2; // 1
console.log( x );

console.log( null || 100 ); // 100
console.log( false || null ); // null
console.log( {} || [] ); // {}