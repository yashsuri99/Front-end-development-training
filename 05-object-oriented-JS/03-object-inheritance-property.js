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

console.log(john.nationality);
console.log(jane.nationality);

john.celebrateBirthday();
jane.celebrateBirthday();

console.log(john.age);
console.log(jane.age);
