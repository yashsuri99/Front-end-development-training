children: [
    'Jack',
    'Jill'
];

const SPOUSE_KEY = 'wife';

const john = {
    name: 'John',
    age: 32,
    emails: [
        'john@example.com',
        'john@sapient.com'
    ],
    address: {
        area: 'Whitefield',
        city: 'Bangalore',
        pinCode: 560076
    },
    [SPOUSE_KEY]: 'Jane',
    children: [
        'Jack',
        'Jill'
    ]
};

// const name = john.name, yearsOld = john.age, mainEmailId = john.emails[0], city = john.address.city, pin = john.address.pinCode;
const {name,age:yearsOld,address : {city,pinCode},emails : [mainEmailId]} = john;
console.log(name,yearsOld,city,pinCode,mainEmailId);

// we accept an object, rather than separate arguments
const ajax = ( { method, url, data = null, onSuccess, onError } ) => {
    // const {
    //     method,
    //     url,
    //     data = null,
    //     onSuccess,
    //     onError
    // } = config;

    console.log( method, url, data, onSuccess, onError );
}

// convenient for the developer to pass an object as argument - no need to remember the order of arguments
ajax({
    url: '/teams/123',
    onSuccess: () => {},
    method: 'GET',
    onError: () => {}
});