const john = {
    name: 'John',
    age: 32
};

const johnEmployment = {
    company: 'Sapient',
    department: 'User Experience'
};

Object.assign( john, johnEmployment );

console.log( john );