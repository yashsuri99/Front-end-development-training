// we can import many thi
import Human, { sum as add } from './Person.js';
// import { sum  } from './xyz.js';

class Employee extends Human {
    constructor( name, age, role, dept ) {
        super( name, age ); // call the base class constructor

        this.role = role;
        this.dept = dept;
    }

    promote() {
        this.role = `Senior ${this.role}`;
    }

    // override the celebrateBirthday() method
    celebrateBirthday() {
        super.celebrateBirthday(); // call the base class (Person class) celebrateBirthday()
        console.log( `Happy birthday ${this.name}!` );
    }
}

console.log( add( 12, 13 ) );

export {
    Employee
}