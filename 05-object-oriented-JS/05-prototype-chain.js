const personPrototype = {
    nationality: 'Indian',  // we usually donot include properties in the prototype
    celebrateBirthday() {   // we usually include all methods in the prototype
        this.age++;
    }
};

const john = {
    name: 'John',
    age: 32,
    nationality: 'American'
};

const jane = {
    name: 'Jane',
    age: 28,
};

john.__proto__ = personPrototype;
jane.__proto__ = personPrototype;

console.log(personPrototype.__proto__);  // has its prototype as the default value

// changes the prototype of personProtoType object
personPrototype.__proto__ = {
    kind: 'mammal'  
};

console.log(personPrototype.kind);  // personProtoType contains the kind mammal

console.log(john.kind);  // because of the chain that is created john gets the kind property as mammal

// prototype chain

console.log(john); // shows john object
console.log(john.__proto__);  // show the prototype of john i.e personPrototype
console.log(john.__proto__.__proto__);  // show the prototype of personPrototype i.e mammal
console.log(john.__proto__.__proto__.__proto__);  // shows the default prototype