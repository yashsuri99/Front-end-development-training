//whatever we can do with an object we can do with a function
/*
    Objective: Function can be passed as arguments to other functions
*/

//printDetails can be customized to print a diffrent style of full name based on the function passed to getName argument

function printDetails(person,getName) {
    const fullName = getName(person);
    console.log(`Hello ${fullName}. How is the weather in ${person.city}?`);
}

function getFullName(person) {
    return `${person.firstName} ${person.lastName}`;
}

function getFullNameWithTitle(person) {
    let title;
    if(person.gender === 'Male') {
        title = 'Mr.'
    }
    else {
        title = 'Ms.'
    };
    return(`${title} ${person.firstName} ${person.lastName}`);
}

const john = {
    firstName: 'John',
    lastName: 'Doe',
    gender: 'Male',
    city: 'Bangalore'
}

//person = john (both refer to the same object in memory)
//getName = getFullName (both refer to the same function in memory)

printDetails(john, getFullNameWithTitle);

printDetails({
    firstName: 'Jane',
    lastName: 'Doe',
    gender: 'Female',
    city: 'Gurgaon'
}, getFullNameWithTitle);