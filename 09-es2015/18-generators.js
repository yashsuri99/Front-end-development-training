/**
 * Generators are function that can be paused and resumed
 * They can generate and yield (return) intermediate values
 */
 function * counter() {
    let id = 1;

    console.log( '*' );

    // pauses execution of the function, and yield a temporary value
    while( id <= 10 ) {
        yield id;
        id++;
    }

    return id; // return 10
}

// when we call a generator function it DOES NOT begin execution of the function
const iter = counter();

// for( let item of iter ) {
//     console.log( item );
// }

let result;

result = iter.next(); // resume execution of the function till the yield is encountered
console.log( result ); // { value: 1, done: false }

result = iter.next();
console.log( result );  // { value: 2, done: false }

result = iter.next();
console.log( result );  // { value: 3, done: false }

result = iter.next();
console.log( result );  // { value: 4, done: false }

// ...

// result = iter.next();
// console.log( result );  // { value: 10, done: true }