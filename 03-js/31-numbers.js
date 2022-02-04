/*
    HTML forms with number input - when we read we get string
    "1.25" -> 1
    "1.25" -> 1.25
    round(): 1.25 -> 1, 1.75 -> 2
    ceil(): 1.25 -> 2
    floor(): 1.75 -> 1
    isNaN(): to test NaN value
    100.234567 -> "100.23" (toFixed - how many decimal places should be in the result)
*/

console.log(parseInt("1.25")); // prints number 1
console.log(parseFloat("1.25")); // prints float number 1.25

console.log(Math.round(1.25)); // 1
console.log(Math.round(1.75)); // 2

console.log(Math.ceil(1.25)); // 2
console.log(Math.floor(1.75)); // 1

const transferAmount = 100.234567
console.log(transferAmount.toFixed(2)) // 100.23
console.log(transferAmount.toFixed(3)) // 100.235

// generates a random number between [0,1]
console.log(Math.random());

// NaN is not comparable
console.log(1*'hello' === NaN);
console.log(NaN === NaN); // false
console.log(isNaN(1*'hello')); // true
console.log(isNaN(NaN)); // true