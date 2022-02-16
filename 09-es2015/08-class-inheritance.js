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

class Employee extends Person {
    constructor(name,age,role,dept) {
        super(name,age);  // calls the base constructor

        this.role = role;
        this.dept = dept
    }

    promote() {
        this.role = `Senior ${this.role}`;
    }

    // override the birthday method
    celebrateBirthday() {
        console.log('Happy Birthday');
        super.celebrateBirthday();  // will call the method of the base class
    }
}

const john = new Employee('John',32,'Accountant','Finance');
const jane = new Employee('Jane',28,'Developer','XT');

john.celebrateBirthday();
john.promote();
john.setName('Janette');

console.log(john);
console.log(jane);