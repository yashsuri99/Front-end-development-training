// Till ES2015 class was a reserved keyword but never used
// In old JS, we define a class using a function(constructor function)

// There is nothing special about this function
// How we are supposed to call it makes it a constructor function

// constructor function, by convention, begin with a capital letter
function Person(name,age) {
    // this refers the the newly created object
    this.name = name;
    this.age = age;
}

// What happens we call a function with the new operator?
// 1. A new object is created (which is empty)
const john = new Person('John',32);
console.log(john);

const jane = new Person('Jane',28);
console.log(jane);
