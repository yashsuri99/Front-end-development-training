import {Person} from './Person.js'

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

export {Employee};