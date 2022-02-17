/**
 * To understand what some of the iterables in JS are. Also how to iterate over them using the for..of loop
 */
// Arrays, strings (iterables)
// for..of loop to through iterable

const numbers = [ 100, 200, 300, 400 ];

for( let number of numbers ) {
    console.log( number );
}

const greeting = 'Hello, world';

for( let ch of greeting ) {
    console.log( ch );
}

// set maintains a unique set of values
const set = new Set( numbers );
set.add( 500 );
set.add( 400 );

for( let item of set ) {
    console.log( item );
}

// EXERCISE: Explore Map data structure