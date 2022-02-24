// literal syntax
// Step 1: Create an Indian Mobile number pattern using literal syntax and test it
// [6,7,8,9] is a set of characters - 6/7/8/9
// ^ -> match the first character 
// $ -> match until the last character

const mobilePat1 = /^[6789][0-9]{9}$/;
console.log(mobilePat1.test("7123456789"));  //true
console.log(mobilePat1.test("51234567890"));  //false
// console.log(mobilePat1.test("571234567890")); 

// Step 2: Create an Indian Mobile number pattern using constructor syntax and test it

const mobilePat2 = new RegExp("[6789][0-9]{9}$")
console.log(mobilePat2.test("6789012345"));