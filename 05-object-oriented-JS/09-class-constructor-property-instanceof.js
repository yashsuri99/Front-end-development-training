/**
 * Objective: All objects created by the same constructor function share the prototype
 * This prototype object is the value of constructor's prototype property
 * Eg. john and jane have the prototype as Person.prototype
 * The prototype is a convenient place to define common methods for the objects
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

const john = new Person( 'John', 32 );
console.log( john );

const jane = new Person( 'Jane', 28 );
console.log( jane );

// the prototype has a property called constructor
// { constructor: Person }
console.log( Person.prototype );

// Method 1: to check if an object is created by a particular constructor
console.log( john.__proto__.constructor === Person );

// Method 2: using instanceof operator we can find out the same
console.log( john instanceof Person );