// Write a function greet that accepts a message ('Good Morning') and a name ('John'), and throws and error if one of them is undefined (or not passed)
// greet('Good Morning');  // throws an error

const greet = (greetings,name) => {
    if(greetings === undefined || name === undefined) {
        throw new Error('Enter Both of the arguments')
    }
    return(`${greetings} ${name}`);
}

try {
    console.log(greet('Good Morning', 'John'));
}
catch(error) {
    console.log(error.message);
}
    