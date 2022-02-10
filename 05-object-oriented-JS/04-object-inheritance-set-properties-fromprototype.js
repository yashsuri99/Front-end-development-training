const personPrototype = {
    nationality: 'Indian',  // we usually donot include properties in the prototype
    celebrateBirthday() {   // we usually include all methods in the prototype
        this.age++;
    }
};

const john = {
    name: 'John',
    age: 32
};

const jane = {
    name: 'Jane',
    age: 28,
};

john.__proto__ = personPrototype;
jane.__proto__ = personPrototype;

john.nationality = 'American'; // this is set up as an own property

console.log(john.nationality); // john's own nationality is used
console.log(jane.nationality); // no own nationality so uses the prototypes nationality 