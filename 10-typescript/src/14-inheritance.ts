import { Person } from './13-class';

class Employee extends Person {
    private role: string;
    dept: string;

    constructor(name: string,age: number,emails: string[],role: string,dept: string, spouse? : string) {
        super(name,age,emails,spouse)
        this.role = role;
        this.dept = dept;
    }
}

const john = new Employee('John',32,['john@example.com'],'Accountant','Finance','Jane');
// john.role = 'Chartered Accountant';  // error -> role cannot be assigned outside the class as it is private
john.dept = 'Sales and Marketing';   // +