/**
 * any type -> turns of type checking (like working with JS and not TS)
 * It should never be used
 */
 let x; // any type

 x = 1;
 x = 'Hello';
 x = {
     name: 'John',
     age: 32
 };
 x = [ 1, 2, 3 ];

 export {}