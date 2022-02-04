// arithematic operators
const x = 3, y = 4;
console.log(x+y); // - , * , %
console.log(x/y); // 0.75
console.log(x ** y); // 3^4

// relational operators  < , > ,<= , >= , == , != , === , !==
console.log(2== 1+1); // true
console.log(2=== 1+1); // true
console.log( "2" == 1+1 ); // true because the string also has the value 2 (compares the value but not the data types)

//Always use === (strict equally check)
console.log("2" === 1+1); //false (as expected)

console.log(1<2 && 2<3); // true
console.log(1<2 || 2>3); // true
console.log( !(2<1)); //true

const isTwoEqualToOnePlusOne = ( 2 === 1 + 1) ? 'Yes' : 'No';
console.log(isTwoEqualToOnePlusOne);

const isTwoEqualToOneMinusOne = ( 2 === 1 - 1) ? 'Yes' : 'No';
console.log(isTwoEqualToOneMinusOne);

//type of
console.log( typeof {} ); //object
console.log( typeof typeof {} ); //typeof "object" -> "string"

//instanceof