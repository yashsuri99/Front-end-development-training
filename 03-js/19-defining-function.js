function greet (message,name) {
    // in ES2015 - template strings
    // use bacticks(above ta key)
    console.log(`${message} ${name}!`)
}

greet('Good Morning', 'John')
const result = greet('Good Morning', 'Mark')
console.log('result of calling greet is', result) // undefined is returned because the function doesnt return a value
function sum (x,y) {
    return (x+y);
};

console.log('sum of 12 and 13 is', sum(13,13));

const sum2 = (function(x,y) {
    return (x+y);
});

console.log('sum of 12 and 13 is', sum2(12,13));