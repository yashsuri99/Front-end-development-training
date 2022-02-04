/*
    Primitive data types - number (int,float),boolean , string,
    2 special data types (and values) - null , undefined
*/

let x = 1;
console.log(typeof 100); //number
console.log(typeof x);  //number


const speed = 3e8; // 3x10^8
console.log( speed );

const January = true;
const tomorrow = false;
console.log( January );
console.log( typeof tomorrow);  //boolean

const greeting1 = "G'd morning";
const greeting2 = "G\'d afternoon";

// console.clear();
console.log( greeting1, greeting2 );
console.log( typeof greeting1 );
console.log( greeting1.charAt(2) ); // d
console.log( greeting1[2] );  // d
console.log( greeting1.length );
const greeting1John = greeting1 + '        John';
console.log( greeting1John );