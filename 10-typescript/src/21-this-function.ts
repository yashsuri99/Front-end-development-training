interface Person {
    name: string,
    age: number
};

function printname(this:Person, title:string) {
    console.log(title +'. ' + this.name);
}

const john: Person = {
    name : 'John',
    age: 32
};

printname.call(john,'Mr');

export {
    
}