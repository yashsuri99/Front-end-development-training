// search is faster than using match but gives only the index of first match (not the match itself)

const strToMatch = 'clearfix alert-success text-bold alert-small';
const strToMatch2 = 'clearfix modal-success text-bold modal-small';
const classPat1 = /alert-\w+/g;

// Step 1: try using serach on both strings
console.log( strToMatch.search( classPat1 ) ); // 9
console.log( strToMatch2.search( classPat1 ) ); // -1 (no match)