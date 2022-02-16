const greet = (message = 'Hello',name = 'John') => {
    // if(name === undefined) {
        // name = 'World';
    // }

    console.log(`${message} ${name}`);
};

greet('Good Morning', 'John');
greet('Good Morning');
greet(undefined, 'John');