// array items can be of diffrent data types

const nothingArray = [];
const numbers = [ 1,2,3,4,5,6 ];
const firstItem = numbers[0];
const lastItem = numbers[5];
const afterLastItem = numbers[6];
console.log( 'number of items in numer array is', numbers.length);

console.log(numbers);

for( let i=0; i<numbers.length; i++) {
    console.log( numbers[i] );
}

numbers[1] = numbers[1] + 10;
console.log( numbers );

numbers[1] = 'Twelve';
console.log( numbers );

// add an item at the end of the array
numbers[numbers.length] = 7;
console.log( numbers );

numbers[numbers.length + 10] = 'Seventeen';
console.log( numbers );

// use push() when you want to add at the end of array
numbers.push( 19 );
console.log( numbers );

const matrix = [
    [1,2,3],
    [2,3,4],
    [3,4,5],
];