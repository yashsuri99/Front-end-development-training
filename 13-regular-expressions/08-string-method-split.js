// EXERCISE: Check MDN on how to use String split() method
// Split a string into substrings based on some delimiter pattern / delimiter string

const strToMatch = 'hello world 123 how are 456 you i 789 am fine';
const splits = new RegExp("[0-9]+");

console.log(strToMatch.split(splits));