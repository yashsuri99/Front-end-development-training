let jane = {
    name: 'Jane',
    age: 28
};

let john = {
    name: 'John',
    age: 32,
    spouse: jane
};

// now we have a circular reference
jane.spouse = john;

// ... application code in here...

// Setting john to null has made the object "unreachable"
// the object is "eligible" for garbage collection (eligible for memory to be released)
// from time-to-time the browser collects such unused objects
jane = null;
john = null;

// Both the objects are unreachable
// Therefore both objects shall be garbage-collected