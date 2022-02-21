/**
 * 2 uses for interface in TS
 * 1. To define the type of an object
 * 2. To provide a well-known set of methods (and properties) in various classes
 */
/*export default */interface Person {
    readonly nationality: string
    name: string,
    age: number,
    spouse?: string,
    celebrateBirthday: () => void,
    setName: ( newName : string ) => void
}

// spouse is optional - we need not provide it
const john : Person = {
    nationality: 'Indian',
    name: 'John',
    age: 32,
    celebrateBirthday() {
        this.age++;
    },
    setName( name : string ) {
        this.name = name
    }
};

// john.nationality = 'American'; // error
john.celebrateBirthday();
john.setName( 'Jonathan' );
john.spouse = 'Jane';
console.log( john );

export {
    Person as default
}