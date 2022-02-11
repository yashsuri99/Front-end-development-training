// every function can use "this" keyword
function celebrateBirthday() {
    // in the browser this prints window
    console.log( this );
    this.age++;
}

celebrateBirthday();

const john = {
    name: 'John',
    age: 32
};

const jane = {
    name: 'Jane',
    age: 28
};

celebrateBirthday.call( john );
celebrateBirthday.call( jane );