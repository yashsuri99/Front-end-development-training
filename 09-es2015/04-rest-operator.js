// ... (rest operator)
// ... (spread operator)
// Right now we will see the rest operator

// Rest can be used in 3 situations
// 1. along with the last argument of the function
// the rest operator argument is always an array
const sum = (transform,...args) => {     // no argument can be given after the last rest argument
    console.log(transform)
    console.log(args)

    return args.reduce((acc,item) => acc + transform(item));
};

const result = sum(x=>x*x,12,13,14,15,16,17);
console.log(result);

// 2. during array destructuring
const weekDays = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
];
let first, third, remaining;
[ first, , third, ...remaining ] = weekDays;
console.log( first, third, remaining );

// 3. during object destructuring (ES2018)
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
    wife: 'Jane',
    children: [
        'Jack',
        'Jill'
    ]
};

const { name, address : { city, ...restOfAddress }, ...restOfJohn } = john;
console.log( name, city, restOfJohn, restOfAddress );