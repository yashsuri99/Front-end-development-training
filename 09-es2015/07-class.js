class Person {
    nationality = 'Indian';
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        this.age++
    }

    setName(newName) {
        this.name = newName;
    }
}

const john = new Person('John',32);
const jane = new Person('Jane',28);

john.celebrateBirthday();
john.setName('Janette');

console.log('John');
console.log('Jane');