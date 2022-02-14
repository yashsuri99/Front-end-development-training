let john = {
    name: 'John',
    age: 32,
};

let jane = {
    name: 'Jane',
    age: 28
};

// ... application code in here...

// Setting john to null has made the object "unreachable"
// the object is "eligible" for garbage collection (eligible for memory to be released)
// from time-to-time the browser collects such unused objects
john = null;