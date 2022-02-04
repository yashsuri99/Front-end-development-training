function getPersonal(name,age) {
    const person = {
        name,
        age
    };
    return person;
}

const john = getPersonal('John',32);
console.log(john);

const FIRST_NAME_LAST_NAME = 1, LAST_NAME_FIRST_NAME = 2;

function getName(format) {
    function fnln(person) {
        return `${person.firstName} ${person.lastName}`;
    }
    
    function lnfn(person) {
        return `${person.lastName} ${person.firstName}`;
    }

    if(format === FIRST_NAME_LAST_NAME) {
        return fnln;
    }
    else if(format === LAST_NAME_FIRST_NAME) {
        return lnfn;
    }
}

const jane = {
    firstName: 'Jane',
    lastName: 'Doe',
    gender: 'female',
    city: 'gurgaon'   
}

const f = getName(FIRST_NAME_LAST_NAME);
console.log(f(jane));