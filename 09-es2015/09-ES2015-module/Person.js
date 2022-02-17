// there can only be 1 default export
export default class Person {
    // a fixed value to start with for nationality for all objects
    nationality = 'Indian';

    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    // methods are shared among all objects of the class
    celebrateBirthday() {
        this.age++;
    }

    setName( newName ) {
        this.name = newName;
    }
}

export const sum = ( x, y ) => x + y;

// export { // we can export many things
//     Person as default,
//     sum
// }