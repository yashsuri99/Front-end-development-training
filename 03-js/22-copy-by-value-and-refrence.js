//number,boolean,string -> copied when value is assigned
let x = 1;
let y = x;//copy by value - value of x has been copied to y

x++; //does not affect y

console.log(x,y);

//non primitve are copied by refrence - object, arrays
//creates an object in momory and sets laysChips as arefrence to that object
const laysChips = {
    name: 'Chips',
    price: 30,
};

//copy by refrence - no new object is created. The existing object has a new refrence called laysPartyPack (apart from old refrence laysChips)
const laysPartyPack = laysChips;

laysChips.price += 5;

console.log(laysChips,laysPartyPack);

const emails = [
    'john@example.com',
    'john@gmail.com'
];

const emailsCopy = emails;

emails.push('john@yahoo.com');

console.log(emails,emailsCopy)

//Name of the function is refrence to the function
function sum1(x,y) {
    return(x+y);
}

//sum2 and sum1 are refrence to the same function in memory
const sum2 = sum1;
console.log(sum2(12,13));

console.log(sum1 === sum2);