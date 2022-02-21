// let john : { name: string, readonly age: number };

type Person = {
    name: string,
    readonly age: number, // property whose value cannot be reset
    spouse?: Person // optional property
};

let john : Person;

john = { // no spouse currently
    name: 'John',
    age: 32,
    // emails: [ 'john@example.com' ]
};

let jane : Person = {
    name: 'Jane',
    age: 28,
    spouse: john
};

// john.age++; // error (readonly age)

// optional property can be added later
john.spouse = jane;

export {}