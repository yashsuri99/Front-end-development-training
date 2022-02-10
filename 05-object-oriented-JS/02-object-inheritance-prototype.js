const john = {
    name: 'John',
    age: 32,
    celebrateBirthday() {
        this.age++;
    }
};

const jane = {
    name: 'Jane',
    age: 28,
    celebrateBirthday() {
        this.age++;
    }
};

const mark = {
    name: 'Mark',
    age: 40,
    celebrateBirthday() {
        this.age++;
    }
}

console.log(john.__proto__); 
console.log(jane.__proto__);

console.log(john.__proto__ === jane.__proto__);  // the prototype for both john and jane is same

john.__proto__ = {
    nationality = 'American'
};

console.log(john.__proto__);