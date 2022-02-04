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
    children, // same as children: children
    // addEmail: function(newEmail) {
    //     john.emails.push(newEmail);
    // }
    addEmail(newEmail) {
        this.emails.push(newEmail);
    }
};

john.addEmail('john@yahoo.com');

console.log(john);

john.changePinCode = function(pinCode) {
    this.address.pinCode = pinCode
};

john.changePinCode(560700);
console.log(john);