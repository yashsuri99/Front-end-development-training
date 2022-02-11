function addEmail( email ) {
    this.emails.push( email );
}

const john = {
    name: 'John',
    age: 32,
    emails: []
};

const jane = {
    name: 'Jane',
    age: 28,
    emails: []
};

// in call() we pass the actual arguments seperated by commas
// in apply() we place the arguments in an array and pass the array
const johnEmail = ['john@example.com'];
addEmail.apply( john, johnEmail );
addEmail.apply( jane, ['jane@example.com'] );
addEmail.apply( jane, ['jane@gmail.com'] );
addEmail.apply( jane ); // this -> jane; email -> undefined

console.log( john );
console.log( jane );