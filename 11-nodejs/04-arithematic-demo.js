/**
 * OBJECTIVE: To understand how to export and import in Node JS
 */
// one way to import - import everything
const arithmetic = require( './04-arithmetic' );

// another way to import
const { diff, sum } = require( './04-arithmetic' );
const Human = require( './04-Person' );

// console.log( arithmetic );
console.log( diff( 12, 13 ) );
// console.log( sum( 12, 13 ) ); // error

console.log( new Human( 'John', 32 ) );