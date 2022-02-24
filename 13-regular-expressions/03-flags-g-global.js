// g - global match (find all occurences of the pattern)
const strToMatch = 'clearfix alert-success text-bold alert-small';

// Step 1: use String match() rather than test() with /alert-\w+/ and /alert-\w+/g
// results is an array of matches.
const alertPat1 = /alert-\w+/, alertPat2 = /alert-\w+/g;
let results = strToMatch.match(alertPat1);
console.log(results[0]);

let result2 = strToMatch.match(alertPat2);
console.log(result2[0]);
console.log(result2[1]);
console.log('number of items in result 2 = ' , result2);
// Step 2: .index is index of first match - if you want extra info for each match, use exec()
console.log(results.index); // index 9 is where the 'alert-success' comes

// Step 3: constructor form uses "ig" as flag
const alertPat3 = new RegExp("alert-\\w+","ig");
console.log(strToMatch.match(alertPat3))
// EXERCISE: Explore /m flag too