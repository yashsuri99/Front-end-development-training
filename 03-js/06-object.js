// You can create an object without creating a class
// Creating an object with some data members (properties - i.e. key-value pairs)
const age = 32, children = [
    'Jack',
    'Jill'
];

const SPOUSE_KEY = 'wife';

const john = {
    "first name": 'John',
    // age: age,
    age, // Same as age: age
    emails: [
        'john@example.com',
        'john@sapient.com'
    ],
    address: {
        area: 'Whitefield',
        city: 'Bangalore',
        pinCode: 560076
    },
    [SPOUSE_KEY]: 'Jane',
    // children: children
    children // same as children: children
};

// john = { // not ok (cannot assign since john variable is a const)
//     company: 'ABC'
// };

// accessing properties
console.log( john["first name"] );
console.log( john["emails"] );
console.log( john.address );

console.log( john.emails[1] ); // 'john@sapient.com'
console.log( john.address.city );

console.log( john ); // no company

// const objects can be modified - only thing we cannot do is assigning john itself. We can assign john.company etc.
john.company = 'Sapient';
john["last name"] = 'Doe';

john.children.push( 'Jenny' );

console.log( john ); // company

// remove email property
delete john.emails;
console.log( john );