/**
 * OBJECTIVE: To understand how to export a single thing (class/function/array etc.) and import and use it
 */
 class Person {
    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }
}

// a single class / function etc. can also be exported
module.exports = Person;