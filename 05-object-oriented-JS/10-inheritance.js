/**
 * OBJECTIVE: Implementing inheritance in old JS
 * 
 * Idea is to setup the prototype chain of the objects
 */
 function Person( name, age ) {
    this.name = name;
    this.age = age;
    this.emails = [];
}

// adding a method to the prototype of objects created by the Person constructor
Person.prototype.celebrateBirthday = function() {
    this.age++;
};

Person.prototype.addEmail = function( email ) {
    this.emails.push( email );
};

// EXERCISE: Add a method to change the dept of an employee. Add a data member called salary for the employee
function Employee( name, age, role, dept ) {
    this.name = name;
    this.age = age;
    this.emails = [];

    this.role = role;
    this.dept = dept;
}

Employee.prototype.__proto__ = Person.prototype;
Employee.prototype.promote = function() {
    this.role = `Senior ${this.role}`;
};

Employee.prototype.department = function(dept) {
    this.dept = dept;
}

Employee.prototype.salary = function(salary) {
    this.salary = salary;
}

// mark -> Employee.prototype -> Person.prototype
const mark = new Employee( 'Mark', 40, 'Accountant', 'Finance' );
// mary -> Employee.prototype -> Person.prototype
const mary = new Employee( 'Mary', 44, 'Manager', 'Engineering' );

mark.celebrateBirthday();
mary.addEmail( 'mary@example.com' );
mary.promote();
mark.department('Management');
mary.salary('100000')

console.log( mark );
console.log( mary );