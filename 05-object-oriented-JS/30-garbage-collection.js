let jane = {
    name: 'Jane',
    age: 28
};

let john = {
    name: 'John',
    age: 32,
    spouse: jane
};

// ... application code in here...

// Setting john to null has made the object "unreachable"
// the object is "eligible" for garbage collection (eligible for memory to be released)
// from time-to-time the browser collects such unused objects
jane = null;

console.log( john.spouse ); // it is still reachable

// In order to remove jane completely from memory, we need to set the following
john.spouse = null;