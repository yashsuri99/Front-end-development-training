function Person(name,age) {
    // this refers the the newly created object
    this.name = name;
    this.age = age;
}

Person.prototype.celebrateBirthday = function() {
    this.age++; 
}

Person.prototype.addEmail = function() {
    this.emails.push(email);
};

const john = new Person('John',32);
console.log(john);

const jane = new Person('Jane',28);
console.log(jane);

console.log(john.__proto__);
console.log(jane.__proto__);

console.log(john.__proto__ === jane.__proto__);
console.log(Person.prototype);

john.celebrateBirthday();
jane.celebrateBirthday();

console.log(john)
console.log(jane);

john.addEmail('john@example.com');
jane.addEmail('jane@example.com');