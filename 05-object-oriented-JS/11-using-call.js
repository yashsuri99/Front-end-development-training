// "this" -> function context
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
function Employee( name, age, role, dept, salary ) {
    // We can call a <function> using <function>.call()
    // The first argument to call is the value for the "this"
    // The remaining arguments are the actual arguments to the <function>
    Person.call( this, name, age );

    this.role = role;
    this.dept = dept;
    this.salary = salary;
}

Employee.prototype.__proto__ = Person.prototype;

Employee.prototype.promote = function() {
    this.role = `Senior ${this.role}`;
};

Employee.prototype.changeDepartment = function( newDept ) {
    this.dept = newDept;
};

// mark -> Employee.prototype -> Person.prototype
const mark = new Employee( 'Mark', 40, 'Accountant', 'Finance', 750000 );
// mary -> Employee.prototype -> Person.prototype
const mary = new Employee( 'Mary', 44, 'Manager', 'Engineering', 750000 );

mark.celebrateBirthday();
mary.addEmail( 'mary@example.com' );
mary.promote();
mary.changeDepartment( 'Data Analytics' );

console.log( mark );
console.log( mary );