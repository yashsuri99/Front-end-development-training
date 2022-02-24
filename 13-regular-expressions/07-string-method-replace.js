// String replace() replaces all occurences of pattern
// a new string with the replacements is returned

const strToMatch = 'clearfix alert-success text-bold alert-small';
const classPat1 = /alert-/g; // g flag to find/replace all occurences

// Step 1: Replace alert- with modal-
console.log(strToMatch.replace(classPat1, 'modal-'));

// Step 2: strings are immutable in JavaScript - all primitive values are immutable - check if source string has changed

// EXERCISE: Understand how this works
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_function_as_a_parameter
const classPat2 = /alert-\w+/g;
const results2 = strToMatch.replace( classPat2, function( match, p1, p2, p3, offset, string ) {
    let afterAlert = match.substr( 6 );
    return p1 >= 10 ? 'modal-' + afterAlert : match;
});
console.log( results2 );