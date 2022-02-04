/*
    1. Conver to uppercase, lowercase
    2. split a string based on some delimiter(character)
    3. reverse
    4. concatenate(+)
    5. substring
    6. includes
    7. trim
*/

const word = 'hello';
const upperCaseWord = word.toUpperCase();
console.log(upperCaseWord);

const line = 'Hello world, how are you';
const words = line.split(' ');
console.log(words);

//Aside: reverse a string
//console.log(word.split('').reverse().join());

//Formatting a substring
line.substring(6,11); //this will form a string from index 6-10
console.log(line.substring(6)); //this will form a string from index 6 till the very end of the string

console.log(line.includes('world')); //true
console.log(line.includes('universe')); //false
console.log(line.indexOf('world')); // index 6 (first match)
console.log(line.indexOf('universe')); // -1(not found)

//trim
//this string has leading and trailing spaces
const name = '        John Doe          ';
const trimmedName = name.trim();
console.log(trimmedName)
