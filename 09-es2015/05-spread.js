/**
 * ... (spread operator)
 * This operator is used a LOT in React
 * 
 * OBJECTIVES:
 * 1. To understand how spread operator works on array/object, and how to create a copy array/object.
 * 2. To understand how the copy happens depending on the type of item of array / property of object - primitive / non-primitive
 */
// applied on an array
// it takes the items and inserts commas between the item
const numbers1 = [ 10, 20, 30 ];

// a new array is created in memory, with a copy of the items of numbers1
// copy of the numbers (items) is by value since the item is a primitive data type (number)
const numbers1Copy = [ ...numbers1 ]; // [ numbers1[0], numbers1[1], numbers1[2] ]

numbers1Copy.push( 40 ); // numbers1 is NOT affected
numbers1Copy[0]++; // numbers1[0] is NOT affected

console.log( numbers1, numbers1Copy );

const persons = [
    { name: 'John', age: 32 },
    { name: 'Jane', age: 28 },
    { name: 'Mark', age: 40 }
];

// a new array is created in memory
// copy of the persons (items) is by reference since the item is a non-primitive data type (object)
// persons[0] is the SAME object in memory as personCopy[0]
const personsCopy = [ ...persons ]; // [ persons[0], persons[1], persons[2] ]

// does NOT affect persons array
personsCopy.push({
    name: 'Mary',
    age: 44
});
personsCopy[0].age++; // persons[0] IS affected

console.log( persons );
console.log( personsCopy );

// given 2 arrays how do we concatenate them using spread operator
// We want a new array arr3 -> [ 1, 2, 3, 4, 5, 6 ]
const arr1 = [ 1, 2, 3 ], arr2 = [ 4, 5, 6 ];
const arr3 = [ ...arr1, ...arr2 ];
console.log( arr3 );

console.clear();

// applied on an object
const john = {
    name: 'John',
    age: 32
};

const johnOfficial = {
    name: 'Jonathan',
    company: 'Sapient'
}

// the primitive values get copied by value 
const johnCopy = {
    ...john, // name: john.name, age: john.age
    ...johnOfficial, // name: johnOfficial.name, company: johnOfficial.company
    company: 'Publicis Sapient'
};

// does NOT affect the original john.age
johnCopy.age++;

console.log( john );
console.log( johnCopy );