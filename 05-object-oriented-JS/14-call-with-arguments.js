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

addEmail.call( john, 'john@example.com' );
addEmail.call( jane, 'jane@example.com' );
addEmail.call( jane, 'jane@gmail.com' );
addEmail.call( jane ); // this -> jane; email -> undefined

console.log( john );
console.log( jane );