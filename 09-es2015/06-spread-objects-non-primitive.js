const john = {
    name: 'John',
    age: 32,
    address: {
        city: 'Bangalore',
        pinCode: 560100,
        area: 'JP Nagar'
    }
};

// address: john.address -> is a copy by reference (johnCope.address is SAME object as john.address)
const johnCopy = {
    // name: john.name, age: john.age, address: john.address
    ...john
};

johnCopy.name = 'Jonathan'; // john name is affected? NO
johnCopy.address.city = 'Gurgaon'; // john.address.city is affected? YES

console.log( john );
console.log( johnCopy );